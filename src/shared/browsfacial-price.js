 export function handleBrowsfacailbuttonTapped() {



    const mobileMenu = document.querySelector('.mobile-nav1');

    const browspopup = document.querySelector('.pickservices1');
    browspopup.addEventListener('click', function () {
        browspopup.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');




        let cartQuantity = 0;
        const browsPrice =
            [{
                headername: 'Brows Pricelist',
                product: [{ name: 'Combo Brows', priceCents: '750' },
                { name: 'Micro Shading', priceCents: '700' },
                { name: 'Ombre Brows', priceCents: '700' },
                { name: 'Microblading', priceCents: '600' },
                { name: 'Brows Touchup', priceCents: '450' },
                { name: 'Brows Grooming', priceCents: '150' },
                { name: 'Brows Lamination', priceCents: '150' }],



            }, {
                headername: 'Facials Pricelist',
                product: [{ name: 'Full Face', priceCents: '200' },]

            }];


        let browsPriceHTML = '';

        browsPrice.forEach((exprice) => {
            browsPriceHTML += `
                
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
                browsPriceHTML += ` 
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

        document.querySelector('.motherparentcontainer1').
            innerHTML = browsPriceHTML;

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