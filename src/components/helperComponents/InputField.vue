

<script setup>
import {defineModel, defineProps} from 'vue'

 const model = defineModel()

 const props = defineProps({
        fieldTitle: String,
        fieldPlaceholder: String
    })

</script>

<template>
   
    <div id="main">
        <p class="input-value-title">{{ fieldTitle }}</p>

         <div class="input-holder">
            <input type="text" :placeholder="props.fieldPlaceholder" v-model="model" @keydown="$emit('input-change')">
         </div>
    </div>

</template>


<style scoped>
#main{
   
}

.input-value-title{
    font-weight: 400;
    font-size: 0.9rem;
    color: gray;
    padding-bottom: 8px;
}

.input-holder{
    height: 45px;
}

input{
    height: 90%;
    width: 100%;
    outline: none;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border:  none;
    padding: 8px;
}


</style>