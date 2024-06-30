

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
    color: #696F79
}

.input-holder{
    height: 45px;
}

input{
    height: 100%;
    width: 100%;
    outline: none;
    border-radius: 8px;
    border:  1px solid #8692A6;
    padding: 8px;

    
}

.validate{
    color: red;
}


</style>