// Поля
let data_name = document.getElementById("name");
let data_surname = document.getElementById("surname");
let textarea_counter = document.getElementById('comment');
let textarea_count = document.getElementById('count');
let data_checkbox = document.getElementById("data_checkbox");

// Кнопки
let button_red = document.querySelector('.btn.red');
let button_green = document.querySelector('.btn.green');
let button_blue = document.querySelector('.btn.blue');
let button_black = document.querySelector('.btn.black');
let button_close = document.querySelector('.close');
let button_submit = document.querySelector('input.btn');


// Обработчик сабмита если текста нет
setInterval(() => {
    if ((data_name.value.length > 0) && (data_surname.value.length > 0) && (textarea_counter.value.length > 0) && data_checkbox.checked) {
        button_submit.disabled = false;
    } else {
        button_submit.disabled = true;
    }
}, 250); // разумный интервал

// Попап и оверлей
let popup = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');
function openPopup() {
    popup.classList.add("open")
}

function closePopup() {
    popup.classList.remove("open")
}

textarea_counter.onkeyup = () => {
    textarea_count.innerHTML = textarea_counter.value.length;
};

//  Эвенты
overlay.addEventListener("click", closePopup);
button_close.addEventListener("click", closePopup);
button_red.addEventListener("click", openPopup);
button_green.addEventListener("click", openPopup);
button_blue.addEventListener("click", openPopup);
button_black.addEventListener("click", openPopup);
