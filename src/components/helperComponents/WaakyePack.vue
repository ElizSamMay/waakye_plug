

<script setup>
import {defineProps} from 'vue';
    const props = defineProps({
        pack: Object
    })

</script>


<template>

    <div class="pack-component" @click="$emit('pack-tapped', [props?.pack])">
        <div class="title-and-selector">
            <p class="title">{{props.pack?.title ?? "" }}</p>
            <div class="selected">
                <div class="shade" v-if="props.pack?.isSelected"></div>
            </div>
        </div>
        <div class="ingredients">
            <p v-for="ingredient in props?.pack?.ingredients" :key="ingredient">
                {{ ingredient }}
            </p>

            <div class="price">
                <p>Price</p>
                <p>GHS {{ props?.pack?.price }}</p>
            </div>
            
        </div>
    </div>  

</template>


<style scoped>

.title-and-selector{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.pack-component{
    border: 2px solid rgb(31, 31, 70);
    padding: 16px;
    border-radius: 8px;
    min-height: 200px;
}

.title{
    color: rgb(31, 31, 70);
    font-size: 16px;
    font-weight: bold;
}

.selected{
    width: 24px;
    height: 24px;
    border: 1px solid rgb(31, 31, 70);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.price{
    display: flex;
    padding-top: 8px;
    justify-content: space-between;
}

.price p:nth-child(2){
    font-weight: bold;
}

.shade{
    background-color: rgb(251, 151, 44);
    height: 80%;
    width: 80%;
    border-radius: 50%;
}

</style>