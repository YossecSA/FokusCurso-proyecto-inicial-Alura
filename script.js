const html = document.querySelector("html");
const btnCorto = document.querySelector(".app__card-button--corto");
const botonEnFoque = document.querySelector(".app__card-button--enfoque ");
const botonLargo = document.querySelector(".app__card-button--largo")
const banner = document.querySelector('.app__image');

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
}