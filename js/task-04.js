const valueEl = document.querySelector('#value');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
valueEl.textContent = counterValue;

const onClickDecrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

const onClickIncrement = () => {
     counterValue += 1;
    valueEl.textContent = counterValue;
}

decrBtn.addEventListener('click', onClickDecrement);
incrBtn.addEventListener('click', onClickIncrement);



