


<script setup>
    /* eslint-disable */
    import {defineProps} from 'vue';
    const props = defineProps({
        ingredient: Object
    })
    


</script>

<template>
    <div class="main-section-container" @click="$emit('ingredient-tapped', [ingredient])">

        <div class="image-container">

            <img src="../../assets/ghanaian_waakye_leaf.jpg" alt="">

        </div>

        <div class="text">
            {{ props.ingredient?.title }}
        </div>

        <div class="selected">
                <div class="shade" v-if="props.ingredient?.isSelected"></div>
        </div>

    </div>

</template>


<style scoped>

    .main-section-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border: 2px solid rgb(31, 31, 70);
        padding: 8px;
        position: relative;
        border-radius: 8px;
       

    }

    .image-container{
        height: 50px;
        width: 50px;
    }

    .image-container img{
        height: 100%;
        width: 100%;
    }

    .selected{
    width: 20px;
    height: 20px;
    border: 1px solid rgb(31, 31, 70);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 4px;
    right: 4px;
}

.shade{
    background-color: rgb(251, 151, 44);
    height: 80%;
    width: 80%;
    border-radius: 50%;
}

.text{
    font-size: 14px;
    font-weight: bold;
}



</style>