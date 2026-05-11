(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var cards = document.querySelectorAll('[data-counter-target]');
        if (!cards.length) return;

        var animate = function (numEl, target) {
            var duration = 1800;
            var start    = performance.now();
            var step = function (now) {
                var elapsed  = now - start;
                var progress = Math.min(elapsed / duration, 1);
                var eased    = 1 - Math.pow(1 - progress, 3);
                numEl.textContent = Math.round(eased * target);
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var card   = entry.target;
                var target = parseInt(card.getAttribute('data-counter-target'), 10) || 0;
                var numEl  = card.querySelector('[data-counter-num]');
                if (numEl) animate(numEl, target);
                io.unobserve(card);
            });
        }, { threshold: 0.3 });

        cards.forEach(function (card) { io.observe(card); });
    });
})();
