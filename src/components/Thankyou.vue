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
        </p>
        <p class="text">
            Stay hooked, We will call you once order is 
           accepted and the rider sets off on his way to your location.
           Payment will be made to the rider once item is delivered.
        </p>
    </div>

    <div class="buttom-button">
        <button class="text1">
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
            border: 1px solid black;
            padding: 50px;
            background-color:rgb(31, 31, 70) ;
        }
        
        .thanks-logo{
            width: 100%;
        }
        .second-container{
            border: 1px solid black;
            padding: 20px;
            background-color:rgb(31, 31, 70) ;
        }
        .palce-order{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 25px;
            text-align: center;
            color: white;
        }
        .text{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            font-weight: 550;
            color: white;
            margin-bottom: 300px;
        }
        .buttom-button{
            border: 1px solid black;
             padding: 10px;  
            position:relative;
            
        }
        .text1{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            font-weight: 550;
            color:rgb(31, 31, 70) ;
            border-radius: 50px;
            padding: 10px;
            width: 250px;
            cursor: pointer;
        }
        

</style>