# Видеоплеер

## Практика JavaScript

1. Получаем все элементы управления
```
    const video = document.querySelector('.video');
    const playButton = document.querySelector('.play');
    const pauseButton = document.querySelector('.pause');
    const stopButton = document.querySelector('.stop');
    const volume = document.querySelector('.volume');
    const timing = document.querySelector('.timing');
    const currentTimeEl = document.querySelector('.currentTime');
    const allTimeEl = document.querySelector('.allTime');
```

2. При загркзке страницы делаем некоторые настройки
```
    window.addEventListener('load', () => {
        timing.min = 0;
        timing.max = video.duration;
        video.volume = volume.value;
        currentTimeEl.innerText = '00:00';

        let minutes = parseInt(video.duration / 60);
        let seconds = parseInt(video.duration - (60 * minutes));
        allTimeEl.innerText = `${minutes.toString().length < 2 ? '0' + minutes : minutes}:${seconds.toString().length < 2 ? '0' + seconds : seconds}`;
    });
```

* С помощью метода `duration` у объекта `video` ставим актуальное максимальное значение для `input:range` с классом `.timing`, который отображает дорожку времени видео.
```
    timing.min = 0;
    timing.max = video.duration;
```

* С помощью метода `volume` у объекта `video` ставим актуальное значение уровня звука, которое берем из `input:range` с классом `.volume`. Так же устанавливаем изначальный формат отображения времени видео `currentTimeEl.innerText = '00:00'`.
```
    video.volume = volume.value;
    currentTimeEl.innerText = '00:00';
```

* Ставим актуальную длительность видео.
```
    let minutes = parseInt(video.duration / 60);
    let seconds = parseInt(video.duration - (60 * minutes));
    allTimeEl.innerText = `${minutes.toString().length < 2 ? '0' + minutes : minutes}:${seconds.toString().length < 2 ? '0' + seconds : seconds}`;
```

3. Кнопка запуска видео. К элементу `playButton` добавляем слушатель события, который срабатывает при клике `playButton.addEventListener('click', () => {}`. Здесь необходимо сделать проверку проигрывания видео. Без проверки функция `setInterval` будет запускаться при каждом клике. С помощью метода `play()` у объекта `video` включаем видео.
```
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        identifierSetInterval = setInterval(changeProgress, 1000);
    }
});
```

4. Функция `setInterval` вызывает функцию `changeProgress` с переодичностью в 1 секунду. В этой функции меняем актуальное время на шкале длительности видео `input:range` с классом `.timing`. Так же отображаем актуальное значение ыремени в цифрофом формате в теге `<span class="currentTime"></span>`
```
    function changeProgress() {
        timing.value = video.currentTime;
        let intCurrentTime = parseInt(video.currentTime);

        let minutes = parseInt(intCurrentTime / 60);
        let seconds = intCurrentTime - (60 * minutes);

        currentTimeEl.innerText = `${minutes.toString().length < 2 ? '0' + minutes : minutes}:${seconds.toString().length < 2 ? '0' + seconds : seconds}`;
    }
```

5. Кнопка паузы. К элементу `pauseButton` добавляем слушатель события, который срабатывает при клике `pauseButton.addEventListener('click', () => {}`. С помощью метода `pause()` у объекта `video` ставим видео на паузу. Так же прекращаем вызов функции `setInterval` с помощью `clearInterval`, в которой мы указываем идентификатор функции `setInterval` сохраненный в переменной `identifierSetInterval`.
```
    pauseButton.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            clearInterval(identifierSetInterval);
        }
    });
```

6. Кнопка стоп. К элементу `stopButton` добавляем слушатель события, который срабатывает при клике `stopButton.addEventListener('click', () => {}`. С помощью метода `pause()` у объекта `video` ставим видео на паузу. Так же прекращаем вызов функции `setInterval` с помощью `clearInterval`, в которой мы указываем идентификатор функции `setInterval` сохраненный в переменной `identifierSetInterval`. Обнуляем время видео с помощью метода `video.currentTime`, которому присваиваем значение 0. после вызываем функцию `changeProgress()` для изменения отображения актуального времени.
```
    stopButton.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        clearInterval(identifierSetInterval);
        changeProgress();
    });
```

7. При завершении проигрывания видео необходимо прекратить вызов функции `setInterval` с помощью `clearInterval`, в которой мы указываем идентификатор функции `setInterval` сохраненный в переменной `identifierSetInterval`. Так же вызываем функцию `changeProgress()` для изменения отображения актуального времени. Для всего этого используем слушатель события `ended`, который вызываем для объекта `video`.
```
    video.addEventListener('ended', () => {
        clearInterval(identifierSetInterval);
        changeProgress();
    });
```
8. Для изменения времени видео на шкале времени `input:range` с классом `.timing` при клике используем два слушателя события `mousedown` и `change`.
```
    timing.addEventListener('mousedown', () => {
        wasVideoPlaying = !video.paused;
        if (wasVideoPlaying) {
            video.pause();
            clearInterval(identifierSetInterval);
        }
    });

    timing.addEventListener('change', () => {
        video.currentTime = timing.value;
        if (wasVideoPlaying) {
            video.play();
            identifierSetInterval = setInterval(changeProgress, 1000);
        } else {
            changeProgress();
        }
    });
```

9. Для изменения уровня звука используем метод `volume` объекта `video`, в который мы присваеваем сначение шкалы `input:range` с классом `.volume`.
```
    volume.addEventListener('input', () => {
        video.volume = volume.value;
    });
```