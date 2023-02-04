var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

const cardImg = document.querySelector('.wapper_image');

var currenIndex = 0;

// eventListeners();

// function eventListeners(){
//     window.addEventListener('DOMContentLoaded', () => {
//         loadingJSON();
//     });
// }

// function loadingJSON() {
//     fetch('/json/images.json')
//     .then(reponse => reponse.json())
//     .then(data => {
//         let html = '';
//         data.forEach(image => {
//             html += `
//                 <div class="image">
//                     <img src="${image.imageSrc}" alt="">
//                     <p>${image.name}</p>
//                 </div>
//             `;
//         });
//         cardImg.innerHTML = html;
//         console.log(cardImg);
//     });
// }

function showGallery(){
    if(currenIndex == 0){
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }

    if(currenIndex == images.length - 1){
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }

    galleryImg.src = images[currenIndex].src;
    gallery.classList.add('show');
}

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        // alert('Please select');
        currenIndex = index;
        
        showGallery();
    });
});

close.addEventListener('click', function() {
    gallery.classList.remove('show');
});

prev.addEventListener('click', function(){
    if(currenIndex > 0){
        currenIndex--;
        showGallery();
    }
});

next.addEventListener('click', function(){
    if(currenIndex < images.length - 1){
        currenIndex++;
        showGallery();
    }
});