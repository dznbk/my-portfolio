import avatar from '../assets/avatar.png';

function Header() {
  return (
    <header className="flex flex-col items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
      <img
        src={avatar}
        alt="Your Avatar"
        className="w-32 h-32 rounded-full border-4 border-gray-200 dark:border-gray-700"
      />
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">I'm DPon</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
        エンジニア | Webアプリ開発者
      </p>
    </header>
  );
}

export default Header;
