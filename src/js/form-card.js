'use strict';



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

const data = {
    palette: 1,
    name:"",
    job:"",
    phone:"",
    email:"",
    linkedin:"",
    github:"",
    photo:"",

}


//DISEÑA
const clickPaleteMarge = (event) => {
    namePreview.classList.add("colortittleMarge");
    namePreview.classList.remove("colortittleKrusty");
    namePreview.classList.remove("colortittleApu");
    borderCard.classList.add("card__profile-title");
    borderCard.classList.remove("colorBorderCardKrusty");
    borderCard.classList.remove("colorBorderCardApu");
   

    

    for (const icon of iconsCard){
        icon.classList.add("colortittleMarge"); 
        icon.classList.remove("colortittleKrusty"); 
        icon.classList.remove("colortittleApu");    

   }

   for (const containerIcon of containersIcons){
        containerIcon.classList.add("card__icon");
        containerIcon.classList.remove("borderKrusty");
        containerIcon.classList.remove("borderApu");

   }

   data.palette = event.target.value;

   

};


paleteMarge.addEventListener("click", clickPaleteMarge)


const clickPaleteKrusty = (event) => {
    namePreview.classList.add("colortittleKrusty");
    namePreview.classList.remove("colortittleMarge");
    namePreview.classList.remove("colortittleApu");
    borderCard.classList.add("colorBorderCardKrusty");
    borderCard.classList.remove("card__profile-title");
    borderCard.classList.remove("colorBorderCardApu");
    


    for (const icon of iconsCard){
        icon.classList.add("colortittleKrusty"); 
        icon.classList.remove("colortittleMarge");
        icon.classList.remove("colortittleApu"); 

   }

   for (const containerIcon of containersIcons){
        containerIcon.classList.add("borderKrusty");
        containerIcon.classList.remove("card__icon");
        containerIcon.classList.remove("borderApu");

   }

   data.palette = event.target.value;


    
};

paleteKrusty.addEventListener("click", clickPaleteKrusty);

const clickPaleteApu = (event) => {
    namePreview.classList.add("colortittleApu")
    namePreview.classList.remove("colortittleKrusty");
    namePreview.classList.remove("colortittleMarge");
    borderCard.classList.add("colorBorderCardApu");
    borderCard.classList.remove("colorBorderCardKrusty");
    borderCard.classList.remove("card__profile-title");
    
    
    
    for (const icon of iconsCard){
        icon.classList.add("colortittleApu");
        icon.classList.remove("colortittleKrusty"); 
        icon.classList.remove("colortittleMarge"); 

   }

   for (const containerIcon of containersIcons){
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

    if (event.target.id === "name"){
        if (event.target.value) {
            namePreview.innerHTML = event.target.value;
            data.name = event.target.value;
        } else {
            namePreview.innerHTML =  "Ralph Wiggum";
        }
    } else if (event.target.id === "work")  {
        if (event.target.value){
            occupationPreview.innerHTML = event.target.value;
            data.job = event.target.value;
        } else {
            occupationPreview.innerHTML = "Estudiante de mi cole";
        }
    } else if (event.target.id === "linkedin") {
        linkLinkedin.href = event.target.value;
        data.linkedin = event.target.value;

    } else if (event.target.id === "github") {
        linkGithub.href = "https://github.com/" + event.target.value; 
        data.github = "https://github.com/" + event.target.value;
    } else if (event.target.id === "telefono") {
        linkPhone.href = "tel:" + event.target.value;
        data.phone = "tel:" + event.target.value;


    }  else if (event.target.id === "email") {
        linkEmail.href = "mailto:" + event.target.value;
        data.email = "mailto:" + event.target.value;


    }
    
});



//SHARE

const buttonShare = document.querySelector(".js-buttonShare");

const handleClickShare = (event) => {
    event.preventDefault();
    

    fetch("https://dev.adalab.es/card/16766402168739246", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type" : "application/json"},
    })

    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        
        
    })


}


buttonShare.addEventListener("click", handleClickShare);
