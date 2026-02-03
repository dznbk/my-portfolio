import { useQuery } from '@tanstack/react-query';
import type { BlogPost } from '../types';
import { RSS_FEEDS } from '../lib/constants';

const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json';

interface Rss2JsonItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  enclosure?: { link: string };
}

interface Rss2JsonResponse {
  status: string;
  items: Rss2JsonItem[];
}

async function fetchBlogFeeds(): Promise<{ zenn: BlogPost[]; note: BlogPost[] }> {
  const [zennResponse, noteResponse] = await Promise.all([
    fetch(`${RSS2JSON_API}?rss_url=${encodeURIComponent(RSS_FEEDS.zenn)}`),
    fetch(`${RSS2JSON_API}?rss_url=${encodeURIComponent(RSS_FEEDS.note)}`),
  ]);

  const zennData: Rss2JsonResponse = await zennResponse.json();
  const noteData: Rss2JsonResponse = await noteResponse.json();

  const zennPosts: BlogPost[] = (zennData.items || []).map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    thumbnail: item.enclosure?.link || '',
    description: item.description,
    source: 'zenn' as const,
  }));

  const notePosts: BlogPost[] = (noteData.items || []).map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    thumbnail: item.thumbnail || '',
    description: item.description,
    source: 'note' as const,
  }));

  return {
    zenn: zennPosts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()).slice(0, 6),
    note: notePosts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()).slice(0, 6),
  };
}

export function useBlogFeeds() {
  return useQuery({
    queryKey: ['blog-feeds'],
    queryFn: fetchBlogFeeds,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
