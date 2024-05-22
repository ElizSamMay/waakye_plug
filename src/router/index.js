

import {createMemoryHistory, createRouter} from 'vue-router'
import HomePage from '../components/HomePage.vue';
import AddDishes from '../components/AddDishes.vue';
import SubtotalSection from '../components/SubtotalSection.vue';
import ThankYou from '../components/ThankYou.vue';


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
            name: 'subtotalSection',
            // component: SubtotalSection
        },
        {
            path: '/thank-you',
            name: 'thankYou',
            component: ThankYou
        }

        


    ]
})

export default router;