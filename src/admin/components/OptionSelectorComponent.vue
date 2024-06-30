

<script setup>
/* eslint-disable */ 
import {defineProps} from 'vue';
   const props = defineProps({
     title: String,
     description: String
   })
</script>

<template>
    
    <div class="paddined" @click="$emit('button-tapped')">
    <div class="main-container-holder">
        <div class="image-and-text">
            <div class="image-container">
                <img src="../../assets/register.svg" alt="">
            </div>
            <div class="title-and-subtitle">
                <p class="title-text">{{ props.title }}</p>
                <p class="subtitle-text gray-text">{{ props.description }}</p>
            </div>
        </div>
         <div class="icon"><img src="../../assets/arrow-right.svg" alt=""></div>
    </div>
</div>
</template>


<style scoped>
.paddined{
    padding: 16px;
}

.paddined :hover{
    cursor: pointer;
}
  .main-container-holder{
    padding: 24px;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    align-items: center;

  }

  .image-and-text{
    display: flex;
    align-items: center;
    gap: 16px
  }

  .title-text{
    font-weight: bold;
  }

  .subtitle-text{
    font-size: 12px;
  }

  .title-and-subtitle{
    display: flex;
    gap: 4px;
    flex-direction: column;
  }

</style>