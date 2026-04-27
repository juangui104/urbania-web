---
layout: page
title: "Contacto — Hablemos de tu proyecto · Urbania Medellín"
description: "Contactá a Urbania — construcción y remodelación en Medellín. Cotización gratuita en menos de 24 horas. Obra nueva, remodelación y acabados."
keywords: "contacto constructora Medellín, cotización remodelación, presupuesto obra Medellín, Urbania contacto"
og_title: "Contacto — Cotización gratuita · Urbania Medellín"
og_description: "Hablemos de tu proyecto. Contanos qué tenés en mente y te respondemos en menos de 24 horas."
og_image: "https://urbania-site.netlify.app/assets/og-contacto.jpg"
supabase: true
permalink: /contacto/
---

  <style>
    .contacto { padding: 4rem 0 5rem; background: var(--color-negro); }
    .contacto__inner { width: 100%; max-width: 600px; margin: 0 auto; padding: 0 1.5rem; box-sizing: border-box; }
    .contacto__title { font-family: var(--font-display); font-size: clamp(1.75rem, 5vw, 2.5rem); color: var(--color-blanco); margin-bottom: 0.5rem; line-height: 1.2; }
    .contacto__subtitle { color: rgba(255,255,255,0.55); margin-bottom: 2rem; font-size: 1rem; }
    .paso { width: 100%; box-sizing: border-box; }
    .tipos-grid { display: flex; flex-direction: column; gap: 1rem; width: 100%; }
    .tipo-btn { width: 100%; box-sizing: border-box; padding: 1.25rem 1.5rem; background: #2a1f1a; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; text-align: left; cursor: pointer; display: flex; flex-direction: column; gap: 0.35rem; transition: border-color 0.2s, background 0.2s; }
    .tipo-btn:hover { border-color: var(--color-dorado); background: #321f14; }
    .tipo-btn svg { color: var(--color-dorado); margin-bottom: 0.25rem; }
    .tipo-btn span { font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--color-blanco); }
    .tipo-btn small { font-size: 0.8rem; color: rgba(255,255,255,0.45); }
    .btn-volver { background: none; border: none; color: rgba(255,255,255,0.45); font-size: 0.875rem; cursor: pointer; padding: 0; margin-bottom: 1.25rem; display: inline-flex; align-items: center; gap: 0.5rem; transition: color 0.15s; }
    .btn-volver:hover { color: var(--color-dorado); }
    .badge-tipo { display: inline-block; background: rgba(230,181,74,0.12); border: 1px solid rgba(230,181,74,0.35); color: var(--color-dorado); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.35rem 0.85rem; border-radius: 999px; margin-bottom: 1.5rem; }
    .campo { margin-bottom: 1.25rem; width: 100%; box-sizing: border-box; }
    .campo label { display: block; margin-bottom: 0.5rem; color: rgba(255,255,255,0.55); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; }
    .campo input, .campo textarea, .campo select { width: 100%; box-sizing: border-box; padding: 0.9rem 1rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: 4px; color: var(--color-blanco); font-size: 1rem; font-family: var(--font-body); transition: border-color 0.2s; outline: none; appearance: none; -webkit-appearance: none; }
    .campo input:focus, .campo textarea:focus { border-color: var(--color-dorado); }
    .campo input::placeholder, .campo textarea::placeholder { color: rgba(255,255,255,0.28); }
    .campo textarea { resize: vertical; min-height: 110px; line-height: 1.65; }
    .tel-wrap { display: flex; width: 100%; box-sizing: border-box; }
    .prefijo { padding: 0.9rem 1rem; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-right: none; border-radius: 4px 0 0 4px; white-space: nowrap; color: rgba(255,255,255,0.55); font-size: 0.95rem; flex-shrink: 0; }
    .tel-wrap input { border-radius: 0 4px 4px 0; flex: 1; min-width: 0; }
    .btn-enviar { width: 100%; padding: 1.1rem; background: var(--color-dorado); color: var(--color-negro); border: none; border-radius: 4px; font-size: 0.95rem; font-weight: 700; cursor: pointer; letter-spacing: 0.08em; text-transform: uppercase; font-family: var(--font-body); transition: opacity 0.2s; margin-top: 0.5rem; }
    .btn-enviar:hover { opacity: 0.88; }
    .btn-enviar:disabled { opacity: 0.5; cursor: not-allowed; }
    .form-success { display: none; text-align: center; padding: 3rem 1rem; }
    .form-success.visible { display: block; }
    .form-success__icon { width: 56px; height: 56px; background: rgba(230,181,74,0.12); border: 1px solid rgba(230,181,74,0.35); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--color-dorado); }
    .form-success h3 { font-family: var(--font-display); font-size: 1.5rem; color: var(--color-blanco); margin-bottom: 0.75rem; }
    .form-success p { color: rgba(255,255,255,0.55); font-size: 0.95rem; }
    .contacto__info { margin-top: 3rem; padding: 1.75rem 2rem; background: #2a1f1a; border-radius: 8px; width: 100%; box-sizing: border-box; }
    .info-titulo { font-family: var(--font-display); font-size: 1rem; color: var(--color-dorado); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.25rem; }
    .info-item { padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.75); display: flex; gap: 0.85rem; align-items: flex-start; font-size: 0.9rem; line-height: 1.5; }
    .info-item:last-child { border-bottom: none; }
    .info-item svg { color: var(--color-dorado); flex-shrink: 0; margin-top: 1px; }
    .info-item a { color: inherit; text-decoration: none; }
    .info-item a:hover { color: var(--color-dorado); }
    @media (min-width: 768px) {
      .tipos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .contacto__inner { max-width: 800px; }
    }
  </style>

  <section class="contacto" aria-labelledby="contacto-titulo">
    <div class="contacto__inner">

      <!-- PASO 1 -->
      <div id="paso1" class="paso">
        <h1 id="contacto-titulo" class="contacto__title">Hablemos de<br>tu proyecto.</h1>
        <p class="contacto__subtitle">Contanos qué tenés en mente y te respondemos en menos de 24 horas.</p>
        <h2 style="font-family:var(--font-display); font-size:1.1rem; color:rgba(255,255,255,0.75); font-weight:400; margin-bottom:1.25rem; letter-spacing:0.02em;">¿Qué tipo de proyecto tenés?</h2>
        <div class="tipos-grid" role="group" aria-label="Tipo de proyecto">
          <button onclick="seleccionarTipo('Obra nueva')" class="tipo-btn" type="button">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span>Obra nueva</span>
            <small>Construir desde cero en lote propio</small>
          </button>
          <button onclick="seleccionarTipo('Remodelación')" class="tipo-btn" type="button">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            <span>Remodelación</span>
            <small>Transformar un espacio existente</small>
          </button>
          <button onclick="seleccionarTipo('Acabados e interiorismo')" class="tipo-btn" type="button">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>
            <span>Acabados e interiorismo</span>
            <small>Pisos, pintura, cocinas, baños</small>
          </button>
          <button onclick="seleccionarTipo('Diseños y estudios técnicos')" class="tipo-btn" type="button">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            <span>Diseños y estudios técnicos</span>
            <small>Planos, presupuestos, viabilidad</small>
          </button>
        </div>
      </div>

      <!-- PASO 2 -->
      <div id="paso2" class="paso" style="display:none">
        <button onclick="volverPaso1()" class="btn-volver" type="button">← Volver</button>
        <div><span id="tipo-seleccionado" class="badge-tipo"></span></div>
        <h2 class="contacto__title" style="margin-bottom:0.5rem;">Tus datos de contacto</h2>
        <p class="contacto__subtitle">Te respondemos en menos de 24 horas</p>

        <form name="contacto" data-netlify="true" id="contacto-form" novalidate>
          <input type="hidden" name="form-name" value="contacto">
          <input type="hidden" name="tipo-proyecto" id="tipo-hidden">
          <div class="campo">
            <label for="nombre">Nombre completo *</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required autocomplete="name">
          </div>
          <div class="campo">
            <label for="telefono">Teléfono *</label>
            <div class="tel-wrap">
              <span class="prefijo">🇨🇴 +57</span>
              <input type="tel" id="telefono" name="telefono" placeholder="320 624 8693" required autocomplete="tel">
            </div>
          </div>
          <div class="campo">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" placeholder="tu@email.com" required autocomplete="email">
          </div>
          <div class="campo">
            <label for="descripcion">Descripción del proyecto *</label>
            <textarea id="descripcion" name="descripcion" rows="4" placeholder="Contanos qué querés hacer..." required></textarea>
          </div>
          <button type="submit" class="btn-enviar" id="btn-enviar">Enviar solicitud →</button>
        </form>

        <div class="form-success" id="form-success">
          <div class="form-success__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3>¡Solicitud enviada!</h3>
          <p>Te contactamos en menos de 24 horas.<br>Revisá tu bandeja de entrada.</p>
        </div>
      </div>

      <!-- INFO DE CONTACTO -->
      <div class="contacto__info" aria-label="Información de contacto">
        <p class="info-titulo">Información de contacto</p>
        <div class="info-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>{{ site.data.configuracion.direccion }}</span>
        </div>
        <div class="info-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:{{ site.data.configuracion.email }}">{{ site.data.configuracion.email }}</a>
        </div>
        <div class="info-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <a href="https://wa.me/{{ site.data.configuracion.whatsapp | remove: '+' | remove: ' ' }}">{{ site.data.configuracion.telefono }}</a>
        </div>
        <div class="info-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>{{ site.data.configuracion.horario }}</span>
        </div>
      </div>

    </div>
  </section>

  <script>
    function seleccionarTipo(tipo) {
      document.getElementById('tipo-hidden').value = tipo;
      document.getElementById('tipo-seleccionado').textContent = '✓ ' + tipo;
      document.getElementById('paso1').style.display = 'none';
      document.getElementById('paso2').style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function volverPaso1() {
      document.getElementById('paso1').style.display = 'block';
      document.getElementById('paso2').style.display = 'none';
    }

    const SUPABASE_URL = 'https://xhcjexdaijjiqxdlzmqx.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoY2pleGRhaWpqaXF4ZGx6bXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NTQ1NjgsImV4cCI6MjA5MjAzMDU2OH0.bJZWayiUdp21FoT-FaVHvaJfz3XhBGbScgwOe1cVKrY';
    const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    document.getElementById('contacto-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      var btn = document.getElementById('btn-enviar');
      btn.disabled = true;
      btn.textContent = 'Enviando…';
      const datos = {
        nombre:        this.nombre.value.trim(),
        telefono:      this.telefono.value.trim(),
        email:         this.email.value.trim(),
        tipo_proyecto: document.getElementById('tipo-hidden').value,
        descripcion:   this.descripcion.value.trim()
      };
      try {
        const { error } = await db.from('cotizaciones').insert([datos]);
        if (error) throw error;
        this.style.display = 'none';
        document.getElementById('form-success').classList.add('visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch(err) {
        console.error('Supabase error:', err);
        btn.disabled = false;
        btn.textContent = 'Enviar solicitud →';
        alert('Hubo un error al enviar. Por favor intentá de nuevo o escribinos por WhatsApp.');
      }
    });
  </script>
