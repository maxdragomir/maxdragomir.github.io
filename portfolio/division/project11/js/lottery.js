"use strict";

// Vars
// =====================================================================================================================
var lotteryName = 'kairat',
    body = document.querySelector('body'),
    ltr = document.getElementById('ltr'),
    rtl = document.getElementById('rtl'),
    wrapper = document.querySelector(".".concat(lotteryName, "-wrapper")),
    hash = location.search.replace(/\?/, ""),
    direction = false;
document.addEventListener("DOMContentLoaded", function () {
  /*! Lottery */
  //=====================================================================================================================
  // Browsers and devices
  var is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
      is_Edge = navigator.userAgent.indexOf("Edge") > -1,
      is_chrome = !!window.chrome && !is_opera && !is_Edge,
      is_explorer = typeof document !== "undefined" && !!document.documentMode && !is_Edge,
      is_firefox = typeof window.InstallTrigger !== "undefined",
      is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      is_mob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent); // Vue Scroll & Modal

  Vue.use(Vue2PerfectScrollbar, {
    name: 'scroll'
  });
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
        if (this.$refs.modalScroll) {
          this.$refs.modalScroll.update();
        }

        if (this.$refs.pageScroll) {
          this.$refs.pageScroll.update();
        }
      },
      closed: function closed() {},
      beforeClose: function beforeClose() {
        body.classList.remove('noScroll');
      },
      onResize: function onResize(event) {
        if (this.$refs.modalScroll) {
          this.$refs.modalScroll.update();
        }

        if (this.$refs.pageScroll) {
          this.$refs.pageScroll.update();
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
  } // Content slider with nav slider


  var sliderNav = tns({
    container: ".".concat(lotteryName, "-slider__nav_items"),
    items: 2,
    loop: false,
    nav: false,
    controlsContainer: ".".concat(lotteryName, "-slider__controls"),
    autoplayTimeout: 1000,
    swipeAngle: false,
    touch: false,
    speed: 400,
    responsive: {
      '701': {
        items: 4
      },
      '1367': {
        items: 6
      }
    }
  });
  var sliderContent = tns({
    container: ".".concat(lotteryName, "-slider__tabs"),
    items: 1,
    loop: false,
    autoHeight: false,
    navContainer: ".".concat(lotteryName, "-slider__nav_items"),
    controlsContainer: ".".concat(lotteryName, "-slider__controls"),
    prevButton: ".".concat(lotteryName, "-slider__control--prev"),
    nextButton: ".".concat(lotteryName, "-slider__control--next"),
    navAsThumbnails: false,
    autoplayTimeout: 1000,
    swipeAngle: false,
    touch: false,
    speed: 600
  }); // let carouselEl = body.querySelector(`.${lotteryName}-slider__nav_items`),
  //   navBtns = carouselEl.getElementsByClassName(`${lotteryName}-slider__nav_item-wrapper`),
  //   info2 = sliderContent.getInfo();
  //
  // for (let ii = 0; ii < navBtns.length; ii++) {
  //   (function (index) {
  //     navBtns[index].addEventListener("click", function () {
  //       if (index === navBtns.length - 1 || index === 0) {
  //         return
  //       }
  //       if (navBtns[index - 1].hasAttribute('aria-hidden')) {
  //         info2.prevButton.click();
  //       }
  //       if (navBtns[index + 1].hasAttribute('aria-hidden')) {
  //         info2.nextButton.click();
  //       }
  //     })
  //   })(ii);
  // }
  // Slider

  var iSlider = tns({
    container: ".".concat(lotteryName, "-iSlider__body"),
    controlsContainer: ".".concat(lotteryName, "-iSlider__controls"),
    items: 1,
    nav: true,
    controls: true,
    loop: true,
    speed: 500,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayButtonOutput: false,
    responsive: {
      '551': {
        items: 3
      }
    }
  }); // Animation

  if (is_mob) {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      disable: true
    });
    document.querySelector(".".concat(lotteryName, "-main__info_text--border")).classList.add("aos-animate");
  } else {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true
    });
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
    }, 1000);
    additionBlock.addEventListener('click', function (e) {
      var target = e.target;
      if (!target.classList.contains("".concat(lotteryName, "-addition"))) return;
      additionBlock.classList.toggle("".concat(lotteryName, "-addition--fix"));

      if (additionBlock.classList.contains("".concat(lotteryName, "-addition--fix"))) {
        svgOpen.style.display = "none";
        svgClose.style.display = "block";
      } else {
        svgOpen.style.display = "block";
        svgClose.style.display = "none";
      }
    });
  } // Scroll to elem


  function scrollToElem(elem, duration) {
    var jsScrollTo = document.querySelectorAll(".".concat(lotteryName, "-jsScrollTo"));
    var element = document.querySelector(elem);

    for (var i = 0; i < jsScrollTo.length; i++) {
      jsScrollTo[i].addEventListener("click", function () {
        scrollToElement(element, duration);
        return false;
      });
    }
  }
  /*
   * y: the y coordinate to scroll, 0 = top
   * duration: scroll duration in milliseconds; default is 0 (no transition)
   * element: the html element that should be scrolled ; default is the main scrolling element
   */


  function scrollToY(y) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.documentElement;
    // cancel if already on target position
    if (element.scrollTop === y) return;
    var cosParameter = (element.scrollTop - y) / 2;
    var scrollCount = 0,
        oldTimestamp = null;

    function step(newTimestamp) {
      if (oldTimestamp !== null) {
        // if duration is 0 scrollCount will be Infinity
        scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
        if (scrollCount >= Math.PI) return element.scrollTop = y;
        element.scrollTop = cosParameter + y + cosParameter * Math.cos(scrollCount);
      }

      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }
  /*
   * duration: scroll duration in milliseconds; default is 0 (no transition)
   * this function is using the scrollToY function
   */


  function scrollToTop() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    scrollToY(0, duration, document.documentElement);
  }
  /*
   * id: the id of the element as a string that should be scrolled to
   * duration: scroll duration in milliseconds; default is 0 (no transition)
   * this function is using the scrollToY function on the main scrolling element
   */


  function scrollToId(id) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var offset = Math.round(document.getElementById(id).getBoundingClientRect().top);
    scrollToY(document.documentElement.scrollTop + offset, duration);
  }
  /*
   * element: the node object that should be scrolled to
   * duration: scroll duration in milliseconds; default is 0 (no transition)
   * this function is using the scrollToY function on the main scrolling element
   */


  function scrollToElement(element) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // const offset = Math.round(element.getBoundingClientRect().top);
    scrollToY(element.offsetTop, duration);
  }
  /* My Lottery Scripts: */
  // =====================================================================================================================


  scrollToElem(".".concat(lotteryName, "-section--slider"), 1000);

  function bet() {
    var tab = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-slider__tab")));
    tab.forEach(function (itemTab) {
      var btnPlus = Array.prototype.slice.call(itemTab.querySelectorAll(".".concat(lotteryName, "-slider__tab_btn"))),
          allNumbers = Array.prototype.slice.call(itemTab.querySelectorAll(".".concat(lotteryName, "-slider__tab_numbers"))),
          blockAll = Array.prototype.slice.call(itemTab.querySelectorAll(".".concat(lotteryName, "-slider__tab_block")));
      btnPlus.forEach(function (itemBtnPlus) {
        var numbers = itemBtnPlus.querySelector(".".concat(lotteryName, "-slider__tab_numbers")),
            number = Array.prototype.slice.call(itemBtnPlus.querySelectorAll(".".concat(lotteryName, "-slider__tab_number"))),
            img = itemBtnPlus.querySelector(".".concat(lotteryName, "-slider__tab_plus")),
            parentBlock = itemBtnPlus.parentNode.parentNode;
        document.addEventListener('click', function (e) {
          var target = e.target;

          if (numbers.classList.contains("".concat(lotteryName, "-slider__tab_numbers--show")) && !target.classList.contains("".concat(lotteryName, "-slider__tab_btn"))) {
            numbers.classList.remove("".concat(lotteryName, "-slider__tab_numbers--show"));
            parentBlock.classList.remove("".concat(lotteryName, "-slider__tab--zIndex"));
          }
        });
        itemBtnPlus.addEventListener('click', function (e) {
          var target = e.target;

          if (!numbers.classList.contains("".concat(lotteryName, "-slider__tab_numbers--show")) && target.classList.contains("".concat(lotteryName, "-slider__tab_btn"))) {
            allNumbers.forEach(function (itemAllNumbers) {
              itemAllNumbers.classList.remove("".concat(lotteryName, "-slider__tab_numbers--show"));
            });
            blockAll.forEach(function (itemAllBlock) {
              itemAllBlock.classList.remove("".concat(lotteryName, "-slider__tab--zIndex"));
            });
            numbers.classList.add("".concat(lotteryName, "-slider__tab_numbers--show"));
            parentBlock.classList.add("".concat(lotteryName, "-slider__tab--zIndex"));
          } else if (numbers.classList.contains("".concat(lotteryName, "-slider__tab_numbers--show")) && target.classList.contains("".concat(lotteryName, "-slider__tab_btn"))) {
            numbers.classList.remove("".concat(lotteryName, "-slider__tab_numbers--show"));
            parentBlock.classList.remove("".concat(lotteryName, "-slider__tab--zIndex"));
          }
        });
        number.forEach(function (itemNumber) {
          itemNumber.addEventListener('click', function () {
            var dataNum = itemNumber.dataset.num,
                span = document.createElement('span');

            if (itemBtnPlus.querySelectorAll(".".concat(lotteryName, "-slider__tab_new-number")).length) {
              itemBtnPlus.querySelector(".".concat(lotteryName, "-slider__tab_new-number")).remove();
            }

            span.className = "".concat(lotteryName, "-slider__tab_new-number");
            itemBtnPlus.dataset.newNumber = dataNum;
            span.innerHTML = dataNum;
            itemBtnPlus.appendChild(span);
            img.classList.add("".concat(lotteryName, "-slider__tab_plus--hide"));
            itemBtnPlus.classList.add("".concat(lotteryName, "-slider__tab_btn--chosen"));
            numbers.classList.remove("".concat(lotteryName, "-slider__tab_numbers--show"));
            checkAll();
          });
        });
      });
    });

    function checkAll() {
      var wrapper = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-slider__tab_wrapper")));
      wrapper.forEach(function (itemWrapper) {
        var btn = itemWrapper.querySelector(".".concat(lotteryName, "-btn--tab")),
            btnPlus = itemWrapper.querySelectorAll(".".concat(lotteryName, "-slider__tab_btn")),
            btnPlusChosen = itemWrapper.querySelectorAll(".".concat(lotteryName, "-slider__tab_btn--chosen")),
            btnLen = btnPlus.length;

        if (btnPlusChosen.length === btnLen) {
          btn.classList.remove("".concat(lotteryName, "-btn--disabled"));
        }
      });
    }
  }

  bet();

  function disableInactiveNavs() {
    var allNavs = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-slider__nav_item-wrapper"))),
        allTabsLength = document.querySelectorAll(".".concat(lotteryName, "-slider__tab")).length - 1;
    allNavs.forEach(function (itemNav, index) {
      if (index > allTabsLength) {
        itemNav.classList.add("".concat(lotteryName, "-slider__nav_item-wrapper--disabled"));
      }
    });
  }

  disableInactiveNavs();

  if (is_explorer) {
    console.log('is_explorer');
  } else if (is_Edge) {
    console.log('is_Edge');
  } else if (is_mob) {
    console.log('is_mob');
  } else {
    var step = document.querySelectorAll(".".concat(lotteryName, "-step__info_number--normal")),
        stepCoords = document.querySelector(".".concat(lotteryName, "-section--steps")),
        mouseCoords = stepCoords.getBoundingClientRect();
    stepCoords.addEventListener('mousemove', function (e) {
      var mouseX = e.pageX - stepCoords.offsetLeft;
      var mouseY = e.pageY - stepCoords.offsetTop;
      var numberX = (mouseX - mouseCoords.width / 2) / mouseCoords.width * 20;
      var numberY = (mouseY - mouseCoords.height / 2) / mouseCoords.width * 20;
      TweenMax.staggerTo(step, 0.3, {
        x: gsap.utils.wrap([numberX, -numberX]),
        y: gsap.utils.wrap([numberY, -numberY]),
        ease: Power4.easeOut
      });
    });
    stepCoords.addEventListener('mouseleave', function () {
      TweenMax.staggerTo(step, 0.3, {
        x: 0,
        y: 0,
        ease: Power4.easeOut
      });
    });
  }
});