(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var modal       = document.getElementById('js-business-modal');
        var dataScript  = document.getElementById('js-business-modal-data');
        if (!modal || !dataScript) return;

        var modals = [];
        try {
            modals = JSON.parse(dataScript.textContent);
        } catch (e) {
            return;
        }

        var imgEl     = document.getElementById('js-modal-img');
        var numEl     = document.getElementById('js-modal-num');
        var ttlEl     = document.getElementById('js-modal-ttl');
        var subEl     = document.getElementById('js-modal-sub');
        var txtEl     = document.getElementById('js-modal-txt');
        var kwEl      = document.getElementById('js-modal-keywords');
        var prevBtn   = modal.querySelector('[data-modal-prev]');
        var nextBtn   = modal.querySelector('[data-modal-next]');

        var currentIndex = -1;

        function applyData(idx) {
            var m = modals[idx];
            if (!m) return;
            currentIndex = idx;
            imgEl.src         = m.img;
            imgEl.alt         = m.title;
            numEl.textContent = m.num;
            ttlEl.textContent = m.title;
            subEl.textContent = m.subTitle;
            txtEl.textContent = m.body;
            kwEl.innerHTML    = '';
            m.keywords.forEach(function (k) {
                var li = document.createElement('li');
                li.className   = 'modalKeyword';
                li.textContent = k;
                kwEl.appendChild(li);
            });
            prevBtn.disabled = (idx === 0);
            nextBtn.disabled = (idx === modals.length - 1);
            prevBtn.style.opacity = idx === 0 ? 0.3 : 1;
            nextBtn.style.opacity = idx === modals.length - 1 ? 0.3 : 1;
        }

        function openById(id) {
            var idx = modals.findIndex(function (m) { return m.id === id; });
            if (idx < 0) return;
            applyData(idx);
            modal.hidden = false;
            document.body.style.overflow = 'hidden';
        }

        function close() {
            modal.hidden = true;
            document.body.style.overflow = '';
        }

        document.querySelectorAll('[data-modal-open]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                openById(btn.getAttribute('data-modal-open'));
            });
        });

        modal.querySelectorAll('[data-modal-close]').forEach(function (btn) {
            btn.addEventListener('click', close);
        });

        modal.addEventListener('click', function (e) {
            if (e.target === modal) close();
        });

        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) applyData(currentIndex - 1);
        });

        nextBtn.addEventListener('click', function () {
            if (currentIndex < modals.length - 1) applyData(currentIndex + 1);
        });

        document.addEventListener('keydown', function (e) {
            if (!modal.hidden && e.key === 'Escape') close();
        });
    });
})();
