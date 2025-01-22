'use strict';

const allSymbols = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM';

let password = ''

/**
 * Функция генерирует случайное число в диапазоне от 0 до заданного параметром
 * @returns {number} Возвращает сгенерированное число
 */
function getRandomNumber() {
    return parseInt(Math.random() * (allSymbols.length + 1));
}


/**
 * Функция генерирует случайный пароль
 * @param {number} passLength Длина пароля
 */
function getPassword(passLength) {

    password += allSymbols.charAt(getRandomNumber());

    --passLength;

    if (passLength != 0) {
        getPassword(passLength);
    }
}

const passwordLength = parseInt(prompt('Введите желательную длину пароля.'));

if (!(isNaN(passwordLength)) && passwordLength !== 0) {
    
    getPassword(passwordLength);
    
    alert('Ваш пароль: ' + password);
}
