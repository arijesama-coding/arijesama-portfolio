import { ProjectItem } from '../shared/models/portfolio.models';

export const PROJECTS: ProjectItem[] = [
  {
    num: '01',
    cat: { fr: 'Plateforme de gestion', en: 'Management Platform' },
    title: 'JobFlow',
    desc: {
      fr: 'Plateforme web conçue pour centraliser la gestion des chantiers, la planification, la coordination des équipes, les workflows et les activités opérationnelles.',
      en: 'Web platform designed to centralize job management, scheduling, team coordination, workflows and operational activities.'
    },
    images: [
      'assets/projects/jobflow-hero.png'
    ],
    role: [
      {
        fr: 'Développement et maintenance des fonctionnalités centrales de la plateforme',
        en: 'Developed and maintained core platform features'
      },
      {
        fr: 'Création et amélioration des interfaces web et des parcours utilisateurs',
        en: 'Built and improved web interfaces and user workflows'
      },
      {
        fr: 'Conception et intégration des services applicatifs et des API',
        en: 'Designed and integrated application services and APIs'
      },
      {
        fr: 'Travaux sur la gestion des données et la fiabilité applicative',
        en: 'Worked on data management and application reliability'
      }
    ],
    year: '2026',
    cta: '',
    link: 'https://jobflow.com'
  },

  {
    num: '02',
    cat: { fr: 'Plateforme de gestion', en: 'Management Platform' },
    title: 'Gestion CCL',
    desc: {
      fr: 'Plateforme de gestion développée pour le Complexe Culturel et de Loisirs Vontovorona, axée sur les processus métier, la gestion des données et les activités opérationnelles.',
      en: 'Management platform developed for the Complexe Culturel et de Loisirs Vontovorona, focused on business workflows, data management and operational activities.'
    },
    images: [],
    role: [
      {
        fr: 'Développement et maintenance des fonctionnalités métier principales',
        en: 'Developed and maintained core business features'
      },
      {
        fr: 'Création et amélioration des interfaces web',
        en: 'Built and improved web interfaces'
      },
      {
        fr: 'Conception et intégration des services applicatifs et des API',
        en: 'Designed and integrated application services and APIs'
      },
      {
        fr: 'Travaux sur la gestion des données, les tests et la fiabilité applicative',
        en: 'Worked on data management, testing and application reliability'
      }
    ],
    year: '2025',
    cta: '#',
    link: '#'
  },

  {
    num: '03',
    cat: { fr: 'Plateforme SaaS', en: 'SaaS Platform' },
    title: 'InvoiceNinja',
    desc: {
      fr: 'Plateforme métier SaaS centrée sur la facturation, les paiements, la gestion de projets, la gestion clients et les processus de facturation.',
      en: 'SaaS business platform focused on invoicing, payments, project management, client management and billing workflows.'
    },
    images: [
      'assets/projects/invoiceninja-hero.png'
    ],
    role: [
      {
        fr: 'Développement et maintenance des fonctionnalités orientées métier',
        en: 'Developed and maintained business-oriented platform features'
      },
      {
        fr: 'Création et amélioration des interfaces web et des parcours utilisateurs',
        en: 'Built and improved web interfaces and user workflows'
      },
      {
        fr: 'Travaux sur la facturation, les paiements et les processus métier',
        en: 'Worked on billing, invoicing and business processes'
      },
      {
        fr: 'Contribution à la fiabilité applicative et à la gestion des données',
        en: 'Contributed to application reliability and data management'
      }
    ],
    year: '2025',
    cta: '',
    link: 'https://invoiceninja.com'
  },

  {
    num: '04',
    cat: { fr: 'Plateforme de signature électronique', en: 'E-Signature Platform' },
    title: 'Documenso',
    desc: {
      fr: 'Plateforme de signature de documents centrée sur les signatures électroniques, les workflows documentaires, les modèles, les destinataires et les processus d’approbation numérique.',
      en: 'Document signing platform focused on electronic signatures, document workflows, templates, recipients and digital approval processes.'
    },
    images: [
      'assets/projects/documenso-hero.png'
    ],
    role: [
      {
        fr: 'Développement et maintenance des workflows documentaires',
        en: 'Developed and maintained document workflow features'
      },
      {
        fr: 'Création et amélioration des interfaces et de l’expérience de signature',
        en: 'Built and improved user interfaces and signing experiences'
      },
      {
        fr: 'Travaux sur la gestion documentaire et les processus métier',
        en: 'Worked on document management and business processes'
      },
      {
        fr: 'Contribution à la fiabilité applicative et à la gestion des données',
        en: 'Contributed to application reliability and data management'
      }
    ],
    year: '2024',
    cta: '',
    link: 'https://documenso.com'
  }
];
