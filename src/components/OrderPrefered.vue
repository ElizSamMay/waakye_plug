

<template>

    
        <div id="parent">
            <section class="parent-container">
                <p>What would you like to order ?</p>
                <div class="walk-in">
                    
                    <img class="foodlogo" src="../assets/food-.png">
                     Food & Snacks 
                </div>
        
                <div class="walk-in">
                    
                    <img class="foodlogo"  src="../assets/grocshoppingcart.png">
                    Supermarket & Groceries
                </div>

                <div class="walk-in">
                    
                    <img class="foodlogo"  src="../assets/pharmacydrug.png">
                    Pharmacy
                </div>

                <div class="walk-in">
                    
                    <img class="foodlogo"  src="../assets/rider.png">
                    Delivery
                </div>
            </section>
        </div>
            
    
    
    
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   body{
               
               background-color: rgb(21, 156, 197);
               display: flex;
               justify-content: center;
               align-items: center;
               height: 100vh;
           
           }
           .parent-container{
               font-family: Arial, Helvetica, sans-serif;
               display: flex;
               gap: 32px;
               flex-direction: column;
               padding: 20px;
               align-items: center;
               justify-content: center;
               background-color: white;
               border-radius: 16px;
               
              
           }
           .walk-in{
               font-family: Arial, Helvetica, sans-serif;
               /* border: 1px solid black; */
               width: 200px; 
               /* padding: 20px; */
               display: flex;
               flex-direction: column;
               /* justify-content: center; */
               background-color: rgb(21,223, 236);
               color: white;
               border-radius: 4px;
               align-items: center;
              
       
              
           }

           .foodlogo{
               width: 40%;
           }
       
           section p:nth-child(1){
               font-size: 16px;
               font-weight: bold;
           }
           
        
</style>