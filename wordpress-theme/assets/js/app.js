/* ==========================================================================
   tecnes-lp theme JS (vanilla, no jQuery)
   ========================================================================== */
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', function () {
		initHeaderScroll();
		initMenuToggle();
		initMainVisual();
	});

	/* ---------- Header: add .fixed class once user scrolls below top ---------- */
	function initHeaderScroll() {
		var header = document.querySelector('[data-header]');
		if (!header) return;
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

	/* ---------- SP Menu (Gnav): toggle .isOpen on the gnav and body class ---------- */
	function initMenuToggle() {
		var toggle = document.querySelector('[data-menu-toggle]');
		var gnav = document.querySelector('[data-gnav]');
		if (!toggle || !gnav) return;

		var open = function () {
			gnav.classList.add('isOpen');
			document.body.classList.add('is-menu-open');
		};
		var close = function () {
			gnav.classList.remove('isOpen');
			document.body.classList.remove('is-menu-open');
		};
		var toggleOpen = function (e) {
			if (e) e.preventDefault();
			if (gnav.classList.contains('isOpen')) {
				close();
			} else {
				open();
			}
		};

		toggle.addEventListener('click', toggleOpen);

		// Any element with data-gnav-close (overlay, inner links) closes the menu.
		document.querySelectorAll('[data-gnav-close]').forEach(function (el) {
			el.addEventListener('click', function () {
				close();
			});
		});
	}

	/* ---------- MainVisual: Splide fade slider + progress bar + play/pause ---------- */
	function initMainVisual() {
		var root = document.querySelector('[data-mv-splide]');
		if (!root || typeof window.Splide === 'undefined') return;

		var progressBar = root.querySelector('[data-mv-progress]');
		var toggleBtn = root.querySelector('[data-mv-toggle]');

		var splide = new window.Splide(root, {
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
			if (toggleBtn) toggleBtn.classList.add('is-active');
		});

		splide.on('autoplay:pause', function () {
			if (toggleBtn) toggleBtn.classList.remove('is-active');
		});

		splide.mount();

		if (toggleBtn) {
			toggleBtn.classList.add('is-active');
			toggleBtn.addEventListener('click', function () {
				var autoplay = splide.Components.Autoplay;
				if (toggleBtn.classList.contains('is-active')) {
					autoplay.pause();
				} else {
					autoplay.play();
				}
			});
		}
	}
})();

/* ==== People / Environment / FootNav / Footer / ScrollAnimator ==== */
document.addEventListener('DOMContentLoaded', function () {
	// ScrollAnimator: IntersectionObserver toggles .is-animate on .js-animate elements
	(function initScrollAnimator() {
		var targets = document.querySelectorAll('.js-animate');
		if (!targets.length || typeof IntersectionObserver === 'undefined') return;

		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-animate');
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

		targets.forEach(function (el) { io.observe(el); });
	})();

	// People: Swiper carousel init
	(function initPeopleSwiper() {
		var el = document.querySelector('.js-people-swiper');
		if (!el || !window.Swiper) return;

		new window.Swiper(el, {
			slidesPerView: 1.2,
			spaceBetween: 20,
			pagination: {
				el: el.querySelector('.swiper-pagination'),
				clickable: true,
			},
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev'),
			},
			breakpoints: {
				768: {
					slidesPerView: 2.5,
					spaceBetween: 30,
				},
				1025: {
					slidesPerView: 3.5,
					spaceBetween: 40,
				},
			},
		});
	})();
});

/* ==== Business / Flow / About / Discovery ==== */
(function () {
	'use strict';

	/* ---------- Business modals ---------- */
	document.addEventListener('DOMContentLoaded', function () {
		var modals = document.querySelectorAll('[data-modal]');
		if (!modals.length) return;

		var openModal = function (id) {
			if (!id) return;
			// Close any open modals first.
			document.querySelectorAll('[data-modal].is-open').forEach(function (m) {
				m.classList.remove('is-open');
				m.setAttribute('aria-hidden', 'true');
			});
			var target = document.querySelector('[data-modal="' + id + '"]');
			if (!target) return;
			target.classList.add('is-open');
			target.setAttribute('aria-hidden', 'false');
			document.body.classList.add('is-menu-open');
		};

		var closeModal = function () {
			document.querySelectorAll('[data-modal].is-open').forEach(function (m) {
				m.classList.remove('is-open');
				m.setAttribute('aria-hidden', 'true');
			});
			document.body.classList.remove('is-menu-open');
		};

		// Open triggers.
		document.querySelectorAll('[data-modal-open]').forEach(function (btn) {
			btn.addEventListener('click', function (e) {
				e.preventDefault();
				openModal(btn.getAttribute('data-modal-open'));
			});
		});

		// Close triggers (X button, "閉じる" link).
		document.querySelectorAll('[data-modal-close]').forEach(function (btn) {
			btn.addEventListener('click', function (e) {
				e.preventDefault();
				closeModal();
			});
		});

		// Prev / Next navigation.
		document.querySelectorAll('[data-modal-prev]').forEach(function (btn) {
			btn.addEventListener('click', function (e) {
				e.preventDefault();
				var id = btn.getAttribute('data-modal-prev');
				if (id) openModal(id);
			});
		});
		document.querySelectorAll('[data-modal-next]').forEach(function (btn) {
			btn.addEventListener('click', function (e) {
				e.preventDefault();
				var id = btn.getAttribute('data-modal-next');
				if (id) openModal(id);
			});
		});

		// Click on overlay (outside .modalBox) closes.
		modals.forEach(function (overlay) {
			overlay.addEventListener('click', function (e) {
				if (e.target === overlay) closeModal();
			});
		});

		// Escape key closes.
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') closeModal();
		});
	});

	/* ---------- About: animate number counters on scroll-into-view ---------- */
	document.addEventListener('DOMContentLoaded', function () {
		var cards = document.querySelectorAll('.numCard[data-num-target]');
		if (!cards.length) return;

		if (typeof IntersectionObserver === 'undefined') {
			// Fallback: just set final value.
			cards.forEach(function (card) {
				var t = parseInt(card.getAttribute('data-num-target'), 10) || 0;
				var disp = card.querySelector('[data-num-display]');
				if (disp) disp.textContent = String(t);
			});
			return;
		}

		var animateCard = function (card) {
			var target = parseInt(card.getAttribute('data-num-target'), 10) || 0;
			var disp = card.querySelector('[data-num-display]');
			if (!disp) return;
			var duration = 1800;
			var start = performance.now();
			var step = function (now) {
				var elapsed = now - start;
				var progress = Math.min(elapsed / duration, 1);
				var eased = 1 - Math.pow(1 - progress, 3);
				disp.textContent = String(Math.round(eased * target));
				if (progress < 1) requestAnimationFrame(step);
			};
			requestAnimationFrame(step);
		};

		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting && !entry.target.dataset.numStarted) {
					entry.target.dataset.numStarted = '1';
					animateCard(entry.target);
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.3 });

		cards.forEach(function (card) { io.observe(card); });
	});
})();
