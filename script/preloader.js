let body = document.getElementById('body');
let preloader = document.querySelector('.preloader');

body.style.overflow = 'hidden';
preloader.style.display = 'block';

function preload() {

    preloader.classList.add('preloader_SCRIPT')
    body.style.overflow = 'visible';
}