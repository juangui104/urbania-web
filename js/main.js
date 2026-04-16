/* ============================================================
   URBANIA — main.js
   Navbar sticky · Menú móvil · Animaciones scroll · Scroll suave
   ============================================================ */

'use strict';

/* ── 1. NAVBAR STICKY ────────────────────────────────────── */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 60;

  function updateNavbar() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Ejecutar al cargar (en caso de refrescar con scroll)
  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });
})();

/* ── 2. MENÚ HAMBURGUESA ─────────────────────────────────── */
(function initMobileMenu() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  const mobileLinks = document.querySelectorAll('.navbar__mobile-menu .navbar__link');
  const body = document.body;

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Cerrar al hacer clic en un link del menú móvil
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ── 3. INTERSECTIONOBSERVER — Animaciones de entrada ──── */
(function initScrollAnimations() {
  const targets = document.querySelectorAll(
    '.animate-on-scroll, .animate-fade-left, .animate-fade, .animate-scale-in'
  );

  if (!targets.length) return;

  // Si el navegador no soporta IntersectionObserver, mostrar todo
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Una vez visible, dejar de observar
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,      // Empieza a animar cuando 12% es visible
      rootMargin: '0px 0px -48px 0px' // Offset inferior
    }
  );

  targets.forEach(el => observer.observe(el));
})();

/* ── 4. HERO BG — quitar clase 'loaded' para Ken Burns ─── */
(function initHeroBg() {
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;

  // La animación kenBurns en animations.css ya maneja esto
  // Simplemente asegurar que la imagen esté cargada
  const bgUrl = window.getComputedStyle(heroBg).backgroundImage;
  if (bgUrl && bgUrl !== 'none') {
    const urlMatch = bgUrl.match(/url\(["']?([^"')]+)["']?\)/);
    if (urlMatch) {
      const img = new Image();
      img.onload = () => heroBg.classList.add('loaded');
      img.src = urlMatch[1];
    }
  }
})();

/* ── 5. SCROLL SUAVE para anclas internas ─────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
        10
      ) || 80;

      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });
})();

/* ── 6. LINK ACTIVO en navbar ────────────────────────────── */
(function initActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.navbar__link, .navbar__mobile-menu .navbar__link');

  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPage = href.split('/').pop();

    if (
      linkPage === currentPage ||
      (currentPage === '' && linkPage === 'index.html')
    ) {
      link.classList.add('active');
    }
  });
})();

/* ── 7. LAZY LOADING para imágenes con data-src ─────────── */
(function initLazyImages() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  if (!lazyImages.length) return;

  if (!('IntersectionObserver' in window)) {
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
    return;
  }

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImages.forEach(img => imgObserver.observe(img));
})();

/* ── 8. CURSOR PERSONALIZADO ─────────────────────────────── */
(function initCustomCursor() {
  // Solo en dispositivos con mouse real
  if (!window.matchMedia('(hover: hover)').matches) return;
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mX = -100, mY = -100;
  let rX = -100, rY = -100;

  document.addEventListener('mousemove', e => {
    mX = e.clientX;
    mY = e.clientY;
    dot.style.left = mX + 'px';
    dot.style.top  = mY + 'px';
  });

  // Anillo sigue con lerp (retraso suave)
  (function loop() {
    rX += (mX - rX) * 0.11;
    rY += (mY - rY) * 0.11;
    ring.style.left = rX + 'px';
    ring.style.top  = rY + 'px';
    requestAnimationFrame(loop);
  })();

  // Estados hover
  document.addEventListener('mouseover', e => {
    const isLink    = e.target.closest('a, button, [role="button"]');
    const isProject = e.target.closest(
      '.project-card, .project-card-lg__img-wrap, .gallery-main, .gallery-thumb'
    );
    ring.classList.toggle('is-hover',     !!(isLink || isProject));
    ring.classList.toggle('is-hover-img', !!isProject);
  });

  // Ocultar al salir de la ventana
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();

/* ── 9. REVEAL SCROLL SYSTEM ─────────────────────────────── */
(function initReveal() {
  // Stagger: asignar delays a hijos de contenedores marcados
  document.querySelectorAll('[data-reveal-stagger]').forEach(container => {
    container
      .querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale')
      .forEach((el, i) => {
        el.style.transitionDelay = (i * 0.12).toFixed(2) + 's';
      });
  });

  const sel = '.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .gold-line-reveal';
  const targets = document.querySelectorAll(sel);
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('revealed'));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => obs.observe(el));
})();

/* ── 10. PARALLAX HERO ───────────────────────────────────── */
(function initParallax() {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  var HERO_FACTOR  = 0.30;
  var CARD_FACTOR  = 0.05;

  var heroBgs      = Array.prototype.slice.call(document.querySelectorAll('.hero__bg, .hero-interior__bg'));
  var projectCards = Array.prototype.slice.call(document.querySelectorAll('.project-card'));

  if (!heroBgs.length && !projectCards.length) return;

  var ticking = false;

  function update() {
    var vh = window.innerHeight;

    heroBgs.forEach(function(bg) {
      var hero = bg.parentElement;
      var rect = hero.getBoundingClientRect();
      /* skip if hero is fully off-screen */
      if (rect.bottom < -vh || rect.top > vh * 2) return;
      /* offset is relative to how far the top of the hero is above viewport */
      var offset = -rect.top * HERO_FACTOR;
      bg.style.translate = '0 ' + offset + 'px';
    });

    projectCards.forEach(function(card, i) {
      var rect = card.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      var center = rect.top + rect.height / 2 - vh / 2;
      var dir = (i % 2 === 0) ? -1 : 1;
      card.style.translate = '0 ' + (center * CARD_FACTOR * dir) + 'px';
    });

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  update();
})();

/* ── 11. PAGE TRANSITIONS ────────────────────────────────── */
(function initPageTransitions() {
  var overlay = document.createElement('div');
  overlay.id = 'page-transition';
  /* Empieza en fade-out (negro) y se retira para hacer el fade-in */
  overlay.classList.add('fade-out');
  document.body.appendChild(overlay);

  /* Fade in al cargar: quitar fade-out dos frames después para
     garantizar que el navegador haya pintado el estado inicial */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      overlay.classList.remove('fade-out');
    });
  });

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href
      || href.startsWith('#')
      || href.startsWith('http')
      || href.startsWith('tel:')
      || href.startsWith('mailto:')
      || href.startsWith('wa.me')
      || href.startsWith('/admin')
      || link.target === '_blank'
      || link.hasAttribute('download')
    ) return;

    e.preventDefault();
    overlay.classList.add('fade-out');
    setTimeout(function () { window.location.href = href; }, 400);
  });
})();

/* ── 12. CONTADOR ANIMADO DE CIFRAS ─────────────────────── */
(function initCounters() {
  const items = document.querySelectorAll('[data-count]');
  if (!items.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const to     = parseInt(el.dataset.count, 10);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const t0     = performance.now();
      const dur    = 2000;

      function tick(now) {
        const progress = Math.min((now - t0) / dur, 1);
        const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cúbico
        el.textContent = prefix + Math.round(eased * to) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  items.forEach(el => obs.observe(el));
})();

/* ── TICKER JS (fallback táctil) ─────────────────────────── */
(function initTickerFallback() {
  if (!('ontouchstart' in window)) return;

  function animateTrack(track, rtl) {
    if (!track) return;
    track.style.animation = 'none';
    track.style.webkitAnimation = 'none';

    const totalWidth = track.scrollWidth / 2;
    let position = rtl ? totalWidth : 0;
    const speed = 0.8;

    function step() {
      if (rtl) {
        position -= speed;
        if (position <= 0) position = totalWidth;
      } else {
        position += speed;
        if (position >= totalWidth) position = 0;
      }
      track.style.transform = 'translateX(-' + position + 'px)';
      track.style.webkitTransform = 'translateX(-' + position + 'px)';
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  window.addEventListener('load', function () {
    document.querySelectorAll('.ticker-track').forEach(function (track) {
      animateTrack(track, track.classList.contains('ticker-track--rtl'));
    });
  });
})();

/* ── HERO REVEAL CINEMATOGRÁFICO ────────────────────────── */
(function initHeroReveal() {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Split el.innerHTML by <br> into mask → inner span pairs */
  function buildLines(el) {
    var parts = el.innerHTML
      .split(/<br\s*\/?>/i)
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
    el.innerHTML = '';
    return parts.map(function (html) {
      var mask  = document.createElement('span');
      mask.className = 'hero-line-mask';
      var inner = document.createElement('span');
      inner.className = 'hero-line-inner';
      inner.innerHTML = html;
      mask.appendChild(inner);
      el.appendChild(mask);
      return inner;
    });
  }

  /* Mask-reveal con stagger de líneas. delays = array de segundos */
  function revealLines(el, delays) {
    if (!el) return;
    el.classList.remove('animate-on-scroll', 'delay-1', 'delay-2', 'delay-3');
    el.style.opacity    = '1';
    el.style.transform  = 'none';
    el.style.transition = 'none';
    if (reduced) return;
    buildLines(el).forEach(function (inner, i) {
      var d = i < delays.length
        ? delays[i]
        : delays[delays.length - 1] + (i - delays.length + 1) * 0.18;
      inner.style.animationDelay = d + 's';
      inner.classList.add('hero-line-inner--animated');
    });
  }

  /* Fade-up para labels, subtítulos y botones */
  function revealFade(el, delay) {
    if (!el) return;
    el.classList.remove('animate-on-scroll', 'delay-1', 'delay-2', 'delay-3');
    el.style.transition = 'none';
    if (reduced) {
      el.style.opacity   = '1';
      el.style.transform = 'none';
      return;
    }
    el.style.animationDelay = delay + 's';
    el.classList.add('hero-reveal-fade--animated');
  }

  /* ── index.html ──────────────────────────────────────── */
  var headline = document.querySelector('.hero__headline');
  if (headline) {
    headline.style.animation = 'none';  /* cancela heroFadeUp del CSS */
    var sub     = document.querySelector('.hero__sub');
    var actions = document.querySelector('.hero__actions');
    if (sub) sub.style.animation = 'none';

    revealLines(headline, [0.10, 0.30]);
    revealFade(sub,     0.90);
    revealFade(actions, 1.10);
    return;
  }

  /* ── Páginas interiores ──────────────────────────────── */
  var ic = document.querySelector('.hero-interior__content');
  if (!ic) return;

  var label = ic.querySelector('.hero-interior__label');
  var title = ic.querySelector('.hero-interior__title');
  var subEl = ic.querySelector('p');
  /* blog-articulo: no hay <p>, sí un div de meta con display:flex */
  var meta  = !subEl ? ic.querySelector('[style*="display:flex"]') : null;

  revealFade(label, 0.05);
  revealLines(title, [0.20, 0.40]);
  revealFade(subEl, 0.65);
  revealFade(meta,  0.65);
})();

/* ── LIGHTBOX GALERÍA ────────────────────────────────────── */
(function initLightbox() {
  var galleryImages = Array.prototype.slice.call(
    document.querySelectorAll('.project-gallery img, .project-gallery__row img')
  );
  if (!galleryImages.length) return;

  /* Construir DOM del lightbox */
  var overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Galería de imágenes');
  overlay.innerHTML =
    '<button class="lb-close" aria-label="Cerrar">\u00d7</button>' +
    '<button class="lb-nav lb-nav--prev" aria-label="Imagen anterior">&#8592;</button>' +
    '<img class="lb-img" src="" alt="" />' +
    '<button class="lb-nav lb-nav--next" aria-label="Imagen siguiente">&#8594;</button>' +
    '<div class="lb-counter"></div>';
  document.body.appendChild(overlay);

  var lbImg     = overlay.querySelector('.lb-img');
  var lbCounter = overlay.querySelector('.lb-counter');
  var current   = 0;

  /* Ícono de lupa en cada celda */
  var zoomSVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<circle cx="10.5" cy="10.5" r="6.5"/>' +
      '<line x1="15.5" y1="15.5" x2="21" y2="21"/>' +
      '<line x1="8" y1="10.5" x2="13" y2="10.5"/>' +
      '<line x1="10.5" y1="8" x2="10.5" y2="13"/>' +
    '</svg>';

  document.querySelectorAll('.project-gallery__main, .project-gallery__thumb')
    .forEach(function (cell) {
      var icon = document.createElement('span');
      icon.className = 'gallery-zoom-icon';
      icon.innerHTML = zoomSVG;
      cell.appendChild(icon);
    });

  /* Mostrar imagen por índice */
  function show(index) {
    current = ((index % galleryImages.length) + galleryImages.length) % galleryImages.length;
    lbImg.style.opacity = '0';
    setTimeout(function () {
      lbImg.src = galleryImages[current].src;
      lbImg.alt = galleryImages[current].alt;
      lbCounter.textContent = (current + 1) + ' / ' + galleryImages.length;
      lbImg.style.opacity = '1';
    }, 150);
  }

  function open(index) {
    show(index);
    overlay.classList.add('lb-overlay--open');
    document.body.style.overflow = 'hidden';
    overlay.querySelector('.lb-close').focus();
  }

  function close() {
    overlay.classList.remove('lb-overlay--open');
    document.body.style.overflow = '';
  }

  /* Clicks en imágenes de galería */
  galleryImages.forEach(function (img, i) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () { open(i); });
  });

  /* Controles del lightbox */
  overlay.querySelector('.lb-close').addEventListener('click', close);
  overlay.querySelector('.lb-nav--prev').addEventListener('click', function () { show(current - 1); });
  overlay.querySelector('.lb-nav--next').addEventListener('click', function () { show(current + 1); });

  /* Clic en overlay (fuera de la imagen) cierra */
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  /* Teclado */
  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('lb-overlay--open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  /* Swipe táctil */
  var touchStartX = 0;
  overlay.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  overlay.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      dx < 0 ? show(current + 1) : show(current - 1);
    }
  }, { passive: true });
})();
