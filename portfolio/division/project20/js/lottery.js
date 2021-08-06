"use strict";

// Vars
// =====================================================================================================================
var lotteryName = 'battleCoupons',
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
var is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
    is_Edge = navigator.userAgent.indexOf("Edge") > -1,
    is_chrome = !!window.chrome && !is_opera && !is_Edge,
    is_explorer = typeof document !== "undefined" && !!document.documentMode && !is_Edge,
    is_firefox = typeof window.InstallTrigger !== "undefined",
    is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    is_mob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
document.addEventListener("DOMContentLoaded", function () {
  // Lottery:
  // =====================================================================================================================
  // RTL
  if (is_rtl || hash === 'rtl') {
    ltr.parentNode.removeChild(ltr);
    direction = true;
  } else {
    rtl.parentNode.removeChild(rtl);
  }

  Vue.use(window["vue-js-modal"]["default"]);
  Vue.component(VueCountdown.name, VueCountdown); // Vue

  Vue.config.devtools = true;
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
        document.querySelector('body').style.overflowY = 'hidden';
      },
      opened: function opened(e) {
        if (e.name === 'modal-win') {
          var chosenNumber = this.getRandom(0, this.points.length - 1);
          this.chosenBet = this.points[chosenNumber];
        }
      },
      closed: function closed() {},
      beforeClose: function beforeClose() {
        document.querySelector('body').style.overflowY = 'auto';
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
  var myApp = app.$el; // Demo Panel

  var demoPanel = document.querySelector(".".concat(lotteryName, "-demo")),
      svgOpen = document.querySelector(".".concat(lotteryName, "-demo__lock-icon--open")),
      svgClose = document.querySelector(".".concat(lotteryName, "-demo__lock-icon--close")),
      svgLock = document.querySelector(".".concat(lotteryName, "-demo__lock")),
      switchButton = document.querySelector(".".concat(lotteryName, "-demo__switch-button")),
      block = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-demo__block"))),
      infoBtn = document.querySelector(".".concat(lotteryName, "-demo__name-info")),
      infoWrapper = document.querySelector(".".concat(lotteryName, "-demo__block-keys .").concat(lotteryName, "-demo__wrapper")),
      infoBLock = document.querySelector(".".concat(lotteryName, "-demo__block-keys")),
      toggleSideCheckbox = document.querySelector(".".concat(lotteryName, "-demo__input--side")),
      toggleLoadCheckbox = document.querySelector(".".concat(lotteryName, "-demo__input--load")),
      settingsBtn = document.querySelector(".".concat(lotteryName, "-demo__settings")),
      settingsWrapper = document.querySelector(".".concat(lotteryName, "-demo__block-settings .").concat(lotteryName, "-demo__wrapper")),
      settingsBLock = document.querySelector(".".concat(lotteryName, "-demo__block-settings")),
      buttonStates = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-demo__block-states button"))),
      pageButtons = Array.prototype.slice.call(document.querySelectorAll(".".concat(lotteryName, "-demo__block-pages a"))),
      countPage = 1,
      countStates = 1;

  if (demoPanel) {
    // default demoPanel
    svgClose.style.display = "none";
    checkPanelSide();
    checkPanelLoad();
    var header;

    if (is_mob) {
      header = document.querySelector('.header');
    } else {
      header = document.getElementById('fTop');
    }

    if (header) {
      var headerHeight = header.offsetHeight;
      demoPanel.style.top = "".concat(headerHeight, "px");
      demoPanel.style.height = "calc(100vh - ".concat(headerHeight, "px)");
    } // btn switch


    switchButton.addEventListener('click', function () {
      toggleSideBar();
    }); // delete empty block

    block.forEach(function (item) {
      var buttonsInBlock = Array.prototype.slice.call(item.querySelectorAll(".".concat(lotteryName, "-demo__wrapper button"))),
          linkInBlock = Array.prototype.slice.call(item.querySelectorAll(".".concat(lotteryName, "-demo__wrapper a")));

      if (!item.classList.contains("".concat(lotteryName, "-demo__block-keys")) && !item.classList.contains("".concat(lotteryName, "-demo__block-settings"))) {
        if (!linkInBlock.length && !buttonsInBlock.length) {
          item.parentNode.removeChild(item);
        }
      }
    }); // toggle load

    toggleLoadCheckbox.addEventListener('click', function () {
      if (this.checked) {
        localStorage.load = 'yes';
      } else {
        localStorage.load = 'no';
      }
    }); // toggle side

    toggleSideCheckbox.addEventListener('click', function () {
      if (this.checked) {
        localStorage.side = 'right';
      } else {
        localStorage.side = 'left';
      }

      checkPanelSide();
    }); // info btn

    infoBtn.addEventListener('click', function () {
      infoBLock.classList.toggle("".concat(lotteryName, "-demo__block-keys--is-show"));
    }); //settings btn

    settingsBtn.addEventListener('click', function () {
      settingsBLock.classList.toggle("".concat(lotteryName, "-demo__block-settings--is-show"));
    }); // fix sidebar

    svgLock.addEventListener('click', function () {
      toggleSideBar();
    }); // page links

    pageButtons.forEach(function (item) {
      var text = item.querySelector('span').innerText.toLowerCase();
      addKeyLink(text, countPage);
      countPage++;
    }); // btn states

    buttonStates.forEach(function (item) {
      item.addEventListener('click', function () {
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
        toggleSideBar();
      }

      if (e.shiftKey && keyCode === 'KeyI') {
        infoBLock.classList.toggle("".concat(lotteryName, "-demo__block-keys--is-show"));
      }

      if (e.shiftKey && keyCode === 'KeyS') {
        settingsBLock.classList.toggle("".concat(lotteryName, "-demo__block-settings--is-show"));
      }
    });
  }

  function checkPanelLoad() {
    if (!localStorage.getItem('load') || localStorage.getItem('load') === 'no') {
      toggleLoadCheckbox.checked = false; // demoPanel.classList.add(`${lotteryName}-demo--is-show`);
      // setTimeout(function () {
      //   demoPanel.classList.remove(`${lotteryName}-demo--is-show`);
      // if(hash !== '') {
      //   toggleSideBar();
      // }
      // }, 1000);
    } else {
      toggleLoadCheckbox.checked = true;
      toggleSideBar();
    }
  }

  function checkPanelSide() {
    if (!localStorage.getItem('side') || localStorage.getItem('side') === 'right') {
      demoPanel.classList.remove("".concat(lotteryName, "-demo--reverse"));
      toggleSideCheckbox.checked = true;
    } else {
      demoPanel.classList.add("".concat(lotteryName, "-demo--reverse"));
      toggleSideCheckbox.checked = false;
    }
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

  function toggleSideBar() {
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


  if (is_mob || is_rtl) {
    AOS.init({
      disable: true
    });
  } else {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true
    });
  } // Add class with interval:


  var swapClass = function swapClass(el, intervalTime, activeClass, oneItem) {
    var imageCount = 0;
    setInterval(function () {
      if (oneItem) {
        if (el[imageCount].classList.contains(activeClass)) {
          el.forEach(function (item) {
            item.classList.remove(activeClass);
          });
        } else {
          el[imageCount].classList.add(activeClass);
        }
      } else {
        el.forEach(function (item) {
          item.classList.remove(activeClass);
        });
        el[imageCount].classList.add(activeClass);

        if (imageCount < el.length - 1) {
          imageCount++;
        } else {
          imageCount = 0;
        }
      }
    }, intervalTime);
  }; // setInterval(function() {
  //   animate.removeClass('show').filter(animate[imageCount]).toggleClass('show');
  //   imageCount < animate.length - 1 ? imageCount++ : imageCount = 0;
  // }, 5000);
  // Slider thumbs


  var swiperNav = new Swiper(".".concat(lotteryName, "-js-slider-nav"), {
    direction: 'horizontal',
    slidesPerView: 1,
    grabCursor: true,
    simulateTouch: true,
    shortSwipes: false,
    longSwipes: true,
    longSwipesRatio: 0.1,
    longSwipesMs: 50,
    watchSlidesVisibility: true,
    effect: 'slide',
    breakpoints: {
      561: {
        slidesPerView: 3
      }
    }
  });
  var swiperBody = new Swiper(".".concat(lotteryName, "-js-slider-body"), {
    direction: 'horizontal',
    slidesPerView: 1,
    grabCursor: false,
    simulateTouch: true,
    shortSwipes: false,
    longSwipes: true,
    longSwipesRatio: 0.1,
    longSwipesMs: 50,
    effect: 'slide',
    thumbs: {
      swiper: swiperNav
    },
    navigation: {
      nextEl: ".js-swiper-next",
      prevEl: ".js-swiper-prev"
    },
    on: {
      // slideChangeTransitionStart: function (swiper) {
      // let activeIndex = this.activeIndex + 1;
      //
      // let activeSlide = document.querySelector(`.${lotteryName}-js-slider-body .swiper-slide:nth-child(${activeIndex})`);
      //
      // swiper.el.style.height = activeSlide.scrollHeight + 'px';
      // },
      slideChange: function slideChange(swiper) {
        var activeIndex = this.activeIndex + 1;
        var activeSlide = document.querySelector(".".concat(lotteryName, "-js-slider-nav .swiper-slide:nth-child(").concat(activeIndex, ")"));
        var nextSlide = document.querySelector(".".concat(lotteryName, "-js-slider-nav .swiper-slide:nth-child(").concat(activeIndex + 1, ")"));
        var prevSlide = document.querySelector(".".concat(lotteryName, "-js-slider-nav .swiper-slide:nth-child(").concat(activeIndex - 1, ")"));

        if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
          this.thumbs.swiper.slideNext();
        } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
          this.thumbs.swiper.slidePrev();
        } // swiper.el.style.height = activeSlide.scrollHeight + 'px';


        setTimeout(function () {
          AOS.refresh();
        }, 500);
      }
    }
  });
  var swiperNav2 = new Swiper(".".concat(lotteryName, "-js-slider-nav2"), {
    direction: 'horizontal',
    slidesPerView: 1,
    grabCursor: true,
    simulateTouch: true,
    shortSwipes: false,
    longSwipes: true,
    longSwipesRatio: 0.1,
    longSwipesMs: 50,
    watchSlidesVisibility: true,
    effect: 'slide',
    breakpoints: {
      561: {
        slidesPerView: 3
      }
    }
  });
  var swiperBody2 = new Swiper(".".concat(lotteryName, "-js-slider-body2"), {
    direction: 'horizontal',
    slidesPerView: 1,
    grabCursor: false,
    simulateTouch: true,
    shortSwipes: false,
    longSwipes: true,
    longSwipesRatio: 0.1,
    longSwipesMs: 50,
    effect: 'slide',
    thumbs: {
      swiper: swiperNav2
    },
    navigation: {
      nextEl: ".js-swiper-next2",
      prevEl: ".js-swiper-prev2"
    },
    on: {
      // slideChangeTransitionStart: function (swiper) {
      // let activeIndex = this.activeIndex + 1;
      //
      // let activeSlide = document.querySelector(`.${lotteryName}-js-slider-body2 .swiper-slide:nth-child(${activeIndex})`);
      // swiper.el.style.height = activeSlide.scrollHeight + 'px';
      // },
      slideChange: function slideChange(swiper) {
        var activeIndex = this.activeIndex + 1;
        var activeSlide = document.querySelector(".".concat(lotteryName, "-js-slider-nav2 .swiper-slide:nth-child(").concat(activeIndex, ")"));
        var nextSlide = document.querySelector(".".concat(lotteryName, "-js-slider-nav2 .swiper-slide:nth-child(").concat(activeIndex + 1, ")"));
        var prevSlide = document.querySelector(".".concat(lotteryName, "-js-slider-nav2 .swiper-slide:nth-child(").concat(activeIndex - 1, ")"));

        if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
          this.thumbs.swiper.slideNext();
        } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
          this.thumbs.swiper.slidePrev();
        } // swiper.el.style.height = activeSlide.scrollHeight + 'px';


        setTimeout(function () {
          AOS.refresh();
        }, 500);
      }
    }
  });
  window.addEventListener("resize", function () {
    swiperNav.update();
    swiperBody.update();
    swiperNav2.update();
    swiperBody2.update();
  }); // Accordion

  function accordion(element, nameBlock) {
    var accordion = Array.prototype.slice.call(myApp.querySelectorAll(element));
    accordion.forEach(function (item) {
      var btnToggle = item.querySelector(".".concat(lotteryName, "-js-btn-toggle")),
          headerToggle = item.querySelector(".".concat(lotteryName, "-js-header-toggle")),
          bodyToggle = item.querySelector(".".concat(lotteryName, "-js-body-toggle"));
      headerToggle.addEventListener('click', function () {
        setTimeout(function () {
          headerToggle.classList.toggle("".concat(lotteryName, "-").concat(nameBlock, "__header--is-open"));
          btnToggle.classList.toggle("".concat(lotteryName, "-").concat(nameBlock, "__button--is-open"));
          bodyToggle.classList.toggle("".concat(lotteryName, "-").concat(nameBlock, "__body--is-open"));

          if (!is_mob) {
            AOS.refresh();
          }
        }, 50);
      });
    });
  }
  /* Custom Lottery Scripts: */
  // =====================================================================================================================
  // class swapper


  if (!is_explorer) {
    var elementsSwap = myApp.querySelectorAll(".".concat(lotteryName, "-js-classSwapper"));
    swapClass(elementsSwap, 3000, "".concat(lotteryName, "-images--flip"), true);
  } // toggle accordion


  accordion(".".concat(lotteryName, "-js-accordion"), 'rules');

  if (is_mob) {
    window.addEventListener("orientationchange", function () {
      changeStructure();
    });
  } else {
    window.addEventListener("resize", function () {
      changeStructure();
    });
  }

  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

  function changeStructure() {
    var nodeBeforePaste = myApp.querySelector(".".concat(lotteryName, "-js-insert-after"));
    var nodeSection = myApp.querySelector(".".concat(lotteryName, "-js-section"));
    var nodeDecor = myApp.querySelector(".".concat(lotteryName, "-js-decor"));
    var nodeMain = myApp.querySelector(".".concat(lotteryName, "-js-main"));
    var nodeInfo = myApp.querySelector(".".concat(lotteryName, "-js-info"));
    var nodeSwapper = myApp.querySelector(".".concat(lotteryName, "-js-classSwapper"));
    setTimeout(function () {
      if (window.innerWidth <= 560) {
        insertAfter(nodeSwapper, nodeBeforePaste);
        insertAfter(nodeDecor, nodeBeforePaste);
      } else {
        nodeSection.insertBefore(nodeDecor, nodeMain);
        insertAfter(nodeSwapper, nodeInfo);
      }
    }, 100);
  }

  changeStructure();
});