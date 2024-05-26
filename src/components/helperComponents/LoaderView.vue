

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
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        color: white;
    }


    .loaders{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-items: center;
        background-color: #282828;
        padding: 30px;
        border-radius: 16px;
    }

    .spinner {
  width: 100px;
  height: 100px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid blueviolet;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>