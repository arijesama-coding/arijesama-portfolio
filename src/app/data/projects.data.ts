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
    impact: {
      objective: {
        fr: 'Les équipes terrain géraient leurs chantiers via des tableurs et des échanges informels, ce qui rendait la planification difficile à suivre et créait des pertes d’information. JobFlow centralise ces activités dans une plateforme unique pour fiabiliser la coordination et la visibilité sur chaque chantier.',
        en: 'Field teams were managing jobs through spreadsheets and informal exchanges, which made scheduling hard to track and caused information to get lost. JobFlow centralizes these activities into a single platform to make coordination and visibility over every job more reliable.'
      },
      features: [
        {
          fr: 'Planification des chantiers avec vue calendrier et affectation des équipes',
          en: 'Job scheduling with calendar view and team assignment'
        },
        {
          fr: 'Suivi en temps réel de l’avancement et des tâches opérationnelles',
          en: 'Real-time tracking of progress and operational tasks'
        },
        {
          fr: 'Workflows configurables pour standardiser les processus métier',
          en: 'Configurable workflows to standardize business processes'
        },
        {
          fr: 'Tableaux de bord pour piloter l’activité multi-chantiers',
          en: 'Dashboards to manage activity across multiple jobs'
        }
      ]
    },
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
    impact: {
      objective: {
        fr: 'Le complexe gérait ses réservations, ses activités et ses ressources via des processus manuels dispersés entre plusieurs services. La plateforme regroupe ces opérations pour simplifier le suivi quotidien et réduire les erreurs de coordination entre équipes.',
        en: 'The venue managed bookings, activities and resources through manual processes spread across several departments. The platform brings these operations together to simplify daily follow-up and reduce coordination errors between teams.'
      },
      features: [
        {
          fr: 'Gestion centralisée des réservations et des ressources du complexe',
          en: 'Centralized management of bookings and venue resources'
        },
        {
          fr: 'Suivi des activités et des processus métier internes',
          en: 'Tracking of activities and internal business processes'
        },
        {
          fr: 'Gestion des données avec contrôles de cohérence et de fiabilité',
          en: 'Data management with consistency and reliability checks'
        },
        {
          fr: 'Interfaces dédiées aux différents rôles opérationnels',
          en: 'Dedicated interfaces for different operational roles'
        }
      ]
    },
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
    impact: {
      objective: {
        fr: 'Les indépendants et petites entreprises avaient besoin d’un outil unique pour facturer leurs clients, suivre les paiements et gérer leurs projets sans jongler entre plusieurs logiciels. InvoiceNinja répond à ce besoin en réunissant facturation, paiements et gestion de projets dans une seule plateforme SaaS.',
        en: 'Freelancers and small businesses needed a single tool to invoice clients, track payments and manage projects without juggling several separate tools. InvoiceNinja addresses this by bringing invoicing, payments and project management together in one SaaS platform.'
      },
      features: [
        {
          fr: 'Création et envoi de factures et devis personnalisables',
          en: 'Creation and delivery of customizable invoices and quotes'
        },
        {
          fr: 'Suivi des paiements et intégration de moyens de paiement en ligne',
          en: 'Payment tracking and integration of online payment methods'
        },
        {
          fr: 'Gestion de projets liée aux clients et à la facturation',
          en: 'Project management linked to clients and billing'
        },
        {
          fr: 'Gestion clients avec historique et suivi des échanges',
          en: 'Client management with history and interaction tracking'
        }
      ]
    },
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
    impact: {
      objective: {
        fr: 'Faire signer et valider des documents papier ralentissait les processus d’approbation et compliquait le suivi des destinataires. Documenso digitalise l’ensemble du parcours de signature pour accélérer les approbations tout en gardant une traçabilité claire.',
        en: 'Signing and validating paper documents slowed down approval processes and made tracking recipients difficult. Documenso digitizes the entire signing journey to speed up approvals while keeping clear traceability.'
      },
      features: [
        {
          fr: 'Signature électronique de documents avec gestion des destinataires',
          en: 'Electronic document signing with recipient management'
        },
        {
          fr: 'Modèles réutilisables pour accélérer la création de documents',
          en: 'Reusable templates to speed up document creation'
        },
        {
          fr: 'Workflows d’approbation avec suivi de statut en temps réel',
          en: 'Approval workflows with real-time status tracking'
        },
        {
          fr: 'Historique et traçabilité complète des signatures',
          en: 'Full history and traceability of signatures'
        }
      ]
    },
    year: '2024',
    cta: '',
    link: 'https://documenso.com'
  }
];
