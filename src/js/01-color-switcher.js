const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

const changeColor = () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    buttonStart.disabled = true;
    buttonStop.disabled = false;
};
const stopChangeColor = () => {
    clearInterval(timerId);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
}

buttonStart.addEventListener('click', changeColor);
buttonStop.addEventListener('click', stopChangeColor);