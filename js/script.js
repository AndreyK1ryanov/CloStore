$(document).ready(function () {

    $('.promo-slider').slick({
        dots: false,
        fade: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        adaptiveWidth: true
    });

    $('.about-us__slider').slick({
        dots: false,
        infinite: false,
        speed: 700,
        autoplay: false,
        fade: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
        ]
    });


    $('.product-box').hover(function () {
        $('.product-box__price', this).hide();
    }, function () {
        $('.product-box__price', this).show();
    });

    $('.subscribe-form-body__button').on('click', function () {
        alert('Благодарю за нажатие, но данная страница не подключена к CMS')
    })

    $('.select-sex__button').on('click', function () {
        $('.select-sex__button').removeClass('select-sex__button_active').addClass('button-white').addClass('select-sex__button_deactive')
        $(this).addClass('select-sex__button_active').removeClass('button-white').addClass('button-black').removeClass('select-sex__button_deactive')
    })
});

