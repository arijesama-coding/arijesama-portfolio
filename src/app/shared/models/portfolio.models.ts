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

export interface ProjectItem {
  num: string;
  cat: LocalizedText;
  title: string;
  desc: LocalizedText;
  images: string[];
  role: LocalizedText[];
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
