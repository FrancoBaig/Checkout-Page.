const products = [
    {
        id: 1,
        name: "Vintage Backbag",
        img: "images/photo1.png",
        discount: 54.99,
        full: 94.99,
        number: 1
    },
    {
        id: 2,
        name: "Levi Shoes",
        img: "images/photo2.png",
        discount: 74.99,
        full: 124.99,
        number: 1
    }
]



const shipping = document.querySelector('.shipping');



window.addEventListener('DOMContentLoaded', function () {
    // impProductos()
    SeleccionarCantidad();
})

// function impProductos() {
//     let a = products.map(function (product) {
//         return `<div class="card">
//                     <img src="${product.img}" alt="${product.name}" class="card-img">
//                     <div class="card-body">
//                     <h3 class="card-title">${product.name}</h3>
//                     <div class="card-prices">
//                         <p class="discount-price">$${product.discount}</p>
//                         <del class="full-price">$${product.full}</del>
//                     </div>
//                     <div class="card-buttons">
//                         <!-- Minus button -->
//                         <button class="card-btn decrease">-</button>

//                         <!-- Input  -->
//                         <input type="text" class="number-input" value="1">

//                         <!-- Plus button -->
//                         <button class="card-btn increase">+</button>
//                     </div>
//                     </div>
//                 </div>`
//     }).join('')

//     shipping.innerHTML = a;

// }


function SeleccionarCantidad() {
    const cardBtns = document.querySelectorAll('.card-buttons');

    cardBtns.forEach((btns) => {
        let input = btns.querySelector('.number-input');


        btns.addEventListener('click', function (a) {
            let elem = a.target

            if (elem.classList.contains('increase')) {
                input.value++;
            } else if (elem.classList.contains('decrease') && input.value > 1) {
                input.value--;
            }

            chagePrice(btns, input.value)
        });
    });
}

function chagePrice(btns, value){
    const priceSpan = document.getElementById('total-price');

    
    let priceUb = btns.parentNode.parentNode.querySelector('.discount-price')
    let price = priceUb.innerHTML.slice(1);

    let finalPrice = price * value;

    priceSpan.innerHTML = finalPrice;


    // priceSpan.innerHTML = `$${finalPrice}`;
    
}