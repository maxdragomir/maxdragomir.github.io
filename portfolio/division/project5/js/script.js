$(document).ready(function() {

    // Hash manipulation
    var hash = location.search.replace(/\?/, ''), direction = false;
    if (hash === 'righttoleft') {
        $('body').addClass('righttoleft');
        direction = true;

    } else if (hash === 'defaultfont') {
        $('.super_qiwi').addClass('defaultfont');
    }
    setTimeout(function () {
        $('.super_qiwi-logo').addClass('animate');
    });


    //DefaultFont
    // $('.super_qiwi-df').on('click', function() {
    //     $('.super_qiwi').toggleClass('defaultfont');
    // });
    
    

    // CustomScroll
    // $('.super_qiwi-modal__scroll').perfectScrollbar();
    

    //Tabs
    $('.super_qiwi-prizes__tabs > div').hide();
    $('.super_qiwi-prizes__tabs > div:first-of-type').show();
    $('.super_qiwi-prizes__nav_button').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.super_qiwi-prizes__nav').data('tabs'),
            others = $this.closest('div').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('is-active');
        $this.addClass('is-active');
        $(tabgroup).children('div').hide();
        $(target).show();
    });

    //Tabs modal
    $('.super_qiwi-modal__prizes_tabs > div').hide();
    $('.super_qiwi-modal__prizes_tabs > div:first-of-type').show();

    $('.super_qiwi-modal__prizes_nav_button').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.super_qiwi-modal__prizes_nav').data('tabs'),
            others = $this.closest('div').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('is-active');
        $this.addClass('is-active');

        $(tabgroup).children('div').hide();
        $(target).show();
        // $('.super_qiwi-modal__scroll').perfectScrollbar('update');

    });


    //Modal
    var modal = $('.super_qiwi-modal__show');
    modal.on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            modalOpen = $this.data('modal');

        $(modalOpen).arcticmodal({
            beforeOpen: function(data, el) {
                var modalWrapper = $(el).find('.arcticmodal-container');

                modalWrapper.addClass('super_qiwi-custom__modal');
            },
            afterOpen: function(data, el) {
                var scroll = $(el).find('.super_qiwi-modal__scroll');

                $('.super_qiwi-modal__body').addClass('show');
                // if(scroll.length) scroll.perfectScrollbar('update');
            },
            beforeClose: function () {
                $('.super_qiwi-modal__body').removeClass('show');
            }
        });
    });
    $('.super_qiwi-modal__'+hash).arcticmodal({
        beforeOpen: function(data, el) {
            var modalWrapper = $(el).find('.arcticmodal-container');

            modalWrapper.addClass('super_qiwi-custom__modal');
        },
        afterOpen: function(data, el) {
            var scroll = $(el).find('.super_qiwi-modal__scroll');

            $('.super_qiwi-modal__body').addClass('show');
            // if(scroll.length) scroll.perfectScrollbar('update');
        },
        beforeClose: function () {
            $('.super_qiwi-modal__body').removeClass('show');
        }
    });



    // Counter
    // var liftoffTime = new Date(2019,12, 12, 0, 15, 0);
    // $('.super_qiwi-countdown').countdown({
    //     until: liftoffTime,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="super_qiwi-countdown__list super_qiwi-gradient__text">'+
    //         '<li><b>{d10}{d1}</b> <span>{dl}</span></li>'+
    //         '<li><b>{h10}{h1}</b> <span>{hl}</span></li>'+
    //         '<li><b>{m10}{m1}</b> <span>{ml}</span></li>'+
    //         '<li><b>{s10}{s1}</b> <span>{sl}</span></li>'+
    //         '</ul>'
    // });



    // Animation
    if(direction === false) {
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