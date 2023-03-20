const inputRange = document.querySelector('#font-size-control');
const textSizeChange = document.querySelector('#text');

const onChangeSize = (event) => {
    textSizeChange.style.fontSize = `${event.currentTarget.value}px`;
};
inputRange.addEventListener('input', onChangeSize);