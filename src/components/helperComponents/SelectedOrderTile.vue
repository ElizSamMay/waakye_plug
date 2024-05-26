
<script setup>
/* eslint-disable */
    import {defineProps} from 'vue';

    const props = defineProps({
        pack: Object
    })


</script>

<template>

  <div class="main-template">
        <p>{{ pack.title }}</p>

        <div class="count">
            <p>GHS {{ pack.price * pack.count }}</p>
            <button @click="$emit('decrease', [pack])">-</button>
                <p>{{ pack.count }}</p>
            <button @click="$emit('increase', [pack])">+</button>
        </div>
  </div>

</template>


<style scoped>
    p{
        font-weight: bold;
    }
    .main-template{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .count{
        display: flex;
        gap: 8px;
        align-items: center;
    }

    button{
        background-color: none;
        border: 1px solid rgb(31, 31, 70);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>

