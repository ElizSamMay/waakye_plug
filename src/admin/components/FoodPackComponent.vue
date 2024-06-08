
<script setup>
/* eslint-disable */

const props = defineProps({
    imageUrl: String,
    ingredients: String,
    foodTitle:String, 
    totalSalesToday: String,
    price: String,
    id: String
})

</script>


<template>
    <div class="main-component-holder">
        <div class="food-holder">
            <img :src="imageUrl" alt="">
        </div>

        <div class="descriptions">
            <div class="food-title">{{ foodTitle }}</div>
            <div class="ingredient">{{ ingredients }}</div>
            <div class="total-sales-today">GHS {{ price }}</div>
        </div>

        <div class="sales-and-edit-button">
            <div class="price-and-desc">
                <div class="price-title">Total Sales Today</div>
                <div class="value">GHS <span>{{ totalSalesToday }}</span></div>
            </div>

            <button  class="edit-button">edit</button>
         
        </div>

    </div>

</template>


<style scoped>
        .main-component-holder{
            background-color: rgb(49, 49, 49);
            border-radius: 16px;
            width: 200px;
            max-height: 400px;
            padding: 64px 16px 16px 16px;
            position: relative;
            color: white;
            margin-top: 82px;
        }

        .sales-and-edit-button{
            display: flex;
            align-items: center;
            justify-content:space-between;
            margin-top: 12px;

        }

        .descriptions{
            color: white;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 8px;
        }

        .descriptions div:nth-child(1){
            font-size: 20px;
            font-weight: bold;
        }

        .descriptions div:nth-child(2){
            color: gray;
        }

        .descriptions div:nth-child(3){
            font-weight: bold;
        }

        .price-title{
            font-size: 12px;
            color: gray;
        }

        .price-and-desc{
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .food-holder{
            background-color: red;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            top: -50px;
            left: 50px;
        }

        .food-holder img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

        span{
            font-weight: bold;
        }

        .edit-button{
            background-color: rgba(72,60,111,1);
            border: none;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            color: white;
        }

        .edit-button:hover{
            cursor: pointer;
        }




</style>