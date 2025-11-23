// Simple UI scripts: nav toggle, smooth scroll, gallery lightbox, contact form demo

document.addEventListener('DOMContentLoaded', () => {
  // HAMBURGER MENU TOGGLE
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  
  hamburger?.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when clicking on a nav link
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // NAV TOGGLE
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navToggle.classList.toggle('active');
    siteNav.classList.toggle('active');
    // toggle mobile menu display
    if(siteNav.classList.contains('active')) {
      siteNav.style.display = 'block';
    } else {
      siteNav.style.display = '';
    }
  });

  // SMOOTH SCROLL for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if(!href || href === '#') return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
        // close nav on mobile
        if(window.innerWidth <= 760 && siteNav.classList.contains('active')) {
          navToggle.click();
        }
      }
    });
  });

  // GALLERY LIGHTBOX
  const gallery = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  gallery?.addEventListener('click', (e) => {
    const target = e.target.closest('.gallery-item');
    if(!target) return;
    const img = target.querySelector('img');
    if(img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || '';
      lightboxCaption.textContent = target.querySelector('figcaption')?.textContent || '';
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden','false');
    }
  });

  lightboxClose?.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden','true');
  });

  lightbox?.addEventListener('click', (e) => {
    if(e.target === lightbox) {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden','true');
    }
  });

  // CONTACT FORM (demo only: no backend)
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value || 'Friend';
    // Here you would POST to your backend or send to email service
    alert(`Thanks ${name}! Your message has been received. We will respond shortly.`);
    form.reset();
  });

  // Copyright year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
