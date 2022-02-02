const button = document.getElementById('login');
const input = document.querySelectorAll('input');
const notice = document.querySelectorAll('.input_err');
button.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email == '' && password == '' || email == null && password == null || email == undefined && password == undefined) {
        for (var i = 0; i < input.length; i++) {
            input[i].style.borderColor = 'red';
            notice[i].innerHTML = ' - This field is required';
            notice[i].style.visibility = 'visible';
        }
        return false;
    }
    if (email.indexOf('@') == -1) {
        for (var i = 0; i < input.length; i++) {
            input[0].style.borderColor = 'red';
            notice[0].innerHTML = ' - Invalid email'
            notice[0].style.visibility = 'visible';
        }
    } else {
        return true;
    }
})