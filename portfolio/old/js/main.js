/*
* MALIN - Perfect Coming Soon Template
* Build Date: August 2015
* Author: Madeon08
* Copyright (C) 2015 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Fullscreen Div
    3. Loader fadeIn
    4. Scroll plugins
    5. Scroll to anchor
    6. Buttons / Menu interactions
    7. Countdown
    8. Newsletter
    9. Swipebox Gallery
   10. Map, Structure & Design
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function() {

    setTimeout(function() {

        $(".loading-part").addClass("fadeOut");
        $("#home-part").removeClass("scale-max").addClass("scale-uni");
        $("#navigation").removeClass("").addClass("fadeInLeft");

    }, 2000);

    setTimeout(function() {
        $(".loading-part").addClass("display-none");
        $("#home-part").removeClass("scale-uni").addClass("");
    }, 3200);

});

$(document).ready(function(){
//info
    $('.toggleUp').click(function () {
        $(this).next().slideToggle();
    });

//link portfolio
    $('#link_meter').click(function() {
        window.open('http://meterfund.com', '_blank');
        return false;
    });

    $('#link_komun').click(function() {
        window.open('http://komuntrans-group.com', '_blank');
        return false;
    });

    $('#link_msut').click(function() {
        window.open('http://msut.com.ua', '_blank');
        return false;
    });

    $('#link_rek').click(function() {
        window.open('http://rekciti.com', '_blank');
        return false;
    });

    $('#link_true').click(function() {
        window.open('http://trueshop.esy.es', '_blank');
        return false;
    });

    $('#link_trend').click(function() {
        window.open('http://phototrend.esy.es', '_blank');
        return false;
    });

    $('#link_kara').click(function() {
        window.open('http://karavella.esy.es', '_blank');
        return false;
    });

    $('#link_val').click(function() {
        window.open('http://valentine_s.esy.es', '_blank');
        return false;
    });
/* ------------------------------------- */
/* 2. Fullscreen Div ................... */
/* ------------------------------------- */

    function fullScreenContainer() {

        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";

        $("#home-part").css({
            width: screenWidth,
            height: screenHeight
        });

        $("#newsletter-part").css({
            width: screenWidth,
            height: screenHeight
        });

        $(".loader-part").css({
            width: screenWidth,
            height: screenHeight
        });

        $(window).resize( function () {

        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";

        $("#home-part").css({
            width: screenWidth,
            height: screenHeight
        });

        $("#newsletter-part").css({
            width: screenWidth,
            height: screenHeight
        });

        $(".loader-part").css({
            width: screenWidth,
            height: screenHeight
        });

        });

    }

    fullScreenContainer();

/* ------------------------------------- */
/* 3. Loader fadeIn .................... */
/* ------------------------------------- */

    setTimeout(function() {

        $(".loader-part").removeClass('opacity-0').addClass("fadeIn");

    }, 200);

/* ------------------------------------- */
/* 4. Scroll plugins ................... */
/* ------------------------------------- */

    $(function() {
        $('body').bind('mousewheel', function(event) {
          event.preventDefault();
          var scrollTop = this.scrollTop;
          this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
          //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
        });
    });


    function scrollbar(){
        $('body').mCustomScrollbar({
            scrollInertia: 150,
            axis:"y"
        });
    }

  scrollbar();

      function scrollbarNav(){
        $('.main-navigation').mCustomScrollbar({
            scrollInertia: 150,
            axis:"y"
        });
    }

  scrollbarNav();

      function scrollbarWork(){
        $('.item-title2').mCustomScrollbar({
            scrollInertia: 150,
            axis:"y"
        });
    }

  scrollbarWork();

/* ------------------------------------- */
/* 5. Scroll to anchor ................. */
/* ------------------------------------- */

    $('a.about-content').click(function(){
        $("#mcs_container").mCustomScrollbar("scrollTo", "#content-part",{
            scrollInertia:500,
            callbacks:false
        });
    });

    $('a.services-content').click(function(){
        $("#mcs_container").mCustomScrollbar("scrollTo", "#services-content",{
            scrollInertia:500,
            callbacks:false
        });
    });

    $('a.contact-content').click(function(){
        $("#mcs_container").mCustomScrollbar("scrollTo", "#valid-form",{
            scrollInertia:500,
            callbacks:false
        });
    });

/* ------------------------------------- */
/* 6. Buttons / Menu interactions ...... */
/* ------------------------------------- */

    $('.open-menu-mobile').click(function(){
        $('#navigation').toggleClass("translate-nav");
        $('.open-menu-mobile').toggleClass("translate-button");

        $(".opening-menu").toggleClass("display-none");
        $(".closing-menu").toggleClass("display-none");
    });


    $('a.nav-link').click(function(){
        $(".open-menu-mobile").addClass("dark-button");
    });


    $('a.nav-link').click(function(){
        $('#content-part').removeClass("").addClass('right-content');

        $('#home-part').removeClass("").addClass('right-home');
        $('#home-part .item-title').removeClass("fadeIn").addClass('fadeOut');

        $('#newsletter-part').removeClass("opacity-03").addClass('right-home newsletter-touch');
        $('#newsletter-part .item-title').removeClass("fadeIn").addClass('fadeOut');
        $('#newsletter-part').removeClass("").addClass('opacity-0');


        $('.mCSB_1_scrollbar').removeClass("").addClass('mCSB_scrollTools-left');
    });


    $('a.open-content').click(function(){
        $('#content-part').removeClass("opacity-03").addClass('right-content');

        $('#home-part').removeClass("opacity-03").addClass('right-home');
        $('#home-part .item-title').removeClass("fadeIn").addClass('fadeOut');

        $('#newsletter-part').removeClass("opacity-03").addClass('right-home newsletter-touch');
        $('#newsletter-part .item-title').removeClass("fadeIn").addClass('fadeOut');
        $('#newsletter-part').removeClass("").addClass('opacity-0');

        $('.mCSB_1_scrollbar').removeClass("").addClass('mCSB_scrollTools-left');

        $(".open-menu-mobile").removeClass("dark-button").addClass("translate-button");
        $('#navigation').addClass("translate-nav");
        $(".opening-menu").addClass("display-none");
        $(".closing-menu").removeClass("display-none");
    });


    $('a.open-newsletter').click(function(){
        $('#content-part').removeClass("right-content opacity-03").addClass('');

        $('#home-part').removeClass("right-home opacity-03").addClass('');
        $('#home-part .item-title').removeClass("fadeIn").addClass('fadeOut');

        $('#newsletter-part').removeClass("opacity-0 right-home newsletter-touch opacity-03").addClass('');
        $('#newsletter-part .item-title').removeClass("fadeOut").addClass('fadeIn');

        $('.mCSB_1_scrollbar').removeClass("mCSB_scrollTools-left").addClass('');
        $("#mcs_container").mCustomScrollbar("scrollTo", "#main-about",{
            scrollInertia:500,
            callbacks:false
        });

        $('#navigation').addClass("translate-nav");
        $(".open-menu-mobile").addClass("dark-button translate-button");
        $(".opening-menu").addClass("display-none");
        $(".closing-menu").removeClass("display-none");
    });


    $('a.nav-link-close').click(function(){
        $('#content-part').removeClass("right-content opacity-03").addClass('');

        $('#home-part').removeClass("right-home opacity-03").addClass('');
        $('#home-part .item-title').removeClass("fadeOut").addClass('fadeIn');

        $('#newsletter-part').removeClass("opacity-03");
        $('#newsletter-part .item-title').removeClass("fadeIn").addClass('fadeOut');
        $('#newsletter-part').removeClass("right-home").addClass('opacity-0 newsletter-touch');

        $('.mCSB_1_scrollbar').removeClass("mCSB_scrollTools-left").addClass('');
        $("#mcs_container").mCustomScrollbar("scrollTo", "#main-about",{
                scrollInertia:500,
                callbacks:false
        });

        $(".open-menu-mobile").removeClass("dark-button");
    });


    // Esc key action / This part is used to close all the content and come back to home.

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // Esc
            $('#content-part').removeClass("right-content opacity-03").addClass('');

            $('#home-part').removeClass("right-home opacity-03").addClass('');
            $('#home-part .item-title').removeClass("fadeOut").addClass('fadeIn');

            $('#newsletter-part').removeClass("opacity-03");
            $('#newsletter-part .item-title').removeClass("fadeIn").addClass('fadeOut');
            $('#newsletter-part').removeClass("right-home").addClass('opacity-0 newsletter-touch');

            $('.mCSB_scrollTools').removeClass("mCSB_scrollTools-left").addClass('');
            $("#mcs_container").mCustomScrollbar("scrollTo", "#main-about",{
                scrollInertia:500
            });

            $(".open-menu-mobile").removeClass("dark-button");
            $(".open-menu-mobile").addClass("dark-button").removeClass("translate-button");
            $('#navigation').removeClass("translate-nav");
            $(".opening-menu").removeClass("display-none");
            $(".closing-menu").addClass("display-none");

            // $('.esc').slideUp();
        };

    });


    $(document).keyup(function(e) {
        if (e.shiftKey  && e.keyCode == 32) { // shift + space = menu
            $('#navigation').toggleClass("translate-nav");
            $('.open-menu-mobile').toggleClass("translate-button");
            $(".opening-menu").toggleClass("display-none");
            $(".closing-menu").toggleClass("display-none");
        };

    });


    $(document).keyup(function(e) {
        if (e.shiftKey  && e.keyCode == 68) { // shift + D = about me
            $('#content-part').removeClass("opacity-03").addClass('right-content');

            $('#home-part').removeClass("").addClass('right-home');
            $('#home-part .item-title').removeClass("fadeIn").addClass('fadeOut');

            $('#newsletter-part').removeClass("opacity-03").addClass('right-home newsletter-touch');
            $('#newsletter-part .item-title').removeClass("fadeIn").addClass('fadeOut');
            $('#newsletter-part').removeClass("").addClass('opacity-0');

            $('.mCSB_1_scrollbar').removeClass("").addClass('mCSB_scrollTools-left');
            $("#mcs_container").mCustomScrollbar("scrollTo", "#main-about",{
                scrollInertia:500,
                callbacks:false
            });

            $(".open-menu-mobile").removeClass("dark-button").addClass("translate-button");
            $('#navigation').addClass("translate-nav");
            $(".opening-menu").addClass("display-none");
            $(".closing-menu").removeClass("display-none");
        };

    });


    $(document).keyup(function(e) { // shift + S = help
        if (e.shiftKey  && e.keyCode == 83) {
            $('.esc').slideToggle();
        };

    });


    $(document).keyup(function(e) { // shift + X = контакты
        if (e.shiftKey  && e.keyCode == 88) {
            $('#content-part').removeClass("opacity-03").addClass('right-content');

            $('#home-part').removeClass("").addClass('right-home');
            $('#home-part .item-title').removeClass("fadeIn").addClass('fadeOut');

            $('#newsletter-part').removeClass("opacity-03").addClass('right-home newsletter-touch');
            $('#newsletter-part .item-title').removeClass("fadeIn").addClass('fadeOut');
            $('#newsletter-part').removeClass("").addClass('opacity-0');

            $('.mCSB_1_scrollbar').removeClass("").addClass('mCSB_scrollTools-left');
            $("#mcs_container").mCustomScrollbar("scrollTo", "#valid-form",{
                scrollInertia:500,
                callbacks:false
            });

            $(".open-menu-mobile").removeClass("dark-button").addClass("translate-button");
            $('#navigation').addClass("translate-nav");
            $(".opening-menu").addClass("display-none");
            $(".closing-menu").removeClass("display-none");
        };

    });


    $(document).keyup(function(e) {
        if (e.shiftKey  && e.keyCode == 65) { // shift + A = works
            $('#content-part').removeClass("right-content opacity-03").addClass('');

            $('#home-part').removeClass("right-home opacity-03").addClass('');
            $('#home-part .item-title').removeClass("fadeIn").addClass('fadeOut');

            $('#newsletter-part').removeClass("opacity-0 right-home newsletter-touch opacity-03").addClass('');
            $('#newsletter-part .item-title').removeClass("fadeOut").addClass('fadeIn');

            $('.mCSB_1_scrollbar').removeClass("mCSB_scrollTools-left").addClass('');
            $("#mcs_container").mCustomScrollbar("scrollTo", "#main-about",{
                scrollInertia:500,
                callbacks:false
            });

            $('#navigation').addClass("translate-nav");
            $(".open-menu-mobile").addClass("dark-button translate-button");
            $(".opening-menu").addClass("display-none");
            $(".closing-menu").removeClass("display-none");
        };

    });

/* ------------------------------------- */
/* 8. Newsletter ........................*/
/* ------------------------------------- */

    $("#notifyMe").notifyMe();

/* ------------------------------------- */
/* 9. Swipebox Gallery ................. */
/* ------------------------------------- */

    $('.swipebox').swipebox();
    $('.swipebox1').swipebox();


/* ------------------------------------- */
/* 10. Map, Structure & Design ......... */
/* ------------------------------------- */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', init);

function init() {

    // Basic options for a simple Google Map
    // The latitude and longitude to center the map (always required)
    var center = new google.maps.LatLng(46.488090, 30.741079);
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,
        scrollwheel: false,
        draggable: true,
        center: center,
        streetViewControl: false,
        mapTypeControl: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps
        styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
                    { "visibility": "on" },
                    { "hue": "#ff0011" },
                    { "invert_lightness": true },
                    { "gamma": 0.97 }
        ]
    }
]
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions, center);

    var locations = [
        ['<h6><i class="fa fa-smile-o"></i> Я тут</h6>', 46.488090, 30.741079],
        // ['<h6>Coogee Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 8:00 to 22:00</p>', 40.66810, -73.94480, 5],
        // ['<h6>Cronulla Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 10:00 to 20:00</p>', 40.80427, -74.01208, 3],
        // ['<h6>Manly Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 6:00 to 14:00</p>', 40.76759, -73.96756, 2],
        // ['<h6>Maroubra Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 12:00 to 23:30</p>', 40.66429, -74.11469, 1]
    ];

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}
        /* ----------------------------------------------------------
            ## Progress bars
        --------------------------------Lioit.com------------------*/
        var progressBar = $(".progress-bar");
        progressBar.each(function(indx){
            $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });
});