const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const botonIniciarPausar = document.querySelector('#start-pause');
const iniciarTemporizador = new Audio('./sonidos/play.wav');
const pausarTemporizador = new Audio('./sonidos/pause.mp3');
const finTemporizador = new Audio('./sonidos/beep.mp3');
const textoIniciarPausar = document.querySelector('#start-pause span');
const imagenIniciarPausar = document.querySelector('.app__card-primary-butto-icon');
const tiempoEnPantalla = document.querySelector('#timer');


let tiempoTranscurridoEnSegundos = 1500;
let idIntervalo = null;

musica.loop=true;


inputEnfoqueMusica.addEventListener('change', ()=> {
    if (musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})



/*Actualizo los eventos de click de cada boton para crear un contexto*/
botonEnfoque.addEventListener('click', () => {
    tiempoTranscurridoEnSegundos = 1500;
    cambiarContexto('enfoque')
    botonEnfoque.classList.add('active')
})

botonCorto.addEventListener('click', () => {
    /*setAtributte agarra un valor y lo sustituye por otro
    html.setAttribute('data-contexto', 'descanso-corto' );
    banner.setAttribute('src', './imagenes/descanso-corto.png')*/
    /*optimizo con una function*/
    tiempoTranscurridoEnSegundos = 300;
    cambiarContexto('descanso-corto')
    botonCorto.classList.add('active');

})


botonLargo.addEventListener('click', () => {
    /*html.setAttribute('data-contexto', 'descanso-largo');
    banner.setAttribute('src', './imagenes/descanso-largo.png')*/
    tiempoTranscurridoEnSegundos = 900;
    cambiarContexto('descanso-largo')
    botonLargo.classList.add('active');

})

function cambiarContexto(contexto){

    mostrarTiempo();
    botones.forEach(function(contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src',  `./imagenes/${contexto}.png`);
    switch (contexto) {
        case "enfoque":
            /*Modifico con innerHTML que me interpreta las etiquetas html + texto */
            titulo.innerHTML = `Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `            
            break;
        case "descanso-corto":
            titulo.innerHTML = `¿Qué tal tomar un respiro? 
                <strong class="app__title-strong">¡Haz una pausa corta!</strong>
                `
            break;
        case "descanso-largo":
            titulo.innerHTML = `Hora de volver a la superficie 
            <strong class="app__title-strong">Haz una pausa larga.</strong>
            `
            break;
            
    
        default:
            break;
    }


}

const cuentaRegresiva = ()=>{
    if (tiempoTranscurridoEnSegundos <= 0){
        finTemporizador.play()
        alert('Tiempo final')
        reiniciar()
        return
    }
    
    /*Modifico el texto del boton con text content, interpreta todo como texto */
    textoIniciarPausar.textContent = "Pausar"
    /**Logo pausa */
    imagenIniciarPausar.setAttribute('src', './imagenes/pause.png')
    tiempoTranscurridoEnSegundos -= 1
    mostrarTiempo()
}

botonIniciarPausar.addEventListener('click', iniciarPausar);

function iniciarPausar () {
    if (idIntervalo){
        pausarTemporizador.play();
        imagenIniciarPausar.setAttribute('src', './imagenes/play_arrow.png')
        reiniciar()
        return
    }
    iniciarTemporizador.play();
    idIntervalo = setInterval(cuentaRegresiva, 1000)
}

function reiniciar (){
    clearInterval(idIntervalo)
    idIntervalo = null
    /**Text content interpreta como texto */
    textoIniciarPausar.textContent = "Comenzar"
    /**Imagen reiniciar */
    imagenIniciarPausar.setAttribute('src', './imagenes/play_arrow.png')
} 

function mostrarTiempo(){
    const tiempo = new Date(tiempoTranscurridoEnSegundos * 1000)
    const tiempoFormateado = tiempo.toLocaleTimeString('es-MX',{minute:'2-digit', second:'2-digit'})
    tiempoEnPantalla.innerHTML = `${tiempoFormateado}`
}
mostrarTiempo()