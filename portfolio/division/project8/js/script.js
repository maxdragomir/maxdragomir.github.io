$(document).ready(function() {

    //browsers
    var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
    var is_chrome = !!window.chrome && !is_opera && !is_Edge;
    var is_explorer= typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
    var is_firefox = typeof window.InstallTrigger !== 'undefined';
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // Hash manipulation
    var hash = location.search.replace(/\?/, ''), direction = false;

    if (hash === 'righttoleft') {
        $('body').addClass('righttoleft');
        direction = true;
    }
    if (hash === 'auth') {
        $('.winter_express-authWrapper').addClass('showAuth');
    }

    // CustomScroll
    // var scrollBar = $('.winter_express-scroll');
    //     scrollBar.perfectScrollbar();


    //Animation
    var title = new TimelineMax();
    title
        .to('.winter_express-infoTitle', 1, {x: 0, skew: "0deg" ,autoAlpha: 1, ease:Power4.easeInOut})
        .to('.winter_express-infoTitle__shadow', 1, {x: "-50%", autoAlpha: 1, ease:Power4.easeOut}, "-=0.5")
        .to('.winter_express-infoSubtitle', 1, {y: -45, autoAlpha: 1, ease:Power4.easeInOut}, "-=0.5")
        .to('.winter_express-wrapBtn', 1, {y: 0, autoAlpha: 1, ease:Power4.easeInOut}, "-=1")
        .to('.winter_express-action', .6, {x: "-50%", y: 0, autoAlpha: 1, ease:Power4.easeOut}, "+=.55");

    var light = new TimelineMax({repeat: -1});
    light
        .set('.winter_express-infoTitle__light', {x: "-100%", y: "-40%"})
        .fromTo('.winter_express-infoTitle__light', 1, {scale: 0, transformOrigin: "50% 50%", autoAlpha: 0, ease:Power4.easeInOut}, {scale: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power4.easeInOut}, "+=3")
        .to('.winter_express-infoTitle__light', 1, {scale: 1.3, transformOrigin: "50% 50%", autoAlpha: 0, ease:Power4.easeInOut})
        .set('.winter_express-infoTitle__light', {x: "160%", y: "-90%"}, "+=2")
        .fromTo('.winter_express-infoTitle__light', 1, {scale: 0, transformOrigin: "50% 50%", autoAlpha: 0, ease:Power4.easeInOut}, {scale: 1, transformOrigin: "50% 50%", autoAlpha: 1, ease:Power4.easeInOut}, "+=3")
        .to('.winter_express-infoTitle__light', 1, {scale: 1.3, transformOrigin: "50% 50%", autoAlpha: 0, ease:Power4.easeInOut});

    var snowScale = new TimelineMax({pause: true, repeat: -1, yoyo: true});
    snowScale
        .to('.winter_express-snowBg1 img', 1, {scale: .6, transformOrigin: "50% 50%", ease:Power1.easeOut}, 0)
        .to('.winter_express-snowBg2 img', 1, {scale: .6, transformOrigin: "50% 50%", ease:Power1.easeOut}, 0, "+=.5");
    snowScale.timeScale(0.03).play();

    var mainSlider = new TimelineMax({delay: 1.5,repeat:-1}),
        stepsSlider = new TimelineMax({repeat:-1});

    var xboxGmepad = $('.winter_express-mainSlider_itemXbox__gamepad'),
        xboxTextBig = $('.winter_express-mainSlider_itemXbox__textBig'),
        xboxTextSmall = $('.winter_express-mainSlider_itemXbox__textSmall'),

        ps4Gmepad = $('.winter_express-mainSlider_itemPs4__gamepad'),
        ps4TextBig = $('.winter_express-mainSlider_itemPs4__textBig'),
        ps4TextSmall = $('.winter_express-mainSlider_itemPs4__textSmall'),

        paint = $('.winter_express-mainSlider__paint'),
        paint2 = $('.winter_express-mainSlider__paint2'),
        snowGrey = $('.winter_express-mainSlider__snowGrey'),
        snowWhite = $('.winter_express-mainSlider__snowWhite'),
        svgBg = $('.winter_express-mainSlider__svgBg'),
        svgBgPath = $('.winter_express-mainSlider__svgBg path');


    var svgFilter;
    if(is_safari || is_Edge || is_explorer) {
        $('.winter_express-filter').remove();
        svgFilter = "none";
    } else {
        svgFilter = "url(#blur1)";
    }

    function xboxShow() {
        var tl = new TimelineMax();
        tl
            .set(xboxGmepad, {x: -500, autoAlpha: 0})
            .set(snowGrey, {scale: 0, autoAlpha: 0})
            .set(snowWhite, {scale: 0, autoAlpha: 0})
            .set(xboxTextBig, {x: -500, autoAlpha: 0})
            .set(xboxTextSmall, {x: -500, autoAlpha: 0})
            .set(paint, {x: '-20%', y: '-60%', scale: 0, autoAlpha: 0})
            .to(xboxGmepad, 1, {x: 0, autoAlpha: 1, filter: svgFilter, ease:Power4.easeInOut}, "blur")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "50 0"}, yoyo:true, repeat:1, ease:Power1.easeOut}, "blur")
            .set(xboxGmepad, {filter: "none"})
            .to(snowWhite, 1, {scale: 1, transformOrigin: "0 50%", autoAlpha: 1, ease:Power4.easeInOut}, "snow")
            .to(snowGrey, 1, {scale: 1, transformOrigin: "0 50%", autoAlpha: 1, ease:Power4.easeInOut}, "snow+=0.2")
            .to(xboxTextBig, 1, {x: 0, autoAlpha: 1, filter: svgFilter, ease:Power4.easeInOut}, "blur1")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "50 0"}, yoyo: true, repeat: 1, ease:Power1.easeOut}, "blur1")
            .set(xboxTextBig, {filter: "none"})
            .to(xboxTextSmall, 1, {x: 0,autoAlpha: 1, filter: svgFilter, ease:Elastic.easeOut.config(1, 0.5)}, "blur2")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "20 0"}, yoyo: true, repeat: 1, ease:Power1.easeOut}, "blur2")
            .set(xboxTextSmall, {filter: "none"})
            .fromTo(xboxGmepad, 1, {x: 50, ease:Elastic.easeOut.config(1, 0.5)}, {x: 0, ease:Elastic.easeOut.config(1, 0.5)}, "-=.85")
            .to(paint, .6, {scale: 1, transformOrigin: "0 50%", autoAlpha: 1,  ease: Elastic.easeInOut.config(1, 1)}, "-=1.2");
            return tl;
    }
    function xboxHide() {
        var tl = new TimelineMax();
        tl
            .to(svgBgPath, 1, {attr: {d: "M1920 0L0 100V243L1920 413V0Z"}, ease:Power4.easeInOut})
            .to(xboxGmepad, 1, {x: -600, scale: 0,transformOrigin: "0 50%", autoAlpha: 0, filter: "url(#blur1)", ease:Power4.easeInOut}, 0, "blur")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "50 0"}, yoyo:true, repeat:1, ease:Power1.easeOut}, "blur")
            .set(xboxGmepad, {filter: "none"})
            .to(snowWhite, 1, {scale: 0, transformOrigin: "0 50%", autoAlpha: 0, ease:Power4.easeInOut}, 0, "snow")
            .to(snowGrey, 1, {scale: 0, transformOrigin: "0 50%", autoAlpha: 0, ease:Power4.easeInOut}, 0, "snow+=0.2")
            .to(xboxTextBig, 1, {x: -600, autoAlpha: 0, filter: svgFilter, ease:Power4.easeInOut}, 0, "blur1")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "50 0"}, yoyo: true, repeat: 1, ease:Power1.easeOut}, 0, "blur1")
            .set(xboxTextBig, {filter: "none"})
            .to(xboxTextSmall, 1, {x: -600,autoAlpha: 0, filter: svgFilter, ease:Elastic.easeOut.config(1, 0.3)}, 0, "blur2")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "20 0"}, yoyo: true, repeat: 1, ease:Power1.easeOut}, 0, "blur2")
            .set(xboxTextSmall, {filter: "none"})
            .to(paint, 1, {x: -600, scale: 0, transformOrigin: "0 50%", autoAlpha: 0,  ease: Elastic.easeInOut.config(1, 1)}, 0, "-=1.4");
        return tl;
    }
    function ps4Show() {
        var tl = new TimelineMax();
        tl
            .set(ps4Gmepad, {x: 500, autoAlpha: 0, filter: "none"})
            .set(snowGrey, {left: "auto",right: -600, scale: 0, autoAlpha: 0})
            .set(snowWhite, {left: "auto", right: -750, scale: 0, autoAlpha: 0})
            .set(ps4TextBig, {x: 500, autoAlpha: 0})
            .set(ps4TextSmall, {x: 500, autoAlpha: 0})
            .set(paint2, {x: '-10%', y: '-60%', scale: 0, autoAlpha: 0})
            .to(ps4Gmepad, 1, {x: 0, autoAlpha: 1, filter: svgFilter, ease:Power4.easeInOut}, "blur")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "50 0"}, yoyo:true, repeat:1, ease:Power1.easeOut}, "blur")
            .set(ps4Gmepad, {filter: "none"})
            .to(snowWhite, 1, {scale: 1, transformOrigin: "100% 50%", autoAlpha: 1, ease:Power4.easeInOut}, "snow")
            .to(snowGrey, 1, {scale: 1, transformOrigin: "100% 50%", autoAlpha: 1, ease:Power4.easeInOut}, "snow+=0.2")
            .to(ps4TextBig, 1, {x: 0, autoAlpha: 1, filter: svgFilter, ease:Power4.easeInOut}, "blur1")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "50 0"}, yoyo: true, repeat: 1, ease:Power1.easeOut}, "blur1")
            .set(ps4TextBig, {filter: "none"})
            .to(ps4TextSmall, 1, {x: 0,autoAlpha: 1, filter: svgFilter, ease:Elastic.easeOut.config(1, 0.5)}, "blur2")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "20 0"}, yoyo: true, repeat: 1, ease:Power1.easeOut}, "blur2")
            .set(ps4TextSmall, {filter: "none"})
            .fromTo(ps4Gmepad, 1, {x: 50, ease:Elastic.easeOut.config(1, 0.5)}, {x: 0, ease:Elastic.easeOut.config(1, 0.5)}, "-=.85")
            .to(paint2, .6, {scale: 1, transformOrigin: "100% 50%", autoAlpha: 1,  ease: Elastic.easeInOut.config(1, 1)}, "-=1.2");
        return tl;
    }
    function ps4Hide() {
        var tl = new TimelineMax();
        tl
            .to(svgBgPath, 1, {attr: {d: "M1920 100L0 0V413L1920 243V100Z"}, ease:Power4.easeInOut})
            .to(ps4Gmepad, 1, {x: 600, scale: 0,transformOrigin: "100% 50%", autoAlpha: 0, filter: svgFilter, ease:Power4.easeInOut}, 0, "blur")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "50 0"}, yoyo:true, repeat:1, ease:Power1.easeOut}, "blur")
            .set(ps4Gmepad, {filter: "none"})
            .to(snowWhite, 1, {scale: 0, transformOrigin: "100% 50%", autoAlpha: 0, ease:Power4.easeInOut}, 0, "snow")
            .to(snowGrey, 1, {scale: 0, transformOrigin: "100% 50%", autoAlpha: 0, ease:Power4.easeInOut}, 0, "snow+=0.2")
            .to(ps4TextBig, 1, {x: 600, autoAlpha: 0, filter: svgFilter, ease:Power4.easeInOut}, 0, "blur1")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "50 0"}, yoyo: true, repeat: 1, ease:Power1.easeOut}, 0, "blur1")
            .set(ps4TextBig, {filter: "none"})
            .to(ps4TextSmall, 1, {x: 600,autoAlpha: 0, filter: svgFilter, ease:Elastic.easeOut.config(1, 0.3)}, 0, "blur2")
            .to('#hue1feGaussianBlur', .4, {attr: {stdDeviation: "20 0"}, yoyo: true, repeat: 1, ease:Power1.easeOut}, 0, "blur2")
            .set(ps4TextSmall, {filter: "none"})
            .to(paint2, 1, {x: 600, scale: 0, transformOrigin: "100% 50%", autoAlpha: 0,  ease: Elastic.easeInOut.config(1, 1)}, 0, "-=1.4");
        return tl;
    }

    mainSlider.add( xboxShow() );
    mainSlider.add( xboxHide(), "+=3");
    mainSlider.add( ps4Show());
    mainSlider.add( ps4Hide(), "+=3");
    mainSlider.timeScale(2).play();


    function stepsAnimate() {
        var tl = new TimelineMax();
        tl
            .set('.winter_express-stepItemWrapper', {y: "50%", scale: .5, transformOrigin: "50% 50%", autoAlpha: 0})
            .to('.winter_express-stepItemFirst', 1, {y: "-50%", scale: 1, transformOrigin: "50% 50%", autoAlpha: 1})
            .to('.winter_express-stepItemFirst', 1, {y: "-100%", scale: .5, transformOrigin: "50% 50%", autoAlpha: 0}, "+=2.5")
            .to('.winter_express-stepItemSecond', 1, {y: "-50%", scale: 1, transformOrigin: "50% 50%", autoAlpha: 1})
            .to('.winter_express-stepItemSecond', 1, {y: "-100%", scale: .5, transformOrigin: "50% 50%", autoAlpha: 0}, "+=2.5")
            .to('.winter_express-stepItemThird', 1, {y: "-50%", scale: 1, transformOrigin: "50% 50%", autoAlpha: 1})
            .to('.winter_express-stepItemThird', 1, {y: "-100%", scale: .5, transformOrigin: "50% 50%", autoAlpha: 0}, "+=2.5");
        return tl;
    }
    stepsSlider.add( stepsAnimate());
    stepsSlider.timeScale(2).play();

    var svgAnimTimeLine = new TimelineMax({repeat:-1});
    var stepsTime = stepsSlider.duration();
    function svgAnimation() {
        var tl = new TimelineMax();
        tl
            .to('.winter_express-svgSteps', .5, {x: "-50.5%", y: 0, autoAlpha: 1})
            .fromTo('.winter_express-svgSteps path', stepsTime - 1, {strokeDashoffset: 2076.2744140625}, {strokeDashoffset: 0})
            .to('.winter_express-svgSteps', .5, {x: "-50.5%", y: 10, autoAlpha: 0});
        return tl;
    }
    svgAnimTimeLine.add( svgAnimation());
    svgAnimTimeLine.timeScale(2).play();

    var snowFlakesSteps = new TimelineMax({repeat: -1});
    function snowFlakes() {
        var tl = new TimelineMax();
        tl
            .to('.winter_express-imgSnowflakes1', 3, {autoAlpha: .2, yoyo: true, repeat: 1})
            .to('.winter_express-imgSnowflakes2', 3, {autoAlpha: .2, yoyo: true, repeat: 1}, "-=1.5");
        return tl;
    }
    snowFlakesSteps.add( snowFlakes());
    snowFlakesSteps.timeScale(1).play();


    var snowFlakesBottom = new TimelineMax({repeat: -1});
    function snowFlakesBottomAnimation() {
        var tl = new TimelineMax();
        tl
            .staggerTo(['.winter_express-snowflakesLeft2', '.winter_express-snowflakesLeft3'], 1, {autoAlpha: 0, yoyo: true, repeat: 1}, 1, 0)
            .staggerTo(['.winter_express-snowflakesRight2', '.winter_express-snowflakesRight3'], 1, {autoAlpha: 0, yoyo: true, repeat: 1}, 1, 1);
        return tl;
    }
    snowFlakesBottom.add( snowFlakesBottomAnimation());
    snowFlakesBottom.timeScale(1).play();

    var controller = new ScrollMagic.Controller();

    var aniamteSnowflakesTop = new TimelineMax();
    aniamteSnowflakesTop
        .from('.winter_express-imgSnowflakes1 img', 1, {
            x: -150,
            autoAlpha: 1,
            ease: Power4.ease}, 0)
        .from('.winter_express-imgSnowflakes2 img', 1, {
            x: 150,
            autoAlpha: 1,
            ease: Power4.ease}, 0);
    var scene1 = new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: ".winter_express-sectionMain",
        duration: "100%",
    })
        .setTween(aniamteSnowflakesTop)
        .addTo(controller);


    var aniamteSnowflakesMiddle = new TimelineMax();
    aniamteSnowflakesMiddle
        .from('.winter_express-snowBg1', 1, {
            x: -150,
            autoAlpha: 1,
            ease: Power4.ease}, 0)
        .from('.winter_express-snowBg2', 1, {
            x: 150,
            autoAlpha: 1,
            ease: Power4.ease}, 0);
    var scene2 = new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: ".winter_express-sectionThird",
        duration: "100%",
    })
        .setTween(aniamteSnowflakesMiddle)
        .addTo(controller);


    var aniamteSnowflakesBottom = new TimelineMax();
    aniamteSnowflakesBottom
        .from('.winter_express-snowflakesLeft', 1, {
            x: -150,
            autoAlpha: 1,
            ease: Power4.ease}, 0)
        .from('.winter_express-snowflakesRight', 1, {
            x: 150,
            autoAlpha: 1,
            ease: Power4.ease}, 0);
    var scene3 = new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: ".winter_express-slideTablerWrapper",
        duration: "100%",
    })
        .setTween(aniamteSnowflakesBottom)
        .addTo(controller);






    //Slider table
    var $tSlider = $('.winter_express-slideTablerWrapper'),
        tableSlider = new TableSlider($tSlider);
    function TableSlider(slider) {
        var self = this;
        this.slider = slider;
        this.slides = this.slider.find('.winter_express-sliderTable');
        this.dots = this.slider.find('.winter_express-sliderDot');
        this.prevI = this.curI = 0;
        this.diss = false;

        this.slides.on('click', function() {
            var $that = $(this);
            if($that.hasClass('winter_express-curr') || self.diss) return;
            self.prevI = self.curI;
            self.curI = $that.index();
            self.showSlider(self.curI);
        });

        this.dots.on('click', function() {
            var $that = $(this);
            if($that.hasClass('winter_express-active') || self.diss) return;
            self.prevI = self.curI;
            self.curI = $that.index();
            self.showSlider(self.curI);
        });
    }
    TableSlider.prototype.showSlider = function(i, fn) {
        var l = this.slides.length, j = this.prevI, self = this;
        this.diss = true;
        this.dots.eq(i).addClass('winter_express-active').siblings().removeClass('winter_express-active');

        function startSlide(j) {
            self.slides.filter('.winter_express-prev').removeClass('winter_express-prev');
            if(j !== 0) {
                self.slides.eq(j-1).addClass('winter_express-prev');
            }
            self.slides.filter('.winter_express-next').removeClass('winter_express-next');
            if(j !== l) {
                self.slides.eq(j+1).addClass('winter_express-next');
            }
            self.slides.filter('.winter_express-curr').removeClass('winter_express-curr');
            self.slides.eq(j).addClass('winter_express-curr');

            setTimeout(function() {
                if(j === i) return self.diss = false;
                startSlide(i < j ? --j : ++j);
            }, 300);
        }startSlide(i < j ? --j : ++j);

    };


    //Modal
    var modal = $('.winter_express-modalShow');
    modal.on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            modalOpen = $this.data('modal');

        $(modalOpen).arcticmodal({
            beforeOpen: function(data, el) {
                var modalWrapper = $(el).find('.arcticmodal-container');
             },
            afterOpen: function(data, el) {
                var scroll = $(el).find('.winter_express-scroll');

                $('.winter_express-modal__body').addClass('show');
                // if(scroll.length) scroll.perfectScrollbar('update');
            },
            beforeClose: function () {
                $('.winter_express-modal__body').removeClass('show');
            }
        });
    });
    $('.winter_express-modal__'+hash).arcticmodal({
        beforeOpen: function(data, el) {
            var modalWrapper = $(el).find('.arcticmodal-container');

            modalWrapper.addClass('winter_express-custom__modal');
        },
        afterOpen: function(data, el) {
            var scroll = $(el).find('.winter_express-scroll');

            $('.winter_express-modal__body').addClass('show');
            // if(scroll.length) scroll.perfectScrollbar('update');
        },
        beforeClose: function () {
            $('.winter_express-modal__body').removeClass('show');
        }
    });


    //Timers
    // var timerDate = new Date(2020,12, 12, 0, 15, 0);
    // $('.winter_express-timer').countdown({
    //     until: timerDate,
    //     padZeroes: true,
    //     format: 'DHMS',
    //     labels: ['Years', 'Months', 'Weeks', 'дней', 'часов', 'минут', 'секунд'],
    //     labels1: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     labels2: ['Year', 'Month', 'Week', 'дней', 'часов', 'минут', 'секунд'],
    //     layout:'<ul class="winter_express-timerList">'+
    //         '<li><b>{d10}{d1}</b> <span>{dl}</span></li>'+
    //         '<li><b>{h10}{h1}</b> <span>{hl}</span></li>'+
    //         '<li><b>{m10}{m1}</b> <span>{ml}</span></li>'+
    //         '<li><b>{s10}{s1}</b> <span>{sl}</span></li>'+
    //         '</ul>'
    // });


    //Animation
    AOS.init({
        once: true,
    });

});