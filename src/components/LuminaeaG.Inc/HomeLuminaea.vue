

<script setup>
    import {useRouter} from 'vue-router'
   

    const router = useRouter()


    function handleStartButtonTapped(){
        router.push('/order-prefered')
    }

</script>


<template>
    <div id="parent">

<p class="company-name">Luminaea</p>

<!-- 1st -->

<section class="zone1">

    <div class="first-container">
        <p class="header-text">
            Powerful Tools for Effective Business Management
        </p>
        <p class="header-subtext">
            Your ultimate business management solution for effortless business administration and customer
            reach. Simplify customer management and engage with customers.
        </p>
        <div class="buttons">
            <button @click="handleStartButtonTapped" class="button1" >
                Get Started
                <img class="minimalbutt" src="@/assets/lumpic/rightarrowlong.png">
            </button>

            <button class="button2">
                See How LumiBiz Works
                <img class="minimalbutt0"  src="@/assets/lumpic/Play Rounded.png">
            </button>
        </div>

    </div>

    <div class="second-container">
        <div class="first-picture0">
            <img class  src="@/assets/lumpic/Group 2.png">
        </div>

        <div class="first-picture">
            <img class  src="@/assets/lumpic/normpic1.png">
        </div>

        <div class="first-picture">
            <img class src="@/assets/lumpic/normpic1.png">
        </div>

    </div>
</section>



<!-- 2nd  -->

<section class="zone2">
    <div class="aboutlumin">
        <p class="header-text">
            What is LuminaeBiz?
        </p>

        <p class="header-subtext">
            LuminaeBiz is a comprehensive business management software designed to simplify communication and
            collaboration between business and customers. Imagine a platform that perfectly simplifies business
            to customer communication and engagement.That's <span class="highlighttext">LuminaeBiz</span>
        </p>
    </div>
    <div class="subaboutlumin">
        <div class="baby-container">
            <img src="@/assets/lumpic/Manage.png">

            <p class="second-baby-container">
                Solution to Business Management
            </p>
            <p class="second-baby-container0">
                We provide a solution to overseeing activities by students and teachers in school for school
                adminstrators. Our web application is easy-to-use features for school administrators and owners
            </p>

        </div>
        <div class="baby-container">
            <img src="@/assets/lumpic/Group.png">

            <p class="second-baby-container">
                Platform for B2C engagement
            </p>
            <p class="second-baby-container0">
                For teachers to easily engage with parents about their wards activities and performance, we
                provide a user-friendly mobile app to make that a reality
            </p>
        </div>
        <div class="baby-container">
            <img src="@/assets/lumpic/People Connect0.png">

            <p class="second-baby-container">
                Parent-School Engagement Solution
            </p>
            <p class="second-baby-container0">
                As a parent, you would not have to worry about late delivery of information on your wards’
                school activities or missing out on any. Stay informed all the time
            </p>
        </div>
    </div>
</section>

<!--3rd  -->
<section class="zone3">
    <div class="third-container">
        <p class="header-text">
            Features of the web application for business administrators
        </p>

        <p class="header-subtext">
            The TrueSmart web application serves school administrators with an intuitive and user-friendly
            web-based application to manage their school’s activities anytime, from anywhere
        </p>
    </div>

    <div class="subthird-container">
        <div class="consubthird">

            <div class="arrangement-container">
                <div class="picsize1">
                    <img class="resize" src="@/assets/lumpic/Bar Chart.png">
                </div>

                <div class="fixtext">

                    <p class="thirdheader-text">
                        Dashboard with Data

                    </p>
                    <p class="third-subtext">
                        View all details about your school at a go. On the dashboard, data about students,
                        teachers
                        and
                        courses are laid out and presented in an easy-to-understand form
                    </p>
                </div>
            </div>


            <div class="arrangement-container">
                <div class="picsize1">
                    <img class="resize" src="@/assets/lumpic/Chart.png">
                </div>

                <div class="fixtext">
                    <p class="thirdheader-text">
                        Monitor Teachers’ Attendance

                    </p>
                    <p class="third-subtext">
                        Keep track of teachers’ attendance with ease. Teachers clock in and out when they arrive
                        to
                        school and leave respectively via the mobile app, access this data and on the web app.
                    </p>
                </div>
            </div>

            <div class="arrangement-container">
                <div class="picsize1">
                    <img class="resize" src="@/assets/lumpic/Mark Attendance.png">
                </div>

                <div class="fixtext">
                    <p class="thirdheader-text">
                        Students’ attendance and class activities

                    </p>
                    <p class="third-subtext">
                        Activities performed by students; such as dropping in, pickup and performance and school
                        activities recorded by teachers are at your disposal on the web app. Activities can also
                        be
                        recorded on the web application
                    </p>
                </div>
            </div>


        </div>

        <div class="consubthird">

            <img src="@/assets/lumpic/iMac Pro Front View Mockup.png">

            <div class="arrangement-container">
                <div class="picsize1">
                    <img class="resize" src="@/assets/lumpic/People Connect.png">
                </div>

                <div class="fixtext">
                    <p class="thirdheader-text">
                        Engage with Parents through Feeds

                    </p>
                    <p class="third-subtext">
                        Are there information you’d want to relay to parents of your students with ease? Deliver
                        them through feeds and engage with parents through comments given
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>

<!--4th  -->
<section class="zone4">
    <div class="thefouth-arena">
        <p class="header-text">
            Features of the web application for customers.
        </p>

        <p class="header-subtext">
            The TrueSmart web application serves school administrators with an intuitive and user-friendly
            web-based application to manage their school’s activities anytime, from anywhere
        </p>
    </div>

    <div class="thefouth-subarena">

        <div class="fouthconsubthird">


            <img class="rexsize" src="@/assets/lumpic/Rectangle 12.png">


            <div class="arrangement-container">
                <div class="picsize1">
                    <img class="resize" src="@/assets/lumpic/People.png">
                </div>

                <div class="fixtext">
                    <p class="thirdheader-text">
                        Collective opinions on school decision

                    </p>
                    <p class="third-subtext">
                        Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo
                        delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
                        veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint
                    </p>
                </div>
            </div>

        </div>



        <div class="consubthird">

            <div class="arrangement-container">
                <div class="picsize1">
                    <img class="resize" src="@/assets/lumpic/Parent.png">
                </div>

                <div class="fixtext">

                    <p class="thirdheader-text">
                        Pickup and Drop in wards

                    </p>
                    <p class="third-subtext">
                        Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo
                        delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
                        veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint
                    </p>
                </div>
            </div>


            <div class="arrangement-container">
                <div class="picsize1">
                    <img class="resize" src="@/assets/lumpic/Info Squidly.png">
                </div>

                <div class="fixtext">
                    <p class="thirdheader-text">
                        Up to date student activities in school

                    </p>
                    <p class="third-subtext">
                        Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo
                        delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
                        veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint
                    </p>
                </div>
            </div>

            <div class="arrangement-container">
                <div class="picsize1">
                    <img class="resize" src="@/assets/lumpic/Vector.png">
                </div>

                <div class="fixtext">
                    <p class="thirdheader-text">
                        Easy information dissemination

                    </p>
                    <p class="third-subtext">
                        Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo
                        delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
                        veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint
                    </p>
                </div>
            </div>





        </div>
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

    .company-name{
            font-size: 40px;
            font-weight: bolder;
            padding: 10px;
            color: #007AFF;
        }

        /* 1st */
        .zone1 {
            display: flex;
            flex-direction: column;
            gap: 50px;

            padding: 50px;


        }

        .first-container {

            align-content: center;

            padding: 20px;
        }

        .second-container {

            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 20px;
        }

        .header-text {
            text-align: center;
            font-weight: bold;
            font-size: 50px;
            padding: 20px;

        }

        .header-subtext {
            text-align: center;
            padding: 20px;

        }

        .buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            padding: 10px;

        }

        .button1 {
            font-size: 16px;
            border: none;
            border-radius: 30px;
            background-color: #0055B2;
            color: white;
            padding: 10px;
            cursor: pointer;





        }

        .button2 {
            font-size: 16px;
            border: 1px solid #0055B2;
            border-radius: 30px;
            background-color: white;
            color: #0055B2;
            padding: 10px;
            cursor: pointer;



        }

        .minimalbutt {

            height: 12px;

        }

        .minimalbutt0 {

            height: 12px;

        }

        .first-picture0 {}

        .picsize {
            width: 100%;
            height: auto;
        }


        /* 2nd */
        .zone2 {
            display: flex;
            flex-direction: column;
            background-color: rgb(255, 252, 250);


        }

        .aboutlumin {}

        .highlighttext {
            font-weight: bold;
        }

        .subaboutlumin {
            display: flex;
            justify-content: space-around;
            gap: 20px;
            padding: 16px;

        }

        .baby-container {

            min-height: 300px;
            padding: 24px 24px 24px 62px;
            background-color: #0E479D;
            color: white;
        }

        .second-baby-container {
            font-weight: bold;
            padding: 5px;
        }

        .second-baby-container0 {
            padding: 5px;
        }

        /* 3rd */

        .zone3 {
            display: flex;
            flex-direction: column;
            gap: 50px;

            padding: 100px;
        }

        .third-container {

            padding: 20px;
        }



        .subthird-container {
            display: flex;
            justify-content: space-between;
            gap: 50px;



        }

        .consubthird {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

        }

        .arrangement-container {
            display: flex;
            gap: 10px;

            min-height: 230px;


        }

        .picsize1 {

            height: 40px;
            width: 120px;


        }

        .resize {

            /* width: 100%;
            height: auto; */

        }

        .fixtext {
            padding: 20px;


        }

        .thirdheader-text {

            font-weight: bold;
            font-size: 30px;

        }

        .third-subtext {}

        /* 4th */
        .zone4 {
            display: flex;
            flex-direction: column;
            gap: 50px;

            background-color: rgb(255, 252, 250);

        }

        .thefouth-arena {}

        .thefouth-subarena {
            display: flex;
            gap: 50px;
            padding: 50px;
        }

        .fouthconsubthird {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

        }

        .rexsize {
            width: 100%;
            height: 100%;
        }



        @media only screen and (max-width: 900px) {
            .zone1 {
                display: flex;
                flex-direction: column;
                gap: 20px;

                padding: 20px;
                display: block;
            }

            .header-text {
                text-align: center;
                font-weight: bold;
                font-size: 22px;
                padding: 20px;

            }

            .header-subtext {
                text-align: center;
                padding: 10px 32px 32px 24px;
                /* justify-content: center; */

            }


            .buttons {
                display: flex;
                flex-direction: column;
                gap: 20px;
                justify-content: center;
                padding: 10px;

            }

            .second-container {

                justify-content: center;

            }

            .first-picture {
                display: none;
            }

            .subaboutlumin {
                display: flex;
                flex-direction: column;
                padding: 16px;
                gap: 16px;

            }

            .baby-container {
                min-height: 300px;
                padding: 24px 24px 24px 62px;
                background-color: #0E479D;
                color: white;

            }

            .zone3 {
                display: flex;
                flex-direction: column;
                gap: 50px;
                padding: 20px;
            }

            .third-container {

                padding: 10px;
            }

            .consubthird {
                display: flex;
                flex-direction: column;
                justify-content: space-between;


            }

            .subthird-container {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 50px;




            }

            .thefouth-subarena {
                display: flex;
                flex-direction: column;
                gap: 50px;
                padding: 20px;
            }

            .fouthconsubthird {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

            }

            .thirdheader-text {

                font-weight: bold;
                font-size: 25px;

            }


            .arrangement-container {
                display: flex;
                gap: 10px;
                padding: 0;
                min-height: 230px;


            }







        }
   

</style>