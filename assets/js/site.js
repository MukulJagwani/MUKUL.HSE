(() => {
  'use strict';

  const nav = document.getElementById('site-nav');
  const links = document.getElementById('primary-links');
  const toggle = document.getElementById('menu-toggle');
  const menuLabel = document.getElementById('menu-label');
  const mobile = window.matchMedia('(max-width: 63.999rem)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const navAnchors = [...links.querySelectorAll('a[href^="#"]')];
  const sections = navAnchors.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  let menuOpen = false;

  function updateNavHeight() {
    // A non-sticky header in short landscape viewports needs no scroll offset.
    const height = window.getComputedStyle(nav).position === 'sticky' ? nav.getBoundingClientRect().height : 0;
    document.documentElement.style.setProperty('--nav-height', `${Math.ceil(height)}px`);
  }

  function setMenu(open, restoreFocus = false) {
    menuOpen = mobile.matches && open;
    links.hidden = mobile.matches && !menuOpen;
    toggle.setAttribute('aria-expanded', String(menuOpen));
    menuLabel.textContent = menuOpen ? 'Close' : 'Menu';
    if (restoreFocus && mobile.matches) toggle.focus();
    updateNavHeight();
  }

  function syncNavigation() {
    const focused = document.activeElement;
    toggle.hidden = !mobile.matches;
    setMenu(false);
    if (mobile.matches && links.contains(focused)) toggle.focus();
    if (!mobile.matches && focused === toggle) navAnchors[0].focus();
  }

  toggle.addEventListener('click', () => setMenu(!menuOpen));
  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuOpen) {
      event.preventDefault();
      setMenu(false, true);
    }
  });
  document.addEventListener('click', event => {
    if (menuOpen && !nav.contains(event.target)) setMenu(false);
  });
  nav.addEventListener('focusout', () => {
    window.setTimeout(() => {
      if (menuOpen && !nav.contains(document.activeElement)) setMenu(false);
    }, 0);
  });
  navAnchors.forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    setMenu(false);
    const section = document.getElementById(link.hash.slice(1));
    const heading = section && section.querySelector('h1, h2');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
    // Let the browser update the hash and scroll so navigation also works without JS.
  }));
  if (mobile.addEventListener) mobile.addEventListener('change', syncNavigation);
  else mobile.addListener(syncNavigation);
  nav.dataset.enhanced = 'true';
  syncNavigation();
  if ('ResizeObserver' in window) new ResizeObserver(updateNavHeight).observe(nav);
  window.addEventListener('resize', updateNavHeight, { passive: true });

  // Active-section indication does not affect the native anchor behaviour.
  let activeFrame = 0;
  function updateActiveSection() {
    activeFrame = 0;
    const offset = (window.getComputedStyle(nav).position === 'sticky' ? nav.getBoundingClientRect().height : 0) + 110;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) current = sections[sections.length - 1];
    navAnchors.forEach(link => {
      if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function requestActiveUpdate() {
    if (!activeFrame) activeFrame = window.requestAnimationFrame(updateActiveSection);
  }
  window.addEventListener('scroll', requestActiveUpdate, { passive: true });
  window.addEventListener('resize', requestActiveUpdate, { passive: true });
  window.addEventListener('load', requestActiveUpdate);
  window.addEventListener('hashchange', requestActiveUpdate);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(requestActiveUpdate);
  updateActiveSection();

  // Only enhance image links when a native modal is available. PDFs and fallback
  // links remain ordinary files that can be opened, saved, or used without JS.
  const viewer = document.getElementById('document-viewer');
  if (viewer && typeof viewer.showModal === 'function') {
    const image = document.getElementById('viewer-image');
    const title = document.getElementById('viewer-title');
    const close = document.getElementById('viewer-close');
    const zoom = document.getElementById('viewer-zoom');
    const stage = document.getElementById('viewer-stage');
    const original = document.getElementById('viewer-original');
    const download = document.getElementById('viewer-download');
    const status = document.getElementById('viewer-status');
    let opener = null;
    let previousOverflow = '';

    function resetZoom() {
      stage.classList.remove('is-zoomed');
      stage.scrollTop = 0;
      stage.scrollLeft = 0;
      zoom.setAttribute('aria-pressed', 'false');
      zoom.textContent = 'Zoom in';
    }

    document.querySelectorAll('a[data-image-viewer]').forEach(link => {
      link.setAttribute('aria-haspopup', 'dialog');
      link.setAttribute('aria-controls', 'document-viewer');
      link.addEventListener('click', event => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const href = link.getAttribute('href');
        if (!href || viewer.open) return;
        opener = link;
        title.textContent = link.dataset.title || 'Certificate';
        image.alt = title.textContent;
        image.src = href;
        original.href = href;
        download.href = href;
        status.hidden = true;
        resetZoom();
        previousOverflow = document.body.style.overflow;
        try {
          viewer.showModal();
        } catch {
          // The original link is still followed if the modal cannot be opened.
          image.removeAttribute('src');
          opener = null;
          return;
        }
        event.preventDefault();
        document.body.style.overflow = 'hidden';
        close.focus({ preventScroll: true });
      });
    });

    close.addEventListener('click', () => viewer.close());
    viewer.addEventListener('cancel', event => {
      event.preventDefault();
      viewer.close();
    });
    viewer.addEventListener('click', event => {
      if (event.target !== viewer) return;
      const rect = viewer.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) viewer.close();
    });
    viewer.addEventListener('close', () => {
      document.body.style.overflow = previousOverflow;
      image.removeAttribute('src');
      resetZoom();
      if (opener && opener.isConnected) opener.focus({ preventScroll: true });
      opener = null;
    });
    zoom.addEventListener('click', () => {
      const zoomed = stage.classList.toggle('is-zoomed');
      zoom.setAttribute('aria-pressed', String(zoomed));
      zoom.textContent = zoomed ? 'Fit image' : 'Zoom in';
      stage.scrollTop = 0;
      stage.scrollLeft = 0;
      if (zoomed) stage.focus({ preventScroll: true });
    });
    image.addEventListener('error', () => {
      if (viewer.open) status.hidden = false;
    });
    image.addEventListener('load', () => { status.hidden = true; });
  }

  // Optional, one-time entrances: no hidden states, scroll loops, or dependencies.
  const motionTargets = [...document.querySelectorAll('.reveal, .credential-group-heading')];
  const entered = new WeakSet();
  let motionObserver = null;

  function clearEntrance(element) {
    element.classList.remove('motion-enter');
    element.style.setProperty('--entry-delay', '0ms');
  }

  motionTargets.forEach(element => {
    element.addEventListener('animationend', event => {
      if (event.target === element && event.animationName === 'portfolio-arrive') clearEntrance(element);
    });
  });

  function syncMotion() {
    if (motionObserver) motionObserver.disconnect();
    motionObserver = null;
    motionTargets.forEach(clearEntrance);
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

    try {
      const observer = new IntersectionObserver(entries => {
        // Ignore a queued notification after the visitor changes motion settings.
        if (reducedMotion.matches || motionObserver !== observer) return;
        let stagger = 0;
        entries.forEach(entry => {
          if (!entry.isIntersecting || entered.has(entry.target)) return;
          const element = entry.target;
          entered.add(element);
          observer.unobserve(element);
          // Focused content stays still, including headings reached via navigation.
          if (element.contains(document.activeElement) || document.visibilityState === 'hidden') return;
          element.style.setProperty('--entry-delay', `${Math.min(stagger++, 3) * 55}ms`);
          element.classList.add('motion-enter');
          // Also remove the class when animationend is unavailable or interrupted.
          window.setTimeout(() => clearEntrance(element), 900);
        });
      }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
      motionObserver = observer;
      motionTargets.forEach(element => {
        if (!entered.has(element)) observer.observe(element);
      });
    } catch {
      // Unsupported enhancement never affects document visibility or navigation.
      if (motionObserver) motionObserver.disconnect();
      motionObserver = null;
    }
  }

  syncMotion();
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', syncMotion);
  else if (reducedMotion.addListener) reducedMotion.addListener(syncMotion);
})();
