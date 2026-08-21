import { ProjectItem } from '../shared/models/portfolio.models';


export const PROJECTS: ProjectItem[] = [
  {
    num: '01',
    cat: 'Web Platform',
    title: 'JobFlow',
    desc: 'High-volume recruitment platform with real-time applicant matching and interview orchestration.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    images: ['assets/projects/jobflow-hero.png' , 'assets/projects/jobflow-hero.png' , 'assets/projects/jobflow-hero.png'],
    role: [
      'Designed and developed the backend architecture',
      'Implemented real-time applicant matching algorithm',
      'Developed interview orchestration system',
      'Designed REST APIs and database structures'
    ],
    year: '2024',
    cta: 'View Case Study',
    link: '#'
  },

  {
    num: '02',
    cat: 'Internal Tool',
    title: 'Gestion CCL',
    desc: 'A management system built for tracking contracts, clients and operational workflows at scale.',
    tech: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL'],
    images: ['assets/projects/gestion-ccl-hero.png'],
    role: [
      'Developed business management workflows',
      'Built REST APIs with Spring Boot',
      'Developed responsive interfaces with Angular',
      'Integrated and structured PostgreSQL data'
    ],
    year: '2025',
    cta: 'View Case Study',
    link: '#'
  },

  {
    num: '03',
    cat: 'Finance',
    title: 'InvoiceNinja',
    desc: 'Automated invoicing and billing engine with multi-currency support and audit-ready exports.',
    tech: ['Java', 'Spring Boot', 'Redis'],
    images: ['assets/projects/invoiceninja-hero.png'],
    role: [
      'Designed and developed backend services',
      'Implemented automated invoicing workflows',
      'Integrated Redis for caching and performance',
      'Developed reliable billing and data processing logic'
    ],
    year: '2024',
    cta: 'View Case Study',
    link: '#'
  },

  {
    num: '04',
    cat: 'Documents',
    title: 'Documenso',
    desc: 'A document workflow tool for structured review, versioning and approval chains.',
    tech: ['React', 'Node.js', 'Docker'],
    images:[ 'assets/projects/documenso-hero.png'],
    role: [
      'Developed interactive document workflows',
      'Built reusable React components',
      'Implemented document processing features',
      'Containerized the application with Docker'
    ],
    year: '2025',
    cta: 'View Case Study',
    link: '#'
  }
];
