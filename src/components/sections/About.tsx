import { SectionWrapper } from '../common/SectionWrapper';

export function About() {
  return (
    <SectionWrapper id="about" className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About</h2>

      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
        Webアプリケーション開発を中心に活動しているエンジニアです。
        バックエンドからインフラまで幅広く対応しています。
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {['バックエンド開発', 'API設計', 'インフラ構築', 'チーム開発'].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}
