<script setup>
/* eslint-disable */
import { ref } from 'vue'
import AddDish from './helperComponents/AddDish.vue';
import CategoryDisplay from "@/admin/components/CategoryDisplay.vue"
import NewItemContainer from "@/admin/components/NewItemContainer.vue"
import DishContainer from '@/admin/components/DishContainer.vue'
import AdminInputField from '@/components/helperComponents/AdminInputField.vue';


const createDishTapped = ref(false)
const isAddCategoryTapped = ref(false)
const category = ref("")
const identifier = ref(2)



const categories = ref([{id:0, title: "All Dishes", isSelected: false}, {id:1, title: "Breakfast", isSelected: true }])

function createDish() {
    createDishTapped.value = true
}

function closeDishTab() {
    createDishTapped.value = false
}

function addCategoryTapped(){
    isAddCategoryTapped.value = true
}

function closeTapped(){
   isAddCategoryTapped.value = false
}

function addCategory(){

    const dish = {id: identifier, title: category.value, isSelected: false}
    categories.value.push(dish)
    category.value = ""
    closeTapped()
    identifier.value += 1
}

function tapCategory(args){
    const categoryId = args[0]
    console.log(categoryId)
    categories.value.forEach((value)=>{
        if (categoryId === value.id){
            value.isSelected = !value.isSelected
        }else{
            value.isSelected = false
        }
    })
}

</script>



<template>

    <div class="main-catalogue-container-holder">

        <div class="left-side-template">
            <p>Dishes Categories</p>

            <div class="tiles">
                <div v-for="category in categories" :key="category.title">
                    <CategoryDisplay :title="category.title" :is-selected="category.isSelected" :id="category.id" @category-tapped="(args)=>tapCategory(args)" />
                </div>
            </div>

            <div class="bottom-container">
                <div class="close-button" v-if="isAddCategoryTapped" @click="closeTapped">x</div>
                <div class="add-cat-container" v-if="isAddCategoryTapped">
                    <AdminInputField fieldTitle="Category" valiadateString="Phone number must not be empty"
                        v-model="category" @input-change="handleValidation" :showError="showNumberError"
                        field-placeholder="eg. Desert" />
                </div>
                <button v-if="isAddCategoryTapped" @click="addCategory">Add Category</button>
                <button v-else @click="addCategoryTapped">Add New Category</button>
            </div>
        </div>





        <div class="dishes-container">

            <div class="flex-container">
                <p>Dishes</p>


                <div class="button-search-container">
                    <div class="search-component">
                        <img src="@/assets/search-icon.svg" alt="" height="20px" width="20px">
                        <input type="text" class="search-input" placeholder="Search">
                    </div>
                    <button class="create-dish-container" @click="createDish">Create Dish</button>
                </div>

            </div>

            <div class="container-component">
                <div class="top-component">
                    <div>Deserts (19)</div>
                </div>

                <div class="body-container-holder">
                    <NewItemContainer />
                    <DishContainer />
                    <DishContainer />
                    <DishContainer />
                    <DishContainer />
                    <DishContainer />
                    <DishContainer />
                </div>
            </div>

        </div>




        <!-- Add Dish Container -->
        <AddDish v-if="createDishTapped" @close-modal="closeDishTab" />
    </div>



</template>



<style scoped>
.left-side-template {
    background-color: rgb(247, 248, 250);
    min-height: 100vh;
    padding: 48px 32px 32px 32px;
    position: relative;
}

.left-side-template p:nth-child(1) {
    font-weight: bold;
    font-size: 20px
}

.left-side-template button {
    font-weight: 400;
}

.bottom-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background-color: white;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.bottom-container button {
    width: 100%;

}

.tiles {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;

}


.main-catalogue-container-holder {
    background-color: white;
    min-height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: 20% 80%;

}

.header-component-container {
    display: flex;
    gap: 16px;
}

.button-component-holder {
    background-color: red;
    padding: 32px;
    border-radius: 16px;
}

.search-component {
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2)
}

.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-container p:nth-child(1) {
    font-weight: bold;
    font-size: 20px
}

.child-component {}

.dishes-container {
    padding: 32px;
}

.create-dish-container {
    padding: 8px 16px;
    width: 150px;
}

.button-search-container {
    display: flex;
    align-items: center;
    gap: 8px;
}

.search-component {
    min-width: 300px;
    height: 35px;
}

.search-input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
}


.container-component {
    background-color: rgb(249, 249, 249);
    height: 100%;
    margin: 16px 0;
    border-radius: 8px;
    padding: 16px;

}

.body-container-holder {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
}

.close-button{
    width: 16px;
    height: 16px;
    font-size: 12px;
    padding: 0;
}
</style>


<style>
button {
    border: none;
    padding: 16px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    background: rgb(41, 41, 70);
}
</style>