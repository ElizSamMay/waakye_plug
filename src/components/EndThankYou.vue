<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()

function goToHome(){
router.go(-4);
}

</script>


<template>
    <div>
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
                Stay hooked, We will call you once your order  is 
                accepted and the rider sets off on his way to your location.
                Payment will be made to the rider once item is delivered.
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
            background-color: rgb(60, 177, 128);
            color: white;
            left: 16px;
            right: 16px;
            border: none;
            padding: 16px;
            border-radius: 32px;
            z-index: 1000;
            font-weight: bold;
            font-size: 16px;
        }
        

</style>