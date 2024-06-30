


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
        <div class="main-component-holder-2 ">
        <div class="icon-holder">
            <img src="../../assets/timer.svg" alt="">
        </div>

        <div class="value-and-desc">
            <div class="title-string desc">Revenue</div>
            <div class="value">GH¢ {{ value }}</div>
            <div class="desc">total: GH¢ 100</div>
        </div>

    </div>
        <div class="final-part">
            <img src="../../assets/dots.svg" alt="">
            <p class="desc">+0.7%</p>
        </div>
    </div>

</template>


<style scoped>
        .main-component-holder{
            display: flex;
            align-items: center;
            gap: 16px;
            background-color: #29CC97;
            border-radius: 8px;
            color: white;
            padding: 32px;
            justify-content: space-between;
        }

        .main-component-holder-2{
            padding: 0;
            display: flex;
            align-items: center;
            gap: 16px;

        }

        .icon-holder{
            width: 64px;
            height: 64px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-radius: 50%;
        }

       

        .value-and-desc{
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .value{
            font-size: 24px;
            font-weight: bold;
        }

        .desc{
            font-size: 14px;
            font-weight: lighter;
        }

        .final-part{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100px;
        }
</style>

<style>
    .container-default-padding{
        padding: 16px;
    }
</style>