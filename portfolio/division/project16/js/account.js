"use strict";

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
  /*! Account */
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
  }
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
      var keyCode = e.code; // go to lottery

      if (e.shiftKey && keyCode === 'Digit1') {
        if (location.hostname === 'localhost') {
          location.pathname = "lottery.html";
        } else {
          location.pathname = hashArray[1] + "/index.php";
        }
      } // go to raffle


      if (e.shiftKey && keyCode === 'Digit2') {
        if (location.search === '?logged') {
          removeParam();
        }

        if (location.hostname === 'localhost') {
          location.pathname = "raffle.html";
        } else {
          location.pathname = hashArray[1] + "/raffle.php";
        }
      } // go to account


      if (e.shiftKey && keyCode === 'Digit3') {
        if (location.search === '?logged') {
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
      } // fix Sidebar


      if (keyCode === 'Backquote' && e.shiftKey) {
        additionBlock.classList.toggle("".concat(lotteryName, "-addition--is-fixed"));
        svgCheck();
      }
    });
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
  }
  /* Custom Account Scripts: */
  // =====================================================================================================================

});