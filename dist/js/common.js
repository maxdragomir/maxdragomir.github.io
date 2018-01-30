(function(){
    'use strict';

    window.onload = init;

    function init() {

        var head = document.getElementById('global').getElementsByTagName('div')[0],
            loader = document.getElementById('preloader'),
            menu = document.querySelector('.header__inside-head'),
            openBtn = document.querySelector('.open-menu'),
            closeBtn = document.querySelector('.close-menu'),
            animatedElement = document.getElementsByClassName('animate'),
            lengthElement = animatedElement.length;

        setTimeout(function () {
            if (!loader.classList.contains('ok')) {
                loader.classList.add('ok');
            }
        }, 1000);

        setTimeout(function(){
            document.getElementsByClassName('header__icon-mobile')[0].classList.add('animate-logo');
            document.getElementById('logo-icon').classList.add('animate-logo');
            showElement();
        }, 1500);

        openBtn.addEventListener('click', function () {
            menu.classList.add('menu-open');
            this.classList.remove('show');
            closeBtn.classList.add('show');
        });

        closeBtn.addEventListener('click', function () {
            menu.classList.remove('menu-open');
            this.classList.remove('show');
            openBtn.classList.add('show');
        });

        document.addEventListener('click', function (e) {
            var isClickInside = menu.contains(e.target);
            if (!isClickInside && e.target !== openBtn) {
                menu.classList.remove('menu-open');
                closeBtn.classList.remove('show');
                openBtn.classList.add('show');
            }
        });

        window.onscroll = function() {
            showElement();

            if (head.classList.contains('scroll') && window.pageYOffset === 0) {
                head.classList.remove('scroll');
            } else if (window.pageYOffset > 0) {
                head.classList.add('scroll');
            }

        };

        function showElement() {

            for (var i=0; i < lengthElement; i++) {
                var allElem = animatedElement[i],
                    animatedElementCoords = allElem.getBoundingClientRect(),
                    animatedElementY = animatedElementCoords.top + window.pageYOffset,
                    currentScroll = window.pageYOffset + document.documentElement.clientHeight;

                if (animatedElementY < currentScroll) {
                    animatedElement[i].classList.add('show');
                }
            }

        }
    }

})(window, document, undefined);