import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { LoaderComponent } from './layout/loader/loader.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { StackComponent } from './sections/stack/stack.component';
import { FeaturedProjectComponent } from './sections/featured-project/featured-project.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { StatsComponent } from './sections/stats/stats.component';
import { ShowroomComponent } from './sections/showroom/showroom.component';
import { WhyUsComponent } from './sections/why-us/why-us.component';
import { ServicesComponent } from './sections/services/services.component';
import { TestimonialComponent } from './sections/testimonial/testimonial.component';
import { CtaComponent } from './sections/cta/cta.component';
import { ContactComponent } from './sections/contact/contact.component';
import { LoaderService } from './core/services/loader.service';
import { CursorService } from './core/services/cursor.service';
import { ScrollAnimationsService } from './core/services/scroll-animations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoaderComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    StackComponent,
    // FeaturedProjectComponent,
    ProjectsComponent,
    ExperienceComponent,
    StatsComponent,
    ShowroomComponent,
    WhyUsComponent,
    // ServicesComponent,
    TestimonialComponent,
    // CtaComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private sub?: Subscription;

  constructor(
    private loader: LoaderService,
    private cursor: CursorService,
    private scrollAnim: ScrollAnimationsService
  ) {}

  ngAfterViewInit(): void {
    this.loadLucide();
    this.cursor.init();

    this.sub = this.loader.onComplete.subscribe(() => {
      this.scrollAnim.playHeroIntro();
      setTimeout(() => {
        this.scrollAnim.init();
        this.cursor.rebindHoverTargets();
        this.loadLucide();
      }, 50);
    });

    this.loader.start();

    window.addEventListener('resize', () => {
      this.scrollAnim.refresh();
    });
  }

  private loadLucide(): void {
    import('lucide').then((lucide) => {
      if (lucide && typeof (lucide as any).createIcons === 'function') {
        (lucide as any).createIcons();
      }
    }).catch(() => {
      if (!(window as any).lucide) {
        const s = document.createElement('script');
        s.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
        s.onload = () => {
          if ((window as any).lucide?.createIcons) {
            (window as any).lucide.createIcons();
          }
        };
        document.head.appendChild(s);
      } else if ((window as any).lucide.createIcons) {
        (window as any).lucide.createIcons();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.cursor.ngOnDestroy();
    this.scrollAnim.ngOnDestroy();
  }
}
