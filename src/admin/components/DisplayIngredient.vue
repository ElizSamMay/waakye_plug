

<script setup>
     /* eslint-disable */
     const props =  defineProps(
        {
            name: String,
            price: String, 
            currency: String  
        }
     )
</script>

<template>

    <div class="ingredient-select-tile">
        <div class="name-and-price">
            <div class="name">{{ name }}</div>
            <div class="price">{{currency ?? 'GHS' }} {{ price }}</div>
        </div>

        <div class="close-icon">x</div>
    </div>

</template>



<style scoped>

    .ingredient-select-tile{
        background-color: rgba(72,60,111,0.4);
        border: 2px solid rgba(72,60,111,1);
        border-radius: 16px;
        display: flex;
        justify-content: space-between;
        padding: 8px;
        min-width: 100px;
        color: rgba(72,60,111,1);
    }

    .price{
        font-weight: bold;
    }

    .close-icon{
        border: 1px solid rgba(72,60,111,1);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        padding: 4px;

    }

    .close-icon:hover{
        cursor: pointer;
    }
</style>