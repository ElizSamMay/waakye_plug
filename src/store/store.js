
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

export const restaurant = reactive({
    restaurantItem: {},
    updateRestaurant(item){
        this.restaurantItem = item
    }
})

export const purchaseOrderItems = reactive({
    items: [],

    deliveryFee: 10,

    updateItems(orderItems){
        this.items = orderItems
    },

    getSubtotal(){

        if (this.items.length < 1){
            return 0;
        }

        const totalPriceMap = this.items.map((item)=> item.price * item.count)
        const totalPriceOfItems = totalPriceMap.reduce((acc, currValue)=> acc + currValue, 0)
        return totalPriceOfItems;
    },

    getDisplayPrices(){
        const subtotal = this.getSubtotal()
        const total = subtotal + this.deliveryFee
        return [{title: "Subtotal", value: subtotal}, {title: "Delivery Fee", value: this.deliveryFee}, {title:"Total", value: total}]
    }

    

})

// export const