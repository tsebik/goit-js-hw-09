const startRef = document.querySelector('button[data-start]');
const stopRef = document.querySelector('button[data-stop]');
const bodyRef = document.body;

startRef.addEventListener('click', onStartClick);
stopRef.addEventListener('click', onStopClick);

let intervalId = null;

function changeColorBody() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function onStartClick() {
  intervalId = setInterval(changeColorBody, 1000);
  startRef.disabled = true;
}

function onStopClick() {
  clearInterval(intervalId);
  startRef.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
