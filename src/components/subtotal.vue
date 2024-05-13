<template>
 <section class="first-container">
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="leaf"></div>
    </section>

    <section class="second-container">
        <div>
            <p>Subtotal</p>
            <p>Delivery</p>
        </div>

        <div class="lastzone">
            <div  class="small-box">
            </div>
            <button class="pay">Confirm</button>
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
            display: flex;
            gap: 10px;
            flex-direction: column;
            border: 1px solid black;
            padding: 40px;
            background-color:rgb(31, 31, 70) ;
          
        }
        .leaf{
            border: 1px solid black;
            padding: 50px;
            background-color: rgb(225, 227, 230);
        }
        .second-container{
            border: 1px solid black;
            padding: 10px; 
            background-color:  rgb(225, 227, 230); 
        }
        .lastzone{
            display: flex;
            align-content: space-around;
            gap: 150px;
            border: 1px solid black;
        }
        .small-box{
            border: 1px solid black;
            width: 50px;
            padding: 20px;
            background-color: rgb(31, 31, 70);
            color: white; border: 1px solid black;
            border-radius: 10px;
        }
        .pay{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
            font-weight: 550;
            background-color: rgb(31, 31, 70);
            color: white;
            width: 100px;
            border: 1px solid black;
            border-radius: 10px;
            cursor: pointer;
        }
        

</style>