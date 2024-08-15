<script setup>
/* eslint-disable */
import AdminInputField from '@/components/helperComponents/AdminInputField.vue';
import SolidButton from '@/components/SolidButton.vue';
import {ref} from 'vue';
import {makeApiRequest, RequestMethod} from '@/shared/api_helper.js';
import {fireFailureAlert} from '@/shared/alert_action.js'
import {useRouter} from 'vue-router'
import { AuthStorageHelper } from '../storage/auth_storage_helper';

const isLoading = ref(false)
const email = ref("")
const password = ref("")
const path = '/auth/sign-in'
const router = useRouter();
const buttonEnabled = ref(true)



async function logintoHomePage(){
    loadButton(true)
    try{
        const data = {email:email.value, password:password.value}
        const request = await makeApiRequest(path, RequestMethod.POST, data, {}, false, '')
        loadButton(false)
        if (request.status === 201){
            const {data} = request.data;
            AuthStorageHelper.storeUserDetails(data)
            router.push('/dashboard')
        }else{
            loadButton(false)
            fireFailureAlert(request.data.message)
        }
    }catch(e){
        loadButton(false)
        fireFailureAlert('Something happened while logging in, Kindly try again.')
    }
}


function loadButton(value){
     buttonEnabled.value = !value;
     isLoading.value = value
}
</script>



<template>
<div class="main-holder-container">
      
      
      <div id="image-holder">
        <!-- <img src="../../assets/ornament_svg.svg" alt="remlogo" /> -->
      </div>


    <div class="form-holder">

    <h1 id="title-header">Login as an Admin</h1>

    <div class="form">

    <div class="email-container">
        <AdminInputField fieldTitle="Email" valiadateString="Name must not be empty"
        v-model="email" @input-change="handleValidation" :showError="showNameError" />
    </div>

    <div class="user-name">
        <AdminInputField fieldTitle="Password" valiadateString="Name must not be empty"
        v-model="password" @input-change="handleValidation" :showError="showNameError" />
    </div>

    <SolidButton buttonTitle="Login" :enableButton="buttonEnabled" @button-tapped="logintoHomePage" :isLoading="isLoading"/>
    </div>
    

    

    <div class="remember-me-component-space">
          <!-- <CheckboxComponent :isChecked="forgotMeChecked" text="Remember me" @click="checkTapped"/>
          <div class="text-gray-300 action-text" @click="goToForgotPassword">Forgot Password</div> -->
    </div>

    <!-- <button class="orange-button" @click="logintoHomePage"><div class="spinner" v-if="isloading"></div>Login</button> -->
     
    </div>
    
    <!-- <div class="bottom-text">© 2024 Rem . Alrights reserved.</div> -->
    <!-- <a-spin /> -->
    
  </div>
</template>

<style scoped>

.main-holder-container, .form-holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.user-name{
    width: 100%;
}

.form{
    display: flex;
    flex-direction: column;
    gap: 16px;
}

#title-header{
    text-align: center;
}

</style>