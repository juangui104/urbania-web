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

  const bgs = document.querySelectorAll('.hero__bg, .hero-interior__bg');
  if (!bgs.length) return;

  let ticking = false;

  function update() {
    const sy = window.scrollY;
    bgs.forEach(bg => {
      const rect = bg.parentElement.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      bg.style.transform = 'translateY(' + (sy * 0.35) + 'px)';
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
})();

/* ── 11. PAGE TRANSITIONS ────────────────────────────────── */
(function initPageTransitions() {
  const overlay = document.createElement('div');
  overlay.id = 'page-transition';
  document.body.appendChild(overlay);

  // Fade in: revelar la página al llegar
  requestAnimationFrame(() => requestAnimationFrame(() => {
    overlay.classList.add('is-hidden');
  }));

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href
      || href.startsWith('#')
      || href.startsWith('http')
      || href.startsWith('tel:')
      || href.startsWith('mailto:')
      || link.target === '_blank'
      || link.hasAttribute('download')
    ) return;

    e.preventDefault();
    overlay.classList.remove('is-hidden');
    setTimeout(() => { window.location.href = href; }, 450);
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
