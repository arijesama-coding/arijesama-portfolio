import { ExperienceItem } from '../shared/models/portfolio.models';

/**
 * Données expérience — descriptions volontairement GÉNÉRIQUES :
 * - intitulés de poste harmonisés (« Développeur FullStack ») ;
 * - descriptions orientées responsabilités et valeur apportée ;
 * - technologies regroupées dans `tech` et dans la section Stack du site.
 */

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Jan. 2026 — Jul. 2026',
    role: { fr: 'Développeur FullStack', en: 'FullStack Developer' },
    company: { fr: 'ZettaByte — 100 % à distance', en: 'ZettaByte — 100% Remote' },
    desc: {
      fr: 'Conception et développement d’applications web au sein d’une équipe distribuée : implémentation de nouvelles fonctionnalités, amélioration des interfaces et contribution à la fiabilité des produits en production.',
      en: 'Designed and developed web applications within a distributed team: implemented new features, improved user interfaces and contributed to the reliability of production products.'
    },
    tech: ['Node.js', 'Express.js', 'React', 'TypeScript', 'MongoDB']
  },

  {
    period: 'Jun. 2025 — Nov. 2025',
    role: { fr: 'Développeur FullStack', en: 'FullStack Developer' },
    company: { fr: 'CNaPS Madagascar — Antananarivo', en: 'CNaPS Madagascar — Antananarivo' },
    desc: {
      fr: 'Développement et maintenance d’applications métier : création d’écrans et de parcours utilisateurs, intégration de nouveaux services et participation active aux tests pour garantir la qualité des livraisons.',
      en: 'Developed and maintained business applications: built screens and user journeys, integrated new services and took an active part in testing to ensure delivery quality.'
    },
    tech: [
      'Node.js',
      'Express.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Jest',
      'Git',
      'npm'
    ]
  },

  {
    period: 'Aug. 2024 — May 2025',
    role: { fr: 'Développeur FullStack', en: 'FullStack Developer' },
    company: { fr: 'Slite — Paris, France · À distance', en: 'Slite — Paris, France · Remote' },
    desc: {
      fr: 'Participation au développement de produits utilisés par des équipes internationales : ajout de fonctionnalités, amélioration continue des interfaces et contribution à la stabilité des applications en environnement distribué.',
      en: 'Contributed to products used by international teams: added features, continuously improved interfaces and helped keep applications stable in a distributed environment.'
    },
    tech: [
      'Node.js',
      'Express.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes',
      'Grafana'
    ]
  }
];
