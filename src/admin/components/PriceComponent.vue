

<script setup>
 /* eslint-disable */
 import {defineModel} from 'vue'

 const model = defineModel()

    const props = defineProps(
        {
            currency: String
        }
    );
</script>


<template>
    <div class="main-container">
        <div class="currency">{{ currency }}</div>
        <div  class="input-holder">
            <input type="number" name="" id="" v-model="model">
        </div>
        
    </div>

</template>


<style scoped>

.main-container{
    display: flex;
    align-items: center;
    gap: 8px;
}
    input{
    height: 90%;
    width: 100%;
    outline: none;
    border-radius: 8px;
    border:  1px solid rgba(0, 0, 0, 0.2);
    padding: 4px 8px;
    color: rgb(41, 41, 70);
}

.input-holder{
    height: 50px;
    width: 100px;
}

.currency{
    font-size: 0.8rem;

}
</style>