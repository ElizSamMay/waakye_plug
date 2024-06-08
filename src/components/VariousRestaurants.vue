
<template>
<div>

     <input class="searchbar" type="text"placeholder="find your favorate foodseat">

<section  class="mother-container">
    <div class="picture-preview">
        <div>
            <img class="display-picture" src="../assets/waakye_in_bowl.png">
        </div>

        <div class="profile-container"> 
            <div class="profle-pic-container">
                <img class="profle-pic" src="../assets/logo.png">
            </div>

            <div class="title-zone">  
                <p class="restaurants-name">
                    Afrifingers Restaurants
                </p>

                <div class="location-zone"> 
                     <img class="loc" src="https://www.shutterstock.com/image-vector/pin-point-logo-can-be-600nw-1679653036.jpg">
                    <p class="location">Madina-GRA Warehouse</p>
                </div>
              
                <p class="shop-title">Chef Made</p>
                <p class="details">Good Chicken & More!</p>
            </div>
            
          
        </div>
    </div>
</section>


        
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mother-container{
        padding: 30px;
        
        
       }
        .display-picture{
            width: 100%;
            background-color: rgb(31, 31, 70); 
           
        }
        .picture-preview{
           /* width: 300px;  */
           
           
        }
        .profle-pic{
            width: 100%;
            border-radius: 40px;
        }
        .profile-container{
            display: flex;
            gap: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
            border-radius: 10px;

        }
        .profle-pic-container{
            
             width: 50px; 
             vertical-align: top;

        }
        .title-zone{
             width: 250px;
             line-height: 5px;
        }
        .restaurants-name{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
            font-weight: bold;
        }
        .location-zone{
            display: flex;
            gap: 5px;
        }
        .loc{
            
            width: 30px;
        }
        .location{
            
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
            font-weight: bold;
        }
        .shop-title{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
            font-weight: bold;
            color: rgb(31, 31, 70);
        }
        .details{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
            font-weight: bold;
            color: rgb(154, 154, 182);
        }

</style>