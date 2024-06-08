<script setup>
import {useRouter} from 'vue-router'
import {generateRandomCode} from '@/model/waakye_combo'

const router = useRouter()
const randomCode = generateRandomCode()

function goToHome(){
router.go(-3);
}

</script>


<template>
    <div class="main-container">
        <section class="first-container">
                <div>
                    <img class="thanks-logo" src="../assets/thank 1.png">
                </div>
            </section>

            <section class="second-container">
            <div>
                <p class="palce-order">
                    Order Placed
                </p>
            </div>

            <div>
             <p class="text">
                Stay hooked, We will notify once order is completed
             </p>

             <p class="text padded">
                Your unique code is: <span>{{ randomCode }}</span>
             </p>
            </div>

            <div class="buttom">
                <button class="buttom-button" @click="goToHome">
                    Done
                </button>
            </div> 

        </section>
    </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .first-container{  
            display: flex;
        }

        .main-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 70vh;
        }
        
        .thanks-logo{
            width: 40%;
            display: block;
            margin: 0 auto;  
        }

        .second-container{ 
            display: flex;
            gap: 20px;
            flex-direction: column;
            padding: 10px;   
        }

        .palce-order{
            font-weight: 700;
            font-size: 25px;
            text-align: center;
            color: white;
        }

        .text{
            font-size: 15px;
            font-weight: 550;
            color: white;
            text-align: center;
            
        }
        
        .buttom-button{
            position: fixed;
            bottom: 10px;
            background-color: white;
            left: 16px;
            right: 16px;
            border: none;
            padding: 16px;
            border-radius: 32px;
            z-index: 1000;
            font-weight: bold;
            font-size: 16px;
        }

        .padded{
            margin-top: 16px;
        }

        .padded span {
            font-size: 32px;
            display: block;
            margin: 8px;
        }
        

</style>