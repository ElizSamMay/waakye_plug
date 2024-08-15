


<script setup>

</script>

<template>

    <div class="main-template-holder">
        <div class="image-container">
            <img src="../../assets/upload-line.svg" alt="">
        </div>

        <p>Tap To Upload Image</p>
        
    </div>
    <div class="description">Upload Dish Image</div>

</template>


<style scoped>
    .main-template-holder{
        border: 2px dashed rgb(41, 41, 70);
        border-radius: 8px;
        height: 200px;
        width: 200px;
        background-color: white;
        margin-bottom: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .description{
        font-size: 0.8rem;
    }
    .image-container{
        width: 70px;
    }

    .main-template-holder:hover{
        cursor: pointer;
    }
</style>


