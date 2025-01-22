# Генератор паролей

1. Создаем переменные `allSymbols`, в котрой хранится строка с необходимыми символами и `password`, в которую будем генерировать пароль.

2. Создаем функцию генерации случайного числа, с помощью которого будем выбирать символ из заготовленной строки. Диапазон генерации от 0 до значения длины строки `allSymbols` плюс 1, так как функция `Math.random()` гененирует числа не включая максимально указзанное.
    ```
        function getRandomNumber() {
            return parseInt(Math.random() * (allSymbols.length + 1));
        }
    ```

3. Создаем рекурсивную функцию генерирования пароля. Прописываем условия выхода из рекурсии `if (passLength != 0){}`. Прописываем логику генерирования пароля `password += allSymbols.charAt(getRandomNumber());`:
    - в пустую строку `password`, которую заранее приготовили, добавляем случайный символ. Далее уменьшаем длину пароля на 1 `--passLength;`, чтобы условие выхода из функции активировалось.
    ```
        function getPassword(passLength) {

            password += allSymbols.charAt(getRandomNumber());

            --passLength;

            if (passLength != 0) {
                getPassword(passLength);
            }
        }
    ```

4. Запрашиваем длину пароля у пользователя  
    `const passwordLength = parseInt(prompt('Введите желательную длину пароля.'));`

5. Исключаем неправильный ввод данных или нажатие на отмену.  
    `if (!(isNaN(passwordLength)) && passwordLength !== 0) {}`

6. Запускаем программу.  
    `getPassword(passwordLength);`

7. Выводим результат.  
    `alert('Ваш пароль: ' + password);`