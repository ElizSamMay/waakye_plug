<script setup>
/* eslint-disable */
import { useRouter } from 'vue-router'
import AdminInputField from "@/components/helperComponents/AdminInputField.vue"
import SolidButton from '@/components/SolidButton.vue';
import { ref } from 'vue';
import { RequestMethod, makeApiRequest } from '@/shared/api_helper.js';
import { fireFailureAlert } from '@/shared/alert_action.js';
import OTPScreen from './auth/OTPScreen.vue';
import { Constants } from '@/shared/constants';
import SignIn from './auth/SignIn.vue';
import { onMounted } from 'vue';
import { AuthStorageHelper } from './storage/auth_storage_helper';
import { AdminRouteManager } from './routeManager/routeManager';

const router = useRouter()
const isButtonEnabled = ref(true)
const isButtonLoading = ref(false)
const restaurantName = ref('')
const phoneNumber = ref('')
const password = ref('')
const email = ref('')
const managersName = ref('')
const path = 'auth/sign-up'
const currentScreen = ref(Constants.signInScreenConstant)

onMounted(()=>{
    const userDetails = AuthStorageHelper.getUserDetails()
    const token = userDetails[AuthStorageHelper.token]
    const isLoggedIn = token;
    if (isLoggedIn){
        router.push('/dashboard')
    }
})


async function signup() {
  beginLoading(true)

  const data = {
    restaurantName: restaurantName.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    password: password.value,
    managersFullName: managersName.value,
    prefix: '233'
  }

  try {
    const request = await makeApiRequest(path, RequestMethod.POST, data, {}, false, '')
    beginLoading(false)
    if (request.status == 201) {
      const {data} = request.data;
      proceedToLogin()
    } else {
      fireFailureAlert(request.data.message)
    }
  }catch(e){
    beginLoading(false)
    fireFailureAlert(e?.response?.data?.message ?? "Something happened while Logging in, please try again.")
    console.log(e)
  }
}

function beginLoading(value) {
  isButtonEnabled.value = !value
  isButtonLoading.value = value
}

function proceedToLogin(){
     currentScreen.value = Constants.otpScreenConstant;
}


function otpCompleted(){
   router.push('/dashboard')
}

function handleSignInTapped(){
      currentScreen.value = Constants.signUpScreenConstant;
}
function handleSignUpTapped(){
   currentScreen.value = Constants.signInScreenConstant;
}
</script>

<template>
  <div class="main-template-holder">

    <div class="left-section">

      <img src="../assets/sign-up-image.svg" alt="">

      <div class="description-title-col">
        <p class="mini-title">Let's get you on</p>
        <p class="desc-title">Sign up to experience a new digitalization chapter with us</p>
      </div>


    </div>

    <div class="right-section">

      <div class="top-section" v-if="currentScreen === Constants.signInScreenConstant">
                <div class="empty"></div>
                <div class="text-holder" @click="handleSignInTapped"><span class="gray-text">Don't have an account ?</span><span class="bold-text"> Sign up</span></div>
      </div>

      <div class="top-section" v-if="currentScreen === Constants.signUpScreenConstant">
                <div class="empty"></div>
                <div class="text-holder" @click="handleSignUpTapped"><span class="gray-text">Already have an account ?</span><span class="bold-text"> Sign In</span></div>
      </div>

      <div v-if="currentScreen === Constants.signUpScreenConstant" class="template-container">
        <p class="title-large">Create Your Restaurant</p>


      <div class="break-down">
        <AdminInputField fieldTitle="Name of restaurant" valiadateString="Name must not be empty"
          v-model="restaurantName" @input-change="handleValidation" :showError="showNameError" />
        <AdminInputField fieldTitle="Full Name of Manager" valiadateString="Name must not be empty"
          v-model="managersName" @input-change="handleValidation" :showError="showNameError" />
        <AdminInputField fieldTitle="Email" valiadateString="Email must not be empty" v-model="email"
          @input-change="handleValidation" :showError="showNumberError" />
        <AdminInputField fieldTitle="Phone number" valiadateString="phone number must not be empty"
          v-model="phoneNumber" @input-change="handleValidation" :showError="showLocationError" />
        <AdminInputField fieldTitle="Password" valiadateString="Password must not be empty" v-model="password"
          @input-change="handleValidation" :showError="showLocationError" />
      </div>

      <div class="solid-button-enclosure">
        <SolidButton button-title="Create Restaurant" :enable-button="isButtonEnabled" :is-loading="isButtonLoading"
          @button-tapped="signup" />
      </div>
      </div>

      <div v-if="currentScreen === Constants.otpScreenConstant">
          <OTPScreen :email="email" @otp-done="otpCompleted"/>
      </div>

      <div v-if="currentScreen === Constants.signInScreenConstant" class="sign-in">
        <SignIn />
      </div>
      

    </div>


  </div>
</template>

<style scoped>
.main-template-holder {
  height: 100vh;
  display: flex;

}

.sign-in{
  width: 100%;
}

.template-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.solid-button-enclosure {
  width: 70%;
  margin-top: 16px;
}


.right-section {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
}

.top-section{
    position: absolute;
    top: 32px;
    right: 32px;
}

.left-section {
  width: 65%;
  background-color: #FDB149;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

}

.title-large {
  font-weight: bold;
  font-size: 32px;
  padding-bottom: 16px;
}

.break-down {
  width: 70%;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.buttom-button {
  width: 70%;
  background-color: black;
  border: none;
  padding: 16px;
  border-radius: 6px;
  font-size: 16px;
  margin-top: 32px;
  color: white;
}

.right-holder {

  width: 100%;
  height: 100%;
  border-radius: 32px;
  padding: 32px;
}

.right-section {
  padding: 32px;

}

.image-holder {
  background-color: red;
}

.bold-text{
   font-weight: bold;
}
.bold-text:hover{
padding: 3px;
transition: 0.5s;
text-decoration: underline;
}

.text-holder:hover{
    cursor: pointer;
}

.image-holder img {}

@media screen and (max-width: 950px) {
  .right-section {
    display: none;
  }

  .left-section {
    width: 100%;
  }

  .break-down {
    width: 100%;
  }

  .buttom-button {
    width: 100%;
  }

  .title-large {
    text-align: left;
  }

  .sub-title {
    margin-top: 8px;
  }

}
</style>
