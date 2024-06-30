<script setup>
 /* eslint-disable */
import {useRouter} from 'vue-router'
import AdminInputField from "@/components/helperComponents/AdminInputField.vue"

const router = useRouter()

function gotoDashboard(){
  router.push('/dashboard')
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
      <p class="title-large">Create Your Restaurant</p>
  

      <div class="break-down">
        <AdminInputField
          fieldTitle="Name of restaurant"
          valiadateString="Name must not be empty"
          v-model="userName"
          @input-change="handleValidation"
          :showError="showNameError"
        />
        <AdminInputField
          fieldTitle="Email"
          valiadateString="Phone number must not be empty"
          v-model="phoneNumber"
          @input-change="handleValidation"
          :showError="showNumberError"
        />
        <AdminInputField
          fieldTitle="Phone number"
          valiadateString="location must not be empty"
          v-model="location"
          @input-change="handleValidation"
          :showError="showLocationError"
        />
        <AdminInputField
          fieldTitle="Password"
          valiadateString="location must not be empty"
          v-model="location"
          @input-change="handleValidation"
          :showError="showLocationError"
        />
      </div>

      <button
        class="buttom-button"
        @click="gotoDashboard"
     
      >
        Create Restaurant
      </button>
    </div>

    
  </div>
</template>

<style scoped>
.main-template-holder {
  height: 100vh;
  display: flex;

}


.right-section {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.left-section{
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

.right-holder{
   
    width: 100%;
    height: 100%;
    border-radius: 32px;
    padding: 32px;
}
.right-section{
    padding: 32px;
   
}

.image-holder{
   background-color: red;
}

.image-holder img{
   
   
}

@media screen and (max-width: 950px) {
    .right-section{
        display:none;
    }

    .left-section{
        width: 100%;
    }

    .break-down{
        width: 100%;
    }

    .buttom-button{
        width: 100%;
    }

    .title-large{
        text-align: left;
    }

    .sub-title{
        margin-top: 8px;
    }

   

}

</style>
