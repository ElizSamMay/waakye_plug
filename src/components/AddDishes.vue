
<script setup> 
// import {useRouter} from 'vue-router'
 /* eslint-disable */
import { waakyeCombos } from '../model/waakye_combo.js'
import WaakyePack from '@/components/helperComponents/WaakyePack.vue'
import PackCustomize from '@/components/PackCustomize.vue'
import {ref} from 'vue'
import { purchaseItemStore, purchaseOrderItems } from '@/store/store.js'
import {useRouter} from 'vue-router'
import { restaurant } from '@/store/store.js'
   

 const router = useRouter()

let combos = ref(waakyeCombos);
const isCustomerSelectionDone = ref(false)
const comboSelected = ref(combos.value[0])
const createCustomTapped = ref(false)
const packs = ref(restaurant.restaurantItem.packs)

function createOrder(){
    purchaseItemStore.update(comboSelected.value)
    const selectedOrderItems = packs.value.filter((pack) => pack.isSelected == true);
    purchaseOrderItems.updateItems(selectedOrderItems)
    router.push('/sub-total')
}

function goBack(){
    isCustomerSelectionDone.value = false
}     

  function handlePackTapped(args){
    const pack = args[0];
    // comboSelected.value = combo
    for (let i=0; i<packs.value.length; i++){
    if (packs.value[i].id === pack.id){
        packs.value[i].isSelected = !packs.value[i].isSelected
    }
  }
  }

  function createCustomPack(){
    createCustomTapped.value = true;
  }

  function close(){
    createCustomTapped.value = false
  }

  function handleCreateOrder(args){
    const ingredients = args[0]
    console.log(ingredients)
  }

  function increaseCount(args){
    for (let i = 0; i < packs.value.length; i++) {
    if (packs.value[i].id === args[0].id) {
        packs.value[i].count += 1
        
    }
  }
  }


  function decreaseCount(args){
    for (let i = 0; i < packs.value.length; i++) {
    if (packs.value[i].id === args[0].id) {
        packs.value[i].count = packs.value[i].count <= 1 ? 1 : packs.value[i].count - 1
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
        <div class="let-select">
               Select Fixed Pack
            </div>

        <div class="packs">
            <div v-for="combo in packs" :key="combo.title">
                <WaakyePack :pack="combo" @pack-tapped="(args)=>handlePackTapped(args)" @plus-tapped="(args)=>increaseCount(args)" @minus-tapped="(args)=>decreaseCount(args)"/>
                  
            </div>
        </div>
           
       </section>

       <button class="create-order-button" @click="createOrder" v-if="!createCustomTapped">
               Create Order
         </button>
        </div>

        
        <div :class="{'customize-pack bring-to-top': createCustomTapped, 'customize-pack send-to-bottom': !createCustomTapped }" v-if="createCustomTapped" >
            <PackCustomize @handle-close-tapped="close" @create-order-tapped="(ingredients)=>handleCreateOrder(ingredients)"/>
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
            padding: 32px 16px 20px 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            
        }

        .title-and-button p:nth-child(1){
            font-size: 20px;
            font-weight: bold;
        }

        .create-custom-pack{
            padding: 16px 32px;
            border: none;
            border-radius: 32px;
            font-size: 16px;
            font-weight: bold;
            background-color: rgb(31, 31, 70);
            color: white;
            margin: 16px;
        }
        .let-select{
            font-size: 20px;
            font-weight: bold;
            padding: 16px;
     
        }

        .packs{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            padding: 14px;
        }

        .sub-total{
            min-height: 100%;
        }

        .customize-pack{
            height: 100vh;
            position: fixed;
            background-color: rgba(0, 0, 0, 0.6);
            left: 0;
            right: 0;
            bottom: 0;
            transition: top 0.5s ease-in-out 0.2s;
        }

        .bring-to-top{
            top: 0
        }

        .send-to-bottom{
            top: 1000px;
        }

    @media only screen and (max-height: 700px) {
        .second-sec {
        height: 200vh;
    }
    }

    @media only screen and (max-height: 900px) {
        .second-sec {
        height: 160vh;
    }
    }

   </style>
   