import { LocalizedText } from '../shared/models/portfolio.models';

export interface TechMeta {
  color: string;
  points: LocalizedText[];
}

export const DEFAULT_TECH_META: TechMeta = {
  color: '#9CA3AF',
  points: [
    { fr: 'Un pilier de mon quotidien de développement', en: 'Core part of my day-to-day toolkit' },
    { fr: 'Utilisé pour livrer des fonctionnalités fiables et maintenables', en: 'Used to ship reliable, maintainable features' },
    { fr: 'Choisi pour son écosystème et sa communauté', en: 'Chosen for its ecosystem and community support' },
    { fr: 'Appliqué avec le souci de la performance et de la clarté', en: 'Applied with an eye for performance and clarity' }
  ]
};

export const TECH_META: Record<string, TechMeta> = {
  'React Native': {
    color: '#61DAFB',
    points: [
      { fr: 'Applications Android, iOS et web depuis une seule base de code', en: 'Android, iOS and web apps from a single codebase' },
      { fr: '90 % de code partagé et une interface fluide à 60 fps', en: '90% shared code and smooth 60 fps interfaces' },
      { fr: 'Alarmes, événements et ticketing en temps réel', en: 'Real-time alarms, events and ticketing' },
      { fr: 'Tests Detox/Jest et releases Fastlane via CI/CD', en: 'Detox/Jest tests and Fastlane releases through CI/CD' }
    ]
  },
  Flutter: {
    color: '#02569B',
    points: [
      { fr: 'Applications multiplateformes construites avec Dart', en: 'Cross-platform apps built with Dart' },
      { fr: '4 applications livrées de la maquette à la publication', en: '4 apps shipped from mockup to store release' },
      { fr: 'Interfaces fidèles aux maquettes UI/UX', en: 'Interfaces faithful to UI/UX mockups' },
      { fr: 'Gestion d’état avec Bloc pour un code maintenable', en: 'State management with Bloc for maintainable code' }
    ]
  },
  Kotlin: {
    color: '#7F52FF',
    points: [
      { fr: 'Applications Android natives performantes', en: 'High-performance native Android apps' },
      { fr: 'Écrans développés à partir de maquettes Figma', en: 'Screens built from Figma mockups' },
      { fr: 'Persistance locale avec Room et tests unitaires', en: 'Local persistence with Room and unit tests' },
      { fr: 'Profiling et correction des crashs en production', en: 'Profiling and crash fixing in production' }
    ]
  },
  Swift: {
    color: '#F05138',
    points: [
      { fr: 'Applications iOS natives', en: 'Native iOS applications' },
      { fr: 'Notifications push via APNs', en: 'Push notifications through APNs' },
      { fr: 'Tests avec XCTest pour sécuriser les livraisons', en: 'XCTest testing to secure releases' },
      { fr: 'Expérience cohérente avec la version Android', en: 'Experience consistent with the Android version' }
    ]
  },
  TypeScript: {
    color: '#3178C6',
    points: [
      { fr: 'Du JavaScript typé pour des applications React Native fiables', en: 'Type-safe JavaScript for reliable React Native apps' },
      { fr: 'Moins de bugs runtime grâce à l’analyse statique', en: 'Fewer runtime bugs through static analysis' },
      { fr: 'Des contrats clairs entre l’application et les API', en: 'Clear contracts between the app and the APIs' },
      { fr: 'Meilleur outillage, autocomplétion et refactoring', en: 'Better tooling, autocompletion and refactoring' }
    ]
  },
  Go: {
    color: '#00ADD8',
    points: [
      { fr: 'Service live temps réel basé sur les WebSockets', en: 'Real-time live service built on WebSockets' },
      { fr: '10 000+ connexions simultanées avec moins de 100 ms de latence', en: '10,000+ simultaneous connections with under 100 ms latency' },
      { fr: 'Concurrence légère et efficace avec les goroutines', en: 'Lightweight, efficient concurrency with goroutines' },
      { fr: 'Alertes livrées aux applications mobiles en quelques secondes', en: 'Alerts delivered to mobile apps within seconds' }
    ]
  },
  Spring: {
    color: '#6DB33F',
    points: [
      { fr: 'API REST sécurisées pour les applications mobiles (OAuth2/JWT)', en: 'Secure REST APIs for mobile apps (OAuth2/JWT)' },
      { fr: '1 200 req/s avec un temps de réponse p95 inférieur à 120 ms', en: '1,200 req/s with p95 response time under 120 ms' },
      { fr: 'Spring Boot pour des livraisons rapides et fiables', en: 'Spring Boot for fast, reliable delivery' },
      { fr: 'Dialogue efficace avec les équipes backend', en: 'Effective collaboration with backend teams' }
    ]
  },
  Python: {
    color: '#3776AB',
    points: [
      { fr: 'Modèle d’IA de scoring pour prioriser les alertes', en: 'AI scoring model to prioritize alerts' },
      { fr: '-30 % de fausses alertes', en: '-30% false alerts' },
      { fr: 'Traitement de données et machine learning', en: 'Data processing and machine learning' },
      { fr: 'Scripts d’automatisation pour les équipes', en: 'Automation scripts for teams' }
    ]
  },
  SQLite: {
    color: '#003B57',
    points: [
      { fr: 'Stockage local pour un mode hors-ligne fiable', en: 'Local storage for a reliable offline mode' },
      { fr: 'Synchronisation des données au retour du réseau', en: 'Data synchronization when the network returns' },
      { fr: 'Cache pour des écrans instantanés', en: 'Caching for instant screens' },
      { fr: 'Base légère embarquée dans l’application', en: 'Lightweight database embedded in the app' }
    ]
  },
  Firebase: {
    color: '#FFCA28',
    points: [
      { fr: 'Notifications push via Firebase Cloud Messaging (FCM)', en: 'Push notifications through Firebase Cloud Messaging (FCM)' },
      { fr: '98 % de délivrabilité des notifications', en: '98% notification delivery rate' },
      { fr: 'Crash reporting avec Crashlytics', en: 'Crash reporting with Crashlytics' },
      { fr: '99,8 % de sessions sans crash suivies en production', en: '99.8% crash-free sessions tracked in production' }
    ]
  },
  GitLab: {
    color: '#FC6D26',
    points: [
      { fr: 'Pipelines CI/CD pour les applications mobiles', en: 'CI/CD pipelines for mobile apps' },
      { fr: 'Tests automatisés à chaque commit (Jest, Detox)', en: 'Automated tests on every commit (Jest, Detox)' },
      { fr: 'Releases Android et iOS automatisées avec Fastlane', en: 'Automated Android and iOS releases with Fastlane' },
      { fr: 'Revues de code et livraisons reproductibles', en: 'Code reviews and repeatable deliveries' }
    ]
  },
  Git: {
    color: '#F05032',
    points: [
      { fr: 'Contrôle de version sur chaque projet', en: 'Version control for every project' },
      { fr: 'Revues de code pour garder une qualité constante', en: 'Code reviews to keep quality consistent' },
      { fr: 'Historique clair et changements traçables', en: 'Clear history and traceable changes' },
      { fr: 'Base de la CI/CD et du travail en sprints Agile', en: 'Foundation for CI/CD and Agile sprint work' }
    ]
  }
};
