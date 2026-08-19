import { Component, HostListener } from '@angular/core';
import { STACK } from '../../data/stack.data';
import { StackItem } from '../../shared/models/portfolio.models';
import { TECH_META, TechMeta, DEFAULT_TECH_META } from '../../data/tech-meta.data';

@Component({
  selector: 'app-stack',
  standalone: true,
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  items: StackItem[] = STACK;

  /** Index of the currently active (hovered/tapped) technology, or null */
  activeIndex: number | null = null;

  floatValue(i: number): string {
    return (5 + ((i * 7) % 5)).toFixed(1);
  }

  /** Identity (color + role points) for a given technology name */
  getMeta(name: string): TechMeta {
    return TECH_META[name] ?? DEFAULT_TECH_META;
  }

  isActive(i: number): boolean {
    return this.activeIndex === i;
  }

  /** True on devices with real mouse hover (desktop); false on touch */
  private get isPointerFine(): boolean {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
    );
  }

  // ---- Desktop: hover ----
  onMouseEnter(i: number): void {
    if (!this.isPointerFine) return;
    this.activeIndex = i;
  }

  onMouseLeave(): void {
    if (!this.isPointerFine) return;
    this.activeIndex = null;
  }

  // ---- Mobile/touch: tap to toggle ----
  onCardClick(event: Event, i: number): void {
    if (this.isPointerFine) return; // desktop stays hover-driven
    event.stopPropagation();
    this.activeIndex = this.activeIndex === i ? null : i;
  }

  // Tapping anywhere outside an active card (including empty section space) closes it
  @HostListener('document:click')
  onDocumentClick(): void {
    if (!this.isPointerFine) {
      this.activeIndex = null;
    }
  }
}
