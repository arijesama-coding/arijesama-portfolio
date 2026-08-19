import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private done$ = new Subject<void>();
  readonly onComplete = this.done$.asObservable();

  start(): void {
    const fill = document.getElementById('loader-fill');
    const pct = document.getElementById('loader-pct');
    const loader = document.getElementById('loader');
    if (!fill || !pct || !loader) {
      this.done$.next();
      return;
    }

    document.body.style.overflow = 'hidden';
    let progress = 0;

    const tick = setInterval(() => {
      progress += Math.random() * 18 + 8;
      if (progress >= 100) {
        progress = 100;
        clearInterval(tick);
        fill.style.width = '100%';
        pct.textContent = '100%';
        setTimeout(() => this.finish(loader), 280);
      } else {
        fill.style.width = progress + '%';
        pct.textContent = Math.floor(progress) + '%';
      }
    }, 110);
  }

  private finish(loader: HTMLElement): void {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      onComplete: () => {
        loader.style.display = 'none';
        document.body.style.overflow = '';
        this.done$.next();
      }
    });
  }
}
