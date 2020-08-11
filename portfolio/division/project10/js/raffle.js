"use strict";

// Raffle:
// =====================================================================================================================
var lotteryName = 'xcash',
    body = document.querySelector('body'),
    ltr = document.getElementById('ltr'),
    rtl = document.getElementById('rtl'),
    wrapper = document.querySelector(".".concat(lotteryName, "-wrapper")),
    is_mob = navigator.userAgent;
document.addEventListener("DOMContentLoaded", function () {
  // Hash
  var hash = location.search.replace(/\?/, ""),
      ltr = document.getElementById('ltr'),
      rtl = document.getElementById('rtl');

  if (hash === "righttoleft") {
    ltr.parentNode.removeChild(ltr);
  } else {
    rtl.parentNode.removeChild(rtl);
  } // PerfectScroll


  Vue.use(Vue2PerfectScrollbar, {
    name: 'scroll'
  }); // Modal

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
        if (this.$refs.resultScroll) {
          this.$refs.resultScroll.update();
        }

        if (this.$refs.ticketsScroll) {
          this.$refs.ticketsScroll.update();
        }
      },
      closed: function closed() {},
      beforeClose: function beforeClose() {
        body.classList.remove('noScroll');
      },
      onResize: function onResize(event) {
        if (this.$refs.ticketsScroll) {
          this.$refs.ticketsScroll.update();
        }

        if (this.$refs.resultScroll) {
          this.$refs.resultScroll.update();
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
  } // Fix Coins


  var coinImg = document.querySelectorAll(".".concat(lotteryName, "-images__coin"));

  if (/mobi/i.test(is_mob)) {
    window.addEventListener("orientationchange", function () {
      coinImg.forEach(function (i) {
        i.classList.add("".concat(lotteryName, "-dn"));
      });
      setTimeout(function () {
        coinImg.forEach(function (i) {
          i.classList.remove("".concat(lotteryName, "-dn"));
        });
      }, 10);
    });
  } else {
    window.addEventListener("resize", function () {
      coinImg.forEach(function (i) {
        i.classList.add("".concat(lotteryName, "-dn"));
      });
      setTimeout(function () {
        coinImg.forEach(function (i) {
          i.classList.remove("".concat(lotteryName, "-dn"));
        });
      }, 10);
    });
  } // Animation


  AOS.init({
    duration: 1000,
    easing: 'ease',
    once: true,
    disable: true
  });
});