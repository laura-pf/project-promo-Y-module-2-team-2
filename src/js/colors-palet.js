'use strict';

/* Cuando la usuaria haga click en la paleta 2/paleta3, recojo valor de los inputs y se muestran los colores en: titulo e iconos, borde cartaS, y borde iconos*/


const paleteMarge = document.querySelector(".js-color-marge");
const paleteKrusty = document.querySelector(".js-color-krusty");
const paleteApu = document.querySelector(".js-color-apu");
const borderCard = document.querySelector(".js-borderCard");
const iconsCard = document.querySelectorAll(".js-iconCard");
const containersIcons = document.querySelectorAll(".js-containerIcon")


const clickPaleteMarge = () => {
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
    
};

paleteApu.addEventListener("click", clickPaleteApu);


