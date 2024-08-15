

<template>

    <div class="main-container-item-holder">
            <div class="plus-container">
                +
            </div>

            <div>Add New Dish to deserts</div>
    </div>

</template>


<style scoped>

    .main-container-item-holder{
        border: 1px dashed rgb(41, 41, 70);
        border-radius: 6px;
        min-height: 200px;
        padding: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
    }

    .plus-container{
        background-color: rgb(41, 41, 70);
        width: 32px;
        height: 32px;
        border-radius: 4px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }

</style>