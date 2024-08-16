
<script setup>
   import { AuthStorageHelper } from '../storage/auth_storage_helper';
   import {ref} from 'vue'
   import {fireWarningPrompt} from '@/shared/alert_action.js'
   import {useRouter} from 'vue-router'
   const userDetails = AuthStorageHelper.getUserDetails()
   const userName = ref(userDetails[AuthStorageHelper.managersFullName])
   const router = useRouter()



   function fireLogout(){
         fireWarningPrompt('Are you sure you want to logout ?', 'Yes, Logout', 'No, Cancel', logout)
   }


   function logout(){
         AuthStorageHelper.clearStorage()
         router.push('/')
   }

   

</script>

<template>
     <div class="main-object-container">

        <div class="name-and-position">
            <div class="name">{{ userName }}</div>
            <div class="position">Manager</div>
        </div>


         <div class="image-holder">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZY3VrdD1lGK4RzcXtje8f7Wtjk24BhCghw&s" alt="">
         </div>

         <div class="image-icon">
            <img src="../../assets/more.svg" alt="">
         </div>

         <div class="line"></div>

         <div class="hover-button"><img src="../../assets/notifications.svg" alt=""></div>
         <div class="hover-button" @click="fireLogout"><img src="../../assets/logout.svg" alt=""></div>
     </div>

</template>


<style scoped>

.main-object-container{
   display: flex;
   gap: 16px;
   align-items: center;
}

   .image-holder{
     width: 55px;
     height: 55px;
     border-radius: 50%;
     background-color: red;
   }

   .image-holder img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
   }

   .name{
     font-weight: bold;
     color: #2E3B52;
     font-size: 14px;
   }

   .position{
      font-weight: bold;
     color: #A6ACBE;
     font-size: 14px;
   }

   .line{
      height: 70px;
      background-color: #EFF4F6;
      width: 1px;
   }

   .hover-button:hover{
         cursor: pointer;
   }


</style>