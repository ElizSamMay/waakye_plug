<script setup>
import {  defineEmits} from 'vue';
   /* eslint-disable */
    const emits = defineEmits(['onInputTapped'])

    const props = defineProps({
        title: String,
        placeholder: String,
        inputType: String,
        imageString: String,
        modelValue: String
    })

</script>


<template>
   
    <div class="main-input-container">
        <div class="title">{{ props.title }}</div>
        <div class="input-field-holder">
            <input :type="props.inputType" :placeholder="props.placeholder" @input="$emit('onInputTapped', $event.target.value)" v-model="props.modelValue" class="nput-value-title">
            <img :src="imageString" alt=""  class="image" @click="$emit('icon-tapped')" v-if="imageString">
        </div>
        
    </div>
 
</template>







<style scoped>
 .main-input-container{
    position: relative;
 }

 input{
    padding: 17px 20px;
    width: 100%;
    margin-bottom: 0;
 }

 input:focus{
    border: 1px solid rgba(0, 0, 0,0.5);
   
 }

 .title{
    margin-bottom: 0.5rem;
    font-size: 14px;
    font-weight: 400;
 }
 input{
   font-weight: 400;
   font-size: var(--font-size);
 }

 input::placeholder{
    font-size: 14px;
 }

 .icon{
    position: absolute;
    right: 0;
    top: 25px;
 }

 .input-field-holder{
    position: relative;
 }

 .image{
   position: absolute;
   top: 16px;
   right: 10px;
 }

 .image:hover{
   cursor: pointer;
 }
</style>