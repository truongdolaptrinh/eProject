const product = [
    {
        id: "1",
        nameSkills: "How to Belay a Lead Climber",
        links: "skills_belay_a_lead_climber.html",
        imageSrc: "images/skills_48.jpg"
    },{
        id: "2",
        nameSkills: "How to Build Anchors for Climbing",
        links: "skills_build_anchors_for_climning.html",
        imageSrc: "images/skills_55.jpg"
    },{
        id: "3",
        nameSkills: "How to Choose Cams and Wedges (Active Pro)",
        links: "skills_choose_cams_and_wedges.html",
        imageSrc: "images/skills_167.jpg"
    },{
        id: "4",
        nameSkills: "How to Choose Climbing Nuts, Stoppers and Chocks",
        links: "skills_choose_climbing_nuts_stoppers_and_chocks.html",
        imageSrc: "images/skills_145.jpg"
    },{
        id: "5",
        nameSkills: "How to Choose Climbing Ropes",
        links: "skills_choose_climbing_ropes.html",
        imageSrc: "images/skills_175.jpg"
    },{
        id: "6",
        nameSkills: "How to Choose Climbing Slings, Cord and Webbing",
        links: "skills_choose_climbing_slings_cord_and_webbing.html",
        imageSrc: "images/skills_187.jpg"
    },{
        id: "7",
        nameSkills: "How to Choose Quickdraws",
        links: "skills_choose_quickdraws.html",
        imageSrc: "images/skills_182.jpg"
    },{
        id: "8",
        nameSkills: "How to Climb Finger Cracks",
        links: "skills_climb_finger_cracks.html",
        imageSrc: "images/skills_18.jpg"
    },{
        id: "9",
        nameSkills: "Climbing and Bouldering Rating Systems",
        links: "skills_climbing_and_bouldering_rating_systems.html",
        imageSrc: "images/skills_73.jpg"
    },{
        id: "10",
        nameSkills: "Climbing Techniques and Moves",
        links: "skills_climbing_techniques_and_moves.html",
        imageSrc: "images/skills_92.jpg"
    },{
        id: "11",
        nameSkills: "Lead Climbing: How to Clip Quickdraws",
        links: "skills_clip_quickdraws.html",
        imageSrc: "images/skills_63.jpg"
    },{
        id: "12",
        nameSkills: "Communication for Climbing",
        links: "skills_communication_for_climbing.html",
        imageSrc: "images/skills_135.jpg"
    },{
        id: "13",
        nameSkills: "How to Fall While Rock Climbing",
        links: "skills_fall_while_rock_climbing.html",
        imageSrc: "images/skills_70.jpg"
    },{
        id: "14",
        nameSkills: "Gear Racking Basics",
        links: "skills_gear_racking_basics.html",
        imageSrc: "images/skills_80.jpg"
    },{
        id: "15",
        nameSkills: "Getting Started Rock Climbing",
        links: "skills_getting_rock_climbing.html",
        imageSrc: "images/skills_109.jpg"
    },{
        id: "16",
        nameSkills: "How To Belay",
        links: "skills_how_to_belay.html",
        imageSrc: "images/skills_1.jpg"
    },{
        id: "17",
        nameSkills: "How to Rappel",
        links: "skills_how_to_rappel.html",
        imageSrc: "images/skills_129.jpg"
    },{
        id: "18",
        nameSkills: "Indoor (Gym) Climbing Basics",
        links: "skills_indoor_climbing_basics.html",
        imageSrc: "images/skills_140.jpg"
    },{
        id: "19",
        nameSkills: "Lead Climbing Basics",
        links: "skills_lead_climbing_basics.html",
        imageSrc: "images/skills_86.jpg"
    },{
        id: "20",
        nameSkills: "Learning To Climbing Outdoors",
        links: "skills_learning_to_climb_outdoors.html",
        imageSrc: "images/skills_136.jpg"
    },{
        id: "21",
        nameSkills: "Lead Climbing: How to Place Trad Gear",
        links: "skills_place_trad_gear.html",
        imageSrc: "images/skills_156.jpg"
    },{
        id: "22",
        nameSkills: "How to Plan a Mountaineering Trip",
        links: "skills_plan_a_mountaineering_trip.html",
        imageSrc: "images/skills_191.jpg"
    },{
        id: "23",
        nameSkills: "Route Finding and Navigation for Mountaineerin",
        links: "skills_route_finding_nfm.html",
        imageSrc: "images/skills_8.jpg"
    },{
        id: "24",
        nameSkills: "How to Set and Clean a Top-Rope Anchor",
        links: "skills_set_and_clean_to_top-rope_anchor.html",
        imageSrc: "images/skills_126.jpg"
    },{
        id: "25",
        nameSkills: "Sport Climbing Basics",
        links: "skills_sport_climbing_basics.html",
        imageSrc: "images/skills_120.jpg"
    },{
        id: "26",
        nameSkills: "Getting Started Crack Climbing",
        links: "skills_started_crack_climbing.html",
        imageSrc: "images/skills_42.jpg"
    },{
        id: "27",
        nameSkills: "How to Tie Climbing Knots, Hitches and Bends",
        links: "skills_tie_climbing_knots_hitches_and_bends.html",
        imageSrc: "images/skills_133.jpg"
    },{
        id: "28",
        nameSkills: "Trad Climbing Basics",
        links: "skills_trad_climbing_basics.html",
        imageSrc: "images/skills_77.jpg"
    },{
        id: "29",
        nameSkills: "How to Train for Rock Climbing and Bouldering",
        links: "skills_train_for_rock_climbing_and_bouldering.html",
        imageSrc: "images/skills_91.jpg"
    },{
        id: "30",
        nameSkills: "How to Use a Hangboard to Train for Rock Climbing",
        links: "skills_use_hangboard.html",
        imageSrc: "images/skills_22.jpg"
    },{
        id: "31",
        nameSkills: "How to Use Rock Climbing Holds",
        links: "skills_use_rock_clinbing_holds.html",
        imageSrc: "images/skills_32.jpg"
    }
]

let perPage = 7;
let idPages = 1;
let start = 0;
let end = perPage;

const totalPages = Math.ceil(product.length / perPage);
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
console.log(start, end);

renderProduct();
renderListPage();

function getIdPage(idPages){
    start = (idPages - 1) * perPage;
    end = idPages * perPage;
}

function renderProduct() {
    html = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += '<a href=' + item.links + '>';
            html += '<div class="skill-card">';
            html += '<figure class="images">';
            html += '<img src=' + item.imageSrc + ' alt="">';
            html += '</figure>';
            html += '<p>' + item.nameSkills + '</p>';
            html += '</div>';
            html += '</a>';
            return html;
        }
    });
    document.querySelector('.wapper-skill').innerHTML = html;
}

function renderListPage() {
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
            renderProduct();
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
    renderProduct();
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
    renderProduct();
});

