<template>
 <section class="main-container">
        <img class="headerpic" src="../assets/Waakyeplate 1.png">
    </section>

    
    <section class="second-sec">
        <div class="selection-zone">
            <div class="text-1">
              <p >
                  Main
               </p>
            </div>

            <div class="text-2">
               <p >
                  Sides
              </p>
            </div>


        <button class="order">
            Create Order
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
.main-container{
            border: 1px solid black;
            background-color: rgb(31, 31, 70);
            align-content:space-between;
        }
        .headerpic{
            width: 100%;
        }
        .second-sec{
           background-color: rgb(31, 31, 70); 
        }
        .selection-zone{
            display: flex;
            gap: 220px;
            flex-direction: column;
            border: 1px solid black; 
            background-color: white;
            padding: 20px;  
            border-radius: 30px;
        }
        .text-1, .text-2{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            font-weight: 550;
            color: rgb(31, 31, 70);
            
        }
        .order{
            font-family: Arial, Helvetica, sans-serif; 
            font-size: 25px; 
            border-radius: 20px;
            background-color: rgb(31, 31, 70);
            color: white;
            width: 250px;
            cursor: pointer;
        }
</style>
