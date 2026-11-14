/* inspirovix. interactions. Vanilla, no dependencies. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const still = /[?&]still\b/.test(location.search);   /* testing switch: no motion, no reveals */
  const reduce = still || matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (still) { document.documentElement.style.scrollBehavior = 'auto'; const m = location.search.match(/[?&]at=([\w-]+)/); if (m) addEventListener('load', () => { const el = document.getElementById(m[1]); if (el) scrollTo(0, el.getBoundingClientRect().top + scrollY - 76 + (+((location.search.match(/[?&]dy=(-?\d+)/) || [])[1] || 0))); }); }
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- nav + menu ---------- */
  const nav = $('#nav'), menu = $('#menu'), menuBtn = $('#menuBtn'), dock = $('#dock');
  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  /* ---------- reveal ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  $$('.panel, #hub, #stepsLine').forEach(el => io.observe(el));
  /* the hero entrance runs on a timer, so it can never be left hidden (a background tab gets no animation frames) */
  $$('main > :not(.hero) [data-rv]').forEach(el => el.classList.add('in'));

  /* ---------- scroll: nav state, signal rail, trade band, dock ---------- */
  const rail = $('#rail'), railLabel = $('#railLabel'), railN = $('#railN');
  const secs = $$('[data-rail]'), band = $('#band');
  /* light or dark is read from the section's real background, so the rail works in every theme */
  const lum = new WeakMap();
  function isLight(el) {
    const k = document.documentElement.dataset.look, c = lum.get(el);
    if (c && c.k === k) return c.v;
    const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g) || [0, 0, 0];
    const v = (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255 > .6;
    lum.set(el, { k, v }); return v;
  }
  let ticking = false;
  function onScroll() {
    ticking = false;
    const y = scrollY, vh = innerHeight;
    nav.classList.toggle('is-solid', y > 24);
    dock.classList.toggle('on', y > vh * .7);
    const max = document.documentElement.scrollHeight - vh;
    rail.style.setProperty('--p', max > 0 ? Math.min(1, y / max).toFixed(4) : 0);
    const mid = vh / 2;
    let cur = 0;
    secs.forEach((s, i) => { const r = s.getBoundingClientRect(); if (r.top <= mid && r.bottom > mid) cur = i; });
    const s = secs[cur];
    if (railLabel.textContent !== s.dataset.rail) railLabel.textContent = s.dataset.rail;
    railN.textContent = String(cur).padStart(2, '0');
    rail.classList.toggle('on-light', isLight(s));
    if (band && !reduce) {
      const r = band.parentElement.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) band.style.setProperty('--x', (-(vh - r.top) * .32 - 40).toFixed(1) + 'px');
    }
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---------- hero: the street. Reflections on the wet road, and light rain ---------- */
  (function street() {
    const st = $('#street'); if (!st) return;
    /* each wall is mirrored once below its ground line: the reflection on the wet road */
    $$('.wall', st).forEach(w => { const m = $('.wall__row', w).cloneNode(true); m.className = 'wall__mirror'; w.appendChild(m); });
    const c = $('#rain'); if (!c || reduce) return;
    const ctx = c.getContext('2d'); let w = 0, h = 0, raf = 0, visible = true; const D = [];
    function size() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(130, Math.max(40, w / 11)));
      D.length = 0; for (let i = 0; i < n; i++) D.push({ x: Math.random() * w, y: Math.random() * h, l: 9 + Math.random() * 17, v: 9 + Math.random() * 8, a: .05 + Math.random() * .13 });
    }
    function step() {
      ctx.clearRect(0, 0, w, h); ctx.lineWidth = 1; ctx.lineCap = 'round';
      for (const d of D) {
        ctx.strokeStyle = `rgba(190, 212, 255, ${d.a})`;
        ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - d.l * .16, d.y + d.l); ctx.stroke();
        d.y += d.v; d.x -= d.v * .16;
        if (d.y > h) { d.y = -d.l; d.x = Math.random() * (w + 60); }
      }
    }
    function loop() { step(); raf = visible && !document.hidden ? requestAnimationFrame(loop) : 0; }
    size();
    new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible && !raf) raf = requestAnimationFrame(loop); }).observe(c);
    document.addEventListener('visibilitychange', () => { if (!document.hidden && visible && !raf) raf = requestAnimationFrame(loop); });
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(size, 200); });
    raf = requestAnimationFrame(loop);
  })();

  /* ---------- hero: the thread plays once, replayable ---------- */
  (function thread() {
    const scene = $('#scene'); if (!scene) return;
    const el = n => $(`[data-t="${n}"]`, scene);
    let timers = [];
    function play() {
      timers.forEach(clearTimeout); timers = [];
      $$('[data-t]', scene).forEach(e => e.classList.remove('on', 'off'));
      if (reduce) { [1, 3, 4, 5, 6].forEach(n => el(n).classList.add('on')); el(2).classList.add('off'); return; }
      const at = (ms, fn) => timers.push(setTimeout(fn, ms));
      at(500, () => el(1).classList.add('on'));
      at(1250, () => el(2).classList.add('on'));
      at(2150, () => { el(2).classList.add('off'); el(3).classList.add('on'); });
      at(2650, () => el(4).classList.add('on'));
      at(3550, () => el(5).classList.add('on'));
      at(4300, () => el(6).classList.add('on'));
    }
    $('#replay').addEventListener('click', play);
    setTimeout(play, 700);
    if (fine && !reduce) {
      const tilt = $('#street'), hero = $('.hero'); let q = false, mx = 0, my = 0;
      hero.addEventListener('pointermove', e => {
        const r = hero.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width * 2 - 1; my = (e.clientY - r.top) / r.height * 2 - 1;
        if (!q) { q = true; requestAnimationFrame(() => { q = false; tilt.style.setProperty('--mx', mx.toFixed(3)); tilt.style.setProperty('--my', my.toFixed(3)); }); }
      });
      hero.addEventListener('pointerleave', () => { tilt.style.setProperty('--mx', 0); tilt.style.setProperty('--my', 0); });
    }
  })();

  /* ---------- system: the stage follows the step in view ---------- */
  (function flow() {
    const stage = $('#stage'), steps = $$('#steps li'); if (!stage) return;
    const set = n => { stage.dataset.step = n; steps.forEach(s => s.classList.toggle('is-on', s.dataset.step === String(n))); };
    if (reduce) { stage.dataset.step = 4; steps.forEach(s => s.classList.add('is-on')); return; }
    /* the step whose top has passed the reading line: mid-screen on desktop, lower on phones where the stage is pinned on top */
    const wide = matchMedia('(min-width: 960px)');
    let q = false, last = 0;
    function update() {
      q = false;
      const line = innerHeight * (wide.matches ? .56 : .8);
      let n = 1; steps.forEach(s => { if (s.getBoundingClientRect().top <= line) n = +s.dataset.step; });
      if (n !== last) { last = n; set(n); }
    }
    addEventListener('scroll', () => { if (!q) { q = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update); update();
  })();

  /* ---------- work: filter + scroll-inside-frame height ---------- */
  (function work() {
    const chips = $$('#workFilter .chip'), items = $$('#workGrid .proj');
    chips.forEach(c => c.addEventListener('click', () => {
      chips.forEach(x => x.setAttribute('aria-pressed', x === c));
      const f = c.dataset.f;
      items.forEach(i => { i.hidden = !(f === 'all' || i.dataset.cat.split(' ').includes(f)); i.classList.add('in'); });
    }));
    const fit = () => $$('.proj__shot').forEach(s => s.style.setProperty('--fh', s.clientHeight + 'px'));
    fit(); addEventListener('resize', fit);
  })();

  /* ---------- trades: tabs ---------- */
  (function tabs() {
    const tabs = $$('#tabs .tab'); if (!tabs.length) return;
    const pick = (t, focus) => { tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !on; }); if (focus) t.focus(); };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => pick(t));
      t.addEventListener('keydown', e => {
        const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
        if (d) { e.preventDefault(); pick(tabs[(i + d + tabs.length) % tabs.length], true); }
        if (e.key === 'Home') { e.preventDefault(); pick(tabs[0], true); }
        if (e.key === 'End') { e.preventDefault(); pick(tabs[tabs.length - 1], true); }
      });
    });
  })();

  /* ---------- reviews: the map is the filter ---------- */
  (function reviews() {
    const R = window.IV_REVIEWS, M = window.IV_MAP; if (!R || !M) return;
    const NAMES = { gb: 'United Kingdom', us: 'United States', ca: 'Canada', ae: 'United Arab Emirates', qa: 'Qatar', sa: 'Saudi Arabia', pk: 'Pakistan', in: 'India', sg: 'Singapore', my: 'Malaysia', th: 'Thailand', hk: 'Hong Kong', kr: 'South Korea', au: 'Australia', de: 'Germany', fr: 'France', at: 'Austria', pt: 'Portugal', no: 'Norway', ps: 'Palestine', eg: 'Egypt', ma: 'Morocco', zm: 'Zambia' };
    const TONES = ['#1F56A8', '#0E7C66', '#8A4B0F', '#A3324A', '#2D5F8B', '#0E2240', '#3A6B1F', '#7A5A12'];
    const counts = {}; R.forEach(r => counts[r.c] = (counts[r.c] || 0) + 1);
    const codes = Object.keys(NAMES).sort((a, b) => (counts[b] || 0) - (counts[a] || 0) || NAMES[a].localeCompare(NAMES[b]));
    const flag = c => `assets/img/flags/${c}.svg`;
    const NS = 'http://www.w3.org/2000/svg';
    const mapEl = $('#map'), tip = $('#mapTip'), filterEl = $('#rfilter'), quoteEl = $('#quote'), cards = $('#rcards'), more = $('#rmore'), countEl = $('#rcount'), moreBtn = $('#rmoreBtn'), allBtn = $('#rallBtn');
    let cur = 'all', shown = 0, list = [];

    /* map */
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${M.w} ${M.h}`); svg.setAttribute('role', 'group'); svg.setAttribute('aria-label', 'World map. Countries we have worked with are highlighted; choose one to filter the reviews.');
    const dot = (x, y, r) => `M${(x - r).toFixed(1)} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
    const base = document.createElementNS(NS, 'path'); base.setAttribute('class', 'b'); base.setAttribute('d', M.base.map(p => dot(p[0], p[1], 2.1)).join('')); svg.appendChild(base);
    const groups = {};
    Object.keys(M.hot).forEach(c => {
      if (!NAMES[c]) return;
      const g = document.createElementNS(NS, 'g'); g.setAttribute('class', 'c'); g.dataset.c = c; g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button');
      g.setAttribute('aria-label', `${NAMES[c]}, ${counts[c] ? counts[c] + (counts[c] === 1 ? ' review' : ' reviews') : 'client work'}`);
      const pts = M.hot[c], small = pts.length <= 2, a = M.anchor[c];
      if (small) { const h = document.createElementNS(NS, 'circle'); h.setAttribute('class', 'hit'); h.setAttribute('cx', a[0]); h.setAttribute('cy', a[1]); h.setAttribute('r', 13); g.appendChild(h); }
      pts.forEach(p => { const ci = document.createElementNS(NS, 'circle'); ci.setAttribute('cx', p[0]); ci.setAttribute('cy', p[1]); ci.setAttribute('r', small ? 3.6 : 2.6); g.appendChild(ci); });
      const pin = document.createElementNS(NS, 'circle'); pin.setAttribute('class', 'pin'); pin.setAttribute('cx', a[0]); pin.setAttribute('cy', a[1]); pin.setAttribute('r', small ? 10 : Math.min(46, 8 + Math.sqrt(pts.length) * 4.2)); g.appendChild(pin);
      const show = () => { tip.innerHTML = ''; const im = new Image(); im.src = flag(c); im.alt = ''; tip.append(im, `${NAMES[c]}${counts[c] ? ', ' + counts[c] + (counts[c] === 1 ? ' review' : ' reviews') : ''}`); tip.style.left = (a[0] / M.w * 100) + '%'; tip.style.top = (a[1] / M.h * 100) + '%'; tip.classList.add('on'); };
      const hide = () => tip.classList.remove('on');
      g.addEventListener('pointerenter', show); g.addEventListener('pointerleave', hide); g.addEventListener('focus', show); g.addEventListener('blur', hide);
      g.addEventListener('click', () => pick(cur === c ? 'all' : c));
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(cur === c ? 'all' : c); } });
      groups[c] = g; svg.appendChild(g);
    });
    mapEl.appendChild(svg);

    /* chips */
    const mk = (c, label, n) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'chip'; b.dataset.c = c; b.setAttribute('aria-pressed', c === 'all');
      if (c !== 'all') { const im = new Image(); im.src = flag(c); im.alt = ''; im.width = 18; im.height = 14; b.appendChild(im); }
      b.append(label); if (n) { const s = document.createElement('sup'); s.textContent = n; b.appendChild(s); }
      b.addEventListener('click', () => pick(c)); return b; };
    filterEl.appendChild(mk('all', 'All countries', R.length));
    codes.forEach(c => filterEl.appendChild(mk(c, NAMES[c], counts[c] || '')));

    /* cards */
    function who(r, k) {
      const p = document.createElement('p'); p.className = 'who';
      const a = document.createElement('span'); a.className = 'ava'; a.style.background = TONES[k % TONES.length]; a.setAttribute('aria-hidden', 'true'); a.textContent = r.i;
      const f = new Image(); f.src = flag(r.c); f.alt = ''; f.width = 22; f.height = 17; f.loading = 'lazy';
      const t = document.createElement('span'); t.append(r.n); const s = document.createElement('small'); s.textContent = r.d; t.appendChild(s);
      p.append(a, f, t); return p;
    }
    function stars(r) { const p = document.createElement('p'); p.className = 'stars'; const full = Math.round(r.r); p.setAttribute('aria-label', r.r + ' out of 5 stars'); p.innerHTML = '★'.repeat(full) + (full < 5 ? `<span class="off">${'★'.repeat(5 - full)}</span>` : '') + (r.r < 5 ? `<span class="sc">${r.r.toFixed(1)}</span>` : ''); return p; }
    function card(r, k) { const li = document.createElement('li'); li.className = 'rv is-new'; const q = document.createElement('p'); q.textContent = r.t; li.append(stars(r), q, who(r, k)); return li; }
    function add(n) {
      const end = Math.min(list.length, shown + n), frag = document.createDocumentFragment();
      for (let k = shown; k < end; k++) frag.appendChild(card(list[k], k));
      cards.appendChild(frag); shown = end;
      const total = list.length + (quoteEl.hidden ? 0 : 1), now = shown + (quoteEl.hidden ? 0 : 1);
      countEl.textContent = `Showing ${now} of ${total} ${total === 1 ? 'review' : 'reviews'}${cur === 'all' ? '' : ' from ' + NAMES[cur]}`;
      more.hidden = shown >= list.length;
      allBtn.textContent = `Show all ${total}`;
    }
    function pick(c) {
      cur = c;
      $$('.chip', filterEl).forEach(b => b.setAttribute('aria-pressed', b.dataset.c === c));
      mapEl.classList.toggle('has-sel', c !== 'all');
      Object.entries(groups).forEach(([k, g]) => g.classList.toggle('sel', k === c));
      const pool = c === 'all' ? R : R.filter(r => r.c === c);
      cards.innerHTML = ''; shown = 0; $('.rempty', cards.parentElement)?.remove();
      if (!pool.length) {
        quoteEl.hidden = true; list = []; more.hidden = true;
        const d = document.createElement('p'); d.className = 'rempty'; d.innerHTML = `No written reviews from ${NAMES[c]} yet. Our client there is GuruIsOnline: <a href="#work">see the work</a>.`; cards.before(d); return;
      }
      /* the lead quote: a strong, short, five-star one */
      const lead = c === 'all' ? pool.find(r => r.f === 0) : (pool.find(r => r.r === 5 && r.t.length > 40 && r.t.length < 240) || pool[0]);
      quoteEl.hidden = false; quoteEl.innerHTML = '';
      const bq = document.createElement('blockquote'); bq.textContent = lead.t.length > 260 ? lead.t.slice(0, 250).replace(/\s+\S*$/, '') + '…' : lead.t;
      const w = who(lead, 0); quoteEl.append(bq, w);
      const rest = pool.filter(r => r !== lead);
      list = c === 'all' ? [...rest.filter(r => r.f >= 0).sort((a, b) => a.f - b.f), ...rest.filter(r => r.f < 0)] : rest;
      add(c === 'all' ? 6 : 9);
    }
    moreBtn.addEventListener('click', () => add(12));
    allBtn.addEventListener('click', () => add(list.length));
    pick('all');
  })();
})();
