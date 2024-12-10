import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "DPon Portfolio" },
    { name: "description", content: "Welcome to my portfolio site!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-6">          
          <img
            src="https://avatars.githubusercontent.com/u/46421953?s=400&u=1b23f1b6b3b69d51ffb9fb23e3ec7f1683161347&v=4"
            alt="Your Avatar"
            className="w-32 h-32 rounded-full border-2 border-gray-200 dark:border-gray-700"
          />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            エンジニア | Webアプリ開発者 | 学習中のフロントエンド
          </p>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            Links
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                className="text-blue-700 hover:underline dark:text-blue-500"
                href="https://x.com/DPontaro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="text-blue-700 hover:underline dark:text-blue-500"
                href="https://github.com/dznbk"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="text-blue-700 hover:underline dark:text-blue-500"
                href="https://zenn.dev/d_pontaro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zenn
              </a>
            </li>
            <li>
              <a
                className="text-blue-700 hover:underline dark:text-blue-500"
                href="https://note.com/ponpon63/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Note
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
