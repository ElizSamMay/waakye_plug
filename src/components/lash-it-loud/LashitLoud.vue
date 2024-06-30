<script setup>
/* eslint-disable */
    import {useRouter} from 'vue-router'
    import {ref} from 'vue';


    const router = useRouter()

    function goToBookingPage(){
            router.push('/book-now')
            }

   
    const hideNav = ref(false)
    function handlehamergerButtonTapped(){
        
     hideNav.value = false

    const mobileMenu = document.querySelector('.mobile-nav');

    const hamburgerMenu = document.querySelector('.hamburger');
    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });

    }

    
    function removeNav(){
      hideNav.value = true
    }
      
    </script>


<template>

 <div class="main-component">
    
    <section>
        <div class="main-parent-container">
             <button class="hamburger" @click="handlehamergerButtonTapped">
                    <div class="bar"></div>
                </button>

                <nav class="mobile-nav" v-show="!hideNav">

                    <div class="lashlogo">
                   <img class="picxxs" src="../../assets/images/lashlogo.jpeg">
                    </div>

                    <a href="#mainpage" @click="removeNav">Home</a>
                    <a href="#first" @click="removeNav">Our Services</a>
                    <a href="#second" @click="removeNav">Loud School</a>
                    <a href="#third" @click="removeNav">Visit Us</a>
                    <a href="a">Talk to us</a>

                </nav>


             <div class="second-child" >
               <button class="lasecbutt" @click="goToBookingPage">

                BOOK NOW
                </button>
              </div>
            
        </div>
    </section>


    <section>
        <div class="main-page" @click="handlehamergerButtonTapped">
            <img class="picxx"  id="mainpage" src="../../assets/images/cp1.jpg"> 
            <img class="picxx" id="first" src="../../assets/images/ourserpik.jpeg">
            <img class="picxx" src="../../assets/images/cp3.jpg">
            <img class="picxx" src="../../assets/images/cp4.jpg">
            <img class="picxx" src="../../assets/images/cp5.jpg">
            <img class="picxx" src="../../assets/images/cp6.jpg">
            <img class="picxx" src="../../assets/images/cp7.jpg">
            <img class="picxx" src="../../assets/images/cp8.jpg">
            <img class="picxx" src="../../assets/images/cp9.jpg">
            <img class="picxx" src="../../assets/images/cp10.jpg">
            <img class="picxx" src="../../assets/images/cp11.jpg">
            <img class="picxx" src="../../assets/images/cp12.jpg">
            <img class="picxx" id="second" src="../../assets/images/cp13.jpg">
            <img class="picxx" id="third" src="../../assets/images/visitpic.jpeg">
            <img class="picxx" src="../../assets/images/cp15.jpg">
            <img class="picxx" src="../../assets/images/cp16.jpg">
            
            
        </div>
    </section>


    <section class="last-container">
       
        <div class="text">
        
        </div>
        <div class="text">
           
        </div>
    </section>


    <section class="last-container">
       
        <div class="text">
         © Lash_it loud Beauty Studio - North Legon 2024
        </div>
        <div class="text">
            Powered by LUMINAEA GROUP INC.
        </div>
    </section>
        
    </div>
    

</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     /* *{
               margin: 0;
               padding: 0;
               box-sizing: border-box;   
           } */
           
        .main-parent-container{
            
            display: flex;
            padding: 16px;
            position: fixed;
            right: 0;
            left: 0;
            justify-content: space-between;
            background-color: transparent;
            z-index: 1000;
            
        }
        .main-page{
            position: relative;
            top: 80px;
            
        }


        

        .hamburger{
            position: relative;
            width: 45px;
            appearance: none;
            background-color:rgb(167, 167, 167) ;
            border: 3px solid rgb(253, 216, 253);
            border-radius: 10px;
           
            
            
        }
        .hamburger .bar, .hamburger:after, .hamburger:before{
            content: '';
            display: block;
            width: 100%;
            height: 5px;
            background-color: white;
            margin: 6px 0;
            transition: 0.4s;
        }
        .hamburger.is-active:before {
            transform: rotate(-45deg) translate(-8px, 6px);
        }

        .hamburger.is-active:after {
            transform: rotate(45deg) translate(-9px, -8px);
        }

        .hamburger.is-active .bar{
            opacity: 0;

        }
        .mobile-nav{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: fixed;
            top: 30px;
            right: 100%;
            width: 100%;
            min-height: 90vh;
            z-index:1000;
            background-color: rgb(247, 192, 200);
            margin-top: 35px;
            transition: 0.9s;
        }
        .lashlogo{
            width: 100%;
            height: 200px;

        }
        .picxxs{
        width: 100%;
        height: 100%;
       }

        .mobile-nav.is-active {
            right: 0;
        }

        .mobile-nav a {
            /* display: block; */
            text-align: center;
            margin: 0 auto 12px;
            width: 100%;
            max-width: 200px;
            padding:12px 15px ;
            background-color:rgb(233, 102, 194) ;

            color: white;
            text-decoration: none;

        }
       
         .first-child{
            display: flex;
            justify-content: space-around;
            gap: 15px;
            align-items: center;   
         }
        
        .second-child{
          
            align-content: center; 
        } 

    
        .lasecbutt{
            color: white;
            font-size: 15px;
            font-weight: bold;
            background-color:rgb(233, 102, 194) ;
            border: 3px solid rgb(253, 216, 253);
            border-radius: 15px;
            padding: 10px;
            
        }
       
        .picxx{
            
            height: 100%;
            width: 100%;
        }

        .last-container{
        background-color: rgb(245, 235, 235);
        padding: 15px;
       
       }

       .text{
        font-size: 10px;
        font-weight: 550;
        color: rgb(131, 131, 131);
        padding: 10px; 
       
       }

      
</style>