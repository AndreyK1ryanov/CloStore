$(document).ready(function () {
    $('.promo-slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        fade: true,
        autoplaySpeed: 1700,
        arrows: false,
    });

    $('.about-us__slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: false,
        fade: true,
        autoplaySpeed: 1700,
        arrows: false,
    });

});

