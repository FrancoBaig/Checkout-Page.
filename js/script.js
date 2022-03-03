const cardBtns = document.querySelectorAll('.card-buttons');

window.addEventListener('DOMContentLoaded', function(){
    SeleccionarCantidad();
})


function SeleccionarCantidad() {
    cardBtns.forEach((btns) => {
        let input = btns.querySelector('.number-input');

        btns.addEventListener('click', function (a) {
            let elem = a.target

            if (elem.classList.contains('increase')) {
                input.value++;
            } else if (elem.classList.contains('decrease') && input.value > 1) {
                input.value--;
            }
        });
    });
}