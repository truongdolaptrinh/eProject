// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

var searchList = document.querySelector('.search-box-menu');
eventListeners();
function eventListeners(){
  window.addEventListener('DOMContentLoaded', () => {
      loadingJSONSearch();
  });
}

function loadingJSONSearch() {
  fetch('/json/search.json')
  .then(reponse => reponse.json())
  .then(data => {
    // console.log(data);
      let html = '';
      data.forEach(item => {
        html += `
          <p class="listSearch"><a href="${item.links}">${item.nameSearch}</a></p>
        `;
      });
      searchList.innerHTML = html;
  });

  
}
search();
function search(){
  var searchInput = document.querySelector('.input-box input');
  searchInput.addEventListener('input', function(e){
    let txtSearch = e.target.value.trim().toLowerCase();
    let listLinkDOM = document.querySelectorAll('.listSearch');
    console.log(listLinkDOM);
    listLinkDOM.forEach(item => {
      console.log(item.innerText);
      if(item.innerText.toLowerCase().includes(txtSearch)){
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    })
  })
}
