import { ProjectItem } from '../shared/models/portfolio.models';

/**
 * Données projets — volontairement GÉNÉRIQUES :
 * - descriptions / objectifs / fonctionnalités orientés contexte, valeur
 *   et responsabilités (aucune mention de stack technique) ;
 * - liste de rôles harmonisée et réutilisable d'un projet à l'autre ;
 * - les technologies restent confinées à la section Stack.
 */

/** Rôles génériques partagés par tous les projets (cohérence globale). */
const COMMON_ROLES = [
  {
    fr: 'Conception et développement des fonctionnalités clés de la plateforme',
    en: 'Designed and developed the platform’s key features'
  },
  {
    fr: 'Amélioration continue des interfaces et de l’expérience utilisateur',
    en: 'Continuously improved interfaces and user experience'
  },
  {
    fr: 'Participation aux choix techniques et à l’évolution de l’architecture',
    en: 'Contributed to technical decisions and architecture evolution'
  },
  {
    fr: 'Fiabilisation, tests et accompagnement des mises en production',
    en: 'Ensured reliability, testing and production release support'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    num: '01',
    cat: { fr: 'Plateforme de gestion', en: 'Management Platform' },
    title: 'JobFlow',
    desc: {
      fr: 'Plateforme conçue pour centraliser la planification et le suivi des activités terrain : un espace unique qui fiabilise la coordination des équipes et la visibilité sur les opérations.',
      en: 'A platform designed to centralize field activity planning and tracking: one workspace that makes team coordination and operational visibility more reliable.'
    },
    images: [
      'assets/projects/jobflow-hero.png'
    ],
    role: COMMON_ROLES,
    impact: {
      objective: {
        fr: 'Les équipes suivaient leurs activités avec des outils dispersés, ce qui compliquait le pilotage et générait des pertes d’information. L’objectif était de réunir ces pratiques dans une plateforme unique afin d’améliorer la coordination, le suivi et la prise de décision.',
        en: 'Teams tracked their work across scattered tools, making oversight difficult and causing information to get lost. The goal was to bring these practices together into one platform to improve coordination, follow-up and decision-making.'
      },
      features: [
        {
          fr: 'Planification et suivi centralisés des activités',
          en: 'Centralized planning and tracking of activities'
        },
        {
          fr: 'Visibilité en temps réel sur l’avancement des opérations',
          en: 'Real-time visibility over operational progress'
        },
        {
          fr: 'Standardisation des processus internes',
          en: 'Standardized internal processes'
        },
        {
          fr: 'Tableaux de bord pour piloter l’activité dans son ensemble',
          en: 'Dashboards to oversee activity as a whole'
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
      fr: 'Solution de gestion développée pour un complexe culturel et de loisirs : elle regroupe les réservations, les activités et les ressources dans une plateforme unique au service des équipes.',
      en: 'A management solution built for a cultural and leisure complex: it brings bookings, activities and resources together in a single platform serving on-site teams.'
    },
    images: [],
    role: COMMON_ROLES,
    impact: {
      objective: {
        fr: 'Les opérations étaient gérées manuellement et séparées entre plusieurs services, générant erreurs et pertes de temps. L’objectif était de centraliser ces processus pour simplifier le suivi quotidien et fiabiliser la coordination entre équipes.',
        en: 'Operations were managed manually and split across departments, leading to errors and wasted time. The goal was to centralize these processes to simplify daily follow-up and make coordination between teams more reliable.'
      },
      features: [
        {
          fr: 'Gestion centralisée des réservations et des ressources',
          en: 'Centralized management of bookings and resources'
        },
        {
          fr: 'Suivi des activités et des processus internes',
          en: 'Tracking of activities and internal processes'
        },
        {
          fr: 'Qualité et cohérence renforcées des données',
          en: 'Improved data quality and consistency'
        },
        {
          fr: 'Interfaces adaptées aux différents rôles opérationnels',
          en: 'Interfaces tailored to different operational roles'
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
      fr: 'Plateforme métier en ligne qui permet aux indépendants et aux petites entreprises de centraliser leur gestion client, leur suivi administratif et l’organisation de leurs projets.',
      en: 'An online business platform that helps freelancers and small businesses centralize client management, administrative tracking and day-to-day project organization.'
    },
    images: [
      'assets/projects/invoiceninja-hero.png'
    ],
    role: COMMON_ROLES,
    impact: {
      objective: {
        fr: 'Les utilisateurs jonglaient avec plusieurs outils pour gérer leurs clients, leur activité et leurs documents. L’objectif était d’offrir une solution unique qui fait gagner du temps et donne une vision claire de l’ensemble de l’activité.',
        en: 'Users juggled several tools to manage their clients, activity and documents. The goal was to provide a single solution that saves time and gives a clear overview of the entire business.'
      },
      features: [
        {
          fr: 'Création et suivi centralisés des documents clients',
          en: 'Centralized creation and tracking of client documents'
        },
        {
          fr: 'Organisation et suivi des projets clients',
          en: 'Organization and tracking of client projects'
        },
        {
          fr: 'Gestion des clients avec historique et suivi des échanges',
          en: 'Client management with history and interaction tracking'
        },
        {
          fr: 'Vue d’ensemble de l’activité grâce aux tableaux de bord',
          en: 'Business-wide overview through dashboards'
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
      fr: 'Plateforme qui digitalise les processus de validation documentaire : du partage des documents au suivi des approbations, le parcours complet est simplifié et traçable.',
      en: 'A platform that digitizes document approval processes: from sharing documents to tracking approvals, the whole journey is simplified and traceable.'
    },
    images: [
      'assets/projects/documenso-hero.png'
    ],
    role: COMMON_ROLES,
    impact: {
      objective: {
        fr: 'Les validations papier ralentissaient les processus et rendaient le suivi des approbations difficile. L’objectif était de dématérialiser ce parcours pour accélérer les validations tout en garantissant une traçabilité claire.',
        en: 'Paper-based approvals slowed processes down and made sign-off tracking difficult. The goal was to digitize this journey to speed up approvals while keeping clear traceability.'
      },
      features: [
        {
          fr: 'Validation dématérialisée des documents avec gestion des participants',
          en: 'Paperless document approval with participant management'
        },
        {
          fr: 'Modèles réutilisables pour accélérer la préparation des documents',
          en: 'Reusable templates to speed up document preparation'
        },
        {
          fr: 'Suivi du statut des validations en temps réel',
          en: 'Real-time status tracking of approvals'
        },
        {
          fr: 'Traçabilité complète de chaque étape du processus',
          en: 'Complete traceability of every process step'
        }
      ]
    },
    year: '2024',
    cta: '',
    link: 'https://documenso.com'
  }
];
