
<script setup>
/* eslint-disable */
import {shops} from '@/model/waakye_combo.js'
import SelectorWithCaret from './helperComponents/SelectorWithCaret.vue';
import {ref, onMounted} from 'vue';
import router from '@/router';

const stores = ref(shops)

onMounted(()=>{
    router.push('/admin')
})
</script>

<template>
<div class="main-parent-container">
    <div class="title">Restaurants</div>

    <div class="shops">
        <div v-for="shop in shops">
            <SelectorWithCaret :details="shop"/>
        </div>
    </div>
</div>


        
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-parent-container{
        padding: 16px;
        height: 100vh;
    }

    .title{
        font-size: 32px;
    }

    .shops{
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 20px;
    }
</style>