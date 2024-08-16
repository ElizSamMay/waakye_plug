
<template>
    <div >
      <Menu >
        <div>
          <MenuButton
              class="menu-button-item"
          >
           <slot></slot>
  
          </MenuButton >
        </div>
          <MenuItems
            class="menu-items"
          >
            <div class="px-1 py-1">
              <MenuItem >
                <button class="button-style0" @click="props.fetchAllfunc">View</button>
              </MenuItem>
            
              <div>
                <MenuItem >
               <button class="button-style1" @click="props.disaapprovefunc">Accept</button>
              </MenuItem>
              </div>
              
            </div>
  
            <MenuItem >
              <button class="button-style2" @click="verifiedfunc">Close</button>
            </MenuItem>
  
            <MenuItem >
              <button class="button-style3" @click="unverifiedfunc">Cancel</button>
            </MenuItem>
  
          </MenuItems>
  <!--      </transition>-->
      </Menu>
    </div>
  </template>
  
  <script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
  import {defineProps} from 'vue'
  const props = defineProps({
    approvefunc: {
      type: Function,
    },
    disaapprovefunc: {
      type: Function,
    },
    verifiedfunc: {
      type: Function,
    },
    unverifiedfunc: {
      type: Function,
    },
    fetchAllfunc: {
      type: Function,
    }
  
  });
  </script>
  
  <style scoped>
  .menu-items{
    background: white;
    padding: 10px;
    border-radius: 8px;
    position: absolute;
  }
  
  .menu-button-item{
    width: 70px;
    border: none;
  }
  
  .button-style0{
    background: none;
    color: gray;
  }
  
  .button-style0:hover{
    background: gray;
    color: white;
    border-radius: 8px;
  }
  .button-style1{
    background: none;
    color: gray;
  }
  
  .button-style1:hover{
    background: green;
    color: white;
    border-radius: 8px;
  } 
  .button-style2{
    background: none;
    color: gray;
  }
  
  .button-style2:hover{
    background: rgb(246, 129, 129);
    color: white;
    border-radius: 8px;
  } 
  .button-style3{
    background: none;
    color: gray;
  }
  
  .button-style3:hover{
    background: red;
    color: white;
    border-radius: 8px;
  }

  button{
    border: none;
    padding: 6px 6px;
    background: none;
  }
  </style>