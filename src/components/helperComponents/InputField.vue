

<script setup>
import {defineModel, defineProps} from 'vue'

 const model = defineModel()

 const props = defineProps({
        fieldTitle: String,
        fieldPlaceholder: String,
        valiadateString : String,
        showError: Boolean,
        isLight: Boolean
    })

</script>

<template>
   
    <div id="main">
        <p :class="{'input-value-title': !isLight, 'input-value-title-light': isLight }">{{ fieldTitle }}</p>

         <div class="input-holder">
            <input :class="{'dark-input': !isLight, 'light-input': isLight}" type="text" :placeholder="props.fieldPlaceholder" v-model="model" @keydown="$emit('input-change')">
         </div>
         <div class="validate" v-if="props.showError"> {{valiadateString}}  </div>
    </div>

</template>


<style scoped>
#main{
   width: 100%;
}

.input-value-title{
    font-size: 0.9rem;
    color: rgba(256, 256, 256, 0.7);
    padding-bottom: 8px;
}

.input-value-title-light{
    font-size: 0.8rem;
    color: rgb(41, 41, 70);
    padding-bottom: 8px;
  
}

.input-holder{
    height: 45px;
}

input{
    height: 90%;
    width: 100%;
    outline: none;
    border-radius: 4px;
    border:  1px solid rgba(0, 0, 0, 0.2);
    padding: 16px 8px;
    color: white;
}

.light-input{
    color: rgb(41, 41, 70)
}

.dark-input{
    color: white;
}

.validate{
    color: red;
}


</style>