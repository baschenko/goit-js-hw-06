const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value ==='') {
        alert('Все поля должны быть заполнены!');
    } else {
        const formData = {
            [email.name]: email.value,
            [password.name]: password.value,
        };
        console.log(formData);
        form.reset();
    }

}
