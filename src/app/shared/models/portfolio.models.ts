export type Lang = 'fr' | 'en';

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface StackItem {
  name: string;
  cat: LocalizedText;
  icon: string;
}

/**
 * "Impact" enrichit un ProjectItem avec le contexte métier du projet :
 * le problème adressé (objective) et les fonctionnalités principales
 * livrées (features). Les rôles restent portés par `ProjectItem.role`
 * (inchangé) et sont simplement affichés aux côtés de l'impact dans le
 * panneau de détails.
 */
export interface ProjectImpact {
  objective: LocalizedText;
  features: LocalizedText[];
}

export interface ProjectItem {
  num: string;
  cat: LocalizedText;
  title: string;
  desc: LocalizedText;
  images: string[];
  role: LocalizedText[];
  /** Optionnel pour rester rétrocompatible avec d'anciennes entrées. */
  impact?: ProjectImpact;
  year: string;
  cta: string;
  link: string;
}

export interface ExperienceItem {
  period: string;
  role: LocalizedText;
  company: LocalizedText;
  desc: LocalizedText;
  tech: string[];
}

export interface StatItem {
  num: string;
  label: LocalizedText;
}

export interface WhyItem {
  num: string;
  title: LocalizedText;
  desc: LocalizedText;
}

export interface ServiceItem {
  title: string;
  desc: string;
}
