'use strict';

const nameInput = document.querySelector("#name");
const namePreview = document.querySelector("#profile-name");
const occupationInput = document.querySelector("#work");
const occupationPreview = document.querySelector("#profile-occupation");

nameInput.addEventListener("input",(event)=>{
namePreview.innerHTML = event.target.value;
})

occupationInput.addEventListener("input",(event)=>{
occupationPreview.innerHTML = event.target.value;
})

