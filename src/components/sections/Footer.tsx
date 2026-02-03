import { SiX, SiGithub, SiZenn } from 'react-icons/si';
import { RiStickyNoteFill } from 'react-icons/ri';
import { SOCIAL_LINKS } from '../../lib/constants';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  X: SiX,
  GitHub: SiGithub,
  Zenn: SiZenn,
  note: RiStickyNoteFill,
};

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <nav className="flex gap-6">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICONS[link.name];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={link.name}
              >
                {Icon && <Icon className="w-5 h-5" />}
              </a>
            );
          })}
        </nav>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} DPon
        </p>
      </div>
    </footer>
  );
}
