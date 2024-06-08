

import {createMemoryHistory, createRouter} from 'vue-router'
import HomePage from '../components/HomePage.vue';
import AddDishes from '../components/AddDishes.vue';
import SubtotalSection from '../components/SubtotalSection.vue';
import PackCustomize from '../components/PackCustomize.vue';
import EndThankYou from '../components/EndThankYou.vue';
import VariousRestaurants from '@/components/VariousRestaurants'
import DineIn from '@/components/DineIn.vue';
import OrderStyle from '@/components/OrderStyle.vue';
import ConfirmUserDetails from '@/components/ConfirmUserDetails.vue'
import AdminSignUp from '@/admin/AdminSignUp.vue';
import AdminDashboard from '@/admin/AdminDashboard.vue';




const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
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
        },
        {
            path: '/various-restaurants',
            name: 'variousrestaurants',
            component: HomePage
        },
        {
            path: '/restaturant',
            name: 'restaurant',
            component: DineIn
        },
        {
            path: '/order-style',
            name: 'orderStyle',
            component: OrderStyle
        },
        {
            path: '/confirm-details',
            name: 'confirmDetails',
            component: ConfirmUserDetails
        },
        {
            path: '/admin',
            name:'admin',
            component: AdminSignUp
        },
        {
            path: '/dashboard',
            name:'dashboard',
            component: AdminDashboard
        }

        


    ]
})

export default router;