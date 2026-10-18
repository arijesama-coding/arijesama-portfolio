import { ProjectItem } from '../shared/models/portfolio.models';

export const PROJECTS: ProjectItem[] = [
  {
    num: '01',
    cat: { fr: 'Application mobile temps réel', en: 'Real-Time Mobile App' },
    title: 'Real-Time Monitoring & Alarm App',
    desc: {
      fr: 'Application mobile de supervision et d’alarmes en temps réel, construite avec React Native, un service live en Go et des API Spring Boot, pour alerter les équipes terrain sur les événements critiques.',
      en: 'Real-time monitoring and alarm mobile app built with React Native, a live Go service and Spring Boot APIs, designed to alert field teams to critical events.'
    },
    images: [],
    role: [
      {
        fr: 'Développement de l’application React Native (Android, iOS, web) : alarmes, événements et ticketing',
        en: 'Developed the React Native app (Android, iOS, web): alarms, events and ticketing'
      },
      {
        fr: 'Création du service live en Go (WebSockets) pour les mises à jour en temps réel',
        en: 'Built the live Go service (WebSockets) for real-time updates'
      },
      {
        fr: 'Intégration d’API REST sécurisées (OAuth2/JWT) et des notifications push FCM/APNs',
        en: 'Integrated secure REST APIs (OAuth2/JWT) and FCM/APNs push notifications'
      },
      {
        fr: 'Mise en place des tests Detox/Jest et des releases Fastlane via GitLab CI/CD',
        en: 'Set up Detox/Jest tests and Fastlane releases through GitLab CI/CD'
      }
    ],
    impact: {
      objective: {
        fr: 'Les équipes terrain devaient être alertées sur les événements critiques sans perte de données, où qu’elles soient. L’application livre ces alertes en temps réel, de façon sécurisée et fiable.',
        en: 'Field teams needed to be alerted to critical events with no data loss, wherever they are. The app delivers these alerts in real time, securely and reliably.'
      },
      features: [
        {
          fr: 'Alerte reçue en 3 secondes avec 98 % de délivrabilité des notifications push',
          en: 'Alert received in 3 seconds with a 98% push notification delivery rate'
        },
        {
          fr: '10 000+ connexions simultanées avec une latence inférieure à 100 ms',
          en: '10,000+ simultaneous connections with latency under 100 ms'
        },
        {
          fr: '99,8 % de sessions sans crash et fluidité à 60 fps',
          en: '99.8% crash-free sessions and smooth 60 fps performance'
        },
        {
          fr: 'API Spring Boot : 1 200 req/s avec un temps de réponse p95 inférieur à 120 ms',
          en: 'Spring Boot API: 1,200 req/s with p95 response time under 120 ms'
        }
      ]
    },
    year: '2026',
    cta: '',
    link: '#'
  },

  {
    num: '02',
    cat: { fr: 'Application mobile hors-ligne & IA', en: 'Offline & AI Mobile App' },
    title: 'Offline Field App',
    desc: {
      fr: 'Application terrain React Native qui fonctionne sans réseau et traite en priorité les alertes importantes grâce à un modèle Python de scoring.',
      en: 'React Native field app that works without a network and handles important alerts first, thanks to a Python scoring model.'
    },
    images: [],
    role: [
      {
        fr: 'Conception du mode hors-ligne avec synchronisation des données SQLite',
        en: 'Designed the offline mode with SQLite data synchronization'
      },
      {
        fr: 'Gestion soignée des états de chargement, d’erreur et de reprise',
        en: 'Handled loading, error and recovery states with care'
      },
      {
        fr: 'Création d’un modèle Python de scoring pour prioriser les alertes',
        en: 'Built a Python scoring model to prioritize alerts'
      },
      {
        fr: 'Optimisation du démarrage grâce au cache et au chargement différé',
        en: 'Optimized startup with caching and lazy loading'
      }
    ],
    impact: {
      objective: {
        fr: 'Les équipes devaient continuer à travailler sans connexion et traiter en premier les alertes les plus importantes, sans être noyées par les fausses alertes.',
        en: 'Teams had to keep working without a connection and handle the most important alerts first, without being flooded by false alerts.'
      },
      features: [
        {
          fr: 'Fonctionnement hors-ligne avec synchronisation automatique au retour du réseau',
          en: 'Offline operation with automatic synchronization when the network returns'
        },
        {
          fr: 'Priorisation des alertes par un modèle Python de scoring',
          en: 'Alert prioritization through a Python scoring model'
        },
        {
          fr: '-30 % de fausses alertes',
          en: '-30% false alerts'
        },
        {
          fr: 'Note de 4,7/5 sur les stores et démarrage 45 % plus rapide',
          en: '4.7/5 store rating and 45% faster startup'
        }
      ]
    },
    year: '2025',
    cta: '',
    link: '#'
  }
];
