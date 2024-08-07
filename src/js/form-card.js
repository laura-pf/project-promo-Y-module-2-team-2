"use strict";

const paleteMarge = document.querySelector(".js-color-marge");
const paleteKrusty = document.querySelector(".js-color-krusty");
const paleteApu = document.querySelector(".js-color-apu");
const borderCard = document.querySelector(".js-borderCard");
const iconsCard = document.querySelectorAll(".js-iconCard");
const containersIcons = document.querySelectorAll(".js-containerIcon");
const namePreview = document.querySelector(".js-profile-name");
const occupationPreview = document.querySelector(".js-profile-job");
const linkLinkedin = document.querySelector(".js-link-linkedin");
const linkGithub = document.querySelector(".js-link-github");
const linkPhone = document.querySelector(".js-link-phone");
const linkEmail = document.querySelector(".js-link-email");
const inputsFromFill = document.querySelector(".js-form-fillR");
const responseURL = document.querySelector(".js-response");
const textResponseURL = document.querySelector(".js-text-response");
const twitter = document.querySelector(".js-twitter");
const requiredMesagge = document.querySelector(".js-requiredFormMessage");

const data = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

//DISEÑA
const clickPaleteMarge = (event) => {
  namePreview.classList.add("colortittleMarge");
  namePreview.classList.remove("colortittleKrusty");
  namePreview.classList.remove("colortittleApu");
  borderCard.classList.add("card__profile-title");
  borderCard.classList.remove("colorBorderCardKrusty");
  borderCard.classList.remove("colorBorderCardApu");

  for (const icon of iconsCard) {
    icon.classList.add("colortittleMarge");
    icon.classList.remove("colortittleKrusty");
    icon.classList.remove("colortittleApu");
  }

  for (const containerIcon of containersIcons) {
    containerIcon.classList.add("card__icon");
    containerIcon.classList.remove("borderKrusty");
    containerIcon.classList.remove("borderApu");
  }

  data.palette = event.target.value;
};

paleteMarge.addEventListener("click", clickPaleteMarge);

const clickPaleteKrusty = (event) => {
  namePreview.classList.add("colortittleKrusty");
  namePreview.classList.remove("colortittleMarge");
  namePreview.classList.remove("colortittleApu");
  borderCard.classList.add("colorBorderCardKrusty");
  borderCard.classList.remove("card__profile-title");
  borderCard.classList.remove("colorBorderCardApu");

  for (const icon of iconsCard) {
    icon.classList.add("colortittleKrusty");
    icon.classList.remove("colortittleMarge");
    icon.classList.remove("colortittleApu");
  }

  for (const containerIcon of containersIcons) {
    containerIcon.classList.add("borderKrusty");
    containerIcon.classList.remove("card__icon");
    containerIcon.classList.remove("borderApu");
  }
  data.palette = event.target.value;
};

paleteKrusty.addEventListener("click", clickPaleteKrusty);

const clickPaleteApu = (event) => {
  namePreview.classList.add("colortittleApu");
  namePreview.classList.remove("colortittleKrusty");
  namePreview.classList.remove("colortittleMarge");
  borderCard.classList.add("colorBorderCardApu");
  borderCard.classList.remove("colorBorderCardKrusty");
  borderCard.classList.remove("card__profile-title");

  for (const icon of iconsCard) {
    icon.classList.add("colortittleApu");
    icon.classList.remove("colortittleKrusty");
    icon.classList.remove("colortittleMarge");
  }

  for (const containerIcon of containersIcons) {
    containerIcon.classList.add("borderApu");
    containerIcon.classList.remove("borderKrusty");
    containerIcon.classList.remove("card__icon");
  }

  data.palette = event.target.value;
};

paleteApu.addEventListener("click", clickPaleteApu);

//FORMULARIO
inputsFromFill.addEventListener("input", (event) => {
  event.preventDefault();

  if (event.target.id === "name") {
    if (event.target.value) {
      namePreview.innerHTML = event.target.value;
      data.name = event.target.value;
    } else {
      namePreview.innerHTML = "Ralph Wiggum";
    }
  } else if (event.target.id === "work") {
    if (event.target.value) {
      occupationPreview.innerHTML = event.target.value;
      data.job = event.target.value;
    } else {
      occupationPreview.innerHTML = "Estudiante de mi cole";
    }
  } else if (event.target.id === "linkedin") {
    data.linkedin = event.target.value;
    linkLinkedin.href = data.linkedin;
  } else if (event.target.id === "github") {
    data.github = event.target.value;
    linkGithub.href = "https://github.com/" + data.github;
  } else if (event.target.id === "telefono") {
    data.phone = event.target.value;
    linkPhone.href = "tel:" + data.phone;
  } else if (event.target.id === "email") {
    data.email = event.target.value;
    linkEmail.href = "mailto:" + data.email;
  }
});

//SHARE

const buttonShare = document.querySelector(".js-buttonShare");

const handleClickShare = (event) => {
  event.preventDefault();

  //Add Requiered Inputs
  if (!form.checkValidity()) {
    requiredMesagge.classList.remove("hidden");
    formRellena.classList.toggle("collapsed");
    buttonComparte.classList.remove("collapsedButton");
    arrowRellena.classList.toggle("rotation");
    arrowComparte.classList.remove("rotation");

    return;
  }
  buttonComparte.classList.add("buttonShareclick");

  responseURL.classList.remove("hidden");

  data.palette = parseInt(data.palette);

  console.log(data);

  fetch("https://dev.adalab.es/api/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then(function (result) {
      showURL(result);
    })

    .catch((error) => {
      console.error("Error:", error);
    });
};

function showURL(result) {
  let response;
  let tittle;

  if (result.success) {
    function showXButtonShare() {
      twitter.classList.remove("hidden");
    }

    setTimeout(showXButtonShare, 1000);

    tittle =
      '<h1 class="tittle-share">La tarjeta se ha creado correctamente... ¡Todo ha salido a pedir de Milhouse!</h1>';
    response =
      '<a class="link-twitter" href=' +
      result.cardURL +
      ">" +
      result.cardURL +
      "</a>";

    twitter.setAttribute(
      "href",

      `https://twitter.com/intent/tweet?text=Disfruta de mi nueva tarjeta de visita&url=${result.cardURL}`
    );
  } else {
    twitter.classList.add("hidden");
    tittle =
      '<h1 class="tittle-share message-response">Mosquis... La tarjeta no ha sido creada:</h1>';
    response =
      '<p class= "message-response"> ¡Ouch! La tarjeta no ha podido crearse correctamente... </p>';

    if (result.error === "Database error: ER_DATA_TOO_LONG") {
      twitter.classList.add("hidden");
      response +=
        '<p class="message-response" >Error en base de datos: algún dato es demasiado largo.</p>';
    } else {
      twitter.classList.add("hidden");
      response += `<p class = "message-response"> ${result.error} </p>`;
    }
  }
  const content = tittle + response;
  textResponseURL.innerHTML = content;
}

buttonShare.addEventListener("click", handleClickShare);
