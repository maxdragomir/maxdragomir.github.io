$(document).ready(function() {
    // Hash manipulation
    var hash = location.search.replace(/\?/, '');

    if (hash === 'auth') {
        $('.area-wrap__top').show();
    }
    if (hash === 'righttoleft') {
        $('body').addClass('righttoleft');
    } else if (hash === 'df') {
        $('.area').addClass('defaultfont');
    }

    //DefaultFont
    $('.area-df').on('click', function() {
        $('.area').toggleClass('defaultfont');
    });

    //Alien
    $('.area-screen__main').addClass('area-turnOn');
    window.addEventListener('mousemove', alienEye);
    window.addEventListener('touchstart', alienEye);
    window.addEventListener('touchmove', alienEye);


    //TV
    $('.area-input').on('click', function() {
        $('.area-question__action').attr('class', 'area-question__action aos-init aos-animate');
        $('.area-question__img_tv').attr('class', 'area-question__img_tv aos-init aos-animate');
        if($(this).val() === 'true') {
            $('.area-question__action').addClass('area-true');
            $('.area-question__img_tv').addClass('area-show__yes');
        } else if($(this).val() === 'false') {
            $('.area-question__action').addClass('area-false');
            $('.area-question__img_tv').addClass('area-show__no');
        }
    });

    $('.area-label').mouseover(function() {
        if(!$('.area-input').is(':checked')) {
            $('.area-question__img_tv').addClass('area-show');
        }
    }).mouseout(function() {
        $('.area-question__img_tv').removeClass('area-show');
    });

    $('.area-btn__question').on('click', function () {
        if($('.area-input').is(':checked')) {
            $(this).data('modal', '.area-modal__confirmed');
            $(this).addClass('area-disabled');
            $('.area-btn__question .area-btn__inner span').text('прогноз составлен');
            $('.area-input').prop( "disabled", true )
        } else {
            $(this).data('modal', '.area-modal__warning');
        }
    });





    //Scroll
    $('.area-btn-js').on('click', function (){
        $('html, body').animate({
            scrollTop: $('.area-screen__timer').offset().top
        }, 2000);
    });



    // Animation
    AOS.init({
        once: true
    });


    $('.area-modal__'+hash).arcticmodal({
        beforeOpen: function(data, el) {
            var modalWrapper = $(el).find('.arcticmodal-container');

            modalWrapper.addClass('area-custom__modal');
        },
        afterOpen: function(data, el) {
            var scroll = $(el).find('.area-modal__scroll');

            $('.area-modal__body').addClass('show');
            // if(scroll.length) scroll.perfectScrollbar('update');
        },
        beforeClose: function () {
            $('.area-modal__body').removeClass('show');
        }
    });



    // Scroll
    // $('.area-modal__scroll').perfectScrollbar();
    

    //Modal
    var modal = $('.area-modal__show');

    modal.on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            modalOpen = $this.data('modal');

        $(modalOpen).arcticmodal({
            beforeOpen: function(data, el) {
                var modalWrapper = $(el).find('.arcticmodal-container');

                modalWrapper.addClass('area-custom__modal');
            },
            afterOpen: function(data, el) {
                var scroll = $(el).find('.area-modal__scroll');

                $('.area-modal__body').addClass('show');
                // if(scroll.length) scroll.perfectScrollbar('update');
            },
            beforeClose: function () {
                $('.area-modal__body').removeClass('show');
            }
        });
    });


    // Counter
    // var liftoffTime = new Date(2019,12, 12, 0, 15, 0);
    // $('.area-countdown').countdown({
    //     until: liftoffTime,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="area-countdown__list">'+
    //         '<li>{d10}{d1}</li>'+
    //         '<li>{h10}{h1}</li>'+
    //         '<li>{m10}{m1}</li>'+
    //         '<li>{s10}{s1}</li>'+
    //         '</ul>'
    // });


});

//Animation eyes
var eye = document.querySelectorAll(".area-alien__eye_js");

function alienEye(e) {
    var pointerEvent = e;
    var mouseX, mouseY;
    for (var i = 0; i < eye.length; i++) {
        var offset = eye[i].getBoundingClientRect();
        eye[i]['centerX'] = offset.left + offset.width/2;
        eye[i]['centerY'] = offset.bottom;
    }

    if (e.targetTouches && e.targetTouches[0]) {
        e.preventDefault();
        pointerEvent = e.targetTouches[0];
        mouseX = pointerEvent.pageX;
        mouseY = pointerEvent.pageY;
    } else {
        mouseX = e.clientX + window.pageXOffset;
        mouseY = e.clientY + window.pageYOffset;
    }
    for (var i = 0; i < eye.length; i++) {
        eye[i]['radians'] = Math.atan2(mouseX - eye[i]['centerX'], mouseY - eye[i]['centerY']);
        eye[i]['degree'] = (eye[i]['radians'] * (180 / Math.PI) * -1);
        eye[i].style.transform = 'rotate('+ (eye[i]['degree'] + 180) + 'deg)';
    }
}
