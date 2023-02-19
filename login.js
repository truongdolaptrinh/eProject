var email = document.querySelector('#email');
var password = document.querySelector('#password');
var user = localStorage.getItem('userName');
var data = JSON.parse(user);
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(user == null){
        alert("Please enter your email and password!");
    } else if(email.value == data.email && password.value == data.password){
        alert("Logged in successfully!")
        window.location.href = "index.html";
    } else {
        alert("login unsuccessful!");
    }
});