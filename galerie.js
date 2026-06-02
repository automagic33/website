/* ============================================================
   AUTOMAGIC 33 — Galerie : Sliders & Vidéos
   ============================================================ */

// === FILTRES ONGLETS ===
document.querySelectorAll('.gal-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gal-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('[data-cat]').forEach(el => {
      el.style.display = (filter === 'all' || el.dataset.cat === filter) ? '' : 'none';
    });
  });
});

// === VIDÉO AU SURVOL (desktop uniquement) ===
document.querySelectorAll('.gal-card').forEach(card => {
  const video = card.querySelector('video');
  if (!video) return;

  card.addEventListener('mouseenter', () => {
    video.play().catch(() => {});
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

// === SLIDER AVANT / APRÈS ===
function initSlider(id) {
  const card    = document.getElementById(id);
  if (!card) return;

  const after   = document.getElementById(id + '-after');
  const handle  = document.getElementById(id + '-handle');
  let dragging  = false;

  function setPos(pct) {
    pct = Math.max(2, Math.min(98, pct));
    after.style.clipPath  = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left     = pct + '%';
  }

  setPos(50); // Position initiale : 50/50

  function getPercent(e) {
    const rect    = card.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    return Math.round((clientX - rect.left) / rect.width * 100);
  }

  // Mouse
  card.addEventListener('mousedown',  e => { dragging = true; setPos(getPercent(e)); });
  window.addEventListener('mousemove', e => { if (dragging) setPos(getPercent(e)); });
  window.addEventListener('mouseup',   () => { dragging = false; });

  // Touch
  card.addEventListener('touchstart', e => { dragging = true; setPos(getPercent(e)); }, { passive: true });
  window.addEventListener('touchmove', e => { if (dragging) setPos(getPercent(e)); }, { passive: true });
  window.addEventListener('touchend',  () => { dragging = false; });
}

initSlider('ba1');
initSlider('ba2');
