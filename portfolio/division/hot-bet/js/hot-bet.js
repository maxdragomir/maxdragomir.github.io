$(document).ready(function() {
    // Hash manipulation
    var hash = location.search.replace(/\?/, '');
    var direction = false;
    //
    if (hash === 'righttoleft') {
        $('body').addClass('righttoleft');
        direction = true;
    }

    $('.hot_bet-modal__'+hash).arcticmodal({
        beforeOpen: function(data, el) {
            var modalWrapper = $(el).find('.arcticmodal-container');

            modalWrapper.addClass('hot_bet-custom__modal');
        },
        afterOpen: function(data, el) {
            var scroll = $(el).find('.hot_bet-modal__scroll');

            $('.hot_bet-modal__body').addClass('show');
            // if(scroll.length) scroll.perfectScrollbar('update');
        },
        beforeClose: function () {
            $('.hot_bet-modal__body').removeClass('show');
        }
    });


    // Scroll
    // $('.hot_bet-modal__scroll').perfectScrollbar();

    // Slider
    $('.hot_bet-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,
        autoplay: true,
        rtl: direction,
    });


    //Modal
    var modal = $('.hot_bet-modal__show');

    modal.on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            modalOpen = $this.data('modal');

        $(modalOpen).arcticmodal({
            beforeOpen: function(data, el) {
                var modalWrapper = $(el).find('.arcticmodal-container');

                modalWrapper.addClass('hot_bet-custom__modal');
            },
            afterOpen: function(data, el) {
                var scroll = $(el).find('.hot_bet-modal__scroll');

                $('.hot_bet-modal__body').addClass('show');
                // if(scroll.length) scroll.perfectScrollbar('update');
            },
            beforeClose: function () {
                $('.hot_bet-modal__body').removeClass('show');
            }
        });
    });



    // Counter
    // var liftoffTime = new Date(2019,12, 12, 0, 15, 0);
    // $('.hot_bet-countdown').countdown({
    //     until: liftoffTime,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="hot_bet-countdown__list">'+
    //         '<li>{d10}{d1}<span>{dl}</span></li>'+
    //         '<li>{h10}{h1}<span>{hl}</span></li>'+
    //         '<li>{m10}{m1}<span>{ml}</span></li>'+
    //         '<li>{s10}{s1}<span>{sl}</span></li>'+
    //         '</ul>'
    // });

    // Animation
    if(direction === false){
        AOS.init({
            once: true
        });
    } else {
        AOS.init({
            once: true,
            disable: true
        });
    }


});