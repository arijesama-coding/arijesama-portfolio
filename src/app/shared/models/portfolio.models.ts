export interface StackItem {
  name: string;
  cat: string;
  icon: string;
}

export interface ProjectItem {
  num: string;
  cat: string;
  title: string;
  desc: string;
  tech: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  desc: string;
  tech: string[];
}

export interface StatItem {
  num: string;
  label: string;
}

export interface WhyItem {
  num: string;
  title: string;
  desc: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
}
