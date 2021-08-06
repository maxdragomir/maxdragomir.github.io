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
  // Raffle:
  // =====================================================================================================================
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

          var disableInactiveDates = function disableInactiveDates() {
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

          disableInactiveDates();
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
  /* Addition Btns: */
  // =====================================================================================================================

  var additionBlock = document.querySelector(".".concat(lotteryName, "-addition")),
      svgOpen = document.querySelector(".".concat(lotteryName, "-addition__svg-open")),
      svgClose = document.querySelector(".".concat(lotteryName, "-addition__svg-close")),
      buttons = document.querySelectorAll(".".concat(lotteryName, "-addition__btn"));

  if (additionBlock) {
    svgClose.style.display = "none";
    setTimeout(function () {
      additionBlock.classList.remove("".concat(lotteryName, "-addition--is-show"));

      if (hash !== '' && !isRtl && hash !== 'rtl' && hash !== 'logged' && hash !== 'raffle') {
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
      var keyCode = e.code; // go to lottery

      if (e.shiftKey && keyCode === 'Digit1') {
        if (location.hostname === 'localhost') {
          location.pathname = "lottery.html";
        } else {
          location.pathname = hashArray[1] + "/index.php";
        }
      } // go to raffle
      // go to account


      if (e.shiftKey && keyCode === 'Digit3') {
        if (location.search === '?logged' || location.search === '?raffle') {
          removeParam();
        }

        if (location.hostname === 'localhost') {
          location.pathname = "account.html";
        } else {
          location.pathname = hashArray[1] + "/account.php";
        }
      } // active RTL state


      if (e.altKey && keyCode === 'Digit1') {
        if (location.search === '?rtl') {
          location.href = location.origin + location.pathname;
        } else {
          location.search = "?rtl";
        }
      } // active logged state


      if (e.altKey && keyCode === 'Digit2') {
        if (pageType === 'index') {
          if (location.search === '?logged') {
            location.href = location.origin + location.pathname;
          } else {
            location.search = "?logged";
          }
        } else if (pageType === 'lottery') {
          if (location.search === '?logged') {
            location.href = location.origin + location.pathname;
          } else {
            location.search = "?logged";
          }
        }
      } // active raffle state


      if (e.altKey && keyCode === 'Digit3') {
        if (pageType === 'index') {
          if (location.search === '?raffle') {
            location.href = location.origin + location.pathname;
          } else {
            location.search = "?raffle";
          }
        } else if (pageType === 'lottery') {
          if (location.search === '?raffle') {
            location.href = location.origin + location.pathname;
          } else {
            location.search = "?raffle";
          }
        }
      } // fix Sidebar


      if (keyCode === 'Backquote' && e.shiftKey) {
        additionBlock.classList.toggle("".concat(lotteryName, "-addition--is-fixed"));
        svgCheck();
      }
    }); // buttons.forEach(function (item) {
    //   item.addEventListener('click', () => {
    //
    //   });
    //
    //   item.addEventListener('mouseover', () => {
    //     createElem(item);
    //   });
    //   item.addEventListener('mouseout', () => {
    //     // setTimeout(function () {
    //       removeElem();
    //     // }, 500)
    //   });
    // });
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
    if (additionBlock.classList.contains("".concat(lotteryName, "-addition--is-fixed"))) {
      svgOpen.style.display = "none";
      svgClose.style.display = "block";
    } else {
      svgOpen.style.display = "block";
      svgClose.style.display = "none";
    }
  } // function createElem(item) {
  //   let coords = item.getBoundingClientRect(),
  //       divElem = document.createElement('div');
  //
  //   divElem.innerText = item.getAttribute('title');
  //   divElem.classList.add(`${lotteryName}-js-addition-title`);
  //   divElem.style.top = coords.top + 'px';
  //   divElem.style.left = coords.left + 'px';
  //
  //
  //   myApp.appendChild(divElem);
  // }
  //
  // function removeElem() {
  //   let titleElem = myApp.querySelector(`.${lotteryName}-js-addition-title`);
  //   titleElem.parentNode.removeChild(titleElem);
  // }
  // AOS


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
  }
  /* Custom Raffle Scripts: */
  // =====================================================================================================================

});