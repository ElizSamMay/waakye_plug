<script setup>
/* eslint-disable */
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue';
import { Pagination, Navigation, Autoplay } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'






const router = useRouter()
const modules = [Pagination, Navigation, Autoplay]




onMounted(() => {

})



const hideNav = ref(false)

function handlehamergerButtonTapped() {

    hideNav.value = false

    const mobileMenu = document.querySelector('.mobile-nav');

    const hamburgerMenu = document.querySelector('.hamburger');
    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });



}


function removeNav() {
    hideNav.value = true
}
</script>





<template>

    <div class="main-component">

        <section>
            <div class="main-parent-container">
                <button class="hamburger" @click="handlehamergerButtonTapped">
                    <div class="bar"></div>
                </button>
                <div>
                    <img class="gif" src="../../assets/images/group12.png">
                </div>


                <nav class="mobile-nav" v-show="!hideNav">



                    <a class="yyy" href="#mainpage" @click="removeNav">Home</a>
                    <a href="">Company</a>
                    <a href="">About</a>
                    <a href="#first">Media</a>
                    <a href="#third">Visit Us</a>
                    <a href="https://wa.me/+233240056880">Talk to us</a>


                </nav>



                <div class="second-child">
                    <input class="sbar" type="text" placeholder="Search...">
                </div>

            </div>
        </section>


        <section>
            <div class="main-page" @click="handlehamergerButtonTapped">



                <section id="mainpage" class="firstflif-desktop">

                    <swiper class="swiper" :modules="modules" :space-between="30" :centered-slides="true"
                        :navigation="true" :pagination="{
                            clickable: true
                        }" :autoplay="{
                            delay: 200000,
                            disableOnInteraction: false
                        }">
                        <swiper-slide class="slide">
                            <video autoplay muted loop id="myVideo">
                                <!-- <source src="../../assets/images/vetvid.mp4" type="video/mp4"> -->
                            </video>
                            <div class="sample-text">

                                <p class="text-discription0">
                                    The Next Habitat
                                </p>

                                <div class="text-discription1">
                                    <p> Brings cutting-edge technology and innovative practices
                                        to the world of Veterinary, helping you maximize yields,
                                        reduce waste, and enhance sustainability.
                                    </p>
                                    <p class="subtext1">
                                        it's more done just a place
                                    </p>

                                </div>

                                <div>
                                    <p class="nice-text">
                                        Read about us
                                    </p>
                                </div>

                                <div class="quote">
                                    <div class="motivation">
                                        <p>
                                            Veterinary medicine isn't just a job,
                                            it's a calling to improve the lives of all living beings.
                                        </p>
                                        <br>
                                        <p>
                                            You're the voice for those who cannot speak,
                                            use your skills to make their lives better.
                                        </p>
                                    </div>
                                    <div class="motivation">
                                        <p>
                                            Your work goes beyond prescriptions and surgeries;
                                            it's about building relationships and trust.
                                        </p>
                                        <br>
                                        <p>
                                            Every challenge is an opportunity to grow,
                                            learn, and become a better veterinarian.
                                        </p>
                                    </div>
                                    <div class="motivation">
                                        <p>
                                            Stay curious, stay updated, continuous learning is key.
                                            Join professional organizations and networking groups.
                                        </p>
                                        <br>
                                        <p>
                                            Shoutout to all the amazing young veterinarians making a difference!
                                        </p>
                                    </div>

                                </div>


                            </div>


                        </swiper-slide>


                    </swiper>


                </section>



            </div>


        </section>

    </div>


</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-parent-container {
    display: flex;
    // padding: 10px;
    position: fixed;
    right: 0;
    left: 0;
    justify-content: space-around;
    background-color: transparent;
    z-index: 1000;

}

.gif {
    width: 150px;
    height: 100%;
}

.second-child {
    align-content: center;
}

.sbar {
    color: rgb(20, 60, 2);
    font-size: 14px;
    border: none;
    border-radius: 50px;
    padding: 10px;
    width: 250px;
    height: 35px;
}

.main-page {
    // position: relative;


}

.hamburger .bar,
.hamburger:after,
.hamburger:before {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
    display: none;
}

.hamburger {
    position: relative;
    width: 45px;
    appearance: none;
    background-color: rgb(167, 167, 167);
    border: 3px solid rgb(253, 216, 253);
    border-radius: 10px;
    display: none;



}


.mobile-nav {
    display: flex;
    gap: 50px;
}

.mobile-nav :hover {
    color: rgb(75, 192, 217);
}



a {
    text-decoration: none;
    color: white;
    align-content: center;

}







/* 1st */

.firstflif-desktop {
    background-color: rgb(0, 0, 0);
    display: block;
    height: 100vh;

}

.swiper {

    width: 100%;
    height: 100%;

}

.slide {
    display: flex;
}


.sample-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // gap: 30px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 100px;
    width: 100%;
    height: 100%;
}


.text-discription0 {
    font-family: "Arima", system-ui;
    font-size: 50px;
    width: 500px;
    font-weight: bolder;
    color: rgb(157, 219, 173);

}

.text-discription1 {
    font-family: "Lato", sans-serif;
    line-height: 40px;
    width: 550px;
    font-size: 20px;
    color: white;
   
}

.subtext1 {
    font-family: 'Dancing Script';
    font-size: 18px;
    color: yellow;
    width: 550px;
    text-align: end;
    // border: 3px solid white;
}

.nice-text {
    border: 1px solid white;
    font-size: 14px;
    color: white;
    width: 150px;
    padding: 10px;
    text-align: center;
    border-radius: 75px;
    cursor: pointer;
}

.quote {
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
}

.motivation {
    color: rgb(75, 192, 217);
   
    width: 300px;
}





@media only screen and (max-width: 900px) {

    .main-parent-container {

        display: flex;
        padding: 10px;
        position: fixed;
        right: 0;
        left: 0;
        justify-content: space-between;
        background-color: black;
        z-index: 1000;

    }

    .main-page {
        position: relative;
        top: 80px;

    }

    .hamburger .bar,
    .hamburger:after,
    .hamburger:before {
        content: '';
        display: block;
        width: 100%;
        height: 5px;
        background-color: rgb(252, 252, 252);
        margin: 6px 0;
        transition: 0.4s;
    }




    .hamburger {
        position: relative;
        width: 40px;
        height: 45px;

        appearance: none;
        background-color: rgb(167, 167, 167);
        border: 3px solid rgb(253, 216, 253);
        border-radius: 10px;
        display: inline;



    }



    .hamburger.is-active:before {
        transform: rotate(-45deg) translate(-8px, 6px);
    }

    .hamburger.is-active:after {
        transform: rotate(45deg) translate(-9px, -8px);
    }

    .hamburger.is-active .bar {
        opacity: 0;

    }

    .mobile-nav {
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: fixed;
        top: 45px;
        right: 100%;
        padding: 100px;


        width: 100%;
        min-height: 80vh;
        z-index: 1000;
        background-color: rgba(247, 192, 200, 0.6);
        margin-top: 35px;
        transition: 0.9s;
    }



    .mobile-nav.is-active {
        right: 0;
    }

    .mobile-nav a {
        text-align: center;
        margin: 0 auto 12px;
        width: 100%;
        max-width: 200px;
        padding: 12px 15px;
        background-color: rgb(233, 102, 194);

        color: white;
        text-decoration: none;

    }

    .giphy-embed {

        border-radius: 5px;
    }

    .first-child {
        display: flex;
        justify-content: space-around;
        gap: 15px;
        align-items: center;
    }

    .second-child {
        height: 45px;
        align-content: center;

    }


    .lasecbutt {
        color: white;
        font-size: 15px;
        font-weight: bold;
        background-color: rgb(233, 102, 194);
        border: 3px solid rgb(253, 216, 253);
        border-radius: 15px;
        padding: 10px;




    }

    .picxx {

        height: 100%;
        width: 100%;
    }

    .last-container {
        background-color: rgb(245, 235, 235);
        padding: 15px;

    }

    .text {
        font-size: 10px;
        font-weight: 550;
        color: rgb(131, 131, 131);
        padding: 10px;

    }



    /* 1st */

    .firstflif-desktop {
        background-color: rgb(0, 0, 0);
        position: relative;
        height: 40vh;
        display: block;


    }


    .swiper {
        position: relative;
        width: 100%;
        height: 100%;
        color: rgb(252, 187, 245);

    }

    .text-discription {
        font-size: 12px;
        position: relative;
        left: 20px;
        bottom: 120px;
        width: 150px;

    }

    .text-discription0 {
        font-size: 12px;
        position: relative;
        left: 20px;
        bottom: 120px;
        width: 150px;

    }

    .text-discription1 {
        font-size: 12px;
        position: relative;
        left: 20px;
        bottom: 100px;
        width: 150px;
    }

    .subtext {
        font-family: "Dancing Script", cursive;
        font-size: 14px;
        position: relative;
        left: 20px;
        bottom: 50px;
        width: 150px;
        color: rgb(255, 200, 0);

    }

    .subtext1 {
        font-family: "Dancing Script", cursive;
        font-size: 14px;
        position: relative;
        left: 20px;
        bottom: 100px;
        width: 150px;
        color: rgb(255, 200, 0);
    }

    .swiper-slide img {
        position: relative;
        width: 120px;
        height: 100%;
        left: 260px;
        top: 10px;

    }





    /* 2nd */
    .secondflip {
        display: flex;
        flex-direction: column;
        justify-content: space-around;


    }

    .displaypicture {
        border: 5px solid rgb(234, 185, 222);
        border-radius: 80px;
        width: 250px;
        height: auto;
        // display:none;
        align-content: center;



    }

    .displaypicture img {
        width: 100%;
        height: 100%;
        // border-radius: 50%;
    }


    .about-description {
        padding: 10px;
    }

    .about-styles {
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        color: rgb(217, 137, 197);
    }

    .about-discription {
        font-size: 16px;
        color: black;
        padding: 25px;
    }




    /* 3rd */
    .thirdflip-desktop {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

    }

    .thirdflip-left {
        padding: 20px;
    }

    .lashextention-description {
        color: brown;
        font-size: 30px;
        font-weight: bold;
        padding: 10px;
        text-align: center;


    }

    .discription-questions {
        color: rgb(243, 185, 185);
        font-size: 20px;
        font-weight: bold;
        padding: 10px;



    }

    .discription-answers {
        font-size: 16px;
        padding: 10px;

    }


    .thirdflip-right {

        padding: 50px;
    }













    /* 4th */


    .fouthflip {
        display: none;
    }

    .fouthflip-mobile {
        display: none;

    }


    /* 5th */



    .fifthflip-desktop {}

    .microbladingzone {
        display: flex;
        flex-direction: column;

    }







    /* 6th */
    .sixthflip-desktop {}

    .piercing-arena {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

    }



    /* 7th */


    .rightarea {
        display: flex;
        flex-direction: column;

    }

    .displaypicture1 {
        width: 100%;
        height: auto;
    }

    .rightarea-text {

        padding: 50px;
        align-content: center;

    }

    .rightarea-subtext {

        padding: 50px;
    }



    /* 8th */

    .zone3 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;


    }

    .displaypicture2 {
        width: 100%;
        height: auto;

    }

    /* 9th */
    .eightlogo {
        width: 100%;
        height: auto;
    }

    .eight-text {
        font-size: 30px;
        font-weight: bold;
        color: rgb(243, 185, 185)
    }

    .eight-subtext {
        font-family: "Dancing Script", cursive;
        font-size: 16px;
        font-weight: bold;
        color: rgb(255, 200, 0);
    }

    .solution-text {
        font-size: 16px;
        padding: 30px;
        color: rgb(247, 220, 220)
    }

    .info-text {

        font-size: 10px;
        color: rgb(247, 220, 220)
    }


    .contact-details {
        font-size: 10px;
        display: flex;
        padding: 30px;
        gap: 10px;
        justify-content: center;



    }

    .phone {
        width: 14px;

    }

    .numerals {

        color: white;
    }

    .social-mediahandles {}

    .follow-us {
        display: flex;
        gap: 20px;
        justify-content: center;

    }

    .www {

        width: 60px;
        height: auto;
        text-align: center;
        font-size: 10px;
    }

    .followpic {
        width: 80%;
        height: 80%
    }

    .followpic1 {
        background-color: white;
        border-radius: 5px;
        width: 80%;
        height: 80%
    }

    .location {
        font-size: 14px;
        padding: 20px;
        color: rgb(247, 220, 220);
    }

    .another-top-content {

        position: inherit;
        background-color: rgba(0, 0, 0, 0.9);
        padding: 16px;


    }


    .certification {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // padding: 80px;
        background-color: aquamarine;

    }


    .certifiedlogo {

        width: 50%;
        height: auto;



    }

    .men {

        // font-size: 10px;
    }


}
</style>