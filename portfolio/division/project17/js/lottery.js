"use strict";

// Vars
// =====================================================================================================================
var lotteryName = 'new-year',
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
      // for bonus modal
      points: [50, 100, 1000, 3000, 5000],
      chosenName: 0,
      // raffle state
      raffleEnd: false,
      // logged state
      isLogged: false,
      btnText: 'принять участие',
      // boxes
      countPlay: 1,
      boxNumber: 0,
      boxOne: false,
      boxTwo: false,
      boxThree: false,
      lightBox: false,
      // tooltips
      showToolTip: false,
      tooltipAccept: false,
      tooltipOpen: false,
      tooltipBet: false,
      newBet: false,
      actionText: false,
      isAccept: false,
      openBox: false,
      isHover: false,
      isChoosed: false,
      winModal: false,
      getRandModal: undefined,
      winnerPoints: [50, 100],
      // add test tickets
      ticketsCounter: 0,
      needTickets: 10,
      newTicket: 10,
      nameClass: undefined,
      // add second test tickets
      superTickets: 0,
      needSuperTickets: 20,
      newSuperTickets: 20
    },
    mounted: function mounted() {
      // states
      if (hash === "logged") {
        this.isLogged = true;
      }

      if (hash === "raffle") {
        this.raffleEnd = true;
      } // modals


      if (hash !== '' && hash !== 'logged' && hash !== 'raffle' && hash !== 'rtl') {
        this.$modal.show('modal-' + hash);
      } // set 0 test tickets


      this.nameClass = "".concat(lotteryName, "-nav__progress--type0");
    },
    methods: {
      // modal
      beforeOpen: function beforeOpen() {
        body.classList.add('noScroll');
      },
      opened: function opened(e) {
        var _this = this;

        if (e.name === 'modal-win2') {
          var chosenNumber = this.getRandom(0, this.points.length - 1);
          this.chosenName = this.points[chosenNumber];
        }

        if (this.winModal) {
          if (this.getRandModal === 2) {
            var _chosenNumber = this.getRandom(0, this.winnerPoints.length - 1);

            this.chosenName = this.winnerPoints[_chosenNumber];
          }
        }

        if (e.name === 'modal-tickets') {
          // Slider
          var swiperModalNav = new Swiper(".".concat(lotteryName, "-js-modal-slider-nav"), {
            effect: 'slide',
            direction: 'horizontal',
            slidesPerView: 4,
            initialSlide: 0,
            grabCursor: true,
            simulateTouch: true,
            shortSwipes: false,
            longSwipes: true,
            longSwipesRatio: 0.1,
            longSwipesMs: 50,
            watchSlidesVisibility: true
          });
          var swiperModalBody = new Swiper(".".concat(lotteryName, "-js-modal-slider-body"), {
            effect: 'slide',
            direction: 'horizontal',
            slidesPerView: 1,
            initialSlide: 0,
            autoHeight: false,
            grabCursor: false,
            simulateTouch: true,
            shortSwipes: false,
            longSwipes: true,
            longSwipesRatio: 0.1,
            longSwipesMs: 50,
            thumbs: {
              swiper: swiperModalNav
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
            on: {
              slideChange: function slideChange(swiper) {
                var activeIndex = this.activeIndex + 1;
                var activeSlide = myApp.querySelector(".".concat(lotteryName, "-nav .swiper-slide:nth-child(").concat(activeIndex, ")"));
                var nextSlide = myApp.querySelector(".".concat(lotteryName, "-nav .swiper-slide:nth-child(").concat(activeIndex + 1, ")"));
                var prevSlide = myApp.querySelector(".".concat(lotteryName, "-nav .swiper-slide:nth-child(").concat(activeIndex - 1, ")"));

                if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
                  this.thumbs.swiper.slideNext();
                } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
                  this.thumbs.swiper.slidePrev();
                }
              }
            }
          });

          var _disableInactiveDates = function _disableInactiveDates() {
            var allNavs = _this.$el.querySelectorAll(".".concat(lotteryName, "-modal-tickets__item")),
                allTabsLength = _this.$el.querySelectorAll(".".concat(lotteryName, "-modal-tickets__tab")).length - 1;

            allNavs.forEach(function (itemNav, index) {
              if (index > allTabsLength) {
                itemNav.classList.add("".concat(lotteryName, "-modal-tickets__item--disabled"));
              }
            });
          };

          if (!this.raffleEnd) {
            swiperModalBody.slides[1].parentNode.removeChild(swiperModalBody.slides[1]);
            swiperModalNav.update();
            swiperModalBody.update();
          }

          _disableInactiveDates();
        }
      },
      closed: function closed() {
        if (this.winModal) {
          this.openBox = false;
          this.isChoosed = false;
          this.boxNumber = 0;
          this.winModal = false;

          if (this.countPlay <= 0) {
            this.newBet = true;
            this.actionText = false;
            this.btnText = "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443";
          }
        }
      },
      beforeClose: function beforeClose() {
        body.classList.remove('noScroll');
      },
      // open box
      mainBtn: function mainBtn() {
        var _this2 = this;

        if (!this.isLogged) {
          this.$modal.show('modal-enter');
        } else {
          this.showToolTip = false;
          setTimeout(function () {
            _this2.tooltipBet = false;
            _this2.tooltipOpen = false;
            _this2.tooltipAccept = false;
          }, 300);

          if (this.isAccept) {
            this.newBet = false;
            this.openBox = true;
            this.actionText = true;
            setTimeout(function () {
              _this2.lightBox = true;
            }, 200);
            setTimeout(function () {
              _this2.lightBox = false;
            }, 700);

            if (this.countPlay > 0) {
              this.countPlay--;
              this.btnText = "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u043A (".concat(this.countPlay, ")");
            } else {
              this.openBox = false;
              this.countPlay = 2;
              this.btnText = "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u043A (".concat(this.countPlay, ")");
            }
          } else {
            this.isAccept = true;
            this.btnText = "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u043A (".concat(this.countPlay, ")");
          }
        }
      },
      chooseBoxOne: function chooseBoxOne() {
        this.checker();

        if (this.openBox) {
          this.boxNumber = 1;
          this.choose();
        }
      },
      chooseBoxTwo: function chooseBoxTwo() {
        this.checker();

        if (this.openBox) {
          this.boxNumber = 2;
          this.choose();
        }
      },
      chooseBoxThree: function chooseBoxThree() {
        this.checker();

        if (this.openBox) {
          this.boxNumber = 3;
          this.choose();
        }
      },
      checker: function checker() {
        if (!this.isLogged) {
          this.$modal.show("modal-enter");
        }

        if (!this.isAccept && this.isLogged) {
          this.showToolTip = true;
          this.tooltipAccept = true;
        }

        if (this.newBet && !this.openBox) {
          this.showToolTip = true;
          this.tooltipOpen = true;
        }

        if (this.isAccept && this.isLogged && !this.openBox) {
          this.showToolTip = true;
          this.tooltipBet = true;
        }
      },
      choose: function choose() {
        var _this3 = this;

        if (this.openBox) {
          this.isChoosed = true;
          setTimeout(function () {
            _this3.getRandModal = _this3.getRandom(1, 2);

            _this3.$modal.show("modal-win".concat(_this3.getRandModal));

            _this3.winModal = true;
          }, 1000);
        }
      },
      // test tickets
      addTickets: function addTickets() {
        this.ticketsCounter++;

        if (this.ticketsCounter > 10) {
          this.ticketsCounter = 0;
        }

        this.newTicket = this.needTickets - this.ticketsCounter;
        return this.nameClass = "".concat(lotteryName, "-nav__progress--type").concat(this.ticketsCounter);
      },
      addTicketsSuper: function addTicketsSuper() {
        var tickets = this.$el.querySelectorAll(".".concat(lotteryName, "-progress-bar__image"));
        var ticket = tickets[this.superTickets];
        this.superTickets++;

        if (this.superTickets > 20) {
          this.superTickets = 0;
          tickets.forEach(function (item) {
            item.classList.remove("".concat(lotteryName, "-progress-bar__image--is-show"));
          });
        } else {
          ticket.classList.add("".concat(lotteryName, "-progress-bar__image--is-show"));
        }

        this.newSuperTickets = this.needSuperTickets - this.superTickets;
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
      block = document.querySelectorAll(".".concat(lotteryName, "-demo__block")),
      infoBtn = document.querySelector(".".concat(lotteryName, "-demo__name-info")),
      infoWrapper = document.querySelector(".".concat(lotteryName, "-demo__block-keys .").concat(lotteryName, "-demo__wrapper")),
      infoBLock = document.querySelector(".".concat(lotteryName, "-demo__block-keys")),
      buttonStates = document.querySelectorAll(".".concat(lotteryName, "-demo__block-states button")),
      pageButtons = document.querySelectorAll(".".concat(lotteryName, "-demo__block-pages a")),
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


  if (is_mob || is_explorer) {
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


  var swiperNav = new Swiper(".".concat(lotteryName, "-js-slider-nav"), {
    effect: 'slide',
    direction: 'horizontal',
    slidesPerView: 1,
    initialSlide: 0,
    grabCursor: true,
    simulateTouch: true,
    shortSwipes: false,
    longSwipes: true,
    longSwipesRatio: 0.1,
    longSwipesMs: 50,
    watchSlidesVisibility: true,
    breakpoints: {
      561: {
        slidesPerView: 3
      },
      1001: {
        slidesPerView: 4
      }
    }
  });
  var swiperBody = new Swiper(".".concat(lotteryName, "-js-slider-body"), {
    effect: 'slide',
    direction: 'horizontal',
    slidesPerView: 1,
    initialSlide: 0,
    autoHeight: !is_explorer,
    grabCursor: false,
    simulateTouch: true,
    shortSwipes: false,
    longSwipes: true,
    longSwipesRatio: 0.1,
    longSwipesMs: 50,
    thumbs: {
      swiper: swiperNav
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      slideChangeTransitionStart: function slideChangeTransitionStart(swiper) {
        var activeIndex = this.activeIndex + 1;
        var activeSlide = myApp.querySelector(".".concat(lotteryName, "-prizes .swiper-slide:nth-child(").concat(activeIndex, ")"));

        if (is_explorer) {
          swiper.wrapperEl.style.height = '100%';
          swiper.el.style.height = activeSlide.scrollHeight + 'px';
        }
      },
      slideChange: function slideChange(swiper) {
        var activeIndex = this.activeIndex + 1;
        var activeSlide = myApp.querySelector(".".concat(lotteryName, "-nav .swiper-slide:nth-child(").concat(activeIndex, ")"));
        var nextSlide = myApp.querySelector(".".concat(lotteryName, "-nav .swiper-slide:nth-child(").concat(activeIndex + 1, ")"));
        var prevSlide = myApp.querySelector(".".concat(lotteryName, "-nav .swiper-slide:nth-child(").concat(activeIndex - 1, ")"));

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

  if (hash !== "raffle") {
    swiperBody.slides[1].parentNode.removeChild(swiperBody.slides[1]);
    setTimeout(function () {
      swiperNav.update();
      swiperBody.update();
    }, 250);
  }

  window.addEventListener("resize", function (event) {
    swiperNav.update();
    swiperBody.update();
  }); // Scroll to elem

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


  var sizeV = 0;

  if (is_mob) {
    sizeV = 4;
  } else {
    sizeV = 8;
  } // particles bg


  particlesJS("".concat(lotteryName, "-js-particles"), {
    particles: {
      number: {
        value: 100,
        density: {
          enable: !is_mob,
          value_area: 800
        }
      },
      color: {
        value: "#f7ea9a"
      },
      shape: {
        type: "image",
        stroke: {
          width: 0,
          color: "#f7ea9a"
        },
        polygon: {
          nb_sides: 4
        },
        image: {
          src: "img/main/light.png",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: sizeV,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.5,
          sync: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: .5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        resize: false
      }
    },
    retina_detect: true
  });

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
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window["pJSDom"] = [];
      setTimeout(function () {
        particlesJS("".concat(lotteryName, "-js-particles"), {
          particles: {
            number: {
              value: 100,
              density: {
                enable: !is_mob,
                value_area: 800
              }
            },
            color: {
              value: "#f7ea9a"
            },
            shape: {
              type: "image",
              stroke: {
                width: 0,
                color: "#f7ea9a"
              },
              polygon: {
                nb_sides: 4
              },
              image: {
                src: "img/main/light.png",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: sizeV,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.5,
                sync: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: .5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              resize: false
            }
          },
          retina_detect: true
        });
      }, 600);
    });
  } else {
    window.addEventListener("resize", function () {
      pointsItemChange();
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window["pJSDom"] = [];
      setTimeout(function () {
        particlesJS("".concat(lotteryName, "-js-particles"), {
          particles: {
            number: {
              value: 100,
              density: {
                enable: !is_mob,
                value_area: 800
              }
            },
            color: {
              value: "#f7ea9a"
            },
            shape: {
              type: "image",
              stroke: {
                width: 0,
                color: "#f7ea9a"
              },
              polygon: {
                nb_sides: 4
              },
              image: {
                src: "img/main/light.png",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: sizeV,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.5,
                sync: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: .5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              resize: false
            }
          },
          retina_detect: true
        });
      }, 600);
    });
  } // Scroll to element


  scrollToElem(".".concat(lotteryName, "-section--main"), 1000); // toggle class elements

  var interval;
  var imageCount = 0;

  function swapClass() {
    var el = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-main__prizes--animation .").concat(lotteryName, "-main__prize")));
    el.forEach(function (item) {
      item.classList.remove("".concat(lotteryName, "-main__prize--is-light"));
    });
    el[imageCount].classList.add("".concat(lotteryName, "-main__prize--is-light"));

    if (imageCount < el.length - 1) {
      imageCount++;
    } else {
      imageCount = 0;
    }
  }

  if (!app.openBox) {
    interval = setInterval(swapClass, 1000);
  } // watcher add or remove class


  function callback(mutationsList, observer) {
    mutationsList.forEach(function (mutation) {
      if (mutation.attributeName === 'class') {
        if (mutationsList[0].target.classList.contains("".concat(lotteryName, "-main__prizes--animation"))) {
          interval = setInterval(swapClass, 1000);
        } else {
          clearInterval(interval);
          removeBoxAnimation();
        }
      }
    });
  }

  var mutationObserver = new MutationObserver(callback);
  var prizes = myApp.querySelector(".".concat(lotteryName, "-main__prizes"));
  mutationObserver.observe(prizes, {
    attributes: true
  }); // remove Box animation

  function removeBoxAnimation() {
    imageCount = 0;
    var el = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-main__prize")));
    el.forEach(function (item) {
      item.classList.remove("".concat(lotteryName, "-main__prize--is-light"));
    });
  } // parallax


  function simpleParallax(intensity, element) {
    window.addEventListener('scroll', function () {
      var scrolled = window.pageYOffset;
      var calc = scrolled * intensity / 2;

      if (pageYOffset < document.documentElement.clientHeight) {
        element.style.transform = "translate3d(0,".concat(calc, "em,0)");
      } else {
        element.style.transform = "translate3d(0,0,0)";
      }
    });
  }

  var elem = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-js-parallax")));

  if (!is_mob) {
    elem.forEach(function (item, i) {
      var newIntensity = 0.1 / (i + 1);
      simpleParallax(newIntensity, item);
    });
  } // slider disable dates


  function disableInactiveDates() {
    var allNavs = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-nav__item"))),
        allTabsLength = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-tab"))).length - 1;
    allNavs.forEach(function (itemNav, index) {
      if (index > allTabsLength) {
        itemNav.classList.add("".concat(lotteryName, "-nav__item--disabled"));
      }
    });
  }

  setTimeout(function () {
    disableInactiveDates();
  }, 250); // Update height slider

  function updateHeightSlider() {
    var activeIndex = swiperBody.activeIndex + 1;
    var activeSlide = myApp.querySelector(".".concat(lotteryName, "-prizes .swiper-slide:nth-child(").concat(activeIndex, ")"));
    setTimeout(function () {
      swiperBody.wrapperEl.style.height = '100%';
      swiperBody.wrapperEl.style.height = activeSlide.scrollHeight + 'px';
    }, 100);
  }

  updateHeightSlider(); // add pendulum animation

  var pendulumElement1 = myApp.querySelector(".".concat(lotteryName, "-js-pendulum1"));
  var pendulumElement2 = myApp.querySelector(".".concat(lotteryName, "-js-pendulum2"));
  var startTime;
  var intervalPendulum;

  function setNewStartTime() {
    startTime = Date.now() / 1000;
  }

  intervalPendulum = setInterval(function () {
    var t = Date.now() / 1000 - startTime;
    var θ = 0.2 * Math.PI * Math.cos(Math.sqrt(9.8) * t);
    var f = Math.exp(-.25 / Math.PI * t * t);
    pendulumElement1.style.transform = "rotate(".concat(f * θ, "rad)");
    pendulumElement2.style.transform = "rotate(".concat(f * -θ, "rad)");
  }, 10);
  document.addEventListener('aos:in:pendulum', function (_ref) {
    var detail = _ref.detail;
    setNewStartTime();
    setInterval(function () {
      clearInterval(intervalPendulum);
    }, 10000);
  }); // toggle accordion

  var accordion = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-js-accordion")));
  accordion.forEach(function (item) {
    var btnToggle = item.querySelector(".".concat(lotteryName, "-js-btn-toggle")),
        headerToggle = item.querySelector(".".concat(lotteryName, "-js-header-toggle")),
        bodyToggle = item.querySelector(".".concat(lotteryName, "-js-body-toggle"));
    headerToggle.addEventListener('click', function () {
      setTimeout(function () {
        item.classList.toggle("".concat(lotteryName, "-rules__block--is-open"));
        btnToggle.classList.toggle("".concat(lotteryName, "-rules__button--is-open"));
        bodyToggle.classList.toggle("".concat(lotteryName, "-rules__body--is-open"));
        AOS.refresh();
      }, 50);
    });
  }); // shuffle dom elements

  function shuffle(elements) {
    var allElements = function () {
      var ret = [],
          l = elements.length;

      while (l--) {
        ret[ret.length] = elements[l];
      }

      return ret;
    }();

    var shuffled = function () {
      var l = allElements.length,
          ret = [];

      while (l--) {
        var random = Math.floor(Math.random() * allElements.length),
            randElements = allElements[random].cloneNode(true);
        allElements.splice(random, 1);
        ret[ret.length] = randElements;
      }

      return ret;
    }(),
        l = elements.length;

    while (l--) {
      elements[l].parentNode.insertBefore(shuffled[l], elements[l].nextSibling);
      elements[l].parentNode.removeChild(elements[l]);
    }
  }

  shuffle(myApp.querySelectorAll(".".concat(lotteryName, "-progress-bar__image"))); // change structure

  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

  function pointsItemChange() {
    var adaptiveElems = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-js-adaptive")));
    adaptiveElems.forEach(function (item) {
      var secondAll = Array.prototype.slice.call(item.querySelectorAll(".".concat(lotteryName, "-js-second > div"))),
          secondItem = secondAll[1],
          third = item.querySelector(".".concat(lotteryName, "-js-third")),
          thirdAll = Array.prototype.slice.call(item.querySelectorAll(".".concat(lotteryName, "-js-third > div"))),
          thirdItem = thirdAll[0],
          moveItem = item.querySelector(".".concat(lotteryName, "-js-move"));
      setTimeout(function () {
        if (window.innerWidth <= 560) {
          third.insertBefore(moveItem, thirdItem);
        } else {
          insertAfter(moveItem, secondItem);
        }
      }, 100);
    });
  }

  pointsItemChange();
});