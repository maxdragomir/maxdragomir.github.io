"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Vars
// =====================================================================================================================
var lotteryName = 'luckyday',
    html = document.querySelector('html'),
    body = document.querySelector('body'),
    ltr = document.getElementById('ltr'),
    rtl = document.getElementById('rtl'),
    wrapper = document.querySelector(".".concat(lotteryName, "-wrapper")),
    hash = location.search.replace(/\?/, ""),
    hashArray = location.pathname.split('/'),
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
  } // Vue Scroll & Modal


  Vue.use(window["vue-js-modal"]["default"], {
    dialog: true,
    dynamic: true,
    injectModalsContainer: true
  });
  var app = new Vue({
    el: ".".concat(lotteryName),
    methods: {
      beforeOpen: function beforeOpen() {
        html.classList.add('noScroll');
      },
      opened: function opened() {},
      closed: function closed() {},
      beforeClose: function beforeClose() {
        html.classList.remove('noScroll');
      }
    }
  });

  if (hash !== '' && hash !== 'righttoleft') {
    app.$modal.show('modal-' + hash);
  }

  var myApp = app.$el;
  /* Addition Btns: */
  // =====================================================================================================================

  var additionBlock = document.querySelector(".".concat(lotteryName, "-addition")),
      svgOpen = document.querySelector(".".concat(lotteryName, "-addition__svg-open")),
      svgClose = document.querySelector(".".concat(lotteryName, "-addition__svg-close"));

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

      if (keyCode === 'Space' && e.shiftKey) {
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
  } // Random levitate elements


  function tweenProperty(target, prop, min, max) {
    var _gsap$to;

    var randomDur = gsap.utils.random(5, 7, 3.5);
    var randomDelay = gsap.utils.random(0.2, 1, 0.5);
    gsap.to(target, (_gsap$to = {}, _defineProperty(_gsap$to, prop, gsap.utils.random(min, max)), _defineProperty(_gsap$to, "duration", randomDur), _defineProperty(_gsap$to, "delay", randomDelay), _defineProperty(_gsap$to, "ease", 'none'), _defineProperty(_gsap$to, "yoyo", true), _defineProperty(_gsap$to, "force3D", true), _defineProperty(_gsap$to, "rotate", 0.01), _defineProperty(_gsap$to, "skewX", 0.01), _defineProperty(_gsap$to, "onComplete", tweenProperty), _defineProperty(_gsap$to, "onCompleteParams", [target, prop, min, max]), _gsap$to));
  }
  /* Custom Lottery Scripts: */
  // =====================================================================================================================


  var date = new Date(),
      yesterday = new Date(moment().subtract(1, 'days')._d),
      lotteryStart = new Date(2020, 7, 1),
      editionToday = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-js-today-edition"))),
      mainBtns = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-js-btn"))),
      swapBlock = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-js-swap"))),
      tickets = myApp.querySelector(".".concat(lotteryName, "-js-tickets")),
      container = myApp.querySelector(".".concat(lotteryName, "-tickets__block")); // add ru format

  moment.locale('ru'); // update main btns and swap blocks

  mainBtns.forEach(function (item) {
    item.addEventListener('click', function () {
      if (hash === "logged") {
        if (!item.classList.contains("".concat(lotteryName, "-js-used"))) {
          mainBtns.forEach(function (item) {
            var text = item.querySelector('span');

            if (!item.classList.contains("".concat(lotteryName, "-js-no-change"))) {
              text.innerText = 'Сделать ставку';
            }

            item.classList.add("".concat(lotteryName, "-js-used"));
          });
          swapBlock.forEach(function (item) {
            item.classList.toggle("".concat(lotteryName, "-block-info--is-show"));
          });
        }
      } else {
        app.$modal.show('modal-enter');
      }
    });
  }); // add clock

  function clockArrows() {
    var now = moment(),
        second = now.seconds() * 6,
        minute = now.minutes() * 6 + second / 60,
        hour = now.hours() % 12 / 12 * 360 + 90 + minute / 12;
    var arrowSecond = gsap.timeline(),
        arrowMinute = gsap.timeline(),
        arrowHour = gsap.timeline();
    arrowSecond.to(".".concat(lotteryName, "-js-clock-second"), {
      duration: 1,
      rotate: second,
      ease: "steps(1)"
    });
    arrowMinute.to(".".concat(lotteryName, "-js-clock-minute"), {
      duration: 1,
      rotate: minute,
      ease: "steps(1)"
    });
    arrowHour.to(".".concat(lotteryName, "-js-clock-hour"), {
      duration: 1,
      rotate: hour,
      ease: "steps(1)"
    });
  }

  function timedUpdate() {
    clockArrows();
    setTimeout(function () {
      var clockArrows = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-js-clock-arrow")));
      clockArrows.forEach(function (item) {
        item.style.transition = 'none';
      });
      timedUpdate();
    }, 1000);
  }

  if (is_mob) {
    setTimeout(function () {
      timedUpdate();
    }, 500);
  } else {
    setTimeout(function () {
      timedUpdate();
    }, 1100);
  } // add datepicker


  var picker = datepicker(".".concat(lotteryName, "-js-datepicker"), {
    alwaysShow: true,
    showAllDates: true,
    maxDate: date,
    minDate: lotteryStart,
    dateSelected: yesterday,
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    onShow: function onShow(instance) {
      var wrapper = myApp.querySelector(".".concat(lotteryName, "-js-datepicker"));
      wrapper.parentNode.removeChild(wrapper);
    },
    onSelect: function onSelect(instance, date) {
      updateInfo(date);
    }
  }); // add new edition number

  editionToday.forEach(function (item) {
    item.innerText = moment(date).diff(lotteryStart, 'days') + 1;
  }); // update date info and add tickets

  function updateInfo(selectDate) {
    var titleElem = myApp.querySelector(".".concat(lotteryName, "-js-date")),
        editionElem = myApp.querySelector(".".concat(lotteryName, "-js-edition")),
        today = moment().format('L'),
        titleDate = moment(selectDate).format('L'),
        calcEdition = moment(selectDate).diff(lotteryStart, 'days') + 1;
    titleElem.innerText = titleDate;
    editionElem.innerText = calcEdition;
    var ticketsTitle = myApp.querySelector(".".concat(lotteryName, "-tickets__title"));
    var span = document.createElement('span');
    span.className = "".concat(lotteryName, "-tickets__title");
    span.innerText = 'Розыгрыш ещё не начался';

    if (titleDate !== today) {
      if (ticketsTitle) {
        ticketsTitle.parentNode.removeChild(ticketsTitle);
      }

      genTickets(randRange(100, 300));
    } else {
      container.innerHTML = '';
      tickets.appendChild(span);
    }
  }

  updateInfo(yesterday); // generate tickets

  function genTickets(amount) {
    container.innerHTML = '';

    for (var _i = 0; _i < amount; _i++) {
      var div = document.createElement('div'),
          span = document.createElement('span');
      div.className = "".concat(lotteryName, "-tickets__ticket");
      span.innerText = randRange(11111111, 99999999);
      div.appendChild(span);
      container.appendChild(div);
    }

    var ticket = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-tickets__ticket"))),
        amountWin = randRange(1, 10);

    for (var i = 1; i <= amountWin; i++) {
      var randWinTicket = Array.prototype.slice.call(myApp.querySelectorAll(".".concat(lotteryName, "-tickets__ticket:nth-child(").concat(randRange(1, ticket.length), ")")));
      randWinTicket.forEach(function (item) {
        item.classList.add('win');
      });
    }
  } // random


  function randRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } // random levitate elements


  if (!is_mob) {
    gsap.utils.toArray(".".concat(lotteryName, "-gsap-levitate-el")).forEach(function (el) {
      tweenProperty(el, "x", -30, 30);
      tweenProperty(el, "y", -30, 30);
    });
  }
});