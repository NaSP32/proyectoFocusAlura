const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');

botonEnfoque.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'enfoque');
})

botonCorto.addEventListener('click', () => {
    /*setAtributte agarra un valor y lo sustituye por otro*/
    html.setAttribute('data-contexto', 'descanso-corto' );
})


botonLargo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-largo');

})