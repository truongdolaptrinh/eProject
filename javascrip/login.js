var email = document.querySelector('#email');
var password = document.querySelector('#password');
var user = localStorage.getItem('userName');
var data = JSON.parse(user);
var form = document.querySelector('form');
console.log(data.email);
console.log(data.password);
console.log(email.value);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(user == null){
        alert("Please enter your email and password!");
    } else if(email.value == data.email && password.value == data.password){
        alert("Logged in successfully!")
        window.location.href = "/index.html";
    } else {
        alert("login unsuccessful!");
    }
});

// function login(e){
//     event.preventDefault();
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var user = localStorage.getItem(userName);
//     var data = JSON.parse(user);
//     console.log(data);
//     console.log(user);

//     if(user == null){
//         alert("Please enter your email and password!");
//     } else if(email == data.email && password == data.password){
//         alert("Logged in successfully!")
//         window.location.href = "/index.html";
//     } else {
//         alert("login unsuccessful!");
//     }
// }