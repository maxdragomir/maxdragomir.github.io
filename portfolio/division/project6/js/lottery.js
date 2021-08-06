"use strict";

// Vars
// =====================================================================================================================
var lotteryName = 'bigHelmet',
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
      // for bonus modal
      points: [50, 100, 200, 500, 1000, 2000, 5000],
      chosenBet: 0,
      // logged state
      isLogged: false,
      btnText: 'принять участие',
      // tournaments
      tournamentsName: '',
      tournamentsNameModal: '',
      btnOff: false,
      // tournaments slider
      AO: false,
      RG: false,
      WIM: false,
      UO: false,
      RAFFLE: false,
      // tournament now
      raffleAO: false,
      raffleRG: false,
      raffleWIM: false,
      raffleUO: false,
      // tournaments coming soon
      comingSoon: false,
      comingSoonAO: false,
      comingSoonRG: false,
      comingSoonWIM: false,
      comingSoonUO: false,
      comingSoonRAFFLE: false,
      // tournaments modal tabs
      tabAO: false,
      tabRG: false,
      tabWIM: false,
      tabUO: false,
      tabRAFFLE: false
    },
    mounted: function mounted() {
      var _this = this;

      // states
      if (hash === "logged") {
        this.isLogged = true;
      } // modals


      if (hash !== '' && hash !== 'logged' && hash !== 'rtl') {
        this.$modal.show('modal-' + hash);
      }

      if (is_explorer) {
        Number.isNaN = Number.isNaN || function (value) {
          return typeof value === 'number' && isNaN(value);
        };

        setTimeout(function () {
          AOS.refreshHard();
        }, 3000);
      } // tournaments


      switch (hash) {
        case 'ao':
          // active tournament
          this.AO = true;
          this.tournamentsName = 'ao';
          this.tournamentsNameModal = 'ao'; // coming soon tournaments

          this.comingSoonRG = true;
          this.comingSoonWIM = true;
          this.comingSoonUO = true;
          this.comingSoonRAFFLE = true;
          setTimeout(function () {
            AOS.refreshHard();
          }, 100);
          break;

        case 'rg':
          // active tournament
          this.RG = true;
          this.tournamentsName = 'rg';
          this.tournamentsNameModal = 'rg'; // raffle tournaments

          this.raffleAO = true; // coming soon tournaments

          this.comingSoonWIM = true;
          this.comingSoonUO = true;
          this.comingSoonRAFFLE = true;
          setTimeout(function () {
            AOS.refreshHard();
          }, 100);
          break;

        case 'wim':
          // active tournament
          this.WIM = true;
          this.tournamentsName = 'wim';
          this.tournamentsNameModal = 'wim'; // raffle tournaments

          this.raffleAO = true;
          this.raffleRG = true; // coming soon tournaments

          this.comingSoonUO = true;
          this.comingSoonRAFFLE = true;
          setTimeout(function () {
            AOS.refreshHard();
          }, 100);
          break;

        case 'uo':
          // active tournament
          this.UO = true;
          this.tournamentsName = 'uo';
          this.tournamentsNameModal = 'uo'; // raffle tournaments

          this.raffleAO = true;
          this.raffleRG = true;
          this.raffleWIM = true; // coming soon tournaments

          this.comingSoonRAFFLE = true;
          setTimeout(function () {
            AOS.refreshHard();
          }, 100);
          break;

        case 'raffle':
          // active tournament
          this.RAFFLE = true;
          this.tournamentsName = 'raffle';
          this.tournamentsNameModal = 'raffle'; // raffle tournaments

          this.raffleAO = true;
          this.raffleRG = true;
          this.raffleWIM = true;
          this.raffleUO = true;
          setTimeout(function () {
            _this.raffleTickets();
          }, 100);
          setTimeout(function () {
            AOS.refreshHard();
          }, 100);
          break;

        default:
          // active tournament
          this.AO = true;
          this.tournamentsName = 'ao';
          this.tournamentsNameModal = 'ao';
          setTimeout(function () {
            AOS.refreshHard();
          }, 100);
          break;
      }
    },
    methods: {
      // modal
      beforeOpen: function beforeOpen() {
        body.classList.add('noScroll');
      },
      opened: function opened(e) {
        if (e.name === 'modal-win4') {
          var chosenNumber = this.getRandom(0, this.points.length - 1);
          this.chosenBet = this.points[chosenNumber];
        }
      },
      closed: function closed() {},
      beforeClose: function beforeClose() {
        body.classList.remove('noScroll');
      },
      // main
      btnTurnOff: function btnTurnOff(e) {
        var _this2 = this;

        this.btnOff = true;

        if (this.tournamentsName === 'raffle') {
          setTimeout(function () {
            _this2.raffleTickets();
          }, 100);
        }

        setTimeout(function () {
          _this2.btnOff = false;
        }, 800);
        setTimeout(function () {
          AOS.refreshHard();
        }, 100);
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
      },
      raffleTickets: function raffleTickets() {
        var items = myApp.querySelectorAll(".".concat(lotteryName, "-js-item-tickets"));
        var allBlocks = myApp.querySelectorAll(".".concat(lotteryName, "-js-block-tickets"));
        items.forEach(function (item) {
          var block = item.querySelector(".".concat(lotteryName, "-js-block-tickets"));
          var button = item.querySelector(".".concat(lotteryName, "-js-button-tickets"));
          button.addEventListener('click', function (e) {
            var target = e.target;

            if (!block.classList.contains("".concat(lotteryName, "-js-block-tickets--is-show")) && target.classList.contains("".concat(lotteryName, "-js-button-tickets"))) {
              items.forEach(function (item) {
                item.classList.remove("".concat(lotteryName, "-js-item-tickets--is-active"));
              });
              allBlocks.forEach(function (item) {
                item.classList.remove("".concat(lotteryName, "-js-block-tickets--is-show"));
              });
              item.classList.add("".concat(lotteryName, "-js-item-tickets--is-active"));
              block.classList.add("".concat(lotteryName, "-js-block-tickets--is-show"));
              document.addEventListener('click', function (e) {
                var target = e.target;
                removeClasses(target);
              });
            } else if (block.classList.contains("".concat(lotteryName, "-js-block-tickets--is-show")) && target.classList.contains("".concat(lotteryName, "-js-button-tickets"))) {
              item.classList.remove("".concat(lotteryName, "-js-item-tickets--is-active"));
              block.classList.remove("".concat(lotteryName, "-js-block-tickets--is-show")); // document.removeEventListener('click', (e) => {
              //   const target = e.target;
              //
              //   removeClasses(target);
              // }, false);
            }
          });

          var removeClasses = function removeClasses(target) {
            if (block.classList.contains("".concat(lotteryName, "-js-block-tickets--is-show")) && !target.classList.contains("".concat(lotteryName, "-js-button-tickets"))) {
              item.classList.remove("".concat(lotteryName, "-js-item-tickets--is-active"));
              block.classList.remove("".concat(lotteryName, "-js-block-tickets--is-show"));
            }
          };
        });
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
      once: false,
      disable: false
    });
  } // Slider


  var sliderEffect;

  if (is_mob) {
    sliderEffect = 'fade';
  } else {
    sliderEffect = 'slide';
  }

  var swiperSlider = new Swiper(".".concat(lotteryName, "-js-slider"), {
    effect: sliderEffect,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
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
    pagination: {
      el: ".".concat(lotteryName, "-slider-raffle__pagination"),
      clickable: true
    },
    navigation: {
      nextEl: ".".concat(lotteryName, "-slider__button--next"),
      prevEl: ".".concat(lotteryName, "-slider__button--prev")
    }
  });
  window.addEventListener("resize", function (event) {
    swiperSlider.update();
  });
  /* Custom Lottery Scripts: */
  // =====================================================================================================================
});