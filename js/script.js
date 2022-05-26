$(document).ready(function () {

    $('.lang').on('click', function () {
        event.preventDefault();
        $('.lang').removeClass('active');
        $(this).addClass('active');
    })


    var swiper = new Swiper('.slider-1', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    $(".link-tab").on('click', function () {
        if ($(this).hasClass('wed-tab')) {
            var swiper1 = new Swiper('.slider-1', {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        } else if ($(this).hasClass('rol-tab')) {
            var swiper2 = new Swiper('.slider-2', {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    })


    $('.menu-button').on('click', function () {
        event.preventDefault();
        $(this).toggleClass('active')
    })


    $(document).mouseup(function (e) { // событие клика по веб-документу

        if (!$(e.target).hasClass('menu-button')) { //если не крестик, то

            var div = $(".menu"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0 // и не по его дочерним элементам

            ) {

                div.removeClass('active'); // скрываем его
                $('.menu-button').removeClass('active')
            }
        }

    });


    $(".page-link").on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 130
        }, 800);
    });

});
