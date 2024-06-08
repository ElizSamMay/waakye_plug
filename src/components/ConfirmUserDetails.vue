<script setup>
 /* eslint-disable */
import InputField from '@/components/helperComponents/InputField.vue'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

    const router = useRouter()

    const userName = ref("")
    const location = ref("")
    const phoneNumber = ref("")
    const confirmOrder = ref(false)
    const showNameError = ref(false)
    const showNumberError = ref(false)
    const showLocationError = ref(false)

    function handleValidation(){

    }

    function confirmOrderTapped(){
        router.push('/thank-you')
    }
</script>


<template>

    <div class="main-template-holder">

        <div class="header">
            <p class="title">Confirm User details</p>
            <p class="value">Type in your details</p>
        </div>

        <div class="details">
    <div class="break-down">
        <InputField fieldTitle="Name of Buyer *" valiadateString="Name must not be empty" v-model="userName" @input-change="handleValidation" :showError="showNameError"/>
        <InputField fieldTitle="Phone Number *" valiadateString="Phone number must not be empty" v-model="phoneNumber" @input-change="handleValidation" :showError="showNumberError"/>
        <InputField fieldTitle="Table Number" valiadateString="location must not be empty" v-model="location" @input-change="handleValidation" :showError="showLocationError"/>
    </div>
        </div>
        

        <button class="confirm-order-button" @click="confirmOrderTapped" v-if="!confirmOrder">Confirm Order</button>

    </div>


</template>





<style scoped>
    .main-template-holder{
        padding: 16px;
    }

    .value{
        color: white;
        margin-top: 8px;
    }

    .break-down{
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .confirm-order-button{
        position: fixed;
        bottom: 16px;
        background-color:white ;
        color: rgb(31, 31, 70);
        left: 16px;
        right: 16px;
        border: none;
        padding: 16px;
        border-radius: 32px;
        font-weight: bold;
        font-size: 16px;
    }
</style>