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
    formDiseña.classList.remove("collapsed");
    buttonComparte.classList.remove("collapsed");
    arrowRellena.classList.toggle("rotation");
    arrowComparte.classList.remove("rotation");
    arrowDiseña.classList.remove("rotation");


    
};

containerRellena.addEventListener ("click", handlerClickR);

//DESPLEGABLE DISEÑA

const handlerClickD = (event) => {
    event.preventDefault ();
    formDiseña.classList.toggle ("collapsed");
    formRellena.classList.remove("collapsed");
    buttonComparte.classList.remove("collapsed");
    arrowDiseña.classList.toggle("rotation");
    arrowRellena.classList.remove("rotation");
    arrowComparte.classList.remove("rotation");


    
}

containerDiseña.addEventListener ("click", handlerClickD);

//DESPLEGABLE COMPARTE
const handlerClickC = (event) => {
    event.preventDefault ();
    buttonComparte.classList.toggle ("collapsedButton");  
    formRellena.classList.remove("collapsed");
    formDiseña.classList.remove("collapsed");
    arrowComparte.classList.toggle("rotation");
    arrowDiseña.classList.remove("rotation");
    arrowRellena.classList.remove("rotation");


    
}

containerComparte.addEventListener ("click", handlerClickC);




