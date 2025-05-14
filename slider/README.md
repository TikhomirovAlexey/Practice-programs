# Слайдер

1. Получаем доступ ко всем необходимым элементам
```
    const slider = document.querySelector('.slider');
    const loaderIco = document.querySelector('.loader');
    const allSliders = document.querySelectorAll('.slider-item');
    const arrowLeft = document.querySelector('.arrow__left');
    const arrowRight = document.querySelector('.arrow__right');
    const fullScreen = document.querySelector('.full-screen');
```

2. Создаем переменную, которая будет содержать текущий индекс изображения на экране.
```
    let currentIndex = 0;
```

3. При загрузке страницы убираем иконку загрузки, удаляем класс, скрывающий изображения у первого элемента.
```
    window.addEventListener('load', () => {
        loaderIco.style.display = 'none';
        allSliders[currentIndex].classList.remove('hidden');

        slider.style.backgroundImage = `url('img/${currentIndex + 1}.jpg')`;
    });
```

4. Для стрелок переключения делаем похожую логику. Ставим слушатель события по клику. Далее Ставим скрывающих класс текущему изображению. Проверяем, не выходим ли за рамки массива с изображениями `allSliders`. Если да, то переключаемся на начало/конец массива, если нет, то переходим на следующий индекс. Убираем класс, скрывающий блоки с изображениями.
```
    arrowLeft.addEventListener('click', () => {
        allSliders[currentIndex].classList.add('hidden');
        if (currentIndex == 0) {
            currentIndex = allSliders.length - 1;
        } else currentIndex--;
        allSliders[currentIndex].classList.remove('hidden');
        slider.style.backgroundImage = `url('img/${currentIndex + 1}.jpg')`;
    });

    arrowRight.addEventListener('click', () => {
        allSliders[currentIndex].classList.add('hidden');
        if (currentIndex == allSliders.length - 1) {
            currentIndex = 0;
        } else currentIndex++;
        allSliders[currentIndex].classList.remove('hidden');
        slider.style.backgroundImage = `url('img/${currentIndex + 1}.jpg')`;
    });
```

5. Для кнопки полного экрана используем слушатель события по клику. С помощью метода `toggle()` добавляем класс `.fullWindow`, если его нет или удаляем, если он добавлен.
```
    fullScreen.addEventListener('click', () => {
        slider.classList.toggle('fullWindow');
    });
```