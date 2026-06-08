/* ===================================
   AMERICAN DREAM — SALES DECK JS
   =================================== */

'use strict';

// ========== NAV ==========

const nav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  updateActiveNav();
});

function updateActiveNav() {
  const sections = document.querySelectorAll('.section');
  const scrollMid = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollMid >= top && scrollMid < bottom) {
      const id = section.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}

// Mobile nav
const hamburger = document.getElementById('nav-hamburger');
const mobileOverlay = document.getElementById('mobile-nav-overlay');

hamburger.addEventListener('click', () => {
  mobileOverlay.classList.toggle('open');
});

window.closeMobileNav = function() {
  mobileOverlay.classList.remove('open');
};

// ========== SCROLL TO SECTION ==========
window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

// ========== REVEAL ON SCROLL ==========
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger counters when why section is visible
      if (entry.target.classList.contains('why-stats-side')) {
        animateCounters();
      }
      // Trigger demo bars
      if (entry.target.classList.contains('demo-section')) {
        animateDemoBars();
      }
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-stagger, .why-stats-side, .demo-section').forEach(el => {
  revealObserver.observe(el);
});

// Also reveal the intro section immediately
setTimeout(() => {
  document.querySelectorAll('.section-intro .reveal-up, .section-intro .reveal-fade').forEach(el => {
    el.classList.add('visible');
  });
}, 100);

// ========== ANIMATED BACKGROUND ==========
function createAnimatedBg() {
  const bg = document.getElementById('animated-bg');
  if (!bg) return;

  // Create abstract architectural lines SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 1440 900');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.position = 'absolute';
  svg.style.inset = '0';
  svg.style.opacity = '0.4';

  const defs = `
    <defs>
      <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c9a84c" stop-opacity="0"/>
        <stop offset="50%" stop-color="#c9a84c" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#c9a84c" stop-opacity="0"/>
        <stop offset="50%" stop-color="#c9a84c" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
      </linearGradient>
    </defs>
  `;

  // Architectural structure lines representing the mall's scale
  const paths = [
    // Central structure
    `<line x1="720" y1="0" x2="720" y2="900" stroke="url(#lineGrad1)" stroke-width="0.5" opacity="0.3"/>`,
    `<line x1="0" y1="450" x2="1440" y2="450" stroke="url(#lineGrad1)" stroke-width="0.5" opacity="0.3"/>`,
    // Perspective lines (converging to center)
    `<line x1="0" y1="0" x2="720" y2="450" stroke="url(#lineGrad1)" stroke-width="0.5" opacity="0.2"/>`,
    `<line x1="1440" y1="0" x2="720" y2="450" stroke="url(#lineGrad1)" stroke-width="0.5" opacity="0.2"/>`,
    `<line x1="0" y1="900" x2="720" y2="450" stroke="url(#lineGrad1)" stroke-width="0.5" opacity="0.2"/>`,
    `<line x1="1440" y1="900" x2="720" y2="450" stroke="url(#lineGrad1)" stroke-width="0.5" opacity="0.2"/>`,
    // Secondary structure
    `<line x1="360" y1="0" x2="360" y2="900" stroke="url(#lineGrad2)" stroke-width="0.3" opacity="0.15"/>`,
    `<line x1="1080" y1="0" x2="1080" y2="900" stroke="url(#lineGrad2)" stroke-width="0.3" opacity="0.15"/>`,
    `<line x1="0" y1="225" x2="1440" y2="225" stroke="url(#lineGrad2)" stroke-width="0.3" opacity="0.15"/>`,
    `<line x1="0" y1="675" x2="1440" y2="675" stroke="url(#lineGrad2)" stroke-width="0.3" opacity="0.15"/>`,
    // Decorative arcs
    `<ellipse cx="720" cy="450" rx="200" ry="200" fill="none" stroke="#c9a84c" stroke-width="0.5" opacity="0.08"/>`,
    `<ellipse cx="720" cy="450" rx="400" ry="400" fill="none" stroke="#c9a84c" stroke-width="0.5" opacity="0.05"/>`,
    `<ellipse cx="720" cy="450" rx="600" ry="600" fill="none" stroke="#c9a84c" stroke-width="0.3" opacity="0.03"/>`,
    // Corner detail marks
    `<rect x="10" y="10" width="60" height="60" fill="none" stroke="#c9a84c" stroke-width="0.5" opacity="0.15"/>`,
    `<rect x="1370" y="10" width="60" height="60" fill="none" stroke="#c9a84c" stroke-width="0.5" opacity="0.15"/>`,
    `<rect x="10" y="830" width="60" height="60" fill="none" stroke="#c9a84c" stroke-width="0.5" opacity="0.15"/>`,
    `<rect x="1370" y="830" width="60" height="60" fill="none" stroke="#c9a84c" stroke-width="0.5" opacity="0.15"/>`,
    // Center point marker
    `<circle cx="720" cy="450" r="4" fill="#c9a84c" opacity="0.3"/>`,
    `<circle cx="720" cy="450" r="12" fill="none" stroke="#c9a84c" stroke-width="0.5" opacity="0.2"/>`,
  ];

  svg.innerHTML = defs + paths.join('');

  // Animated rotation on center circle
  const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
  animate.setAttribute('attributeName', 'transform');
  animate.setAttribute('type', 'rotate');
  animate.setAttribute('from', '0 720 450');
  animate.setAttribute('to', '360 720 450');
  animate.setAttribute('dur', '60s');
  animate.setAttribute('repeatCount', 'indefinite');

  bg.appendChild(svg);
}

createAnimatedBg();

// ========== COUNTER ANIMATION ==========
let countersAnimated = false;

function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;

  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
}

// ========== DEMO BARS ==========
let barsAnimated = false;

function animateDemoBars() {
  if (barsAnimated) return;
  barsAnimated = true;

  document.querySelectorAll('.demo-bar').forEach((bar, i) => {
    const width = bar.dataset.width;
    setTimeout(() => {
      bar.style.width = width + '%';
    }, i * 200);
  });
}

// ========== ENTERTAINMENT NAV ==========
const entNavBtns = document.querySelectorAll('.ent-nav-btn');
const entItems = document.querySelectorAll('.ent-item');

entNavBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    entNavBtns.forEach(b => b.classList.remove('active'));
    entItems.forEach(item => item.classList.remove('active'));

    btn.classList.add('active');
    const targetItem = document.querySelector(`.ent-item[data-ent="${target}"]`);
    if (targetItem) targetItem.classList.add('active');
  });
});

// ========== DINING CATEGORY FILTER ==========
const diningCats = document.querySelectorAll('.dining-cat');
const diningCards = document.querySelectorAll('.dining-card');

diningCats.forEach(cat => {
  cat.addEventListener('click', () => {
    diningCats.forEach(c => c.classList.remove('dc-active'));
    cat.classList.add('dc-active');

    const filter = cat.dataset.cat;
    diningCards.forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ========== VIDEO MODAL ==========
window.openVideoModal = function() {
    window.open(
        'https://www.youtube.com/watch?v=-3ZcFguYn3U',
        '_blank'
    );
};

window.closeVideoModal = function() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('yt-embed');
  iframe.src = '';
  modal.classList.remove('open');
  document.body.style.overflow = '';
};

// ========== LEASE / EVENT / SPONSOR MODALS ==========
const ctaModal = document.getElementById('cta-modal');
const ctaContent = document.getElementById('cta-modal-content');

const modalData = {
  flagship: {
    title: 'Flagship Leasing',
    desc: 'Join America\'s premier mixed-use destination. Flagship spaces at American Dream offer 5,000–25,000 sq ft of Class-A retail in the highest-traffic corridors of the property. Your brand, at scale, in the center of it all.',
    points: [
      'Prime anchor-adjacent positioning',
      'Full-floor formats available',
      'White-box or fitted delivery options',
      'Category exclusivity negotiable',
      'Co-marketing and PR support included',
    ],
    cta: 'Request Leasing Information',
    secondary: 'Schedule a Property Tour',
  },
  boutique: {
    title: 'Boutique Leasing',
    desc: 'Curated boutique positions for contemporary and lifestyle brands. 500–3,000 sq ft spaces in category-clustered corridors designed to maximize cross-shopping and brand discovery.',
    points: [
      '500–3,000 sq ft formats',
      'Category-clustered placement strategy',
      'Flexible lease terms from 2 years',
      'Tenant co-marketing programs',
      'Visual merchandising support available',
    ],
    cta: 'Request Boutique Leasing Info',
    secondary: 'View Available Spaces',
  },
  popup: {
    title: 'Pop-Up & Temporary Retail',
    desc: 'Test, launch, and activate in one of the highest-footfall retail environments in the Americas. Minimum 30-day formats available across multiple high-traffic zones.',
    points: [
      '30-day minimum commitment',
      'Flexible space from 200–2,000 sq ft',
      'Fully turnkey setups available',
      'Ideal for product launches and market testing',
      'Access to 40M+ annual visitor base',
    ],
    cta: 'Inquire About Pop-Up Space',
    secondary: 'Check Availability',
  },
  luxury: {
    title: 'Luxury Wing Leasing',
    desc: 'A destination within a destination. The luxury wing at American Dream is the tri-state area\'s most coveted new address for luxury and aspirational brands. Architectural distinction, VIP programming, and a clientele that arrives with intent.',
    points: [
      'Dedicated luxury corridor with premium finishes',
      'Adjacent to Saks Fifth Avenue anchor',
      'Category exclusivity available',
      'VIP private event access',
      'Concierge service infrastructure',
      'Premium co-marketing positioning',
    ],
    cta: 'Request Luxury Leasing Deck',
    secondary: 'Schedule Exclusive Tour',
  },
  dining: {
    title: 'F&B Leasing Opportunities',
    desc: 'From celebrity-chef restaurants to food hall concepts, American Dream\'s dining program is designed to be a destination in its own right. Immediate access to 40M+ annual visitors who stay an average of 4–6 hours.',
    points: [
      'Restaurant pad sites from 1,500–8,000 sq ft',
      'Food hall stalls and kiosk positions available',
      'Ghost kitchen infrastructure',
      'Outdoor seating with activation potential',
      'F&B-specific lease structures',
    ],
    cta: 'Inquire About F&B Space',
    secondary: 'Request F&B Deck',
  },
  concerts: {
    title: 'Concert & Live Music Booking',
    desc: 'American Dream\'s indoor venues offer a range of configurations for live music, from intimate performances to large-scale production shows. Full production infrastructure included.',
    points: [
      'Capacity configurations: 500–3,000',
      'Full sound and lighting rig',
      'Backstage hospitality suites',
      'Integrated ticketing platform',
      'On-site parking for 13,000+ vehicles',
      'Metro-accessible from NYC',
    ],
    cta: 'Check Concert Availability',
    secondary: 'Download Venue Specs',
  },
  activation: {
    title: 'Brand Activation Booking',
    desc: 'Transform any part of American Dream into your brand\'s most impactful moment. Dedicated activation zones and flexible spaces across the property. 40M annual visitors means unrivaled earned media potential.',
    points: [
      '8 dedicated activation zones',
      'Foot traffic from 100,000+ daily visitors',
      'Full AV and production support',
      'Social media amplification packages',
      'Adjacent retail & dwell-time advantage',
      'Custom timelines from 1–90 days',
    ],
    cta: 'Submit Activation Inquiry',
    secondary: 'Download Activation Kit',
  },
  corporate: {
    title: 'Corporate Event Booking',
    desc: 'Convention-grade infrastructure, premium catering from our 150+ dining options, and a location 12 minutes from Manhattan. Your next corporate event deserves a better backdrop.',
    points: [
      'Convention space up to 50,000 sq ft',
      'Premium AV and broadcast infrastructure',
      'On-site catering and full-service teams',
      'Dedicated event coordination staff',
      'Private venue buyouts available',
      'Group transportation coordination',
    ],
    cta: 'Request Corporate Events Info',
    secondary: 'View Venue Configurations',
  },
  launch: {
    title: 'Product Launch Events',
    desc: 'Make your launch unmissable. American Dream\'s footfall, media connections, and entertainment environment create the perfect context to cut through. Your launch, amplified.',
    points: [
      '40M+ annual visitor reach',
      'Full media production capabilities',
      'Press and influencer access programs',
      'High-traffic showcase positioning',
      'Retail pop-up integration available',
      'Social-first activation design support',
    ],
    cta: 'Inquire About Launch Space',
    secondary: 'View Past Launch Highlights',
  },
  presenting: {
    title: 'Presenting Partner — Title Sponsorship',
    desc: 'The most prominent sponsorship position at American Dream. Naming rights, destination-wide visibility, and category exclusivity in the Americas\' largest retail destination.',
    points: [
      'Property zone or venue naming rights',
      'Destination-wide digital & physical placement',
      'Category exclusivity guaranteed',
      'Year-round programming integration',
      'Custom branded experience space',
      'Annual media and PR amplification',
      'Senior relationship management team',
    ],
    cta: 'Request Presenting Partner Deck',
    secondary: 'Schedule Executive Meeting',
  },
  premiere: {
    title: 'Premiere Partner — Entertainment Sponsorship',
    desc: 'Anchor sponsorship of one of American Dream\'s signature attractions or event series. Co-branded programming and high-traffic zone placement with guaranteed category exclusivity.',
    points: [
      'Attraction or event-series naming rights',
      'High-traffic zone placement',
      'Digital and experiential rights package',
      'Quarterly programming integration',
      'Custom activation space included',
    ],
    cta: 'Request Premiere Partner Info',
    secondary: 'View Available Categories',
  },
  activation_sponsor: {
    title: 'Activation Partner',
    desc: 'Flexible campaign and activation partnerships that let your brand show up exactly where your audience is. From seasonal campaigns to one-time cultural moments.',
    points: [
      'Pop-up activation space (flexible sizes)',
      'Social amplification package',
      'On-property media placements',
      'Custom durations: seasonal to annual',
      'Co-marketing with American Dream channels',
    ],
    cta: 'Start Activation Conversation',
    secondary: 'View Activation Examples',
  },
};

function renderModalContent(key) {
  const d = modalData[key];
  if (!d) return;

  const pointsHTML = d.points.map(p => `<li>${p}</li>`).join('');

  ctaContent.innerHTML = `
    <h2>${d.title}</h2>
    <p>${d.desc}</p>
    <ul class="modal-detail-list">${pointsHTML}</ul>
    <div>
      <button class="modal-cta-btn" onclick="handleModalCTA('${key}')">${d.cta}</button>
      <button class="modal-secondary-btn" onclick="closeCTAModal()">${d.secondary}</button>
    </div>
  `;
}

window.openLeaseModal = function(type) {
  renderModalContent(type);
  ctaModal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.openEventModal = function(type) {
  renderModalContent(type);
  ctaModal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.openSponsorModal = function(type) {
  const key = type === 'activation' ? 'activation_sponsor' : type;
  renderModalContent(key);
  ctaModal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeCTAModal = function() {
  ctaModal.classList.remove('open');
  document.body.style.overflow = '';
};

window.handleModalCTA = function(type) {
  closeCTAModal();
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  // Pre-fill the select
  setTimeout(() => {
    const select = document.getElementById('cf-select');
    if (['flagship', 'boutique', 'popup', 'luxury', 'dining'].includes(type)) {
      select.value = 'leasing';
      document.getElementById('cf-title').textContent = 'Retail Leasing Inquiry';
    } else if (['presenting', 'premiere', 'activation_sponsor'].includes(type)) {
      select.value = 'sponsorship';
      document.getElementById('cf-title').textContent = 'Sponsorship Inquiry';
    } else {
      select.value = 'events';
      document.getElementById('cf-title').textContent = 'Event Booking Inquiry';
    }
  }, 600);
};

// Close modals on overlay click
ctaModal.addEventListener('click', (e) => {
  if (e.target === ctaModal) closeCTAModal();
});

// ========== CONTACT CARDS ==========
window.openContactForm = function(type) {
  const form = document.getElementById('contact-form-wrap');
  const select = document.getElementById('cf-select');
  const title = document.getElementById('cf-title');

  select.value = type;
  if (type === 'leasing') title.textContent = 'Retail Leasing Inquiry';
  else if (type === 'sponsorship') title.textContent = 'Sponsorship Inquiry';
  else if (type === 'events') title.textContent = 'Event Booking Inquiry';

  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => {
    form.querySelector('input').focus();
  }, 500);
};

// ========== FORM SUBMIT ==========
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const toast = document.getElementById('form-success-toast');
  toast.classList.add('show');
  e.target.reset();
  setTimeout(() => toast.classList.remove('show'), 4000);
};

// ========== KEYBOARD NAV ==========
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVideoModal();
    closeCTAModal();
    closeMobileNav();
  }
});

// ========== SMOOTH ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== PARALLAX FLOATING STATS ==========
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const floatStats = document.querySelectorAll('.floating-stat');
  floatStats.forEach((stat, i) => {
    const speed = 0.04 + i * 0.02;
    stat.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ========== SECTION PROGRESS INDICATOR ==========
// Add subtle progress dots for current section
function initSectionIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'section-indicator';
  indicator.style.cssText = `
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;

  const sections = ['intro', 'why', 'retail', 'luxury', 'dining', 'entertainment', 'events', 'sponsorship', 'contact'];
  const dots = sections.map(id => {
    const dot = document.createElement('div');
    dot.style.cssText = `
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      cursor: pointer;
      transition: all 0.3s;
    `;
    dot.title = id;
    dot.addEventListener('click', () => scrollToSection(id));
    indicator.appendChild(dot);
    return dot;
  });

  document.body.appendChild(indicator);

  // Update active dot
  const dotObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = sections.indexOf(entry.target.id);
        dots.forEach((dot, i) => {
          dot.style.background = i === idx ? 'rgba(201,168,76,0.8)' : 'rgba(255,255,255,0.2)';
          dot.style.transform = i === idx ? 'scale(1.5)' : 'scale(1)';
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) dotObserver.observe(el);
  });

  // Hide on small screens
  if (window.innerWidth < 768) indicator.style.display = 'none';
}

initSectionIndicator();

// ========== LUXURY GALLERY PARALLAX ==========
window.addEventListener('scroll', () => {
  const luxSection = document.getElementById('luxury');
  if (!luxSection) return;
  const rect = luxSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    const lp = document.querySelector('.lp-1');
    if (lp) {
      lp.style.transform = `scale(1.05) translateY(${(0.5 - progress) * 30}px)`;
      lp.style.transition = 'transform 0.1s linear';
    }
  }
});

// ========== CONSOLE EASTER EGG ==========
console.log('%cAMERICAN DREAM', 'font-size: 24px; color: #c9a84c; font-family: serif; font-weight: bold; padding: 10px 20px;');
console.log('%cNot a mall. A universe.', 'font-size: 14px; color: #888; padding: 0 20px;');
console.log('%cBuilt for the commercial team. Inquiries: commercial@americandream.com', 'font-size: 11px; color: #555; padding: 0 20px 10px;');
