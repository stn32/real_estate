// menu 

function headerMenu() {
    let headerBtnOne = document.querySelector('.header__item_1');
    let subMenuOne = document.querySelector('.header__subitem');
    let emptyArea = document.querySelector('.sec1');
    let emptyArea2 = document.querySelector('.header__item_2, .header__item_3');

    function subMenuOpen(){
        subMenuOne.classList.toggle('active');
        headerBtnOne.classList.toggle('active');
    }
    headerBtnOne.addEventListener('click', subMenuOpen);

    function subMenuClose(){
        subMenuOne.classList.remove('active');
        headerBtnOne.classList.remove('active');
    }
    emptyArea.addEventListener('click', subMenuClose);
    emptyArea2.addEventListener('click', subMenuClose);
}
headerMenu();


// mobile menu

function mobileMenu() {
    let mobileMenuList = document.querySelector('.header__menu');
    let mobileMenuBtn = document.querySelector('.navbar__btn');

    function openMobMenu() {
        mobileMenuList.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    }
    mobileMenuBtn.addEventListener('click', openMobMenu);
}
mobileMenu();




// custom select

function select() {
    let selectHeader = document.querySelector('.sec1__select_header');
    let selectBody = document.querySelector('.sec1__select_body');
    let selectWrap = document.querySelector('.sec1__select');
    let selectItem = document.querySelectorAll('.select_item');

    function selectActive() {
        selectWrap.classList.toggle('active');
    }
    selectHeader.addEventListener('click', selectActive);
    selectItem.forEach((item) => {
        item.addEventListener('click', selectChoose);
    })
    function selectChoose() {
        let text = this.innerText;
        select = this.closest('.sec1__select').querySelector('.sec1__select_current');
        select.innerText = text;
        selectWrap.classList.remove('active');
    }
}
select();



// progress bar

let levelFull = document.querySelector('.sec2__level_front');
let levelBtn = document.querySelector('.sec2__btn');
let startPercent = 10;
let amounPercent = document.querySelector('.numPercent');
amounPercent.textContent = startPercent + ' %';

function progressActive() {
    startPercent = startPercent + 25;
    if (startPercent > 100) startPercent = 100;
    levelFull.style.width = startPercent + '%';
    amounPercent.textContent = startPercent + ' %';
 }

levelBtn.addEventListener('click', progressActive);



// show more

function showMore() {
    let hiddenTxt = document.querySelector('.sec2__txt_2');
    let showBtn = document.querySelector('.sec2__more');

    function showTxt() {
        hiddenTxt.classList.toggle('active');
    }
    showBtn.addEventListener('click', showTxt);
}
showMore();



// main slider  

const prev = document.querySelector('.sec2__prev');
const next = document.querySelector('.sec2__next');
const slides = document.querySelectorAll('.slider__slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

dots.forEach ((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 2500);



// scroll to top

btnGoTop = document.querySelector('.btnS');

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnGoTop.classList.add('active');
    } else {
        btnGoTop.classList.remove('active');
    }
}
function topFunction() {
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}
btnGoTop.addEventListener('click', topFunction);
