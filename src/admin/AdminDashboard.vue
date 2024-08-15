<script setup>
/* eslint-disable */
import { ref } from "vue";
import DashboardDataComponent from "@/admin/components/DashboardDataComponent.vue";
import FoodPackComponent from "@/admin/components/FoodPackComponent.vue";
import AddDish from "@/admin/helperComponents/AddDish.vue";
import QrCodeScreen from "@/admin/QrCodeScreen.vue";
import ProfileHeaderComponent from "@/admin/components/ProfileHeaderComponent.vue";
import CheckBoxComponent from '@/admin/components/CheckBoxComponent.vue'
import Menu from 'primevue/menu';
import MenuItem from "@/components/MenuComponent.vue"
import { useRouter } from "vue-router";
// import Button from 'primevue/button';

const router = useRouter()

const showAddDish = ref(false);
const showQr = ref(false);
const qrData = ref("https://waakye-plug.onrender.com");

function showAddDishModal() {
  showAddDish.value = true;
}

function closeModal() {
  showAddDish.value = false;
}

function addDish(args) {
  showAddDish.value = false;
  const value = args[0];
  dishesAdded.value.push(value);
}

function close() {
  showQr.value = false;
}

function openQr() {
  showQr.value = true;
}

function pushToCatalogue() {
  router.push('/admin-catalogue')
}

const dashboardDisplayItems = ref([
  {
    iconUrl: "https://remacccount.s3.amazonaws.com/static/stats_icon.svg",
    value: "2000",
    description: "Today's Revenue",
  },
  {
    iconUrl: "https://remacccount.s3.amazonaws.com/static/stats_icon.svg",
    value: "2000",
    description: "Today's Revenue",
  },
  {
    iconUrl: "https://remacccount.s3.amazonaws.com/static/stats_icon.svg",
    value: "2000",
    description: "Today's Revenue",
  },

]);

const dishesAdded = ref([
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGb7ic70-Ri4amPTy4RByWZ1sQY8K17DlEuQ&s",
    ingredients: "Chicken",
    foodTitle: "Jollof",
    totalSalesToday: "2000",
    price: "100",
    id: "123",
  },
]);

const menu = ref();
const items = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Export',
        icon: 'pi pi-upload'
      }
    ]
  }
]);

const toggle = (event) => {
  console.log(event)
  // menu.value.toggle(event);
};

</script>

<template>
  <div class="main-template-container">
    <div class="first-column"></div>

    <div class="hero-section">
      <QrCodeScreen @close="close" v-if="showQr" :qrEncoder="qrData" />

      <div class="flex-space-between-and-center-aligned">
        <div class="title">Dashboard</div>
        <ProfileHeaderComponent />
      </div>

      <div class="home-action-button-container">
        <button @click="pushToCatalogue">View Catalogue</button>
        <button>Generate Web QrCode</button>
      </div>

      <div class="dashboard-values">
        <div class="statistic-items">
          <div v-for="item in dashboardDisplayItems">
            <DashboardDataComponent :iconUrl="item.iconUrl" :value="item.value" :description="item.description" />
          </div>
        </div>
      </div>

      <!-- <div class="food-items">
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
                
            </div> -->

      <div class="table-div-section">
        <div class="food-items">

          <div class="header-section">

            <div class="title-div">
              Order Reports
            </div>

            <div class="actions">
              <div class="action-item action-1">Updated 1 day ago</div>
              <div class="action-item action-2"><img src="../assets/sort.svg" alt=""> Sort</div>
              <div class="action-item action-2"><img src="../assets/filter.svg" alt=""> Filter</div>
            </div>


          </div>

          <div class="table">
            <!-- head of table -->
            <table>
              <thead>
                <tr class="header-tr">
                  <div class="left-section-holder">
                    <th>
                      <CheckBoxComponent />
                    </th>
                    <th># Order Number</th>
                    <th># Customer's phone</th>
                  </div>

                  <div class="right-section-holder">
                    <th>Order Status</th>
                    <th>Actions</th>
                  </div>

                </tr>
              </thead>

              <tbody>
                <tr class="header-tr body-tr">

                  <div class="left-section-holder-body">
                    <td>
                      <CheckBoxComponent />
                    </td>
                    <td>AS-14321</td>
                    <td>0556236739</td>
                  </div>

                  <div class="right-section-holder-body">
                    <td>Tattoo Lash</td>
                    <td>GHS 350</td>
                    <td>
                      <div class="status-component pending">Pending</div>
                    </td>
                    <td>
                      <div class="card flex justify-center">
                        <MenuItem :approvefunc="approvefunc" :disaapprovefunc="disapprovefunc"
                          :verifiedfunc="verifiedfunc" :unverifiedfunc="unverifiedfunc" :fetchAllfunc="fetchAllfunc">
                        <img src="../assets/more - vertical.svg" alt="" class="settings-imagee">
                        </MenuItem>
                      </div>
                    </td>
                  </div>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <AddDish v-if="showAddDish" @close-modal="closeModal" @add-dish="(args) => addDish(args)" />
  </div>
</template>

<style scoped>
.main-template-container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 5% 95%;
  background: white;
  width: 100vw;
}

.first-column {
  background-color: black;
}

.hero-section {
  background-color: white;
  padding: 16px;
}

.final-column {
  background-color: rgb(49, 49, 49);
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
}

.title {
  font-size: 24px;
  color: #373b53;
}

.dashboard-values {
  padding-top: 32px;
}

.statistic-items {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

.food-items .title {
  margin-bottom: 8px;
}

/* .food-items {
  margin-top: 64px;
} */

.food-packs {
  display: flex;
  gap: 16px;
  width: 100%;
  overflow-x: scroll;
}

.table {
  width: 100%;
}

table {
  width: 100%;
  color: black;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  padding: 16px;
  /* background-color: green; */
}

td {
  padding: 24px 14px;
  text-align: center;
  font-size: 14px;
  color: #252733
    /* background-color: red; */
}

th {
  /* background-color: rgb(49, 49, 49); */
  padding: 16px;
  font-size: 14px;
  font-weight: bold;
  color: #9FA2B4;
}

tr:first-child th:first-child,
tr:last-child td:first-child,
tr:first-child th:last-child,
tr:last-child td:last-child {
  border-radius: 0;
}

table {
  border-radius: 10px;
  /* Adjust this value as needed */
  overflow: hidden;
}
</style>

<style>
.flex-space-between-and-center-aligned {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page-action-button {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: rgba(72, 60, 111, 1);
  color: white;
}

button:hover {
  cursor: pointer;
}

.table-div-section {
  border: 1px solid #DFE0EB;
  border-radius: 16px;
  margin-top: 64px;
  padding-top: 32px;
}

.title-div {
  font-weight: 600;
  font-size: 20px;
  color: #252733;
}

.header-section {
  display: flex;
  justify-content: space-between;
  padding: 0 32px 32px 32px;

}

.actions {
  display: flex;
  gap: 32px;
}

.action-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.action-1 {
  color: #C5C7CD;
  font-size: 12px;
}

.action-2 {
  color: #4B506D;
  font-size: 14px;
}

.header-tr {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.body-tr {
  border-bottom: 1px solid #DFE0EB;

}

.body-tr:hover {
  background-color: rgba(253, 177, 73, 0.15);
}


.left-section-holder {
  display: flex;
  align-items: center;
  gap: 12px;
}

.left-section-holder-body {
  display: flex;
  align-items: center;
  gap: 36px;
}

.right-section-holder-body {
  display: flex;
  align-items: center;
  gap: 18px
}

thead {
  border-bottom: 2px solid #DFE0EB;
}

.status-component {
  padding: 6px 6px;
  border-radius: 24px;
  color: white;
  min-width: 80px;
}

.active {
  background-color: #29CC97;
}

.pending {
  background-color: #FEC400;
}

.cancelled {
  background-color: #F12B2C;
}

.home-action-button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.home-action-button-container button {
  border: none;
  font-weight: bold;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;

}
</style>
