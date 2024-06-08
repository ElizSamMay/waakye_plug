


<script setup>
     /* eslint-disable */
     const props = defineProps({
        iconUrl: String, 
        value: String,
        description: String
     })

</script>

<template>

    <div class="main-component-holder container-default-padding">
        <div class="icon-holder">
            <img :src="iconUrl" alt="">
        </div>

        <div class="value-and-desc">
            <div class="value">{{ value }}</div>
            <div class="desc">{{ description }}</div>

        </div>
    </div>

</template>


<style scoped>
        .main-component-holder{
            display: flex;
            align-items: center;
            gap: 16px;
            background-color: rgb(49, 49, 49);
            border-radius: 8px;
            color: white;
        }

        .icon-holder{
            width: 48px;
            height: 48px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
        }

        .icon-holder img{
            width: 70%;
            height: 70%;
        }

        .value-and-desc{
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
</style>

<style>
    .container-default-padding{
        padding: 16px;
    }
</style>