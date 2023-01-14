const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

let navbar = document.querySelector('header');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
};

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });
    
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 10,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {
    450: {
    slidesPerView: 2,
    spaceBetween: 0,
    },
    820: {
    slidesPerView: 1,
    spaceBetween: 0,
    },
    1024: {
    slidesPerView: 1,
    spaceBetween:0,
    },
},
});