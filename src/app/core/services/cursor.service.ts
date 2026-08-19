import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({ providedIn: 'root' })
export class CursorService implements OnDestroy {
  private mx = 0;
  private my = 0;
  private rx = 0;
  private ry = 0;
  private tickerFn?: () => void;
  private moveHandler?: (e: MouseEvent) => void;
  private active = false;

  constructor(private ngZone: NgZone) {}

  init(): void {
    const isTouch = 'ontouchstart' in window;
    const isMobile = window.innerWidth < 900;
    if (isTouch || isMobile) {
      document.body.classList.add('no-cursor');
      return;
    }

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    this.active = true;

    this.moveHandler = (e: MouseEvent) => {
      this.mx = e.clientX;
      this.my = e.clientY;
      dot.style.left = this.mx + 'px';
      dot.style.top = this.my + 'px';
    };
    window.addEventListener('mousemove', this.moveHandler);

    this.ngZone.runOutsideAngular(() => {
      this.tickerFn = () => {
        this.rx += (this.mx - this.rx) * 0.18;
        this.ry += (this.my - this.ry) * 0.18;
        ring.style.left = this.rx + 'px';
        ring.style.top = this.ry + 'px';
      };
      gsap.ticker.add(this.tickerFn);
    });

    document.querySelectorAll('a,button,.stack-card,.project-card,.why-card').forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover-link'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover-link'));
    });
  }

  /** Re-bind hover targets after dynamic content is rendered */
  rebindHoverTargets(): void {
    if (!this.active) return;
    const ring = document.getElementById('cursor-ring');
    if (!ring) return;
    document.querySelectorAll('a,button,.stack-card,.project-card,.why-card').forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover-link'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover-link'));
    });
  }

  ngOnDestroy(): void {
    if (this.moveHandler) window.removeEventListener('mousemove', this.moveHandler);
    if (this.tickerFn) gsap.ticker.remove(this.tickerFn);
  }
}
