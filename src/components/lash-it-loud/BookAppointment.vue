<script setup>
/* eslint-disable */
    import {useRouter} from 'vue-router'
    import {ref} from 'vue';


    const router = useRouter()

    
   

    
    
    </script>


<template>
 
 
        
            
            <div id="parent">
                <section class="parent-container">

                    <div class="saloon">
                        
                        <img class="saloon-image" src="../../assets/images/lashlogo.jpeg">
                            
                    </div>

                    <div class="details">
                        <p class="text">Lash_ItLoud Beauty Studio</p>
                        <p class="subtext">Abgogba - Ashongman Rd, North Legon</p>
                        <p class="subtext">Tuesdays - Saturday 8:00 to 19:00</p>
                        <p class="subtext">Sundays 13:00 to 19:00</p>
                    </div>
                </section>

                 <section class="child-container">
                <p class="servicetext">Select Services</p>

                <div>
                    <p class="final-text">
                        Sundays are strictly by appointment.
                         Head over to our website or our DMs and secure a slot
                          on Sunday by making half deposit.
                    </p>
                 </div>

                <div class="bookingszone">
                   <button class="pickservices">LASH EXTENSION</button> 
                   <button class="pickservices1">BROWS & FACIALS</button>
                   <button class="pickservices2">PIERCING</button>
                </div> 
             </section>
      
                <section class="cancellationsection">

                    <div class="message">
                        
                        <p  class="first">
                            What if I miss my appointment?
                        </p>
                        <p class="second">
                            Please read our Cancellation Policy...
                        </p>

                        
                        <button class="read">
                            Click here to read >>
                        </button>

                    </div>
                </section>
           
                
                
            </div>
           
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
 .parent-container{
           display: flex;
           flex-direction: column;
           padding: 2px;
           background-color: rgb(248, 234, 250);
           
       }


       .saloon{
        
         height: 220px;
       }
      
       
       .saloon-image{
           height: 100%;
           width: 100%;
           
       }
       .details{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 10px;
       }

       .text{
       font-size: 24px;
       font-weight: bolder;
       }

       .subtext{
        font-size: 16px;
        color: rgba(0, 0, 0, 0.4);

       }
       .child-container{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: white;
        height: 50vh;
        overflow-y: scroll;
        /* margin-top: 20px; */
       }
       .servicetext{
        background-color: rgb(245, 245, 195);
        text-align: center;
        font-size: 26px;
        font-weight: bolder;
        padding: 10px;
       }
       .bookingszone{
        display: flex;
        gap: 10px;
        justify-content: space-around;
        align-content: center;
        height: 100px;
        width: 420px;
        padding: 18px;
       }

       .pickservices, .pickservices1, .pickservices2{
        height: 100%;
        width: 100%;
        border: none;
        border-radius: 7px;
        font-weight: bold;
         border: 3px solid rgb(163, 84, 163);
        background: rgb(238,174,202);
        background: radial-gradient(circle, rgb(255, 129, 184) 0%, rgb(102, 173, 255) 100%);
        color: white;
       }
       
       .final-text{
        font-weight: bold;
        padding: 10px;
       }

        .cancellationsection{
            padding: 20px;
            
        }

        .message{
            padding: 10px;
            border: 2px solid rgb(59, 18, 18);
            border-radius: 20px;
            margin-top: 0;
        }
        
        .first{
            font-size: 18px; 
            font-weight: bold; 
            padding: 12px;
            color: rgb(233, 102, 194); 
        }

        .second{
            font-size: 15px;
            padding: 12px; 
            font-weight: 550; 
        }

        .read{
            color:white;
            background-color:rgb(233, 102, 194) ;
            border: 3px solid rgb(253, 216, 253);
            border-radius: 15px;
            padding: 10px;
            font-size: 16px;
            
            
        }
       
      
</style>