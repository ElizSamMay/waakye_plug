/* eslint-disable */

import {createMemoryHistory, createRouter} from 'vue-router'
import HomeLuminaea from '../components/LuminaeaG.Inc/HomeLuminaea.vue';
import OrderPrefered from '../components/OrderPrefered.vue';
import VariousRestaurants from '../components/VariousRestaurants.vue';
import VariousPharmacy from '../components/VariousPharmacy.vue';
import VariousSupermarket from '../components/VariousSupermarket.vue';
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
            component: HomeLuminaea 
        },
        {
            path: '/order-prefered',
            name: 'orderPrefered',
            component: OrderPrefered
        },
        {
            path: '/various-pharmacy',
            name: 'variouspharmacy',
            component: VariousPharmacy
        },
        {
            path: '/various-supermarket',
            name: 'varioussupermarket',
            component: VariousSupermarket
        },
        {
            path: '/various-restaurants',
            name: 'variousrestaurants',
            component: VariousRestaurants
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