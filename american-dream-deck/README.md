# American Dream — Interactive Sales Deck

A fully interactive, browser-based sales deck for **American Dream**, the largest shopping mall in the Americas. Built as a high-impact commercial tool for retail leasing, sponsorship, and event booking conversations.

---

## Live Demo

Deploy to any static host:
- **Vercel**: `npx vercel`
- **Netlify**: drag-and-drop the folder at netlify.com/drop
- **GitHub Pages**: push to `/docs` folder or root of a `gh-pages` branch

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| HTML | Semantic HTML5 | No build step required, maximum portability |
| CSS | Vanilla CSS with Custom Properties | Zero dependencies, full control, fast |
| JS | Vanilla ES6+ | No framework overhead, Lighthouse-optimized |
| Fonts | Google Fonts: Cormorant Garamond + DM Sans + Bebas Neue | Premium editorial feel without asset hosting |
| Video | YouTube embed (iframe) | No bandwidth cost, existing official asset |
| Icons | Unicode emoji + CSS | Zero requests |

**No npm. No build step. No dependencies.** Open `index.html` in a browser and it works.

---

## Setup Instructions

```bash
# Clone or unzip
cd american-dream-deck

# Option 1: Open directly
open index.html

# Option 2: Local server (recommended for iframe features)
npx serve .
# or
python3 -m http.server 8080
# then visit http://localhost:8080

# Deploy to Vercel
npx vercel --prod

# Deploy to Netlify CLI
npx netlify deploy --dir=. --prod
```

---

## Project Structure

```
american-dream-deck/
├── index.html          # Complete single-page application
├── css/
│   └── main.css        # Full design system (~1200 lines)
├── js/
│   └── main.js         # Interactions, animations, modals (~300 lines)
└── README.md
```

---

## Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Cinematic Intro** | Immediate emotional impact, scale statement |
| 2 | **Why This Property** | Location, demographics, animated data visualization |
| 3 | **Retail** | Leasing formats, tenant ticker, CTA modals |
| 4 | **Luxury** | Premium wing positioning, visual gallery |
| 5 | **Dining & Lifestyle** | F&B depth, filterable category grid |
| 6 | **Entertainment** | Interactive attraction showcase (Big SNOW, Nick Universe, etc.) |
| 7 | **Events & Platform** | Venue specs, past highlights, booking CTAs |
| 8 | **Sponsorship** | Partnership tiers with detailed benefits |
| 9 | **Contact / Partner** | Lead capture form with inquiry routing |

---

## Design Decisions

### Aesthetic Direction
Luxury-cinematic: inspired by the intersection of Apple's restraint, Hermès' precision typography, and the energy of a global entertainment venue. Gold (#C9A84C) as the primary accent against near-black backgrounds creates the premium, high-stakes feel appropriate for a $5B destination.

### Typography System
- **Cormorant Garamond** — Editorial serif for headlines and section titles. Conveys prestige and permanence.
- **DM Sans** — Geometric sans for body copy, labels, and navigation. Clean, contemporary, pairs perfectly with Cormorant.
- **Bebas Neue** — Impact display font for large numerical stats. Pure power, zero subtlety where subtlety isn't needed.

### Navigation
Non-linear by design. The sticky nav lets users jump between any section instantly. Section dots on the right side provide spatial context. This matches the brief's requirement for user-controlled journey.

### Animation Philosophy
- Scroll-triggered reveal animations (IntersectionObserver) — nothing animates until the user scrolls to it
- Counter animations for key statistics (Why section)
- Animated bar charts for demographics
- Parallax on floating stats and luxury gallery
- SVG architectural line animation on the hero — conveys structural scale without video

### Modal System
Each CTA opens a contextual detail modal with relevant information and a clear next step, then routes users to the contact form with the correct inquiry type pre-selected. This keeps users in the experience rather than bouncing to a separate page.

### Performance
- Zero external JS dependencies
- Fonts loaded via Google Fonts with `display=swap`
- CSS animations use `transform` and `opacity` only (GPU-composited)
- IntersectionObserver for all scroll triggers (no scroll event spam)
- Single CSS file with no render-blocking resources
- Total page weight: ~90KB HTML/CSS/JS (excluding fonts)

---

## AI Tools Used

| Tool | Use Case |
|------|----------|
| Claude (Anthropic) | Full code generation: HTML, CSS, JS architecture, design system |
| Claude | Copywriting: section headlines, CTA copy, modal descriptions, all body text |
| Claude | Design direction: aesthetic decisions, typography pairing, color rationale |

The entire project was designed and coded with AI assistance — demonstrating that a single person using AI tools can produce production-grade, commercially-focused interactive experiences at the quality level this brief demands.

---

## Phase 2 Expansion (Architecture Ready)

The codebase is modular and ready for expansion:

- **Events Module**: `js/events.js` — detailed booking flow, calendar integration
- **Sponsorship Module**: `js/sponsorship.js` — tiered deck delivery, media kit download
- **Leasing Paths**: `js/leasing.js` — segmented by category with floor plan viewer
- **Analytics**: Add `data-track` attributes + any analytics SDK
- **CMS Integration**: Replace static copy with JSON data source or headless CMS

Each section is a self-contained HTML block that can be extracted into a standalone page/route without a rewrite.

---

## What I'd Improve With More Time

1. **Real video assets** — Production-quality drone footage of the property as a hero background
2. **3D property map** — Interactive floor plan with zone highlighting (Three.js)
3. **Tenant brand logos** — Actual logo lockup grid with hover states
4. **Form backend** — Connect to HubSpot or a simple Netlify form handler for real lead capture
5. **Animation polish** — More sophisticated entrance sequences using GSAP ScrollTrigger
6. **Photo gallery** — Real property photography in the luxury and dining sections
7. **Availability calendar** — Live event space booking calendar for venue inquiries
8. **A/B testing** — Different CTA copy variants tracked against form submission rates

---

## Contact / Submission

Built for the Liat commercial team evaluation.
Questions: commercial@americandream.com (fictional contact for demo purposes)
