

<script setup>
import {defineProps} from 'vue';
    const props = defineProps({
        pack: Object
    })

</script>


<template>


       
    <div :class="{'pack-component': !pack?.isSelected, 'pack-component-selected': pack?.isSelected}" >

        <div class="select-number" v-if="pack?.isSelected ?? false">
            <p @click="$emit('plus-tapped', [props?.pack])">+</p> 
               <div class="count">{{ props?.pack?.count ?? 0 }}</div>
            <p @click="$emit('minus-tapped', [props?.pack])">-</p>
        </div>
       

        <div class="details" @click="$emit('pack-tapped', [props?.pack])">
        <div class="title-and-selector">
            <p :class="{'title': !pack?.isSelected, 'title-white': pack?.isSelected}">{{props.pack?.title ?? "" }}</p>
        
        </div>
        <div class="ingredients">
            <p v-for="ingredient in props?.pack?.ingredients" :key="ingredient">
                {{ ingredient }}
            </p>

            <div class="price">
                <p>GHS {{ props?.pack?.price * props?.pack.count }}</p>
            </div>
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
    display: flex;
    align-items: center;
    gap: 16px;
    color: rgb(31, 31, 70);
    /* min-height: 200px; */
}

.pack-component-selected{
    border: 2px solid rgb(31, 31, 70); 
    padding: 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: white;
    background-color: rgb(31, 31, 70);
    /* min-height: 200px; */
}

.title{
    color: rgb(31, 31, 70);
    font-size: 16px;
    font-weight: bold;
}

.title-white{
    color: white;
    font-size: 16px;
    font-weight: bold;
}
.count{
    border: 1px solid white;
    width: 20px;
    text-align: center;
    background-color: white;
    color: black;
    

}

 .selected{
    
} 

.price{
    display: flex;
    padding-top: 8px;
    justify-content: space-between;
}

.price p:nth-child(1){
    font-weight: bold;
}

.select-number p{
    font-size: 16px;
    font-weight: bold;
    border: 1px solid white;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: rgb(31, 31, 70);
}

.select-number{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.details{
    width: 100%;
}
/* .shade{
    background-color: rgb(251, 151, 44);
    height: 80%;
    width: 80%;
    border-radius: 50%;
} */

</style>