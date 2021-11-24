// popup
let button = document.querySelector('.popup');
let popup = document.querySelector('.popup_container');
let popup_main = document.querySelector('.popup-main');
let button_in = document.querySelector('.button__in');

// input
let money = document.getElementById("money");
let serial = document.getElementById("serial_number");
let card_number = document.querySelector('.card__number');
let year = document.getElementById('year');
let mounth = document.getElementById('mounth');
let cvv = document.getElementById('cvv');

// paragraph
let money_text = document.querySelector('#money_text');
let serial_text = document.querySelector('#serial_text');
let warning = document.querySelector('#warning');


// final button
let final = document.querySelector('.link');

// functions
button.onclick = () => {
    if (money.value == '' || serial.value == '') {
        warning.classList.remove('text_white')
        warning.classList.add('text_black');
    }
    else {
        popup.classList.toggle('show');
        warning.classList.remove('text_black')
        warning.classList.add('text_white')

        // money_text.innerHTML = `<p>Сумма введенная вами = ${money.value} тг.</p>`;
        // money.value = '';

        // serial_text.innerHTML = `<p>Номер заказа = ${serial.value}</p>`;
        // serial.value = '';
    }
}

button_in.onclick = (event) => {
    popup.classList.toggle('show');
    event.stopPropagation();
}

popup_main.onclick = (event) => {
    popup.classList.add('show');
    event.stopPropagation();
}

popup.onclick = () => {
    popup.classList.remove('show');
}


final.onclick = () => {
    console.log(money.value);
    money.value = '';

    console.log(serial.value);
    serial.value = '';

    console.log(card_number.value)
    card_number.value = '';

    console.log(year.value);
    year.value = '';

    console.log(mounth.value);
    mounth.value = '';

    console.log(cvv.value);
    cvv.value = '';
}
