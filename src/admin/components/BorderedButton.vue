

<script setup>
    /* eslint-disable */
    const props = defineProps({
        buttonTitle: String
    })
</script>


<template>

     <button @click="$emit('button-tapped')">
         {{ props.buttonTitle }}
     </button>

</template>


<style scoped>
    button{
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        color: black;
        width: 100%;
        padding: 16px;
        background-color: white;
    }

</style>


