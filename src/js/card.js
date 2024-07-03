'use strict';


const namePreview = document.querySelector(".js-profile-name");
const occupationPreview = document.querySelector(".js-profile-job");
const linkLinkedin = document.querySelector(".js-link-linkedin");
const linkGithub = document.querySelector(".js-link-github");
const linkPhone = document.querySelector(".js-link-phone");
const linkEmail = document.querySelector(".js-link-email");



const inputsFromFill = document.querySelector(".js-form-fillR");


// const handleInput = (event) => {

// }


inputsFromFill.addEventListener("input", (event) => {
    event.preventDefault();

    if (event.target.id === "name"){
        if (event.target.value) {
            namePreview.innerHTML = event.target.value;
        } else {
            namePreview.innerHTML =  "Ralph Wiggum";
        }
    } else if (event.target.id === "work")  {
        if (event.target.value){
            occupationPreview.innerHTML = event.target.value;
        } else {
            occupationPreview.innerHTML = "Estudiante de mi cole";
        }
    } else if (event.target.id === "linkedin") {
        linkLinkedin.href = event.target.value;
    } else if (event.target.id === "github") {
        linkGithub.href = "https://github.com/" + event.target.value; 
    } else if (event.target.id === "telefono") {
        linkPhone.href = "tel:" + event.target.value;
    }  else if (event.target.id === "email") {
        linkEmail.href = "mailto:" + event.target.value;
    }
    
});

// nameInput.addEventListener("input",(event)=>{
// namePreview.innerHTML = event.target.value;
// })

//este evento funciona cuando se escribe un nombre en el input del formulario, ya que la carta cambia, pero habria que hacer algo para que cuando la usuaria borre lo que ha escrito, vuelva el valor que estaba por defecto

// occupationInput.addEventListener("input",(event)=>{
// occupationPreview.innerHTML = event.target.value;
// })

