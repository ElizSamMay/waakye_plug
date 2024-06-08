

<script setup>
import {defineModel, defineProps} from 'vue'

 const model = defineModel()

 const props = defineProps({
        fieldTitle: String,
        fieldPlaceholder: String,
        valiadateString : String,
        showError: Boolean
    })

</script>

<template>
   
    <div id="main">
        <p class="input-value-title">{{ fieldTitle }}</p>

         <div class="input-holder">
            <input type="text" :placeholder="props.fieldPlaceholder" v-model="model" @keydown="$emit('input-change')">
         </div>
         <div class="validate" v-if="props.showError"> {{valiadateString}}  </div>
    </div>

</template>


<style scoped>
#main{
   
}

.input-value-title{
    font-weight: 400;
    font-size: 0.9rem;
    color: rgba(256, 256, 256, 0.7);
    padding-bottom: 8px;
}

.input-holder{
    height: 45px;
}

input{
    height: 90%;
    width: 100%;
    outline: none;
    background-color: rgba(58, 58, 59, 1);
    border-radius: 8px;
    border:  none;
    padding: 8px;
    color: white;
}

.validate{
    color: red;
}


</style>