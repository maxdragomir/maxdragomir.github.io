"use strict";

// Vars
// =====================================================================================================================
var lotteryName = 'wgames',
    body = document.querySelector('body'),
    // ltr = document.getElementById('ltr'),
// rtl= document.getElementById('rtl'),
wrapper = document.querySelector(".".concat(lotteryName, "-wrapper")); // Default:
// =====================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
  // Browsers
  var is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
      is_Edge = navigator.userAgent.indexOf("Edge") > -1,
      is_chrome = !!window.chrome && !is_opera && !is_Edge,
      is_explorer = typeof document !== "undefined" && !!document.documentMode && !is_Edge,
      is_firefox = typeof window.InstallTrigger !== "undefined",
      is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      is_mob = navigator.userAgent,
      direction = false; // Hash

  var hash = location.search.replace(/\?/, ""); // 		rtlSlider = document.querySelector(`.${lotteryName}-section--slider`);
  // if (hash === "righttoleft") {
  // 	ltr.parentNode.removeChild(ltr);
  // 	rtlSlider.classList.add(`${lotteryName}-section--rtl`);
  // 	direction = true;
  // } else {
  // 	rtl.parentNode.removeChild(rtl);
  // }

  //Parallax
  // function simpleParallax(intensity, element) {
  // 	window.addEventListener('scroll', function() {
  // 		let scrolled = window.pageYOffset;
  // 		let calc = -(scrolled * intensity);
  // 		element.style.transform = `translateY(${calc}px)`;
  // 	});
  // }
  // 	if (window.NodeList && !NodeList.prototype.forEach) {
  // 	NodeList.prototype.forEach = Array.prototype.forEach;
  // }
  // if (!Array.prototype.forEach) {
  // 	Array.prototype.forEach = function (callback, thisArg) {
  // 		thisArg = thisArg || window;
  // 			for (var i = 0; i < this.length; i++) {
  // 			callback.call(thisArg, this[i], i, this);
  // 		}
  // 	};
  // }
  // let elem = document.querySelectorAll(`.${lotteryName}-parallax`);
  // elem.forEach((i) => {
  // 	simpleParallax(0.1, i);
  // });


  // wrapper.classList.add("".concat(lotteryName, "-noAnim"));

  if (/mobi/i.test(is_mob)) {
    window.addEventListener("orientationchange", function () {
      slider.destroy();
      setTimeout(function () {
        slider = slider.rebuild();
      }, 10);
    });
  } else {
    window.addEventListener("resize", function () {
      slider.destroy();
      setTimeout(function () {
        slider = slider.rebuild();
      }, 10);
    });
  } // Timer


  var countDown = function countDown(theSelector, time) {
    var output = "",
        x;
    var dTime = Date.parse(time);
    var theDate = Date.parse(new Date());
    var difference = dTime - theDate;
    var milliseconds = difference % 1000;

    function addZero(number) {
      if (number <= 9) {
        number = "0" + number;
      }

      return number;
    }

    x = difference / 1000;
    var seconds = addZero(parseInt(x % 60));
    x /= 60;
    var minutes = addZero(parseInt(x % 60));
    x /= 60;
    var hours = addZero(parseInt(x % 24));
    x /= 24;
    var days = addZero(parseInt(x));
    output = "<div class=\"".concat(lotteryName, "-timer__body_days\"><span>").concat(days, "</span><small>\u0434\u043D\u0435\u0439</small></div>\n\t\t\t\t\t\t\t<div class=\"").concat(lotteryName, "-timer__body_hours\"><span>").concat(hours, "</span><small>\u0447\u0430\u0441\u043E\u0432</small></div>\n\t\t\t\t\t\t\t<div class=\"").concat(lotteryName, "-timer__body_minutes\"><span>").concat(minutes, "</span><small>\u043C\u0438\u043D\u0443\u0442</small></div>\n\t\t\t\t\t\t\t<div class=\"").concat(lotteryName, "-timer__body_seconds\"><span>").concat(seconds, "</span><small>\u0441\u0435\u043A\u0443\u043D\u0434</small></div>");
    document.querySelector(theSelector).innerHTML = output;
  };

  var Time = "9/10/2020 18:25:00";
  setInterval(function () {
    countDown(".".concat(lotteryName, "-jsTimer"), Time);
  }, 1000); // Vue
  // PerfectScroll

  Vue.use(Vue2PerfectScrollbar, {
    name: 'scroll'
  }); // Modal

  Vue.use(window["vue-js-modal"]["default"], {
    dialog: true,
    dynamic: true,
    injectModalsContainer: true
  });
  var app = new Vue({
    el: ".".concat(lotteryName),
    methods: {
      beforeOpen: function beforeOpen() {
        body.classList.add('noScroll');
      },
      opened: function opened() {
        if (this.$refs.rulesScroll) {
          this.$refs.rulesScroll.update();
        }
      },
      closed: function closed() {},
      beforeClose: function beforeClose() {
        body.classList.remove('noScroll');
      },
      onResize: function onResize() {
        if (this.$refs.rulesScroll) {
          this.$refs.rulesScroll.update();
        }

        if (this.$refs.ticketsScroll) {
          this.$refs.ticketsScroll.update();
        }
      }
    },
    mounted: function mounted() {
      window.addEventListener('resize', this.onResize);
    },
    beforeDestroy: function beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
    }
  });

  if (hash !== '' && hash !== 'righttoleft') {
    app.$modal.show('modal-' + hash);
  } // Slider


  var slider = tns({
    container: ".".concat(lotteryName, "-slider__body"),
    items: 1,
    loop: true,
    slideBy: "page",
    nav: true,
    controls: true,
    speed: 1500,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayButtonOutput: false
  }); //Animation

  AOS.init({
    duration: 1000,
    easing: 'ease',
    once: true,
    disable: function() {
      var maxWidth = 1000;
      return window.innerWidth < maxWidth;
    }
  });
}); // Scripts:
// =====================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
  var slideUp = function slideUp(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(function () {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  };

  var slideDown = function slideDown(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    target.style.removeProperty('display');
    var display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    var height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(function () {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  };

  var slideToggle = function slideToggle(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  };
});