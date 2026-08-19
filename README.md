# arijesama.dev — Angular Portfolio

Exact visual and behavioral reproduction of the original single-page portfolio, migrated to **Angular 19 (standalone components)**.

## Preserved technologies

- **Three.js r128** — full "Digital Core" hero scene (extruded logo, rings, orbiters, particles, mouse parallax)
- **GSAP 3.12.5 + ScrollTrigger** — every reveal, parallax, counter, timeline fill, hover 3D tilt, magnetic buttons, loader
- **Lucide icons**
- **All CSS** (variables, media queries, animations) copied 1:1
- **Mailto contact form** (no backend added)

## Architecture

```
src/app/
├── core/services/     ThreeScene, ScrollAnimations, Cursor, Loader
├── layout/            Loader, Navbar (+ mobile menu), Footer
├── sections/          Hero, About, Stack, Featured, Projects, Experience,
│                      Stats, Showroom, Why, Services, Testimonial, CTA, Contact
├── data/              Typed arrays (STACK, PROJECTS, …)
└── shared/models/     TypeScript interfaces
```

## Run

```bash
npm install
npm start
# → http://localhost:4200
```

## Build

```bash
npm run build
```

## Fidelity notes

- All GSAP durations, easings, starts/ends, scrubs, staggers are identical to the original.
- Three.js materials, lights, geometry and animation loop are ported without numeric changes.
- Responsive breakpoints (1024 / 900 / 600) unchanged.
- `NgZone.runOutsideAngular` keeps the rAF loop off Angular change detection.
- `ngOnDestroy` disposes Three.js resources and kills ScrollTriggers.
