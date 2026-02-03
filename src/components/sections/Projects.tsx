import { HiStar } from 'react-icons/hi';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card } from '../common/Card';
import { useGitHubRepos } from '../../hooks/useGitHubRepos';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  PHP: '#4F5D95',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
};

export function Projects() {
  const { data: repos, isLoading, error } = useGitHubRepos();

  return (
    <SectionWrapper id="projects" className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

      {isLoading && (
        <div className="text-center text-gray-500">Loading...</div>
      )}

      {error && (
        <div className="text-center text-gray-500">
          Failed to load projects
        </div>
      )}

      {repos && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <Card key={repo.id} href={repo.html_url}>
              <h3 className="font-semibold text-lg mb-2 truncate">{repo.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 min-h-[2.5rem]">
                {repo.description || 'No description'}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: LANGUAGE_COLORS[repo.language] || '#888',
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <HiStar className="w-4 h-4" />
                  {repo.stargazers_count}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
