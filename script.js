const html = document.querySelector("html");
const btnCorto = document.querySelector(".app__card-button--corto");
const botonEnFoque = document.querySelector(".app__card-button--enfoque ");
const botonLargo = document.querySelector(".app__card-button--largo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const listaBotones = document.querySelectorAll(".app__card-button");
const inputEnfoqueMusica = document.getElementById("alternar-musica");
const musica = new Audio("./sonidos/luna-rise-part-one.mp3");
const btnIniciarPausar = document.getElementById('start-pause')

musica.loop = true;

let tiempoTranscurridoEnSegundos = 5
let idIntervalo = null;

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
btnIniciarPausar.addEventListener("click", iniciarPausa);

//musicas
const musicaPlay = new Audio("./sonidos/play.wav");
const musicaPausa = new Audio("./sonidos/pause.mp3");
const musicaAviso = new Audio("./sonidos/beep.mp3");


const cuentaRegresiva = () => {
    if (tiempoTranscurridoEnSegundos <= 0) { 
        controlSonidos(musicaAviso); 
        alert('Tiempo Finalizado');
        reiniciar();
        return;
    }

    tiempoTranscurridoEnSegundos -= 1;
    console.log(`${tiempoTranscurridoEnSegundos} segundos restantes`);
};


function iniciarPausa() {
    if (idIntervalo) {
        reiniciar();
        controlSonidos(musicaPausa); 
        return;
    }
    controlSonidos(musicaPlay);
    idIntervalo = setInterval(cuentaRegresiva, 1000);

}

function reiniciar() {
    clearInterval(idIntervalo);
    idIntervalo = null;
    console.log("Intervalo detenido.");
}
function controlSonidos(musica) {
    musica.currentTime = 0;
    musica.play();
}