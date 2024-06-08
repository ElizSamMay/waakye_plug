

<script setup>
 /* eslint-disable */
    import {restaurant} from "@/store/store.js"
    import {useRouter} from 'vue-router'

    const router = useRouter();

    function goToOrderStyle(){
        router.push('/order-style')
    }

</script>


<template>

    <div id="parent">
        <div class="background-image">
            <img :src="restaurant?.restaurantItem.wallpaper" alt="">
        </div>
        <section class="parent-container">

            <p>How would you like to order ?</p>

            <div class="walk-in" @click="goToOrderStyle">
                <img class="walk-inlogo" src="../assets/dinein_from_google-removebg-preview.png">
                   <p class="action-text">Dine in</p> 
            </div>
    
            <div class="walk-in">
                <img class="walk-inlogo" src="../assets/takeaway1-removebg-preview.png">
                <p class="action-text">To Go</p>
                
            </div>
        </section>
    </div>
        
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #parent{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    
    .action-text{
        font-weight: bold;
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
       
    }

    .walk-in{
        /* border: 1px solid black; */
        width: 200px; 
        padding: 30px;
        display: flex;
        flex-direction: column;
        background-color:rgb(31,31,70);
        color: white;
        border-radius: 4px;
        align-items: center;
        gap: 20px;

       
    }
    
    .walk-inlogo{
        width: 50%;
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

    .background-image img{
        width: 100%;
        height: 100%;
    }
    
   

</style>