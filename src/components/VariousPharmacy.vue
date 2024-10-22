
<template>
 <div class="main-parent-container">
        <div class="title"> Pharmacy </div>
        <input class="searchbar" type="text" placeholder="find your favorate pharmacy">
        <button class="search-button">Search</button>
    
        <div class="shops">
            <div >
                <div class="main-container-holder" @click="goToRestaurantPage">
                    <div class="image-and-details">
                        <div class="image-holder">
                            <img src="../assets/drug.png">
                        </div>
            
                        <div class="details">
                            <div class="header">Amoateng Chemist</div>
                            <div class="sub-detail">Old Station</div>
                            <div class="sub-detail">0234548948</div>
                        </div>
                    </div>
            
                    <div class="caret">
                        <img src="../assets/caret-forward.png">
                    </div>
                </div>
            
            </div>
        </div>


        <div class="shops">
            <div >
                <div class="main-container-holder" @click="goToRestaurantPage">
                    <div class="image-and-details">
                        <div class="image-holder">
                            <img src="../assets/drug.png">
                        </div>
            
                        <div class="details">
                            <div class="header">Fredimens Herbal</div>
                            <div class="sub-detail">Akim-Oda Old Station </div>
                            <div class="sub-detail">0234548948</div>
                        </div>
                    </div>
            
                    <div class="caret">
                        <img src="../assets/caret-forward.png">
                    </div>
                </div>
            
            </div>
        </div>


        <div class="shops">
            <div >
                <div class="main-container-holder" @click="goToRestaurantPage">
                    <div class="image-and-details">
                        <div class="image-holder">
                            <img  src="../assets/drug.png">
                        </div>
            
                        <div class="details">
                            <div class="header">Agya Ntoo Pharmacy</div>
                            <div class="sub-detail">Market</div>
                            <div class="sub-detail">0234548948</div>
                        </div>
                    </div>
            
                    <div class="caret">
                        <img src="../assets/caret-forward.png">
                    </div>
                </div>
            
            </div>
        </div>


        <div class="shops">
            <div >
                <div class="main-container-holder" @click="goToRestaurantPage">
                    <div class="image-and-details">
                        <div class="image-holder">
                            <img  src="../assets/drug.png">
                        </div>
            
                        <div class="details">
                            <div class="header">Julie Drug Store</div>
                            <div class="sub-detail">New Station</div>
                            <div class="sub-detail">0234548948</div>
                        </div>
                    </div>
            
                    <div class="caret">
                        <img src="../assets/caret-forward.png">
                    </div>
                </div>
            
            </div>
        </div>


        
    </div>

    
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .main-parent-container{
            font-family: Arial, Helvetica, sans-serif;
            padding: 16px;
            height: 100vh;
            background-color: rgb(21, 156, 197);
        }
    
        .title{
            color: white;
            font-size: 32px;
            padding: 16px;
            
           
        }
        .searchbar{
            font-size: 15px;
            width: 250px;
            padding: 12px;
            border: none;
            border-radius: 20px;
            margin: 10px;
        }
        .search-button{
            color: white;
            background-color:rgb(21,223, 236) ;
            padding: 10px;
            border: none;
            border-radius: 15px;
            margin-top: 20px;
        }
    
        .shops{
            overflow-y: scroll;
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 20px;
        }
        .main-container-holder{
            padding: 16px;
            border: 1px solid white;
            border-radius: 16px;
            display: flex;
            justify-content: space-between;
            background-color: rgb(21,223, 236);
            align-items: center;
        }

        .sub-detail{
            color: rgb(115, 103, 116);
        }

        .caret{
            border: 3px solid rgb(21, 156, 197);
            width: 32px;
            height: 32px;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .image-holder{
            height: 100px;
            width: 100px;
            border: 1px solid white;
            border-radius: 16px;
        }

        .image-holder img{
            width: 100%;
            height: 100%;
            border-radius: 16px;
        }

        .image-and-details{
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .details{
            display: flex;
            flex-direction: column;
            gap: 8px;
            gap: 8px;
        }

        .header{
            color: white;
            font-weight: bold;

        }

        .caret img{
            height: 12px;
            width: 8px;
        }
        
</style>