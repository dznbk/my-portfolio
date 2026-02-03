export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics: string[];
}

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  source: 'zenn' | 'note';
}

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  iconDark?: string;
}
