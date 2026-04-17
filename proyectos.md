---
layout: page
title: "Proyectos — Urbania Construcción y Remodelación · Medellín"
description: "Portafolio de Urbania — Casa Calera, Apartamento Cantero y más. Proyectos de construcción y remodelación premium en Medellín."
keywords: "portafolio construcción Medellín, proyectos remodelación Colombia, obras terminadas Medellín"
og_title: "Proyectos — Urbania Construcción y Remodelación · Medellín"
og_description: "Portafolio de obras: construcción nueva, remodelación y acabados en Medellín. Cada proyecto, una declaración de carácter."
og_image: "https://urbania-site.netlify.app/assets/og-proyectos.jpg"
permalink: /proyectos/
---

  <!-- HERO -->
  <section class="hero-interior" aria-label="Proyectos">
    <div class="hero-interior__bg" style="background-image: url('/assets/images/proyectos/cantero-1.webp');"></div>
    <div class="hero-interior__overlay"></div>
    <div class="hero-interior__content">
      <div class="container">
        <span class="hero-interior__label">Portafolio</span>
        <h1 class="hero-interior__title animate-on-scroll">Proyectos</h1>
        <p class="animate-on-scroll delay-1" style="font-size:var(--text-xl); color:rgba(255,255,255,0.72); max-width:42ch; margin-top:var(--space-4); font-family:var(--font-display); font-weight:400; line-height:1.45; letter-spacing:-0.01em;">
          Cada proyecto es la prueba de que es posible.
        </p>
      </div>
    </div>
  </section>

  <!-- GRID DE PROYECTOS -->
  <section class="py-section-lg" style="background: var(--color-negro);" aria-labelledby="proyectos-grid-titulo">
    <div class="container">

      <div class="section-header animate-on-scroll">
        <span class="gold-line"></span>
        <span class="section-label">Nuestro trabajo</span>
        <h2 id="proyectos-grid-titulo" class="section-header__title" style="font-size: clamp(var(--text-2xl), 3vw, var(--text-4xl));">
          Resultados que hablan por sí solos
        </h2>
      </div>

      <!-- FILTROS -->
      <div class="project-filters animate-on-scroll" role="group" aria-label="Filtrar proyectos por categoría">
        <button class="filter-btn active" data-filter="todos" aria-pressed="true">Todos</button>
        <button class="filter-btn" data-filter="obra-nueva" aria-pressed="false">Obra nueva</button>
        <button class="filter-btn" data-filter="remodelacion" aria-pressed="false">Remodelación</button>
        <button class="filter-btn" data-filter="acabados-interiorismo" aria-pressed="false">Acabados e interiorismo</button>
      </div>

      <!-- LISTA DE PROYECTOS (generada con Liquid) -->
      <div id="projects-list" class="flex flex-col gap-8">
        {% assign proyectos_ordenados = site.proyectos | sort: "año" | reverse %}
        {% for proyecto in proyectos_ordenados %}
        {% assign cat_slug = proyecto.categoria | downcase | replace: " ", "-" | replace: "é", "e" | replace: "ó", "o" %}
        <article class="project-card-lg animate-on-scroll{% if forloop.index0 == 1 %} project-card-lg--reverse delay-1{% endif %}" data-category="{{ cat_slug }}">
          <a href="{{ proyecto.url }}" class="project-card-lg__img-wrap" aria-label="Ver proyecto {{ proyecto.title }}">
            <img src="{{ proyecto.imagen_principal }}" alt="{{ proyecto.title }}" class="project-card-lg__img" width="900" height="700" loading="lazy" />
          </a>
          <div class="project-card-lg__body">
            <span class="project-card-lg__category">{{ proyecto.categoria }}</span>
            <h3 class="project-card-lg__title">{{ proyecto.title }}</h3>
            <div class="project-card-lg__meta">
              <span class="project-card-lg__meta-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ proyecto.ubicacion }}
              </span>
              <span class="project-card-lg__meta-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                {{ proyecto.anio }}
              </span>
              <span class="project-card-lg__meta-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Entregado
              </span>
            </div>
            <p class="project-card-lg__desc">{{ proyecto.descripcion_corta }}</p>
            <a href="{{ proyecto.url }}" class="btn btn-outline-dorado" style="align-self:flex-start; margin-top:var(--space-2);">
              Ver proyecto
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
        {% endfor %}
      </div>

      <div id="no-results" style="display:none; text-align:center; padding: var(--space-20) 0;">
        <p style="color:rgba(255,255,255,0.35); font-size:var(--text-sm); letter-spacing:0.06em;">
          No hay proyectos en esta categoría aún. <a href="/contacto/" style="color:var(--color-dorado);">¿Tenés uno en mente?</a>
        </p>
      </div>

    </div>
  </section>

  <!-- CTA -->
  <section class="cta-strip" aria-label="Cotiza tu proyecto">
    <div class="container">
      <h2 class="cta-strip__headline animate-on-scroll">¿Tu proyecto podría ser el próximo?</h2>
      <p class="cta-strip__sub animate-on-scroll delay-1">
        Contáctanos y cuéntanos qué tenés en mente. Te respondemos en menos de 24 horas con una evaluación inicial.
      </p>
      <a href="/contacto/" class="btn btn-dorado animate-on-scroll delay-2">
        Cotizar mi proyecto
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </section>

  <script>
  (function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects   = document.querySelectorAll('#projects-list article[data-category]');
    const noResults  = document.getElementById('no-results');
    if (!filterBtns.length || !projects.length) return;
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const filter = this.dataset.filter;
        filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
        this.classList.add('active');
        this.setAttribute('aria-pressed','true');
        let visible = 0;
        projects.forEach(card => {
          const match = filter === 'todos' || card.dataset.category === filter;
          if (match) {
            card.style.display = '';
            card.classList.remove('visible');
            requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
            visible++;
          } else {
            card.style.display = 'none';
          }
        });
        noResults.style.display = visible === 0 ? 'block' : 'none';
      });
    });
  })();
  </script>
