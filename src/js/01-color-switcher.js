
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;
stopBtn.disabled=true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function randomColor () {
document.body.style.backgroundColor = getRandomHexColor();

  }

  function changeColor () {
    stopBtn.disabled=false;
    startBtn.disabled = true;
    randomColor();
timerId = setInterval(randomColor,1000);
  }

function stopChangeColor () {
    clearInterval(timerId);
    startBtn.disabled=false;
    stopBtn.disabled=true;
}

startBtn.addEventListener('click',changeColor);
stopBtn.addEventListener('click',stopChangeColor)