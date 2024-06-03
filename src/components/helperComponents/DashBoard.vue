
<template>
   <section class="firstSection">

        <div class="sideBar">
            <div class="foodbuzz-logo"></div>

            <div class="boardlist">
                <p>Dashboard</p>
                <p>Menu</p>
                <p>Order list</p>
                <p>Analytics</p>
                <p>Teams</p>
                <p>Massage</p>
                <p>Settings</p>
            </div>

            <div class="logout">
                <p>Log Out</p>
            </div>

        </div>

            <div class="machine-engine">
                <div class="welcome-seacrhzone">
                        <div class="message">
                            Welcome Sam
                        </div>

                        <div class="search-bar">
                            <input>
                        </div>

                        <div class="admin-profilepic">
                            <p>Soba</p>
                            <p>Admin</p>
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
        width: 200px;
        height: 80vh;
        padding: 20px;
    }
    .foodbuzz-logo{
        border: 1px solid black;
       height: 20px;   
    }
    .boardlist{
        border: 1px solid black;
        height: 250px; 
    }
    .logout{
        border: 1px solid black;
        height: 20px;   
    }
    .machine-engine{
        display: flex;
        flex-direction: column;
        gap: 20px;

    }
    .welcome-seacrhzone{
        display: flex;
        flex-direction: row;
        gap: 100px;
        justify-content: center;
        border: 1px solid black;
        width: 800px;
        height: 10vh;
    }
    .message{
        border: 1px solid black;
        width: 100px;
        height: 10vh;
    }
    .search-bar{
        border: 1px solid black;
        width: 300px;
        height: 10vh; 
    }
    .admin-profilepic{
        border: 1px solid black;
        width: 80px;
        height: 10vh; 
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