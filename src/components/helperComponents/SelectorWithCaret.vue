
<script setup>
import {defineProps} from 'vue'
import {useRouter} from 'vue-router'
import {restaurant} from "@/store/store.js"

const router = useRouter()
const props = defineProps({
    details: Object
})

function goToRestaurantPage(){
    restaurant.updateRestaurant(props.details)
    router.push('/restaturant')
}
</script>

<template>

    <div class="main-container-holder" @click="goToRestaurantPage">
        <div class="image-and-details">
            <div class="image-holder">
                <img :src="props.details.imageUrl" alt="">
            </div>

            <div class="details">
                <div class="header">{{ props.details.businessName }}</div>
                <div class="sub-detail">{{ props.details.street }}</div>
                <div class="sub-detail">{{ props.details.contact }}</div>
            </div>
        </div>

        <div class="caret">
            <img src="../../assets/caret-forward.png" alt="">
        </div>
    </div>

</template>




<style scoped>
        .main-container-holder{
            padding: 16px;
            border: 1px solid white;
            border-radius: 16px;
            display: flex;
            justify-content: space-between;
            background-color: white;
            align-items: center;
        }

        .sub-detail{
            color: gray;
        }

        .caret{
            border: 3px solid rgb(31, 31, 70);
            width: 32px;
            height: 32px;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .image-holder{
            height: 100px;
            width: 100px;
            border: 1px solid white;
            border-radius: 16px;
        }

        .image-holder img{
            width: 100%;
            height: 100%;
            border-radius: 16px;
        }

        .image-and-details{
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .details{
            display: flex;
            flex-direction: column;
            gap: 8px;
            gap: 8px;
        }

        .header{
            font-weight: bold;

        }

        .caret img{
            height: 12px;
            width: 8px;
        }
</style>