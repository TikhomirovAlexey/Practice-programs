# Веб-сайт с плавным появлением блоков при скроле страницы

Чтобы сделать метод универсальным, необходим общий блок. 
```
<div class="container">
...
</div>

```

Так же, в качестве общего блока можно использовать `<body></body>`.

Далле получаем доступ к общему блоку в файле javascript
```
const containerBox = document.querySelector('.container');
```

Данный блок нужен, чтобы получить доступ к его дочерним элементам

```
containerBox.children
```

Следующи этапом делаем слушатель событий `'scroll'` на объект `window`
```
window.addEventListener('scroll', event => {

});
```

Прописываем универсальный метод для появления блоков

```
window.addEventListener('scroll', event => {
    for (let i = 1; i < containerBox.children.length; i++) {
        if (window.pageYOffset > heightScrollUnit * i) {
            if(containerBox.children[i].classList.contains('hidden')) {
                containerBox.children[i].classList.remove('hidden');
                let randomAnimate = arrayAnimate[parseInt(Math.random() * arrayAnimate.length)];
                containerBox.children[i].classList.add(randomAnimate);
            }
        }
    }
});
```

Цикл делает метод универсальным. То есть при изменении количества блоков в HTML разметке сам метод менять не нужно. Начинаем с индекса второго элемента `let i = 1`, так как нам необходимо чтобы первый эелемент отображался сразу при загрузке страницы.
```
for (let i = 1; i < containerBox.children.length; i++){
    ...
}
```

Первое условие позволяет появляться блокам поочереди, в зависимости от положения его в HTML разметке и шага, который указан в переменной `heightScrollUnit`.
```
if (window.pageYOffset > heightScrollUnit * i){
    ...
}
```

Второе условие котролирует, чтобы класс, скрывающий блок, был удален и класс случайной анимации добавлялся только один раз.
```
if(containerBox.children[i].classList.contains('hidden')) {
    containerBox.children[i].classList.remove('hidden');
    let randomAnimate = arrayAnimate[parseInt(Math.random() * arrayAnimate.length)];
    containerBox.children[i].classList.add(randomAnimate);
}
```