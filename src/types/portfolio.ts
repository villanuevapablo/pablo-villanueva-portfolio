export type Language = 'en' | 'es';

export type ProjectCategory =
  | 'all'
  | 'ai-ml'
  | 'backend-security'
  | 'automation'
  | 'iot'
  | 'data';

export type CaseStudyVariant =
  | 'dark-research'
  | 'dossier-spec'
  | 'pipeline-monograph'
  | 'hardware-schematic'
  | 'data-notebook';

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface InterestArea {
  id: string;
  label: Record<Language, string>;
  note: Record<Language, string>;
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  initials: string;
  avatarUrl: string;
  publicationName: string;
  title: Record<Language, string>;
  editorialSummary: Record<Language, string>;
  interests: InterestArea[];
  location: Record<Language, string>;
  availability: Record<Language, string>;
  statusBadge: Record<Language, string>;
  cvFilename: {
    en: string;
    es: string;
  };
  aboutParagraphs: Record<Language, string[]>;
  problemSolvingApproach: Record<Language, string>;
  languagesSpoken: Record<Language, string>;
  otherDetails: Record<Language, string[]>;
}

export interface ExperienceItem {
  id: string;
  role: Record<Language, string>;
  company: string;
  period: Record<Language, string>;
  location: Record<Language, string>;
  type: Record<Language, string>;
  contextNote?: Record<Language, string>;
  summary: Record<Language, string>;
  responsibilities: Record<Language, string[]>;
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: Record<Language, string>;
  institution: string;
  period: Record<Language, string>;
  location: Record<Language, string>;
  level: Record<Language, string>;
  grade?: Record<Language, string>;
  description: Record<Language, string>;
  highlights: Record<Language, string[]>;
  uncertaintyFlag?: Record<Language, string>;
}

export interface ProjectCaseStudy {
  introduction: Record<Language, string>;
  theChallenge: Record<Language, string>;
  theSolution: Record<Language, string>;
  architecture: {
    summary: Record<Language, string>;
    modules: {
      name: string;
      role: Record<Language, string>;
    }[];
    codeSnippet?: {
      filename: string;
      language: string;
      code: string;
    };
  };
  engineeringDecisions: {
    decision: Record<Language, string>;
    rationale: Record<Language, string>;
  }[];
  challenges: Record<Language, string[]>;
  resultsAndLearnings: {
    results: Record<Language, string[]>;
    limitations: Record<Language, string[]>;
  };
}

export interface ProjectItem {
  id: string;
  issueNumber: string;
  title: string;
  subtitle: Record<Language, string>;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: Record<Language, string>;
  editorialVariant: CaseStudyVariant;
  grade?: string;
  year: string;
  shortDescription: Record<Language, string>;
  technologies: string[];
  visualType:
    | 'btc-forecast'
    | 'srms-security'
    | 'smart-organizer'
    | 'iot-edge'
    | 'preflop-hero';
  githubUrl: string;
  liveDemoUrl: string | null;
  status: Record<Language, string>;
  academicContext?: Record<Language, string>;
  caseStudy: ProjectCaseStudy;
}

export interface EngineeringNote {
  id: string;
  number: string;
  title: Record<Language, string>;
  date: string;
  topic: Record<Language, string>;
  readingTime: string;
  shortIntro: Record<Language, string>;
  explanation: Record<Language, string[]>;
  codeOrDiagram: {
    label: Record<Language, string>;
    snippet: string;
  };
  whatILearned: Record<Language, string>;
  relatedProjectId: string;
  relatedProjectTitle: string;
}

export interface QueuedNoteTopic {
  id: string;
  topic: Record<Language, string>;
  workingTitle: Record<Language, string>;
  plannedScope: Record<Language, string>;
}

export interface ToolkitSkill {
  name: string;
  evidence: Record<Language, string>;
  tier: 'primary' | 'academic';
}

export interface ToolkitCategory {
  id: string;
  number: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  skills: ToolkitSkill[];
}
