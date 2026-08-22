import { Injectable, signal } from '@angular/core';
import { Lang, LocalizedText } from '../../shared/models/portfolio.models';
import { TRANSLATIONS } from '../i18n/translations';

const STORAGE_KEY = 'lang';
const DEFAULT_LANG: Lang = 'fr';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(this.restore());

  constructor() {
    document.documentElement.setAttribute('lang', this.lang());
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    document.documentElement.setAttribute('lang', lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }

  toggle(): void {
    this.set(this.lang() === 'fr' ? 'en' : 'fr');
  }

  /** Translate a dictionary key. Reactive: templates re-evaluate when lang() changes. */
  t(key: string): string {
    const dict = TRANSLATIONS[this.lang()];
    return dict[key] ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
  }

  /** Pick the active language out of a localized data value. */
  pick(text: LocalizedText): string {
    return text[this.lang()];
  }

  private restore(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'fr' || stored === 'en') return stored;
    } catch {
      /* storage unavailable */
    }
    return DEFAULT_LANG;
  }
}
