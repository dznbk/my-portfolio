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
        <nav className="flex flex-col items-center justify-center gap-4">
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
                href="https://note.com/ponpon63"
                target="_blank"
                rel="noopener noreferrer"
              >
                note
              </a>
            </li>
          </ul>
        </nav>
      </div>
  );
}
