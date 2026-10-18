import { ExperienceItem } from '../shared/models/portfolio.models';

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Jan. 2026 — Sep. 2026',
    role: { fr: 'Développeur Backend & Mobile', en: 'Backend & Mobile Developer' },
    company: { fr: 'Zettabyte — À distance', en: 'Zettabyte — Remote' },
    desc: {
      fr: 'Développement d’une application React Native (Android, iOS, web) pour les alarmes, les événements et le ticketing, avec des API REST sécurisées (OAuth2/JWT), du temps réel et des notifications push (WebSockets, FCM, APNs), un mode hors-ligne avec synchronisation SQLite, ainsi qu’un service live en Go, des API Spring Boot et un modèle Python d’IA côté backend.',
      en: 'Built a React Native app (Android, iOS, web) for alarms, events and ticketing, with secure REST APIs (OAuth2/JWT), real-time updates and push notifications (WebSockets, FCM, APNs), an offline mode with SQLite synchronization, plus a live Go service, Spring Boot APIs and a Python AI model on the backend.'
    },
    tech: ['React Native', 'Go', 'Spring Boot', 'Python', 'SQLite', 'GitLab CI/CD']
  },

  {
    period: 'Jun. 2025 — Dec. 2025',
    role: { fr: 'Développeur junior (stage)', en: 'Junior Developer (Internship)' },
    company: { fr: 'CNaPS Madagascar — Antananarivo', en: 'CNaPS Madagascar — Antananarivo' },
    desc: {
      fr: 'Développement d’écrans Android en Kotlin à partir de maquettes Figma, écriture de tests unitaires et correction des bugs signalés par le QA, au sein d’une équipe en sprints Agile avec revues de code sur Git.',
      en: 'Developed Android screens in Kotlin from Figma mockups, wrote unit tests and fixed bugs reported by QA, within an Agile sprint team with code reviews on Git.'
    },
    tech: ['Kotlin', 'Android', 'Figma', 'Unit tests', 'Git', 'Agile']
  },

  {
    period: 'Jul. 2024 — Aug. 2025',
    role: { fr: 'Développeur Mobile', en: 'Mobile Developer' },
    company: { fr: 'Slite — Paris, France · À distance', en: 'Slite — Paris, France · Remote' },
    desc: {
      fr: 'Réalisation de 4 applications en Flutter et Android natif (Kotlin), de la maquette à la publication, en collaboration avec l’UI/UX, le backend et le QA en sprints Agile, avec des revues de code sur Git et la correction des problèmes de performance et de crash grâce au profiling et au crash reporting.',
      en: 'Built 4 apps in Flutter and native Android (Kotlin), from mockup to store release, collaborating with UI/UX, backend and QA in Agile sprints, with code reviews on Git and fixes for performance issues and crashes using profiling and crash reporting.'
    },
    tech: ['Flutter', 'Kotlin', 'Android', 'Crashlytics', 'Git', 'Agile/Scrum']
  }
];
