const html = document.querySelector("html");
const btnCorto = document.querySelector(".app__card-button--corto");
const botonEnFoque = document.querySelector(".app__card-button--enfoque ");
const botonLargo = document.querySelector(".app__card-button--largo")
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title')

btnCorto.addEventListener("click", () => {
    cambiarContexto("descanso-corto");
});

botonEnFoque.addEventListener("click", () => {
    cambiarContexto("enfoque");
});

botonLargo.addEventListener("click", () => {
    cambiarContexto("descanso-largo");
});

function cambiarContexto(contexto){
    html.setAttribute("data-contexto", contexto);
    banner.setAttribute('src', `./imagenes/${contexto}.png`)

    switch (contexto) {
        case "enfoque":
            titulo.innerHTML= ` Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>`
            break;
        case "descanso-corto":
            titulo.innerHTML= ` ¿Qué tal tomar un descanso?,<br>
                <strong class="app__title-strong">Haz una pausa.</strong>`
            break;
        case "descanso-largo":
            titulo.innerHTML= `Hora de volver a la superficie,<br>
                    <strong class="app__title-strong">Haz una Larga pausa.</strong>`
            break;
        default:
            break;
    }
}