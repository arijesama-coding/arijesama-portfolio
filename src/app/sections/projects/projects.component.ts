import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList,
  ViewChildren,
  signal,
} from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { ProjectItem } from '../../shared/models/portfolio.models';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { I18nService } from '../../core/services/i18n.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  items: ProjectItem[] = PROJECTS;

  constructor(public i18n: I18nService) {}

  @ViewChildren('stickyWrap') stickyRefs!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('card') cardRefs!: QueryList<ElementRef<HTMLElement>>;

  private readonly mm = gsap.matchMedia();

  /** Galerie d’images (modale) */
  protected readonly selectedProject = signal<ProjectItem | null>(null);
  protected readonly activeImageIndex = signal(0);

  private touchStartX = 0;
  private touchDeltaX = 0;

  /** True si le projet a au moins une image */
  protected hasImages(p: ProjectItem): boolean {
    return Array.isArray(p.images) && p.images.length > 0 && !!p.images[0];
  }

  /**
   * True si le lien vers le case study est réellement exploitable
   * (non vide, non `#`, non undefined). Sinon le projet est considéré
   * comme privé : on affiche un cadenas au lieu d'un lien cliquable.
   */
  protected hasValidLink(p: ProjectItem): boolean {
    const link = p.link?.trim();
    return !!link && link !== '#';
  }

  /**
   * Retourne les images du projet dans l’ordre défini dans les données.
   * Ne mélange jamais les images d’autres projets.
   */
  protected getProjectImages(p: ProjectItem): string[] {
    return Array.isArray(p.images) ? p.images.filter(Boolean) : [];
  }

  /**
   * Each card's sticky wrapper rests a bit lower than the one before it,
   * so as they stack you can still see a strip of every earlier card
   * peeking out above the active one.
   */
  stickyTop(i: number): string {
    return `min(calc(5.5rem + ${i * 26}px), 22vh)`;
  }

  /** Ouvre la galerie d’images du projet (première image = index 0) */
  protected openGallery(project: ProjectItem, event?: Event): void {
    event?.stopPropagation();
    const images = this.getProjectImages(project);
    if (!images.length) return;
    this.selectedProject.set(project);
    this.activeImageIndex.set(0);
    document.body.style.overflow = 'hidden';
  }

  protected closeGallery(): void {
    this.selectedProject.set(null);
    this.activeImageIndex.set(0);
    document.body.style.overflow = '';
  }

  protected nextImage(): void {
    const project = this.selectedProject();
    if (!project) return;
    const images = this.getProjectImages(project);
    if (!images.length) return;
    this.activeImageIndex.update((i) => (i + 1) % images.length);
  }

  protected prevImage(): void {
    const project = this.selectedProject();
    if (!project) return;
    const images = this.getProjectImages(project);
    if (!images.length) return;
    this.activeImageIndex.update((i) => (i - 1 + images.length) % images.length);
  }

  protected goToImage(index: number): void {
    this.activeImageIndex.set(index);
  }

  @HostListener('document:keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    if (!this.selectedProject()) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.closeGallery();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.prevImage();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.nextImage();
        break;
    }
  }

  protected onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.touchDeltaX = 0;
  }

  protected onTouchMove(event: TouchEvent): void {
    this.touchDeltaX = event.touches[0].clientX - this.touchStartX;
  }

  protected onTouchEnd(): void {
    const swipeThreshold = 40;
    if (this.touchDeltaX > swipeThreshold) {
      this.prevImage();
    } else if (this.touchDeltaX < -swipeThreshold) {
      this.nextImage();
    }
    this.touchDeltaX = 0;
  }

  ngAfterViewInit(): void {
    const wraps = this.stickyRefs.toArray().map(r => r.nativeElement);
    const cards = this.cardRefs.toArray().map(r => r.nativeElement);
    if (!cards.length) return;

    const total = cards.length;

    this.mm.add('(prefers-reduced-motion: no-preference)', () => {
      cards.forEach((card, i) => {
        const targetScale = 1 - (total - 1 - i) * 0.03;

        gsap.fromTo(
          card,
          { scale: 1 },
          {
            scale: targetScale,
            ease: 'none',
            scrollTrigger: {
              trigger: wraps[i] ?? card,
              start: 'top bottom',
              end: 'top top',
              scrub: true
            }
          }
        );
      });
    });
  }

  ngOnDestroy(): void {
    this.mm.revert();
    document.body.style.overflow = '';
  }
}
