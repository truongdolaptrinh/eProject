const cardImg = document.querySelector('.wapper_image');
const cardFilm = document.querySelector('.card-film');

eventListeners();

function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadingJSONImage();
        loadingJSONFilm();
    });
}

function loadingJSONImage() {
    fetch('../json/images.json')
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
    fetch('../json/films.json')
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

