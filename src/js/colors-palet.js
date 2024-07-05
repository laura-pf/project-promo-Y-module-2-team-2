'use strict';

/* Cuando la usuaria haga click en la paleta 2/paleta3, recojo valor de los inputs y se muestran los colores en: titulo e iconos, borde cartaS, y borde iconos*/

const paleteKrusty = document.querySelector(".js-color-krusty");
const paleteApu = document.querySelector(".js-color-apu");
const iconsCard = document.querySelectorAll(".js-iconCard");
//llamar al contenedor de los iconos para cambiar el color del borde con queryselecctorall y creando un bucle en el array.


const clickPaleteKrusty = (event) => {
    namePreview.classList.add("colortittleKrusty");
    for (const icon of iconsCard){
        icon.classList.add("colortittleKrusty");
        
    }
    
}

paleteKrusty.addEventListener("click", clickPaleteKrusty);
