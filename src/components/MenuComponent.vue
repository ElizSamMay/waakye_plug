
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
                <button class="button-style" @click="props.fetchAllfunc">View</button>
              </MenuItem>
            
              <div>
                <MenuItem >
               <button class="button-style" @click="props.disaapprovefunc">Accept</button>
              </MenuItem>
              </div>
              
            </div>
  
            <MenuItem >
              <button class="button-style" @click="verifiedfunc">Close</button>
            </MenuItem>
  
            <MenuItem >
              <button class="button-style" @click="unverifiedfunc">Cancel</button>
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
  
  .button-style{
    background: none;
    color: gray;
  }
  
  .button-style:hover{
    background: gray;
    color: white;
    border-radius: 8px;
  }

  button{
    border: none;
    padding: 6px 6px;
    background: none;
  }
  </style>