// var images = document.querySelectorAll('.image img');
// var prev = document.querySelector('.prev');
// var next = document.querySelector('.next');
// var close = document.querySelector('.close');
// var galleryImg = document.querySelector('.gallery_inner img');
// var gallery = document.querySelector('.gallery');

const cardImg = document.querySelector('.wapper_image');
const cardFilm = document.querySelector('.card-film');
// const cardSkills = document.querySelector('.wapper-skill')

var currenIndex = 0;

eventListeners();

function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadingJSONImage();
        loadingJSONFilm();
        // loadingJSONSkills();
    });
}

// function loadingJSONSkills() {
//     fetch('/json/skills.json')
//     .then(reponse => reponse.json())
//     .then(data => {
//         let html = '';
//         for (let i = 0; i < 9; i++) {
//             const skills = data[i];
//             html += `
//             <a href="${skills.links}">
//                 <div class="skill-card">
//                     <figure class="images">
//                         <img src="${skills.imageSrc}" alt="">
//                     </figure>
//                     <p>${skills.nameSkills}</p>
//                 </div>
//             </a>
//             `;
//         }
//         cardSkills.innerHTML = html;
//     });
// }



function loadingJSONImage() {
    fetch('/json/images.json')
    .then(reponse => reponse.json())
    .then(data => {
        let html = '';
        data.forEach(image => {
            html += `
                <div class="image">
                    <img src="${image.imageSrc}" alt="">
                    <p>${image.name}</p>
                </div>
            `;
        });
        cardImg.innerHTML = html;
    });
}

function loadingJSONFilm() {
    fetch('/json/films.json')
    .then(reponse => reponse.json())
    .then(data => {
        let html = '';
        data.forEach(film => {
            html += `
                <div>
                    <h3>${film.movieName}</h3>
                    <div class="img-film">
                        <img src="${film.imageFilm}" alt="">
                    </div>
                    <p><b>Length</b>: ${film.time}</p>
                    <p><b>Where to watch</b>: ${film.watch}</p>
                    <p>${film.content1}</p>
                    <p>${film.content2}</p>
                <div>
            `;
        });
        cardFilm.innerHTML = html;
    });
}

