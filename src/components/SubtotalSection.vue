<script setup>
    // import {useRouter} from 'vue-router'
    /* eslint-disable */
    import OrderTile from '@/components/helperComponents/OrderTile.vue'
    import {useRouter} from 'vue-router';
    import InputField from '@/components/helperComponents/InputField.vue'
    import PriceDisplay from '@/components/helperComponents/PriceDisplay.vue'
    import { purchaseItemStore} from '@/store/store.js'
    import {onMounted, ref} from 'vue';
    import LoaderView from "@/components/helperComponents/LoaderView.vue"
    import {makeApiRequest, RequestMethod} from '@/shared/api_helper.js'
    import {fireSuccessAlertWithAction, fireFailureAlert} from '@/shared/alert_action.js'
    import { purchaseOrderItems } from '@/store/store.js'

    const router = useRouter()
    const isLoading = ref(false)
    const userName = ref("")
    const location = ref("")
    const phoneNumber = ref("")
    const confirmOrder = ref(false)
    const showNameError = ref(false)
    const showNumberError = ref(false)
    const showLocationError = ref(false)
    const pricesValue = ref(purchaseOrderItems.getDisplayPrices())

    onMounted(()=>{
        purchaseItemStore.init()
        purchaseItemStore.performUpdate()
    })


    async function handleStartButtonTapped(){
        // try{
        // isLoading.value = true
        // const order = await makeApiRequest("/order", RequestMethod.POST, purchaseItemStore.getDetailsOfDelivery(userName.value, location.value, phoneNumber.value), {}, false, "")
        // isLoading.value = false
        // if (order.status === 200){
        //     fireSuccessAlertWithAction("Order Placed", ()=>{
        //         router.push('/thank-you')
        //     })
        // }else{
        //   fireFailureAlert("Order placing failed, please try again.")
        // }} catch(err){
        //     fireFailureAlert("Order placing failed, please try again.")
        // }
        
        router.push('/confirm-details')
    }


    function goBack(){
        router.go(-1)
    }

    function confirmOrderTapped(){
            
            confirmOrder.value = true
        
    }

    function validate(){
        if (userName.value.length < 1){
            showNameError.value = true
        }

        if (location.value.length < 1){
            showLocationError.value = true
        }

        if (phoneNumber.value.length < 1){
            showNumberError.value = true
        }
    }

    
    function closeConfirmOrderTapped(){
            confirmOrder.value = false
        
    }

</script>

<template>
    <div class="container-holder">
    <div class="top-section">
        <button class="back-button" @click="goBack">Back</button>
        <div class="title">Order Details</div>

        <div class="order-tile">
            <div class="items">
                <div v-for="item in purchaseOrderItems.items">
                    <OrderTile :order="item"/>
                </div>
                
            </div>
        </div>
    </div>

    <div class="order-details" v-if="confirmOrder">
         <button class="close-button" @click="closeConfirmOrderTapped">
        X
      </button>
        <div class="prices">
            <div v-for="price in pricesValue" :key="price">
                <PriceDisplay :pricing="price"/>
            </div>
        
        </div>
        <button class="confirm-order-button confirm" @click="handleStartButtonTapped">Confirm Price</button>
    </div>
     <button class="confirm-order-button" @click="confirmOrderTapped" v-if="!confirmOrder">Confirm Order</button>

    </div>
    
    
    <LoaderView message="Creating order please wait ..." v-if="isLoading"/>
</template>



<style scoped>

  .close-button {
  color: rgb(31, 31, 70);
  background-color:transparent;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgb(31, 31, 70);
  position: absolute;
  right: 16px;
  top: 16px
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

     .confirm{
     color: white;
     background-color: rgb(31, 31, 70);
   }


    .container-holder{
        /* padding: 16px; */
        min-height: 100vh;
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
        background-color: white;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 300px;
        border-radius: 16px 16px 0 0;
        padding-top: 24px;
    }

    .prices{
        padding: 32px 16px 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .items{
        display: flex;
        flex-direction: column;
        gap:16px;
    }

</style>


<style> 
    .title{
        font-size: 16px;
        font-weight: bold;
        color: white;
    }
</style>