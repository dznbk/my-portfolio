import {
  SiPhp,
  SiLaravel,
  SiTypescript,
  SiNestjs,
  SiPrisma,
  SiMysql,
  SiRedis,
  SiOpensearch,
  SiAmazonwebservices,
  SiTerraform,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiReact,
  SiRemix,
} from 'react-icons/si';
import type { SkillCategory } from '../types';

export const GITHUB_USERNAME = 'dznbk';

export const RSS_FEEDS = {
  zenn: 'https://zenn.dev/d_pontaro/feed',
  note: 'https://note.com/ponpon63/rss',
} as const;

export const SOCIAL_LINKS = [
  { name: 'X', url: 'https://x.com/DPontaro' },
  { name: 'GitHub', url: 'https://github.com/dznbk' },
  { name: 'Zenn', url: 'https://zenn.dev/d_pontaro' },
  { name: 'note', url: 'https://note.com/ponpon63' },
] as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Prisma', icon: SiPrisma },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: SiRedis },
      { name: 'OpenSearch', icon: SiOpensearch },
    ],
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'AWS', icon: SiAmazonwebservices },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Docker', icon: SiDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'GitHub Actions', icon: SiGithubactions },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Remix', icon: SiRemix },
    ],
  },
];
