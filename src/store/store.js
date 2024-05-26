
// {
//     title,
//     ingredients,
//     amount,
//     quantity

// }
import {reactive} from 'vue';

export const purchaseItemStore = reactive({

    item: {title: "Waakye Agadoo", ingredients: [], amount: 1, quantity: 1, subtotal: 0},

    deliveryFee: 10,

    total: 0,

    waakyePrice: 10,

    purchaseDetails: [
        {title: "Subtotal", value: 0},
        {title: "Delivery Fee", value: 0},
        {title: "Total", value: 0}
        ],
    
    init(){
        this.item.subtotal = this.item.amount
    },

    update(combo){
        this.item.title = combo.title,
        this.item.ingredients = combo.ingredients,
        this.item.amount = combo.price,
        this.item.quantity = combo.quantity ?? 1
        this.performUpdate()
        console.log(combo)
    }, 

    updateQuantity(quantity){
        this.item.quantity = quantity;
        this.item.subtotal = this.item.amount *  quantity;
        this.performUpdate()
    },

    updateTotal(){
        this.total = this.item.subtotal + this.deliveryFee
    },

    updateDetails(){
        this.purchaseDetails[0].value = this.item.subtotal;
        this.purchaseDetails[1].value = this.deliveryFee;
        this.purchaseDetails[2].value = this.total;
    },

    performUpdate(){
        this.updateTotal()
        this.updateDetails()
    },
    getDetailsOfDelivery(userName, location, phoneNumber){
        return {
            userName,
            location,
            phoneNumber,
            food_type: this.item.title,
            ingredients: this.item.ingredients,
            packs: this.item.quantity
        }
    }

})

// export const