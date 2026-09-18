/* ========== ARCONS — Header + Footer injectés ========== */
(function () {
  const currentPage = document.body.dataset.page || '';
  const currentGroup = document.body.dataset.group || '';

  /* ---------- HEADER ---------- */
  const headerHTML = `
  <div class="top-bar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <span class="hidden sm:inline">République du Congo — Brazzaville</span>
        <a href="tel:+242000000000" class="flex items-center gap-1">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          +242 00 000 00 00
        </a>
        <a href="mailto:info@arcons.cg" class="hidden sm:flex items-center gap-1">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          info@arcons.cg
        </a>
      </div>
      <div class="flex items-center gap-3">
        <a href="#" aria-label="Facebook"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
        <a href="#" aria-label="LinkedIn"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
        <a href="#" aria-label="YouTube"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
      </div>
    </div>
  </div>

  <nav class="main-nav" id="mainNav">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="../index.html" class="flex items-center gap-2 shrink-0">
          <img src="../logoArcons.jpg" alt="Logo ARCONS" class="h-12 w-12 rounded-full object-cover border-2 border-yellow-400">
          <span class="text-2xl font-bold text-gray-800">ARCONS</span>
        </a>

        <div class="hidden lg:flex items-center">
          <a href="../index.html" class="nav-link">ACCUEIL</a>

          <div class="dropdown">
            <button class="nav-link ${currentGroup === 'apropos' ? 'active' : ''}" type="button">
              À PROPOS <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="dropdown-menu">
              <a href="apropos.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Qui sommes-nous ?</a>
              <a href="mot-du-dg.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Mot du DG</a>
              <a href="mission.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Notre mission</a>
              <a href="equipe.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Notre équipe</a>
              <a href="valeurs.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Nos valeurs</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="nav-link ${currentGroup === 'services' ? 'active' : ''}" type="button">
              SERVICES <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="dropdown-menu">
              <a href="audit-archives.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Audit & traitement des archives</a>
              <a href="numerisation-ged.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Numérisation & GED</a>
              <a href="courriers.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Courriers entrants & sortants</a>
              <a href="kweyena.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>KWÉYÉNA</a>
              <a href="verdesca.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>VERDESCA</a>
              <a href="conteneurs.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Conteneurs d'archives</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="nav-link ${currentGroup === 'projets' ? 'active' : ''}" type="button">
              PROJETS <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="dropdown-menu">
              <a href="prestations.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Nos prestations</a>
              <a href="realisations.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Réalisations</a>
              <a href="etudes-de-cas.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Études de cas</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="nav-link ${currentGroup === 'medias' ? 'active' : ''}" type="button">
              MÉDIAS <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="dropdown-menu">
              <a href="actualites.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Actualités</a>
              <a href="videographie.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Vidéographie</a>
              <a href="publications.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Publications</a>
            </div>
          </div>

          <a href="contact.html" class="nav-link ${currentGroup === 'contact' ? 'active' : ''}">CONTACT</a>
        </div>

        <div class="flex items-center gap-2">
          <button class="lg:hidden text-gray-600 p-2" id="menuBtn" aria-label="Menu">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div id="mobileMenu" class="mobile-menu lg:hidden">
      <a href="../index.html">Accueil</a>
      <button class="mobile-dropdown-btn flex items-center justify-between w-full" data-target="mob-apropos">
        À propos <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="mobile-submenu" id="mob-apropos">
        <a href="apropos.html">Qui sommes-nous ?</a>
        <a href="mot-du-dg.html">Mot du DG</a>
        <a href="mission.html">Notre mission</a>
        <a href="equipe.html">Notre équipe</a>
        <a href="valeurs.html">Nos valeurs</a>
      </div>
      <button class="mobile-dropdown-btn flex items-center justify-between w-full" data-target="mob-services">
        Services <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="mobile-submenu" id="mob-services">
        <a href="audit-archives.html">Audit & traitement des archives</a>
        <a href="numerisation-ged.html">Numérisation & GED</a>
        <a href="courriers.html">Courriers entrants & sortants</a>
        <a href="kweyena.html">KWÉYÉNA</a>
        <a href="verdesca.html">VERDESCA</a>
        <a href="conteneurs.html">Conteneurs d'archives</a>
      </div>
      <button class="mobile-dropdown-btn flex items-center justify-between w-full" data-target="mob-projets">
        Projets <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="mobile-submenu" id="mob-projets">
        <a href="prestations.html">Nos prestations</a>
        <a href="realisations.html">Réalisations</a>
        <a href="etudes-de-cas.html">Études de cas</a>
      </div>
      <button class="mobile-dropdown-btn flex items-center justify-between w-full" data-target="mob-medias">
        Médias <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="mobile-submenu" id="mob-medias">
        <a href="actualites.html">Actualités</a>
        <a href="videographie.html">Vidéographie</a>
        <a href="publications.html">Publications</a>
      </div>
      <a href="contact.html">Contact</a>
    </div>
  </nav>`;

  /* ---------- FOOTER ---------- */
  const footerHTML = `
  <section class="newsletter-section py-20">
    <div class="max-w-2xl mx-auto px-4 text-center relative z-10">
      <h3 class="text-3xl md:text-4xl font-bold text-white mb-3">Newsletter</h3>
      <p class="text-white/70 text-base md:text-lg mb-8">Recevez nos actualités, projets et opportunités.</p>
      <form class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onsubmit="event.preventDefault(); alert('Merci pour votre abonnement !');">
        <input type="email" placeholder="Votre adresse email" class="flex-1 px-5 py-3 rounded-md bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-400" required>
        <button type="submit" class="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-8 py-3 rounded-md transition-colors whitespace-nowrap">S'ABONNER</button>
      </form>
    </div>
  </section>

  <footer style="background: rgb(11, 31, 58);" class="text-white">
    <div class="pt-14 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          <div class="lg:col-span-4 space-y-5">
            <div class="inline-block bg-white rounded-md p-3">
              <img src="../logoArcons.jpg" alt="ARCONS Logo" class="h-14 w-auto object-contain">
            </div>
            <p class="text-white/60 text-sm leading-relaxed max-w-sm">ARCONS — Experts en gestion d'archives et de courriers. Une structure à taille maîtrisée, au service de la qualité, de la proximité et de la modernisation documentaire.</p>
            <div class="flex gap-3 pt-2 flex-wrap">
              <a href="#" class="w-10 h-10 rounded-md flex items-center justify-center transition-all border border-white/10 hover:border-yellow-400" style="background: rgba(255,255,255,0.05);" aria-label="Facebook">
                <svg class="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-md flex items-center justify-center transition-all border border-white/10 hover:border-yellow-400" style="background: rgba(255,255,255,0.05);" aria-label="LinkedIn">
                <svg class="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-md flex items-center justify-center transition-all border border-white/10 hover:border-yellow-400" style="background: rgba(255,255,255,0.05);" aria-label="YouTube">
                <svg class="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          <div class="lg:col-span-2">
            <h4 class="text-sm font-bold uppercase tracking-wider mb-6" style="color: rgb(255, 195, 0);">À Propos</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="apropos.html" class="text-white/50 hover:text-white transition-colors">Qui sommes-nous ?</a></li>
              <li><a href="mot-du-dg.html" class="text-white/50 hover:text-white transition-colors">Mot du DG</a></li>
              <li><a href="mission.html" class="text-white/50 hover:text-white transition-colors">Notre mission</a></li>
              <li><a href="equipe.html" class="text-white/50 hover:text-white transition-colors">Notre équipe</a></li>
              <li><a href="valeurs.html" class="text-white/50 hover:text-white transition-colors">Nos valeurs</a></li>
            </ul>
          </div>
          <div class="lg:col-span-3">
            <h4 class="text-sm font-bold uppercase tracking-wider mb-6" style="color: rgb(255, 195, 0);">Services</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="audit-archives.html" class="text-white/50 hover:text-white transition-colors">Audit & traitement des archives</a></li>
              <li><a href="numerisation-ged.html" class="text-white/50 hover:text-white transition-colors">Numérisation & GED</a></li>
              <li><a href="courriers.html" class="text-white/50 hover:text-white transition-colors">Courriers entrants & sortants</a></li>
              <li><a href="kweyena.html" class="text-white/50 hover:text-white transition-colors">KWÉYÉNA</a></li>
              <li><a href="verdesca.html" class="text-white/50 hover:text-white transition-colors">VERDESCA</a></li>
            </ul>
          </div>
          <div class="lg:col-span-3">
            <h4 class="text-sm font-bold uppercase tracking-wider mb-6" style="color: rgb(255, 195, 0);">Contact</h4>
            <ul class="space-y-4 text-sm text-white/50">
              <li>République du Congo — Brazzaville</li>
              <li>+242 00 000 00 00</li>
              <li>info@arcons.cg</li>
              <li>Lun - Ven : 8h00 - 17h00</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-white/40 text-sm">© 2026 ARCONS — Tous droits réservés. | www.archivescongo.vercel.app</p>
          <div class="flex gap-6 text-sm text-white/40">
            <a href="#" class="hover:text-white transition">Mentions légales</a>
            <a href="#" class="hover:text-white transition">Politique de confidentialité</a>
            <a href="contact.html" class="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </div>
    <div class="relative pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" class="w-full block" style="height: 60px;">
        <path d="M0,60 L0,35 C200,50 400,20 720,30 C1040,40 1240,15 1440,25 L1440,60 Z" fill="#0B1F3A"></path>
        <path d="M0,38 C200,53 400,22 720,33 C1040,43 1240,18 1440,28" fill="none" stroke="#39A96C" stroke-width="2.5"></path>
      </svg>
    </div>
  </footer>

  <div id="videoModal" class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/80 p-4">
    <div class="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
      <button id="closeModal" class="absolute top-4 right-4 bg-white/10 text-white hover:bg-white/20 rounded-full p-2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div id="videoContainer" class="aspect-video w-full"></div>
    </div>
  </div>`;

  /* ---------- INJECTION ---------- */
  const headerSlot = document.getElementById('arcons-header');
  const footerSlot = document.getElementById('arcons-footer');
  if (headerSlot) headerSlot.innerHTML = headerHTML;
  if (footerSlot) footerSlot.innerHTML = footerHTML;

  /* ---------- COMPORTEMENTS ---------- */
  const mainNav = document.getElementById('mainNav');
  if (mainNav) window.addEventListener('scroll', () => mainNav.classList.toggle('scrolled', window.scrollY > 20));

  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) menuBtn.addEventListener('click', () => document.getElementById('mobileMenu').classList.toggle('open'));

  document.querySelectorAll('.mobile-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = document.getElementById(btn.dataset.target);
      if (t) t.classList.toggle('open');
    });
  });

  /* Modale vidéo */
  window.openVideo = function (videoId) {
    const m = document.getElementById('videoModal');
    const c = document.getElementById('videoContainer');
    if (!m || !c) return;
    c.innerHTML = `<iframe class="w-full h-full" src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    m.classList.remove('hidden');
    m.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };
  document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('#closeModal');
    const modal = e.target.closest('#videoModal');
    if (closeBtn) {
      const m = document.getElementById('videoModal');
      document.getElementById('videoContainer').innerHTML = '';
      m.classList.add('hidden');
      m.classList.remove('flex');
      document.body.style.overflow = '';
    } else if (modal && e.target === modal) {
      document.getElementById('videoContainer').innerHTML = '';
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
    const vc = e.target.closest('.video-card');
    if (vc && vc.dataset.video) window.openVideo(vc.dataset.video);
  });
})();