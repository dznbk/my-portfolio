import { HiExternalLink, HiPlay } from 'react-icons/hi';
import { SiSpeakerdeck } from 'react-icons/si';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card } from '../common/Card';

interface Talk {
  title: string;
  event: string;
  date: string;
  url: string;
  videoUrl?: string;
  slideUrl?: string;
}

const TALKS: Talk[] = [
  {
    title: 'OpenSearchでレガシーな検索処理の大幅改善をやってやろう',
    event: 'PHPカンファレンス小田原2025',
    date: '2025-04-12',
    url: 'https://fortee.jp/phpconodawara-2025/proposal/6ea31fc2-3799-4a69-86af-aa74d5b3d2d1',
    videoUrl: 'https://www.youtube.com/watch?v=Dm6o02o7pDM',
    slideUrl: 'https://speakerdeck.com/dznbk/opensearchderegasinajian-suo-chu-li-noda-fu-gai-shan-woyatuteyarou',
  },
];

export function Talks() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <SectionWrapper id="talks" className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Talks</h2>

      <div className="space-y-6">
        {TALKS.map((talk) => (
          <Card key={talk.url}>
            <div className="flex flex-col gap-3">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {talk.event} / {formatDate(talk.date)}
              </div>
              <h3 className="text-lg font-semibold">{talk.title}</h3>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={talk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <HiExternalLink className="w-4 h-4" />
                  詳細
                </a>
                {talk.videoUrl && (
                  <a
                    href={talk.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-red-600 dark:text-red-400 hover:underline"
                  >
                    <HiPlay className="w-4 h-4" />
                    動画
                  </a>
                )}
                {talk.slideUrl && (
                  <a
                    href={talk.slideUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    <SiSpeakerdeck className="w-4 h-4" />
                    スライド
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
