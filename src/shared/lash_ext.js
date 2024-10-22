

export function handleextensionButtonTapped() {



    const mobileMenu = document.querySelector('.mobile-nav');

    const extensionpopup = document.querySelector('.pickservices');
    extensionpopup.addEventListener('click', function () {
        extensionpopup.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');


        let cartQuantity = 0;

        const extensionPrice = [{
            headername: 'Full Set Pricelist',
            product: [{ name: 'Glam Volume Set', priceCents: '500' },
            { name: 'Hybrid Set', priceCents: '400' },
            { name: 'Volume Set', priceCents: '280' },
            { name: 'Classic Set', priceCents: '200' }],



        }, {
            headername: 'Lash Refills Pricelist',
            product: [{ name: 'Glam Volume Refills', priceCents: '420' },
            { name: 'Volume Refills', priceCents: '340' },
            { name: 'Hybrid Refills', priceCents: '200' },
            { name: 'Classic Set', priceCents: '150' }],



        }, {
            headername: 'Wipies Set Pricelist',
            product: [{ name: 'Volume Wispy Set', priceCents: '450' },
            { name: 'Hybrid Wispy Set', priceCents: '350' }],

        }, {
            headername: 'Customized Pricelist',
            product: [{ name: 'Unique Set <br>(with a touch of colour) ', priceCents: '350' }],
        }, {
            headername: 'Removal Pricelist',
            product: [{ name: 'Lash Removal', priceCents: '100' },
            { name: 'Bottom Lash', priceCents: '50' }],
        }];



        let extensionPriceHTML = '';


        extensionPrice.forEach((exprice) => {
            extensionPriceHTML += `
    
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
                extensionPriceHTML += ` 
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



        document.querySelector('.motherparentcontainer').
            innerHTML = extensionPriceHTML;


        document.querySelectorAll('.sisterContainer')
            .forEach((button) => {
                button.addEventListener('click', () => {
                    //to getthe product name from the button
                    console.log('working...')
                    cartQuantity += 1
                    document.querySelector('.cart-quantity').
                        innerText = cartQuantity

                });


            });



    });


}
