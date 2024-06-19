<script setup>
    import {useRouter} from 'vue-router'
   

    const router = useRouter()


    function handleStartButtonTapped(){
        router.push('/add-dishes')
    }

</script>



<template>

 
  <div class="main-container">
    <div class="child-container">
        <section class="firstSec">
        <div class="image-handler">
            <img class="headerpic" src="../assets/the_community-logo2.png">
        </div>
    </section>

    <section class="second-sec">
        <div>
            <div>
                <p class="text1">Your Errands at Hand.</p>
            </div>
        </div>


        <div class="text-2-comp">
            <P class="text2">Delivering love and care, right to your cozy corner !.</P> 

            <p class="text3" >Thinking of payment 🤔 ?, don’t stress, 
            <span  class="edit"> We take payment upon delivery.</span></P> 
        </div>

    </section>


    <section class="lastSec">

        <div class="bottom-button"> 
            <button @click="handleStartButtonTapped">Let Get it</button>
        </div>

    </section>
    </div>
    
  </div>
 
    
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .main-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
       
        

        .image-handler{
            width: 170px;
            position: absolute;
            left: 0;
            top: 0;
           

        }

        .image-handler img{
            height: 100%;
            width: 100%;
        }
        .second-sec{
            color: white;
            padding:  16px;
            display: flex;
            flex-direction: column;
            height: 3rem; 
            gap: 30px;
            

        }
        .text1{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 2rem;
            font-weight: 700;
        
        }

        .text-2-comp{
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
       
        
        

        .text2,.text3{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1rem;

        }

        .edit{
            font-size: 16px;
            font-weight: 700;  
        }
        
    
        
        
        .bottom-button
        {
            position: fixed;
            bottom: 25px;
            left: 16px;
            right: 16px;
        }

        .bottom-button button{
            border: none;
            width: 100%;
            padding: 16px;
            font-size: 16px;
            border-radius: 32px;
            font-weight: bold;
            color: rgb(31, 31, 70)
        }

        
</style>
