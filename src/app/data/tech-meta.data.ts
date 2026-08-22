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
  Angular: {
    color: '#DD0031',
    points: [
      { fr: 'Applications web modernes et structurées', en: 'Modern, structured web applications' },
      { fr: 'Architecture modulaire avec composants réutilisables', en: 'Modular architecture with reusable components' },
      { fr: 'Interfaces dynamiques construites avec TypeScript et RxJS', en: 'Dynamic interfaces built with TypeScript and RxJS' },
      { fr: 'Applications métier maintenables et scalables', en: 'Maintainable, scalable business applications' }
    ]
  },
  Java: {
    color: '#EA2D2E',
    points: [
      { fr: 'Applications backend robustes et scalables', en: 'Robust, scalable backend applications' },
      { fr: 'Conception orientée objet et design patterns éprouvés', en: 'Object-oriented design and proven design patterns' },
      { fr: 'Intégration Spring / JVM en production', en: 'Spring / JVM integration in production' },
      { fr: 'Performance, concurrence et maintenabilité sur le long terme', en: 'Performance, concurrency and long-term maintainability' }
    ]
  },
  Spring: {
    color: '#6DB33F',
    points: [
      { fr: 'Services backend et API prêts pour la production', en: 'Production-grade backend services and APIs' },
      { fr: 'Injection de dépendances pour un code propre et testable', en: 'Dependency injection for clean, testable code' },
      { fr: 'Spring Boot pour des livraisons rapides et fiables', en: 'Spring Boot for fast, reliable delivery' },
      { fr: 'Sécurité, accès aux données et microservices à l’échelle', en: 'Security, data access and microservices at scale' }
    ]
  },
  React: {
    color: '#61DAFB',
    points: [
      { fr: 'Interfaces utilisateur interactives et component-driven', en: 'Interactive, component-driven user interfaces' },
      { fr: 'UI réutilisable construite autour du DOM virtuel', en: 'Reusable UI built around a virtual DOM' },
      { fr: 'Écosystème riche pour la gestion d’état et des données', en: 'Rich ecosystem for state and data management' },
      { fr: 'Itération rapide sur des produits front-end modernes', en: 'Fast iteration on modern front-end products' }
    ]
  },
  TypeScript: {
    color: '#3178C6',
    points: [
      { fr: 'Du JavaScript typé, même à grande échelle', en: 'Type-safe JavaScript at scale' },
      { fr: 'Moins de bugs runtime grâce à l’analyse statique', en: 'Fewer runtime bugs through static analysis' },
      { fr: 'Des contrats plus clairs dans les grandes bases de code', en: 'Clearer contracts across large codebases' },
      { fr: 'Meilleur outillage, autocomplétion et refactoring', en: 'Better tooling, autocompletion and refactoring' }
    ]
  },
  JavaScript: {
    color: '#F7DF1E',
    points: [
      { fr: 'Le langage central de la plateforme web', en: 'The core language of the web platform' },
      { fr: 'Comportements front-end dynamiques et interactifs', en: 'Dynamic, interactive front-end behavior' },
      { fr: 'Fonctionne côté navigateur comme côté Node.js', en: 'Runs across browser and Node.js environments' },
      { fr: 'La colle entre UI, API et logique métier', en: 'Glue between UI, APIs and business logic' }
    ]
  },
  Docker: {
    color: '#2496ED',
    points: [
      { fr: 'Des environnements cohérents du dev à la production', en: 'Consistent environments from dev to production' },
      { fr: 'Conteneurs applicatifs isolés et reproductibles', en: 'Isolated, reproducible application containers' },
      { fr: 'Déploiement et montée en charge simplifiés', en: 'Simplified deployment and scaling' },
      { fr: 'Socle des pipelines CI/CD', en: 'Foundation for CI/CD pipelines' }
    ]
  },
  PostgreSQL: {
    color: '#336791',
    points: [
      { fr: 'Stockage relationnel fiable', en: 'Reliable relational data storage' },
      { fr: 'Requêtes complexes avec une forte intégrité des données', en: 'Complex queries with strong data integrity' },
      { fr: 'Passe du prototype aux charges de production', en: 'Scales from prototypes to production workloads' },
      { fr: 'Épine dorsale éprouvée des applications critiques', en: 'Trusted backbone for critical applications' }
    ]
  },
  Redis: {
    color: '#DC382D',
    points: [
      { fr: 'Cache en mémoire ultra-rapide', en: 'High-speed in-memory caching' },
      { fr: 'Stockage de sessions et rate limiting', en: 'Session storage and rate limiting' },
      { fr: 'Pub/sub et flux de données temps réel', en: 'Pub/sub and real-time data flows' },
      { fr: 'Réduction de la charge des bases principales', en: 'Reduced load on primary databases' }
    ]
  },
  Ionic: {
    color: '#4E8EF7',
    points: [
      { fr: 'Applications cross-platform depuis une seule base de code', en: 'Cross-platform apps from a single codebase' },
      { fr: 'Expérience mobile fluide et performante', en: 'Native-feeling performance and animations' },
      { fr: 'Itération rapide de l’UI avec hot reload', en: 'Rapid UI iteration with hot reload' },
      { fr: 'Expérience cohérente sur iOS et Android', en: 'Consistent experience across iOS and Android' }
    ]
  },
  Kafka: {
    color: '#231F20',
    points: [
      { fr: 'Streaming d’événements à haut débit', en: 'High-throughput event streaming' },
      { fr: 'Architecture orientée messages découplée', en: 'Decoupled, message-driven architecture' },
      { fr: 'Pipelines de données tolérants aux pannes', en: 'Fault-tolerant data pipelines' },
      { fr: 'Traitement temps réel entre services', en: 'Real-time processing between services' }
    ]
  },
  Git: {
    color: '#F05032',
    points: [
      { fr: 'Contrôle de version sur chaque projet', en: 'Version control for every project' },
      { fr: 'Workflows de branches pour collaborer sereinement', en: 'Branching workflows for safe collaboration' },
      { fr: 'Historique clair et changements traçables', en: 'Clear history and traceable changes' },
      { fr: 'Base de la CI/CD et de la revue de code', en: 'Foundation for CI/CD and code review' }
    ]
  }
};
