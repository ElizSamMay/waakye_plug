
<script setup>
    /* eslint-disable */
    const props = defineProps({
         buttonTitle: String,
         enableButton: Boolean,
         isLoading: Boolean
    })
</script>


<template>
     <button @click="$emit('button-tapped')" :disabled="!enableButton" :class="{'isEnabled': enableButton, 'isDisabled': !enableButton}">
          <div class="spinner" v-if="isLoading"></div>  {{ buttonTitle }}
     </button>
</template>

<style scoped>
     button{
         color: white;
         border-radius: 10px;
         border: none;
         padding: 16px;
         display: flex;
         gap: 16px;
         justify-content: center;
         width: 100%;
         align-items: center;
     }

    .isEnabled {
         background-color: black;
    }

    .isDisabled{
       background-color: rgba(0, 0, 0, 0.7);
    }

.spinner {
  width: 20px;
  height: 20px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid black;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>