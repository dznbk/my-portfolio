import twitterLogo from '../assets/x-logo.svg';
import githubLogo from '../assets/github-mark.svg';
import githubLogoDark from '../assets/github-mark-white.svg';
import zennLogo from '../assets/zenn-logo.svg';
import zennLogoDark from '../assets/zenn-logo-white.svg';
import noteLogo from '../assets/note-logo.svg';
import noteLogoDark from '../assets/note-logo-white.svg';

function Links() {
  return (
    <nav className="flex justify-center gap-6">
        {/* X (旧Twitter) */}
        <a
            href="https://x.com/DPontaro"
            target="_blank"
            rel="noopener noreferrer"
        >
        <img
            src={twitterLogo}
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
            src={githubLogo}
            alt="GitHub Logo"
            className="w-8 h-8 dark:hidden"
        />
        <img
            src={githubLogoDark}
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
            src={zennLogo}
            alt="Zenn Logo"
            className="w-8 h-8 dark:hidden"
        />
        <img
            src={zennLogoDark}
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
            src={noteLogo}
            alt="Note Logo"
            className="w-8 h-8 dark:hidden"
        />
        <img
            src={noteLogoDark}
            alt="Note Logo (Dark)"
            className="w-8 h-8 hidden dark:block"
        />
        </a>
    </nav>
);
}

export default Links;
