<template>
 <section class="firstSec">
        <div>
            <img class="headerpic" src="../assets/Waakyeplate-homepge.png" >
        </div>
    </section>

    <section class="secondSec">
        <div class="text">
            <p class="text1">Your no. 1 Waakye Plug.</p>
        </div>
        <div class="text">
            <P class="text2">Feel the taste of some of the nicest waakye
             in Accra at the comfort of your home.</P> 
        </div>
        <div class="text">
            <p class="text3" >Thinking of payment 🤔 ?, don’t stress, 
            <span  class="edit"> We take payment upon delivery.</span></P> 
        </div>

    </section>


    <section class="lastSec">
        <div class="butt"> 
            <button class="editbutt">Get Waakye</button>
        </div>

    </section>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .firstSec{
            border: 1px solid black;
            background-color: rgb(31, 31, 70);
        }
        .headerpic{
            width: 200px;
        }
        .secondSec{
            border: 1px solid black; 
            background-color: rgb(31, 31, 70);
            color: white;
            
        }
        .text{
           
            border: 1px solid black;
            padding: 20px;
            
        }
        .text1{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 35px;
            font-weight: 700;
            

        }
        .text2,.text3{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            font-weight: 500; 
        }
        .edit{
            font-size: 20px;
            font-weight: 700;  
        }
        .lastSec{
            border: 1px solid black;
            padding: 120px; 
            position: relative;
            background-color: rgb(31, 31, 70);
        }
        .butt{
            border: 1px solid black;
            padding: 10px;  
            position: absolute;
            bottom: 15px;  
            left:  70px; 
        }
        .editbutt{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            font-weight: 550;
            border: 1px solid black;
            border-radius: 100px;
            width: 200px; 
            height: 35px;
            cursor:pointer;
        }

</style>
