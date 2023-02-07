const videos = [
    {id: "1", videoScr: "https://www.youtube.com/embed/HY3pDs3iKfk"},
    {id: "2", videoScr: "https://www.youtube.com/embed/V1P97VVt6_k"},
    {id: "3", videoScr: "https://www.youtube.com/embed/b6OvrRbGU68"},
    {id: "4", videoScr: "https://www.youtube.com/embed/cM8gO4IDN_s"},
    {id: "5", videoScr: "https://www.youtube.com/embed/PmZo9hPOq8Y"},
    {id: "6", videoScr: "https://www.youtube.com/embed/s9HG1AYH8zU"},
    {id: "7", videoScr: "https://www.youtube.com/embed/-hTVNidxg2s"},
    {id: "8", videoScr: "https://www.youtube.com/embed/p9nqGQP5SoA"},
    {id: "9", videoScr: "https://www.youtube.com/embed/Af0GVm0lB8A"},
    {id: "10", videoScr: "https://www.youtube.com/embed/hL1dBY4LZ60"},
    {id: "11", videoScr: "https://www.youtube.com/embed/xeLHAEC1ppE"},
    {id: "12", videoScr: "https://www.youtube.com/embed/TQp6XzyEjzk"},
    {id: "13", videoScr: "https://www.youtube.com/embed/TiGkU_eXJa8"},
    {id: "14", videoScr: "https://www.youtube.com/embed/ohxDKL2RNuk"},
    {id: "15", videoScr: "https://www.youtube.com/embed/nbBYCSAWHac"},
    {id: "16", videoScr: "https://www.youtube.com/embed/nZmO8B9rRik"},
    {id: "17", videoScr: "https://www.youtube.com/embed/99ryMHWuhtM"},
    {id: "18", videoScr: "https://www.youtube.com/embed/3bRgp_GSyBQ"},
    {id: "19", videoScr: "https://www.youtube.com/embed/cF13B1UqM18"},
    {id: "20", videoScr: "https://www.youtube.com/embed/s_TanvVfYKo"},
    {id: "21", videoScr: "https://www.youtube.com/embed/RUKctGArq1U"},
    {id: "22", videoScr: "https://www.youtube.com/embed/uGJbpyqhCbY"},
    {id: "23", videoScr: "https://www.youtube.com/embed/wUIYcanPgCc"},
    {id: "24", videoScr: "https://www.youtube.com/embed/V7T4SRTK0sc"},
    {id: "25", videoScr: "https://www.youtube.com/embed/8PA_TJ36Kpg"},
    {id: "26", videoScr: "https://www.youtube.com/embed/_du75-3vkqU"},
    {id: "27", videoScr: "https://www.youtube.com/embed/knxL3pPf1Gs"},
    {id: "28", videoScr: "https://www.youtube.com/embed/AN5CDewKVdk"},
    {id: "29", videoScr: "https://www.youtube.com/embed/D6MLQwyAbZ8"},
    {id: "30", videoScr: "https://www.youtube.com/embed/YqyXtf4azgQ"},
    {id: "31", videoScr: "https://www.youtube.com/embed/fLdIe6kicTI"},
    {id: "32", videoScr: "https://www.youtube.com/embed/IC_x-9f92TM"},
    {id: "33", videoScr: "https://www.youtube.com/embed/CSBcleF583Q"},
    {id: "34", videoScr: "https://www.youtube.com/embed/uDP2DRa38ZA"},
    {id: "35", videoScr: "https://www.youtube.com/embed/kmGel9P8ekk"},
    {id: "36", videoScr: "https://www.youtube.com/embed/Ml-rxMwcaf0"},
    {id: "37", videoScr: "https://www.youtube.com/embed/BQOp2tWniyQ"},
    {id: "38", videoScr: "https://www.youtube.com/embed/RG9TMn1FJzc"},
    {id: "39", videoScr: "https://www.youtube.com/embed/ymPFptR3qxs"},
    {id: "40", videoScr: "https://www.youtube.com/embed/vUvNK75T1jw"},
    {id: "41", videoScr: "https://www.youtube.com/embed/KjDOROx-do4"},
    {id: "42", videoScr: "https://www.youtube.com/embed/_UvZWGdEgqU"},
    {id: "43", videoScr: "https://www.youtube.com/embed/dzQbPiRMdV8"},
    {id: "44", videoScr: "https://www.youtube.com/embed/FBv7FFeT4Wg"},
    {id: "45", videoScr: "https://www.youtube.com/embed/hNwzTa-YFPQ"},
    {id: "46", videoScr: "https://www.youtube.com/embed/giTi8wOsZjI"},
    {id: "47", videoScr: "https://www.youtube.com/embed/5HkZlxRdKJQ"},
    {id: "48", videoScr: "https://www.youtube.com/embed/ZRTNHDd0gL8"},
    {id: "49", videoScr: "https://www.youtube.com/embed/-DWu4HygkBU"},
    {id: "50", videoScr: "https://www.youtube.com/embed/9Aq-uKKtM_s"},
    {id: "51", videoScr: "https://www.youtube.com/embed/O2cO2cHHQKQ"},
    {id: "52", videoScr: "https://www.youtube.com/embed/OZtLeuDaVIM"},
    {id: "53", videoScr: "https://www.youtube.com/embed/k_HBPNJNMT8"},
    {id: "54", videoScr: "https://www.youtube.com/embed/zF8ix1DMDEs"},
    {id: "55", videoScr: "https://www.youtube.com/embed/C_N8znD3exI"},
    {id: "56", videoScr: "https://www.youtube.com/embed/lIWJQf1HF7Y"},
    {id: "57", videoScr: "https://www.youtube.com/embed/2CPG4MiXv6s"},
    {id: "58", videoScr: "https://www.youtube.com/embed/Z3I5KntOlWQ"},
    {id: "59", videoScr: "https://www.youtube.com/embed/zF8ix1DMDEs"},
    {id: "60", videoScr: "https://www.youtube.com/embed/f_7HgAW3eqQ"},
    {id: "61", videoScr: "https://www.youtube.com/embed/poZDpTz3LHw"},
    {id: "62", videoScr: "https://www.youtube.com/embed/L-NTgMKufGE"},
    {id: "63", videoScr: "https://www.youtube.com/embed/xBS6SxlC64s"}
]

let perPage = 9;
let idPages = 1;
let start = 0;
let end = perPage;

const totalPages = Math.ceil(videos.length / perPage);
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
console.log(start, end);

renderVideos();
pagination();

function getIdPage(idPages){
    start = (idPages - 1) * perPage;
    end = idPages * perPage;
}

function renderVideos(){
    html = '';
    const content = videos.map((item, index) => {
        if(index >= start && index < end){
            html += '<div class="card-video">';
            html += '<iframe src=' + item.videoScr + ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            html += '</div>';
            return html;
        }
    });
    document.querySelector('.wapper-video').innerHTML = html;
}

function pagination() {
    let html = '';
    html += `<li class="active"><a>${1}</a></li>`;
    for(let i = 2; i <= totalPages; i++){
        html += `<li><a>${i}</a></li>`
    }
    document.getElementById('number-page').innerHTML = html;
}

function changPage(){
    const idPagess = document.querySelectorAll('.number-page li');
    for(let i=0; i < idPagess.length; i++){
        idPagess[i].addEventListener('click', () => {
            let value = i+1;
            idPages = value;
            $('.number-page li').removeClass('active');
            idPagess[i].classList.add('active');
            if(idPagess > 1 && idPagess < totalPages){
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if(idPages ===1){
                $('.btn-prev').addClass('btn-active');
            }
            if(idPages === totalPages){
                $('.btn-next').addClass('btn-active');
            }
            getIdPage(idPages);
            renderVideos();
        })
    }
}
changPage();


btnNext.addEventListener('click', () => {
    idPages++;
    if(idPages > totalPages){
        idPages = totalPages;
    }
    if(idPages === totalPages){
        $('.btn-next').addClass('btn-active');
    }
    $('.btn-prev').removeClass('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPages - 1})`).addClass('active');
    getIdPage(idPages);
    renderVideos();
});

btnPrev.addEventListener('click', () => {
    idPages--;
    if(idPages <= 1){
        idPages = 1;
    }
    if(idPages === 1){
        $('.btn-prev').addClass('btn-active');
    }
    $('.btn-next').removeClass('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPages-1})`).addClass('active');
    getIdPage(idPages);
    renderVideos();
});