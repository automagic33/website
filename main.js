/* ============================================================
   AUTOMAGIC 33 — Scripts partagés
   ============================================================ */

// === BURGER MENU ===
const burger    = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  // Fermer le menu si on clique en dehors
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
    }
  });
  // Fermer au clic sur un lien du menu mobile
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// === REVEAL AU SCROLL (IntersectionObserver) ===
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));
}

// === COOKIE BANNER ===
(function() {
  if (localStorage.getItem('am33_cookies')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <p>
      AutoMagic 33 utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site.
      Aucune donnée n'est revendue à des tiers. En savoir plus :
      <a href="politique-confidentialite.html">Politique de confidentialité</a>.
    </p>
    <div class="cookie-actions">
      <button id="cookie-refuse">Refuser</button>
      <button id="cookie-accept">Accepter</button>
    </div>`;
  document.body.appendChild(banner);

  setTimeout(() => banner.classList.add('visible'), 300);

  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem('am33_cookies', 'accepted');
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => banner.remove(), 400);
  });
  document.getElementById('cookie-refuse').addEventListener('click', () => {
    localStorage.setItem('am33_cookies', 'refused');
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => banner.remove(), 400);
  });
})();


