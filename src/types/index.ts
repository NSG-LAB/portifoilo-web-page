export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai' | 'web' | 'mobile' | 'backend';
  categoryLabel: string;
  featured?: boolean;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  technologies: string[];
  myContribution: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  badge?: string;
  stats?: { label: string; value: string }[];
  accentColor: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  experience: string;
  category: 'frontend' | 'crossplatform' | 'backend' | 'database' | 'tools';
  icon?: string;
  description: string;
  connectedProjects: string[]; // Project IDs
}

export interface SkillCategory {
  id: 'frontend' | 'crossplatform' | 'backend' | 'database' | 'tools';
  name: string;
  description: string;
  color: string;
  skills: SkillItem[];
}

export interface DroneSpec {
  id: 'delivery' | 'scout';
  name: string;
  subtitle: string;
  description: string;
  role: string;
  status: string;
  specs: {
    motors: string;
    propellers: string;
    flightController: string;
    telemetry: string;
    gps: string;
    esc: string;
    battery: string;
    frame: string;
    onboardComputer: string;
    cameraOrPayload: string;
  };
  metrics: {
    maxSpeed: string;
    flightTime: string;
    payloadCapacity: string;
    allUpWeight: string;
  };
  keyFeatures: string[];
  components: {
    id: string;
    name: string;
    description: string;
    highlightPosition: [number, number, number];
  }[];
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  role: string;
  organization: string;
  description: string;
  category: 'hackathon' | 'garuda' | 'milestone' | 'award';
  skillsGained: string[];
  link?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl: string;
  pdfUrl?: string;
  type?: 'participation' | 'certification';
  skills: string[];
  badgeColor: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics?: string[];
  updated_at: string;
}

export interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}
