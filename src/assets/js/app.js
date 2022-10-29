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


    // Brands Slider (swiper js https://swiperjs.com/ )
    // ****************
    const brandsSlider = new Swiper('.brands__list', {
        speed: 700,
        slidesPerView: 'auto',
        grid: {
            rows: 2,
        },
        pagination: {
            el: '.brands__swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
            },

            414: {
                slidesPerView: 2,
                grid: {
                    rows: 4,
                },
            },
        }
    });
});