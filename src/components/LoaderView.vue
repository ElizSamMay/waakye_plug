

<script>
export default {
        props: {
           message:{
            type: String
           } 
        }
}
</script>
<template>
    <div id="main-page">

        <div class="loaders">
            <div class="spinner"></div>
            <div>{{ message }}</div>
        </div>

    </div>

</template>


<style scoped>

    #main-page{
        /* width: 100vw;
        height: 100vh; */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
    }


    .loaders{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding: 30px;
        border-radius: 16px;
    }

    .spinner {
  width: 100px;
  height: 100px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--main-orange-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>