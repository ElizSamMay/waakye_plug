
import {useRouter} from 'vue-router'

export class AdminRouteManager{

    static router = useRouter()

    static gotoDashBoard(){
        AdminRouteManager.router.push('/dashboard')
    }

    static gotoHome(){
        AdminRouteManager.router.push('/')
    }

}