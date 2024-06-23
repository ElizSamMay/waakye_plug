
<template>
  <section class="Header">
        <div class="main-parent-container">
            
            <img class="haburg" src="../../assets/images/hamburger-menu.svg">
           
<!--         
            <div class="first-child">
                <p class="home-page">
                   HOME
                </p>

                <p class="our-servicepage">
                    OUR SERVICES
                </p>

                <p class="trainig-page">
                    TRAINING
                </p>

                <p class="visit-page">
                   VISIT US
                </p>

            </div> -->

             <div class="second-child">
               <button class="lasecbutt">BOOK NOW</button>
            </div>
            
        </div>
    </section>


    <section>
        <div class="main-page">
            <img class="picxx" src="../../assets/images/cp1.jpg"> 
            <img class="picxx" src="../../assets/images/cp2.jpg">
            <img class="picxx" src="../../assets/images/cp3.jpg">
            <img class="picxx" src="../../assets/images/cp4.jpg">
            <img class="picxx" src="../../assets/images/cp5.jpg">
            <img class="picxx" src="../../assets/images/cp6.jpg">
            <img class="picxx" src="../../assets/images/cp7.jpg">
            <img class="picxx" src="../../assets/images/cp8.jpg">
            <img class="picxx" src="../../assets/images/cp9.jpg">
            <img class="picxx" src="../../assets/images/cp10.jpg">
            <img class="picxx" src="../../assets/images/cp11.jpg">
            <img class="picxx" src="../../assets/images/cp12.jpg">
            <img class="picxx" src="../../assets/images/cp13.jpg">
            <img class="picxx" src="../../assets/images/cp14.jpg">
            <img class="picxx" src="../../assets/images/cp15.jpg">
            <img class="picxx" src="../../assets/images/cp16.jpg">
            
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
        
    

</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     *{
               margin: 0;
               padding: 0;
               box-sizing: border-box;   
           }
           
        .main-parent-container{
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            padding: 16px;
            position: fixed;
            right: 0;
            left: 0;
            justify-content: space-between;
            background-color: transparent; 
            
        }

        .haburg{
            background-color: rgb(233, 102, 194);
            border-radius: 5px;
            width: 30px;
        }
       
         .first-child{
            display: flex;
            justify-content: space-around;
            gap: 15px;
            align-items: center;   
        }
         .home-page,
         .our-servicepage,
         .trainig-page,
         .visit-page{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: 550;
            color: white;
            align-content: center;
            text-align: center;
            border-radius: 5px; 
            width: 60px;
            background-color: palevioletred;
            height:25px;
              
        } 
        
        .second-child{
          
            align-content: center; 
        } 

    
        .lasecbutt{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            font-weight: bold;
            background-color:rgb(233, 102, 194) ;
            border: 3px solid rgb(253, 216, 253);
            border-radius: 15px;
            padding: 10px;
            
        }
       
        .picxx{
            
            height: 100%;
            width: 100%;
        }
        .last-container{
        /* display: flex; */
        
        background-color: pink;
        padding: 10px;
       }
       .text{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 10px;
        font-weight: 550;
        color: rgb(131, 131, 131);
        padding: 10px;
        
       }
       
</style>