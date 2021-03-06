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

    $('input[name=phone]').mask("+7(999) 999-99-99");

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    //Smooth Scroll and pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top - 15 + "px"
        });
        return false;
    });

});