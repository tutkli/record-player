let state = false;
let btn = document.querySelector('.btn');
let record = document.querySelector('.record');
let control = document.querySelector('.control');
let volumeControlMax = document.querySelector('.volume-control-max');
let volumeControlMid = document.querySelector('.volume-control-mid');
let volumeControlMin = document.querySelector('.volume-control-min');
let song = document.querySelector('.song');
let slider = document.querySelector('.slider');

song.volume = Number('0.2');

btn.addEventListener('click', () => {
    if (state === false) {
        record.classList.add('on');
        control.classList.add('play');
        setTimeout(() => {
            song.play();
        }, 1000);
    } else {
        let currentRecordRotation = record.getAttribute('transform');
        console.log(currentRecordRotation);
        record.classList.remove('on');
        control.classList.remove('play');
        song.pause();
    }
    state = !state;
});

slider.addEventListener('input', (e) => {
    song.volume = - Number(e.target.value);
});


song.addEventListener('ended', () => {
    record.classList.remove('on');
    control.classList.remove('play');
    state = !state;
});

volumeControlMax.addEventListener('click', () => {
    const controlValue = -1;
    slider.value = controlValue;
    song.volume = - controlValue;
});

volumeControlMid.addEventListener('click', () => {
    const controlValue = -0.5;
    slider.value = controlValue;
    song.volume = - controlValue;
});

volumeControlMin.addEventListener('click', () => {
    const controlValue = 0;
    slider.value = controlValue;
    song.volume = - controlValue;
});
