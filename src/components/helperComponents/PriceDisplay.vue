<script setup>
import {defineProps} from 'vue'
    const props =  defineProps({
        pricing: Object
    })
</script>

<template>

    <div class="template-holder">
        <div class="title">{{ props.pricing?.title }}</div>
        <div class="value">GHS {{ props.pricing?.value }}</div>
    </div>

</template>


<style scoped>
    .template-holder{
        display: flex;
        justify-content: space-between;
    }

    .title{
        font-size: 20px;
        color: white;
        font-size: bold;
    }

    .value{
        font-size: 16px;
        font-weight: bold;
        color: white;
    }
</style>