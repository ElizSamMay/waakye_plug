
<script setup>
import OptionSelectorComponent from '@/admin/components/OptionSelectorComponent.vue';
import {useRouter} from 'vue-router'
import { onMounted } from 'vue';
import { AuthStorageHelper } from './storage/auth_storage_helper';




const router = useRouter()

onMounted(()=>{
    const userDetails = AuthStorageHelper.getUserDetails()
    const token = userDetails[AuthStorageHelper.token]
    const isLoggedIn = token
    if (isLoggedIn){
        router.push('/dashboard')
    }
})
function registerRestaurant(){
    console.log("Mango")
   router.push('/admin')
}

function registerProduct(){
   router.push('/')
}

</script>


<template>

    <div class="main-screen-holder">
        <div class="left-section">
            <img src="../assets/office_man.svg" alt="">

            <div class="description-title-col">
                <p class="mini-title">Let’s get started on some warm coffee!</p>
                <p class="desc-title">Select the type of business you operate and let's get started.</p>
            </div>
           
        </div>

        <div class="right-section">
            <!-- <div class="top-section">
                <div class="empty"></div>
                <div class="text-holder"><span class="gray-text">Already have an account ?</span><span> Sign In</span></div>
            </div> -->

            <div class="middle-section">
                    <div class="middle-section-child">
                        <p class="large-title">Join Us!</p>
                        <p class="gray-text font-size-12">To begin this journey, tell us which kind of shop you operate based on the kind of product you offer. </p>

                        <div>
                            <OptionSelectorComponent  title="Restaurant" description="Touch up your restaurant with a digital feel and gain insights in restaurant performance" @button-tapped="registerRestaurant"/>
                            <OptionSelectorComponent  title="Products & Services" description="Expose your business online to reach a myriad of customers" @button-tapped="registerProduct"/>
                        </div>

                    </div>
            </div>

        </div>
    </div>

</template>


<style scoped>
    .main-screen-holder{
        display: flex;
        width: 100vw;
        height: 100vh;
    }

    .left-section{
        width: 55%;
        background-color: #FDB149;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;
    }

    .right-section{
        width: 45%;
        background-color: white;
        padding: 50px 32px;
        }

    .top-section{
        display: flex;
        justify-content: space-between;
    }
    
    .middle-section{
        height: 100%;
        padding: 0 48px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .middle-section-child{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

    }


</style>

<style>
    .mini-title{
        color: white;
        font-size: 20px;
        font-weight: bold;
    }

    .desc-title{
        color: white;
    }

    .description-title-col{
        align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4px;
        font-size: 12px;
    }

    .gray-text{
        color: rgb(136, 146, 164);
    }

    .large-title{
        font-size: 30px;
        font-weight: bold;
    }

    .font-size-12{
        font-size: 14px;
    }
</style>


