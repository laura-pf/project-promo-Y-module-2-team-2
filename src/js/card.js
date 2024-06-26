'use strict';

const nameInput = document.querySelector("#name");
const namePreview = document.querySelector("#profile-name");
const occupationInput = document.querySelector("#work");
const occupationPreview = document.querySelector("#profile-occupation");

nameInput.addEventListener("input",(event)=>{
namePreview.innerHTML = event.target.value;
})

//este evento funciona cuando se escribe un nombre en el input del formulario, ya que la carta cambia, pero habria que hacer algo para que cuando la usuaria borre lo que ha escrito, vuelva el valor que estaba por defecto

occupationInput.addEventListener("input",(event)=>{
occupationPreview.innerHTML = event.target.value;
})

