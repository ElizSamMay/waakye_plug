
<template>
<div>
    
    <div id="parent">
        <section class="parent-container">
            <p>How would you like to order ?</p>
            <div class="walk-in">
                
                <img class="walk-inlogo" src="../assets/dinein_from_google-removebg-preview">
                    Dine in
            </div>
    
            <div class="walk-in">
                
                <img class="walk-inlogo" src="../assets/takeaway1-removebg-preview">
                To Go
            </div>
        </section>
    </div>
        
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    
    }
    .parent-container{
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        gap: 32px;
        flex-direction: column;
        padding: 30px;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 16px;
        
       
    }
    .walk-in{
        font-family: Arial, Helvetica, sans-serif;
        /* border: 1px solid black; */
        width: 200px; 
        padding: 30px;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        background-color: red;
        color: white;
        border-radius: 4px;
        align-items: center;
        gap: 20px;

       
    }
    
    .walk-inlogo{
        width: 50%;
    }

    section p:nth-child(1){
        font-size: 16px;
        font-weight: bold;
    }
    
   

</style>