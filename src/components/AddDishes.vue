
<script setup> 
// import {useRouter} from 'vue-router'
import { waakyeCombos } from '../model/waakye_combo.js'
import WaakyePack from '@/components/helperComponents/WaakyePack.vue'
import SubtotalSection from '@/components/SubtotalSection.vue'
import PackCustomize from '@/components/PackCustomize.vue'
import {ref} from 'vue'

let combos = ref(waakyeCombos);
// const router = useRouter()
const isCustomerSelectionDone = ref(false)
const comboSelected = ref(combos.value[0])

function createOrder(){
    console.log(comboSelected);
    isCustomerSelectionDone.value = true
}

function goBack(){
    isCustomerSelectionDone.value = false
}

  function handlePackTapped(args){
    const combo = args[0];
    comboSelected.value = combo
    for (let i=0; i<combos.value.length; i++){
    if (combos.value[i].id === combo.id){
        combos.value[i].isSelected = !combos.value[i].isSelected
    }else{
        combos.value[i].isSelected = false
    }
  }
  }

</script>


<template>
    <div v-if="!isCustomerSelectionDone">
    <section class="image-container">
           <img class="headerpic" src="../assets/waakye_in_bowl.png">
    </section>
   
       
       <section class="second-sec">
        <div class="title-and-button">
            <p>Select Pack</p>
            <button class="create-custom-pack" @click="createCustomPack">
               Customize Your Pack
                </button>
        </div>

        <div class="packs">
            <div v-for="combo in combos" :key="combo.title">
                <WaakyePack :pack="combo" @pack-tapped="(args)=>handlePackTapped(args)"/>
                  
            </div>
        </div>
           
       </section>

       <button class="create-order-button" @click="createOrder">
               Create Order
         </button>
        </div>

        <div v-else class="sub-total">
            <SubtotalSection :combo="comboSelected" @handle-back-tapped="goBack"/>
        </div>
   </template>
   
  
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>

        .image-container{
            width: 100%;
            height: 250px;
        }

        .image-container img{
            height: 100%;
            width: 100%;
        }

        .create-order-button{
            /* width: 100%; */
            padding: 16px;
            border-radius: 32px;
            border: none;
            font-weight: bold;
            font-size: 16px;
            position: fixed;
            bottom: 32px;
            left: 16px;
            right: 16px;    
            z-index: 1000;  
            background-color: rgb(31, 31, 70);
            color: white;  
        }

        .second-sec{
            background-color: white;
            height: 200vh;
            
        }

        .title-and-button{
            padding: 32px 16px 16px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .title-and-button p:nth-child(1){
            font-size: 20px;
            font-weight: bold;
        }

        .create-custom-pack{
            padding: 8px 12px;
            border: none;
            border-radius: 16px;
            font-weight: bold;
            background-color: rgb(31, 31, 70);
            color: white
        }

        .packs{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            padding: 16px;
        }

        .sub-total{
            min-height: 100%;
        }

    @media only screen and (max-height: 700px) {
        .second-sec {
        height: 200vh;
    }
    }

    @media only screen and (max-height: 900px) {
        .second-sec {
        height: 110vh;
    }
    }

   </style>
   