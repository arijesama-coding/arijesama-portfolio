import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  menuOpen = false;
  readonly spinning = signal(false);
  private spinTimer?: ReturnType<typeof setTimeout>;

  constructor(
    public theme: ThemeService,
    public i18n: I18nService
  ) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  toggleTheme(): void {
    this.theme.toggle();
    this.spinLogo();
  }

  setLang(lang: 'fr' | 'en'): void {
    if (this.i18n.lang() === lang) return;
    this.i18n.set(lang);
    this.spinLogo();
  }

  private spinLogo(): void {
    clearTimeout(this.spinTimer);
    this.spinning.set(false);
    requestAnimationFrame(() => this.spinning.set(true));
    this.spinTimer = setTimeout(() => this.spinning.set(false), 950);
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    document.body.style.overflow = '';
    clearTimeout(this.spinTimer);
  }
}
