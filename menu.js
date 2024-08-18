const foodList = [
    {
        id: 0,
        Image: "B1.jpg" ,
        Name :"Caribbean Spicy Zinger Burger" ,
        Price: 208.57,
    },
    {
        id: 1,
        Image: "B2.jpg",
        Name : "Cheese Burst Deluxe",
        Price : 208.57,
    },
    {
        id: 2,
        Image: "B3.jpg" ,
        Name: "Smoky BBQ Blaze" ,
        Price:208.57 ,
    },
    {
        id: 3,
        Image: "B4.jpg",
        Name :" Crispy Chicken Crunch" ,
        Price :208.57 ,
    },
    {
        id : 4,
        Image: "B5.jpg",
        Name : "Spicy Inferno Zinger Burger",
        Price :208.57 ,
    },
    {
        id: 5,
        Image: "B6.jpg",
        Name : "Classic Crust Burger",
        Price :208.57,
    },
    {
        id: 6,
        Image: "B7.avif" ,
        Name : "Spicy Mighty Melt Burger ",
        Price :208.57,
    },
    {
        id: 7,
        Image: "P1.jpg" ,
        Name :" Classic Margherita Royale",
        Price :208.57 ,
    },
    {
        id: 8,
        Image: "P2.jpg" ,
        Name :" Pesto & Artichoke Paradise",
        Price :208.57,
    },
    {
        id: 9,
        Image: "P3.jpg" ,
        Name : "Ultimate Truffle Delight",
        Price :208.57,
    },
    {
        id: 10,
        Image: "P4.jpg" ,
        Name : "Mediterranean Veggie Extravaganza ",
        Price :208.57,
    },
    {
        id: 11,
        Image: "P5.jpg" ,
        Name :"Smoky BBQ Chicken Supreme",
        Price :208.57,
    },
    {
        id: 12,
        Image: "P6.jpg" ,
        Name :"Gourmet Prosciutto & Fig ", 
        Price :208.57,
    },
    {
        id: 13,
        Image: "P7.jpg" ,
        Name : "Spicy Sriracha Sausage Sensation"
        ,
        Price :208.57,
    },
    {
        id: 14,
        Image: "bev1.jpg" ,
        Name :"Pepsi 475ml PET",
        Price : 57.14 ,
    },
    {
        id: 15,
        Image: "bev2.jpg" ,
        Name : "Pepsi Can 300 ml",
        Price : 57.14 ,
    },
    {
        id: 16,
        Image: "bev3.jpg" ,
        Name :" 7UP Can 300 ml",
        Price : 57.14  ,
    },
    {
        id: 17,
        Image: "bev4.jpg" ,
        Name : "Pepsi Black Can 300 ml",
        Price : 57.14 ,
    },
    {
        id: 18,
        Image: "bev5.jpg" ,
        Name : "Mirinda Can 300 ml",
        Price : 57.14 ,
    },
    {
        id: 19,
        Image: "D1.jpg" ,
        Name :"Chocolate Lava Cake",
        Price :208.57,
    },
    {
        id: 20,
        Image: "D2.jpg" ,
        Name : "Choco Mud Pie",
        Price :208.57,
    },
    {
        id: 21,
        Image: "D3.jpg" ,
        Name : "Coffee Mousse Cake",
        Price :208.57,
    },
    {
        id: 22,
        Image : "D8.jpg" ,
        Name : "Vanilla Cone",
        Price :208.57,
    },
    {
        id: 23,
        Image: "D9.jpg" ,
        Name :"Hot Caramel Sundae",
        Price :208.57,
    },
    {
        id: 24,
        Image: "D7.jpg" ,
        Name :"Hot Fudge Sundae",
        Price : 208.57,
    }
] ;

const addtocartBtn = document.querySelectorAll(".addtocart-btn");
const cartList = document.querySelector(".offcanvas-body");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const amountItem = document.querySelector("#amount-item");


const amountCalculator = () => {
    plusBtn.addEventListener ("click", () => {
        amountItem.innerText++ ;
    })
    minusBtn.addEventListener ("click", () => {
        if(amountItem.innerHTML <= 0){
            minusBtn.disabled = true ;
        }else{
            amountItem.innerText-- ;
        }
        minusBtn.disabled = false;  
    })
};
amountCalculator();


addtocartBtn.forEach((button) => {
    button.addEventListener("click", (event) =>{

// taking buttonId 
        const buttonId = parseInt(event.target.id, 10);
        console.log(buttonId);


// enable the body of item in cart
        console.log("buttonworking");
        const offCanvasbody = document.querySelector(".offcanvas-body");
        const newCard = document.createElement("div");
        newCard.classList.add("cart-card","my-2");
        const cardImage = document.createElement("div");
        cardImage.classList.add("card-image");
        const nameItem = document.createElement("span");
        nameItem.id = "name-item";
        const priceItem = document.createElement("span");
        priceItem.id = "price-item";
        const subsbtn = document.createElement("button");
        subsbtn.classList.add("minus-btn");
        subsbtn.innerText = '-';
        const amountNo = document.createElement("span");
        amountNo.id= "amount-item";
        amountNo.innerText = "1";
        const addBtn = document.createElement("button");
        addBtn.classList.add("plus-btn");
        addBtn.innerText = "+";
    
//adding information to cart-item
        const itembyId = foodList.find(item => item.id === buttonId );
        console.log(itembyId.id);
        console.log(itembyId);

        if(itembyId.id === buttonId ){
            nameItem.innerHTML = itembyId.Name ;
            priceItem.innerHTML = `₹${itembyId.Price.toFixed(2)}`;
            cardImage.style.backgroundImage = `url(${itembyId.Image})`;
        } else {
            console.log("Item not found!");
        }

// adding item to cart
        offCanvasbody.appendChild(newCard);
        newCard.appendChild(cardImage);
        newCard.appendChild(nameItem);
        newCard.appendChild(priceItem);
        newCard.appendChild(subsbtn);
        newCard.appendChild(amountNo);
        newCard.appendChild(addBtn);
    })
});


