'use strict';

const formRellena = document.querySelector(".js-form-fillR");
const containerRellena = document.querySelector (".js-tittleArrowR");
const formDiseña = document.querySelector(".js-form-fillD");
const containerDiseña = document.querySelector (".js-tittleArrowD");
const containerComparte = document.querySelector(".js-tittleArrowC");
const buttonComparte = document.querySelector(".js-buttonComparte");


// DESPLEGABLE RELLENA 
const handlerClickR = (event) => {
    event.preventDefault ();
    formRellena.classList.toggle ("collapsed");
    
};

containerRellena.addEventListener ("click", handlerClickR);

//DESPLEGABLE DISEÑA

const handlerClickD = (event) => {
    event.preventDefault ();
    formDiseña.classList.toggle ("collapsed");
    
}

containerDiseña.addEventListener ("click", handlerClickD);

//DESPLEGABLE COMPARTE
const handlerClickC = (event) => {
    event.preventDefault ();
    buttonComparte.classList.toggle ("collapsedButton");
    
}

containerComparte.addEventListener ("click", handlerClickC);




