"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Vars
// =====================================================================================================================
var lotteryName = 'ipl',
    html = document.querySelector('html'),
    body = document.querySelector('body'),
    ltr = document.getElementById('ltr'),
    rtl = document.getElementById('rtl'),
    wrapper = document.querySelector(".".concat(lotteryName, "-wrapper")),
    hash = location.search.replace(/\?/, ""),
    hashArray = location.pathname.split('/'),
    pageType = hashArray[hashArray.length - 1].split('.')[0],
    is_rtl = hashArray[hashArray.length - 1].split('.')[0] === 'rtl' || hash === 'rtl',
    direction = false;
document.addEventListener("DOMContentLoaded", function () {
  // Lottery:
  //=====================================================================================================================
  // Browsers and devices
  var is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
      is_Edge = navigator.userAgent.indexOf("Edge") > -1,
      is_chrome = !!window.chrome && !is_opera && !is_Edge,
      is_explorer = typeof document !== "undefined" && !!document.documentMode && !is_Edge,
      is_firefox = typeof window.InstallTrigger !== "undefined",
      is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      is_mob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent); // RTL
  // =====================================================================================================================

  if (is_rtl) {
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
      // for bonus modal
      points: [50, 100, 1000, 3000, 5000],
      chosenBet: 0,
      // logged state
      isLogged: false,
      btnText: 'принять участие'
    },
    mounted: function mounted() {
      // states
      if (hash === "logged") {
        this.isLogged = true;
      } // modals


      if (hash !== '' && hash !== 'logged' && hash !== 'rtl') {
        this.$modal.show('modal-' + hash);
      }
    },
    methods: {
      // modal
      beforeOpen: function beforeOpen() {
        body.classList.add('noScroll');
      },
      opened: function opened(e) {
        if (e.name === 'modal-win') {
          var chosenNumber = this.getRandom(0, this.points.length - 1);
          this.chosenBet = this.points[chosenNumber];
        }
      },
      closed: function closed() {},
      beforeClose: function beforeClose() {
        body.classList.remove('noScroll');
      },
      // states
      mainBtn: function mainBtn() {
        if (!this.isLogged) {
          this.$modal.show('modal-enter');
        } else {
          this.btnText = 'сделать ставку';
        }
      },
      // helpers
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
      var buttonsInBlock = Array.prototype.slice.call(item.querySelectorAll(".".concat(lotteryName, "-demo__wrapper button"))),
          linkInBlock = Array.prototype.slice.call(item.querySelectorAll(".".concat(lotteryName, "-demo__wrapper a")));

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
  // =====================================================================================================================


  if (is_mob) {
    AOS.init({
      disable: true
    });
  } else {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true
    });
  } // Random levitate elements


  function tweenProperty(target, prop, min, max) {
    var _gsap$to;

    var randomDur = gsap.utils.random(5, 7, 2.5);
    var randomDelay = gsap.utils.random(0.2, 1, 0.5);
    gsap.to(target, (_gsap$to = {}, _defineProperty(_gsap$to, prop, gsap.utils.random(min, max) + 'em'), _defineProperty(_gsap$to, "duration", randomDur), _defineProperty(_gsap$to, "delay", randomDelay), _defineProperty(_gsap$to, "ease", 'none'), _defineProperty(_gsap$to, "yoyo", true), _defineProperty(_gsap$to, "force3D", true), _defineProperty(_gsap$to, "rotate", 0.01), _defineProperty(_gsap$to, "skewX", 0.01), _defineProperty(_gsap$to, "onComplete", tweenProperty), _defineProperty(_gsap$to, "onCompleteParams", [target, prop, min, max]), _gsap$to));
  } // Scroll to elem


  function useScrollTo(elem, duration) {
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
  // toggle accordion


  var accordion = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-js-accordion")));
  accordion.forEach(function (item) {
    var btnToggle = item.querySelector(".".concat(lotteryName, "-js-btn-toggle")),
        headerToggle = item.querySelector(".".concat(lotteryName, "-js-header-toggle")),
        bodyToggle = item.querySelector(".".concat(lotteryName, "-js-body-toggle"));
    headerToggle.addEventListener('click', function () {
      setTimeout(function () {
        btnToggle.classList.toggle("".concat(lotteryName, "-rules__button--is-open"));
        bodyToggle.classList.toggle("".concat(lotteryName, "-rules__body--is-open"));
        AOS.refresh();
      }, 50);
    });
  });

  if (!is_firefox && !is_explorer && !is_rtl && !is_mob) {
    // Random levitate elements
    gsap.utils.toArray(".".concat(lotteryName, "-gsap-levitate-el")).forEach(function (item) {
      tweenProperty(item, "x", -1, 1);
      tweenProperty(item, "y", -1, 1);
    });
  } // Scroll to element


  useScrollTo(".".concat(lotteryName, "-section--events"), 1000);
});