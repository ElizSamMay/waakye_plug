<script setup>
/* eslint-disable */
import CustomPackSelect from "@/components/helperComponents/CustomPackSelect.vue";
import { ingredients } from "@/model/waakye_combo.js";
import SelectedOrderTile from "@/components/helperComponents/SelectedOrderTile.vue"
import { ref } from "vue";
import {purchaseItemStore} from '@/store/store.js';
import { useRouter } from 'vue-router'



const waakyeIngredients = ref(ingredients);
const selectedQuantifiedItems = ref(getSelectedWithQuantity());
const userSelectsItems = ref(false);
const router = useRouter()



function handleIngredientTapped(args) {

  const ingredient = args[0];

  for (let i = 0; i < waakyeIngredients.value.length; i++) {
    if (waakyeIngredients.value[i].id === ingredient.id) {
        waakyeIngredients.value[i].isSelected = !waakyeIngredients.value[i].isSelected;
    }
  }
}
function getSelectedIngredients(){
     const selectedIngredients = waakyeIngredients.value.filter((ingredient)=>ingredient.isSelected == true)
     return selectedIngredients;
  }

  function getSelectedWithQuantity(){
    const items = getSelectedIngredients()
    const mappedItems = items.map((item)=>{ return {id:item.id, title: item.title, count: item.quantity, price: item.price}});
    return mappedItems;
}

function increase(args){
    for (let i = 0; i < selectedQuantifiedItems.value.length; i++) {
    if (selectedQuantifiedItems.value[i].id === args[0].id) {
        selectedQuantifiedItems.value[i].count += 1
    }
  }
}

function decrease(args){
    for (let i = 0; i < selectedQuantifiedItems.value.length; i++) {
    if (selectedQuantifiedItems.value[i].id === args[0].id) {
        selectedQuantifiedItems.value[i].count = selectedQuantifiedItems.value[i].count < 1 ? 0 :  selectedQuantifiedItems.value[i].count - 1
    }
  }
}

function confirmItems(){
  
  const prices = selectedQuantifiedItems.value.map((value)=>value.price * value.count)

  if (userSelectsItems.value){
    const subtotal =  prices.reduce((acc, currValue)=> acc + currValue, 0)
    const waakyePack = {title: "Waakye Custom", ingredients: selectedQuantifiedItems.value, price: subtotal + purchaseItemStore.waakyePrice, quantity: 1, subtotal: 0}
    purchaseItemStore.update(waakyePack)
    router.push('/sub-total')
    return;
  }

  previewItems()
    
}

function previewItems(){
    selectedQuantifiedItems.value = getSelectedWithQuantity()
    userSelectsItems.value = true
}



</script>

<template>
  <div class="main-section">
    <div class="header-and-button-container">
      <p>Customize your pack</p>
      <button class="close-button" @click="$emit('handle-close-tapped')">
        X
      </button>
    </div>

    <p class="desctription-text">
      Create your own custom pack by selecting ingredients you want on your food
    </p>

    <div class="body-container" v-if="!userSelectsItems">
      <div v-for="ingredient in waakyeIngredients">
        <CustomPackSelect :ingredient="ingredient" @ingredient-tapped="(value)=>handleIngredientTapped(value)" />
      </div>
    </div>


    <div class="confirm-list" v-else>
        <div v-for="selected in selectedQuantifiedItems" v-if="selectedQuantifiedItems.length > 0">
            <SelectedOrderTile :pack="selected" @increase="(args)=>increase(args)" @decrease="(args)=>decrease(args)"/>
        </div>

        <div v-else>
            <p>No Item Selected</p>
        </div>
    </div>


    <div class="child-container2"></div>

    <button class="create-order-button" @click="confirmItems">{{ userSelectsItems ? "Confirm Order" : "Create Order"  }}</button>

  </div>
</template>

<style scoped>
.main-section {
  height: 100vh;
  position: fixed;
  top: 5%;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: white;
  border-radius: 32px 32px 0 0;
  padding: 16px;
  z-index: 1000000;
  overflow-y: scroll;
}

.header-and-button-container {
  display: flex;
  justify-content: space-between;
}

.header-and-button-container p {
  font-weight: bold;
  font-size: 16px;
}

.close-button {
  color: rgb(31, 31, 70);
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgb(31, 31, 70);
}

.create-order-button {
  font-family: Arial, Helvetica, sans-serif;
  /* width: 100%; */
  padding: 16px;
  border-radius: 32px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  position: fixed;
  bottom: 32px;
  left: 16px;
  right: 16px;
  z-index: 1000;
  background-color: rgb(31, 31, 70);
  color: white;
}

.desctription-text {
  color: rgba(0, 0, 0, 0.4);
  padding-top: 8px;
}

.body-container {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 16px;
}

.confirm-list{
    display: flex;
    gap: 24px;
    flex-direction: column;
    margin-top: 12px;
    padding-right: 16px ;
}
</style>
