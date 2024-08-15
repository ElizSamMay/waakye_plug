
<template>
   <div class="dish-container-template">

    <div class="image-handler">
    <div class="image-container">
        <img src="https://i0.wp.com/1.bp.blogspot.com/-mDAYcHBuTvk/VzxNVwZR5RI/AAAAAAAANRM/xg_jsb6bXyExyi7hpXJTdBdvpOSImHebwCLcB/s1600/Coconut%2BJollof%2Brice.jpg?ssl=1" alt="">
    </div>
</div>

    <div>
        <div class="cat">Desert</div>
        <div class="desc">Cheese Sirinki Pancakes</div>
    </div>
    

    <div class="desc">$80.00</div>



   </div>
</template>

<style>

.dish-container-template{
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
   
}

.cat{
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.3);
}

.desc{
    font-size: 0.8rem;
}

.image-container{
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.image-container img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
.image-handler{
    display: flex;
    justify-content: center;
}

</style>