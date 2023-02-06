
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
  
/* Demo purposes only */
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
