<script setup>
    /* eslint-disable */
    import {ref} from 'vue';
    import InputTextContainer from '@/components/InputTextContainer.vue';
    import SolidButton from '@/components/SolidButton.vue';
    // import BorderedButton from '@/components/BorderedButton.vue';
    import ValidationComponent from '@/components/ValidationComponent.vue';
    import { makeApiRequest, RequestMethod } from '@/shared/api_helper.js';
    import {fireFailureAlert, fireSuccessAlert} from '@/shared/alert_action.js';
    
    const passwordLengthReached = ref(false)
    const passwordContainsNumbers = ref(false)
    const passwordContainsUppercase = ref(false)
    const passwordContainsLowercase = ref(false)
    const passwordText = ref("")
    const confirmPasswordText = ref("")
    const inputType = ref("password")
    const imageString = ref("https://rem-bucket-default.nyc3.cdn.digitaloceanspaces.com/static/eye_black.svg")
    const path = '/auth/reset-password'
    const isLoading = ref(false)
    const enableButton = ref(false)

    const props = defineProps({
        otp: String,
        email: String
    })

    const emits = defineEmits(['on-otp-succeeded'])

    function handleTap(event){
        passwordText.value = event;
        handleValidation(passwordText.value)
        validate()

    }

    function handleConfirmPasswordTyped(event){
         confirmPasswordText.value = event;
         validate()
    }

    function validate(){
        enableButton.value = passwordText.value == confirmPasswordText.value;
    }

   function handleValidation(text){
    const numberRegex = /\d/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex  = /[a-z]/;
    const characterCount = 8;
    
    passwordLengthReached.value = text.length >= characterCount;
    passwordContainsNumbers.value = numberRegex.test(text)
    passwordContainsUppercase.value = upperCaseRegex.test(text)
    passwordContainsLowercase.value = lowerCaseRegex.test(text)

   }

   function eyeIconTapped(){
     inputType.value = inputType.value === 'password' ? "text" : 'password';
     imageString.value = inputType.value === 'password' ? "https://rem-bucket-default.nyc3.cdn.digitaloceanspaces.com/static/eye_black.svg" : "https://rem-bucket-default.nyc3.cdn.digitaloceanspaces.com/static/eye-off.svg"
   }

   async function updatePassword(){
    try{
    isLoading.value = true
    enableButton.value = false
     const body = {otpCode: props.otp, email: props.email, password: passwordText.value}
     const response = await makeApiRequest(path, RequestMethod.POST, body, {}, false, '')
     isLoading.value = false
     enableButton.value = true
     if (response.status === 201){
        emits('on-otp-succeeded')
     }else{
        fireFailureAlert("Password reset failed, please try again")
     }}catch(e){
        isLoading.value = false
        fireFailureAlert("Password reset failed, please try again")
     }
   }

    


    
</script>


<template>
    <div class="reset-password-template-container">

            <div class="rem-logo-container">
                <img src="../../../assets/password.svg" alt="">
            </div>

            <div class="title-description-container">
                <p class="title-header">Update your Password</p>
                <p class="regular-blue-text">Set your new password with minimum 8 characters with a combination of letters and numbers.</p>
            </div>

            <div class="email-container">
                <InputTextContainer title="New Password" placeholder="********" :modelValue="passwordText" @onInputTapped="(el)=>handleTap(el)" @icon-tapped="eyeIconTapped" :inputType="inputType" :imageString="imageString"/>
                
                <div class="validator">
                    <div class="validator-holder">
                    <ValidationComponent imageString="tick-circle.svg" title="8 Characters" :isPositive="passwordLengthReached"/>
                    <ValidationComponent imageString="tick-circle.svg" title="Number (0-9)" :isPositive="passwordContainsNumbers"/>
                </div>

                <div class="validator-holder">
                    <ValidationComponent imageString="tick-circle.svg" title="Uppercase letter (A-Z)" :isPositive="passwordContainsUppercase"/>
                    <ValidationComponent imageString="tick-circle.svg" title="Lowecase letter (a-z)" :isPositive="passwordContainsLowercase"/>
                </div>
                </div>
                
               
                <InputTextContainer title="Confirm New Password" placeholder="Re-type your new password" @icon-tapped="eyeIconTapped" :inputType="inputType" :modelValue="confirmPasswordText" @onInputTapped="(el)=>handleConfirmPasswordTyped(el)" :imageString="imageString"/>
            </div>

            <div class="buttons">
                <SolidButton buttonTitle="Submit" @button-tapped="updatePassword" :isLoading="isLoading" :enableButton="enableButton"/>
            </div>
    </div>  
</template>

<style scoped>

    .validator-holder{
        display: flex;
        justify-content: space-between;
    }

    .email-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    input{
        margin-bottom: 0;
    }

    .validator{
        display: flex;
        flex-direction: column;
        gap:8px;
    }
    

</style>