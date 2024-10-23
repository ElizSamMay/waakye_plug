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

function refreshPage() {

}
</script>





<template>

    <div class="main-component">

        <section class="0ne">
            <div class="main-parent-container">
                <button class="hamburger" @click="handlehamergerButtonTapped">
                    <div class="bar"></div>
                </button>
                <div @click="refreshPage">
                    <img class="gif" src="../../assets/images/group12.png">
                </div>


                <nav class="mobile-nav" v-show="!hideNav">



                    <a class="yyy" href="#mainpage" @click="removeNav">Home</a>
                    <div class="dropdown">
                        <button class="dropbtn">Business</button>
                        <div class="dropdown-options">
                            <a href="#">The Next Habitat</a>
                            <a href="#">9th Restaurant IX</a>
                            <a href="#">Pace Recreation Center</a>
                            <a href="#">Global Point Delivery Service</a>
                            <a href="#">FoodNexus Pickup Point System</a>
                            <a href="#">Hive Real Estate</a>
                            <a href="#">Gas Filling Station</a>

                        </div>
                    </div>

                    <a href="">About Us</a>
                    <a href="#first">Media</a>
                    <a href="#third">Visit Us</a>
                    <a href="https://wa.me/+233240056880">Talk to us</a>


                </nav>



                <div class="second-child">
                    <input class="sbar" type="text" placeholder="Search...">
                </div>

            </div>
        </section>


        <section class="two">
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
                                <source src="../../assets/images/vetvid.mp4" type="video/mp4">
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


        <section class="three">
            <div class="third-containter">

                <div class="edit-subfs">
                    SUBSIDIARIES FOCUS
                </div>

                <div class="support-container">
                    <div class="tnh-zone">
                        <div class="tnh-images">
                            <img class="tnh-images-resize"
                                src="https://cdn.britannica.com/56/155656-050-EF76EB04/chickens-poultry-farm.jpg">
                        </div>
                        <div class="tnh-text">
                            <p class="nice-text">
                                Read More
                            </p>

                            <p class="tnh-header-text">
                                Best In Animal Care, Foods and Manufacturing
                            </p>

                            <p class="tnh-header-subtext">
                                The Next Habitat is everything Veterinary, that keeps both Pet and Food animals in
                                shape.
                                There are a series of work sites that come in common to make a whole, we have the Animal
                                Farms [Poultry Farm,Piggery farm, Fish culture], Modernised Abattoir, a Processing and
                                Manufacturing facility Veterinary Hospital, Pet Boarding/Hotel/PlayGround,Pet Shops and
                                School.
                            </p>
                        </div>
                    </div>
                    <div class="ixh-zone">
                        <div class="ixh-images">
                            <img class="ixh-images-resize"
                                src="https://traveltimeafrica.com/ourblog/wp-content/uploads/2021/04/IMG_3314.jpg">
                        </div>

                        <div class="ixh-text">
                            <p class="ixh-nice-text">
                                Read More
                            </p>

                            <p class="ixh-header-text">
                                Find Our Fancy Restaurant On the Globle
                            </p>

                            <p class="ixh-header-subtext">
                                9th hour Restaurants is a food center where all kinds of dishes can be found there
                                including Our African foods and the Continental foods.
                                9th restaurant consists of different types of Restaurants from all around the
                                world.
                            </p>


                        </div>
                    </div>
                </div>


            </div>

        </section>

        <section class="four">
            <div class="fourth-containter">
                <div class="ixh-zone">
                    <div class="ixh-images">
                        <img class="ixh-images-resize"
                            src="https://waterslide.net/wp-content/uploads/2021/11/Darwin-Waterslide-Project-2560x1280-1-1024x512.jpg">
                    </div>

                    <div class="ixh-text">
                        <p class="ixh-nice-text">
                            Read More
                        </p>

                        <p class="ixh-header-text">
                            Where fun meets fitness and community thrives!
                        </p>

                        <p class="ixh-header-subtext">
                            Pace Recreation Center is a event center where meetings are held, sports are
                            organized and Games are played.Social activities, Camping and outdoor activities, Arts and
                            crafts activities are also engaged.

                        </p>


                    </div>
                </div>

                <div class="ixh-zone">
                    <div class="ixh-images">
                        <img class="ixh-images-resize"
                            src="https://www.conquerornetwork.com/blog/wp-content/uploads/2023/10/delivery-drone-concept-scaled.jpg">
                    </div>

                    <div class="ixh-text">
                        <p class="ixh-nice-text">
                            Read More
                        </p>

                        <p class="ixh-header-text">
                            Your order, our priority!
                        </p>

                        <p class="ixh-header-subtext">
                            Global Point Delivery Services is to fulfill the requests of Peoples items to be delivered,
                            which involves the pickup of any item from any location and the delivery of these items with
                            the use of various modes of transportation(Motor Bikes, Vehicles & Drones) to a location
                            chosen by the customer.
                        </p>


                    </div>
                </div>

                <div class="ixh-zone">
                    <div class="ixh-images">
                        <img class="ixh-images-resize"
                            src="https://www.jll.co.uk/images/global/jll-future-vision-real-estate-social-1200x628.jpg">
                    </div>

                    <div class="ixh-text">
                        <p class="ixh-nice-text">
                            Read More
                        </p>

                        <p class="ixh-header-text">
                            Turn your dreams into addresses!
                        </p>

                        <p class="ixh-header-subtext">
                            Hive Estate with land and permanent structures, like a home buildings or improvements
                            attached to the land.
                            Investing in real estate includes purchasing a home, rental property, or land.
                            Unlocks a new opportunity

                        </p>


                    </div>
                </div>

                <div class="ixh-zone">
                    <div class="ixh-images">
                        <img class="ixh-images-resize"
                            src="https://durulsan.com/uploads/15412331067964.png">
                    </div>

                    <div class="ixh-text">
                        <p class="ixh-nice-text">
                            Read More
                        </p>

                        <p class="ixh-header-text">
                            Efficient energy, endless possibilities!
                        </p>

                        <p class="ixh-header-subtext">
                            Empowering energy solutions for a brighter future.
                            Where communities, Transform the energy landscape and
                            Fuel the dreams of a sustainable tomorrow.
                        </p>


                    </div>
                </div>
            </div>
        </section>

    </div>


</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* 0ne */
.main-parent-container {
    display: flex;
    // padding: 10px;
    position: absolute;
    right: 0;
    left: 0;
    justify-content: space-around;
    background-color: transparent;
    z-index: 1000;

}

.gif {
    width: 150px;
    height: 100%;
    cursor: pointer;
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
    font-size: 13px;
    font-weight: 600;

}

/* Dropdown Button */
.dropbtn {
    background-color: transparent;
    color: white;
    padding: 16px;
    font-size: 13px;
    border: none;
    font-weight: 600;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    align-content: center;
    position: relative;

}

.dropdown-options {
    display: none;
    position: absolute;
    overflow: auto;
    background-color: rgb(232, 237, 223);
    border-radius: 5px;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.6);
    width: 250px;
}

.dropdown:hover .dropdown-options {
    display: block;
}

.dropdown-options a {
    display: block;
    color: black;
    text-decoration: none;
    padding: 30px 30px;
}

.dropdown-options a:hover {
    background-color: #ddd;
    border-radius: 5px;
}

/*two*/

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
    font-size: 70px;
    width: 600px;
    font-weight: bolder;
    color: rgb(157, 219, 173);

}

.text-discription1 {
    font-family: "Lato", sans-serif;
    line-height: 40px;
    width: 550px;
    font-size: 16px;
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
    font-size: 15px;
    width: 300px;
}


/*three*/
.third-containter {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;

}

.edit-subfs {
    font-size: 50px;
    font-weight: 700;
    padding: 20px;
}

.support-container {
    display: flex;
    justify-content: space-between;

    // gap: 60px;
}

.tnh-zone {
    display: flex;

}

.tnh-images {}

.tnh-images-resize {
    width: 570px;
    height: 400px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

}

.tnh-text {

    padding: 20px;
    background-color: black;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 400px;
    width: 450px;

}

.tnh-header-text {
    font-size: 30px;
    color: white;
    padding: 10px;

}

.tnh-header-subtext {
    font-size: 14px;
    color: white;
    padding: 10px;
    line-height: 20px;

}

.ixh-zone {
    display: flex;
    flex-direction: column;

}

.ixh-images {

   background-color:rgb(232, 237, 223);
   border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

.ixh-images-resize {
    width: 310px;
    height: 180px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;



}

.ixh-text {

    padding: 5px;
    width: 310px;
    height: 215px;
    background-color: rgb(232, 237, 223);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;


}

.ixh-nice-text {
    font-size: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    color: black;
    width: 100px;
    padding: 5px;
    text-align: center;
    border-radius: 75px;
    cursor: pointer;
}

.ixh-header-text {
    font-size: 20px;
    color: black;
    padding: 5px;

}

.ixh-header-subtext {
    font-size: 14px;
    color: black;
    padding: 5px;
    line-height: 20px;
}

/*four*/
.fourth-containter {
    display: flex;
    padding: 30px;
    justify-content: space-between;
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








}
</style>