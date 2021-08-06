"use strict";

// Vars
// =====================================================================================================================
var lotteryName = 'legend',
    body = document.querySelector('body'),
    ltr = document.getElementById('ltr'),
    rtl = document.getElementById('rtl'),
    wrapper = document.querySelector(".".concat(lotteryName, "-wrapper")),
    hash = location.search.replace(/\?/, ""),
    hashArray = location.pathname.split('/'),
    isRtl = hashArray[hashArray.length - 1].split('.')[0] === "rtl",
    direction = false;
document.addEventListener("DOMContentLoaded", function () {
  // Raffle:
  // =====================================================================================================================
  // RTL
  if (isRtl || hash === 'rtl') {
    ltr.parentNode.removeChild(ltr);
    direction = true;
  } else {
    rtl.parentNode.removeChild(rtl);
  } // Browsers and devices


  var is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
      is_Edge = navigator.userAgent.indexOf("Edge") > -1,
      is_chrome = !!window.chrome && !is_opera && !is_Edge,
      is_explorer = typeof document !== "undefined" && !!document.documentMode && !is_Edge,
      is_firefox = typeof window.InstallTrigger !== "undefined",
      is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      is_mob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent); // Vue Scroll & Modal

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
      opened: function opened() {},
      closed: function closed() {},
      beforeClose: function beforeClose() {
        body.classList.remove('noScroll');
      }
    }
  });

  if (hash !== '' && hash !== 'righttoleft') {
    app.$modal.show('modal-' + hash);
  }

  if (is_mob) {
    app.$el.classList.add("".concat(lotteryName, "-wrapper--mob"));
  }
  /* Addition Btns: */
  // =====================================================================================================================


  var additionBlock = document.querySelector(".".concat(lotteryName, "-addition")),
      svgOpen = document.querySelector(".".concat(lotteryName, "-addition__svg-open")),
      svgClose = document.querySelector(".".concat(lotteryName, "-addition__svg-close"));

  if (additionBlock) {
    svgClose.style.display = "none";
    setTimeout(function () {
      additionBlock.classList.remove("".concat(lotteryName, "-addition--show"));

      if (hash !== '' && !isRtl && hash !== 'rtl') {
        additionBlock.classList.add("".concat(lotteryName, "-addition--fix"));
        svgCheck();
      }
    }, 1000);
    additionBlock.addEventListener('click', function (e) {
      var target = e.target;
      if (!target.classList.contains("".concat(lotteryName, "-addition"))) return;
      additionBlock.classList.toggle("".concat(lotteryName, "-addition--fix"));
      svgCheck();
    });
    document.addEventListener('keydown', function (e) {
      var keyCode = e.code;

      if (keyCode === 'Space' && e.shiftKey) {
        additionBlock.classList.toggle("".concat(lotteryName, "-addition--fix"));
        svgCheck();
      }
    });
  }

  function svgCheck() {
    if (additionBlock.classList.contains("".concat(lotteryName, "-addition--fix"))) {
      svgOpen.style.display = "none";
      svgClose.style.display = "block";
    } else {
      svgOpen.style.display = "block";
      svgClose.style.display = "none";
    }
  } // Animation


  if (is_mob) {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      disable: true
    });
  } else {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true
    });
  }
  /* My Raffle Scripts: */
  // =====================================================================================================================
  //SVG FIX FOR IE


  if (!("classList" in SVGElement.prototype)) {
    Object.defineProperty(SVGElement.prototype, "classList", {
      get: function get() {
        var _this = this;

        return {
          contains: function contains(className) {
            return _this.className.baseVal.split(" ").indexOf(className) !== -1;
          },
          add: function add(className) {
            return _this.setAttribute('class', _this.getAttribute('class') + ' ' + className);
          },
          remove: function remove(className) {
            var removedClass = _this.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');

            if (_this.classList.contains(className)) {
              _this.setAttribute('class', removedClass);
            }
          }
        };
      }
    });
  }

  var animateEl = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-js-animate"))),
      svgName = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-boxer__name-svg")));
  svgName.forEach(function (item) {
    item.classList.add('svg--finished');
  });

  var swapClass = function swapClass(el, intervalTime) {
    var swaps = setInterval(function () {
      el.forEach(function (item) {
        item.classList.toggle("".concat(lotteryName, "-boxer--is-show"));
      });
    }, intervalTime);
  };

  setTimeout(function () {
    document.querySelector(".".concat(lotteryName, "-boxer--tyson")).classList.add("".concat(lotteryName, "-boxer--is-show"));
    swapClass(animateEl, 5500);
  }, 1000);
});