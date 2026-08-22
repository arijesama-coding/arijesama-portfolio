import { ExperienceItem } from '../shared/models/portfolio.models';

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Jan. 2026 — Jul. 2026',
    role: { fr: 'Développeur logiciel junior', en: 'Software Developer Junior' },
    company: { fr: 'ZettaByte — 100 % à distance', en: 'ZettaByte — 100% Remote' },
    desc: {
      fr: 'Développeur logiciel junior sur des applications Java et Spring Boot, avec des contributions aux interfaces Angular et des travaux sur MongoDB dans un environnement 100 % à distance.',
      en: 'Worked as a junior software developer on Java and Spring Boot applications, contributing to Angular interfaces and working with MongoDB in a fully remote environment.'
    },
    tech: ['Java 21', 'Spring Boot 3.x', 'Angular 21', 'MongoDB']
  },

  {
    period: 'Jun. 2025 — Nov. 2025',
    role: { fr: 'Développeur fullstack & mobile junior', en: 'Fullstack & Mobile Developer Junior' },
    company: { fr: 'CNaPS Madagascar — Antananarivo', en: 'CNaPS Madagascar — Antananarivo' },
    desc: {
      fr: 'Développement et maintenance d’applications Java et Spring, création d’interfaces Angular 12 et contributions à des applications mobiles avec Ionic, le tout avec Oracle 11g et JUnit.',
      en: 'Developed and maintained Java and Spring applications, built Angular 12 interfaces and contributed to mobile applications with Ionic while working with Oracle 11g and JUnit.'
    },
    tech: [
      'Java 8/11',
      'Spring Framework',
      'Angular 12',
      'Ionic',
      'Oracle 11g',
      'JUnit 5',
      'Git',
      'Maven'
    ]
  },

  {
    period: 'Aug. 2024 — May 2025',
    role: { fr: 'Développeur logiciel junior', en: 'Software Developer Junior' },
    company: { fr: 'Slite — Paris, France · À distance', en: 'Slite — Paris, France · Remote' },
    desc: {
      fr: 'Travaux sur des applications Java et Spring Boot, contributions aux interfaces Angular et aux fonctionnalités mobiles avec Ionic, et mise en œuvre de PostgreSQL, Redis, Docker, Kubernetes et Grafana en environnement distribué.',
      en: 'Worked on Java and Spring Boot applications, contributed to Angular interfaces and mobile features with Ionic, and worked with PostgreSQL, Redis, Docker, Kubernetes and Grafana in a remote environment.'
    },
    tech: [
      'Java 17',
      'Spring Boot 3.x',
      'Angular 21',
      'Ionic',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes',
      'Grafana'
    ]
  }
];
