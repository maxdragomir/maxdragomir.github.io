$(document).ready(function() {

    // Hash manipulation
    var hash = location.search.replace(/\?/, ''), direction = false,
        txt, txtContainer = $('.ny_quest-infoTitle2');

    if (hash === 'righttoleft') {
        $('body').addClass('righttoleft');
        direction = true;
    }

    // CustomScroll
    // var scrollInit = $('.ny_quest-scroll').perfectScrollbar();
    // $(window).on('load resize', function(){
    //     scrollInit.perfectScrollbar('update');
    // });

    //SliderNav
    $('.ny_quest-raffleNav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        rtl: direction,
        focusOnSelect: true,
        infinite: true,
        prevArrow:"<button class='slick-prev'><img src='images/slider/date-arrows.png'></button>",
        nextArrow:"<button class='slick-next'><img src='images/slider/date-arrows.png'></button>",
        asNavFor: '.ny_quest-raffleTabs',
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });


    //SliderTab
    var raffleTab = $('.ny_quest-raffleTabs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        rtl: direction,
        asNavFor: '.ny_quest-raffleNav'
    });
    raffleTab.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        // if($('.ny_quest-scroll').length) $('.ny_quest-scroll').perfectScrollbar('update');
    });


    // Slider prizes
    $('.ny_quest-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        accessibility: false,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        rtl: direction,
        prevArrow:"<button class='slick-prev'><img src='images/slider/slider-arrow.png'></button>",
        nextArrow:"<button class='slick-next'><img src='images/slider/slider-arrow.png'></button>"
    });


    //Modal
    var modal = $('.ny_quest-modalShow');
    modal.on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            modalOpen = $this.data('modal');

        $(modalOpen).arcticmodal({
            beforeOpen: function(data, el) {
                var modalWrapper = $(el).find('.arcticmodal-container');
             },
            afterOpen: function(data, el) {
                var scroll = $(el).find('.ny_quest-scroll');

                $('.ny_quest-modal__body').addClass('show');
                // if(scroll.length) scroll.perfectScrollbar('update');
            },
            beforeClose: function () {
                $('.ny_quest-modal__body').removeClass('show');
            }
        });
    });
    $('.ny_quest-modal__'+hash).arcticmodal({
        beforeOpen: function(data, el) {
            var modalWrapper = $(el).find('.arcticmodal-container');

            modalWrapper.addClass('ny_quest-custom__modal');
        },
        afterOpen: function(data, el) {
            var scroll = $(el).find('.ny_quest-scroll');

            $('.ny_quest-modal__body').addClass('show');
            // if(scroll.length) scroll.perfectScrollbar('update');
        },
        beforeClose: function () {
            $('.ny_quest-modal__body').removeClass('show');
        }
    });


    //Timers
    // var timerDate = new Date(2020,12, 12, 0, 15, 0);
    // $('.ny_quest-timer').countdown({
    //     until: timerDate,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="ny_quest-timerList">'+
    //         '<li><b>{d10}{d1}</b> <span>{dl}</span></li>'+
    //         '<li><b>{h10}{h1}</b> <span>{hl}</span></li>'+
    //         '<li><b>{m10}{m1}</b> <span>{ml}</span></li>'+
    //         '<li><b>{s10}{s1}</b> <span>{sl}</span></li>'+
    //         '</ul>'
    // });
    // $('.ny_quest-raffleTimer').countdown({
    //     until: timerDate,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="ny_quest-raffleTab__timerList">'+
    //         '<li><b>{d10}{d1}</b></li>'+
    //         '<li><b>{h10}{h1}</b></li>'+
    //         '<li><b>{m10}{m1}</b></li>'+
    //         '<li><b>{s10}{s1}</b></li>'+
    //         '</ul>'
    // });


    //Animation

    AOS.init({
        once: true,
    });

    if ((navigator.userAgent.toLowerCase().indexOf('firefox') !== -1 || /MSIE \d|Trident.*rv:/.test(navigator.userAgent)) || $('.ny_quest-wrapper').hasClass('ny_quest-raffleLottery')) {

        console.log('no animate')

    } else {

        var rotateElem = $('.ny_quest-rotateAnim');
        rotateElem.each(function (index) {
            var randSpeed = getRandom(30, 250, true);

            var tl = new TimelineMax();
            tl.from(this, randSpeed, {rotation:"360", ease:Linear.easeNone, repeat:-1}, index * 0.5);
        });

        var scaleElem = $('.ny_quest-scaleAnim');
        scaleElem.each(function (index) {
            var randSize = getRandom(1, 1.3, false).toFixed(2);

            var tl = new TimelineMax();
            tl.to(this, 1, {opacity: 1})
              .from(this, 15, {scale: randSize, ease:Linear.easeNone, repeat:-1, yoyo: true}, index * 0.5);
        });


        var controller = new ScrollMagic.Controller();

        var animateSleigh= new TimelineMax();
        animateSleigh
          .from('.ny_quest-img_sleigh img', 1, {
              y: -50,
              x: -50,
              autoAlpha: 1,
              ease: Power4.ease});

        var scene1 = new ScrollMagic.Scene({
            triggerHook: 'onLeave',
            triggerElement: "body",
            duration: "100%",
        })
          .setTween(animateSleigh)
          .addTo(controller);

        if($(window).width() <= 1000) {
            animateSleigh.destroy();
        }
    }

});


function getRandom(min, max, integer) {
    if(integer) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.random() * (max - min) + min;
    }
}
