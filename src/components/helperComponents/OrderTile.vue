


<script setup>
import {purchaseItemStore} from '@/store/store.js'

function increaseQuantity(){
    const quantity = purchaseItemStore.item.quantity + 1
    purchaseItemStore.updateQuantity(quantity)
}



function decreaseQuantity(){
    const quantity = purchaseItemStore.item.quantity - 1
    const updatedQuantity = (quantity <= 1) ? 1 : quantity;
    purchaseItemStore.updateQuantity(updatedQuantity)
}

</script>


<template>

<div class="main-dish-container">

<div class="first-section">
    <div class="image-container">
        <img src="https://eatwellabi.com/wp-content/uploads/2021/09/Waakye-13.jpg" alt="">
    </div>

    <div class="descriptions">
        <p class="title-font">{{ purchaseItemStore.item.title }}</p>
        <p class="description">Waakye</p>
        <p class="price">GHS {{ purchaseItemStore.item.subtotal }}</p>
    </div>
</div>


    <div class="increase-decrease-buttons">
        <div class="decrease button" @click="decreaseQuantity">-</div>
        <p class="number">{{ purchaseItemStore.item.quantity }}</p>
        <div class="increase button" @click="increaseQuantity">+</div>
    </div>


</div>

</template>


<style scoped>
    .main-dish-container{
        padding: 16px;
        background-color: white;
        border-radius: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(31, 31, 70);
    }

    .first-section{
        display: flex;
        gap: 16px;
        align-items: center;
    }

    .image-container{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .image-container img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }

    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        width: 24px;
        border-radius: 4px;
        border: 2px solid rgb(31, 31, 70);
        font-size: 12px;
        font-weight: bold;
    }

    .number{
        font-weight: bold;
    }

    .descriptions{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .descriptions p:nth-child(1){
        font-size: 14px;
        font-weight: bold;
       
    }

    .descriptions p:nth-child(2){
        font-size: 12px;
        color: gray;
    }

    .descriptions p:nth-child(3){
        font-size: 12px;
        font-weight: bold;
    }

    .increase-decrease-buttons{
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .title-font{
        color: rgb(31, 31, 70);
    }
</style>