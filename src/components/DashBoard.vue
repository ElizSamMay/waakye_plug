
<template>
    <section class="firstSection">

        <div class="sideBar">
            <div class="foodbuzz-logo">
                <p class="logotext">
                    Food Buzz
                </p>
            </div>

            <div class="boardlist">
                <p class="list">
                    Dashboard
                </p>

                <p class="list">
                    Menu
                </p>

                <p class="list">
                    Order list
                </p>

                <p class="list">
                    Analytics
                </p>

                <p class="list">
                    Teams
                </p>

                <p class="list">
                    Massage
                </p>

                <p class="list">
                    Settings
                </p>
            </div>

            <div class="logout">
                <p class="list">
                    Log Out
                </p>
            </div>

        </div>

            <div class="machine-engine">
                <div class="welcome-seacrhzone">
                        <div class="message">
                            Welcome, Sam
                        </div>

                        <div class="search-bar">
                            <input class="search" type="text" placeholder="search">
                        </div>

                        <div class="admin-profilepic">
                            <div class="noticification">

                            </div>
                            <div class="display-picture">
                                
                            </div>
                            <div class="nametext">
                                <p class="lis">Soba</p>
                                <p class="texadmin">Admin</p>
                           </div>
                        </div>
                </div>

                <div class="engine">
                    <div class="revenue-zone">
                        <div class="todayrevenue"></div>
                        <div class="todayrevenue"></div>
                        <div class="todayrevenue"></div>
                        <div class="todayrevenue"></div>
                    </div>
                    
                    <div class="sales-order">
                        <div class="sales-details"></div>
                        <div class="order-chart"></div>
                    </div>

                    <div class="trending">
                        <div class="food-varieties"></div>
                        <div class="food-varieties"></div>
                        <div class="food-varieties"></div>
                    </div>
                </div>
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
    body{
        
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        height: 100vh;
        justify-content: center;
        
    
    }
    .firstSection{
        display: flex;
        flex-direction: row;
        gap: 50px;
        padding: 50px;
       
        

    }
    .sideBar{
        display: flex;
        flex-direction: column;
        align-content: space-around;
        gap: 80px;
        border: 1px solid black;
        border-radius: 10px;
        width: 200px;
        height: 80vh;
        padding: 20px;
    }
    .list{
        font-size: 16px;
        font-weight: bold;
        padding: 10px;
        line-height: 15px;
    }
    .foodbuzz-logo{
        /* border: 1px solid black;
       height: 50px;    */
    }
    .logotext{
        font-size: 16px;
        font-weight: bold;
        padding: 10px;
        text-align: center; 
    }
    .boardlist{
         /* border: 1px solid black; 
        height: 200px;  */
    }
    .logout{
        /* border: 1px solid black;
        height: 30px;    */
    }
    .machine-engine{
        display: flex;
        flex-direction: column;
        gap: 20px;

    }
    .welcome-seacrhzone{
        display: flex;
        flex-direction: row;
        gap: 80px;
        border: 1px solid black;
        border-radius: 10px;
        width: 800px;
        /* height: 10vh; */
    }
    .message{
        font-size: 16px;
        font-weight: bold;
        padding: 20px;
        text-align: center;
        /* border: 1px solid black;
         width: 100px;
        height: 10vh;  */
    }
    .search-bar{
       
       
        align-content: center;
       
    }
    .search{
        padding: 10px;
        width: 250px;
        height: 30px;
        border-radius: 15px;
    }
    .admin-profilepic{
        display: flex;
        flex-direction: row;
        gap: 10px;
          border: 1px solid black; 
        

    }
    .noticification{
        border: 1px solid black;
        padding: 20px; 
    }
    .display-picture{
        border: 1px solid black;
        padding: 20px;
    }
    .nametext{
        border: 1px solid black;
        padding: 20px    ;
    }
    .texadmin{
        font-size: 12px;
        
    }
    .engine{
        border: 1px solid black;
        width: 800px;
        height: 67vh;
    }
    .revenue-zone{
        display: flex;
        flex-direction: row;
        gap: 100px;
        justify-content: center;
        border: 1px solid black;
        /* width: 800px; */
        height: 50px;
        padding: 10px;
    }
    .todayrevenue{
        border: 1px solid black;
        width: 80px;
        height: 30px;
    }
    .sales-order{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        padding: 20px;
    }
    .sales-details{
        border: 1px solid black;
        width: 400px;
        height: 150px;

    }
    .order-chart{
        border: 1px solid black;
        width: 400px;
        height: 150px;
    }
    .trending{
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 50px;
        padding: 20px;
    }
    .food-varieties{
        border: 1px solid black;
        width: 300px;
        height: 150px; 
    }

</style>