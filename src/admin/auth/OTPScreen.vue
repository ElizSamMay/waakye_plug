<script setup>
/* eslint-disable */
import {ref} from 'vue';
import {makeApiRequest, RequestMethod} from '@/shared/api_helper.js'
import {fireSuccessAlert, fireFailureAlert} from '@/shared/alert_action.js'
import SolidButton from '@/components/SolidButton.vue';

const props = defineProps({
    email: String,
})

const emits = defineEmits(['otpDone'])
const path = '/auth/verify'
const inputText1 = ref("")
const inputText2 = ref("")
const inputText3 = ref("")
const inputText4 = ref("")
const userHasTypedAllOtp = ref(false)
const isLoading = ref(false);
const isActive = ref(false);


function inputKeyUp(event){
    const regex = /^\d+$/;
    const keyTapped = event.key;
    const nextSibling = event.srcElement.nextElementSibling;
    const prevSibling = event.srcElement.previousElementSibling;
    var completeOtp = true;

    const inputElements = [inputText1, inputText2, inputText3, inputText4]
    const allElementsNotEmpty = inputElements.every((el)=>el.value.length !== 0)
    userHasTypedAllOtp.value = allElementsNotEmpty;

    if (keyTapped.toLowerCase() === 'backspace'){
        if (prevSibling){
            prevSibling.focus()
        }
        return;
    }

    if (!regex.test(keyTapped)){
        event.value = '';
        return;
    }
    
    if (nextSibling){
        nextSibling.focus()
    }

    

    const otpString = `${inputText1.value}${inputText2.value}${inputText3.value}${inputText4.value}`
    
    if (allElementsNotEmpty){
        makeOtpRequest(otpString)
    }

    console.log(allElementsNotEmpty) 
}

function loadButton(value){
     isLoading.value = value;
     isActive.value = !value;
}

async function makeOtpRequest(otp){
    loadButton(true)
    const body = {email: props.email, token: otp}
    try{
    const response = await makeApiRequest(path, RequestMethod.POST, body, {}, false, '')
    loadButton(false)
    if (response.status <= 300){
        emits('otpDone', otp)

    }else{  }
    }catch(e){
       loadButton(false)
    }
    

}



</script>


<template>

    <div class="reset-password-template-container">

        <div class="rem-logo-container">
            <!-- <img src="../../../assets/logo_without_shadow.svg" alt=""> -->
        </div>

        <div class="title-description-container">
            <p class="title-header">OTP Verification</p>
            <p class="regular-blue-text">We have sent a verification code to email address <span class="email-bold">{{ email }}</span> <span class="orange-text">Wrong Email ?</span></p>
        </div>

        <div class="otp-container">
            <input type="text" pattern="\d*"  class="otp-input" maxlength="1" autofocus :onkeyup="inputKeyUp" v-model="inputText1">
            <input type="text" pattern="\d*" class="otp-input" maxlength="1" :onkeyup="inputKeyUp" v-model="inputText2">
            <input type="text" pattern="\d*" class="otp-input" maxlength="1" :onkeyup="inputKeyUp" v-model="inputText3">
            <input type="text" pattern="\d*" class="otp-input" maxlength="1" :onkeyup="inputKeyUp" v-model="inputText4">
        </div>

        <div class="buttons">
            <SolidButton buttonTitle="Submit" @click="$emit('button-tapped')" :enableButton="userHasTypedAllOtp && !isLoading" :isLoading="isLoading"/>
        </div>
    </div>

</template>

<style scoped>

.orange-text{
        color: black;
        font-weight: 300;
    }

.email-bold{
    font-size: 1rem;
    font-weight: bold;
    color: black;
}

input{
    margin-bottom: 0;
}

.otp-input{
    width: 55px;
    height: 55px;
    align-items: center;
    padding: 0 20px;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 8px;
    outline: none;
}

input:focus{
   border: 2px solid rgb(242, 180, 93);

}

.otp-container{
    display: flex;
    gap: 0.5rem;
}

.reset-password-template-container{
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
}

.buttons{
    width: 100%;
}

.title-description-container{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>

<style>
     .title-header{
        font-weight: bold;
        font-size: 32px;
        color: #111827;
        text-align: center;
    }

    .regular-blue-text{
        font-size: 18px;
        color: #111827;
        text-align: center;
        font-weight: 300;
    }
</style>