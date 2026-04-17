---
layout: page
title: "Blog — Urbania Construcción y Remodelación · Medellín"
description: "Blog de Urbania — construcción, remodelación y tendencias de diseño para propietarios e inversores en Medellín."
keywords: "blog construcción Medellín, remodelación apartamento, consejos obra, interiorismo Colombia"
og_title: "Blog — Urbania Construcción y Remodelación · Medellín"
og_description: "Construcción, diseño y tendencias para propietarios e inversores en Medellín. Consejos reales de quienes hacen obra todos los días."
og_image: "https://urbania-site.netlify.app/assets/og-blog.jpg"
permalink: /blog/
---

  <!-- HERO -->
  <section class="hero-interior" aria-label="Blog">
    <div class="hero-interior__bg" style="background-image: url('/assets/images/hero/hero-blog.webp');"></div>
    <div class="hero-interior__overlay"></div>
    <div class="hero-interior__content">
      <div class="container">
        <span class="hero-interior__label animate-on-scroll">Conocimiento</span>
        <h1 class="hero-interior__title animate-on-scroll delay-1">Blog</h1>
        <p class="animate-on-scroll delay-2" style="font-size:var(--text-lg); color:rgba(255,255,255,0.72); max-width:50ch; margin-top:var(--space-4); line-height:1.65;">
          Construcción, diseño y tendencias para propietarios<br>e inversores en Medellín.
        </p>
      </div>
    </div>
  </section>

  {% assign posts_sorted = site.posts | sort: "date" | reverse %}

  <!-- ARTÍCULO DESTACADO -->
  {% if posts_sorted.size > 0 %}
  {% assign post_destacado = posts_sorted.first %}
  <section style="background:var(--color-negro); padding-block: var(--space-20);" aria-labelledby="featured-titulo">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <span class="gold-line"></span>
        <span class="section-label">Artículo destacado</span>
      </div>
      <a href="{{ post_destacado.url }}" class="article-featured animate-on-scroll" aria-label="Leer: {{ post_destacado.title }}">
        <div class="article-featured__img-wrap">
          <img src="{{ post_destacado.imagen }}" alt="{{ post_destacado.title }}" class="article-featured__img" width="900" height="700" loading="lazy" />
        </div>
        <div class="article-featured__body">
          <span class="article-featured__badge">{{ post_destacado.categoria }}</span>
          <h2 id="featured-titulo" class="article-featured__title">{{ post_destacado.title }}</h2>
          <p class="article-featured__excerpt">{{ post_destacado.extracto }}</p>
          <div class="article-featured__meta">
            <span class="article-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              {{ post_destacado.date | date: "%d %b %Y" }}
            </span>
          </div>
          <span class="btn-text" style="margin-top:var(--space-2);">
            Leer artículo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </a>
    </div>
  </section>
  {% endif %}

  <!-- GRID DE ARTÍCULOS -->
  <section style="background: rgba(255,255,255,0.02); padding-block: var(--space-20);" aria-labelledby="articulos-titulo">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <span class="gold-line"></span>
        <span class="section-label">Todos los artículos</span>
        <h2 id="articulos-titulo" class="section-header__title" style="font-size: clamp(var(--text-2xl), 3vw, var(--text-4xl));">
          Lo que necesitás saber antes<br>de empezar tu proyecto
        </h2>
      </div>

      <div class="article-grid">
        {% for post in posts_sorted %}
        <article class="article-card animate-on-scroll delay-{{ forloop.index | modulo: 2 | plus: 1 }}">
          <a href="{{ post.url }}" class="article-card__img-wrap" aria-label="Leer: {{ post.title }}">
            <img src="{{ post.imagen }}" alt="{{ post.title }}" class="article-card__img" width="800" height="450" loading="lazy" />
          </a>
          <div class="article-card__body">
            <span class="article-card__category">{{ post.categoria }}</span>
            <h3 class="article-card__title">
              <a href="{{ post.url }}">{{ post.title }}</a>
            </h3>
            <p class="article-card__excerpt">{{ post.extracto }}</p>
            <div class="article-card__footer">
              <span class="article-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                {{ post.date | date: "%d %b %Y" }}
              </span>
              <a href="{{ post.url }}" class="btn-text" style="font-size:var(--text-xs);">
                Leer más
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
            </div>
          </div>
        </article>
        {% endfor %}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-strip" aria-label="CTA contacto">
    <div class="container">
      <h2 class="cta-strip__headline animate-on-scroll">¿Tenés un proyecto en mente?</h2>
      <p class="cta-strip__sub animate-on-scroll delay-1">
        No necesitás tenerlo todo claro todavía. Contanos qué querés y te ayudamos a definir el camino.
      </p>
      <a href="/contacto/" class="btn btn-dorado animate-on-scroll delay-2">
        Hablar con nosotros
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </section>
