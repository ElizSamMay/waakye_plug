
<script setup>
 /* eslint-disable */
 import {ref} from 'vue';
 import DashboardDataComponent from '@/admin/components/DashboardDataComponent.vue'
 import FoodPackComponent from '@/admin/components/FoodPackComponent.vue'
 import AddDish from '@/admin/helperComponents/AddDish.vue'
 import QrCodeScreen from '@/admin/QrCodeScreen.vue'

 const showAddDish = ref(false)
 const showQr = ref(false)
 const qrData = ref("https://waakye-plug.onrender.com")

 function  showAddDishModal(){
    showAddDish.value = true
 }

 function closeModal(){
    showAddDish.value = false
 }

 function addDish(args){
    showAddDish.value = false
    const value = args[0]
    dishesAdded.value.push(value)

 }

 function close(){
    showQr.value = false
 }

 function openQr(){
    showQr.value = true
 }
    
    const dashboardDisplayItems = ref([{
        iconUrl: "https://remacccount.s3.amazonaws.com/static/stats_icon.svg",
        value: "2000",
        description: "Today's Revenue"
    }, {
        iconUrl: "https://remacccount.s3.amazonaws.com/static/stats_icon.svg",
        value: "2000",
        description: "Today's Revenue"
    }, {
        iconUrl: "https://remacccount.s3.amazonaws.com/static/stats_icon.svg",
        value: "2000",
        description: "Today's Revenue"
    }, {
        iconUrl: "https://remacccount.s3.amazonaws.com/static/stats_icon.svg",
        value: "2000",
        description: "Today's Revenue"
    }])

    const dishesAdded = ref([
    {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGb7ic70-Ri4amPTy4RByWZ1sQY8K17DlEuQ&s",
    ingredients: "Chicken",
    foodTitle:"Jollof", 
    totalSalesToday: "2000",
    price: "100",
    id: "123"
},

    ])

</script>


<template>
    <div class="main-template-container">
        <div class="first-column"></div>
        
        <div class="hero-section">
            <QrCodeScreen @close="close" v-if="showQr" :qrEncoder="qrData"/>

            <div class="flex-space-between-and-center-aligned">
                <div class="title">Dashboard</div>
                <button class="page-action-button" @click="openQr">
                    Generate QR
                </button>
            </div>

            <div class="dashboard-values">
                <div class="title">Statistics</div>

                <div class="statistic-items">
                    <div v-for="item in dashboardDisplayItems">
                        <DashboardDataComponent :iconUrl="item.iconUrl" :value="item.value" :description="item.description"/>
                    </div>
                </div>

            </div>


            <div class="food-items">
                <div class="flex-space-between-and-center-aligned">
                    <div class="title">Food Packs</div>
                    <button class="page-action-button" @click="showAddDishModal">
                    Add Dish
                </button>
                </div>
               
                <div class="food-packs">
                    <div v-for="item in dishesAdded" >
                    <FoodPackComponent :imageUrl="item.imageUrl" :ingredients="item.ingredients" :foodTitle="item.foodTitle" :totalSalesToday="item.totalSalesToday" :id="item.id" :price="item.price"/>
                </div>
                </div>
                
            </div>

            <div class="food-items">
                <div class="title">Order Reports</div>

                <div class="table">
                    <table>
        <thead>
            <tr>
                <th>Customer</th>
                <th>Order number</th>
                <th>Address</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <!-- Rows of data will go here -->
        </tbody>
    </table>
              
                </div>
                
            </div>

            
            
        </div>

        <div class="final-column"></div>
        <AddDish v-if="showAddDish" @close-modal="closeModal" @add-dish="(args)=>addDish(args)"/>
    </div>

  
</template>


<style scoped>
    .main-template-container{
        min-height: 100vh;
        display: grid;
        grid-template-columns: 15% 70% 15%;
        background: rgb(0,0,0);
        gap: 16px;
        width: 100vw;
    }

    .first-column{
        background-color: rgb(49, 49, 49);
        border-top-right-radius: 32px;
        border-bottom-right-radius: 32px;
    }

    .hero-section{
        background-color: rgb(0, 0, 0);
        border-radius: 32px;
        padding: 16px;
    }

    .final-column{
        background-color: rgb(49, 49, 49);
        border-top-left-radius: 32px;
        border-bottom-left-radius: 32px;
    }

    .title{
        font-size: 24px;
    }

    .dashboard-values{
        padding-top: 32px;
       
    }

    .statistic-items{
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 16px;
    }

    .food-items .title{
        margin-bottom: 8px;
    }

    .food-items{
        margin-top: 64px;
    }

    .food-packs{
        display: flex;
        gap: 16px;
        width: 100%;
        overflow-x: scroll;
        
    }

    .table{
        width: 100%;
    
    }

    table{
        width: 100%;
        color: white;
    }

    table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            text-align: left;
            padding: 8px;
        }
        th {
            background-color: rgb(49, 49, 49);
            padding: 16px;
        }

        

        tr:first-child th:first-child,
    tr:last-child td:first-child,
    tr:first-child th:last-child,
    tr:last-child td:last-child {
        border-radius: 0;
    }

    table {
        border-radius: 10px; /* Adjust this value as needed */
        overflow: hidden;
    }



</style>

<style>
    .flex-space-between-and-center-aligned{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .page-action-button{
        padding: 8px 16px;
        border-radius: 8px;
        border: none;
        background-color: rgba(72,60,111,1);
        color: white;

    }

    button:hover{
        cursor: pointer;
    }
</style>