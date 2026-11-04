export type Language = 'en' | 'es';

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  title: Record<Language, string>;
  heroHeading: Record<Language, string>;
  heroSubheading: Record<Language, string>;
  heroIntro: Record<Language, string>;
  location: Record<Language, string>;
  statusBadge: Record<Language, string>;
  cvFilename: string;
  aboutText: Record<Language, string[]>;
  quickHighlights: Record<Language, { label: string; value: string; description: string }[]>;
}

export interface ExperienceItem {
  id: string;
  role: Record<Language, string>;
  company: string;
  period: Record<Language, string>;
  location: Record<Language, string>;
  type: Record<Language, string>;
  summary: Record<Language, string>;
  responsibilities: Record<Language, string[]>;
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: Record<Language, string>;
  institution: string;
  period: string;
  location: Record<Language, string>;
  level: Record<Language, string>;
  description: Record<Language, string>;
  highlights: Record<Language, string[]>;
  statusBadge?: Record<Language, string>;
}

export type ProjectCategory = 'all' | 'ai-ml' | 'fullstack' | 'data';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: Record<Language, string>;
  shortDescription: Record<Language, string>;
  longDescription: Record<Language, string>;
  technologies: string[];
  visualType: 'btc-forecast' | 'fullstack-arch' | 'data-analytics';
  githubUrl: string | null;
  liveDemoUrl: string | null;
  status: Record<Language, string>;
  academicContext?: Record<Language, string>;
  features: Record<Language, string[]>;
  isPlaceholderUrl?: boolean;
}

export interface SkillCategory {
  id: string;
  title: Record<Language, string>;
  icon: string;
  skills: {
    name: string;
    levelHint?: Record<Language, string>;
    featured?: boolean;
  }[];
}
