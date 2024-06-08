
<script setup>
 /* eslint-disable */
import {useRouter} from "vue-router"
import {restaurant} from "@/store/store.js"

const router = useRouter()

function goToPack(){
    router.push('/add-dishes')
}

function goToCustomize(){
    router.push('')
}

</script>


<template>
<div id="parent">

    <div class="background-image">
            <img :src="restaurant?.restaurantItem.wallpaper" alt="">
    </div>

    <section class="parent-container">
        <p>Would you like to :</p>

        <div class="createpacks" @click="goToPack" >
            <p>Select Pack</p>
        </div>

        <div class="createpacks">
            <p>Customize Your Pack</p>
        </div>

    </section>
</div>

</template>


<style scoped>
  #parent{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 32px;
    }

.parent-container{
        display: flex;
        gap: 32px;
        flex-direction: column;
        padding: 30px;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 16px;
        z-index: 1000;
        width: 100%;
}


.createpacks{
        padding: 30px 48px;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: rgb(31, 31, 70);
        color: white;
        border-radius: 4px;
        align-items: center;
        gap: 20px;
}

section p:nth-child(1){
    font-size: 16px;
    font-weight: bold;
}

.background-image{
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

    }
</style>