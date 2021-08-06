"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Vars
// =====================================================================================================================
var lotteryName = 'champions',
    html = document.querySelector('html'),
    body = document.querySelector('body'),
    ltr = document.getElementById('ltr'),
    rtl = document.getElementById('rtl'),
    wrapper = document.querySelector(".".concat(lotteryName, "-wrapper")),
    hash = location.search.replace(/\?/, ""),
    hashArray = location.pathname.split('/'),
    pageType = hashArray[hashArray.length - 1].split('.')[0],
    isRtl = hashArray[hashArray.length - 1].split('.')[0] === "rtl",
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
      is_mob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent); // RTL

  if (isRtl || hash === 'rtl') {
    ltr.parentNode.removeChild(ltr);
    direction = true;
  } else {
    rtl.parentNode.removeChild(rtl);
  } // Vue


  Vue.use(window["vue-js-modal"]["default"], {
    dialog: true,
    dynamic: true,
    injectModalsContainer: true
  });
  var app = new Vue({
    el: ".".concat(lotteryName),
    data: {
      points: [300, 500, 1000, 2000, 3000, 4000, 5000],
      chosenName: 0,
      isLogged: false
    },
    methods: {
      beforeOpen: function beforeOpen() {
        body.classList.add('noScroll');
      },
      opened: function opened(e) {
        var chosenNumber = this.getRandom(0, this.points.length - 1);
        this.chosenName = this.points[chosenNumber];

        if (e.name === 'modal-bets') {
          // toggle accordion
          var accordion = Array.prototype.slice.call(this.$el.querySelectorAll(".".concat(lotteryName, "-js-accordion")));
          accordion.forEach(function (item) {
            var headerToggle = item.querySelector(".".concat(lotteryName, "-js-header-toggle"));
            var removeBtn = item.querySelector(".".concat(lotteryName, "-js-remove"));

            if (removeBtn) {
              removeBtn.addEventListener('click', function () {
                item.parentNode.removeChild(item);
              });
            }

            headerToggle.addEventListener('click', function () {
              item.classList.toggle("".concat(lotteryName, "-modal-bets__item--is-open"));
            });
          });
        }
      },
      closed: function closed() {},
      beforeClose: function beforeClose() {
        body.classList.remove('noScroll');
      },
      openModal: function openModal() {
        if (hash === "logged") {
          this.isLogged = true;
        }

        if (this.isLogged) {
          this.$modal.show('modal-thanks');
        } else {
          this.$modal.show('modal-enter');
        }
      },
      getRandom: function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  });

  if (hash !== '' && hash !== 'logged' && hash !== 'rtl') {
    app.$modal.show('modal-' + hash);
  }

  var myApp = app.$el;

  if (is_mob) {
    myApp.classList.add("".concat(lotteryName, "--is-mob"));
  }
  /* Addition Btns: */
  // =====================================================================================================================


  var additionBlock = document.querySelector(".".concat(lotteryName, "-addition")),
      svgOpen = document.querySelector(".".concat(lotteryName, "-addition__svg-open")),
      svgClose = document.querySelector(".".concat(lotteryName, "-addition__svg-close")),
      additionTimer,
      additionInterval;

  if (additionBlock) {
    svgClose.style.display = "none";
    setTimeout(function () {
      additionBlock.classList.remove("".concat(lotteryName, "-addition--is-show"));

      if (hash !== '' && !isRtl && hash !== 'rtl' && hash !== 'logged') {
        additionBlock.classList.add("".concat(lotteryName, "-addition--is-fixed"));
        svgCheck();
      }
    }, 1000);
    additionBlock.addEventListener('click', function (e) {
      var target = e.target;
      if (!target.classList.contains("".concat(lotteryName, "-addition"))) return;
      additionBlock.classList.toggle("".concat(lotteryName, "-addition--is-fixed"));
      svgCheck();
    });
    document.addEventListener('keydown', function (e) {
      var keyCode = e.code;

      if (e.shiftKey && keyCode === 'Digit3') {
        if (location.hostname === 'localhost') {
          location.pathname = "account.html";
        } else {
          location.pathname = hashArray[1] + "/account.php";
        }
      }

      if (e.shiftKey && keyCode === 'Digit1') {
        if (location.hostname === 'localhost') {
          location.pathname = "lottery.html";
        } else {
          location.pathname = hashArray[1] + "/index.php";
        }
      }

      if (e.altKey && keyCode === 'Digit1') {
        if (location.search === '?rtl') {
          location.search = '';
          location.href = location.origin + location.pathname;
        } else {
          location.search = "?rtl";
        }
      }

      if (e.altKey && keyCode === 'Digit2') {
        if (pageType === 'index') {
          if (location.search === '?logged') {
            location.search = "";
            location.href = location.origin + location.pathname;
          } else {
            location.search = "?logged";
          }
        } else if (pageType === 'lottery') {
          if (location.search === '?logged') {
            location.search = "";
            location.href = location.origin + location.pathname;
          } else {
            location.search = "?logged";
          }
        }
      }

      if (e.shiftKey && keyCode === 'Backquote') {
        additionBlock.classList.toggle("".concat(lotteryName, "-addition--is-fixed"));
        svgCheck();
      }
    });
  }

  function svgCheck() {
    if (additionBlock.classList.contains("".concat(lotteryName, "-addition--is-fixed"))) {
      svgOpen.style.display = "none";
      svgClose.style.display = "block";
    } else {
      svgOpen.style.display = "block";
      svgClose.style.display = "none";
    }
  } // Aos


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
  } // Slider thumbs
  // let sliderEffect;
  // if(is_explorer) {
  //   sliderEffect = 'fade'
  // } else {
  //   sliderEffect = 'cube'
  // }


  var swiperThumbs = new Swiper(".".concat(lotteryName, "-js-slider-thumbs"), {
    direction: 'horizontal',
    slidesPerView: 5,
    grabCursor: true,
    simulateTouch: true,
    shortSwipes: false,
    longSwipes: true,
    longSwipesRatio: 0.1,
    longSwipesMs: 50,
    watchSlidesVisibility: true,
    effect: 'slide',
    breakpoints: {
      320: {
        slidesPerView: 3
      },
      561: {
        slidesPerView: 5
      }
    }
  });
  var swiperSlider = new Swiper(".".concat(lotteryName, "-js-slider"), {
    direction: 'horizontal',
    slidesPerView: 1,
    autoHeight: !is_explorer,
    grabCursor: false,
    simulateTouch: true,
    shortSwipes: false,
    longSwipes: true,
    longSwipesRatio: 0.1,
    longSwipesMs: 50,
    effect: 'slide',
    thumbs: {
      swiper: swiperThumbs
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      slideChangeTransitionStart: function slideChangeTransitionStart(swiper) {
        var activeIndex = this.activeIndex + 1;
        var activeSlide = document.querySelector(".".concat(lotteryName, "-matches .swiper-slide:nth-child(").concat(activeIndex, ")"));

        if (is_explorer) {
          swiper.wrapperEl.style.height = '100%';
          swiper.el.style.height = activeSlide.scrollHeight + 'px';
        }
      },
      slideChange: function slideChange(swiper) {
        var activeIndex = this.activeIndex + 1;
        var activeSlide = document.querySelector(".".concat(lotteryName, "-nav .swiper-slide:nth-child(").concat(activeIndex, ")"));
        var nextSlide = document.querySelector(".".concat(lotteryName, "-nav .swiper-slide:nth-child(").concat(activeIndex + 1, ")"));
        var prevSlide = document.querySelector(".".concat(lotteryName, "-nav .swiper-slide:nth-child(").concat(activeIndex - 1, ")"));

        if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
          this.thumbs.swiper.slideNext();
        } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
          this.thumbs.swiper.slidePrev();
        }

        if (is_explorer) {
          swiper.wrapperEl.style.height = '100%';
          swiper.el.style.height = activeSlide.scrollHeight + 'px';
        }

        setTimeout(function () {
          AOS.refresh();
        }, 500);
      }
    }
  });
  window.addEventListener("resize", function (event) {
    swiperSlider.update();
    swiperThumbs.update();
  }); // Slider

  var swiperSliderPrizes = new Swiper(".".concat(lotteryName, "-js-slider-prizes"), {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    simulateTouch: true,
    shortSwipes: false,
    longSwipes: true,
    longSwipesRatio: 0.1,
    longSwipesMs: 50,
    speed: 1000,
    autoplay: {
      delay: 3000
    },
    effect: 'slide',
    pagination: {
      el: ".".concat(lotteryName, "-slider-prizes__pagination"),
      clickable: true
    }
  });
  window.addEventListener("resize", function (event) {
    swiperSliderPrizes.update();
  }); // Random levitate elements

  function tweenProperty(target, prop, min, max) {
    var _gsap$to;

    var randomDur = gsap.utils.random(5, 7, 3.5);
    var randomDelay = gsap.utils.random(0.2, 1, 0.5);
    gsap.to(target, (_gsap$to = {}, _defineProperty(_gsap$to, prop, gsap.utils.random(min, max)), _defineProperty(_gsap$to, "duration", randomDur), _defineProperty(_gsap$to, "delay", randomDelay), _defineProperty(_gsap$to, "ease", 'none'), _defineProperty(_gsap$to, "yoyo", true), _defineProperty(_gsap$to, "force3D", true), _defineProperty(_gsap$to, "rotate", 0.01), _defineProperty(_gsap$to, "skewX", 0.01), _defineProperty(_gsap$to, "onComplete", tweenProperty), _defineProperty(_gsap$to, "onCompleteParams", [target, prop, min, max]), _gsap$to));
  } // Scroll to elem


  function scrollToElem(elem, duration) {
    var jsScrollTo = document.querySelectorAll(".".concat(lotteryName, "-js-scroll-to"));
    var element = document.querySelector(elem);

    for (var i = 0; i < jsScrollTo.length; i++) {
      jsScrollTo[i].addEventListener("click", function () {
        scrollToElement(element, duration);
        return false;
      });
    }
  }

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

  function scrollToTop() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    scrollToY(0, duration, document.documentElement);
  }

  function scrollToId(id) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var offset = Math.round(document.getElementById(id).getBoundingClientRect().top);
    scrollToY(document.documentElement.scrollTop + offset, duration);
  }

  function scrollToElement(element) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // const offset = Math.round(element.getBoundingClientRect().top);
    scrollToY(element.offsetTop, duration);
  }
  /* Custom Lottery Scripts: */
  // =====================================================================================================================
  // Scroll to element


  scrollToElem(".".concat(lotteryName, "-section--tournament"), 1000); // Main screen

  var mainTL = gsap.timeline(),
      svgTitle = myApp.querySelector(".".concat(lotteryName, "-js-svg-animate")),
      title = myApp.querySelector(".".concat(lotteryName, "-js-title")),
      video = myApp.querySelector(".".concat(lotteryName, "-js-video")),
      poster = myApp.querySelector(".".concat(lotteryName, "-js-poster")),
      firstAnim = true;

  function animateTitle() {
    var tl = gsap.timeline();
    tl.to(title, {
      autoAlpha: 1
    });
    var myVivus = new Vivus(svgTitle, {
      type: "sync",
      duration: 100,
      start: "autostart",
      animTimingFunction: Vivus.EASE_OUT_BOUNCE
    }, function (obj) {
      obj.el.classList.add("svg--finished");
    });
  }

  function animateEmblems() {
    var tl = gsap.timeline();
    tl.to(".".concat(lotteryName, "-animate__block--is-show .").concat(lotteryName, "-animate__block-wrapper"), {
      duration: 1,
      rotationY: gsap.utils.wrap([25, -25])
    });
  }

  if (!is_mob) {
    mainTL.add(animateTitle, '+=1');
    mainTL.add(animateEmblems, '+=2.5');
  } else {
    var tl = gsap.timeline();
    tl.set(title, {
      autoAlpha: 1
    });
  } // Rotate emblems


  var elLeft = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-animate__inner--left .").concat(lotteryName, "-animate__block"))),
      elRight = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-animate__inner--right .").concat(lotteryName, "-animate__block"))),
      imageCount = 0;
  setInterval(function () {
    if (!firstAnim) {
      var _tl = gsap.timeline();

      _tl.set(".".concat(lotteryName, "-animate__block--is-show .").concat(lotteryName, "-animate__block-wrapper"), {
        delay: .5,
        rotationY: 0
      });
    } else {
      firstAnim = false;
    }

    elLeft.forEach(function (item) {
      item.classList.remove("".concat(lotteryName, "-animate__block--is-show"));
    });
    elRight.forEach(function (item) {
      item.classList.remove("".concat(lotteryName, "-animate__block--is-show"));
    });
    elLeft[imageCount].classList.add("".concat(lotteryName, "-animate__block--is-show"));
    elRight[imageCount].classList.add("".concat(lotteryName, "-animate__block--is-show"));

    if (!is_mob) {
      if (elLeft[imageCount].classList.contains("".concat(lotteryName, "-animate__block--is-show"))) {
        var _tl2 = gsap.timeline();

        _tl2.to(".".concat(lotteryName, "-animate__block--is-show .").concat(lotteryName, "-animate__block-wrapper"), {
          duration: 1,
          delay: 1.5,
          rotationY: gsap.utils.wrap([25, -25])
        });
      }
    }

    if (imageCount < elLeft.length - 1) {
      imageCount++;
    } else {
      imageCount = 0;
    }
  }, 5000); // Tournament bet

  function tournament() {
    var slide = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-js-slider .swiper-slide")));
    slide.forEach(function (itemSlide) {
      var match = Array.prototype.slice.call(itemSlide.querySelectorAll(".".concat(lotteryName, "-match"))),
          btnOpenNumbers = Array.prototype.slice.call(itemSlide.querySelectorAll(".".concat(lotteryName, "-match__btn"))),
          blockNumbers = Array.prototype.slice.call(itemSlide.querySelectorAll(".".concat(lotteryName, "-match__numbers")));
      btnOpenNumbers.forEach(function (itemBtnPlus) {
        var currentNumbers = itemBtnPlus.parentNode.querySelector(".".concat(lotteryName, "-match__numbers")),
            number = Array.prototype.slice.call(itemBtnPlus.parentNode.querySelectorAll(".".concat(lotteryName, "-match__number"))),
            parentBlock = itemBtnPlus.parentNode.parentNode;
        document.addEventListener('click', function (e) {
          var target = e.target;

          if (currentNumbers.classList.contains("".concat(lotteryName, "-match__numbers--is-show")) && !target.classList.contains("".concat(lotteryName, "-match__btn"))) {
            currentNumbers.classList.remove("".concat(lotteryName, "-match__numbers--is-show"));
            itemBtnPlus.classList.remove("".concat(lotteryName, "-match__btn--is-show"));
          }
        });
        itemBtnPlus.addEventListener('click', function (e) {
          var target = e.target;

          if (!currentNumbers.classList.contains("".concat(lotteryName, "-match__numbers--is-show")) && target.classList.contains("".concat(lotteryName, "-match__btn"))) {
            blockNumbers.forEach(function (itemAllNumbers) {
              itemAllNumbers.classList.remove("".concat(lotteryName, "-match__numbers--is-show"));
            });
            btnOpenNumbers.forEach(function (itemAllBtns) {
              itemAllBtns.classList.remove("".concat(lotteryName, "-match__btn--is-show"));
            });
            currentNumbers.classList.add("".concat(lotteryName, "-match__numbers--is-show"));
            this.classList.add("".concat(lotteryName, "-match__btn--is-show"));
          } else if (currentNumbers.classList.contains("".concat(lotteryName, "-match__numbers--is-show")) && target.classList.contains("".concat(lotteryName, "-match__btn"))) {
            currentNumbers.classList.remove("".concat(lotteryName, "-match__numbers--is-show"));
            this.classList.remove("".concat(lotteryName, "-match__btn--is-show"));
          }
        });
        number.forEach(function (itemNumber) {
          itemNumber.addEventListener('click', function () {
            var dataNum = itemNumber.dataset.num,
                span = document.createElement('span');

            if (itemBtnPlus.querySelectorAll(".".concat(lotteryName, "-match__number--new")).length) {
              itemBtnPlus.querySelector(".".concat(lotteryName, "-match__number--new")).remove();
            }

            span.className = "".concat(lotteryName, "-match__number--new");
            itemBtnPlus.dataset.newNumber = dataNum;
            span.innerHTML = dataNum;
            itemBtnPlus.appendChild(span);
            itemBtnPlus.classList.add("".concat(lotteryName, "-match__btn--is-chosen"));
            currentNumbers.classList.remove("".concat(lotteryName, "-match__numbers--is-show"));
            btnOpenNumbers.forEach(function (itemAllBtns) {
              itemAllBtns.classList.remove("".concat(lotteryName, "-match__btn--is-show"));
            });
            checkAll(match);
            updateHeightSlider();
          });
        });
      });
    });

    function checkAll(match) {
      match.forEach(function (itemMatch) {
        var btn = itemMatch.querySelector(".".concat(lotteryName, "-js-accept")),
            btnPlus = itemMatch.querySelectorAll(".".concat(lotteryName, "-match__btn")),
            btnPlusLeft = itemMatch.querySelector(".".concat(lotteryName, "-match__btn--left")),
            btnPlusRight = itemMatch.querySelector(".".concat(lotteryName, "-match__btn--right")),
            btnPlusChosen = itemMatch.querySelectorAll(".".concat(lotteryName, "-match__btn--is-chosen")),
            btnLen = btnPlus.length;

        if (btnPlusLeft.classList.contains("".concat(lotteryName, "-match__btn--is-chosen"))) {
          itemMatch.classList.add("".concat(lotteryName, "-match--left-chosen"));
        }

        if (btnPlusRight.classList.contains("".concat(lotteryName, "-match__btn--is-chosen"))) {
          itemMatch.classList.add("".concat(lotteryName, "-match--right-chosen"));
        }

        if (btnPlusChosen.length === btnLen) {
          btn.classList.remove("".concat(lotteryName, "-btn--disabled"));
        }
      });
    }
  }

  tournament(); // Update height slider

  function updateHeightSlider() {
    var activeIndex = swiperSlider.activeIndex + 1;
    var activeSlide = myApp.querySelector(".".concat(lotteryName, "-matches .swiper-slide:nth-child(").concat(activeIndex, ")"));
    setTimeout(function () {
      swiperSlider.wrapperEl.style.height = '100%';
      swiperSlider.wrapperEl.style.height = activeSlide.scrollHeight + 'px';
    }, 100);
  }

  if (is_mob) {
    window.addEventListener("orientationchange", function () {
      //re-culc images
      var container = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-js-block-update")));
      container.forEach(function (containerItem) {
        var updatingItem = Array.prototype.slice.call(containerItem.querySelectorAll(".".concat(lotteryName, "-js-mobile-update")));
        setTimeout(function () {
          updatingItem.forEach(function (item) {
            var cloneItem = item.cloneNode(true);
            containerItem.appendChild(cloneItem);
            item.parentNode.removeChild(item);
          });
        }, 100);
      });
      pointsItemChange();
      updateHeightSlider();
    });
  } else {
    window.addEventListener("resize", function () {
      pointsItemChange();
      updateHeightSlider();
    });
  } // change structure


  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

  function pointsItemChange() {
    var second = document.querySelector(".".concat(lotteryName, "-block-points__row--second")),
        secondAll = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-block-points__row--second > div"))),
        secondItem = secondAll[1],
        third = document.querySelector(".".concat(lotteryName, "-block-points__row--third")),
        thirdAll = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-block-points__row--third > div"))),
        thirdItem = thirdAll[0],
        moveItem = document.querySelector(".".concat(lotteryName, "-block-points__item--js-move"));
    setTimeout(function () {
      if (window.innerWidth <= 560) {
        third.insertBefore(moveItem, thirdItem);
      } else {
        insertAfter(moveItem, secondItem);
      }
    }, 100);
  }

  pointsItemChange();

  if (is_explorer || is_mob) {
    // delete video, add picture
    video.parentNode.removeChild(video);
    poster.style.opacity = 1;
  } else {
    // Random levitate elements
    gsap.utils.toArray(".".concat(lotteryName, "-gsap-levitate-el")).forEach(function (item) {
      tweenProperty(item, "x", -30, 30);
      tweenProperty(item, "y", -30, 30);
    }); // Line flicker animation

    var lineFlicker = gsap.timeline();
    lineFlicker.to(".".concat(lotteryName, "-line"), {
      duration: 3,
      autoAlpha: .3,
      ease: RoughEase.ease.config({
        points: 50,
        strength: 2,
        clamp: true
      }),
      repeat: -1,
      yoyo: true
    });
  }
});
