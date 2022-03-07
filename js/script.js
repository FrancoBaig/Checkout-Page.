const cards = document.querySelectorAll('.card');
const precioTotal = document.getElementById('total-price');
const cardButtons = document.querySelectorAll('.card-buttons');
const inputs = document.querySelectorAll('.number-input');


window.addEventListener('DOMContentLoaded', function (){
    // Inicial price
    calcularPrecios()

    // Buttons
    buttonsIncDec()
    
    // Input
    inputCalc()
});

function calcularPrecios(){
    let finalPrice = 0;
    cards.forEach((c)=>{
        let cInput = c.querySelector('.number-input').value;
        let cPrecio = c.querySelector('.discount-price').textContent.slice(1);
        
        finalPrice += cPrecio * cInput
    })

    precioTotal.textContent = `$${finalPrice}`
}

function buttonsIncDec(){
    cardButtons.forEach((bntBox) => {
        bntBox.addEventListener('click', (e) =>{
            let el = e.target.classList;
            let input = bntBox.querySelector('.number-input')
        

            if (el.contains('card-btn')){
                if (el.contains('increase')){
                    input.value ++;
                } else if (input.value > 1){
                    input.value --;
                }
            }

            calcularPrecios();
        })
    })
}

function inputCalc(){
    inputs.forEach((inp)=>{
        inp.addEventListener('input', ()=>{
            // hacer que no se pueda ingresar texto ni números menores a 1
            if (isNaN(inp.value) || inp.value < 1){
                inp.value = 1;
            }
    
            calcularPrecios();
        })
    })
}

// const shipping = document.querySelector('.shipping');


// window.addEventListener('DOMContentLoaded', function () {
//     SeleccionarCantidad();
// })

// const cardBtns = document.querySelectorAll('.card-buttons');

// function SeleccionarCantidad() {
//     cardBtns.forEach((btns) => {
//         let input = btns.querySelector('.number-input');


//         btns.addEventListener('click', function (a) {
//             let elem = a.target

//             if (elem.classList.contains('increase')) {
//                 input.value++;
//             } else if (elem.classList.contains('decrease') && input.value > 1) {
//                 input.value--;
//             }

//             chagePrice(btns, input.value)
//         });
//     });
// }

// function chagePrice(btns, value){
//     const priceSpan = document.getElementById('total-price');

    
//     let priceUb = btns.parentNode.parentNode.querySelector('.discount-price')
//     let price = priceUb.innerHTML.slice(1);

//     let finalPrice = price * value;

//     priceSpan.innerHTML = finalPrice;


//     // priceSpan.innerHTML = `$${finalPrice}`;
    
// }

// function precioInicial(){
//     cardBtns.forEach(()=>{

//     })
// }