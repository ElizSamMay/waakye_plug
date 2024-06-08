 /* eslint-disable */
export const waakyeCombos = [
    {   
        id: 0,
        title: "Waakye Combo", 
        ingredients: ["waakye", "wele", "egg","sausage","salad","gari",  ],
        price: 30.00, 
        isSelected: true
    },
    
    {   
        id: 1,
        title: "Waakye Super", 
        ingredients: ["waakye", "fish","wele", "egg",  "salad","macroni", "gari"],
        price: 41.00, 
        isSelected: false
    },

    {   
        id: 4,
        title: "Waakye Capo", 
        ingredients: ["waakye", "chicken","wele", "egg",  "salad","macroni", "gari"],
        price: 41.00, 
        isSelected: false
    },

    {   
        id: 5,
        title: "Waakye Gooda", 
        ingredients: ["waakye", "meat","wele", "egg",  "salad","macroni", "gari"],
        price: 41.00, 
        isSelected: false
    },
    
    {   
        id: 2,
        title: "Waakye Mega", 
        ingredients: ["waakye", " fish","meat", "egg", "wele", "salad","macroni", "gari"],
        price: 55.00, 
        isSelected: false
    },
    {   
        id: 3,
        title: "Waakye Agadoo", 
        ingredients: ["waakye", "fish", "meat", "egg","chicken", "wele", "salad","macroni", "gari","wagashi"],
        price: 75.00, 
        isSelected: false
    },
    
]


export const ingredients = [
    {id:1,title: "Salad", isSelected: false, image: "https://www.simplyrecipes.com/thmb/j0ddRCJrN78xVUXQ1qKqfohVo0A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Caesar-Salad-LEAD-07-01d96a42f43941748b81d910a10888cd.jpg", price: 3.00},
    {id:2,title: "Macroni", isSelected: false, image: "https://www.saveur.com/uploads/2022/06/08/00-FEATURE-BEST-PASTA-BOWLS-scaled.jpg?auto=webp&width=2000&height=1334", price: 3.00},
    {id:3,title: "Sausage", isSelected: false, image: "https://www.meatsandsausages.com/public/images/sausage-recipes/sausage-links.jpg", price: 4.00},
    {id:4,title: "Chicken", isSelected: false, image: "https://www.allrecipes.com/thmb/WSSoRAz2IygrMPkiJxHPbt9gqMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8635-southern-fried-chicken-ddmfs_4x3-90736ab31a7a4bb59eb04e2380ccebe7.jpg", price: 12.00},
    {id:5,title: "Fish", isSelected: false, image: "https://i.ytimg.com/vi/LYfws791D80/maxresdefault.jpg", price: 12.00},
    {id:6,title: "Meat", isSelected: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqPMtLNi5Q_PxUZJz5ieRiuYD-EnK2RF1kYCu58IGUA&s", price: 15.00},
    {id:7,title: "Egg", isSelected: false, image: "https://www.simplyrecipes.com/thmb/zsQvDavpqD2PtIO-7W6nBWVHCe4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Hard-Boiled-Eggs-LEAD-03-42506773297f4a15920c46628d534d67.jpg", price: 4.00},
    {id:8,title: "Wagashi", isSelected: false, image: "https://pbs.twimg.com/media/EhtjmWDXYAEIb_L.jpg", price: 7.00},
    {id:9,title: "Wele", isSelected: false, image: "https://i.ytimg.com/vi/dL9r9mKPcTQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcJG3IPdnXk-hL-y7xGsgWWqW7RA", price: 7.00},
    {id:10,title: "Gari", isSelected: false, image: "https://www.homefoodsghana.com/images/food/gari-foto.jpg", price: 3.00},
]


export const shops = [
    {id:0, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7zPBwGUY0plhsV-Y8U0mMTKtcCDifbGN8Q&s", businessName: "Afri Fingers", street: "Madina", contact: "0556236739", wallpaper:"https://bukarestaurant.com/images/main-1.jpg", packs:[
        {   
            id: 0,
            title: "Fried Rice", 
            ingredients: ["Chicken Wings"],
            price: 45.00, 
            isSelected: false,
            count: 1,
            imageUrl: "https://peacockrice.com.gh/wp-content/uploads/2021/08/Imagen-7.jpg"
        },
        {   
            id: 2,
            title: "Fried Rice", 
            ingredients: ["Chicken Tie"],
            price: 45.00, 
            isSelected: false,
            count: 1,
            imageUrl: "https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2016/12/IMG_6780.jpg?ssl=1"
        },
        {   
            id: 1,
            title: "Jollof Rice", 
            ingredients: ["Cow Meat"],
            price: 45.00, 
            isSelected: false,
            count: 1,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoiTnT27UzgJi3H_z92NjfG5hRO3gCSwh2gtj35w6BN7fXXEE8wPz-diqyvTh9Gss4HU&usqp=CAU"
        },
       
        {   
            id: 3,
            title: "Fried Rice", 
            ingredients: ["Assorted"],
            price: 75.00, 
            isSelected: false,
            count: 1,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwN1zMsBHU5wwFegIAYcOMF_Mp5TkZcF4RysJdkGI2J_45ZKeP5bpydi0wWkQTZJm3opc&usqp=CAU"
        },
        {   
            id: 4,
            title: "Jollof Rice", 
            ingredients: ["Assorted"],
            price: 75.00, 
            isSelected: false,
            count: 1,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8axqt7UupYvfhL29JzERpRaALQJ82Xf9V4w&s"
        },
        {   
            id: 5,
            title: "Shawarma", 
            ingredients: ["Chicken Vegies"],
            price: 30.00, 
            isSelected: false,
            count: 1,
            imageUrl: "https://www.bylena.com/images/uploaded/1920x_Shaorma-de-casa-336.jpg"
        },
        {   
            id: 6,
            title: "Turn Over Pie", 
            ingredients: ["Fish"],
            price: 15.00, 
            isSelected: false,
            count: 1,
            imageUrl: "https://foodienotachef.com/wp-content/uploads/2020/09/FlakyGhanaianMeatPie-1.png"
        }
    ]},
    {id:1, imageUrl: "https://news.northeastern.edu/wp-content/uploads/2023/02/411A9994.jpg", businessName: "Alongo Fingers", street: "Madina", contact: "0556236739", wallpaper:"https://news.northeastern.edu/wp-content/uploads/2023/02/411A9994.jpg"},
   
]


export function generateRandomCode(){
    return Math.floor(Math.random() * 900) + 100;
}