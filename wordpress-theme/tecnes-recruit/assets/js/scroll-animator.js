(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var targets = document.querySelectorAll('.js-animate');
        if (!targets.length) return;

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-animate');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

        targets.forEach(function (el) { io.observe(el); });
    });
})();
