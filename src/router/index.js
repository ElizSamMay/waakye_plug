

import {createMemoryHistory, createRouter} from 'vue-router'
import HomePage from '../components/HomePage.vue';
import AddDishes from '../components/AddDishes.vue';
import subtotal from "../components/subtotal.vue";
import thankyou from "../components/thankyou.vue";


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
            component: subtotal
        },
        {
            path: '/thank-you',
            name: 'thankyou',
            component: thankyou
        }

        


    ]
})

export default router;