(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var el = document.getElementById('mvSlide01');
        if (!el || typeof Splide === 'undefined') return;

        var progressBar = document.getElementById('js-mv-progress-bar');
        var toggle      = document.getElementById('js-mv-toggle');

        var splide = new Splide(el, {
            type: 'fade',
            rewind: true,
            autoplay: true,
            interval: 5000,
            speed: 1000,
            pauseOnHover: false,
            pagination: false,
            arrows: false
        });

        splide.on('autoplay:playing', function (rate) {
            if (progressBar) {
                progressBar.style.width = (rate * 100) + '%';
            }
        });

        splide.on('autoplay:play', function () {
            if (toggle) toggle.classList.add('is-active');
        });

        splide.on('autoplay:pause', function () {
            if (toggle) toggle.classList.remove('is-active');
        });

        splide.mount();

        if (toggle) {
            toggle.classList.add('is-active');
            toggle.addEventListener('click', function () {
                var autoplay = splide.Components.Autoplay;
                if (toggle.classList.contains('is-active')) {
                    autoplay.pause();
                } else {
                    autoplay.play();
                }
            });
        }
    });
})();
