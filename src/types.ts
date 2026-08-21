export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  status?: 'Current' | 'Completed';
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  scoreOrDetail?: string;
  focus?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  tahirAuthorName: string;
  journal: string;
  volume: string;
  pages: string;
  year: string;
  month: string;
  proceedings?: string;
  doi: string;
  url: string;
  abstractSnippet: string;
  tags: string[];
  bibtex: string;
}

export interface CourseItem {
  id: string;
  title: string;
  code?: string;
  description: string;
  topics: string[];
  level: string;
  iconName: string;
}

export interface PatentItem {
  id: string;
  title: string;
  applicationNumber: string;
  filingYear: string;
  status: string;
  category: 'AI & Healthcare' | 'IoT & Smart City' | 'CleanTech' | 'Security & Blockchain' | 'Automation & Robotics' | 'AgriTech';
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'M.Tech Dissertation' | 'B.Tech Major Project';
  description: string;
  techStack: string[];
  metrics: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'FDP' | 'Certification';
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  keywords: string[];
}
