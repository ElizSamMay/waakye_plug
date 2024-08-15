
<script setup>
/* eslint-disable */
    const props = defineProps({
        title: String,
        isSelected: Boolean

    })
</script>


<template>

    <div class="main-template-mark-holder" @click="$emit('title-tapped')">
        <p >{{ props.title }}</p>
        <div class="bottom-line" v-if="isSelected"></div>
    </div>

</template>

<style scoped>
    .main-template-mark-holder{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;

    }


    p{
        font-size: 0.8rem;
    }

    .bottom-line{
        background-color: rgb(70, 60, 108);
        width: 100%;
        height: 2px;
    }

    .main-template-mark-holder:hover{
        cursor: pointer;
    }
</style>