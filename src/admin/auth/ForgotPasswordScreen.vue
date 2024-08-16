

<script setup>
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';
    import ResetPasswordEmailScreen from './manage_password_sub_screens/ResetPasswordEmailScreen.vue';
    import OTPScreen from './OTPScreen.vue';
    import ResetPasswordSuccessScreen from './manage_password_sub_screens/ResetPasswordSuccessScreen.vue';
    // import {UserPasswordResetState} from './screen_management_states/reset_password_states.js'
    import UpdatePassword from './manage_password_sub_screens/UpdatePassword.vue';
import { Constants } from '@/shared/constants';
    
    const router = useRouter()
    const passwordResetStates = ref(Constants.userTypingEmail);
    const email = ref('')
    const otp = ref('')

    function resetButtonTapped(value){
         passwordResetStates.value = Constants.usertypingOtp;
         email.value = value;

    }

    function submitButtonTapped(){
        // passwordResetStates.value = UserPasswordResetState.userUpdatingPassword;
    }

    function goBackToLogin(){
         router.go(-1)
    }

    function otpDone(value){
        passwordResetStates.value = Constants.userUpdatingPassword
        otp.value = value;
    }

    function updatePasswordTapped(){
        passwordResetStates.value = Constants.userPasswordResetSuccessful;
    }

    function wrongEmailTapped(){
         passwordResetStates.value = Constants.userTypingEmail;
    }




</script>

<template>

    <div class="forgot-password-template">
        <ResetPasswordEmailScreen v-if="passwordResetStates == Constants.userTypingEmail" @reset-button-tapped="resetButtonTapped" @back-tapped="goBackToLogin" @operation-completed="(value)=>resetButtonTapped(value)"/>
        <OTPScreen :email="email" v-if="passwordResetStates == Constants.usertypingOtp" @button-tapped="submitButtonTapped" :onOtpDone="(value)=>otpDone(value)" @wrong-email-tapped="wrongEmailTapped"/>
        <ResetPasswordSuccessScreen v-if="passwordResetStates == Constants.userPasswordResetSuccessful" @button-tapped="goBackToLogin"/>
        <UpdatePassword v-if="passwordResetStates == Constants.userUpdatingPassword"  :otp="otp" :email="email" @on-otp-succeeded="updatePasswordTapped"/>

        <!-- <div class="bottom-text">© 2024 Rem . Alrights reserved.</div> -->

    </div>

</template>

<style scoped>

.forgot-password-template{
     position: relative;
     width: 100vw;
     height: 100vh;
     /* background-image: url('../../assets/rem_background_pattern.svg'); */
     background-repeat: no-repeat;
     background-size: cover;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: white;
    
}



/* .back-ground-container img{
    width: 100%;
    height: 100%;
} */


</style>