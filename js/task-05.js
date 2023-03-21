const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const inputNameChange = (event) => {
    outputEl.textContent = event.currentTarget.value;
   if (event.currentTarget.value.trim() === '') {
        outputEl.textContent = 'Anonymous';    
    } 
}
inputEl.addEventListener('input', inputNameChange);