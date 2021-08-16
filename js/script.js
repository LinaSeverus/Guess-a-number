"use strict";

const rndInt = Math.floor(Math.random() * 11);
console.log(rndInt);
let step = 1;

while (true) {
    let userNumber = prompt('Угадай число от 0 до 10');
    if (isNaN(userNumber)) {
        alert('Допускается ввод только чисел!');
        step++;
        continue;
    } else if (userNumber > rndInt) {
        alert('Загаданное число меньше');
        step++;
    } else if (userNumber < rndInt) {
        alert('Загаданное число больше');
        step++;
    } else {
        alert(`Верно! Получи конфетку). Количество попыток = ${step}`);
        break;
    }
}