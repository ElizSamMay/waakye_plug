<script setup>

// "$emit('add-dish', [{
//         imageUrl,
//         title: packName,
//         foodTitle: packName, 
//         totalSalesToday: salesToday,
//         price: price,
//         ingredients: ingredients[0].name
//       }])"


/* eslint-disable */
import ImageSelector from "@/admin/components/ImageSelector.vue";
import InputField from "@/components/helperComponents/InputField.vue";
import AddIngredient from "@/admin/helperComponents/AddIngredient.vue";
import DisplayIngredient from "@/admin/components/DisplayIngredient.vue";
import PriceComponent from '@/admin/components/PriceComponent.vue'
import { ref } from "vue";
import PageMarkComponent from "@/admin/components/PageMarkComponent.vue";

//Properties
const showAddIngredientsModel = ref(false);
const ingredients = ref([]);
const packName = ref("")
const price = ref("")
const imageUrl = ref("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGb7ic70-Ri4amPTy4RByWZ1sQY8K17DlEuQ&s")
const salesToday = ref(0)
const isTileOneSelected = ref(true)
const isTileTwoSelected = ref(false)
const isTileThreeSelected = ref(false)

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

function handleTileOneTapped(){
  isTileOneSelected.value = true
  isTileThreeSelected.value = false
  isTileTwoSelected.value = false
}

function handleTitleTwoTapped(){
  isTileOneSelected.value = false
  isTileThreeSelected.value = false
  isTileTwoSelected.value = true
}

function handleTileThreeTapped(){
  isTileOneSelected.value = false
  isTileThreeSelected.value = true
  isTileTwoSelected.value = false
}


</script>

<template>
  <div class="main-template-holder">
    <div class="form-holder">
      <div class="close-button" @click="$emit('close-modal')">X</div>

      <div class="title-header">Create Dish</div>

      <div class="selector-component">
        <PageMarkComponent title="Details" :is-selected="isTileOneSelected" @title-tapped="handleTileOneTapped"/>
        <PageMarkComponent title="Upload Thumbnail" :is-selected="isTileTwoSelected" @title-tapped="handleTitleTwoTapped"/>
        <PageMarkComponent title="Verify Details" :is-selected="isTileThreeSelected" @title-tapped="handleTileThreeTapped"/>
      </div>


      <div v-if="isTileOneSelected" class="input-container">
      <div class="input-field">
        <InputField fieldTitle="Name" isLight="true" v-model="packName" />
        <InputField fieldTitle="Category" isLight="true" v-model="packName"/>
      </div>


      <div class="description-input">
        <p>Description</p>
        <textarea name="" id=""></textarea>
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

      <button class="page-action-button bottom-right" @click="handleTitleTwoTapped">Next</button>
    </div>

    <div v-if="isTileTwoSelected"class="image-selector-view">
      <ImageSelector />

      <div class="description-container">
      <p>Kindly Note</p>
      <p>This image will be shown customers.</p>
      <p>This image should be of a reasonable quality.</p>
      </div>
      
     
      <button class="page-action-button bottom-right" @click="handleTileThreeTapped">Next</button>
    </div>


    <div v-if="isTileThreeSelected"class="image-selector-view">

      <div class="flex-container">
        <div class="image-container-holder">
        <img src="https://i0.wp.com/1.bp.blogspot.com/-mDAYcHBuTvk/VzxNVwZR5RI/AAAAAAAANRM/xg_jsb6bXyExyi7hpXJTdBdvpOSImHebwCLcB/s1600/Coconut%2BJollof%2Brice.jpg?ssl=1" alt="">
        </div>
          <p>Waakye Combo</p>
          <p class="title-content">GHS 200</p> 
      </div>

      <div class="add-ingredients-section">
        <div class="ingredients">
          <p>Ingredients</p>
          
        </div>
        <div class="display-ingredients">
                <div v-for="ingredient in ingredients ">
                    <DisplayIngredient :name="ingredient.name" :price="ingredient.price" />
                </div>
            </div>
      </div>

      <div>
        <p class="desc">Description</p>
        <p class="description-value">
          The décor is a harmonious fusion of modern chic and classic charm, with plush seating and tasteful artwork adorning the walls. Soft jazz music plays in the background, adding to the relaxed ambiance
        </p>
      </div>
     
      
     
      <button class="page-action-button bottom-right" @click="handleTileThreeTapped">Complete</button>
    </div>


    <AddIngredient
      v-if="showAddIngredientsModel"
      @close-modal="dismissAddIngredientModal"
      @add-ingredient="(args) => addIngredients(args)"
    />
  </div>
</div>
</template>

<style scoped>
.main-template-holder {
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(41, 41, 70);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.title-header {
  font-weight: bold;
  font-size: 20px;
}

.page-action-button{
  padding: 16px 32px;
}

.form-holder {
  margin: auto;
  width: 30%;
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
  font-size: 0.8rem
}

.ingredients {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.desc{
  margin-top: 8px;
  margin-bottom: 8px;
}

.input-field{
  display: flex;
  gap: 16px;
  width: 100%
}

.description-input{
  width: 100%;
}

.description-input textarea{
  width: 100%;
  min-height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  outline: none;
  padding: 8px;

}

.description-input p{
  font-size: 0.8rem;
  margin-bottom: 4px;
}

.selector-component{
  display: flex;
}

.input-container{
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.image-selector-view{
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.image-selector-view p:nth-child(1){
  font-size: 0.8rem;
  font-weight: bold;
}

.description-container p{
  font-size: 0.8rem;
  color: gray;
}

.description-value{
  font-size: 0.8rem;
  color: gray;
}

.description-container{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.image-container-holder{

  height: 150px;
  width: 150px;
  border-radius: 50%;
}

.image-container-holder img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.flex-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.title-content{
  color: black;
  font-weight: bold;
}
</style>

<style>
.close-button {
  border: 1px solid rgba(0, 0, 0,0.2);
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
