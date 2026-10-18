import { ProjectItem } from '../shared/models/portfolio.models';

export const PROJECTS: ProjectItem[] = [
  {
    num: '01',
    cat: { fr: 'Application mobile temps réel', en: 'Real-Time Mobile App' },
    title: 'Real-Time Monitoring App',
    desc: {
      fr: 'Application mobile de supervision et d’alarmes en temps réel, construite avec React Native, un service live en Go et des API Spring Boot, pour alerter les équipes terrain sur les événements critiques.',
      en: 'Real-time monitoring and alarm mobile app built with React Native, a live Go service and Spring Boot APIs, designed to alert field teams to critical events.'
    },
    images: [
      'assets/projects/jobflow-hero.png'
    ],
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
    cta: '#',
    link: '#'
  },

  {
    num: '03',
    cat: { fr: 'Applications mobiles multiplateformes', en: 'Cross-Platform Mobile Apps' },
    title: 'Flutter & Native Android Apps',
    desc: {
      fr: 'Quatre applications mobiles réalisées en Flutter et Android natif (Kotlin), de la maquette à la publication sur les stores, en collaboration avec l’UI/UX, le backend et le QA.',
      en: 'Four mobile apps built in Flutter and native Android (Kotlin), from mockup to store release, in collaboration with UI/UX, backend and QA.'
    },
    images: [
      'assets/projects/invoiceninja-hero.png'
    ],
    role: [
      {
        fr: 'Réalisation de 4 applications en Flutter et Android natif (Kotlin)',
        en: 'Built 4 apps in Flutter and native Android (Kotlin)'
      },
      {
        fr: 'Transformation des maquettes UI/UX en interfaces fidèles et réactives',
        en: 'Turned UI/UX mockups into faithful, responsive interfaces'
      },
      {
        fr: 'Collaboration avec le backend et le QA en sprints Agile, avec revues de code sur Git',
        en: 'Collaborated with backend and QA in Agile sprints, with code reviews on Git'
      },
      {
        fr: 'Correction des problèmes de performance et de crash grâce au profiling et au crash reporting',
        en: 'Fixed performance issues and crashes using profiling and crash reporting'
      }
    ],
    impact: {
      objective: {
        fr: 'Il fallait transformer des maquettes en applications mobiles publiables, rapides et stables, en travaillant main dans la main avec les équipes produit, backend et QA.',
        en: 'Mockups had to become releasable, fast and stable mobile apps, working hand in hand with the product, backend and QA teams.'
      },
      features: [
        {
          fr: '4 applications publiées sur les stores',
          en: '4 apps released to the stores'
        },
        {
          fr: 'Interfaces fidèles aux maquettes UI/UX',
          en: 'Interfaces faithful to UI/UX mockups'
        },
        {
          fr: 'Performance et stabilité suivies par profiling et crash reporting',
          en: 'Performance and stability tracked through profiling and crash reporting'
        },
        {
          fr: 'Livraisons régulières en sprints Agile',
          en: 'Regular deliveries in Agile sprints'
        }
      ]
    },
    year: '2025',
    cta: '',
    link: '#'
  },

  {
    num: '04',
    cat: { fr: 'Qualité & livraison mobile', en: 'Mobile Quality & Delivery' },
    title: 'Mobile Quality & CI/CD Pipeline',
    desc: {
      fr: 'Pipeline de qualité et de livraison pour applications mobiles : tests automatisés Detox/Jest, releases Fastlane via GitLab CI/CD et crash reporting avec Crashlytics et Sentry.',
      en: 'Quality and delivery pipeline for mobile apps: Detox/Jest automated tests, Fastlane releases through GitLab CI/CD and crash reporting with Crashlytics and Sentry.'
    },
    images: [
      'assets/projects/documenso-hero.png'
    ],
    role: [
      {
        fr: 'Mise en place des tests automatisés Detox et Jest',
        en: 'Set up automated Detox and Jest tests'
      },
      {
        fr: 'Automatisation des releases Android et iOS avec Fastlane',
        en: 'Automated Android and iOS releases with Fastlane'
      },
      {
        fr: 'Configuration du pipeline GitLab CI/CD pour le build et la livraison',
        en: 'Configured the GitLab CI/CD pipeline for build and delivery'
      },
      {
        fr: 'Intégration du crash reporting (Crashlytics, Sentry) et du suivi de performance',
        en: 'Integrated crash reporting (Crashlytics, Sentry) and performance tracking'
      }
    ],
    impact: {
      objective: {
        fr: 'Les livraisons mobiles devaient devenir reproductibles et fiables, avec des tests automatiques et une visibilité en continu sur les crashs et la performance.',
        en: 'Mobile deliveries had to become repeatable and reliable, with automated tests and continuous visibility on crashes and performance.'
      },
      features: [
        {
          fr: 'Tests automatisés à chaque modification du code',
          en: 'Automated tests on every code change'
        },
        {
          fr: 'Releases Android et iOS reproductibles avec Fastlane',
          en: 'Repeatable Android and iOS releases with Fastlane'
        },
        {
          fr: '99,8 % de sessions sans crash suivies en production',
          en: '99.8% crash-free sessions tracked in production'
        },
        {
          fr: 'Revues de code et livraisons plus sûres',
          en: 'Code reviews and safer deliveries'
        }
      ]
    },
    year: '2024',
    cta: '',
    link: '#'
  },

  {
    num: '05',
    cat: { fr: 'Application mobile métier', en: 'Business Mobile App' },
    title: 'CNaPS Cantine Mobile',
    desc: {
      fr: 'Application mobile destinée aux employés de la CNaPS pour utiliser la cantine côté utilisateur : consulter les menus, choisir leur repas et vérifier leur choix depuis leur téléphone.',
      en: 'Mobile app for CNaPS employees to use the canteen on the user side: browse menus, choose their meal and check their selection from their phone.'
    },
    images: [],
    role: [
      {
        fr: 'Conception et développement de l’application mobile côté utilisateur',
        en: 'Designed and developed the user-side mobile app'
      },
      {
        fr: 'Création des écrans de consultation des menus et de choix des repas',
        en: 'Built the menu browsing and meal selection screens'
      },
      {
        fr: 'Intégration d’API REST sécurisées et de l’authentification des employés',
        en: 'Integrated secure REST APIs and employee authentication'
      },
      {
        fr: 'Écriture de tests unitaires et correction des anomalies remontées par le QA',
        en: 'Wrote unit tests and fixed issues reported by QA'
      }
    ],
    impact: {
      objective: {
        fr: 'Les employés avaient besoin d’un moyen simple de choisir leur repas à la cantine et de vérifier leur choix, sans démarche compliquée. L’application met cette fonction directement dans leur poche.',
        en: 'Employees needed a simple way to choose their canteen meal and check their selection without complicated steps. The app puts this directly in their pocket.'
      },
      features: [
        {
          fr: 'Consultation des menus proposés par la cantine',
          en: 'Browsing of the menus offered by the canteen'
        },
        {
          fr: 'Choix du repas en quelques appuis',
          en: 'Meal selection in just a few taps'
        },
        {
          fr: 'Vérification du repas choisi à tout moment',
          en: 'Checking of the selected meal at any time'
        },
        {
          fr: 'Authentification sécurisée des employés',
          en: 'Secure employee authentication'
        }
      ]
    },
    year: '2025',
    cta: '',
    link: '#'
  },

  {
    num: '06',
    cat: { fr: 'Application mobile métier', en: 'Business Mobile App' },
    title: 'CNaPS Contrôle Mobile',
    desc: {
      fr: 'Application mobile donnant accès au service de contrôle de la CNaPS, pour permettre aux contrôleurs de contrôler les employeurs directement sur le terrain, sans ordinateur.',
      en: 'Mobile app giving access to the CNaPS control service, allowing inspectors to check employers directly in the field, without a computer.'
    },
    images: [],
    role: [
      {
        fr: 'Développement de l’application mobile d’accès au service de contrôle',
        en: 'Developed the mobile app giving access to the control service'
      },
      {
        fr: 'Création des écrans de consultation des employeurs et de saisie des contrôles',
        en: 'Built the screens for employer lookup and control entry'
      },
      {
        fr: 'Intégration d’API REST sécurisées et de l’authentification des contrôleurs',
        en: 'Integrated secure REST APIs and inspector authentication'
      },
      {
        fr: 'Gestion des états de chargement, d’erreur et de connexion instable',
        en: 'Handled loading, error and unstable-connection states'
      }
    ],
    impact: {
      objective: {
        fr: 'Les contrôleurs devaient pouvoir effectuer leurs contrôles chez les employeurs sans dépendre d’un ordinateur. L’application leur donne accès au service de contrôle depuis un simple téléphone, où qu’ils soient.',
        en: 'Inspectors needed to carry out employer checks without relying on a computer. The app gives them access to the control service from a simple phone, wherever they are.'
      },
      features: [
        {
          fr: 'Consultation des informations d’un employeur depuis le terrain',
          en: 'Employer information lookup from the field'
        },
        {
          fr: 'Saisie et enregistrement des constats de contrôle',
          en: 'Entry and saving of control findings'
        },
        {
          fr: 'Accès sécurisé réservé aux contrôleurs habilités',
          en: 'Secure access restricted to authorized inspectors'
        },
        {
          fr: 'Fonctionnement fiable même avec une connexion instable',
          en: 'Reliable operation even with an unstable connection'
        }
      ]
    },
    year: '2025',
    cta: '',
    link: '#'
  },

  {
    num: '07',
    cat: { fr: 'Application mobile de ticketing', en: 'Ticketing Mobile App' },
    title: 'Mobile Ticketing App',
    desc: {
      fr: 'Application React Native pour créer, suivre et clôturer des tickets d’incident depuis le terrain, avec notifications en temps réel.',
      en: 'React Native app to create, track and close incident tickets from the field, with real-time notifications.'
    },
    images: [],
    role: [
      {
        fr: 'Développement des écrans de création et de suivi des tickets',
        en: 'Developed the ticket creation and tracking screens'
      },
      {
        fr: 'Intégration d’API REST sécurisées (OAuth2/JWT)',
        en: 'Integrated secure REST APIs (OAuth2/JWT)'
      },
      {
        fr: 'Mise en place des notifications push FCM/APNs à chaque changement de statut',
        en: 'Set up FCM/APNs push notifications on every status change'
      },
      {
        fr: 'Écriture des tests Detox et Jest',
        en: 'Wrote Detox and Jest tests'
      }
    ],
    impact: {
      objective: {
        fr: 'Les opérateurs devaient gérer les tickets d’incident sans revenir à un poste fixe. L’application leur permet d’agir immédiatement depuis le terrain.',
        en: 'Operators needed to handle incident tickets without going back to a fixed workstation. The app lets them act immediately from the field.'
      },
      features: [
        {
          fr: 'Création d’un ticket avec description et photo',
          en: 'Ticket creation with description and photo'
        },
        {
          fr: 'Suivi du statut des tickets en temps réel',
          en: 'Real-time tracking of ticket status'
        },
        {
          fr: 'Notifications push à chaque mise à jour',
          en: 'Push notifications on every update'
        },
        {
          fr: 'Historique des tickets consultable hors ligne',
          en: 'Ticket history available offline'
        }
      ]
    },
    year: '2026',
    cta: '',
    link: '#'
  },

  {
    num: '08',
    cat: { fr: 'Application terrain', en: 'Field App' },
    title: 'Field Inspection App',
    desc: {
      fr: 'Application d’inspection sur le terrain avec check-lists, photos et géolocalisation, utilisable même sans réseau.',
      en: 'Field inspection app with checklists, photos and geolocation, usable even without a network.'
    },
    images: [],
    role: [
      {
        fr: 'Conception de check-lists dynamiques et configurables',
        en: 'Designed dynamic, configurable checklists'
      },
      {
        fr: 'Capture de photos et de la position GPS pour chaque constat',
        en: 'Implemented photo and GPS capture for each finding'
      },
      {
        fr: 'Mise en place du mode hors-ligne avec synchronisation SQLite',
        en: 'Set up offline mode with SQLite synchronization'
      },
      {
        fr: 'Génération et envoi des rapports d’inspection',
        en: 'Built report generation and submission'
      }
    ],
    impact: {
      objective: {
        fr: 'Les inspecteurs devaient remplir leurs rapports sur place, y compris dans les zones sans couverture réseau. L’application garde leurs données en sécurité et les synchronise ensuite.',
        en: 'Inspectors had to fill in their reports on site, including in areas without network coverage. The app keeps their data safe and synchronizes it afterwards.'
      },
      features: [
        {
          fr: 'Check-lists configurables selon le type d’inspection',
          en: 'Checklists configurable by inspection type'
        },
        {
          fr: 'Photos et position GPS attachées aux constats',
          en: 'Photos and GPS position attached to findings'
        },
        {
          fr: 'Mode hors-ligne avec synchronisation automatique',
          en: 'Offline mode with automatic synchronization'
        },
        {
          fr: 'Envoi du rapport depuis le terrain',
          en: 'Report submission from the field'
        }
      ]
    },
    year: '2025',
    cta: '',
    link: '#'
  },

  {
    num: '09',
    cat: { fr: 'Service backend', en: 'Backend Service' },
    title: 'Push Notification Service',
    desc: {
      fr: 'Service backend en Go qui distribue des notifications push (FCM, APNs) vers les applications mobiles à partir d’événements et d’alarmes.',
      en: 'Go backend service that delivers push notifications (FCM, APNs) to mobile apps from events and alarms.'
    },
    images: [],
    role: [
      {
        fr: 'Développement du service de notifications en Go',
        en: 'Developed the notification service in Go'
      },
      {
        fr: 'Intégration de Firebase Cloud Messaging et d’APNs',
        en: 'Integrated Firebase Cloud Messaging and APNs'
      },
      {
        fr: 'Gestion des files de messages et des relances en cas d’échec',
        en: 'Handled message queues and retries on failure'
      },
      {
        fr: 'Exposition d’API REST sécurisées pour les autres services',
        en: 'Exposed secure REST APIs for other services'
      }
    ],
    impact: {
      objective: {
        fr: 'Les applications mobiles avaient besoin d’un moyen fiable et centralisé d’envoyer les alertes aux bons utilisateurs au bon moment.',
        en: 'Mobile apps needed a reliable, centralized way to send alerts to the right users at the right time.'
      },
      features: [
        {
          fr: 'Envoi ciblé par utilisateur, groupe ou sujet',
          en: 'Targeted delivery by user, group or topic'
        },
        {
          fr: 'Relance automatique des notifications échouées',
          en: 'Automatic retry of failed notifications'
        },
        {
          fr: 'Suivi de l’état de livraison des notifications',
          en: 'Tracking of notification delivery status'
        },
        {
          fr: 'API sécurisée utilisable par tous les services',
          en: 'Secure API usable by all services'
        }
      ]
    },
    year: '2026',
    cta: '',
    link: '#'
  },

  {
    num: '10',
    cat: { fr: 'Tableau de bord mobile', en: 'Mobile Dashboard' },
    title: 'Real-Time Dashboard Mobile',
    desc: {
      fr: 'Tableaux de bord mobiles qui affichent en temps réel les indicateurs clés et l’état des systèmes supervisés.',
      en: 'Mobile dashboards that display key indicators and the status of monitored systems in real time.'
    },
    images: [],
    role: [
      {
        fr: 'Développement des écrans de graphiques et d’indicateurs clés',
        en: 'Built the chart and key-indicator screens'
      },
      {
        fr: 'Mises à jour en temps réel via WebSockets',
        en: 'Implemented real-time updates through WebSockets'
      },
      {
        fr: 'Optimisation du rendu des listes et des graphiques',
        en: 'Optimized list and chart rendering'
      },
      {
        fr: 'Mise en place du cache pour un affichage instantané',
        en: 'Set up caching for instant display'
      }
    ],
    impact: {
      objective: {
        fr: 'Les responsables voulaient suivre l’activité et les alarmes à tout moment depuis leur téléphone, sans ouvrir un ordinateur.',
        en: 'Managers wanted to follow activity and alarms at any time from their phone, without opening a computer.'
      },
      features: [
        {
          fr: 'Indicateurs clés mis à jour en direct',
          en: 'Key indicators updated live'
        },
        {
          fr: 'Graphiques interactifs et lisibles sur mobile',
          en: 'Interactive charts readable on mobile'
        },
        {
          fr: 'Filtres par période et par site',
          en: 'Filters by period and site'
        },
        {
          fr: 'Alertes visuelles en cas de dépassement de seuil',
          en: 'Visual alerts when a threshold is exceeded'
        }
      ]
    },
    year: '2026',
    cta: '',
    link: '#'
  },

  {
    num: '11',
    cat: { fr: 'Sécurité mobile', en: 'Mobile Security' },
    title: 'Secure Mobile Authentication',
    desc: {
      fr: 'Module d’authentification sécurisée pour applications mobiles : OAuth2/JWT, renouvellement des jetons et déverrouillage biométrique.',
      en: 'Secure authentication module for mobile apps: OAuth2/JWT, token renewal and biometric unlock.'
    },
    images: [],
    role: [
      {
        fr: 'Implémentation de l’authentification OAuth2/JWT',
        en: 'Implemented OAuth2/JWT authentication'
      },
      {
        fr: 'Gestion du renouvellement des jetons et des sessions expirées',
        en: 'Handled token renewal and expired sessions'
      },
      {
        fr: 'Ajout du déverrouillage biométrique',
        en: 'Added biometric unlock'
      },
      {
        fr: 'Stockage sécurisé des jetons sur l’appareil',
        en: 'Implemented secure token storage on the device'
      }
    ],
    impact: {
      objective: {
        fr: 'Les applications devaient protéger l’accès à des données sensibles sans alourdir l’expérience de l’utilisateur.',
        en: 'Apps had to protect access to sensitive data without making the user experience heavier.'
      },
      features: [
        {
          fr: 'Connexion sécurisée avec OAuth2/JWT',
          en: 'Secure sign-in with OAuth2/JWT'
        },
        {
          fr: 'Renouvellement automatique de la session',
          en: 'Automatic session renewal'
        },
        {
          fr: 'Déverrouillage par empreinte ou reconnaissance faciale',
          en: 'Unlock by fingerprint or face recognition'
        },
        {
          fr: 'Jetons stockés de façon sécurisée',
          en: 'Tokens stored securely'
        }
      ]
    },
    year: '2025',
    cta: '',
    link: '#'
  },

  {
    num: '12',
    cat: { fr: 'Module technique', en: 'Technical Module' },
    title: 'Offline Sync Engine',
    desc: {
      fr: 'Moteur de synchronisation hors-ligne pour applications mobiles, basé sur SQLite, qui met les modifications en file d’attente et les synchronise au retour du réseau.',
      en: 'Offline synchronization engine for mobile apps, based on SQLite, that queues changes and synchronizes them when the network returns.'
    },
    images: [],
    role: [
      {
        fr: 'Conception du modèle de données local avec SQLite',
        en: 'Designed the local data model with SQLite'
      },
      {
        fr: 'Mise en place d’une file d’attente des modifications',
        en: 'Built a change queue'
      },
      {
        fr: 'Gestion des conflits entre données locales et serveur',
        en: 'Handled conflicts between local and server data'
      },
      {
        fr: 'Tests de scénarios avec réseau instable',
        en: 'Tested scenarios with an unstable network'
      }
    ],
    impact: {
      objective: {
        fr: 'Les utilisateurs de terrain perdaient du temps, voire des données, quand le réseau était instable. Ce moteur garantit qu’aucune modification ne se perd.',
        en: 'Field users lost time, and sometimes data, when the network was unstable. This engine ensures no change is lost.'
      },
      features: [
        {
          fr: 'Lecture et écriture en local, sans réseau',
          en: 'Local reads and writes, with no network'
        },
        {
          fr: 'Synchronisation automatique en arrière-plan',
          en: 'Automatic background synchronization'
        },
        {
          fr: 'Résolution des conflits de données',
          en: 'Data conflict resolution'
        },
        {
          fr: 'Indicateur d’état de synchronisation pour l’utilisateur',
          en: 'Synchronization status indicator for the user'
        }
      ]
    },
    year: '2025',
    cta: '',
    link: '#'
  },

  {
    num: '13',
    cat: { fr: 'Application de suivi en temps réel', en: 'Real-Time Tracking App' },
    title: 'Delivery Tracking App',
    desc: {
      fr: 'Application Flutter de suivi de livraisons avec position GPS en temps réel, statuts et notifications.',
      en: 'Flutter delivery tracking app with real-time GPS position, statuses and notifications.'
    },
    images: [],
    role: [
      {
        fr: 'Développement de l’application Flutter',
        en: 'Developed the Flutter app'
      },
      {
        fr: 'Intégration de la carte et de la géolocalisation',
        en: 'Integrated the map and geolocation'
      },
      {
        fr: 'Mises à jour de position et de statut en temps réel',
        en: 'Implemented real-time position and status updates'
      },
      {
        fr: 'Gestion des permissions et optimisation de la batterie',
        en: 'Handled permissions and battery optimization'
      }
    ],
    impact: {
      objective: {
        fr: 'Livreurs et clients devaient connaître en direct l’état et la position des livraisons, sans appels ni relances.',
        en: 'Couriers and customers needed to know the live status and position of deliveries, without calls or follow-ups.'
      },
      features: [
        {
          fr: 'Carte avec position de la livraison en direct',
          en: 'Map with live delivery position'
        },
        {
          fr: 'Statuts de livraison mis à jour automatiquement',
          en: 'Automatically updated delivery statuses'
        },
        {
          fr: 'Notifications à chaque étape importante',
          en: 'Notifications at every key step'
        },
        {
          fr: 'Historique des livraisons consultable',
          en: 'Browsable delivery history'
        }
      ]
    },
    year: '2024',
    cta: '',
    link: '#'
  },

  {
    num: '14',
    cat: { fr: 'API & IA', en: 'API & AI' },
    title: 'AI Alert Prioritization API',
    desc: {
      fr: 'API Python qui attribue un score de priorité aux alertes pour que les équipes traitent d’abord les plus importantes.',
      en: 'Python API that assigns a priority score to alerts so teams handle the most important ones first.'
    },
    images: [],
    role: [
      {
        fr: 'Développement du modèle de scoring en Python',
        en: 'Developed the scoring model in Python'
      },
      {
        fr: 'Exposition du modèle via une API REST',
        en: 'Exposed the model through a REST API'
      },
      {
        fr: 'Intégration avec l’application mobile et le service d’alertes',
        en: 'Integrated with the mobile app and the alert service'
      },
      {
        fr: 'Évaluation et amélioration continue du modèle',
        en: 'Evaluated and continuously improved the model'
      }
    ],
    impact: {
      objective: {
        fr: 'Les équipes étaient submergées d’alertes et devaient identifier rapidement les plus critiques. L’API trie les alertes pour elles.',
        en: 'Teams were overwhelmed by alerts and had to quickly identify the most critical ones. The API sorts alerts for them.'
      },
      features: [
        {
          fr: 'Score de priorité calculé pour chaque alerte',
          en: 'Priority score computed for each alert'
        },
        {
          fr: 'Réduction des fausses alertes',
          en: 'Reduction of false alerts'
        },
        {
          fr: 'API REST consommée directement par l’application mobile',
          en: 'REST API consumed directly by the mobile app'
        },
        {
          fr: 'Ré-entraînement possible avec de nouvelles données',
          en: 'Retraining possible with new data'
        }
      ]
    },
    year: '2026',
    cta: '',
    link: '#'
  },

  {
    num: '15',
    cat: { fr: 'Application mobile de réservation', en: 'Booking Mobile App' },
    title: 'Booking Mobile App',
    desc: {
      fr: 'Application Flutter de réservation de créneaux et de ressources, avec confirmation et rappels.',
      en: 'Flutter app for booking time slots and resources, with confirmation and reminders.'
    },
    images: [],
    role: [
      {
        fr: 'Développement de l’application en Flutter',
        en: 'Developed the app in Flutter'
      },
      {
        fr: 'Création de l’affichage des disponibilités et du parcours de réservation',
        en: 'Built the availability view and booking flow'
      },
      {
        fr: 'Intégration d’API REST et des notifications de rappel',
        en: 'Integrated REST APIs and reminder notifications'
      },
      {
        fr: 'Écriture de tests et correction des anomalies du QA',
        en: 'Wrote tests and fixed QA issues'
      }
    ],
    impact: {
      objective: {
        fr: 'Les utilisateurs voulaient réserver un créneau ou une ressource rapidement, sans appel ni échange de messages.',
        en: 'Users wanted to book a slot or a resource quickly, without phone calls or message exchanges.'
      },
      features: [
        {
          fr: 'Consultation des disponibilités en direct',
          en: 'Live availability browsing'
        },
        {
          fr: 'Réservation en quelques appuis',
          en: 'Booking in just a few taps'
        },
        {
          fr: 'Rappels par notification avant le créneau',
          en: 'Notification reminders before the slot'
        },
        {
          fr: 'Modification et annulation depuis l’application',
          en: 'Modification and cancellation from the app'
        }
      ]
    },
    year: '2024',
    cta: '',
    link: '#'
  },

  {
    num: '16',
    cat: { fr: 'Design system mobile', en: 'Mobile Design System' },
    title: 'React Native UI Kit',
    desc: {
      fr: 'Bibliothèque de composants React Native réutilisables, basée sur les maquettes Figma, pour accélérer et uniformiser le développement des écrans.',
      en: 'Library of reusable React Native components based on Figma mockups, to speed up and standardize screen development.'
    },
    images: [],
    role: [
      {
        fr: 'Création des composants à partir des maquettes Figma',
        en: 'Built components from Figma mockups'
      },
      {
        fr: 'Mise en place des thèmes clair et sombre',
        en: 'Set up light and dark themes'
      },
      {
        fr: 'Documentation et exemples d’utilisation des composants',
        en: 'Wrote documentation and usage examples for the components'
      },
      {
        fr: 'Tests des composants avec Jest',
        en: 'Tested components with Jest'
      }
    ],
    impact: {
      objective: {
        fr: 'Chaque écran était recodé d’une application à l’autre, avec des différences visuelles. Le kit uniformise l’interface et fait gagner du temps.',
        en: 'Every screen was recoded from one app to another, with visual differences. The kit standardizes the interface and saves time.'
      },
      features: [
        {
          fr: 'Composants réutilisables et documentés',
          en: 'Reusable, documented components'
        },
        {
          fr: 'Thèmes clair et sombre',
          en: 'Light and dark themes'
        },
        {
          fr: 'Cohérence visuelle avec les maquettes Figma',
          en: 'Visual consistency with Figma mockups'
        },
        {
          fr: 'Développement des nouveaux écrans plus rapide',
          en: 'Faster development of new screens'
        }
      ]
    },
    year: '2025',
    cta: '',
    link: '#'
  }
];
