
<script setup>
    /* eslint-disable */
    const props = defineProps({
        isChecked: Boolean,
        text: String
    })
</script>


<template>
    
    <div class="check-box-component">
    <div v-if="isChecked">
        <div class="checked-component check-box-component-holder"></div>
    </div>

    <div class="check-box-component-holder" v-else>
        
    </div>
     <div class="text-gray-300" >{{ text }}</div>
    </div>
   

</template>


<style scoped>

    .check-box-component{
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .check-box-component-holder{
        border: 1px solid rgba(0, 0, 0, 0.5);
        width: 20px;
        height: 20px;
        border-radius: 6px;
    }

    .checked-component{
        background-color: black;
    }

    .check-box-component:hover{
        cursor: pointer;
    }

</style>
   
<style>
 .text-gray-300{
      color: var(--text-gray-300);
      font-size: 14px;
    }
</style>
