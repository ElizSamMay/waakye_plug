<script setup>
    // import {useRouter} from 'vue-router'
    import OrderTile from '@/components/helperComponents/OrderTile.vue'
    import {useRouter} from 'vue-router';
    import InputField from '@/components/helperComponents/InputField.vue'
    import PriceDisplay from '@/components/helperComponents/PriceDisplay.vue'
    import { purchaseItemStore } from '@/store/store.js'
    import {onMounted, ref} from 'vue';
    import LoaderView from "@/components/helperComponents/LoaderView.vue"
    import {makeApiRequest, RequestMethod} from '@/shared/api_helper.js'
    import {fireSuccessAlertWithAction, fireFailureAlert} from '@/shared/alert_action.js'

    const router = useRouter()
    const isLoading = ref(false)
    const userName = ref("")
    const location = ref("")
    const phoneNumber = ref("")

    onMounted(()=>{
        purchaseItemStore.init()
        purchaseItemStore.performUpdate()
    })


    async function handleStartButtonTapped(){
        try{
        isLoading.value = true
        const order = await makeApiRequest("/order", RequestMethod.POST, purchaseItemStore.getDetailsOfDelivery(userName.value, location.value, phoneNumber.value), {}, false, "")
        isLoading.value = false
        if (order.status === 200){
            fireSuccessAlertWithAction("Order Placed", ()=>{
                router.push('/thank-you')
            })
        }else{
          fireFailureAlert("Order placing failed, please try again.")
        }} catch(err){
            fireFailureAlert("Order placing failed, please try again.")
        }
        
    }


    function goBack(){
        router.go(-1)
    }



</script>

<template>
    <div class="container-holder">
    <div class="top-section">
        <button class="back-button" @click="goBack">Back</button>
        <div class="title">Order Details</div>

        <div class="order-tile">
            <div>
                <OrderTile :food="purchaseItemStore.item"/>
            </div>
        </div>
    </div>


    <div class="break-down">
        <InputField fieldTitle="Name of Buyer *" v-model="userName" @input-change="handleValidation"/>
        <InputField fieldTitle="Phone Number *" v-model="phoneNumber" @input-change="handleValidation"/>
        <InputField fieldTitle="Land mark (Optional)" v-model="location" @input-change="handleValidation"/>
    </div>

    <div class="order-details">
        <div class="prices">
            <div v-for="price in purchaseItemStore.purchaseDetails" :key="price">
                <PriceDisplay :pricing="price"/>
            </div>
        
        </div>
        <button class="confirm-order-button" @click="handleStartButtonTapped">Confirm Order</button>
    </div>

    </div>
    
    <LoaderView message="Creating order please wait ..." v-if="isLoading"/>
</template>



<style scoped>

    .confirm-order-button{
        position: absolute;
        bottom: 16px;
        background-color: white;
        left: 16px;
        right: 16px;
        border: none;
        padding: 16px;
        border-radius: 32px;
        font-weight: bold;
        font-size: 16px;
    }
    .container-holder{
        /* padding: 16px; */
       height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .top-section{
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .back-button{
        background-color: white;
        border: none;
        width: 100px;
        padding: 8px 0;
        border-radius: 8px;
        font-weight: bold;
    }

    .break-down{
        height: 90vh;
        width: 100%;
        background-color: white;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .order-details{
        background-color: rgb(31, 31, 70);
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 250px;
        border-radius: 16px 16px 0 0;
    }

    .prices{
        padding: 32px 16px 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

</style>


<style> 
    .title{
        font-size: 16px;
        font-weight: bold;
        color: white;
    }
</style>