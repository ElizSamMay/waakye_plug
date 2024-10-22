 export function handlePiecingbuttonTapped() {



    const mobileMenu = document.querySelector('.mobile-nav2');

    const piercingpopup = document.querySelector('.pickservices2');
        piercingpopup.addEventListener('click', function () {
        piercingpopup.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');




        let cartQuantity = 0;
            const piercingPrice =
                [{
                    headername: 'Piercing Pricelist',
                    product: [{ name: 'Dimple Piercing', priceCents: '300' },
                    { name: 'Dermal Piercing', priceCents: '300' },
                    { name: 'Narvel Piercing', priceCents: '230' },
                    { name: 'Snake Piercing', priceCents: '180' },
                    { name: 'Nose Piercing', priceCents: '180' },
                    { name: 'Tongue Piercing', priceCents: '150' },
                    { name: 'Medusa', priceCents: '150' },
                    { name: 'Both Ear Piercing', priceCents: '150' },
                    { name: 'Tragus Piercing', priceCents: '130' }
                ]

                }];


            let piercingPriceHTML = '';

            piercingPrice.forEach((exprice) => {
                piercingPriceHTML += `
                   
                       <p style="
            color:red; 
            font-weight:bold; 
            font-family:'Princess Sofia', 
            cursive;font-size: 18px;
            color: rgb(245, 230, 162);">
       ${exprice.headername}
        </p>
                     
               `;
                exprice.product.forEach((exprice1) => {
                    piercingPriceHTML += ` 
                    <div class="brothercontainer" style="
                display: flex;
                color: rgb(241, 109, 109);
                font-size: 20px;
               
                
                justify-content: space-between;
                width: 100%;
                padding: 0 16px;
                align-items: center;">
        
            <p>
                ${exprice1.name}
            </p>
            <button class="sisterContainer"
             style="
                font-size: 15px;
                font-weight:bold
                padding: 8px;
                background-color: black;
                color: white;
                border: none;
                border-radius: 10px;
                height:  30px;
                width: 80px;
                text-align: center;
                 cursor: pointer;">
                Ghs ${exprice1.priceCents / 1}
            </button>
        
    </div>
                      
                      `})

            });

            document.querySelector('.motherparentcontainer2 ').
                innerHTML = piercingPriceHTML;

            document.querySelectorAll('.sisterContainer')
                .forEach((button) => {
                    button.addEventListener('click', () => {
                        //to getthe product name from the button
                        console.log('working...')
                        cartQuantity += 1
                        document.querySelector('.cart-quantity').innerText = cartQuantity





                    });


                });
            });






}
