let button = document.querySelector('.popup');
let popup = document.querySelector('.popup_container');
let popup_main = document.querySelector('.popup-main');
let button_in = document.querySelector('.button__in');


button.onclick = () => {
    popup.classList.toggle('show');
}

button_in.onclick = (event) => {
    popup.classList.toggle('show');
    event.stopPropagation();
}

popup_main.onclick = (event) => {
    popup.classList.add('show');
    event.stopPropagation();
}

popup.onclick = function test(event) {
    popup.classList.remove('show');
}