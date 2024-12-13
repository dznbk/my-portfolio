import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "DPon Portfolio" },
    { name: "description", content: "Welcome to my portfolio site!" },
  ];
};

export default function Index() {
  return (
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
          {/* X (旧Twitter) */}
          <a
            href="https://x.com/DPontaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/x-logo.svg"
              alt="X Logo"
              className="w-8 h-8"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/dznbk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/github-mark.svg"
              alt="GitHub Logo"
              className="w-8 h-8 dark:hidden"
            />
            <img
              src="/icons/github-mark-white.svg"
              alt="GitHub Logo (Dark)"
              className="w-8 h-8 hidden dark:block"
            />
          </a>

          {/* Zenn */}
          <a
            href="https://zenn.dev/d_pontaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/zenn-logo.svg"
              alt="Zenn Logo"
              className="w-8 h-8 dark:hidden"
            />
            <img
              src="/icons/zenn-logo-white.svg"
              alt="Zenn Logo (Dark)"
              className="w-8 h-8 hidden dark:block"
            />
          </a>

          {/* Note */}
          <a
            href="https://note.com/ponpon63"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/note-logo.svg"
              alt="Note Logo"
              className="w-8 h-8 dark:hidden"
            />
            <img
              src="/icons/note-logo-white.svg"
              alt="Note Logo (Dark)"
              className="w-8 h-8 hidden dark:block"
            />
          </a>
        </nav>
      </div>
  );
}
