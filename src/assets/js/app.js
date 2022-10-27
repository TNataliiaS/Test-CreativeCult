'use strict';
document.addEventListener('DOMContentLoaded', function () {
    // Search form switcher
    // ****************
    const searchToggle = document.getElementById('actions-menu-search');
    const showForm = document.getElementById('header-form');

    searchToggle.onclick = function () {
        searchToggle.classList.toggle('active');
        showForm.classList.toggle('active');
    };


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