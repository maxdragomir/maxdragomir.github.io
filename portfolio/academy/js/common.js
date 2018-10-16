$(document).ready(function () {


    $('.open-menu').on('click', function () {
       $(this).toggleClass('close');
       $('.header__right-menu').toggleClass('show');
    });

    setTimeout(function(){
        showElement();
    },  0);

    if ($(document).width() <= 1007 ) {
        $('.main-menu').show();
        $('.top-menu').hide();
        topMenu();
        mainMenu();
        $('.header__right-menu').removeClass('show').addClass('mobile').show();
    }

    // $('.button-mobile').on('click', function () {
    //     $('.main-menu').toggle();
    //     $('.top-menu').toggle();
    //     mainMenu();
    //     topMenu();
    // });

    $(window).scroll(function() {
        showElement();

        if ($(this).scrollTop() > 30) {
            $('.header').addClass('scroll-on');
        } else if($(this).scrollTop() < 30) {
            $('.header').removeClass('scroll-on');
        }

        if ($(document).width() > 1007 ) {
            if ($(this).scrollTop() > 230) {
                $('.main-menu').show();
                $('.top-menu').hide();
                topMenu();
                mainMenu();
            } else if ($(this).scrollTop() < 230) {
                $('.main-menu').hide();
                $('.top-menu').show();
                topMenu();
                mainMenu();
            }
        }
    });

    $(document).on('click', function (e){
        var div = $('.header__right-menu, .header__mobile-menu');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.header__right-menu').removeClass('show');
            $('.open-menu').removeClass('close')
        }
    });
});

function topMenu() {
    if($('.main-menu').is(':visible')) {
        $('.top-menu').removeClass('show').addClass('hide');
    } else {
        $('.top-menu').removeClass('hide').addClass('show');
    }
}
function mainMenu() {
    if($('.top-menu').is(':visible')) {
        $('.main-menu').removeClass('show').addClass('hide');
    } else {
        $('.main-menu').removeClass('hide').addClass('show');
    }
}

function showElement() {
    var animatedElement = $('.animate'),
        lengthElement = animatedElement.length;

    for (var i=0; i < lengthElement; i++) {
        var allElem = animatedElement[i],
            animatedElementCoords = allElem.getBoundingClientRect(),
            animatedElementY = animatedElementCoords.top + window.pageYOffset,
            currentScroll = window.pageYOffset + document.documentElement.clientHeight;

        if (animatedElementY < currentScroll) {
            animatedElement[i].classList.add('show');
        }
    }

}