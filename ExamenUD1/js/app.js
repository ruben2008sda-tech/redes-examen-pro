/* =====================================================================
   UD1 · Aplicaciones Ofimáticas — lógica de la aplicación
   Sin dependencias. Todo local: el progreso vive en localStorage.
   ===================================================================== */
(function () {
  'use strict';

  /* ====================== 0. UTILIDADES ========================= */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const esc = (s) => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const norm = (s) => String(s).toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\u00f1\s]/g, ' ').replace(/\s+/g, ' ').trim();

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const pick = (arr, n) => shuffle(arr).slice(0, Math.min(n, arr.length));

  function fmtTime(seg) {
    const m = Math.floor(seg / 60), s = seg % 60;
    return m + ':' + String(s).padStart(2, '0');
  }

  function ahora() {
    return new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  }

  /* ====================== 1. ALMACENAMIENTO ===================== */
  const KEY = 'ud1.';
  const Store = {
    read(name, fallback) {
      try {
        const raw = localStorage.getItem(KEY + name);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    write(name, value) {
      try { localStorage.setItem(KEY + name, JSON.stringify(value)); } catch (e) { /* modo privado */ }
    },
    drop(name) { try { localStorage.removeItem(KEY + name); } catch (e) { /* noop */ } }
  };

  const state = {
    studying: Store.read('studying', {}),
    flash: Store.read('flash', {}),
    wrong: Store.read('wrong', {}),
    history: Store.read('history', []),
    notas: Store.read('notas', ''),
    metodo: Store.read('metodo', {}),
    equivOculto: Store.read('equivOculto', false)
  };

  const save = {
    studying: () => Store.write('studying', state.studying),
    flash: () => Store.write('flash', state.flash),
    wrong: () => Store.write('wrong', state.wrong),
    history: () => Store.write('history', state.history),
    notas: () => Store.write('notas', state.notas),
    metodo: () => Store.write('metodo', state.metodo),
    equivOculto: () => Store.write('equivOculto', state.equivOculto)
  };

  /* ====================== 2. ÍNDICES DE DATOS =================== */
  const BLOQUES = UD1.bloques;

  const QUESTIONS = [];
  const CARDS = [];
  const MATCH_ITEMS = [];

  BLOQUES.forEach((b) => {
    (b.quiz || []).forEach((q, i) => {
      QUESTIONS.push({
        id: b.id + '::q' + i,
        tipo: q.tipo === 'vf' ? 'vf' : 'mcq',
        p: q.p, o: q.o.slice(), r: q.r, e: q.e || '',
        t: q.t || null,
        bloque: b.id, bloqueTitulo: b.titulo, color: b.color
      });
    });
    (b.flashcards || []).forEach((c, i) => {
      CARDS.push({
        id: b.id + '::f' + i,
        q: c.q, a: c.a,
        bloque: b.id, bloqueTitulo: b.titulo, color: b.color
      });
    });
    if (b.emparejar) {
      MATCH_ITEMS.push({
        type: 'match', id: 'match::' + b.id,
        titulo: b.emparejar.titulo, pares: b.emparejar.pares.slice(),
        bloque: b.id, bloqueTitulo: b.titulo, color: b.color
      });
    }
  });

  const blockById = {};
  BLOQUES.forEach((b) => { blockById[b.id] = b; });

  /* atajos que pide literalmente la pregunta 12 del temario */
  const ATAJOS_EXAMEN = new Set([
    'CTRL + M', 'CTRL + SHIFT + ESC', 'ALT + TAB', 'ALT + F4', 'CTRL + C',
    'CTRL + V', 'CTRL + X', 'CTRL + Z', 'CTRL + Y',
    'CTRL + SHIFT + clic', 'CTRL + A', 'CTRL + E'
  ].map(norm));

  /* tabla de atajos sacada del propio temario */
  const TABLA_ATAJOS = (function () {
    const b = blockById['atajos'];
    const t = (b.contenido || []).find((c) => c.tipo === 'tabla' && c.cols[1] === 'Función');
    return t ? t.rows.map((r) => ({ atajo: r[0], fn: r[1], examen: ATAJOS_EXAMEN.has(norm(r[0])) })) : [];
  })();

  /* tabla de inglés sacada del propio temario */
  const TABLA_INGLES = (function () {
    const b = blockById['ingles'];
    const t = (b.contenido || []).find((c) => c.tipo === 'tabla' && c.cols[0] === 'Español');
    return t ? t.rows.map((r) => ({ es: r[0], en: r[1], pron: r[2], nota: r[3] || '' })) : [];
  })();

  const openBlocks = new Set(['ergonomia']);

  /* ====================== 3. TOASTS ============================= */
  let toastTimer = null;
  function toast(msg) {
    let el = $('#toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' +
        'padding:.7rem 1.1rem;border-radius:11px;font:inherit;font-size:.88rem;font-weight:600;' +
        'background:var(--surface-3);color:var(--text);border:1px solid var(--line);' +
        'box-shadow:var(--shadow-lg);z-index:200;max-width:90vw;text-align:center';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.style.opacity = '0'; }, 2600);
  }

  /* ====================== 4. NAVEGACIÓN ========================= */
  const VIEWS = ['temario', 'equiv', 'flash', 'test', 'datos', 'atajos', 'ingles', 'metodo', 'notas'];
  let vistaActual = 'temario';

  function showView(name) {
    if (VIEWS.indexOf(name) === -1) name = 'temario';
    vistaActual = name;
    VIEWS.forEach((v) => $('#view-' + v).classList.toggle('is-active', v === name));
    $$('.tab').forEach((t) => t.classList.toggle('is-active', t.dataset.view === name));
    if (name === 'flash') arrancaFlash();
    if (name === 'test') pintaHistorial();
    if (name === 'equiv') pintaEquiv();
    if (name === 'metodo') pintaMetodo();
    centraTabActiva();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try { history.replaceState(null, '', '#' + name); } catch (e) { /* noop */ }
  }

  /* En movil la barra de pestanas es un carrusel horizontal: si no se
     centra la activa, se abre una vista y el menu parece no haber cambiado.
     Va con scroll instantaneo a proposito: el suave se queda a medias cuando
     el navegador tiene que recolocar el carrusel entero. */
  function centraTabActiva() {
    const barra = $('#tabs');
    const activa = barra && barra.querySelector('.tab.is-active');
    if (!barra || !activa) return;
    if (barra.scrollWidth <= barra.clientWidth + 1) return;
    const destino = Math.round(activa.offsetLeft - (barra.clientWidth / 2) + (activa.offsetWidth / 2));
    const max = barra.scrollWidth - barra.clientWidth;
    barra.scrollLeft = Math.max(0, Math.min(destino, max));
  }

  $$('.tab').forEach((t) => t.addEventListener('click', () => showView(t.dataset.view)));

  /* al girar el movil o cambiar el ancho, la pestana activa vuelve al centro */
  window.addEventListener('resize', centraTabActiva);
  window.addEventListener('orientationchange', () => setTimeout(centraTabActiva, 120));

  /* ====================== 5. ESTADÍSTICAS ======================= */
  function progresoGlobal() {
    const bloqPct = BLOQUES.filter((b) => state.studying[b.id]).length / BLOQUES.length;
    const total = CARDS.length || 1;
    const known = CARDS.filter((c) => state.flash[c.id] && state.flash[c.id].n > 0).length;
    return Math.round((bloqPct * 0.5 + (known / total) * 0.5) * 100);
  }

  function pintaStats() {
    const estudiados = BLOQUES.filter((b) => state.studying[b.id]).length;
    $('#statBloques').textContent = estudiados + '/' + BLOQUES.length;

    const known = CARDS.filter((c) => state.flash[c.id] && state.flash[c.id].n > 0).length;
    $('#statFlash').textContent = known + '/' + CARDS.length;

    const h = state.history;
    if (h.length) {
      const media = Math.round(h.reduce((s, x) => s + (x.score / x.total) * 100, 0) / h.length);
      $('#statMedia').textContent = media + '%';
    } else {
      $('#statMedia').textContent = '—';
    }
    $('#statFallos').textContent = Object.keys(state.wrong).length;

    const pct = progresoGlobal();
    $('#ringPct').textContent = pct + '%';
    const circ = 2 * Math.PI * 52;
    $('#ringFg').style.strokeDasharray = circ;
    $('#ringFg').style.strokeDashoffset = String(circ - (circ * pct) / 100);
  }

  /* ====================== 6. TEMARIO =========================== */
  function hl(text, q) {
    const safe = esc(text);
    if (!q) return safe;
    const clean = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return safe.replace(new RegExp('(' + clean + ')', 'gi'), '<mark>$1</mark>');
  }

  /* ---------------------------------------------------------------- galeria
     Los recortes del PDF cuelgan del final de cada bloque. Se abren en
     grande porque hay esquemas con letra pequena (requisitos, atajos). */
  function renderGaleria(bloqueId, q) {
    const lista = (UD1.imagenes || {})[bloqueId];
    if (!lista || !lista.length) return '';

    const fig = lista.map((im, i) => (
      '<figure class="fig">' +
        '<button type="button" class="fig-btn" data-zoom="' + esc(im.src) + '"' +
          ' data-pie="' + esc(im.pie || '') + '" data-nota="' + esc(im.nota || '') + '"' +
          ' aria-label="Ampliar imagen: ' + esc(im.pie || 'imagen del temario') + '">' +
          '<img src="' + esc(im.src) + '" alt="' + esc(im.pie || 'Imagen del temario de ' + bloqueId) + '" loading="lazy">' +
          '<span class="fig-lupa" aria-hidden="true">🔍 ampliar</span>' +
        '</button>' +
        (im.pie ? '<figcaption>' + hl(im.pie, q) +
          (im.nota ? '<span class="fig-nota">' + hl(im.nota, q) + '</span>' : '') +
        '</figcaption>' : '') +
      '</figure>'
    )).join('');

    return '<div class="galeria"><h4 class="galeria-tit">📷 Imágenes del temario' +
      '<span class="galeria-n">' + lista.length + '</span></h4>' +
      '<div class="galeria-grid">' + fig + '</div></div>';
  }

  function renderBloque(b, q) {
    const done = !!state.studying[b.id];
    const cards = (b.flashcards || []).length;
    const qs = (b.quiz || []).length;

    const cuerpo = (b.contenido || []).map((c) => {
      switch (c.tipo) {
        case 'p':
          return '<p>' + hl(c.texto, q) + '</p>';

        case 'ul':
        case 'ol': {
          const tag = c.tipo === 'ul' ? 'ul' : 'ol';
          const items = (c.items || []).map((i) => '<li>' + hl(i, q) + '</li>').join('');
          return (c.titulo ? '<h4>' + hl(c.titulo, q) + '</h4>' : '') +
                 '<' + tag + '>' + items + '</' + tag + '>';
        }

        case 'datos':
          return '<div class="datos-chips">' + c.items.map((d) =>
            '<div class="dato"><b>' + hl(d.v, q) + '</b><span>' + hl(d.k, q) + '</span></div>'
          ).join('') + '</div>';

        case 'callout': {
          const tono = c.tono || 'clave';
          const inner = c.items
            ? '<ul>' + c.items.map((i) => '<li>' + hl(i, q) + '</li>').join('') + '</ul>'
            : '<p>' + hl(c.texto, q) + '</p>';
          return '<div class="callout callout-' + tono + '"><h5>' + hl(c.titulo || '', q) + '</h5>' + inner + '</div>';
        }

        case 'tabla': {
          const head = '<tr>' + c.cols.map((h) => '<th>' + hl(h, q) + '</th>').join('') + '</tr>';
          const body = c.rows.map((r) =>
            '<tr>' + r.map((cell) => '<td>' + hl(cell == null ? '' : cell, q) + '</td>').join('') + '</tr>'
          ).join('');
          const cap = c.caption ? '<caption>' + hl(c.caption, q) + '</caption>' : '';
          const nota = c.nota ? '<div class="callout callout-aviso"><h5>Ojo</h5><p>' + hl(c.nota, q) + '</p></div>' : '';
          return '<div class="table-wrap"><table><thead>' + head + '</thead><tbody>' + body + '</tbody>' + cap + '</table></div>' + nota;
        }

        case 'code':
          return '<pre class="code"><code>' + esc(c.texto) + '</code></pre>';

        default:
          return '';
      }
    }).join('');

    const galeria = renderGaleria(b.id, q);

    return '' +
    '<article class="block' + (openBlocks.has(b.id) ? ' is-open' : '') + '" id="blk-' + b.id + '"' +
      ' style="--bcolor:' + b.color + '" data-buscar="' + esc(norm([b.titulo, b.sub, b.resumen].concat(
        (b.flashcards || []).map((c) => c.q + ' ' + c.a),
        (b.quiz || []).map((x) => x.p + ' ' + x.o.join(' '))
      ).join(' '))) + '">' +
      '<button class="block-head" type="button" aria-expanded="' + openBlocks.has(b.id) + '">' +
        '<span class="block-ico">' + b.icono + '</span>' +
        '<span class="block-titles">' +
          '<h3>' + b.num + '. ' + esc(b.titulo) + '</h3>' +
          '<p>' + esc(b.sub) + '</p>' +
        '</span>' +
        '<span class="block-meta">' +
          '<span class="pill">' + cards + ' tarjetas</span>' +
          '<span class="pill">' + qs + ' preguntas</span>' +
          (done ? '<span class="pill pill-ok">✓ estudiado</span>' : '<span class="pill pill-warn">pendiente</span>') +
        '</span>' +
        '<span class="block-caret">▸</span>' +
      '</button>' +
      '<div class="block-body">' +
        '<p class="block-intro">' + esc(b.resumen) + '</p>' +
        cuerpo +
        galeria +
        '<div class="block-foot">' +
          '<button class="btn btn-ghost btn-sm" data-accion="flash" data-bloque="' + b.id + '">🃏 ' + cards + ' flashcards</button>' +
          '<button class="btn btn-ghost btn-sm" data-accion="test" data-bloque="' + b.id + '">🎯 Test de ' + qs + '</button>' +
          '<button class="btn btn-ghost btn-sm" data-accion="match" data-bloque="' + b.id + '">🔗 Emparejar</button>' +
          '<label class="check" style="margin-left:auto"><input type="checkbox" data-estudiado="' + b.id + '"' + (done ? ' checked' : '') + '> Marcar como estudiado</label>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function pintaTemario(q) {
    q = norm(q || '');
    $('#temarioLista').innerHTML = BLOQUES.map((b) => renderBloque(b, q)).join('');
    let visibles = 0;
    BLOQUES.forEach((b) => {
      const el = $('#blk-' + b.id);
      if (!el) return;
      const solo = $('#soloSinEstudiar').checked;
      let visible = !q || el.dataset.buscar.indexOf(q) !== -1;
      if (visible && solo && state.studying[b.id]) visible = false;
      el.hidden = !visible;
      if (visible) visibles++;
    });
    $('#temarioVacio').hidden = visibles > 0;
  }

  $('#temarioLista').addEventListener('click', function (ev) {
    const head = ev.target.closest('.block-head');
    if (head) {
      const art = head.closest('.block');
      const id = art.id.replace('blk-', '');
      const abierto = art.classList.toggle('is-open');
      head.setAttribute('aria-expanded', String(abierto));
      if (abierto) openBlocks.add(id); else openBlocks.delete(id);
      return;
    }

    const btn = ev.target.closest('[data-accion]');
    if (!btn) return;
    const bid = btn.dataset.bloque;

    if (btn.dataset.accion === 'flash') {
      $('#flashBloque').value = bid;
      showView('flash');
    } else if (btn.dataset.accion === 'test') {
      CONFIG.bloques = new Set([bid]);
      pintaChips();
      showView('test');
    } else if (btn.dataset.accion === 'match') {
      CONFIG.bloques = new Set([bid]);
      CONFIG.soloMatch = true;
      $('#optEmparejar').checked = true;
      pintaChips();
      showView('test');
    }
  });

  $('#temarioLista').addEventListener('change', function (ev) {
    const cb = ev.target.closest('[data-estudiado]');
    if (!cb) return;
    state.studying[cb.dataset.estudiado] = cb.checked;
    save.studying();
    pintaStats();
    pintaTemario($('#searchTemario').value);
  });

  let searchTimer = null;
  $('#searchTemario').addEventListener('input', function () {
    clearTimeout(searchTimer);
    const v = this.value;
    searchTimer = setTimeout(() => pintaTemario(v), 200);
  });

  $('#soloSinEstudiar').addEventListener('change', () => pintaTemario($('#searchTemario').value));

  /* ====================== 6b. VISOR DE IMAGENES ==================
     Los esquemas del PDF tienen letra pequeña: al pulsarlos se abren a
     pantalla casi completa. Escape o clic fuera para cerrar. */
  const zoom = { on: false, queda: null };

  function abreZoom(src, pie, nota) {
    const lay = $('#zoom');
    $('#zoomImg').src = src;
    $('#zoomPie').innerHTML = (pie ? hl(pie, '') : '') +
      (nota ? '<span class="zoom-nota">' + hl(nota, '') + '</span>' : '');
    lay.hidden = false;
    zoom.on = true;
    document.body.style.overflow = 'hidden';
    $('#zoomCerrar').focus();
  }

  function cierraZoom() {
    if (!zoom.on) return;
    $('#zoom').hidden = true;
    $('#zoomImg').src = '';
    zoom.on = false;
    document.body.style.overflow = '';
    if (zoom.queda && zoom.queda.isConnected) zoom.queda.focus();
    zoom.queda = null;
  }

  document.addEventListener('click', function (ev) {
    const b = ev.target.closest('[data-zoom]');
    if (b) {
      ev.preventDefault();
      zoom.queda = b;
      abreZoom(b.dataset.zoom, b.dataset.pie, b.dataset.nota);
    }
  });
  $('#zoom').addEventListener('click', function (ev) {
    if (ev.target === this || ev.target.closest('#zoomCerrar')) cierraZoom();
  });
  $('#zoomCerrar').addEventListener('click', cierraZoom);
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && zoom.on) { ev.stopPropagation(); cierraZoom(); }
  });

  $('#btnExpandir').addEventListener('click', () => {
    BLOQUES.forEach((b) => openBlocks.add(b.id));
    pintaTemario($('#searchTemario').value);
  });
  $('#btnContraer').addEventListener('click', () => {
    openBlocks.clear();
    pintaTemario($('#searchTemario').value);
  });

  $('#btnGoTest').addEventListener('click', () => { CONFIG.bloques = new Set(BLOQUES.map((b) => b.id)); pintaChips(); showView('test'); });
  $('#btnGoFlash').addEventListener('click', () => showView('flash'));

  /* ====================== 7. FLASHCARDS ========================= */
  const flash = { deck: [], i: 0, cola: [], flipped: false, aciertos: 0, fallos: 0, falladas: [], bloqueSel: null };

  function pintaSelectFlash() {
    const sel = $('#flashBloque');
    sel.innerHTML = '<option value="all">Todo el temario</option>' +
      BLOQUES.map((b) => '<option value="' + b.id + '">' + b.num + '. ' + esc(b.titulo) + ' (' + b.flashcards.length + ')</option>').join('');
  }

  function buildDeck(onlyIds) {
    const bid = $('#flashBloque').value;
    let base = onlyIds
      ? CARDS.filter((c) => onlyIds.indexOf(c.id) !== -1)
      : CARDS.filter((c) => bid === 'all' || c.bloque === bid);
    if (!base.length) base = CARDS.slice();
    const inverso = $('#flashInverso').checked;
    flash.deck = base.map((c) => ({ c: c, q: inverso ? c.a : c.q, a: inverso ? c.q : c.a }));
    flash.cola = shuffle(flash.deck.map((_, i) => i));
    flash.i = 0; flash.flipped = false; flash.aciertos = 0; flash.fallos = 0; flash.falladas = [];
    flash.bloqueSel = bid;
  }

  /* si el bloque elegido en el desplegable ya no es el del mazo actual se
     reconstruye: si no, el botón "flashcards" de un bloque seguiría
     mostrando el mazo del bloque anterior */
  function arrancaFlash(onlyIds) {
    if (vistaActual !== 'flash') return;
    if (onlyIds) buildDeck(onlyIds);
    else if (flash.deck.length === 0 || flash.bloqueSel !== $('#flashBloque').value) buildDeck();
    $('#flashDone').hidden = true;
    $('#flashCard').hidden = false;
    $('#flashBtns').hidden = false;
    muestraFlash();
  }

  function muestraFlash() {
    if (!flash.cola.length) return finFlash();
    const idx = flash.cola[flash.i];
    const cur = flash.deck[idx];
    const card = $('#flashCard');

    $('#flashQ').textContent = cur.q;
    $('#flashA').textContent = cur.a;
    $('#flashTag').textContent = cur.c.bloqueTitulo;
    $('#flashTag').style.color = cur.c.color;
    card.classList.remove('is-flipped');
    flash.flipped = false;

    $('#flashCount').textContent = (flash.i + 1) + ' / ' + flash.cola.length;
    $('#flashBar').style.width = (flash.i / flash.cola.length) * 100 + '%';
  }

  function respondeFlash(ok) {
    if (!flash.cola.length) return;
    if (!flash.flipped && ok) { volteaFlash(); return; }
    const idx = flash.cola[flash.i];
    const id = flash.deck[idx].c.id;
    const reg = state.flash[id] || { n: 0, f: 0 };
    if (ok) { reg.n++; flash.aciertos++; }
    else { reg.f++; flash.fallos++; if (flash.falladas.indexOf(id) === -1) flash.falladas.push(id); }
    reg.last = Date.now();
    state.flash[id] = reg;
    save.flash();

    if (!ok) flash.cola.push(idx);      // vuelve al final de la cola
    flash.i++;
    if (flash.i >= flash.cola.length) finFlash();
    else muestraFlash();
    pintaStats();
  }

  function volteaFlash() {
    flash.flipped = !flash.flipped;
    $('#flashCard').classList.toggle('is-flipped', flash.flipped);
  }

  function finFlash() {
    $('#flashCard').hidden = true;
    $('#flashBtns').hidden = true;
    $('#flashDone').hidden = false;
    $('#flashBar').style.width = '100%';
    const total = flash.aciertos + flash.fallos;
    const pct = total ? Math.round((flash.aciertos / total) * 100) : 0;
    $('#flashDoneText').innerHTML =
      'Has repasado <b>' + total + '</b> tarjetas: <b>' + flash.aciertos + '</b> bien (' + pct + ' %) y ' +
      '<b>' + flash.fallos + '</b> pendientes.';
    $('#btnFlashRepeat').disabled = flash.falladas.length === 0;
    pintaStats();
  }

  $('#flashCard').addEventListener('click', volteaFlash);
  $('#flashCard').addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); volteaFlash(); } });
  $('#flashBloque').addEventListener('change', () => { buildDeck(); arrancaFlash(); });
  $('#flashInverso').addEventListener('change', () => { buildDeck(); arrancaFlash(); });
  $('#btnFlashShuffle').addEventListener('click', () => { buildDeck(); arrancaFlash(); toast('Barajado'); });
  $('#btnFlashSi').addEventListener('click', () => respondeFlash(true));
  $('#btnFlashNo').addEventListener('click', () => respondeFlash(false));
  $('#btnFlashSkip').addEventListener('click', () => { flash.i++; flash.i >= flash.cola.length ? finFlash() : muestraFlash(); });
  $('#btnFlashReset').addEventListener('click', () => { buildDeck(); arrancaFlash(); });
  $('#btnFlashRepeat').addEventListener('click', () => arrancaFlash(flash.falladas.slice()));

  /* ====================== 7b. TABLA DE EQUIVALENCIAS ============== */
  const TABLA_EQ = UD1.tablaEquivalencias;
  const BLOQUE_EQ = 'equivalencias';
  let equivOrden = [];

  function celdaLogo(item, oculto) {
    const nombre = oculto ? '<span class="equiv-guion">?</span>' :
      '<b class="equiv-nombre">' + esc(item.txt) + '</b>' +
      (item.sub ? '<small class="equiv-sub">' + esc(item.sub) + '</small>' : '');
    return '<div class="equiv-celda">' +
      '<img class="equiv-logo" src="img/logos/' + esc(item.logo) + '" alt="' + esc(item.txt) + '" loading="lazy" draggable="false">' +
      '<span class="equiv-cap">' + nombre + '</span></div>';
  }

  function pintaEquiv() {
    if (!equivOrden.length) equivOrden = TABLA_EQ.filas.map((_, i) => i);
    const oculto = !!state.equivOculto;

    const cabeza =
      '<thead><tr><th class="equiv-fn">Función</th>' +
        TABLA_EQ.suites.map((s) =>
          '<th class="equiv-suite"><img src="' + esc(s.logo) + '" alt="" loading="lazy" draggable="false">' +
          '<span>' + esc(s.nombre) + '</span></th>').join('') +
      '</tr></thead>';

    const cuerpo = equivOrden.map((idx) => {
      const fila = TABLA_EQ.filas[idx];
      const celdas = TABLA_EQ.suites.map((s) => {
        const items = (fila.celdas[s.id] || []);
        return '<td>' + (items.length
          ? items.map((it) => celdaLogo(it, oculto)).join('')
          : '<span class="equiv-vacio">—</span>') + '</td>';
      }).join('');
      return '<tr><th class="equiv-fn">' + esc(fila.fn) + '</th>' + celdas + '</tr>';
    }).join('');

    $('#equivTabla').innerHTML =
      '<table class="equiv">' + cabeza + '<tbody>' + cuerpo + '</tbody></table>';

    const notaCelda = TABLA_EQ.filas.map((f) => f.celdas.nota).filter(Boolean).join(' ');
    $('#equivNota').innerHTML = notaCelda
      ? '<h5>Ojo con el PDF</h5><p>' + esc(notaCelda) + '</p>' : '';

    $('#btnEquivOcultar').textContent = oculto ? '👀 Ver nombres' : '🙈 Sin nombres';
    $('#btnEquivOcultar').classList.toggle('btn-primary', oculto);
  }

  $('#btnEquivOcultar').addEventListener('click', () => {
    state.equivOculto = !state.equivOculto;
    save.equivOculto();
    pintaEquiv();
    toast(state.equivOculto ? 'Nombres ocultos: di los tuyos en voz alta' : 'Nombres visibles');
  });

  $('#btnEquivFlip').addEventListener('click', () => {
    equivOrden = shuffle(equivOrden.slice());
    pintaEquiv();
    toast('Filas barajadas: repítelas hasta que la fila salga sola');
  });

  $('#btnEquivQuiz').addEventListener('click', () => {
    CONFIG.bloques = new Set([BLOQUE_EQ]);
    CONFIG.soloMatch = false;
    $$('#chipsBloque .chip').forEach((c) => c.classList.remove('is-active'));
    $$('#chipsCantidad .chip').forEach((c) => c.classList.toggle('is-active', c.dataset.n === '999'));
    $('#optVF').checked = true;
    $('#optEmparejar').checked = true;
    $('#optCrono').checked = false;
    showView('test');
    pintaChips();
  });

  $('#btnEquivFlash').addEventListener('click', () => {
    $('#flashBloque').value = BLOQUE_EQ;
    showView('flash');
    toast(' flashcards de la tabla de logos');
  });

  $('#btnEquivMatch').addEventListener('click', () => {
    CONFIG.bloques = new Set([BLOQUE_EQ]);
    CONFIG.soloMatch = true;
    showView('test');
    $$('#chipsBloque .chip').forEach((c) => c.classList.remove('is-active'));
    $$('#chipsCantidad .chip').forEach((c) => c.classList.toggle('is-active', c.dataset.n === '999'));
    $('#optEmparejar').checked = true;
    $('#optVF').checked = false;
    $('#optCrono').checked = false;
    pintaChips();
  });

  $('#btnEquivBloque').addEventListener('click', () => {
    showView('temario');
    openBlocks.add(BLOQUE_EQ);
    pintaTemario($('#searchTemario').value);
    const art = $('#blk-' + BLOQUE_EQ);
    if (art) {
      art.scrollIntoView({ behavior: 'smooth', block: 'start' });
      art.classList.add('is-flash-hl');
      setTimeout(() => art.classList.remove('is-flash-hl'), 1600);
    }
  });

  /* ====================== 7c. MÉTODO DE ESTUDIO ==================== */
  const METODO = UD1.metodo;

  function pintaMetodo() {
    $('#metodoPrincipios').innerHTML = METODO.principios.map((p) =>
      '<article class="metodo-card">' +
        '<span class="metodo-n">' + esc(p.n) + '</span>' +
        '<h4>' + esc(p.t) + '</h4>' +
        '<p>' + esc(p.d) + '</p>' +
        '<p class="metodo-mal"><b>No:</b> ' + esc(p.mal) + '</p>' +
        '<p class="metodo-hoy"><b>Hoy:</b> ' + esc(p.hoy) + '</p>' +
      '</article>'
    ).join('');

    $('#metodoHoy').innerHTML = METODO.hoy.map((h, i) =>
      '<label class="metodo-todo">' +
        '<input type="checkbox" data-metodo="' + i + '"' + (state.metodo[i] ? ' checked' : '') + '>' +
        '<span><b>' + esc(h.t) + '</b><small>' + esc(h.d) + '</small></span>' +
      '</label>'
    ).join('');
  }

  $('#metodoHoy').addEventListener('change', function (ev) {
    const box = ev.target.closest('input[data-metodo]');
    if (!box) return;
    state.metodo[box.dataset.metodo] = box.checked;
    save.metodo();
  });

  $('#btnMetodoReiniciar').addEventListener('click', () => {
    state.metodo = {};
    save.metodo();
    pintaMetodo();
    toast('Checklist reiniciada');
  });

  /* ====================== 8. TESTS ============================== */
  const CONFIG = { bloques: new Set(BLOQUES.map((b) => b.id)), soloMatch: false };
  const run = { items: [], i: 0, resp: {}, crudo: {}, incorrectas: [], t0: 0, cronometro: false, restantes: 30, tick: null };

  function preguntasDe(bloques, conVF) {
    return QUESTIONS.filter((q) => bloques.has(q.bloque) && (conVF || q.tipo !== 'vf'));
  }

  /* el botón "Emparejar" de un bloque abre un test 100 % de emparejar:
     mezclarlo con preguntas tipo test no ayuda a memorizar */
  function poolItems() {
    const solo = MATCH_ITEMS.filter((m) => CONFIG.bloques.has(m.bloque));
    if (CONFIG.soloMatch) {
      return solo.map((m) => ({ type: 'match', q: m }));
    }
    const qs = preguntasDe(CONFIG.bloques, $('#optVF').checked);
    const items = qs.map((q) => ({ type: 'mcq', q: q }));
    if ($('#optEmparejar').checked) {
      solo.forEach((m) => items.push({ type: 'match', q: m }));
    }
    return items;
  }

  function nElegido() {
    const btn = $('#chipsCantidad .chip.is-active');
    return btn ? Number(btn.dataset.n) : 20;
  }

  function pintaChips() {
    $('#chipsBloque').innerHTML =
      '<button class="chip' + (CONFIG.bloques.size === BLOQUES.length ? ' is-active' : '') + '" data-b="all">Todo el temario</button>' +
      BLOQUES.map((b) => '<button class="chip' + (CONFIG.bloques.has(b.id) && CONFIG.bloques.size !== BLOQUES.length ? ' is-active' : '') +
        '" data-b="' + b.id + '">' + b.icono + ' ' + b.num + '. ' + esc(b.titulo) + '<small>' + b.flashcards.length + ' tar. · ' + b.quiz.length + ' preg.</small></button>').join('');
    actualizaResumen();
  }

  function actualizaResumen() {
    const items = poolItems();
    const n = nElegido();
    const total = n >= 999 ? items.length : Math.min(n, items.length);
    const mins = run.crono && $('#optCrono').checked ? Math.ceil((total * 30) / 60) : 0;
    $('#testResumen').innerHTML = 'Preguntas disponibles: <b>' + items.length + '</b><br>' +
      'Test de <b>' + total + '</b> preguntas' + (mins ? ' · unos <b>' + mins + ' min</b>' : '') +
      (CONFIG.bloques.size < BLOQUES.length
        ? '<br><span class="muted">Ámbito: ' + CONFIG.bloques.size + ' bloque(s)</span>' : '');
    $('#numFallos').textContent = Object.keys(state.wrong).length;
    $('#btnSoloFallos').disabled = Object.keys(state.wrong).length === 0;
  }

  $('#chipsBloque').addEventListener('click', function (ev) {
    const c = ev.target.closest('.chip');
    if (!c) return;
    if (c.dataset.b === 'all') { CONFIG.bloques = new Set(BLOQUES.map((b) => b.id)); CONFIG.soloMatch = false; }
    else if (CONFIG.bloques.has(c.dataset.b) && CONFIG.bloques.size > 1) {
      CONFIG.bloques.delete(c.dataset.b);
    } else {
      CONFIG.bloques = new Set([c.dataset.b]);
      CONFIG.soloMatch = false;
    }
    pintaChips();
  });

  $('#chipsCantidad').addEventListener('click', function (ev) {
    const c = ev.target.closest('.chip');
    if (!c) return;
    $$('#chipsCantidad .chip').forEach((x) => x.classList.remove('is-active'));
    c.classList.add('is-active');
    actualizaResumen();
  });

  ['#optVF', '#optEmparejar', '#optCrono'].forEach((sel) =>
    $(sel).addEventListener('change', actualizaResumen));

  function empieza(items) {
    run.items = items;
    run.i = 0;
    run.resp = {};
    run.incorrectas = [];
    run.cronometro = $('#optCrono').checked;
    run.restantes = 30;
    run.t0 = Date.now();

    $('#testSetup').hidden = true;
    $('#testEnd').hidden = true;
    $('#testRun').hidden = false;
    $('#runTotal').textContent = items.length;
    $('#runIdx').textContent = 1;
    $('#runHint').textContent = run.cronometro ? 'Cronómetro: 30 s por pregunta' : 'Sin límite de tiempo';
    $('#runBar').style.width = '0%';

    if (run.cronometro) arrancaCrono(); else paraCrono();
    pintaRun();
  }

  $('#btnEmpezar').addEventListener('click', () => {
    let items = poolItems();
    if (!items.length) { toast('No hay preguntas con esa configuración.'); return; }
    const n = nElegido();
    if (n < 999) items = pick(items, n);
    else items = shuffle(items);
    CONFIG.soloMatch = false;
    $('#optEmparejar').checked = items.some((i) => i.type === 'match');
    empieza(items);
  });

  $('#btnSoloFallos').addEventListener('click', () => {
    const ids = Object.keys(state.wrong);
    const items = QUESTIONS.filter((q) => ids.indexOf(q.id) !== -1);
    if (!items.length) { toast('Todavía no tienes fallos guardados.'); return; }
    const barajadas = shuffle(items).map((q) => ({ type: 'mcq', q: q }));
    CONFIG.soloMatch = false;
    empieza(barajadas);
  });

  function arrancaCrono() {
    paraCrono();
    run.restantes = 30;
    run.tick = setInterval(() => {
      run.restantes--;
      pintarTimer();
      if (run.restantes <= 0) {
        paraCrono();
        if (!respondida()) {
          registraFallo(run.items[run.i], null);
          toast('Se acabó el tiempo de la pregunta ' + (run.i + 1));
          siguiente();
        }
      }
    }, 1000);
  }
  function paraCrono() { if (run.tick) { clearInterval(run.tick); run.tick = null; } }
  function pintarTimer() {
    const el = $('#runTimer');
    el.textContent = Math.max(0, run.restantes);
    el.classList.toggle('is-low', run.restantes <= 8);
  }

  function itemActual() { return run.items[run.i]; }
  function keyActual() { return run.items[run.i].q.id; }
  function respondida() { return Object.prototype.hasOwnProperty.call(run.resp, keyActual()); }

  function pintaRun() {
    const it = itemActual();
    if (!it) { finish(); return; }
    const q = it.q;
    $('#runIdx').textContent = run.i + 1;
    $('#runBlock').textContent = q.bloqueTitulo || '';
    $('#runBlock').style.color = q.color || 'var(--text-dim)';
    $('#runBar').style.width = (run.i / run.items.length) * 100 + '%';

    const cuerpo = $('#runBody');
    if (it.type === 'match') pintaMatching(cuerpo, it);
    else pintaPregunta(cuerpo, it);
    /* El estado del boton se recalcula aqui: si el test anterior era un
       emparejar a medias, "Siguiente" se quedaba apagado al empezar este. */
    actualizarBotonSiguiente();
  }

  /* Devuelve los distractores de la pregunta que llevan razon de trampa,
     para poder=listarlos al salir. */
  function atajosDe(q) {
    if (!q || !q.t) return [];
    const salida = [];
    for (let i = 0; i < q.o.length; i++) {
      if (i === q.r) continue;
      const razon = q.t[String(i)];
      if (razon) salida.push({ txt: q.o[i], razon: razon });
    }
    return salida;
  }

  function pintaPregunta(cuerpo, it) {
    const q = it.q;
    const barajar = $('#optBarajar').checked;
    const opcs = barajar ? shuffle(q.o.map((txt, i) => ({ txt: txt, i: i }))) : q.o.map((txt, i) => ({ txt: txt, i: i }));
    const guardada = run.resp[q.id];
    const inmediata = $('#optInmediato').checked;

    let html = '<p class="q-preg"><span class="q-num">Pregunta ' + (run.i + 1) +
      (q.tipo === 'vf' ? ' · verdadero o falso' : '') + '</span>' + esc(q.p) + '</p>';

    html += '<div class="opts">' + opcs.map((o, k) => {
      const key = String.fromCharCode(65 + k);
      let cls = '';
      if (guardada !== undefined) {
        if (o.i === q.r) cls = ' is-ok';
        else if (o.i === guardada) cls = ' is-bad';
      } else if (o.i === guardada) cls = ' is-sel';
      const mark = guardada !== undefined
        ? '<span class="opt-mark">' + (o.i === q.r ? '✔' : (o.i === guardada ? '✘' : '')) + '</span>' : '';
      return '<button class="opt' + cls + '" data-opt="' + o.i + '"' + (guardada !== undefined ? ' disabled' : '') + '>' +
        '<span class="key">' + key + '</span><span>' + esc(o.txt) + '</span>' + mark + '</button>';
    }).join('') + '</div>';

    if (guardada !== undefined && q.e) {
      html += '<div class="explain"><b>Explicación:</b> ' + esc(q.e) + '</div>';
    }

    /* Las trampas. Cada distractor lleva en 't' por que resulta creible,
       asi que al fallar se ve que no era muoha: era la que tocaba. */
    if (guardada !== undefined && q.t) {
      const mio = q.t[String(guardada)];
      const atajo = atajosDe(q);
      let traps = '';
      if (mio) {
        traps += '<div class="trampa trampa-fallada"><b>Por qué casi te la cree:</b> ' +
          esc(mio) + '</div>';
      }
      if (atajo && atajo.length) {
        traps += '<div class="trampa"><b>Las otras trampas:</b><ul>' +
          atajo.map((x) => '<li><b>' + esc(x.txt) + ':</b> ' + esc(x.razon) + '</li>').join('') +
          '</ul></div>';
      }
      html += traps;
    }

    if (guardada !== undefined && !inmediata && !q.e) {
      html += '<div class="explain">Respondida.</div>';
    }
    if (!guardada && inmediata) {
      html += '<div class="explain muted">Selecciona una opción: se corrige al instante.</div>';
    }
    cuerpo.innerHTML = html;
  }

  cuerpoHandler();
  function cuerpoHandler() {
    $('#runBody').addEventListener('click', function (ev) {
      const it = itemActual();
      if (!it) return;
      if (it.type === 'match') { clickMatch(ev.target.closest('.match-item')); return; }
      const b = ev.target.closest('.opt');
      if (!b || respondida()) return;
      const q = it.q;
      const escolha = Number(b.dataset.opt);
      run.resp[q.id] = escolha;
      if (escolha === q.r) {
        delete state.wrong[q.id];
        save.wrong();
      } else {
        registraFallo(it, escolha);
      }
      pintaRun();
      if ($('#optInmediato').checked) pintarStats();
    });
  }

  function registraFallo(it, escolha) {
    const q = it.q;
    const reg = state.wrong[q.id] || { n: 0 };
    reg.n = (reg.n || 0) + 1;
    reg.last = Date.now();
    state.wrong[q.id] = reg;
    save.wrong();
    run.incorrectas.push({ item: it, elegida: escolha });
  }

  $('#btnNext').addEventListener('click', siguiente);
  $('#btnPrev').addEventListener('click', function () {
    if (run.i > 0) { run.i--; paraCrono(); if (run.cronometro) arrancaCrono(); pintaRun(); }
  });

  function siguiente() {
    if (run.i < run.items.length - 1) {
      run.i++;
      paraCrono();
      if (run.cronometro) arrancaCrono(); else pintarTimer();
      pintaRun();
    } else {
      finish();
    }
  }

  function finish() {
    paraCrono();
    const total = run.items.length;
    let aciertos = 0;
    run.items.forEach((it) => {
      if (it.type === 'match') {
        const r = run.resp[it.q.id];
        if (r && r.ok === it.q.pares.length) { aciertos++; delete state.wrong[it.q.id]; }
      } else {
        const v = run.resp[it.q.id];
        if (v === it.q.r) { aciertos++; delete state.wrong[it.q.id]; }
      }
    });
    save.wrong();

    const pct = total ? Math.round((aciertos / total) * 100) : 0;
    const segundos = Math.round((Date.now() - run.t0) / 1000);

    // desglose por bloque
    const porBloque = {};
    run.items.forEach((it) => {
      const b = it.q.bloque;
      if (!porBloque[b]) porBloque[b] = { t: 0, a: 0 };
      porBloque[b].t++;
      const ok = it.type === 'match'
        ? (run.resp[it.q.id] && run.resp[it.q.id].ok === it.q.pares.length)
        : run.resp[it.q.id] === it.q.r;
      if (ok) porBloque[b].a++;
    });

    state.history.unshift({
      fecha: ahora(), score: aciertos, total: total, segundos: segundos,
      bloques: Array.from(CONFIG.bloques).length
    });
    state.history = state.history.slice(0, 20);
    save.history();

    let veredicto, clase;
    if (pct >= 90) { veredicto = 'MATRICULA. A por el 10.'; clase = 'ok'; }
    else if (pct >= 70) { veredicto = 'Bien. Repasa los fallos y vuelta a intentarlo.'; clase = 'mid'; }
    else if (pct >= 50) { veredicto = 'Vas por buen camino, pero toca repasar temario.'; clase = 'mid'; }
    else { veredicto = 'Hay que volver al temario antes del examen.'; clase = 'bad'; }

    const nota = (aciertos / total) * 10;
    const gaps = Object.keys(porBloque).map((b) => ({ b: b, p: porBloque[b].a / porBloque[b].t }))
      .filter((x) => x.p < 0.75)
      .sort((a, b2) => a.p - b2.p);

    $('#resultBox').innerHTML =
      '<div class="nota ' + clase + '">' + nota.toFixed(1).replace('.', ',') + '</div>' +
      '<div class="veredicto">' + veredicto + '</div>' +
      '<div class="meta">' + aciertos + ' de ' + total + ' correctas · ' + pct + ' % · ' + fmtTime(segundos) + '</div>' +
      (gaps.length
        ? '<div class="gaps">' + gaps.map((g) => '<span class="pill pill-bad" style="background:color-mix(in srgb,var(--err) 22%,var(--surface-3));color:var(--err)">' +
            esc(blockById[g.b].titulo) + ' · ' + Math.round(g.p * 100) + ' %</span>').join('') + '</div>'
        : '<div class="gaps"><span class="pill pill-ok">Todos los bloques por encima del 75 %</span></div>') +
      '<div><button class="btn btn-primary" id="btnRepetir">Repetir este test</button> ' +
      '<button class="btn btn-ghost" id="btnSoloErrores">Repetir solo los fallos</button> ' +
      '<button class="btn btn-ghost" id="btnVolver">Volver al temario</button></div>';

    $('#reviewBox').innerHTML = '<h3>Repaso pregunta a pregunta</h3>' + run.items.map((it, idx) => {
      if (it.type === 'match') {
        const r = run.resp[it.q.id] || { ok: 0 };
        const ok = r.ok === it.q.pares.length;
        return '<div class="review-item ' + (ok ? 'ok' : 'bad') + '">' +
          '<div class="review-q">' + (idx + 1) + '. 🔗 ' + esc(it.q.bloqueTitulo) + ' — ' + esc(it.q.titulo) + '</div>' +
          '<div class="review-a">' + (r.ok || 0) + ' de ' + it.q.pares.length + ' parejas correctas.</div>' +
          '<div class="review-e">Relaciona cada elemento de la izquierda con su pareja.</div></div>';
      }
      const q = it.q;
      const elegida = run.resp[q.id];
      const ok = elegida === q.r;
      return '<div class="review-item ' + (ok ? 'ok' : 'bad') + '">' +
        '<div class="review-q">' + (idx + 1) + '. ' + esc(q.p) + '</div>' +
        '<div class="review-a">' +
          (ok ? '✔ Acertaste' : '✘ Fallaste' +
            (elegida !== undefined && elegida !== null ? ' · marcaste <span class="mal">' + esc(q.o[elegida]) + '</span>' : ' · sin responder')) +
          ' · Correcta: <b>' + esc(q.o[q.r]) + '</b>' +
        '</div>' +
        (q.e ? '<div class="review-e">' + esc(q.e) + '</div>' : '') +
        '</div>';
    }).join('');

    $('#testRun').hidden = true;
    $('#testEnd').hidden = false;
    $('#btnRepetir').addEventListener('click', () => {
      $('#testEnd').hidden = true;
      $('#testRun').hidden = false;
      run.i = 0; run.resp = {}; run.incorrectas = [];
      run.t0 = Date.now(); run.restantes = 30;
      if (run.cronometro) arrancaCrono(); else paraCrono();
      pintaRun();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    $('#btnSoloErrores').addEventListener('click', () => {
      const ids = Object.keys(state.wrong);
      const items = shuffle(QUESTIONS.filter((q) => ids.indexOf(q.id) !== -1)).map((q) => ({ type: 'mcq', q: q }));
      if (!items.length) { toast('No hay fallos que repasar. Bien.'); return; }
      $('#testEnd').hidden = true; $('#testRun').hidden = false;
      run.items = items; run.i = 0; run.resp = {}; run.incorrectas = [];
      run.t0 = Date.now(); run.restantes = 30;
      $('#runTotal').textContent = items.length;
      $('#runBlock').textContent = 'Solo fallos';
      $('#runBar').style.width = '0%';
      if (run.cronometro) arrancaCrono(); else paraCrono();
      pintaRun();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    $('#btnVolver').addEventListener('click', () => showView('temario'));

    pintaStats();
    pintaHistorial();
    actualizaResumen();
  }

  $('#btnSalir').addEventListener('click', function () {
    paraCrono();
    if (!confirm('¿Salir del test? Se pierde el progreso de esta vuelta.')) { if (run.cronometro) arrancaCrono(); return; }
    $('#testRun').hidden = true;
    $('#testSetup').hidden = false;
    pintaStats();
  });

  /* ---------------- emparejar ---------------- */
  const match = { sel: -1, done: {}, res: {}, fallado: false };

  function guardaMatch() {
    const it = itemActual();
    if (it && it.type === 'match') run.resp[it.q.id] = match.res;
  }

  function pintaMatching(cuerpo, it) {
    const q = it.q;
    match.sel = -1;
    match.done = {};
    match.res = { id: q.id, ok: 0 };
    match.fallado = false;
    delete run.resp[q.id];

    const ordenDer = shuffle(q.pares.map((_, i) => i));
    cuerpo.innerHTML =
      '<p class="q-preg"><span class="q-num">Emparejar · ' + q.pares.length + ' parejas</span>' +
      esc(q.titulo) + ' — toca un elemento de la izquierda y su pareja de la derecha.</p>' +
      '<div class="match-grid">' +
        '<div class="match-col"><h4>Elemento</h4>' +
          q.pares.map((p, i) => '<button class="match-item" data-l="' + i + '">' + esc(p[0]) + '</button>').join('') +
        '</div>' +
        '<div class="match-col"><h4>Pareja</h4>' +
          ordenDer.map((i) => '<button class="match-item" data-r="' + i + '">' + esc(q.pares[i][1]) + '</button>').join('') +
        '</div>' +
      '</div>' +
      '<div class="explain muted">Siguiente se activa cuando estén todas las parejas.</div>';

    actualizarBotonSiguiente();
  }

  function clickMatch(el) {
    if (!el || el.disabled) return;
    const it = itemActual();
    if (!it || it.type !== 'match') return;
    const q = it.q;

    if (el.dataset.l !== undefined) {
      const l = Number(el.dataset.l);
      if (match.done[l]) return;
      $$('#runBody .match-item[data-l]').forEach((b) => b.classList.remove('is-sel'));
      el.classList.add('is-sel');
      match.sel = l;
      return;
    }

    if (el.dataset.r === undefined) return;
    if (match.sel < 0) { toast('Primero elige un elemento de la izquierda.'); return; }

    const r = Number(el.dataset.r);
    const izqEl = $('#runBody .match-item[data-l="' + match.sel + '"]');

    if (r === match.sel) {
      match.done[match.sel] = true;
      izqEl.classList.remove('is-sel');
      izqEl.classList.add('is-ok');
      izqEl.disabled = true;
      el.classList.add('is-ok');
      el.disabled = true;
      match.res.ok++;
      match.sel = -1;
      guardaMatch();
      if (match.res.ok === q.pares.length) {
        delete state.wrong[q.id];
        save.wrong();
        toast('¡Todas las parejas correctas!');
      }
      actualizarBotonSiguiente();
    } else {
      izqEl.classList.add('is-bad');
      el.classList.add('is-bad');
      const l = match.sel;
      if (!match.fallado) { match.fallado = true; registraFallo(it, null); }
      setTimeout(() => {
        const a = $('#runBody .match-item[data-l="' + l + '"]');
        if (a) a.classList.remove('is-bad');
        el.classList.remove('is-bad');
        izqEl.classList.remove('is-sel');
      }, 450);
      toast('No es esa. Inténtalo otra vez.');
    }
  }

  function actualizarBotonSiguiente() {
    const it = itemActual();
    const btn = $('#btnNext');
    if (it && it.type === 'match') {
      const faltan = it.q.pares.length - Object.keys(match.done).length;
      btn.disabled = faltan > 0;
      $('#runHint').textContent = faltan > 0 ? 'Quedan ' + faltan + ' parejas' : 'Listo para continuar';
    } else {
      btn.disabled = false;
      $('#runHint').textContent = run.cronometro ? 'Cronómetro: 30 s por pregunta' : 'Sin límite de tiempo';
    }
  }

  /* ---------------- historial ---------------- */
  function pintaHistorial() {
    const h = state.history;
    if (!h.length) { $('#historyList').innerHTML = '<p class="muted" style="margin:0">Todavía no has hecho ningún test.</p>'; return; }
    $('#historyList').innerHTML = h.map((x) => {
      const pct = Math.round((x.score / x.total) * 100);
      const col = pct >= 80 ? 'var(--ok)' : pct >= 50 ? 'var(--warn)' : 'var(--err)';
      return '<div class="history-item">' +
        '<b>' + x.score + '/' + x.total + '</b>' +
        '<span class="hist-bar"><span style="width:' + pct + '%;background:' + col + '"></span></span>' +
        '<span>' + pct + ' % · ' + fmtTime(x.segundos) + '</span>' +
        '<span class="h-date">' + esc(x.fecha) + '</span>' +
        '</div>';
    }).join('');
  }
  $('#btnClearHistory').addEventListener('click', () => {
    if (!confirm('¿Vaciar el historial de tests?')) return;
    state.history = []; save.history(); pintaHistorial(); pintaStats();
  });

  /* ====================== 9. DATOS CLAVE ======================== */
  const datos = { i: 0, cola: [], aciertos: 0, modo: 'ctx' };

  function pintaDatos() {
    $('#datosWrap').innerHTML = UD1.numeros.map((n, i) =>
      '<div class="datos-card"><b>' + esc(n.v) + '<small>' + esc(n.u) + '</small></b>' +
      '<p>' + esc(n.ctx) + '</p>' +
      '<span class="pill">' + esc((blockById[n.b] || {}).titulo || n.b) + '</span></div>'
    ).join('');
  }

  function drillDatos() {
    datos.cola = shuffle(UD1.numeros.map((_, i) => i));
    datos.i = 0; datos.aciertos = 0;
    $('#datosWrap').hidden = true;
    $('#datosDrill').hidden = false;
    muestraDato();
  }

  function muestraDato() {
    if (datos.i >= datos.cola.length) {
      const pct = Math.round((datos.aciertos / datos.cola.length) * 100);
      $('#datosDrill').innerHTML = '<div class="flash-done"><h3>Drill de cifras terminado</h3>' +
        '<p>' + datos.aciertos + ' de ' + datos.cola.length + ' (' + pct + ' %)</p>' +
        '<div class="flash-actions">' +
        '<button class="btn btn-primary" data-dato="reset">Otra ronda</button>' +
        '<button class="btn btn-ghost" data-dato="ver">Ver la lista</button>' +
        '</div></div>';
      return;
    }
    const n = UD1.numeros[datos.cola[datos.i]];
    const otros = pick(UD1.numeros.filter((x) => x !== n && norm(x.ctx) !== norm(n.ctx)), 3);
    const opciones = shuffle([n].concat(otros));
    const mostrarValor = datos.modo === 'ctx';

    $('#datosDrill').innerHTML =
      '<div class="flash-progress"><div class="bar"><span style="width:' +
        (datos.i / datos.cola.length * 100) + '%"></span></div><small>' + (datos.i + 1) + ' / ' + datos.cola.length + '</small></div>' +
      '<div class="datos-card" style="text-align:center;margin-bottom:1rem">' +
        (mostrarValor ? '<b style="font-size:2rem">' + esc(n.v) + ' ' + esc(n.u) + '</b><p>¿De qué es esto?</p>'
            : '<b style="font-size:1.3rem">' + esc(n.ctx) + '</b><p>¿Qué cifra le corresponde?</p>') +
      '</div>' +
      '<div class="opts-ctx">' + opciones.map((o) =>
        '<button class="opt-ctx" data-op="' + esc(datos.modo === 'ctx' ? o.ctx : o.v + ' ' + o.u) + '">' +
        (datos.modo === 'ctx' ? esc(o.ctx) : '<b>' + esc(o.v) + '</b> ' + esc(o.u)) + '</button>').join('') +
      '</div>' +
      '<div class="flash-actions" style="margin-top:1rem"><button class="btn btn-ghost" data-dato="reset">↺ Reiniciar</button>' +
      '<button class="btn btn-ghost" data-dato="ver">Ver la lista</button></div>';
  }

  $('#datosDrill').addEventListener('click', function (ev) {
    const b = ev.target.closest('.opt-ctx');
    if (!b || b.disabled) return;
    const n = UD1.numeros[datos.cola[datos.i]];
    const elegida = b.dataset.op;
    const buena = datos.modo === 'ctx' ? elegida === n.ctx : elegida === (n.v + ' ' + n.u);
    $$('.opt-ctx', $('#datosDrill')).forEach((x) => { x.disabled = true; });
    b.classList.add(buena ? 'is-ok' : 'is-bad');
    if (buena) datos.aciertos++;
    else {
      const clave = datos.modo === 'ctx' ? n.ctx : n.v + ' ' + n.u;
      const correcto = Array.from(document.querySelectorAll('.opt-ctx')).find((x) => x.dataset.op === clave);
      if (correcto) correcto.classList.add('is-ok');
    }
    setTimeout(() => { datos.i++; muestraDato(); }, 900);
  });

  $('#datosDrill').addEventListener('click', function (ev) {
    const b = ev.target.closest('[data-dato]');
    if (!b) return;
    if (b.dataset.dato === 'reset') drillDatos();
    else { $('#datosDrill').hidden = true; $('#datosWrap').hidden = false; }
  });

  $('#btnDatosStart').addEventListener('click', () => { datos.modo = $('#datosModo').value; drillDatos(); });
  $('#datosModo').addEventListener('change', () => { datos.modo = $('#datosModo').value; });

  /* ====================== 10. ATAJOS =========================== */
  function pintaAtajos(q) {
    q = norm(q || '');
    const filas = TABLA_ATAJOS.filter((a) => !q || norm(a.atajo + ' ' + a.fn).indexOf(q) !== -1);
    $('#atajosTable').innerHTML = filas.length
      ? '<table><thead><tr><th style="width:230px">Atajo</th><th>Función</th><th>Examen</th></tr></thead><tbody>' +
        filas.map((a) => '<tr' + (a.examen ? ' style="background:color-mix(in srgb,var(--err) 9%,transparent)"' : '') + '>' +
          '<td><code>' + esc(a.atajo) + '</code></td><td>' + esc(a.fn) + '</td>' +
          '<td>' + (a.examen ? '<span class="pill" style="background:color-mix(in srgb,var(--err) 25%,var(--surface-3));color:var(--err)">pregunta 12</span>' : '<span class="muted">—</span>') +
          '</td></tr>').join('') + '</tbody></table>'
      : '<p class="empty">Nada coincide.</p>';
  }

  let atajoSearch = null;
  $('#searchAtajos').addEventListener('input', function () {
    clearTimeout(atajoSearch);
    const v = this.value;
    atajoSearch = setTimeout(() => pintaAtajos(v), 160);
  });
  $('#btnAtajosShuffle').addEventListener('click', () => {
    shuffle(TABLA_ATAJOS).forEach((a, i) => { TABLA_ATAJOS[i] = a; });
    pintaAtajos($('#searchAtajos').value);
    toast('Orden barajado');
  });
  $('#btnAtajosPrint').addEventListener('click', () => window.print());

  /* ====================== 11. INGLÉS ============================ */
  function pintaIngles(q, inverso) {
    q = norm(q || '');
    const filas = TABLA_INGLES.filter((r) => !q || norm(r.es + ' ' + r.en).indexOf(q) !== -1);
    $('#inglesTable').innerHTML = filas.length
      ? '<table><thead><tr><th>Español</th><th>Inglés</th><th>Cómo se lee</th><th>Ojo</th></tr></thead><tbody>' +
        filas.map((r) => '<tr>' +
          '<td><strong>' + esc(inverso ? r.en : r.es) + '</strong></td>' +
          '<td><code>' + esc(inverso ? r.es : r.en) + '</code></td>' +
          '<td class="muted">' + esc(r.pron) + '</td>' +
          '<td class="muted">' + esc(r.nota) + '</td>' +
          '</tr>').join('') + '</tbody></table>'
      : '<p class="empty">Nada coincide.</p>';
  }

  let inglesSearch = null;
  $('#searchIngles').addEventListener('input', function () {
    clearTimeout(inglesSearch);
    const v = this.value, inv = $('#inglesInverso').checked;
    inglesSearch = setTimeout(() => pintaIngles(v, inv), 160);
  });
  $('#inglesInverso').addEventListener('change', function () {
    pintaIngles($('#searchIngles').value, this.checked);
  });

  $('#btnInglesDrill').addEventListener('click', () => {
    const inv = $('#inglesIngles').checked;
    $('#flashBloque').value = 'ingles';
    buildDeck();
    flash.deck = flash.deck.map((d) => ({ c: d.c, q: inv ? d.c.a : d.c.q, a: inv ? d.c.q : d.c.a }));
    flash.cola = shuffle(flash.deck.map((_, i) => i));
    flash.i = 0; flash.aciertos = 0; flash.fallos = 0; flash.falladas = [];
    showView('flash');
  });

  /* ====================== 12. NOTAS ============================= */
  const notasEl = $('#notasArea');
  notasEl.value = state.notas;
  let notasTimer = null;
  notasEl.addEventListener('input', function () {
    clearTimeout(notasTimer);
    const v = this.value;
    notasTimer = setTimeout(() => { state.notas = v; save.notas(); }, 400);
  });
  $('#btnNotasClear').addEventListener('click', () => {
    if (!confirm('¿Borrar todas tus notas?')) return;
    state.notas = ''; save.notas(); notasEl.value = '';
  });

  function pintaAtajosRapidas() {
    const rapidas = [
      ['Ctrl + S', 'guardar'], ['Ctrl + P', 'imprimir'], ['Ctrl + F', 'buscar'],
      ['Ctrl + A', 'todo'], ['Ctrl + Z', 'deshacer'], ['Alt + Tab', 'cambiar ventana'],
      ['Win + L', 'bloquear'], ['F2', 'renombrar'], ['Supr', 'borrar'], ['Win + Shift + S', 'capturar']
    ];
    $('#atajosRapidas').innerHTML = rapidas.map((r) =>
      '<span class="chip">' + esc(r[0]) + ' → ' + esc(r[1]) + '</span>').join('');
  }

  /* ====================== 13. VARIOS ============================ */
  const btnTheme = $('#btnTheme');
  function aplicaTema(t) {
    document.documentElement.setAttribute('data-tema', t);
    btnTheme.textContent = t === 'claro' ? '☀' : '🌙';
    Store.write('tema', t);
  }
  aplicaTema(Store.read('tema', 'oscuro'));
  btnTheme.addEventListener('click', () => {
    aplicaTema(document.documentElement.getAttribute('data-tema') === 'claro' ? 'oscuro' : 'claro');
  });

  $('#btnPrint').addEventListener('click', () => { showView('temario'); setTimeout(() => window.print(), 60); });

  $('#btnReset').addEventListener('click', () => {
    if (!confirm('Esto borra TODO tu progreso: bloques estudiados, flashcards dominadas, fallos guardados, historial y notas.\n\n¿Seguro?')) return;
    ['studying', 'flash', 'wrong', 'history', 'notas'].forEach((k) => Store.drop(k));
    location.reload();
  });

  const btnTop = $('#btnTop');
  window.addEventListener('scroll', () => { btnTop.hidden = window.scrollY < 700; }, { passive: true });
  btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* atajos globales de la propia web */
  document.addEventListener('keydown', function (e) {
    const enCampo = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
    if (e.altKey && !enCampo) {
      const n = Number(e.key);
      if (n >= 1 && n <= VIEWS.length) { e.preventDefault(); showView(VIEWS[n - 1]); }
      return;
    }
    if (enCampo) return;

    if (vistaActual === 'flash' && !$('#flashCard').hidden) {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); volteaFlash(); }
      else if (e.key === '1') { e.preventDefault(); respondeFlash(true); }
      else if (e.key === '2') { e.preventDefault(); respondeFlash(false); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); $('#btnFlashSkip').click(); }
    }

    if (vistaActual === 'test' && !$('#testRun').hidden) {
      if (e.key === 'ArrowRight') { e.preventDefault(); if (!$('#btnNext').disabled) siguiente(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); if (run.i > 0) $('#btnPrev').click(); }
      else if (/^[a-dA-D]$/.test(e.key)) {
        const idx = e.key.toLowerCase().charCodeAt(0) - 97;
        const btns = $$('#runBody .opt');
        if (btns[idx] && !btns[idx].disabled) { e.preventDefault(); btns[idx].click(); }
      }
      else if (e.key === 'Enter' && !$('#btnNext').disabled) { e.preventDefault(); siguiente(); }
    }
  });

  /* ====================== 14. ARRANQUE ========================== */
  let iniciado = false;
  function inicio() {
    if (iniciado) return;
    iniciado = true;
    document.title = UD1.meta.titulo + ' — Estudio';
    $('#brandTitle').textContent = UD1.meta.titulo;
    $('#brandSub').textContent = UD1.meta.ciclo + ' · ' + UD1.meta.modulo;
    $('#heroTitle').textContent = UD1.meta.titulo;
    $('#heroSub').innerHTML = '<b>' + UD1.meta.alumno + '</b> · ' + BLOQUES.length + ' bloques · ' +
      CARDS.length + ' flashcards · ' + QUESTIONS.length + ' preguntas · ' + MATCH_ITEMS.length +
      ' ejercicios de emparejar.<br>Fuente: ' + esc(UD1.meta.fuente) + '. Pulsa <kbd>Alt</kbd>+<kbd>1..7</kbd> para saltar de sección.';

    $('#footMeta').textContent = UD1.meta.titulo + ' · ' + UD1.meta.ciclo + ' · ' + UD1.meta.fuente;

    pintaTemario('');
    pintaSelectFlash();
    pintaChips();
    pintaDatos();
    pintaAtajos('');
    pintaIngles('', false);
    pintaAtajosRapidas();
    pintaStats();
    pintaHistorial();

    if (location.hash && VIEWS.indexOf(location.hash.slice(1)) !== -1) showView(location.hash.slice(1));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicio);
  } else {
    inicio();
  }
})();