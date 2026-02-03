import { HiArrowRight } from 'react-icons/hi';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card } from '../common/Card';
import { useBlogFeeds } from '../../hooks/useBlogFeeds';
import { SOCIAL_LINKS } from '../../lib/constants';

export function Blog() {
  const { data, isLoading, error } = useBlogFeeds();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const zennUrl = SOCIAL_LINKS.find((l) => l.name === 'Zenn')?.url;
  const noteUrl = SOCIAL_LINKS.find((l) => l.name === 'note')?.url;

  return (
    <SectionWrapper id="blog" className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Blog</h2>

      {isLoading && (
        <div className="text-center text-gray-500">Loading...</div>
      )}

      {error && (
        <div className="text-center text-gray-500">
          Failed to load blog posts
        </div>
      )}

      {data && (
        <div className="space-y-12">
          {/* Zenn Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Zenn
              </h3>
              {zennUrl && (
                <a
                  href={zennUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  もっと見る
                  <HiArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.zenn.map((post) => (
                <Card key={post.link} href={post.link}>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {formatDate(post.pubDate)}
                  </div>
                  <h4 className="font-semibold line-clamp-2">{post.title}</h4>
                </Card>
              ))}
            </div>
          </div>

          {/* note Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                note
              </h3>
              {noteUrl && (
                <a
                  href={noteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 hover:underline"
                >
                  もっと見る
                  <HiArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.note.map((post) => (
                <Card key={post.link} href={post.link}>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {formatDate(post.pubDate)}
                  </div>
                  <h4 className="font-semibold line-clamp-2">{post.title}</h4>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
