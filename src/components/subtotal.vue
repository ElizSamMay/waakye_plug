<template>
 <section class="firsSec">
        <div class="pag"></div>
        <div class="pag"></div>
        <div class="pag"></div>
        <div class="pag"></div>
    </section>

    <section class="seconsec">
        <div>
            <p>Subtotal</p>
            <p>Delivery</p>
        </div>

        <div class="boxcon">
            <div  class="smbx">
            </div>
            <button class="con">Confirm</button>
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
 .firsSec{
            display: flex;
            gap: 10px;
            flex-direction: column;
            border: 1px solid black;
            padding: 40px;
            background-color:rgb(31, 31, 70) ;
          
        }
        .pag{
            border: 1px solid black;
            padding: 50px;
            background-color: rgb(225, 227, 230);
        }
        .seconsec{
            border: 1px solid black;
            padding: 10px; 
            background-color:  rgb(225, 227, 230); 
        }
        .boxcon{
            display: flex;
            align-content: space-around;
            gap: 150px;
            border: 1px solid black;
        }
        .smbx{
            border: 1px solid black;
            width: 50px;
            padding: 20px;
            background-color: rgb(31, 31, 70);
            color: white; border: 1px solid black;
            border-radius: 10px;
        }
        .con{
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