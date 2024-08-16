
/* eslint-disable */
import {createWebHistory, createRouter} from 'vue-router'
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
import AdminLandingPage from '@/admin/AdminLandingPage.vue';
import CataloguePage from '@/admin/CataloguePage.vue'
import { AuthStorageHelper } from '@/admin/storage/auth_storage_helper';
import ForgotPasswordScreen from '@/admin/auth/ForgotPasswordScreen.vue';




const router = createRouter({
    history: createWebHistory(),
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
        },
        {
            path: '/admin-land',
            name: 'admin-landing-page',
            component: AdminLandingPage
        },
        {
            path: '/admin-catalogue',
            name: 'admin-catalogue',
            component: CataloguePage
        },
        {
            path: '/admin-forgot-password',
            name: 'forgot-password',
            component: ForgotPasswordScreen
        }

    ]
})

router.beforeEach((to, from, next)=>{
    const authDetails = AuthStorageHelper.getUserDetails()
    const isLoggedIn = authDetails;
    if (isLoggedIn){
            next()
        return;
    }else{
        next()
    }
})
export default router;