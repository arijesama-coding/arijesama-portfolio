import { ProjectItem } from '../shared/models/portfolio.models';

export const PROJECTS: ProjectItem[] = [
  {
    num: '01',
    cat: 'Web Platform',
    title: 'JobFlow',
    desc: 'High-volume recruitment platform with real-time applicant matching and interview orchestration.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL']
  },
  {
    num: '02',
    cat: 'Internal Tool',
    title: 'Gestion CCL',
    desc: 'A management system built for tracking contracts, clients and operational workflows at scale.',
    tech: ['Angular', 'TypeScript', 'PostgreSQL']
  },
  {
    num: '03',
    cat: 'Finance',
    title: 'InvoiceFlow',
    desc: 'Automated invoicing and billing engine with multi-currency support and audit-ready exports.',
    tech: ['Java', 'Spring Boot', 'Redis']
  },
  {
    num: '04',
    cat: 'Documents',
    title: 'Documenso',
    desc: 'A document workflow tool for structured review, versioning and approval chains.',
    tech: ['React', 'Node.js', 'Docker']
  },

];
