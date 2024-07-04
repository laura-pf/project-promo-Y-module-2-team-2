'use strict';

//1.Cuando la usuaria haga click en el boton reset
//2.Se eliminan los datos del formulario y la carta de previsualizacion

const buttonReset = document.querySelector(".js-buttonReset");
const form = document.querySelector(".js-form");
//constantes de cada elemento de la carta en archivo card.js


const defaultCard = {
    name: "Ralph Wiggum",
    job: "Estudiante de mi cole",
    email: ` 
    <a href="mailto:" class="js-link-email">
          <div class="card__icon">
            <i class="fa-regular fa-envelope"></i>
          </div>
        </a>`,
    phone: `
        <a href="tel:" class="js-link-phone">
          <div class="card__icon">
            <i class="fa-solid fa-mobile-screen-button"></i>
          </div>
        </a>`,

    linkedin: `
    <a href="" target="_blank" class="js-link-linkedin">
          <div class="card__icon">
            <i class="fa-brands fa-linkedin-in js-icon-linkedin"></i>
          </div>
        </a>`,
    github: `
    <a href="" target="_blank" class="js-link-github">
          <div class="card__icon">
            <i class="fa-brands fa-github-alt"></i>
          </div>
        </a>`,
    image: "/images/ralph.jpg",

}

const handleClickReset = (event) => {
    form.reset();
    namePreview.innerHTML = defaultCard.name;
    occupationPreview.innerHTML = defaultCard.job;
    linkEmail.innerHTML = defaultCard.email;
    linkPhone.innerHTML = defaultCard.phone;
    linkLinkedin.innerHTML = defaultCard.linkedin;
    linkGithub.innerHTML = defaultCard.github;
    profileImage.src = defaultCard.image;
    profilePreview.style.backgroundImage = '';

}

buttonReset.addEventListener("click", handleClickReset);
