$(document).ready(function () {
    $('.promo-slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    $('.about-us__slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    $('.product-box').hover(function () {
        $('.product-box__price', this).hide();
    }, function () {
        $('.product-box__price', this).show();
    });

    $('.subscribe-form-body__button').on('click', function () {
        alert('Благодарю за нажатие, но данная страница не подключена к CMS')
    })
});

