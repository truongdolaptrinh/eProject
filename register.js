// login
var userName = document.querySelector('#userName');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, message){
  let parent = input.parentElement;
  let small = parent.querySelector('small');
  parent.classList.add('error');
  small.innerText = message;
}

function showSuccess(input){
  let parent = input.parentElement;
  let small = parent.querySelector('small');
  parent.classList.remove('error');
  small.innerText = '';
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();

        if(!input.value){
            isEmptyError = true;
            showError(input, 'cannot be left blank')
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmailError(input){
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    input.value = input.value.trim();

    let isEmailError = !regexEmail.test(input.value);
    if(regexEmail.test(input.value)){
        showSuccess(input)
    } else {
        showError(input, 'Email Invalid')
    }
    return isEmailError;
}

function checkLengthError(input, min, max){
    input.value = input.value.trim();

    if(input.value.length < min){
        showError(input, `must have at least ${min} characters`);
        return true;
    }
    if(input.value.length > max){
        showError(input, `no more than ${max} characters`);
        return true;
    }
    return false;
}

function checkMatchPasswordError(passwordInput, cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput, `password does not match`);
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let isEmptyError = checkEmptyError([userName, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(userName, 3, 20);
    let isPasswordLengthError = checkLengthError(password, 8, 16);
    let isMatchPasswordError = checkMatchPasswordError(password, confirmPassword);

    if(isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isMatchPasswordError){
        // do nothing
    } else {
        var user = {
            userName: userName.value,
            email: email.value,
            password: password.value,
        };
        var json = JSON.stringify(user);
        localStorage.setItem('userName', json);
        alert("Sign Up Success");
        window.location.href= "login.html";
    }

});