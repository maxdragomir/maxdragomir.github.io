$(document).ready(function() {
    // Hash manipulation
    var hash = location.search.replace(/\?/, '');
    var direction = false;

    if (hash === 'righttoleft') {
        $('body').addClass('righttoleft');
        direction = true;
    }

    setTimeout(function () {
        $('.boomerang-img__boomerang_sprite').addClass('show');
    }, 800);

    $('.boomerang-modal__'+hash).arcticmodal({
        beforeOpen: function(data, el) {
            var modalWrapper = $(el).find('.arcticmodal-container');

            modalWrapper.addClass('boomerang-custom__modal');
        },
        afterOpen: function(data, el) {
            var scroll = $(el).find('.boomerang-modal__scroll');

            $('.boomerang-modal__body').addClass('show');
            // if(scroll.length) scroll.perfectScrollbar('update');
        },
        beforeClose: function () {
            $('.boomerang-modal__body').removeClass('show');
        }
    });


    // Scroll
    // $('.boomerang-modal__scroll').perfectScrollbar();
    

    //Modal
    var modal = $('.boomerang-modal__show');

    modal.on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            modalOpen = $this.data('modal');

        $(modalOpen).arcticmodal({
            beforeOpen: function(data, el) {
                var modalWrapper = $(el).find('.arcticmodal-container');

                modalWrapper.addClass('boomerang-custom__modal');
            },
            afterOpen: function(data, el) {
                var scroll = $(el).find('.boomerang-modal__scroll');

                $('.boomerang-modal__body').addClass('show');
                // if(scroll.length) scroll.perfectScrollbar('update');
            },
            beforeClose: function () {
                $('.boomerang-modal__body').removeClass('show');
            }
        });
    });



    // Counter
    // var liftoffTime = new Date(2019,12, 12, 0, 15, 0);
    // $('.boomerang-countdown').countdown({
    //     until: liftoffTime,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="boomerang-countdown__list">'+
    //         '<li>{d10}{d1}<span>{dl}</span></li>'+
    //         '<li>{h10}{h1}<span>{hl}</span></li>'+
    //         '<li>{m10}{m1}<span>{ml}</span></li>'+
    //         '<li>{s10}{s1}<span>{sl}</span></li>'+
    //         '</ul>'
    // });

    // Animation
    AOS.init({
        once: true
    });

});

