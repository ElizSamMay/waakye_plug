<template>
<section class="first-container">
        <div>
            <img class="thanks-logo" src="../assets/thank 1.png">
        </div>
    </section>

    <section class="second-container">
      <div>
        <p class="palce-order">
            Order Placed
        </p></div>
        <div>
        <p class="text">
            Stay hooked, We will call you once your order  is 
           accepted and the rider sets off on his way to your location.
           Payment will be made to the rider once item is delivered.
        </p>
      </div>

     <div class="buttom">
        <button class="buttom-button">
            Done
        </button>
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
   .first-container{  
            padding: 20px;
        }
        
        .thanks-logo{
            width: 100%;
        }

        .second-container{ 
            display: flex;
            gap: 20px;
            flex-direction: column;
            padding: 10px;   
        }

        .palce-order{
            font-weight: 700;
            font-size: 25px;
            text-align: center;
            color: white;
        }

        .text{
            font-size: 15px;
            font-weight: 550;
            color: white;
            text-align: center;
            
        }
        
        .buttom-button{
            position: absolute;
            bottom: -20px;
            background-color: white;
            left: 16px;
            right: 16px;
            border: none;
            padding: 16px;
            border-radius: 32px;
            font-weight: bold;
            font-size: 16px;
        }
        

</style>