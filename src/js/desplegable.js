'use strict';

const formRellena = document.querySelector(".js-form-fillR");
const containerRellena = document.querySelector (".js-tittleArrowR");
const formDiseña = document.querySelector(".js-form-fillD");
const containerDiseña = document.querySelector (".js-tittleArrowD");
const containerComparte = document.querySelector(".js-tittleArrowC");
const buttonComparte = document.querySelector(".js-buttonComparte");
const arrowDiseña = document.querySelector(".js-arrowD");
const arrowRellena = document.querySelector(".js-arrowR");
const arrowComparte = document.querySelector(".js-arrowC");




// DESPLEGABLE RELLENA 
const handlerClickR = (event) => {
    event.preventDefault ();
    formRellena.classList.toggle ("collapsed");
    arrowRellena.classList.toggle("rotation");
    
};

containerRellena.addEventListener ("click", handlerClickR);

//DESPLEGABLE DISEÑA

const handlerClickD = (event) => {
    event.preventDefault ();
    formDiseña.classList.toggle ("collapsed");
    arrowDiseña.classList.toggle("rotation");
    
}

containerDiseña.addEventListener ("click", handlerClickD);

//DESPLEGABLE COMPARTE
const handlerClickC = (event) => {
    event.preventDefault ();
    buttonComparte.classList.toggle ("collapsedButton");
    arrowComparte.classList.toggle("rotation");
    
}

containerComparte.addEventListener ("click", handlerClickC);




