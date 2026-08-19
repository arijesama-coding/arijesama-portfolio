import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { ThreeSceneService } from '../../core/services/three-scene.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private three: ThreeSceneService) {}

  ngAfterViewInit(): void {
    // Slight delay to ensure layout is measured
    requestAnimationFrame(() => {
      this.three.init(this.canvasRef.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.three.ngOnDestroy();
  }
}
