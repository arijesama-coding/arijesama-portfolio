import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy, effect } from '@angular/core';
import { ThreeSceneService } from '../../core/services/three-scene.service';
import { I18nService } from '../../core/services/i18n.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(
    private three: ThreeSceneService,
    public i18n: I18nService,
    private themeService: ThemeService
  ) {
    // Keep the 3D hero scene colors in sync with the active theme.
    effect(() => {
      const dark = this.themeService.isDark();
      if (this.three.isInitialized()) {
        this.three.applyTheme(dark);
      }
    });
  }

  ngAfterViewInit(): void {
    // Slight delay to ensure layout is measured
    requestAnimationFrame(() => {
      this.three.init(this.canvasRef.nativeElement);
      this.three.applyTheme(this.themeService.isDark());
    });
  }

  ngOnDestroy(): void {
    this.three.ngOnDestroy();
  }
}
