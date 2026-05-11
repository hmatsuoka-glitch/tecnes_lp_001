(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var header = document.getElementById('js-l-header');
        var toggle = document.getElementById('js-menu-toggle');
        var gnav   = document.getElementById('js-gnav');

        if (header) {
            var onScroll = function () {
                if (window.scrollY > 0) {
                    header.classList.add('fixed');
                } else {
                    header.classList.remove('fixed');
                }
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }

        var closeMenu = function () {
            if (gnav) gnav.classList.remove('isOpen');
            document.body.classList.remove('is-menu-open');
        };

        var openMenu = function () {
            if (gnav) gnav.classList.add('isOpen');
            document.body.classList.add('is-menu-open');
        };

        if (toggle) {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                if (gnav && gnav.classList.contains('isOpen')) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });
        }

        document.querySelectorAll('[data-gnav-close]').forEach(function (el) {
            el.addEventListener('click', closeMenu);
        });
    });
})();
