// let navScrollerRight = document.getElementById("nav-scoller-right");
// let navScrollerLeft = document.getElementById("nav-scoller-left");
// let scrollNav = document.getElementById("scroll-nav");
// let scrollBox = document.getElementById("suggested-content");

// let increment;
// increment = Math.round(scrollNav.offsetWidth / 3);

// window.onresize = () => {
//    increment = Math.round(scrollNav.offsetWidth / 3);
// };

// navScrollerRight.addEventListener("click",() => {
//     scrollBox.scrollLeft += increment;
//     navScrollerLeft.className = "active";
// });
// navScrollerLeft.addEventListener("click",() => {
//     scrollBox.scrollLeft -= increment;
// });
//-- Silder Gallery Handler --//
const sliderLeft = document.getElementById("slider-left");
const sliderRight = document.getElementById("slider-right");
let slides = document.getElementsByClassName("hero-slide");
let dots = document.getElementsByClassName("slider-button");
let slideIndex;

slideIndex = 0;

let createSlideImage = (el,index) => {
    if(!el.querySelector('IMG')){
        let dataImg = el.getAttribute("data-img");
        let slideImage = document.createElement("img");
       
        slideImage.setAttribute("class","");
        slideImage.src = dataImg;
        slideImage.setAttribute("id","slide-image-" + index);
        el.appendChild(slideImage);
    };
};

createSlideImage(slides[0],0);

let plusSlides = (n) => { 
    showSlides(slideIndex += n); 
};

let currentSlide = (n) => {
    showSlides(slideIndex = n);
};

let showSlides = (n) => {
    let i;
    if (n > slides.length - 1) { slideIndex = 0 };
    if (n < 0) { slideIndex = slides.length - 1; };
    for (i = 0; i < slides.length; i++) {
        slides[i].className = "hero-slide";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = "slider-button";
    }
    slides[slideIndex].className = "hero-slide active";
    dots[slideIndex].className = "slider-button active";
    createSlideImage(slides[slideIndex]);
}; 

currentSlide(0);

setTimeout(() => { plusSlides(1) }, "2000");
let carousel = setInterval(() => {plusSlides(1)},"5000");
carousel;

