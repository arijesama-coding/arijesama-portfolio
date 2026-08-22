import { ProjectItem } from '../shared/models/portfolio.models';

export const PROJECTS: ProjectItem[] = [
  {
    num: '01',
    cat: 'Management Platform',
    title: 'JobFlow',
    desc: 'Web platform designed to centralize job management, scheduling, team coordination, workflows and operational activities.',
    images: [
      'assets/projects/jobflow-hero.png'
    ],
    role: [
      'Developed and maintained core platform features',
      'Built and improved web interfaces and user workflows',
      'Designed and integrated application services and APIs',
      'Worked on data management and application reliability'
    ],
    year: '2026',
    cta: 'Visit Website',
    link: 'https://jobflow.com'
  },

  {
    num: '02',
    cat: 'Management Platform',
    title: 'Gestion CCL',
    desc: 'Management platform developed for the Complexe Culturel et de Loisirs Vontovorona, focused on business workflows, data management and operational activities.',
    images: [],
    role: [
      'Developed and maintained core business features',
      'Built and improved web interfaces',
      'Designed and integrated application services and APIs',
      'Worked on data management, testing and application reliability'
    ],
    year: '2025',
    cta: '#',
    link: '#'
  },

  {
    num: '03',
    cat: 'SaaS Platform',
    title: 'InvoiceNinja',
    desc: 'SaaS business platform focused on invoicing, payments, project management, client management and billing workflows.',
    images: [
      'assets/projects/invoiceninja-hero.png'
    ],
    role: [
      'Developed and maintained business-oriented platform features',
      'Built and improved web interfaces and user workflows',
      'Worked on billing, invoicing and business processes',
      'Contributed to application reliability and data management'
    ],
    year: '2025',
    cta: 'Visit Website',
    link: 'https://invoiceninja.com'
  },

  {
    num: '04',
    cat: 'E-Signature Platform',
    title: 'Documenso',
    desc: 'Document signing platform focused on electronic signatures, document workflows, templates, recipients and digital approval processes.',
    images: [
      'assets/projects/documenso-hero.png'
    ],
    role: [
      'Developed and maintained document workflow features',
      'Built and improved user interfaces and signing experiences',
      'Worked on document management and business processes',
      'Contributed to application reliability and data management'
    ],
    year: '2024',
    cta: 'Visit Website',
    link: 'https://documenso.com'
  }
];
