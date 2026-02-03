import { useQuery } from '@tanstack/react-query';
import type { GitHubRepo } from '../types';
import { GITHUB_USERNAME } from '../lib/constants';

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repos');
  }

  return response.json();
}

export function useGitHubRepos() {
  return useQuery({
    queryKey: ['github-repos', GITHUB_USERNAME],
    queryFn: fetchGitHubRepos,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
