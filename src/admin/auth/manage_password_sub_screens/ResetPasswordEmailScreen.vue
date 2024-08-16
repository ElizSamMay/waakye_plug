

<script setup>
    /* eslint-disable */
    import {ref} from 'vue';
    import InputTextContainer from '@/components/InputTextContainer.vue';
    import SolidButton from '@/components/SolidButton.vue';
    import BorderedButton from '@/admin/components/BorderedButton.vue';
    import {makeApiRequest, RequestMethod} from '@/shared/api_helper.js';
    import {fireFailureAlert} from '@/shared/alert_action.js'

    const emits = defineEmits(['operation-completed'])
    const email = ref('')
    const isLoading = ref(false)
    const isActive = ref(false)
    const path = '/auth/forgot-password';

    
    function handleInputTyped(input){
        email.value = input
        isActive.value = input.length > 0;
    }

    async function submitEmail(){
         loadButton(true)
         const body = {email: email.value}
         try{  
            const makeForgotPasswordRequest = await makeApiRequest(path, RequestMethod.POST, body, {}, false, '')
            loadButton(false)
            if (makeForgotPasswordRequest.status == 201){
                emits('operation-completed', email.value)
            }else{
                fireFailureAlert(makeForgotPasswordRequest.data.message)
            }

         } catch(e){
            loadButton(false)
            fireFailureAlert("Operation Failed, Kindly Retry")
         }
    }


    function loadButton(value){
         isLoading.value = value;
         isActive.value = !value;
         
    }

    
</script>


<template>
    <div class="reset-password-template-container">

            <div class="rem-logo-container">
                <img src="../../../assets/reset_password.svg" alt="">
            </div>

            <div class="title-description-container">
                <p class="title-header">Reset your password</p>
                <p class="regular-blue-text">Enter your email address and we’ll send you password reset otp code.</p>
            </div>

            <div class="email-container">
                <InputTextContainer title="Registered Email" placeholder="Enter your registered email" @onInputTapped="(value)=>handleInputTyped(value)"/>
            </div>

            <div class="buttons">
                <SolidButton buttonTitle="Reset Password" @button-tapped="submitEmail" :enableButton="isActive" :isLoading="isLoading"/>
                <BorderedButton buttonTitle="Back To Login" @button-tapped="$emit('back-tapped')"/>
            </div>
    </div>  
</template>


<style scoped>

    

    .email-container{
        width: 100%;
    }

    

</style>

<style>
    .title-header{
        font-weight: bold;
        font-size: 32px;
        color: var(--app-deep-blue);
        text-align: center;
    }

    .regular-blue-text{
        font-size: var(--font-size-18);
        color: var(--app-deep-blue);
        text-align: center;

    }

    .title-description-container{
        display: flex;
        flex-direction: column;
        gap: var(--app-gap-16);
    }

    .reset-password-template-container{
        display: flex;
        flex-direction: column;
        gap: 32px;
        max-width: var(--app-width-500);
        align-items: center;
    }

    .buttons{
        display: flex;
        gap: 16px;
        width: 100%;
        flex-direction: column;
    }
</style>