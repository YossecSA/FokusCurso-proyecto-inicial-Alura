const html = document.querySelector("html");
const btnCorto = document.querySelector(".app__card-button--corto");
const botonEnFoque = document.querySelector(".app__card-button--enfoque ");
const botonLargo = document.querySelector(".app__card-button--largo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const listaBotones = document.querySelectorAll(".app__card-button");
const inputEnfoqueMusica = document.getElementById("alternar-musica");
const musica = new Audio("./sonidos/luna-rise-part-one.mp3");
musica.loop = true;

inputEnfoqueMusica.addEventListener("change", () => {
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
});

btnCorto.addEventListener("click", () => {
    cambiarContexto("descanso-corto");
    btnCorto.classList.add("active");
});

botonEnFoque.addEventListener("click", () => {
    cambiarContexto("enfoque");
    botonEnFoque.classList.add("active");
});

botonLargo.addEventListener("click", () => {
    cambiarContexto("descanso-largo");
    botonLargo.classList.add("active");
});

function cambiarContexto(contexto) {
    listaBotones.forEach((contexto) => {
        contexto.classList.remove("active");
    });

    html.setAttribute("data-contexto", contexto);
    banner.setAttribute("src", `./imagenes/${contexto}.png`);

    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = ` Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>`;
            break;
        case "descanso-corto":
            titulo.innerHTML = ` ¿Qué tal tomar un descanso?,<br>
                <strong class="app__title-strong">Haz una pausa.</strong>`;
            break;
        case "descanso-largo":
            titulo.innerHTML = `Hora de volver a la superficie,<br>
                    <strong class="app__title-strong">Haz una Larga pausa.</strong>`;
            break;
        default:
            break;
    }
}
