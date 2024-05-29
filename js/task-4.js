const formEl = document.querySelector('.login-form'); 
formEl.addEventListener('submit', e => {
    e.preventDefault();
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    const data = { email, password };

    if (email.trim() === '' || password.trim() === '') {
        console.log('All form fields must be filled in');
    } else {
        console.log({ email, password });
        formEl.reset();
    }

});
