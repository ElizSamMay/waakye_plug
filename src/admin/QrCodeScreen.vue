 <template>

    <div class="main-template">
        <div class="holder">
            <qrcode-vue :value="qrEncoder" :size="size" level="H" />
            <div class="close-button" @click="$emit('close')">x</div>
        </div>
       
    </div>
    

  </template>
  <script setup>
   /* eslint-disable */
import {ref} from 'vue';
import QrcodeVue from 'qrcode.vue'
    
    const size = ref(300)
    const props = defineProps({
        qrEncoder: String
    })

  
   
  </script>

<style scoped>
    .main-template{
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    }

    .holder{
        background-color: white;
        padding: 100px;
        border-radius: 16px;
        position: relative;
    }
</style>