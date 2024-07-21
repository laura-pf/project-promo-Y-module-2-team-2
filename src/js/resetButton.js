"use strict";

//1.Cuando la usuaria haga click en el boton reset
//2.Se eliminan los datos del formulario y la carta de previsualizacion

const buttonReset = document.querySelector(".js-buttonReset");
const form = document.querySelector(".js-form");
//constantes de cada elemento de la carta en archivo card.js

const defaultCard = {
  name: "Ralph Wiggum",
  job: "Estudiante de mi cole",
  email: "mailto:",
  phone: "tel:",
  linkedin: " ",
  github: "https://github.com/",

  image: "./images/ralph.jpg",
};

const handleClickReset = (event) => {
  form.reset();
  namePreview.innerHTML = defaultCard.name;
  occupationPreview.innerHTML = defaultCard.job;
  linkEmail.href = defaultCard.email;
  linkPhone.href = defaultCard.phone;
  linkLinkedin.href = defaultCard.linkedin;
  linkGithub.href = defaultCard.github;
  profileImage.src = defaultCard.image;
  profilePreview.style.backgroundImage = "";
  requiredMesagge.classList.add("hidden");
  clickPaleteMarge();
};

buttonReset.addEventListener("click", handleClickReset);
