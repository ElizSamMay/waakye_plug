<template>
<section class="fs">
        <div>
            <img class="ty" src="../assets/thank 1.png">
        </div>
    </section>

    <section class="ss">
      <div>
        <p class="Orpl">
            Order Placed
        </p>
        <p class="sth">
            Stay hooked, We will call you once order is 
           accepted and the rider sets off on his way to your location.
           Payment will be made to the rider once item is delivered.
        </p>
    </div>

    <div class="butt">
        <button class="dn">
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
   .fs{
            border: 1px solid black;
            padding: 50px;
            background-color:rgb(31, 31, 70) ;
        }
        
        .ty{
            width: 100%;
        }
        .ss{
            border: 1px solid black;
            padding: 20px;
            background-color:rgb(31, 31, 70) ;
        }
        .Orpl{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 25px;
            text-align: center;
            color: white;
        }
        .sth{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            font-weight: 550;
            color: white;
            margin-bottom: 300px;
        }
        .butt{
            border: 1px solid black;
             padding: 10px;  
            position:relative;
            
        }
        .dn{
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