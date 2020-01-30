new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects__pagination',
        bulletClass: 'projects__bullet',
        bulletActiveClass: 'projects__bullet_active',
        clickable: 'true'
    }
});

$(document).ready(function () {

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });

    $('#contacts__form').validate({
        rules: {
            name: "required",
            phone: "required"
        },
        messages: {
            name: "Введите свое имя",
            phone: "Введите свой номер телефона"
        }
    });
    $('#consultation form').validate({
        rules: {
            name: "required",
            phone: "required"
        },
        messages: {
            name: "Введите свое имя",
            phone: "Введите свой номер телефона"
        }
    });

});