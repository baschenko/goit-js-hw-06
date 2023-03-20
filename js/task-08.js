const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value ==='') {
        alert('Все поля должны быть заполнены!');
    } else {
        const formData = {
            [event.currentTarget.elements.email.name]: event.currentTarget.elements.email.value,
            [event.currentTarget.elements.password.name]: event.currentTarget.elements.password.value,
        };
        console.log(formData);
        form.reset();
    }

}
