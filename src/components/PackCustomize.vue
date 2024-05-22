
<template>
 <div>
 
   <section class="firstsection">
        <div class="image-container">
             <img  src="../assets/ghanaian_waakye_leaf.jpg">
        </div>
       
    </section>

    
    <section class="secondsection">
        <div class="mother-container">
            <div class="child-container1">
              <p >
                 Customize your pack
               </p>
            </div>

            <div class="child-container2">
                <p >
                    waakye
                </p>

                <p >
                    fish
                </p>

                <p >
                    meat
                </p>

                <p >
                    chicken
                </p>

                <p >
                    wale
                </p>

                <p >
                    egg
                </p>

                <p >
                    macaroni
                </p>

                <p >
                    salad
                </p>

                <p >
                   gari
                </p>

                <p >
                    wagashi
                </p>  

            </div>


        <button class="create-order-button">
            Create Order
        </button>

    </div>
        
    </section>
 </div>
 
    
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .firstsection{
            background-color: rgb(31, 31, 70);
            align-content:space-between;
        }
        .image-container{
            width: 100%;
            height: 250px;
        }

        .image-container img{
            height: 100%;
            width: 100%;
        }
        .secondsection{
           background-color: rgb(31, 31, 70); 
        }
        .mother-container{ 
            background-color: white;
            padding: 20px;  
            border-radius: 30px;
        } 
        
        .child-container1{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 25px;
            font-weight: 550;
            text-align: center;
            color: rgb(31, 31, 70);
            
        }
        .child-container2{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            font-weight: 550;
            color: rgb(31, 31, 70); 
        }
        .create-order-button{
            font-family: Arial, Helvetica, sans-serif; 
            /* width: 100%; */
            padding: 16px;
            border-radius: 32px;
            border: none;
            font-weight: bold;
            font-size: 16px;
            position: fixed;
            bottom: 32px;
            left: 16px;
            right: 16px;    
            z-index: 1000;  
            background-color: rgb(31, 31, 70);
            color: white;  
        }

          
        

    
</style>
