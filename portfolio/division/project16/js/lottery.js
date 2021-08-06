"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Vars
// =====================================================================================================================
var lotteryName = 'easyGames',
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
      mobile: is_mob,
      points: [50, 100, 200, 500, 1000, 2000, 5000],
      wheels: [5, 10, 15],
      chosenPoint: 0,
      chosenWheel: 0,
      isLogged: false,
      btnText: 'принять участие'
    },
    mounted: function mounted() {
      if (hash === "logged") {
        this.isLogged = true;
        this.btnText = 'сделать ставку';
      }

      if (hash !== '' && hash !== 'logged' && hash !== 'rtl') {
        this.$modal.show('modal-' + hash);
      }
    },
    methods: {
      beforeOpen: function beforeOpen() {
        body.classList.add('noScroll');
      },
      opened: function opened(e) {
        if (e.name === 'modal-win5') {
          var chosenPointNumber = this.getRandom(0, this.points.length - 1);
          this.chosenPoint = this.points[chosenPointNumber];
        }

        if (e.name === 'modal-win4') {
          var chosenWheelNumber = this.getRandom(0, this.wheels.length - 1);
          this.chosenWheel = this.wheels[chosenWheelNumber];
        }
      },
      closed: function closed() {},
      beforeClose: function beforeClose() {
        body.classList.remove('noScroll');
      },
      mainBtn: function mainBtn() {
        if (!this.isLogged) {
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
  var myApp = app.$el;
  /* Demo Panel: */
  // =====================================================================================================================

  var demoPanel = document.querySelector(".".concat(lotteryName, "-demo")),
      svgOpen = document.querySelector(".".concat(lotteryName, "-demo__lock-icon--open")),
      svgClose = document.querySelector(".".concat(lotteryName, "-demo__lock-icon--close")),
      svgLock = document.querySelector(".".concat(lotteryName, "-demo__lock")),
      switchButton = document.querySelector(".".concat(lotteryName, "-demo__switch-button")),
      block = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-demo__block"))),
      infoBtn = document.querySelector(".".concat(lotteryName, "-demo__name-info")),
      infoWrapper = document.querySelector(".".concat(lotteryName, "-demo__block-keys .").concat(lotteryName, "-demo__wrapper")),
      infoBLock = document.querySelector(".".concat(lotteryName, "-demo__block-keys")),
      buttonStates = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-demo__block-states button"))),
      pageButtons = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-demo__block-pages a"))),
      countPage = 1,
      countStates = 1;

  if (demoPanel) {
    // default demoPanel
    svgClose.style.display = "none";
    var header = null;

    if (is_mob) {
      header = document.querySelector('.header');
    } else {
      header = document.getElementById('fTop');
    }

    if (header) {
      var hederHeight = header.offsetHeight;
      demoPanel.style.top = "".concat(hederHeight, "px");
      demoPanel.style.height = "calc(100vh - ".concat(hederHeight, "px)");
    }

    setTimeout(function () {
      demoPanel.classList.remove("".concat(lotteryName, "-demo--is-show")); // if(hash !== '') {
      //   fixSideBar();
      // }
    }, 1000); // btn switch

    switchButton.addEventListener('click', function (e) {
      fixSideBar();
    }); // delete empty block

    block.forEach(function (item) {
      var buttonsInBlock = item.querySelectorAll(".".concat(lotteryName, "-demo__wrapper button")),
          linkInBlock = item.querySelectorAll(".".concat(lotteryName, "-demo__wrapper a"));

      if (!item.classList.contains("".concat(lotteryName, "-demo__block-keys"))) {
        if (!linkInBlock.length && !buttonsInBlock.length) {
          item.parentNode.removeChild(item);
        }
      }
    }); // info btn

    infoBtn.addEventListener('click', function (e) {
      infoBLock.classList.toggle("".concat(lotteryName, "-demo__block-keys--is-show"));
    }); // fix sidebar

    svgLock.addEventListener('click', function () {
      fixSideBar();
    }); // page links

    pageButtons.forEach(function (item) {
      var text = item.querySelector('span').innerText.toLowerCase();
      addKeyLink(text, countPage);
      countPage++;
    }); // btn states

    buttonStates.forEach(function (item) {
      item.addEventListener('click', function (e) {
        var state = item.getAttribute('title');

        if (location.search === '?' + state) {
          location.href = location.origin + location.pathname;
        } else {
          location.search = "?" + state;
        }
      });
      var text = item.querySelector('span').innerText.toLowerCase();
      addKeyState(text, countStates);
      countStates++;
    }); // key sidebar

    document.addEventListener('keydown', function (e) {
      var keyCode = e.code;

      if (keyCode === 'Backquote' && e.shiftKey) {
        fixSideBar();
      }

      if (e.shiftKey && keyCode === 'KeyI') {
        infoBLock.classList.toggle("".concat(lotteryName, "-demo__block-keys--is-show"));
      }
    });
  }

  function addKeyLink(pageName, keyNum) {
    var pBlock = document.createElement('p'),
        spanKeyName = document.createElement('span'),
        spanKeyDescription = document.createElement('span');
    pBlock.classList.add("".concat(lotteryName, "-demo__key"));
    pBlock.classList.add("".concat(lotteryName, "-demo__key--page"));
    spanKeyName.classList.add("".concat(lotteryName, "-demo__key-text"));
    spanKeyName.innerText = "shift + ".concat(keyNum);
    spanKeyDescription.classList.add("".concat(lotteryName, "-demo__key-text"));
    spanKeyDescription.classList.add("".concat(lotteryName, "-demo__key-text--description"));
    spanKeyDescription.innerText = "go to ".concat(pageName, " page");
    pBlock.appendChild(spanKeyName);
    pBlock.appendChild(spanKeyDescription);
    infoWrapper.appendChild(pBlock);
    document.addEventListener('keydown', function (e) {
      var keyCode = e.code;

      if (e.shiftKey && keyCode === "Digit".concat(keyNum)) {
        removeParam();

        if (location.hostname === 'localhost') {
          location.pathname = "".concat(pageName, ".html");
        } else {
          if (pageName === 'lottery') {
            location.pathname = hashArray[1] + "/index.php";
          } else {
            location.pathname = hashArray[1] + "/".concat(pageName, ".php");
          }
        }
      }
    });
  }

  function addKeyState(stateName, keyNum) {
    var pBlock = document.createElement('p'),
        spanKeyName = document.createElement('span'),
        spanKeyDescription = document.createElement('span');
    pBlock.classList.add("".concat(lotteryName, "-demo__key"));
    pBlock.classList.add("".concat(lotteryName, "-demo__key--state"));
    spanKeyName.classList.add("".concat(lotteryName, "-demo__key-text"));
    spanKeyName.innerText = "alt + ".concat(keyNum);
    spanKeyDescription.classList.add("".concat(lotteryName, "-demo__key-text"));
    spanKeyDescription.classList.add("".concat(lotteryName, "-demo__key-text--description"));
    spanKeyDescription.innerText = "active ".concat(stateName, " state");
    pBlock.appendChild(spanKeyName);
    pBlock.appendChild(spanKeyDescription);
    infoWrapper.appendChild(pBlock);
    document.addEventListener('keydown', function (e) {
      var keyCode = e.code;

      if (e.altKey && keyCode === "Digit".concat(keyNum)) {
        if (location.search === "?".concat(stateName)) {
          location.href = location.origin + location.pathname;
        } else {
          location.search = "?".concat(stateName);
        }
      }
    });
  }

  function fixSideBar() {
    demoPanel.classList.toggle("".concat(lotteryName, "-demo--is-fixed"));
    switchButton.classList.toggle("".concat(lotteryName, "-demo__switch-button--is-active"));
    svgCheck();
  }

  function removeParam() {
    var query = window.location.search.substring(1);

    if (query.length) {
      if (window.history !== undefined && window.history.pushState !== undefined) {
        window.history.pushState({}, document.title, window.location.pathname);
      }
    }
  }

  function svgCheck() {
    if (demoPanel.classList.contains("".concat(lotteryName, "-demo--is-fixed"))) {
      svgOpen.style.display = "none";
      svgClose.style.display = "block";
    } else {
      svgOpen.style.display = "block";
      svgClose.style.display = "none";
    }
  } // AOS


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
  } // Slider


  var swiperSlider = new Swiper(".".concat(lotteryName, "-js-slider"), {
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
      el: ".".concat(lotteryName, "-slider-wheel__pagination"),
      clickable: true
    },
    navigation: {
      nextEl: ".".concat(lotteryName, "-slider-wheel__control--next"),
      prevEl: ".".concat(lotteryName, "-slider-wheel__control--prev")
    }
  }); // Random levitate elements

  function tweenProperty(target, prop, min, max) {
    var _gsap$to;

    var randomDur = gsap.utils.random(5, 7, 3.5);
    var randomDelay = gsap.utils.random(0.2, 1, 0.5);
    gsap.to(target, (_gsap$to = {}, _defineProperty(_gsap$to, prop, gsap.utils.random(min, max) + 'em'), _defineProperty(_gsap$to, "duration", randomDur), _defineProperty(_gsap$to, "delay", randomDelay), _defineProperty(_gsap$to, "ease", 'none'), _defineProperty(_gsap$to, "yoyo", true), _defineProperty(_gsap$to, "force3D", true), _defineProperty(_gsap$to, "rotate", 0.01), _defineProperty(_gsap$to, "skewX", 0.01), _defineProperty(_gsap$to, "onComplete", tweenProperty), _defineProperty(_gsap$to, "onCompleteParams", [target, prop, min, max]), _gsap$to));
  }
  /* Custom Lottery Scripts: */
  // =====================================================================================================================


  if (!is_explorer) {
    if (!is_mob) {
      // Random levitate elements
      gsap.utils.toArray(".".concat(lotteryName, "-gsap-levitate-el")).forEach(function (item) {
        tweenProperty(item, "x", -2, 2);
        tweenProperty(item, "y", -2, 2);
      });
    } else {
      myApp.querySelector(".".concat(lotteryName, "-steps-figure")).classList.add('aos-animate');
      myApp.querySelector(".".concat(lotteryName, "-sum__wrapper")).classList.add('aos-animate');
    }
  } else {
    myApp.querySelector(".".concat(lotteryName, "-steps-figure")).classList.add('aos-animate');
    myApp.querySelector(".".concat(lotteryName, "-sum__wrapper")).classList.add('aos-animate');
  }

  if (is_mob) {
    window.addEventListener("orientationchange", function () {
      pointsItemChange();
    });
  } else {
    window.addEventListener("resize", function () {
      pointsItemChange();
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
      if (window.innerWidth <= 1000) {
        third.insertBefore(moveItem, thirdItem);
      } else {
        insertAfter(moveItem, secondItem);
      }
    }, 100);
  }

  pointsItemChange();
});