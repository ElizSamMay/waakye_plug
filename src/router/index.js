

import {createMemoryHistory, createRouter} from 'vue-router'
import VariousSupermarket from '../components/VariousSupermarket.vue';
import AddDishes from '../components/AddDishes.vue';
import SubtotalSection from '../components/SubtotalSection.vue';
import PackCustomize from '../components/PackCustomize.vue';
import EndThankYou from '../components/EndThankYou.vue';
import Lush from '../components/lash-it-loud/LashitLoud.vue';
import BookNow from '../components/lash-it-loud/BookNow.vue';
import BookAppointment from '../components/lash-it-loud/BookAppointment.vue';





const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Lush
        },
        {
            path: '/book-now',
            name: 'booknow',
            component: BookNow
        },
        {
            path: '/book-appointment',
            name: 'bookappointment ',
            component: BookAppointment 
        },
        {
            path: '/various-supermarket',
            name: 'varioussupermarket',
            component: VariousSupermarket
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