

<script setup>
/* eslint-disable */
    const props = defineProps({
        title: String,
        isSelected: Boolean,
        id: String
    })
</script>

<template>


    <div :class="{'main-template-container-holder': !props.isSelected, 'main-template-container-holder-selected': props.isSelected }" @click="$emit('category-tapped', [props.id])">

        <div class="image-and-title">
            <!-- <div class="image-container">

            </div> -->

            <div class="title-holder">
                {{ props.title }}
            </div>
        </div>

        <div class="number-of-items">

        </div>
    </div>

</template>


<style scoped>
    .main-template-container-holder{
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 8px;
        display: flex;

        align-items: center;
        border-radius: 8px;
      
    }

    .main-template-container-holder-selected{
        background-color: white;
        border: 1px solid rgb(41, 41, 70);
        padding: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
       
    }

</style>