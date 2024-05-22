<script setup>
    // import {useRouter} from 'vue-router'
    import OrderTile from '@/components/helperComponents/OrderTile.vue'
    import {useRouter} from 'vue-router';
    import {defineProps, ref} from 'vue'
    import InputField from '@/components/helperComponents/InputField.vue'
    import PriceDisplay from '@/components/helperComponents/PriceDisplay.vue'

    const props = defineProps({
        combo: Object
    })

    const router = useRouter()

    function handleStartButtonTapped(){
        router.push('/thank-you')
    }

    const pricings = ref([
    {title: "subtotal", value: props.combo?.price },
    {title: "Delivery Fee", value: 13},
    {title: "Total", value: 55}
    ])

</script>

<template>
    <div class="container-holder">
    <div class="top-section">
        <button class="back-button" @click="$emit('handle-back-tapped')">Back</button>
        <div class="title">Order Details</div>

        <div class="order-tile">
            <div>
                <OrderTile :food="props.combo"/>
            </div>
        </div>
    </div>


    <div class="break-down">
        <InputField fieldTitle="Name of Buyer *" v-model="className" @input-change="handleValidation"/>
        <InputField fieldTitle="Phone Number *" v-model="className" @input-change="handleValidation"/>
        <InputField fieldTitle="Land mark (Optional)" v-model="className" @input-change="handleValidation"/>
    </div>

    <div class="order-details">
        <div class="prices">
            <div v-for="price in pricings" :key="price">
                <PriceDisplay :pricing="price"/>
            </div>
        
        </div>
        <button class="confirm-order-button" @click="handleStartButtonTapped">Confirm Order</button>
    </div>

    </div>
    
    
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