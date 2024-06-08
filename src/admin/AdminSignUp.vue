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
      <p class="title-large">Create Your Restaurant</p>
      <p class="sub-title">Start by creating an account for your restaurant</p>

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

    <div class="right-section">
            <div class="right-holder">
                    <div class="image-holder">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                    </div>
            </div>

    </div>
  </div>
</template>

<style scoped>
.main-template-holder {
background: rgb(0,0,0);
 background: linear-gradient(331deg, rgba(0,0,0,1) 83%, rgba(72,60,111,1) 100%);
  height: 100vh;
  display: flex;
  padding: 32px;
  color: white;
}

.left-section,
.right-section {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title-large {
  font-weight: bold;
  font-size: 32px;
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
  background-color: white;

  border: none;
  padding: 16px;
  border-radius: 32px;

  font-weight: bold;
  font-size: 16px;
  margin-top: 32px;
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
    height: 100%;
    width: 100%;
}

.image-holder img{
    height: 100%;
    width: 100%;
    border-radius: 32px;
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
