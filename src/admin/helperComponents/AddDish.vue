<script setup>
/* eslint-disable */
import ImageSelector from "@/admin/components/ImageSelector.vue";
import InputField from "@/components/helperComponents/InputField.vue";
import AddIngredient from "@/admin/helperComponents/AddIngredient.vue";
import DisplayIngredient from "@/admin/components/DisplayIngredient.vue";
import PriceComponent from '@/admin/components/PriceComponent.vue'
import { ref } from "vue";

//Properties
const showAddIngredientsModel = ref(false);
const ingredients = ref([]);
const packName = ref("")
const price = ref("")
const imageUrl = ref("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGb7ic70-Ri4amPTy4RByWZ1sQY8K17DlEuQ&s")
const salesToday = ref(0)

//Methods
function dismissAddIngredientModal() {
  showAddIngredientsModel.value = false;
}

function addIngredients(args) {
  showAddIngredientsModel.value = false;
  const ingredient = args[0];
  ingredients.value.push(ingredient);
}

function onAddIngredientsTapped() {
  showAddIngredientsModel.value = true;
}
</script>

<template>
  <div class="main-template-holder">
    <div class="form-holder">
      <div class="close-button" @click="$emit('close-modal')">X</div>

      <div class="title-header">Add Pack to your Restaurant</div>

      <div class="image-selector-component">
        <ImageSelector />
      </div>

      <div class="input-field">
        <InputField fieldTitle="Pack Name" isLight="true" v-model="packName"/>
      </div>

      <div class="add-ingredients-section">
        <div class="ingredients">
          <div class="title-temp">Ingredients</div>
          <button class="page-action-button" @click="onAddIngredientsTapped">
            Add Ingredient
          </button>
        </div>
        <div class="display-ingredients">
                <div v-for="ingredient in ingredients ">
                    <DisplayIngredient :name="ingredient.name" :price="ingredient.price" />
                </div>
            </div>
      </div>

      <div class="price">
        <div class="title-temp">Price</div>
        <PriceComponent currency="GHS" v-model="price"/>
      </div>

      <button class="page-action-button bottom-right" @click="$emit('add-dish', [{
        imageUrl,
        title: packName,
        foodTitle: packName, 
        totalSalesToday: salesToday,
        price: price,
        ingredients: ingredients[0].name
      }])">Create Pack</button>
    </div>
    <AddIngredient
      v-if="showAddIngredientsModel"
      @close-modal="dismissAddIngredientModal"
      @add-ingredient="(args) => addIngredients(args)"
    />
  </div>
</template>

<style scoped>
.main-template-holder {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(41, 41, 70);
}

.title-header {
  font-weight: bold;
  font-size: 20px;
}

.form-holder {
  margin: auto;
  width: 40%;
  min-height: 70vh;
  background-color: white;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

.close-button:hover {
  cursor: pointer;
}

.title-temp {
  color: rgb(41, 41, 70);
  font-weight: bold;
  font-size: 20px
}

.ingredients {
  display: flex;
  justify-content: space-between;
}

.bottom-right {
  position: absolute;
  bottom: 32px;
  right: 32px;
}

.add-ingredients-section{
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.display-ingredients{
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}
</style>

<style>
.close-button {
  border: 2px solid rgb(41, 41, 70);
  padding: 16px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: 16px;
}

.close-button:hover {
  cursor: pointer;

}
</style>
