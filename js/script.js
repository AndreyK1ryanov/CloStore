$(document).ready(function () {
    $('.header-menu__open-button').on('click', function () {
        $('.header-menu__open-button').removeClass('header-menu__open-button_activate').addClass('header-menu__open-button_deactivate');
        $('.header-menu__navigation').removeClass('header-menu__navigation_deactivate').addClass('header-menu__navigation_activate');
        $('.header-menu__close-button').removeClass('header-menu__close-button_deactivate').addClass('header-menu__close-button_activate');
        $('.mobile-filter').removeClass('mobile-filter_activate').addClass('mobile-filter_deactivate')
    });
    $('.header-menu__close-button').on('click', function () {
        $('.header-menu__close-button').removeClass('header-menu__close-button_activate').addClass('header-menu__close-button_deactivate');
        $('.header-menu__navigation').removeClass('header-menu__navigation_activate').addClass('header-menu__navigation_deactivate');
        $('.header-menu__open-button').removeClass('header-menu__open-button_deactivate').addClass('header-menu__open-button_activate');
        $('.mobile-filter').removeClass('mobile-filter_deactivate').addClass('mobile-filter_activate')
    });

    $('.promo-slider').slick({
        dots: false,
        fade: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1700,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        adaptiveWidth: true
    });

    $('.product-box').hover(function () {
        $('.product-box__price', this).hide();
    }, function () {
        $('.product-box__price', this).show();
    });

    $('.mobile-filter__button').on('click', function () {
        alert('Благодарю за нажатие, но данная страница не подключена к CMS')
    })
    $('.subscribe-form-body__button').on('click', function () {
        alert('Благодарю за нажатие, но данная страница не подключена к CMS')
    })
    $('.load-more-product__button').on('click', function () {
        alert('Благодарю за нажатие, но данная страница не подключена к CMS')
    })

    $('.select-sex__button').on('click', function () {
        $('.select-sex__button').removeClass('select-sex__button_active').addClass('button-white').addClass('select-sex__button_deactive')
        $(this).addClass('select-sex__button_active').removeClass('button-white').addClass('button-black').removeClass('select-sex__button_deactive')
    })

    function myFunction() {
        if ($(window).width() <= 480) {
            $('.gallery-box__send-mail-button').removeClass('button-size-m').addClass('button-size-s')
        }
        else {
            $('.gallery-box__send-mail-button').removeClass('button-size-s').addClass('button-size-m')
        }
    }
    myFunction();
    $(window).resize(function () {
        myFunction();
    });
});

