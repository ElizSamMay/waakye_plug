

import {createMemoryHistory, createRouter} from 'vue-router'
import HomePage from '../components/HomePage.vue';
import OrderPrefered from '../components/OrderPrefered.vue';
import AddDishes from '../components/AddDishes.vue';
import SubtotalSection from '../components/SubtotalSection.vue';
import PackCustomize from '../components/PackCustomize.vue';
import EndThankYou from '../components/EndThankYou.vue';




const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage 
        },
        {
            path: '/order-prefered',
            name: 'orderPrefered',
            component: OrderPrefered
        },
        {
            path: '/add-dishes',
            name: 'addDishes',
            component: AddDishes
        },
        {
            path: '/pack-customize',
            name: 'packCustomize',
            component: PackCustomize
        },
        {
            path: '/sub-total',
            name: 'subtotalSection',
            component: SubtotalSection
        },
        {
            path: '/thank-you',
            name: 'thankYou',
            component: EndThankYou
        }

        


    ]
})

export default router;