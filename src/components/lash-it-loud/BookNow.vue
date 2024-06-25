<script setup>
/* eslint-disable */
 import {useRouter} from 'vue-router'
   

    const router = useRouter()


 function goBack(){
        router.go(-1)
    }
 
</script>

<template>

    
       
        <div id="parent">
            <button class="back-button" @click="goBack">
                    X
            </button>
            <section class="parent-container">
                <p>What would you like to Book ?</p>

                <div class="select-lashappointment" @click="goToRestaurantPage">
                    <img class="selogo"  src="../../assets/images/bookappiontment.png">
                  Book Appoitment 
                </div>
        
                <div class="select-trainningschool" @click="goToSupermarketPage">
                    
                    <img class="selogo" src="../../assets/images/trainning.png" >
                    Lash Training
                </div>
               
            </section>
             <section class="last-container">
       
        <div class="text">
         © Lash_it loud Beauty Studio - North Legon 2024
        </div>
        <div class="text">
            Powered by LUMINAEA GROUP INC.
        </div>
    </section>
        </div>

        
   
    
    
    
    
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   body{
               
               
               display: flex;
               justify-content: center;
               align-items: center;
               
           
           }
           

           .parent-container{
               display: flex;
               gap: 50px;
               flex-direction: column;
               padding: 50px;
               height: 100vh;
               align-items: center;
               justify-content: center;
               background-color: rgb(247, 192, 200);
                 
           }


            .select-lashappointment,.select-trainningschool{
               font-weight: bold;
               padding: 20px;
               width: 250px; 
               
               display: flex;
               flex-direction: column;
               background-color: rgb(233, 102, 194);
               color: white;
               border-radius: 4px;
               align-items: center;
              
       
              
           }

           .selogo{
               
               width: 40%;
           }
       
           section p:nth-child(1){
               font-size: 20px;
               font-weight: bold;
           }
            .back-button{
                position: absolute;
                left: 20px;
                top: 10px;
                background-color: rgb(233, 102, 194);
                color: white;
                border: 2px solid rgb(253, 216, 253);
                width: 30px;
                height: 30px;
                border-radius: 15px;
                font-weight: bold;
            }

            .last-container{
                background-color: rgb(245, 235, 235);
                padding: 15px;
            
            }

            .text{
                font-size: 10px;
                font-weight: 550;
                color: rgb(131, 131, 131);
                padding: 10px; 
            
            }

            
                
        
</style>