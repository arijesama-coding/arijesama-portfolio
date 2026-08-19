export interface TechMeta {
  color: string;
  points: string[];
}

export const DEFAULT_TECH_META: TechMeta = {
  color: '#9CA3AF',
  points: [
    'Core part of my day-to-day toolkit',
    'Used to ship reliable, maintainable features',
    'Chosen for its ecosystem and community support',
    'Applied with an eye for performance and clarity'
  ]
};

export const TECH_META: Record<string, TechMeta> = {
  Angular: {
    color: '#DD0031',
    points: [
      'Modern, structured web applications',
      'Modular architecture with reusable components',
      'Dynamic interfaces built with TypeScript and RxJS',
      'Maintainable, scalable business applications'
    ]
  },
  Java: {
    color: '#EA2D2E',
    points: [
      'Robust, scalable backend applications',
      'Object-oriented design and proven design patterns',
      'Spring / JVM integration in production',
      'Performance, concurrency and long-term maintainability'
    ]
  },
  Spring: {
    color: '#6DB33F',
    points: [
      'Production-grade backend services and APIs',
      'Dependency injection for clean, testable code',
      'Spring Boot for fast, reliable delivery',
      'Security, data access and microservices at scale'
    ]
  },
  React: {
    color: '#61DAFB',
    points: [
      'Interactive, component-driven user interfaces',
      'Reusable UI built around a virtual DOM',
      'Rich ecosystem for state and data management',
      'Fast iteration on modern front-end products'
    ]
  },
  TypeScript: {
    color: '#3178C6',
    points: [
      'Type-safe JavaScript at scale',
      'Fewer runtime bugs through static analysis',
      'Clearer contracts across large codebases',
      'Better tooling, autocompletion and refactoring'
    ]
  },
  JavaScript: {
    color: '#F7DF1E',
    points: [
      'The core language of the web platform',
      'Dynamic, interactive front-end behavior',
      'Runs across browser and Node.js environments',
      'Glue between UI, APIs and business logic'
    ]
  },
  Docker: {
    color: '#2496ED',
    points: [
      'Consistent environments from dev to production',
      'Isolated, reproducible application containers',
      'Simplified deployment and scaling',
      'Foundation for CI/CD pipelines'
    ]
  },
  PostgreSQL: {
    color: '#336791',
    points: [
      'Reliable relational data storage',
      'Complex queries with strong data integrity',
      'Scales from prototypes to production workloads',
      'Trusted backbone for critical applications'
    ]
  },
  Redis: {
    color: '#DC382D',
    points: [
      'High-speed in-memory caching',
      'Session storage and rate limiting',
      'Pub/sub and real-time data flows',
      'Reduced load on primary databases'
    ]
  },
  Flutter: {
    color: '#02569B',
    points: [
      'Cross-platform apps from a single codebase',
      'Native-feeling performance and animations',
      'Rapid UI iteration with hot reload',
      'Consistent experience across iOS and Android'
    ]
  },
  Kubernetes: {
    color: '#326CE5',
    points: [
      'Orchestration for containerized workloads',
      'Automated scaling, healing and rollout',
      'Consistent deployments across environments',
      'Production-grade infrastructure reliability'
    ]
  },
  Git: {
    color: '#F05032',
    points: [
      'Version control for every project',
      'Branching workflows for safe collaboration',
      'Clear history and traceable changes',
      'Foundation for CI/CD and code review'
    ]
  }
};
