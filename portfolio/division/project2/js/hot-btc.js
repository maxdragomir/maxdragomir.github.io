$(document).ready(function() {
    // Hash manipulation
    var hash = location.search.replace(/\?/, '');
    var direction = false;

    if (hash === 'righttoleft') {
        $('body').addClass('righttoleft');
        direction = true;
    }


    // Scroll
    // $('.hot_btc-modal__scroll').perfectScrollbar();


    // Slider
    $('.hot_btc-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,
        autoplay: true
    });


    //Modal
    var modal = $('.hot_btc-modal__show');

    modal.on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            modalOpen = $this.data('modal');

        $(modalOpen).arcticmodal({
            beforeOpen: function(data, el) {
                var modalWrapper = $(el).find('.arcticmodal-container');

                modalWrapper.addClass('hot_btc-custom__modal');
            },
            afterOpen: function(data, el) {
                var scroll = $(el).find('.hot_btc-modal__scroll');

                $('.hot_btc-modal__body').addClass('show');

                // if(scroll.length) scroll.perfectScrollbar('update');
            },
            beforeClose: function () {
                $('.hot_btc-modal__body').removeClass('show');
            }
        });
    });



    // Counter
    // var liftoffTime = new Date(2019,12, 12, 0, 15, 0);
    // $('.hot_btc-countdown').countdown({
    //     until: liftoffTime,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="hot_btc-countdown__list">'+
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


    function fix() {
        $('.hot_btc-img__right').remove();
        $('.hot_btc-screen__main .hot_btc-container').append('<div class="hot_btc-img__right" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500">\n' +
          '                    <div class="hot_btc-img__bg">\n' +
          '                        <img src=" img/hot-btc/main-page/main-btc.png" alt="">\n' +
          '\n' +
          '                        <div class="hot_btc-img__elem hot_btc-img__elem_1">\n' +
          '                            <img src=" img/hot-btc/main-page/icons/btc-icon.png" alt="">\n' +
          '                        </div>\n' +
          '                        <div class="hot_btc-img__elem hot_btc-img__elem_2">\n' +
          '                            <img src=" img/hot-btc/main-page/icons/btc-icon2.png" alt="">\n' +
          '                        </div>\n' +
          '                        <div class="hot_btc-img__elem hot_btc-img__elem_3">\n' +
          '                            <img src=" img/hot-btc/main-page/icons/btc-icon3.png" alt="">\n' +
          '                        </div>\n' +
          '                        <div class="hot_btc-img__elem hot_btc-img__elem_4">\n' +
          '                            <img src=" img/hot-btc/main-page/icons/btc-icon4.png" alt="">\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '                </div>');
    }

    fix();
    //fix for safari
    $(window).on('load resize', function() {
        fix();
    });
});

