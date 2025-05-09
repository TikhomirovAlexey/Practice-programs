'use strict';

const video = document.querySelector('.video');
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');

let identifierSetInterval = null;
let wasVideoPlaying = false;


function changeProgress() {
    timing.value = video.currentTime;
    let intCurrentTime = parseInt(video.currentTime);

    let minutes = parseInt(intCurrentTime / 60);
    let seconds = intCurrentTime - (60 * minutes);

    currentTimeEl.innerText = `${minutes.toString().length !== 2 ? '0' + minutes : minutes}:${seconds.toString().length !== 2 ? '0' + seconds : seconds}`;
}

window.addEventListener('load', () => {
    timing.min = 0;
    timing.max = video.duration;
    video.volume = volume.value;
    currentTimeEl.innerText = '00:00';
});

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        identifierSetInterval = setInterval(changeProgress, 1000);
    }
});

pauseButton.addEventListener('click', () => {
    if (!video.paused) {
        video.pause();
        clearInterval(identifierSetInterval);
    }
});

stopButton.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    clearInterval(identifierSetInterval);
    changeProgress();
});

video.addEventListener('ended', () => {
    clearInterval(identifierSetInterval);
    changeProgress();
});

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

volume.addEventListener('input', () => {
    video.volume = volume.value;
});