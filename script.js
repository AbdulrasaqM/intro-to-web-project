//TO slide and change the products
function imgSlider(item) {
    document.querySelector('.Coke').src = item;
}

//To Change Logo when products change
function changeLogo(Logo) {
    document.querySelector('.logo').src = Logo;
}

//TO SWIPE PRODUCTS
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});