function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesId = document.querySelector('#boxes');
const controlsRef = document.querySelector('#controls');

function createBoxes(amount) {
  const arr = [];
  
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = color;
    arr.push(divEl);
  }
  boxesId.append(...arr);
}


const onCreateBtnClick = () => {
  createBoxes(controlsRef.firstElementChild.value);
}

const onDestroyBtnClick = () => {
  boxesId.innerHTML = '';
}

createBtn.addEventListener('click', onCreateBtnClick);

destroyBtn.addEventListener('click', onDestroyBtnClick);