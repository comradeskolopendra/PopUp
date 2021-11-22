let button = document.querySelector('.popup');
let popup = document.querySelector('.popup_container');
let body = document.querySelector('body');
let button_in = document.querySelector('.button__in');

button.onclick = () => {
    popup.classList.toggle('show');
    body.classList.toggle('black');
}

button_in.onclick = () => {
    popup.classList.toggle('show');
    body.classList.toggle('black');
}

