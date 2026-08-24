import { WhyItem } from '../shared/models/portfolio.models';

export const WHY: WhyItem[] = [
  {
    num: '01',
    title: { fr: 'Ingénierie', en: 'Engineering' },
    desc: {
      fr: 'Une architecture Node.js & React solide — propre, scalable et pensée pour des applications réelles.',
      en: 'Solid Node.js & React architecture — clean, scalable and designed for real-world applications.'
    }
  },
  {
    num: '02',
    title: { fr: 'Performance', en: 'Performance' },
    desc: {
      fr: 'Des API rapides et des interfaces réactives — optimisées du traitement backend au rendu frontend.',
      en: 'Fast APIs and responsive interfaces — optimized from backend processing to frontend rendering.'
    }
  },
  {
    num: '03',
    title: { fr: 'Qualité', en: 'Quality' },
    desc: {
      fr: 'Un code propre, testé et maintenable — guidé par de vraies pratiques d’ingénierie, pas des raccourcis.',
      en: 'Clean, tested and maintainable code — following solid engineering practices, not shortcuts.'
    }
  },
  {
    num: '04',
    title: { fr: 'Fiabilité', en: 'Reliability' },
    desc: {
      fr: 'Des systèmes sécurisés, documentés et prêts pour la production — conçus pour être compris, maintenus et étendus par des équipes.',
      en: 'Secure, documented and production-ready systems — built to be understood, maintained and extended by teams.'
    }
  }
];
