import { ServiceItem } from '../shared/models/portfolio.models';

export const SERVICES: ServiceItem[] = [
  { title: 'Mobile Development', desc: 'Cross-platform React Native and Flutter apps, plus native Android and iOS, built for performance.' },
  { title: 'Real-Time & Push', desc: 'WebSockets, push notifications (FCM, APNs) and live data for critical alerts.' },
  { title: 'Offline & Sync', desc: 'Offline-first mobile experiences with reliable SQLite data synchronization.' },
  { title: 'API & Backend', desc: 'Secure REST APIs and live services with Go, Java Spring Boot and Python.' },
  { title: 'Quality & Testing', desc: 'Automated testing (Jest, Detox), profiling and crash reporting for stable apps.' },
  { title: 'Mobile CI/CD', desc: 'GitLab CI, GitHub Actions and Fastlane for fast, repeatable store releases.' }
];
