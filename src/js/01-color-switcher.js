const startRef = document.querySelector('button[data-start]');
const stopRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');
console.log(bodyRef);

startRef.addEventListener('click', onStartClick);
stopRef.addEventListener('click', onStopClick);
bodyRef.addEventListener('click', onChangeBodyOnClick);

let intervalId = null;

function onChangeBodyOnClick() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function onStartClick() {
  console.log((intervalId = setInterval(onChangeBodyOnClick, 1000)));
  startRef.disabled = true;
}

function onStopClick() {
  clearInterval(intervalId);
  startRef.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
