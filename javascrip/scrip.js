
window.onload = function(){ 
    // your code 
    // const menuBtn = document.querySelector(".menu-btn");
    // const navigation = document.querySelector(".navigation");

    // let navbar = document.querySelector('header');

    // menuBtn.addEventListener("click", () => {
    //     menuBtn.classList.toggle("active");
    //     navigation.classList.toggle("active");
    // });

    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })

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
    document.getElementById('next').onclick = function(){
        const widthItem = document.querySelector('.item').offsetWidth;
        document.getElementById('formList').scrollLeft += widthItem;
    }
    document.getElementById('prev').onclick = function(){
        const widthItem = document.querySelector('.item').offsetWidth;
        document.getElementById('formList').scrollLeft -= widthItem;
    }
};

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});

const productHome = document.querySelector('.product-container');

eventListeners();
function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSONCardHome()
    });
}

function loadJSONCardHome() {
    fetch('/json/products.json')
    .then(reponse => reponse.json())
    .then(data => {
      let html = '';
      data.forEach(homeCard => {
        html += `
        <div class="product-card">
            <div class="product-image">
                <img src="${homeCard.imgSrc}" alt="">
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">${homeCard.category}</h2>
                <p class="product-short-description">${homeCard.name}</p>
                <span class="price">$${homeCard.price}</span>
            </div>
        </div>
        `;
      });
      productHome.innerHTML = html;
      console.log(productHome);
    });
}
