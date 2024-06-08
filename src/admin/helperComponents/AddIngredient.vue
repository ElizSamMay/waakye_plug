


<script setup>
 /* eslint-disable */
import InputField from '@/components/helperComponents/InputField.vue';
import PriceComponent from '@/admin/components/PriceComponent.vue'
import {ref} from 'vue'

const ingredientName = ref("")
const ingredientPrice = ref("")



</script>


<template>
    <div class="main-template-holder">
        <div class="content-holder">
            
            <div class="close-button" @click="$emit('close-modal')">
                X
            </div>

            <div class="title-holder">
                Add Ingredient
            </div>

            <div class="input-field">
                <InputField fieldTitle="Name of ingredient" isLight="true" fieldPlaceholder="egs. chicken" v-model="ingredientName"/>
            </div>

            <div class="price">
                <PriceComponent currency="GHS" v-model="ingredientPrice"/>
            </div>

                <button class="page-action-button" @click="$emit('add-ingredient', [{name: ingredientName, price: ingredientPrice }])">
                   Add Ingredient
                </button>

        </div>
    </div>

</template>


<style scoped>

    .main-template-holder{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .content-holder{
        margin: auto;
        min-width: 20%;
        padding: 16px;
        background-color: white;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        position: relative;
    }

    .title-holder{
        color: rgb(41, 41, 70);
        font-weight: bold;
        font-size: 16px;
    }

    button{
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>