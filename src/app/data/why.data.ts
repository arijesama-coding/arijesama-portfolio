import { WhyItem } from '../shared/models/portfolio.models';

export const WHY: WhyItem[] = [
  {
    num: '01',
    title: { fr: 'Ingénierie mobile', en: 'Mobile Engineering' },
    desc: {
      fr: 'Des applications Android et iOS solides en React Native, Flutter et natif — claires, réactives et pensées pour des plateformes de supervision en temps réel.',
      en: 'Solid Android and iOS apps in React Native, Flutter and native — clear, responsive and designed for real-time monitoring platforms.'
    }
  },
  {
    num: '02',
    title: { fr: 'Performance', en: 'Performance' },
    desc: {
      fr: 'Des alertes reçues en 3 secondes, 60 fps et un démarrage 45 % plus rapide — optimisé du service live en Go jusqu’au rendu à l’écran.',
      en: 'Alerts received in 3 seconds, 60 fps and 45% faster startup — optimized from the live Go service to on-screen rendering.'
    }
  },
  {
    num: '03',
    title: { fr: 'Qualité', en: 'Quality' },
    desc: {
      fr: 'Un code testé (Jest, Detox), surveillé par du crash reporting et livré via CI/CD — 99,8 % de sessions sans crash.',
      en: 'Tested code (Jest, Detox), monitored with crash reporting and delivered through CI/CD — 99.8% crash-free sessions.'
    }
  },
  {
    num: '04',
    title: { fr: 'Fiabilité', en: 'Reliability' },
    desc: {
      fr: 'Des applications sécurisées (OAuth2/JWT), utilisables hors ligne et appuyées par une vraie culture backend (Go, Spring Boot, Python) pour collaborer efficacement avec les équipes.',
      en: 'Secure (OAuth2/JWT), offline-ready apps backed by real backend expertise (Go, Spring Boot, Python) to collaborate effectively with teams.'
    }
  }
];
