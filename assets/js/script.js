/* WI-San — script.js
   Bergantung pada: images.js (IMG) dan products.js (PRODUCTS, TIERS).
   Urutan <script> di setiap halaman: images.js -> products.js -> script.js */

const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const PLAY = '<svg viewBox="0 0 24 24"><path d="M3 3l19 9-19 9 4-9z"/></svg>';
const rupiah = n => 'Rp ' + n.toLocaleString('id-ID');
const speedText = m => m >= 1000 ? m / 1000 + ' Gbps' : m + ' Mbps';
const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const TESTI = [
  { q: '“Saya tidak tau mengapa wifi yang sebelumnya saya pakai Jaringan nya terus eror. tapi saat saya memakai WI-San, Internet saya menjadi Lebih Lancar. Dan saya juga bisa menghemat pengeluaran karena biaya WI-San yang murah”', n: 'Haliq Junansyah', r: 'Ninja SMK Tritech Indonesia', i: 't1' },
  { q: '“Sejak pindah ke WI-San, koneksi di rumah terasa jauh lebih konsisten. Meeting online tidak lagi jadi acara tebak-tebakan.”', n: 'Nadia Putri', r: 'Freelancer', i: 't2' },
  { q: '“Paket Pro cukup untuk kerja dan gaming di rumah. Pingnya rendah dan tidak pernah putus saat banyak perangkat menyala.”', n: 'Fajar Rizky', r: 'Content Creator', i: 't3' },
  { q: '“Untuk toko kecil kami, paket Business sangat membantu. Kasir online lancar dan laporan jaringannya mudah dipahami.”', n: 'Sinta Maharani', r: 'Pemilik Usaha', i: 't4' },
  { q: '“Yang saya cari bukan angka Mbps besar, tapi koneksi yang tidak tiba-tiba menghilang. WI-San cocok untuk itu.”', n: 'Aldi Ramadhan', r: 'Developer', i: 't5' }
];

const PROV = ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Sumatera Selatan', 'Bangka Belitung', 'Bengkulu', 'Lampung', 'DKI Jakarta', 'Banten', 'Jawa Barat', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara', 'Sulawesi Utara', 'Gorontalo', 'Sulawesi Tengah', 'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Tenggara', 'Maluku', 'Maluku Utara', 'Papua', 'Papua Barat', 'Papua Barat Daya', 'Papua Tengah', 'Papua Pegunungan', 'Papua Selatan'];

/* ---------- kartu produk ---------- */
const card = (p, n = 0) => {
  const pct = Math.max(6, Math.min(100, p.mbps / 10));
  return `<article class="pcard" data-id="${p.id}" data-tier="${p.tier}" style="--n:${n}" tabindex="0" role="button" aria-label="Pesan ${p.name}">
  <div class="ph"><img src="${IMG[p.img]}" alt="${p.name}">${p.badge ? `<span class="badge">${p.badge}</span>` : ''}<span class="tier">${TIERS[p.tier]} · ${speedText(p.mbps)}</span></div>
  <h4>${p.name}</h4><p>${p.desc}</p>
  <div class="speed" aria-hidden="true"><i style="width:${pct}%"></i></div>
  <div class="meta"><span class="buy">Pasang Sekarang ${PLAY}</span><span class="price">${rupiah(p.price)}/bln</span></div></article>`;
};

/* ---------- transisi halaman ---------- */
const pt = $('.pt');
function ptOut() {
  if (!pt) return;
  pt.classList.remove('in', 'go');
  requestAnimationFrame(() => requestAnimationFrame(() => pt.classList.add('out')));
}
addEventListener('load', ptOut);
addEventListener('pageshow', e => { if (e.persisted) ptOut(); });
setTimeout(ptOut, 2500);

document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || a.target) return;
  const u = new URL(a.href, location.href);
  if (u.origin !== location.origin || !/\.html$|\/$/.test(u.pathname)) return;
  if (u.pathname === location.pathname) {           // link ke bagian di halaman yang sama
    if (u.hash) { e.preventDefault(); $(u.hash)?.scrollIntoView({ behavior: 'smooth' }); $('.site-header')?.classList.remove('open'); }
    return;
  }
  if (matchMedia('(prefers-reduced-motion:reduce)').matches || !pt) return;
  e.preventDefault();
  pt.classList.remove('out'); pt.classList.add('in');
  requestAnimationFrame(() => requestAnimationFrame(() => pt.classList.add('go')));
  setTimeout(() => location.href = a.href, 620);
});

/* ---------- header, progress bar, parallax bumi ---------- */
const header = $('.site-header'), bar = $('.progress'), earth = $('.earth');
let tick = false;
function onScroll() {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  header.classList.toggle('scrolled', y > 40);
  if (bar) bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  if (earth && y < 900 && innerWidth > 960) earth.style.transform = `translateY(${y * .12}px) scale(${1 + y * .00006})`;
  tick = false;
}
addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

const toggle = $('.menu-toggle');
toggle.addEventListener('click', () => toggle.setAttribute('aria-expanded', header.classList.toggle('open')));

/* ---------- animasi muncul saat scroll ---------- */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add('in'); io.unobserve(en.target);
  if (en.target.dataset.count !== undefined) countUp(en.target);
  if (en.target.id === 'live') startLive();
}), { threshold: .15, rootMargin: '0px 0px -40px 0px' });
$$('[data-r],[data-count]').forEach(el => io.observe(el));
$$('[data-stagger]').forEach(p => [...p.children].forEach((c, i) => { c.dataset.r = c.dataset.r || 'up'; c.style.setProperty('--i', i); io.observe(c); }));

function countUp(el) {
  const to = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length, suf = el.dataset.suffix || '', t0 = performance.now(), d = 1600;
  const step = t => {
    const k = Math.min(1, (t - t0) / d), v = to * (1 - Math.pow(1 - k, 3));
    el.textContent = v.toLocaleString('id-ID', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- carousel produk (halaman depan: hanya produk featured) ---------- */
function initCarousel() {
  const root = $('#pcar'); if (!root) return;
  const panel = root.parentElement, track = $('.track', root), vp = $('.viewport', root);
  const dots = $('.dotsrow', panel), prev = $('.prev', panel), next = $('.next', panel);
  const list = PRODUCTS.filter(p => p.featured);
  track.innerHTML = list.map(p => card(p)).join('');
  let i = 0, per = 2;
  const max = () => Math.max(0, list.length - per);
  function render() {
    per = innerWidth < 700 ? 1 : 2; root.style.setProperty('--per', per); i = Math.min(i, max());
    const w = track.children[0].getBoundingClientRect().width, gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.style.transform = `translateX(${-i * (w + gap)}px)`;
    dots.innerHTML = Array.from({ length: max() + 1 }, (_, k) => `<button class="${k === i ? 'on' : ''}" aria-label="Slide ${k + 1}"></button>`).join('');
    $$('button', dots).forEach((b, k) => b.onclick = () => { i = k; render(); });
  }
  prev.onclick = () => { i = i <= 0 ? max() : i - 1; render(); };
  next.onclick = () => { i = i >= max() ? 0 : i + 1; render(); };
  let x0 = null;
  vp.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
  vp.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 45) (dx < 0 ? next : prev).click(); x0 = null; });
  addEventListener('resize', render); render();
}

/* ---------- katalog produk (products.html & get-started.html) ---------- */
function initCatalog() {
  const box = $('[data-catalog]'); if (!box) return;
  const grid = $('.pgrid', box), bar = $('.filters', box), sort = $('.sort', box), info = $('.count-info', box);
  const SORT = { awal: () => 0, murah: (a, b) => a.price - b.price, mahal: (a, b) => b.price - a.price, cepat: (a, b) => b.mbps - a.mbps };
  const tabs = { semua: 'Semua', ...TIERS };
  let tier = new URLSearchParams(location.search).get('jenis');           // contoh: products.html?jenis=pro
  if (!tabs[tier]) tier = 'semua';

  const total = t => t === 'semua' ? PRODUCTS.length : PRODUCTS.filter(p => p.tier === t).length;
  function render() {
    bar.innerHTML = Object.entries(tabs).map(([k, v]) => `<button type="button" data-tier="${k}" class="${k === tier ? 'on' : ''}" aria-pressed="${k === tier}">${v}<b>${total(k)}</b></button>`).join('');
    const list = PRODUCTS.filter(p => tier === 'semua' || p.tier === tier).sort(SORT[sort.value]);
    grid.innerHTML = list.map(card).join('');
    info.textContent = `Menampilkan ${list.length} produk${tier === 'semua' ? '' : ' · ' + tabs[tier]}`;
  }
  bar.addEventListener('click', e => { const b = e.target.closest('button[data-tier]'); if (b) { tier = b.dataset.tier; render(); } });
  sort.addEventListener('change', render);
  render();
}

/* ---------- testimoni ---------- */
function initTesti() {
  const box = $('#tbox'); if (!box) return;
  let i = 0; const dots = $('#tdots');
  function paint() {
    const t = TESTI[i];
    $('#tq').textContent = t.q; $('#tn').textContent = t.n; $('#tr').textContent = t.r; $('#ti').src = IMG[t.i]; $('#ti').alt = 'Foto ' + t.n;
    $('#tc').innerHTML = `<b>${String(i + 1).padStart(2, '0')}</b>/${String(TESTI.length).padStart(2, '0')}`;
    dots.innerHTML = TESTI.map((_, k) => `<button class="${k === i ? 'on' : ''}" aria-label="Testimoni ${k + 1}"></button>`).join('');
    $$('button', dots).forEach((b, k) => b.onclick = () => go(k));
  }
  function go(n) { box.classList.add('swap'); setTimeout(() => { i = (n + TESTI.length) % TESTI.length; paint(); box.classList.remove('swap'); }, 300); }
  $('#tprev').onclick = () => go(i - 1); $('#tnext').onclick = () => go(i + 1);
  $('#tmore').innerHTML = TESTI.slice(1, 4).map(t => `<img src="${IMG[t.i]}" alt="">`).join('');
  let x0 = null;
  box.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
  box.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 45) go(i + (dx < 0 ? 1 : -1)); x0 = null; });
  paint();
}

/* ---------- grafik stabilitas langsung ---------- */
let liveOn = false;
function startLive() {
  if (liveOn) return; liveOn = true;
  const line = $('#lLine'), area = $('#lArea'), W = 600, H = 200, N = 40;
  const d = Array.from({ length: N }, (_, k) => 96 + Math.sin(k / 4) * 1.6 + Math.random() * 1.4);
  const draw = () => {
    const pts = d.map((v, k) => [k / (N - 1) * W, H - ((v - 88) / 14) * H * .9 - 10]);
    const p = pts.map((q, k) => (k ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join('');
    line.setAttribute('d', p); area.setAttribute('d', p + `L${W} ${H}L0 ${H}Z`);
    $('#lNow').textContent = d[N - 1].toFixed(2) + '%'; $('#lPing').textContent = Math.round(11 + Math.random() * 7) + ' ms';
  };
  draw();
  const len = line.getTotalLength();
  line.style.strokeDasharray = len; line.style.strokeDashoffset = len; line.style.transition = 'stroke-dashoffset 1.6s var(--ease)';
  requestAnimationFrame(() => line.style.strokeDashoffset = 0);
  setTimeout(() => {
    line.style.strokeDasharray = 'none';
    setInterval(() => { d.shift(); d.push(Math.min(99.9, Math.max(92, d[N - 2] + (Math.random() - .45) * 1.6))); draw(); }, 1400);
  }, 1700);
}

/* ---------- validasi form ---------- */
const RULES = {
  name: v => !v.trim() ? 'Nama lengkap wajib diisi.' : !/^[A-Za-zÀ-ÿ.'\s]{3,60}$/.test(v.trim()) ? 'Gunakan huruf saja, minimal 3 karakter.' : '',
  email: v => !v.trim() ? 'Gmail wajib diisi.' : !/^[a-z0-9._%+-]+@gmail\.com$/i.test(v.trim()) ? 'Gunakan alamat Gmail yang valid, contoh: nama@gmail.com' : '',
  phone: v => !v.trim() ? 'Nomor telepon wajib diisi.' : !/^(\+62|62|0)8[0-9]{8,12}$/.test(v.replace(/[\s-]/g, '')) ? 'Nomor tidak valid. Contoh: 081234567890' : '',
  province: v => !v ? 'Provinsi wajib dipilih.' : '',
  city: v => !v.trim() ? 'Kota / Kabupaten wajib diisi.' : v.trim().length < 3 ? 'Nama kota terlalu pendek.' : '',
  message: v => !v.trim() ? 'Pesan wajib diisi.' : v.trim().length < 10 ? 'Pesan minimal 10 karakter.' : '',
  agree: (v, el) => !el.checked ? 'Anda harus menyetujui ketentuan pemesanan.' : ''
};
function validate(form) {
  let first = null, bad = 0;
  $$('[data-rule]', form).forEach(el => {
    const f = el.closest('.field'), m = RULES[el.dataset.rule](el.value, el);
    f.classList.toggle('err', !!m); $('.msg', f).textContent = m; el.setAttribute('aria-invalid', !!m);
    if (m) { bad++; first = first || el; }
  });
  $('.alert', form)?.classList.toggle('show', bad > 0);
  first?.focus();
  return bad === 0;
}
function liveClear(form) {
  $$('[data-rule]', form).forEach(el => el.addEventListener('input', () => {
    const f = el.closest('.field');
    if (f.classList.contains('err')) { const m = RULES[el.dataset.rule](el.value, el); f.classList.toggle('err', !!m); $('.msg', f).textContent = m; }
  }));
}

/* ---------- pop-up pesanan ---------- */
const FIELD = (id, label, inner) => `<div class="field"><label for="${id}">${label} <i>*</i></label>${inner}<div class="msg" role="alert"></div></div>`;
let modal, lastFocus;
function buildModal() {
  modal = document.createElement('div');
  modal.className = 'modal'; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-labelledby', 'mTitle');
  modal.innerHTML = `<div class="m-back" data-close></div><div class="m-box"><button class="m-x" data-close aria-label="Tutup">×</button><aside class="m-side"><img id="mImg" alt=""><h3 id="mName"></h3><div class="mp" id="mPrice"></div><h5>Yang Anda dapatkan</h5><ul id="mFeat"></ul><h5>Ketentuan pemesanan</h5><ul><li>Semua data wajib diisi dengan benar.</li><li>Gunakan Gmail dan nomor telepon aktif.</li><li>Tim kami menghubungi maksimal 1×24 jam.</li></ul></aside><div class="m-main" id="mMain"></div></div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
  addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') {                          // fokus tidak keluar dari pop-up
      const f = $$('button,input,select,textarea,a[href]', modal).filter(x => !x.disabled && x.offsetParent), a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
  });
}
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id); if (!p) return;
  if (!modal) buildModal();
  lastFocus = document.activeElement;
  $('#mImg').src = IMG[p.img]; $('#mImg').alt = p.name; $('#mName').textContent = p.name;
  $('#mPrice').textContent = `${TIERS[p.tier]} · ${speedText(p.mbps)} · ${rupiah(p.price)}/bulan`;
  $('#mFeat').innerHTML = p.feat.map(f => `<li>${f}</li>`).join('');
  $('#mMain').innerHTML = `<h2 id="mTitle">Pesan ${p.name}</h2><p class="hint">Isi data di bawah ini. Kolom bertanda <b>*</b> wajib diisi.</p>
  <form novalidate id="oForm"><div class="alert" role="alert">Mohon lengkapi semua data yang wajib diisi sebelum melanjutkan.</div>
  ${FIELD('fName', 'Nama Lengkap', '<input id="fName" name="name" autocomplete="name" placeholder="Contoh: Budi Santoso" data-rule="name">')}
  ${FIELD('fMail', 'Gmail', '<input id="fMail" name="email" type="email" autocomplete="email" placeholder="nama@gmail.com" data-rule="email">')}
  ${FIELD('fTel', 'Nomor Telepon', '<input id="fTel" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="081234567890" data-rule="phone">')}
  <div class="two">${FIELD('fProv', 'Provinsi', `<select id="fProv" name="province" data-rule="province"><option value="">Pilih provinsi</option>${PROV.map(x => `<option>${x}</option>`).join('')}</select>`)}
  ${FIELD('fCity', 'Kota / Kabupaten', '<input id="fCity" name="city" autocomplete="address-level2" placeholder="Contoh: Medan" data-rule="city">')}</div>
  <div class="field"><label class="check"><input type="checkbox" id="fAgree" data-rule="agree"><span>Saya menyetujui ketentuan pemesanan dan data saya benar.</span></label><div class="msg" role="alert"></div></div>
  <button class="pill submit" type="submit">Kirim Pesanan</button></form>`;
  const form = $('#oForm'); liveClear(form);
  form.addEventListener('submit', e => {
    e.preventDefault(); if (!validate(form)) return;
    const code = 'WS-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    $('#mMain').innerHTML = `<div class="ok"><div class="tick"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></div><h2>Pesanan diterima!</h2><p>Terima kasih, <b>${esc(form.name.value.trim())}</b>. Tim WI-San akan menghubungi Anda melalui <b>${esc(form.phone.value.trim())}</b> untuk pemasangan <b>${p.name}</b> di ${esc(form.city.value.trim())}, ${esc(form.province.value)}.</p><code>${code}</code><br><button class="pill p-lime" data-close>Selesai</button></div>`;
  });
  modal.classList.add('open'); document.body.classList.add('lock');
  requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('show')));
  setTimeout(() => $('#fName')?.focus({ preventScroll: true }), 450);
}
function closeModal() {
  modal.classList.remove('show'); document.body.classList.remove('lock');
  setTimeout(() => { modal.classList.remove('open'); lastFocus?.focus(); }, 350);
}

document.addEventListener('click', e => { const c = e.target.closest('.pcard'); if (c) openModal(c.dataset.id); });
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList?.contains('pcard')) { e.preventDefault(); openModal(e.target.dataset.id); }
});

/* ---------- form kontak ---------- */
function initForms() {
  $$('form[data-form]').forEach(f => {
    liveClear(f);
    f.addEventListener('submit', e => {
      e.preventDefault(); if (!validate(f)) return;
      f.reset(); $('.okmsg', f).textContent = 'Pesan terkirim. Terima kasih, kami segera menghubungi Anda.';
    });
  });
}

/* ---------- mulai ---------- */
initCarousel(); initCatalog(); initTesti(); initForms();
