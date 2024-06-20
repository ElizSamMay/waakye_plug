<script setup>
    import {useRouter} from 'vue-router'
   

    const router = useRouter()


    function goToRestaurantPage(){
        router.push('/various-restaurants')
    }

    function goToSupermarketPage(){
        router.push('/various-supermarket')
    }

    function goToPharmacyPage(){
        router.push('/various-pharmacy')
    }
    
</script>

<template>

    
        <div id="parent">
            <section class="parent-container">
                <p>What would you like to order ?</p>

                <div class="select-restaurant" @click="goToRestaurantPage">
                    
                    <img class="foodlogo" src="../assets/food-.png">
                     Food & Snacks 
                </div>
        
                <div class="select-shop" @click="goToSupermarketPage">
                    
                    <img class="foodlogo"  src="../assets/grocshoppingcart.png">
                    Supermarket & Groceries
                </div>

                <div class="select-drugstore" @click="goToPharmacyPage">
                    
                    <img class="foodlogo"  src="../assets/pharmacydrug.png">
                    Pharmacy
                </div>

                <div class="select-delivery" @click="goToRestaurantPage">
                    
                    <img class="foodlogo"  src="../assets/rider.png">
                    Delivery
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
               gap: 32px;
               flex-direction: column;
               padding: 50px;
               align-items: center;
               justify-content: center;
               background-color: rgb(197, 238, 224);
               
               
              
           }
           .select-delivery, .select-restaurant,.select-shop,.select-drugstore{
               font-weight: bold;
               padding: 20px;
               width: 250px; 
               display: flex;
               flex-direction: column;
               background-color: rgb(21,223, 236);
               color: white;
               border-radius: 4px;
               align-items: center;
              
       
              
           }

           .foodlogo{
               
               width: 40%;
           }
       
           section p:nth-child(1){
               font-size: 20px;
               font-weight: bold;
           }
           
        
</style>