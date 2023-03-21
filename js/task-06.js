const textInput = document.querySelector('#validation-input');

const inputLenghtCheck = (event) => {
  
    if (event.currentTarget.value.length !== Number(event.target.dataset.length)) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');  
    } else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    };
    
}

textInput.addEventListener('blur', inputLenghtCheck);