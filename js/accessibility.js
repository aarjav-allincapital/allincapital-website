/* Accessibility behaviour: skip link, menu, dialogs, FAQs, carousel controls.
   Runs after common.js / home.js / portfolio.js and adds to them. */
(function () {
  'use strict';

  var FOCUSABLE = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])', 'textarea:not([disabled])', '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function visible(el) {
    if (!el) return false;
    if (el.offsetParent === null && getComputedStyle(el).position !== 'fixed') return false;
    var s = getComputedStyle(el);
    return s.display !== 'none' && s.visibility !== 'hidden';
  }

  function focusableWithin(root) {
    return Array.prototype.filter.call(root.querySelectorAll(FOCUSABLE), visible);
  }

  // Keeps Tab inside `root`. Returns a teardown fn.
  function trapFocus(root) {
    function onKeydown(e) {
      if (e.key !== 'Tab') return;
      var items = focusableWithin(root);
      if (!items.length) { e.preventDefault(); return; }
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || !root.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKeydown, true);
    return function () { document.removeEventListener('keydown', onKeydown, true); };
  }

  /* Skip to main content */

  function navbarOffset() {
    var bar = document.querySelector('.page-header, .allstars-navbar, .fnf-navbar, .navbar');
    if (!bar || !visible(bar)) return 0;
    var pos = getComputedStyle(bar).position;
    if (pos !== 'fixed' && pos !== 'sticky') return 0; // only a pinned bar covers content
    return bar.getBoundingClientRect().height;
  }

  // The header is fixed, so <main> starts at y=0 and scrolling to it moves
  // nothing. Aim at the first thing inside it that actually paints.
  function firstRenderedNode(root) {
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          if (node.nodeType === 3) {
            return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
          return (node.tagName === 'IMG' || node.tagName === 'SVG' || node.tagName === 'VIDEO')
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        },
      }
    );
    var node;
    while ((node = walker.nextNode())) {
      var el = node.nodeType === 3 ? node.parentElement : node;
      if (!el || !visible(el)) continue;
      if (el.closest('[aria-hidden="true"]')) continue;
      var r = el.getBoundingClientRect();
      if (r.height > 0 && r.width > 0) return el;
    }
    return root;
  }

  function scrollToMain(target) {
    var anchor = firstRenderedNode(target);
    var gap = 12;
    var top = anchor.getBoundingClientRect().top + window.pageYOffset - navbarOffset() - gap;
    var max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    if (top < 0) top = 0;
    if (top > max) top = max;
    try {
      window.scrollTo({ top: top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    } catch (err) {
      window.scrollTo(0, top); // older browsers ignore the options object
    }
  }

  function initSkipLink() {
    var link = document.querySelector('.skip-link');
    var target = document.getElementById('main-content');
    if (!link || !target) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();

      // preventScroll so the smooth scroll below isn't pre-empted
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });

      // Home parks <main> at top:100vh behind the hero — let it collapse first
      var hero = document.querySelector('.banner');
      var arrow = document.querySelector('.arrow-move');
      if (hero && visible(hero) && arrow && window.jQuery) {
        window.jQuery(arrow).trigger('click');
        window.setTimeout(function () { scrollToMain(target); }, 1100);
      } else {
        scrollToMain(target);
      }

      if (history.replaceState) history.replaceState(null, '', '#main-content');
    });
  }

  /* Menu overlay */

  function initMenu() {
    var menu = document.getElementById('menu');
    var openBtn = document.querySelector('.main-menu');
    var closeBtn = document.querySelector('.close-menu');
    if (!menu || !openBtn) return;

    var releaseTrap = null;
    var wasOpen = visible(menu);

    // common.js shows/hides with jQuery — watch the element rather than guess
    // which control fired, so state stays right however it was toggled.
    function sync() {
      var open = visible(menu);
      if (open === wasOpen) return;
      wasOpen = open;

      openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');

      if (open) {
        if (releaseTrap) releaseTrap();
        releaseTrap = trapFocus(menu);
        var first = focusableWithin(menu)[0];
        if (first) first.focus();
      } else {
        if (releaseTrap) { releaseTrap(); releaseTrap = null; }
        // only reclaim focus if it was lost inside the overlay
        var active = document.activeElement;
        if (!active || active === document.body || menu.contains(active)) openBtn.focus();
      }
    }

    var observer = new MutationObserver(sync);
    observer.observe(menu, { attributes: true, attributeFilter: ['style', 'class', 'hidden'] });
    if (closeBtn) observer.observe(closeBtn, { attributes: true, attributeFilter: ['style', 'class'] });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' && e.key !== 'Esc') return;
      if (!visible(menu)) return;
      e.preventDefault();
      if (closeBtn) {
        closeBtn.click();
      } else if (window.jQuery) {
        window.jQuery(menu).hide();
        window.jQuery('body').css('overflow', '');
      }
      window.setTimeout(sync, 0);
    });
  }

  /* Carousel pause/play */

  var ICONS =
    '<svg class="a11y-icon-pause" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>' +
    '<svg class="a11y-icon-play" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path d="M7 4l13 8-13 8z"/></svg>';

  function lottieApi() {
    return window.bodymovin || window.lottie || null;
  }

  function lottiesIn(region) {
    var api = lottieApi();
    if (!api || typeof api.getRegisteredAnimations !== 'function') return [];
    try {
      return api.getRegisteredAnimations().filter(function (anim) {
        var el = anim.wrapper || (anim.renderer && anim.renderer.svgElement);
        return el && region.contains(el);
      });
    } catch (err) {
      return [];
    }
  }

  function buildToggle(region, carousels) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'a11y-motion-toggle';
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', 'Pause the slideshow');
    btn.innerHTML = ICONS;

    function setPaused(paused) {
      btn.setAttribute('aria-pressed', paused ? 'true' : 'false');
      btn.setAttribute('aria-label', paused ? 'Play the slideshow' : 'Pause the slideshow');

      carousels.forEach(function (c) {
        if (!window.jQuery) return;
        try { window.jQuery(c).trigger(paused ? 'stop.owl.autoplay' : 'play.owl.autoplay'); } catch (err) { /* noop */ }
      });

      lottiesIn(region).forEach(function (anim) {
        try { paused ? anim.pause() : anim.play(); } catch (err) { /* noop */ }
      });
    }

    btn.addEventListener('click', function () {
      setPaused(btn.getAttribute('aria-pressed') !== 'true');
    });

    if (prefersReducedMotion()) setPaused(true);

    return btn;
  }

  // True only while this carousel is actually auto-advancing. autoplay is set
  // per breakpoint, so it can change on resize.
  function autoplays(carousel) {
    if (!window.jQuery) return false;
    var owl = window.jQuery(carousel).data('owl.carousel');
    return !!(owl && owl.settings && owl.settings.autoplay);
  }

  // Carousels only — the small looping Lottie accents are decorative and get
  // no button. Reduced motion still stops them, below.
  function initMotionControls() {
    var carousels = Array.prototype.slice.call(document.querySelectorAll('.owl-carousel'));

    carousels.forEach(function (carousel) {
      var existing = carousel.querySelector(':scope > .a11y-motion-toggle');

      // no button when there is no motion to pause
      if (!autoplays(carousel)) {
        if (existing) existing.remove();
        carousel.classList.remove('a11y-motion-region');
        return;
      }

      // on the carousel itself, so the button sits next to what it controls
      if (existing) return;
      carousel.classList.add('a11y-motion-region');
      carousel.appendChild(buildToggle(carousel, [carousel]));
    });

    if (prefersReducedMotion()) {
      var api = lottieApi();
      if (api && typeof api.getRegisteredAnimations === 'function') {
        try {
          api.getRegisteredAnimations().forEach(function (anim) {
            var el = anim.wrapper || (anim.renderer && anim.renderer.svgElement);
            if (el && el.closest('.owl-carousel')) return; // has a toggle
            try { anim.pause(); } catch (err) { /* noop */ }
          });
        } catch (err) { /* noop */ }
      }
    }
  }

  /* Dialogs */

  function initDialogs() {
    if (!window.jQuery) return;
    var $ = window.jQuery;
    var lastTrigger = null;
    var releaseTrap = null;

    // Portfolio cards call .modal('show') directly rather than using
    // [rel="modal:open"], so track the last control either way.
    document.addEventListener('click', function (e) {
      var control = e.target.closest ? e.target.closest('a[href], button, [rel="modal:open"]') : null;
      if (control && !control.closest('.modal')) lastTrigger = control;
    }, true);

    $(document).on('modal:open', function (e, modal) {
      var el = modal && modal.$elm ? modal.$elm[0] : null;
      if (!el) return;
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-modal', 'true');
      if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')) {
        var heading = el.querySelector('h1, h2, h3, h4, h5, h6, .portfolio-card--title');
        if (heading) {
          if (!heading.id) heading.id = 'dlg-title-' + Math.random().toString(36).slice(2, 9);
          el.setAttribute('aria-labelledby', heading.id);
        } else {
          el.setAttribute('aria-label', 'Details');
        }
      }
      if (releaseTrap) releaseTrap();
      releaseTrap = trapFocus(el);
      var first = focusableWithin(el)[0] || el;
      if (!first.hasAttribute('tabindex') && first === el) el.setAttribute('tabindex', '-1');
      first.focus();
    });

    $(document).on('modal:close', function () {
      if (releaseTrap) { releaseTrap(); releaseTrap = null; }
      if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
      lastTrigger = null;
    });

    // jquery-modal only handles Escape when it has focus
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' && e.key !== 'Esc') return;
      var active = ($.modal && typeof $.modal.isActive === 'function')
        ? $.modal.isActive()
        : !!document.querySelector('.modal.current');
      if (!active) return;
      e.preventDefault();
      try { $.modal.close(); } catch (err) { /* noop */ }
    });
  }

  // Owl builds its dots/arrows at runtime as empty buttons — name them.
  function nameCarouselControls() {
    Array.prototype.forEach.call(document.querySelectorAll('.owl-carousel'), function (carousel, ci) {
      var dots = carousel.querySelectorAll('.owl-dot');
      Array.prototype.forEach.call(dots, function (dot, i) {
        dot.removeAttribute('role'); // <button> already has it
        if (!dot.getAttribute('aria-label')) {
          dot.setAttribute('aria-label', 'Go to slide ' + (i + 1) + ' of ' + dots.length);
        }
        dot.setAttribute('aria-current', dot.classList.contains('active') ? 'true' : 'false');
      });

      var prev = carousel.querySelector('.owl-prev');
      var next = carousel.querySelector('.owl-next');
      if (prev && !prev.getAttribute('aria-label')) {
        prev.removeAttribute('role');
        prev.setAttribute('aria-label', 'Previous slide');
      }
      if (next && !next.getAttribute('aria-label')) {
        next.removeAttribute('role');
        next.setAttribute('aria-label', 'Next slide');
      }

      // loop mode clones slides — keep the duplicates out of the tab order
      // and off the screen reader so each story is announced once
      Array.prototype.forEach.call(carousel.querySelectorAll('.owl-item.cloned'), function (clone) {
        clone.setAttribute('aria-hidden', 'true');
        Array.prototype.forEach.call(clone.querySelectorAll(FOCUSABLE), function (el) {
          el.setAttribute('tabindex', '-1');
        });
      });

      var stage = carousel.querySelector('.owl-stage-outer');
      if (stage && !stage.getAttribute('aria-live')) {
        stage.setAttribute('aria-live', 'polite');
        stage.setAttribute('aria-atomic', 'false');
      }
      if (!carousel.getAttribute('role')) {
        carousel.setAttribute('role', 'group');
        carousel.setAttribute('aria-roledescription', 'carousel');
        if (!carousel.getAttribute('aria-label')) {
          carousel.setAttribute('aria-label', 'Content carousel ' + (ci + 1));
        }
      }
    });
  }

  /* FAQ accordions (CSS checkbox-hack) */

  function initFaqDisclosures() {
    Array.prototype.forEach.call(document.querySelectorAll('.faq > input[type="checkbox"]'), function (input) {
      var faq = input.parentElement;
      var content = faq.querySelector('.faq-content');
      if (!content) return;
      if (!content.id) content.id = input.id + '-answer';
      input.setAttribute('aria-controls', content.id);
      input.setAttribute('aria-expanded', input.checked ? 'true' : 'false');
      input.addEventListener('change', function () {
        input.setAttribute('aria-expanded', input.checked ? 'true' : 'false');
      });

      // a checkbox toggles on Space but ignores Enter
      input.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        input.checked = !input.checked;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });
  }

  // Fallback for any page still shipping the old clickable <img> arrow
  function initHeroArrow() {
    var arrow = document.querySelector('img.arrow-move');
    if (!arrow) return;
    arrow.setAttribute('role', 'button');
    arrow.setAttribute('tabindex', '0');
    arrow.setAttribute('alt', 'Scroll to main content');
    arrow.style.cursor = 'pointer';
    arrow.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        arrow.click();
      }
    });
  }

  function boot() {
    initSkipLink();
    initMenu();
    initDialogs();
    initFaqDisclosures();
    initHeroArrow();
    // carousels and lottie are built on document.ready — wait for the registry
    window.setTimeout(function () { initMotionControls(); nameCarouselControls(); }, 600);
    window.setTimeout(function () { initMotionControls(); nameCarouselControls(); }, 2500);

    // owl rebuilds dots and re-reads autoplay on breakpoint change
    if (window.jQuery) {
      window.jQuery(document).on('changed.owl.carousel refreshed.owl.carousel', function () {
        window.setTimeout(function () { nameCarouselControls(); initMotionControls(); }, 50);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
