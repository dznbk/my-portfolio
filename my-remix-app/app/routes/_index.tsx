import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

type SocialLink = {
  name: string;
  url: string;
  lightIcon: string;
  darkIcon?: string;
  alt: string;
};

const socialLinks: SocialLink[] = [
  {
    name: 'X',
    url: 'https://x.com/DPontaro',
    lightIcon: '/icons/x-logo.svg',
    alt: 'X Logo'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/dznbk',
    lightIcon: '/icons/github-mark.svg',
    darkIcon: '/icons/github-mark-white.svg',
    alt: 'GitHub Logo'
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/d_pontaro',
    lightIcon: '/icons/zenn-logo.svg',
    darkIcon: '/icons/zenn-logo-white.svg',
    alt: 'Zenn Logo'
  },
  {
    name: 'Note',
    url: 'https://note.com/ponpon63',
    lightIcon: '/icons/note-logo.svg',
    darkIcon: '/icons/note-logo-white.svg',
    alt: 'Note Logo'
  }
];

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div 
      className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transition: 'all 0.1s ease-out'
      }}
    />
  );
};

const SocialIcon = ({ link }: { link: SocialLink }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${link.name}`}
  >
    <img
      src={link.lightIcon}
      alt={link.alt}
      className={`w-8 h-8 ${link.darkIcon ? 'dark:hidden' : ''}`}
    />
    {link.darkIcon && (
      <img
        src={link.darkIcon}
        alt={`${link.alt} (Dark)`}
        className="w-8 h-8 hidden dark:block"
      />
    )}
  </a>
);

export const meta: MetaFunction = () => {
  return [
    { title: "DPon Portfolio" },
    { name: "description", content: "Welcome to my portfolio site!" },
  ];
};

export default function Index() {
  return (
    <>
      <CustomCursor />
      <div className="flex flex-col items-center gap-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
        <img
          src="/avatar.png"
          alt="Your Avatar"
          className="w-32 h-32 rounded-full border-4 border-gray-200 dark:border-gray-700"
        />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          I'm DPon
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
          エンジニア | Webアプリ開発者
        </p>
        <nav className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <SocialIcon key={link.name} link={link} />
          ))}
        </nav>
      </div>
    </>
  );
}
