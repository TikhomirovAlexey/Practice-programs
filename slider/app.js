'use strict';

const slider = document.querySelector('.slider');
const loaderIco = document.querySelector('.loader');
const allSliders = document.querySelectorAll('.slider-item');
const arrowLeft = document.querySelector('.arrow__left');
const arrowRight = document.querySelector('.arrow__right');
const fullScreen = document.querySelector('.full-screen');

let currentIndex = 0;

window.addEventListener('load', () => {
    loaderIco.style.display = 'none';
    allSliders[currentIndex].classList.remove('hidden');

    slider.style.backgroundImage = `url('img/${currentIndex + 1}.jpg')`;
});

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

fullScreen.addEventListener('click', () => {
    slider.classList.toggle('fullWindow');
});