'use strict';

const containerBox = document.querySelector('.container');
const heightScrollUnit = 350;
const arrayAnimate = ['animate__bounce', 'animate__swing', 'animate__wobble', 'animate__backInDown', 'animate__bounceInLeft', 'animate__fadeInRight', 'animate__backInRight', 'animate__flip', 'animate__flipInX', 'animate__lightSpeedInRight', 'animate__jackInTheBox', 'animate__zoomInDown']

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