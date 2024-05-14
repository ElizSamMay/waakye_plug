

import {createMemoryHistory, createRouter} from 'vue-router'
import HomePage from '../components/HomePage.vue';
import  AddDishes from '../components/AddDishes.vue';
import SubTotal from "../components/SubTotal.vue";
import Thankyou from "../components/Thankyou.vue";


const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage 
        },
        {
            path: '/add-dishes',
            name: 'addDishes',
            component: AddDishes
        },
        {
            path: '/sub-total',
            name: 'subTotal',
            component: SubTotal
        },
        {
            path: '/thank-you',
            name: 'thankYou',
            component: Thankyou
        }

        


    ]
})

export default router;