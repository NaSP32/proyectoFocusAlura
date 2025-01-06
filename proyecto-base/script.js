const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image')

botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque')
})

botonCorto.addEventListener('click', () => {
    /*setAtributte agarra un valor y lo sustituye por otro
    html.setAttribute('data-contexto', 'descanso-corto' );
    banner.setAttribute('src', './imagenes/descanso-corto.png')*/
    /*optimizo con una function*/
    cambiarContexto('descanso-corto')

})


botonLargo.addEventListener('click', () => {
    /*html.setAttribute('data-contexto', 'descanso-largo');
    banner.setAttribute('src', './imagenes/descanso-largo.png')*/
    cambiarContexto('descanso-largo')

})

function cambiarContexto(contexto){
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src',  `./imagenes/${contexto}.png`)


}