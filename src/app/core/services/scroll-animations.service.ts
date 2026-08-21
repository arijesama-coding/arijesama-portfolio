import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeSceneService } from './three-scene.service';

gsap.registerPlugin(ScrollTrigger);

@Injectable({ providedIn: 'root' })
export class ScrollAnimationsService implements OnDestroy {
  private prefersReducedMotion = false;
  private isMobile = false;
  private isTouch = false;
  private magneticCleanup: (() => void)[] = [];
  private revealObserver?: IntersectionObserver;

  constructor(
    private ngZone: NgZone,
    private three: ThreeSceneService
  ) {}

  init(): void {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isMobile = window.innerWidth < 900;
    this.isTouch = 'ontouchstart' in window;

    this.ngZone.runOutsideAngular(() => {
      this.initNavbar();
      this.initHeroIntro();
      this.initHeroScroll();
      this.initReveals();
      this.initGlobalParallax();
      this.initShowroom();
      this.initMagneticButtons();
      this.initStackInteractions();
      this.initProjectInteractions();
      this.initExperienceTimeline();
      this.initStatsCounters();
      this.initWhyCards();
      this.initServiceRows();
      ScrollTrigger.refresh();

      // Trigger positions above are calculated against whatever the layout
      // looks like right now. If images or webfonts finish loading (and
      // shift layout) after this point, those positions go stale and
      // reveals can fire against the wrong scroll offset — which is what
      // made several sections appear to reveal all at once on refresh.
      // Refresh again once everything has actually settled.
      window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
      if (typeof document !== 'undefined' && (document as any).fonts?.ready) {
        (document as any).fonts.ready.then(() => ScrollTrigger.refresh());
      }
    });
  }

  private initNavbar(): void {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    ScrollTrigger.create({
      start: 40,
      onUpdate: (self) => {
        if (self.scroll() > 40) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      }
    });
  }

  playHeroIntro(): void {
    if (this.prefersReducedMotion) {
      const core = this.three.getCoreGroup();
      if (core) core.scale.set(1, 1, 1);
      gsap.set('[data-reveal]', { opacity: 1, y: 0, scale: 1, filter: 'none' });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const core = this.three.getCoreGroup();
    const particles = this.three.getParticleSystem();

    if (core) {
      tl.to(core.scale, { x: 1, y: 1, z: 1, duration: 1.4, ease: 'power4.out' }, 0);
    }
    if (particles) {
      tl.fromTo(particles.material, { opacity: 0 }, { opacity: 0.5, duration: 1.6 }, 0.1);
    }
    tl.fromTo('#hero .eyebrow', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
      .fromTo(
        '.hero-title span em',
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.09 },
        0.42
      )
      .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.75)
      .fromTo('.hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.85)
      .fromTo('.scroll-indicator', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1)
      .fromTo('.hero-tagline', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7 }, 0.34);
  }

  private initHeroIntro(): void {
    // Actual intro is triggered after loader completes via playHeroIntro()
  }

  private initHeroScroll(): void {
    if (this.prefersReducedMotion) return;
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8,
      onUpdate: (self) => {
        this.three.onHeroScroll(self.progress);
      }
    });
    gsap.to('.hero-text', {
      opacity: 0,
      y: -40,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: '70% top', scrub: 0.6 }
    });
  }

  private initReveals(): void {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]')).filter(
      (el) => !el.closest('#hero')
    );
    if (!elements.length) return;

    if (this.prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      gsap.set(elements, { opacity: 1, y: 0, filter: 'none' });
      return;
    }

    // Hide everything up front, synchronously, so nothing can flash fully
    // visible before the observer has a chance to run.
    gsap.set(elements, { opacity: 0, y: 36, filter: 'blur(6px)' });

    // IntersectionObserver instead of a ScrollTrigger position calculation:
    // it re-evaluates against real, current viewport intersection rather
    // than a pixel offset computed once (and possibly stale). Elements
    // already on screen at load reveal right away; everything else stays
    // hidden until it's actually scrolled into view.
    this.revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out'
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -12% 0px' } // roughly matches the old 'top 88%' start line
    );

    elements.forEach((el) => this.revealObserver!.observe(el));
  }

  private initGlobalParallax(): void {
    if (this.prefersReducedMotion) return;
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      const strength = parseFloat(el.getAttribute('data-parallax') || '0.1') || 0.1;
      gsap.to(el, {
        yPercent: strength * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }

  private initShowroom(): void {
    if (this.prefersReducedMotion) return;
    gsap.to('.showroom-grid', {
      scale: 2.6,
      ease: 'none',
      scrollTrigger: { trigger: '#showroom', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  }

  private initMagneticButtons(): void {
    if (this.isTouch || this.prefersReducedMotion) return;
    document.querySelectorAll('.btn').forEach((btn) => {
      const el = btn as HTMLElement;
      el.classList.add('magnetic');
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.35;
        const y = (e.clientY - r.top - r.height / 2) * 0.5;
        gsap.to(el, { x, y, duration: 0.5, ease: 'power3.out' });
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' });
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      this.magneticCleanup.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });
  }

  private initStackInteractions(): void {
    gsap.utils.toArray<HTMLElement>('.stack-card').forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotateX: 12, rotateY: -6, transformPerspective: 800 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: (i % 6) * 0.06,
          scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' }
        }
      );

      if (!this.prefersReducedMotion && !this.isMobile) {
        const amp = parseFloat(card.dataset['float'] || '5');
        gsap.to(card, {
          y: `+=${amp}`,
          duration: 2.4 + Math.random() * 1.4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: Math.random()
        });

        card.addEventListener('mousemove', (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          gsap.to(card, { rotateY: px * 10, rotateX: -py * 10, duration: 0.4, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power3.out' });
        });
      }
    });
  }

  private initProjectInteractions(): void {
    // Intentionally a no-op now. The Projects section runs its own
    // pinned/scrubbed GSAP ScrollTrigger timeline (see ProjectsComponent)
    // that fully owns opacity, scale, y and rotate for `.project-card`.
    // Having this service animate the same properties on the same
    // elements created two competing GSAP contexts — that fight was a
    // major source of cards appearing to flash/reveal all at once.
    // If you want a hover tilt back on top of the cinematic scroll
    // sequence, add it inside ProjectsComponent instead, scoped to
    // only rotateY/rotateX so it can't stomp on the pinned timeline's
    // opacity/scale/y values.
  }

  private initExperienceTimeline(): void {
    gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
      const fromX = i % 2 === 0 ? -40 : 40;
      gsap.fromTo(
        item,
        { opacity: 0, x: this.isMobile ? 0 : fromX, y: this.isMobile ? 30 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    });

    gsap.to('#timeline-fill', {
      height: '100%',
      ease: 'none',
      scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 70%', scrub: 0.5 }
    });
  }

  private initStatsCounters(): void {
    document.querySelectorAll('.stat-cell').forEach((cell) => {
      const numEl = cell.querySelector('.stat-num') as HTMLElement;
      if (!numEl) return;
      const span = numEl.querySelector('span');
      if (!span) return;
      const target = numEl.dataset['target'] || '0';
      const numeric = parseInt(target.replace(/\D/g, ''), 10) || 0;
      const suffix = target.replace(/[0-9]/g, '');

      gsap.fromTo(
        numEl,
        {
          opacity: 0,
          y: 24,
          scale: 0.85,
          filter: this.prefersReducedMotion ? 'none' : 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cell,
            start: 'top 85%',
            toggleActions: 'play none none none',
            onEnter: () => {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: numeric,
                duration: 1.6,
                ease: 'power2.out',
                onUpdate: () => {
                  span.textContent = Math.floor(obj.val) + suffix;
                }
              });
            }
          }
        }
      );
    });
  }

  private initWhyCards(): void {
    gsap.utils.toArray<HTMLElement>('.why-card').forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 70, rotateX: 14, transformPerspective: 800 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.85,
          ease: 'power3.out',
          delay: i * 0.08,
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
        }
      );
    });
  }

  private initServiceRows(): void {
    gsap.utils.toArray<HTMLElement>('.service-row').forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: row, start: 'top 92%', toggleActions: 'play none none none' }
        }
      );
    });
  }

  refresh(): void {
    ScrollTrigger.refresh();
  }

  ngOnDestroy(): void {
    this.magneticCleanup.forEach((fn) => fn());
    this.revealObserver?.disconnect();
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
}
