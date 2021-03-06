function scrollMenu() {
  $("#header").hasClass("scroll") && 32 === $("#header").offset().top ? $("#header").removeClass("scroll") : 32 < $("#header").offset().top && $("#header").addClass("scroll")
}

$(document).ready(function () {
  var e = $("#preloader");
  setTimeout(function () {
    e.hasClass("ok") || e.addClass("ok")
  }, 1500);
  var o = $("body"), s = $(".mobile-group"), l = $(".btn-mobile"), n = $("#menu-mobile a"), a = $(".first-step"),
    t = $(".first-step-content"), r = $(".second-step"), i = $(".second-step-content"), c = $(".third-step"),
    d = $(".third-step-content"), m = $(".btn-close");
  l.on("click", function () {
    o.toggleClass("open_menu"), s.toggleClass("show"), l.toggleClass("close"), s.hasClass("show") && n.on("click", function () {
      o.removeClass("open_menu"), s.removeClass("show"), l.removeClass("close")
    })
  }), a.on("click", function () {
    t.addClass("show"), o.addClass("remove-scroll")
  }), r.on("click", function () {
    i.addClass("show"), o.addClass("remove-scroll")
  }), c.on("click", function () {
    d.addClass("show"), o.addClass("remove-scroll")
  }), m.on("click", function () {
    $(this).parents(".modal-custom").removeClass("show"), o.removeClass("remove-scroll"), $.fn.fullpage.moveTo("product")
  }), $("#fullpage").fullpage({
    menu: "#menu, #menu-mobile",
    lockAnchors: !1,
    anchors: ["mission", "about", "product", "cases", "reviews", "contact"],
    navigation: !1,
    navigationPosition: "right",
    navigationTooltips: ["mission", "about", "product", "cases", "reviews", "contact"],
    showActiveTooltip: !1,
    slidesNavigation: !1,
    slidesNavPosition: "bottom",
    css3: !0,
    scrollingSpeed: 700,
    autoScrolling: !0,
    fitToSection: !1,
    fitToSectionDelay: 100,
    scrollBar: !1,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: !1,
    loopTop: !1,
    loopHorizontal: !0,
    continuousVertical: !1,
    continuousHorizontal: !1,
    scrollHorizontally: !1,
    interlockedSlides: !1,
    dragAndMove: !0,
    offsetSections: !1,
    resetSliders: !0,
    fadingEffect: !1,
    normalScrollElements: "#element1, .element2",
    scrollOverflow: !1,
    scrollOverflowReset: !1,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,
    keyboardScrolling: !0,
    animateAnchor: !0,
    recordHistory: !0,
    controlArrows: !1,
    verticalCentered: !0,
    paddingTop: "3em",
    paddingBottom: "3rem",
    fixedElements: "#header, #footer",
    responsiveWidth: 1200,
    responsiveHeight: 800,
    responsiveSlides: !0,
    parallax: !1,
    parallaxOptions: {type: "reveal", percentage: 62, property: "translate"},
    sectionSelector: ".section",
    slideSelector: ".slide",
    lazyLoading: !0,
    onLeave: function (e, o, s) {
      // var l = $(".number-page"), n = $(".scroll");
      // 1 === o ? (l.html('<div class="number-page animated fadeInUp">01</div>'), n.attr("href", "#about").removeClass("go_home"), n.children("span").html("scroll")) : 2 === o ? (l.html('<div class="number-page animated fadeInUp">02</div>'), n.attr("href", "#product").removeClass("go_home"), n.children("span").html("scroll")) : 3 === o ? (l.html('<div class="number-page animated fadeInUp">03</div>'), n.attr("href", "#cases").removeClass("go_home"), n.children("span").html("scroll")) : 4 === o ? (l.html('<div class="number-page animated fadeInUp">04</div>'), n.attr("href", "#reviews").removeClass("go_home"), n.children("span").html("scroll")) : 5 === o ? (l.html('<div class="number-page animated fadeInUp">05</div>'), n.attr("href", "#contact").removeClass("go_home"), n.children("span").html("scroll")) : 6 === o && (l.html('<div class="number-page animated fadeInUp">06</div>'), n.attr("href", "#mission").addClass("go_home"), n.children("span").html("scroll top"))
    },
    afterLoad: function (e, o) {
    },
    afterRender: function () {
    },
    afterResize: function () {
    },
    afterResponsive: function (e) {
    },
    afterSlideLoad: function (e, o, s, l) {
    },
    onSlideLeave: function (e, o, s, l, n) {
    }
  })
}), $(document).on("scroll", function () {
  scrollMenu()
});

console.log(1)
//# sourceMappingURL=my.js.map
