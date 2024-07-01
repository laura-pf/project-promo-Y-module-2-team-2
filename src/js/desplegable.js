'use strict';

const formRellena = document.querySelector(".js-form-fill");
const containerTittleArrow = document.querySelector (".js-tittleArrow");


const handlerClick = (event) => {
    event.preventDefault ();
    formRellena.classList.toggle ("collapsed");
    
}

containerTittleArrow.addEventListener ("click", handlerClick);
