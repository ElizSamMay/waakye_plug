/* eslint-disable */

import {createMemoryHistory, createRouter} from 'vue-router';
import Homepage from '../components/Twelveace/TwelveAce.vue';






const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        
      

        


    ]
})

export default router;