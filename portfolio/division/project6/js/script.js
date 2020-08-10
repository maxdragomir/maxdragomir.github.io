$(document).ready(function() {

    // Hash manipulation
    var hash = location.search.replace(/\?/, ''), direction = false;

    if (hash === "righttoleft") {
        $('body').addClass('big_helmet-righttoleft');
        direction = true;
    }


    if(hash === 'tournament-ao') {

        $('body').addClass('big_helmet-comingsoon');
        $('.big_helmet-navBtnAO').addClass('big_helmet-navBtn__start big_helmet-navBtn__active');

        activeTournament('AO');

    } else if (hash === 'tournament-rg') {

        $('body').addClass('big_helmet-comingsoon');
        $('.big_helmet-navBtnAO, .big_helmet-navBtnRG').addClass('big_helmet-navBtn__start');
        $('.big_helmet-navBtnRG').addClass('big_helmet-navBtn__active');

        activeTournament('RG');
        raffleTournament('AO');

    } else if (hash === 'tournament-wim') {

        $('body').addClass('big_helmet-comingsoon');
        $('.big_helmet-navBtnAO, .big_helmet-navBtnRG, .big_helmet-navBtnWIM').addClass('big_helmet-navBtn__start');
        $('.big_helmet-navBtnWIM').addClass('big_helmet-navBtn__active');

        activeTournament('WIM');
        raffleTournament('AO');
        raffleTournament('RG');

    } else if (hash === 'tournament-uo') {

        $('body').addClass('big_helmet-comingsoon');
        $('.big_helmet-navBtn').addClass('big_helmet-navBtn__start');
        $('.big_helmet-navBtnUO').addClass('big_helmet-navBtn__active');

        activeTournament('UO');
        raffleTournament('AO');
        raffleTournament('RG');
        raffleTournament('WIM');

    } else if (hash === 'tournament-end') {

        $('.big_helmet-navBtnUO').addClass('big_helmet-navBtn__active');

        activeTournament('UO');
        raffleTournament('AO');
        raffleTournament('RG');
        raffleTournament('WIM');
        raffleTournament('UO');

    } else {

        $('.big_helmet-itemAO').addClass('big_helmet-item__active');
        $('.big_helmet-navBtnAO').addClass('big_helmet-navBtn__active');
        $('.big_helmet-wrapper').addClass('big_helmet-wrapperAO');
        $('.big_helmet-changeAO').addClass('big_helmet-change__active');

    }
    function activeTournament(name) {
        $('.big_helmet-item' + name).addClass('big_helmet-item__active');
        $('.big_helmet-wrapper').addClass('big_helmet-wrapper' + name);
        $('.big_helmet-change' + name).addClass('big_helmet-change__active');
    }
    function raffleTournament(name) {
        $('.big_helmet-item' + name).addClass('big_helmet-raffleLottery');
        $('.big_helmet-item' + name +' .big_helmet-infoSubtitle').html('<span>Розыгрыш</span><span>состоялся!</span>');
        $('.big_helmet-item' + name + ' .big_helmet-btnMain').addClass('big_helmet-modalShow').attr('data-modal', '.big_helmet-modal__result' + name);
        $('.big_helmet-item' + name + ' .big_helmet-btnMain .big_helmet-btnInner').html('<span>результаты розыгрыша</span>');
        $('.big_helmet-item' + name + ' .big_helmet-btnRules').remove();
        $('.big_helmet-change' + name).addClass('big_helmet-raffleLottery');
        $('.big_helmet-change' + name + ' .big_helmet-timerTitle').html('<span>Розыгрыш</span><span>состоялся!</span>');
        $('.big_helmet-change' + name + ' .big_helmet-timer').remove();
        $('.big_helmet-change' + name + ' .big_helmet-wrapperAction').remove();
    }

    // CustomScroll
    // var scrollBar = $('.big_helmet-scroll');
        // scrollBar.perfectScrollbar();


    var tlOverlay = new TimelineMax({paused: true});
    tlOverlay.set('.big_helmet-overlay', {x: "-120%"}).fromTo('.big_helmet-overlay', 1, {x: "-120%", ease: "power1.in"}, {x: "110%", ease: "power1.out"});
    //Main Tabs
    $('.big_helmet-itemsNav').on('click', '.big_helmet-navBtn', function () {
        var tournament = $(this).data('btn');

        if($(this).hasClass('big_helmet-navBtn__active')) {
            return;
        }

        $('.big_helmet-wrapper').attr('class', 'big_helmet big_helmet-wrapper big_helmet-wrapper' + tournament);

        //change Nav
        $('.big_helmet-navBtn').removeClass('big_helmet-navBtn__active');
        $(this).addClass('big_helmet-navBtn__active');
        $('.big_helmet-itemsNav').addClass('big_helmet-itemsNav__disabled');
        setTimeout(function () {
            $('.big_helmet-itemsNav').removeClass('big_helmet-itemsNav__disabled');
        }, 1000);

        //change Item
        $('.big_helmet-item').removeClass('big_helmet-item__active');
        $('.big_helmet-item' + tournament).addClass('big_helmet-item__active');

        // var scroll = $('.big_helmet-change' + tournament).find('.big_helmet-scroll');
        // if(scroll.length) {
        //     setTimeout(function () {
        //         scroll.perfectScrollbar('update');
        //     }, 250);
        // }

        //change Content
        setTimeout(function () {
            $('.big_helmet-change').removeClass('big_helmet-change__active');
            $('.big_helmet-change' + tournament).addClass('big_helmet-change__active');
        }, 240);

        //overlayAnimation
        tlOverlay.restart();

        //commingsoon
        if($('body').hasClass('big_helmet-comingsoon') && !$(this).hasClass('big_helmet-navBtn__start')){
            $('body').addClass('big_helmet-noScroll');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        } else {
            $('body').removeClass('big_helmet-noScroll');
        }
    });

    //Modal Tabs
    $('.big_helmet-modal__nav').on('click', '.big_helmet-modal__navBtn', function () {
        var tournament = $(this).data('btn');
        if($(this).hasClass('big_helmet-modal__navBtn_active')) {
            return;
        }

        //change Nav
        $('.big_helmet-modal__navBtn').removeClass('big_helmet-modal__navBtn_active');
        $(this).addClass('big_helmet-modal__navBtn_active');

        //change Tickets
        $('.big_helmet-modal__wrap').removeClass('big_helmet-modal__wrap_active');
        $('.big_helmet-modal__wrap' + tournament).addClass('big_helmet-modal__wrap_active');

        // var scroll = $('.big_helmet-modal__wrap').find('.big_helmet-scroll');
        // if(scroll.length) scroll.perfectScrollbar('update');



    });

    //Raffle Tabs
    $('.big_helmet-raffle__nav').on('click', '.big_helmet-raffle__navBtn', function () {
        var tournament = $(this).data('btn');
        if($(this).hasClass('big_helmet-raffle__navBtn_active')) {
            return;
        }

        //change Nav
        $('.big_helmet-raffle__navBtn').removeClass('big_helmet-raffle__navBtn_active');
        $(this).addClass('big_helmet-raffle__navBtn_active');

        //change Tickets
        $('.big_helmet-raffle__block').removeClass('big_helmet-raffle__block_active');
        $('.big_helmet-raffle__block' + tournament).addClass('big_helmet-raffle__block_active');

        // var scroll = $('.big_helmet-raffle__block').find('.big_helmet-scroll');
        // if(scroll.length) scroll.perfectScrollbar('update');



    });

    // Slider prizes
    $('.big_helmet-tournamentSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true,
        rtl: direction,
    });


    //Modal
    var modal = $('.big_helmet-modalShow');
    modal.on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            modalOpen = $this.data('modal');

        $(modalOpen).arcticmodal({
            beforeOpen: function(data, el) {

                if (hash === 'tournament-ao') {

                    $('.big_helmet-modal__wrapAO').addClass('big_helmet-modal__wrap_start');

                } else if (hash === 'tournament-rg') {

                    $('.big_helmet-modal__wrapAO, .big_helmet-modal__wrapRG').addClass('big_helmet-modal__wrap_start');

                }  else if (hash === 'tournament-wim') {

                    $('.big_helmet-modal__wrapAO, .big_helmet-modal__wrapRG, .big_helmet-modal__wrapWIM').addClass('big_helmet-modal__wrap_start');

                } else {

                    $('.big_helmet-modal__wrap').addClass('big_helmet-modal__wrap_start');

                }


                $('.big_helmet-modal__navBtn').removeClass('big_helmet-modal__navBtn_active');
                $('.big_helmet-modal__wrap').removeClass('big_helmet-modal__wrap_active');

                if($('.big_helmet-navBtnAO').hasClass('big_helmet-navBtn__active')) {
                    modalTab('AO');
                } else if ($('.big_helmet-itemRG').hasClass('big_helmet-item__active')) {
                    modalTab('RG');
                } else if ($('.big_helmet-itemWIM').hasClass('big_helmet-item__active')) {
                    modalTab('WIM');
                } else if ($('.big_helmet-itemUO').hasClass('big_helmet-item__active')) {
                    modalTab('UO');
                } else {
                    modalTab('AO');
                }
             },
            afterOpen: function(data, el) {
                // var scroll = $(el).find('.big_helmet-scroll');

                $('.big_helmet-modal__body').addClass('show');
                // if(scroll.length) scroll.perfectScrollbar('update');
            },
            beforeClose: function () {
                $('.big_helmet-modal__body').removeClass('show');
            }
        });
    });
    $('.big_helmet-modal__'+hash).arcticmodal({
        beforeOpen: function(data, el) {

            if (hash === 'tournament-ao') {

                $('.big_helmet-modal__wrapAO').addClass('big_helmet-modal__wrap_start');

            } else if (hash === 'tournament-rg') {

                $('.big_helmet-modal__wrapAO, .big_helmet-modal__wrapRG').addClass('big_helmet-modal__wrap_start');

            }  else if (hash === 'tournament-wim') {

                $('.big_helmet-modal__wrapAO, .big_helmet-modal__wrapRG, .big_helmet-modal__wrapWIM').addClass('big_helmet-modal__wrap_start');

            } else {

                $('.big_helmet-modal__wrap').addClass('big_helmet-modal__wrap_start');

            }

            $('.big_helmet-modal__navBtn').removeClass('big_helmet-modal__navBtn_active');
            $('.big_helmet-modal__wrap').removeClass('big_helmet-modal__wrap_active');

            if($('.big_helmet-navBtnAO').hasClass('big_helmet-navBtn__active')) {
                modalTab('AO');
            } else if ($('.big_helmet-itemRG').hasClass('big_helmet-item__active')) {
                modalTab('RG');
            } else if ($('.big_helmet-itemWIM').hasClass('big_helmet-item__active')) {
                modalTab('WIM');
            } else if ($('.big_helmet-itemUO').hasClass('big_helmet-item__active')) {
                modalTab('UO');
            } else {
                modalTab('AO');
            }
        },
        afterOpen: function(data, el) {
            // var scroll = $(el).find('.big_helmet-scroll');

            $('.big_helmet-modal__body').addClass('show');
            // if(scroll.length) scroll.perfectScrollbar('update');
        },
        beforeClose: function () {
            $('.big_helmet-modal__body').removeClass('show');
        }
    });
    function modalTab(name) {
        $('.big_helmet-modal__navBtn' + name).addClass('big_helmet-modal__navBtn_active');
        $('.big_helmet-modal__wrap' + name).addClass('big_helmet-modal__wrap_active');
    }


    //Timers
    // var timerDate = new Date(2020,12, 12, 0, 15, 0);
    // $('.big_helmet-changeAO .big_helmet-timer').countdown({
    //     until: timerDate,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="big_helmet-timerList">'+
    //         '<li><b>{d10}{d1}</b> <span>{dl}</span></li>'+
    //         '<li><b>{h10}{h1}</b> <span>{hl}</span></li>'+
    //         '<li><b>{m10}{m1}</b> <span>{ml}</span></li>'+
    //         '<li><b>{s10}{s1}</b> <span>{sl}</span></li>'+
    //         '</ul>'
    // });
    //
    // var timerDate1 = new Date(2020,12, 12, 0, 15, 0);
    // $('.big_helmet-changeRG .big_helmet-timer').countdown({
    //     until: timerDate1,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="big_helmet-timerList">'+
    //         '<li><b>{d10}{d1}</b> <span>{dl}</span></li>'+
    //         '<li><b>{h10}{h1}</b> <span>{hl}</span></li>'+
    //         '<li><b>{m10}{m1}</b> <span>{ml}</span></li>'+
    //         '<li><b>{s10}{s1}</b> <span>{sl}</span></li>'+
    //         '</ul>'
    // });
    //
    // var timerDate2 = new Date(2020,12, 12, 0, 15, 0);
    // $('.big_helmet-changeWIM .big_helmet-timer').countdown({
    //     until: timerDate2,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="big_helmet-timerList">'+
    //         '<li><b>{d10}{d1}</b> <span>{dl}</span></li>'+
    //         '<li><b>{h10}{h1}</b> <span>{hl}</span></li>'+
    //         '<li><b>{m10}{m1}</b> <span>{ml}</span></li>'+
    //         '<li><b>{s10}{s1}</b> <span>{sl}</span></li>'+
    //         '</ul>'
    // });
    //
    // var timerDate3 = new Date(2020,12, 12, 0, 15, 0);
    // $('.big_helmet-changeUO .big_helmet-timer').countdown({
    //     until: timerDate3,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="big_helmet-timerList">'+
    //         '<li><b>{d10}{d1}</b> <span>{dl}</span></li>'+
    //         '<li><b>{h10}{h1}</b> <span>{hl}</span></li>'+
    //         '<li><b>{m10}{m1}</b> <span>{ml}</span></li>'+
    //         '<li><b>{s10}{s1}</b> <span>{sl}</span></li>'+
    //         '</ul>'
    // });
    //
    // var timerDate4 = new Date(2020,12, 12, 0, 15, 0);
    // $('.big_helmet-bigTimer .big_helmet-timer').countdown({
    //     until: timerDate4,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="big_helmet-timerList">'+
    //         '<li><b>{d10}{d1}</b> <span>{dl}</span></li>'+
    //         '<li><b>{h10}{h1}</b> <span>{hl}</span></li>'+
    //         '<li><b>{m10}{m1}</b> <span>{ml}</span></li>'+
    //         '<li><b>{s10}{s1}</b> <span>{sl}</span></li>'+
    //         '</ul>'
    // });
    //
    // var timerDate5 = new Date(2020,12, 12, 0, 15, 0);
    // $('.big_helmet-modal__timer').countdown({
    //     until: timerDate5,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="big_helmet-modal__timerList">'+
    //         '<li><b>{d10}{d1}</b> <span>{dl}</span></li>'+
    //         '<li><b>{h10}{h1}</b> <span>{hl}</span></li>'+
    //         '<li><b>{m10}{m1}</b> <span>{ml}</span></li>'+
    //         '<li><b>{s10}{s1}</b> <span>{sl}</span></li>'+
    //         '</ul>'
    // });


    //Animation
    $('.big_helmet-itemsNav').addClass('big_helmet-itemsNav__show');
    $('.big_helmet-animateLeft, .big_helmet-animateRight, .big_helmet-animateUp, .big_helmet-animateZoom').css('opacity', '1');
    // $('.big_helmet-tmLogo img').addClass('no-animate');

    responsiveImg();
    $(window).on('resize', function () {
        responsiveImg();
        // $('.big_helmet-tickets, .big_helmet-raffle__tickets').perfectScrollbar('update');
    });

    //Raffle
    setTimeout(function () {
        $('.big_helmet-raffle .big_helmet-sectionMain').addClass('big_helmet-sectionMain__show');
    }, 250);
    $(window).on('click', function (e) {
        var target = $(e.target);
        if ($('.big_helmet-prizeTickets').has(target).length == 0 && !$('.big_helmet-prizeTickets').is(target) && $('.big_helmet-winners__active').has(target).length == 0 && !$('.big_helmet-winners__active').is(target)) {
            $('.big_helmet-prize, .big_helmet-bonusItem').removeClass('big_helmet-winners__show');
        }
    });
    $('.big_helmet-sectionSecond').on('click','.big_helmet-winners__active', function () {
        $('.big_helmet-prizeTickets__ticket').removeClass('win');

        var winners = parseFloat($(this).attr('data-winners')),
            allTickets = parseFloat($(this).attr('data-all'));

        for( var i = 1; i <= winners; i++){
            while (true) {
                var r = getRandom(1, allTickets, true);
                var d = $('.big_helmet-prizeTickets__wrap .big_helmet-prizeTickets__ticket:nth-child('+ r +')');
                if(d.is('.win') === false){
                    d.addClass('win');
                    break;
                }
            }
        }

        if($(this).parent().hasClass('big_helmet-winners__show')) {
            $('.big_helmet-prizeTickets__ticket').removeClass('win');
            $(this).parent().removeClass('big_helmet-winners__show');
        } else {
            $('.big_helmet-prize, .big_helmet-bonusItem').removeClass('big_helmet-winners__show');
            $(this).parent().addClass('big_helmet-winners__show');
        }
        // $('.big_helmet-prizeTickets__wrap').perfectScrollbar('update');

    });

});
function responsiveImg() {

    $('.big_helmet-modal__imgDesk').each(function () {
        var imgSrc = $(this).attr('src');
        var imgSrcSplit = imgSrc.split('/');
        var imgSrcDeleteLast = imgSrcSplit.pop();
        var imgSrcStr = imgSrcSplit.join('/');

        var dataImg = $(this).data('smallimg');
        var dataImgSplit = dataImg.split('/')[2];

        if($(window).width() <= 550) {
            $(this).attr('src', imgSrcStr + '/' + dataImgSplit);
        } else {
            $(this).attr('src', imgSrcStr + '/modal' + dataImgSplit.trim().charAt(0).toUpperCase() + dataImgSplit.substr(1));
        }
    });

}
function getRandom(min, max, integer) {
    if(integer) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.random() * (max - min) + min;
    }
}