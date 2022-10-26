'use strict';
document.addEventListener('DOMContentLoaded', function () {
    // Intro Slider (swiper js https://swiperjs.com/ )
    // ****************
    const introSlider = new Swiper('.intro__slider', {
        initialSlide: 2,
        spaceBetween: 150,
        speed: 700,
        pagination: {
            el: '.intro__swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true
        },
    });
});