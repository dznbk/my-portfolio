import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { SiX, SiGithub, SiZenn } from 'react-icons/si';
import { RiStickyNoteFill } from 'react-icons/ri';
import avatar from '../../assets/avatar.jpg';
import { SOCIAL_LINKS } from '../../lib/constants';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  X: SiX,
  GitHub: SiGithub,
  Zenn: SiZenn,
  note: RiStickyNoteFill,
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-200% animate-gradient" />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
        <motion.img
          src={avatar}
          alt="DPon"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/50 shadow-2xl"
        />

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          DPon
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-md"
        >
          Web Developer
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 mt-2"
        >
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICONS[link.name];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label={link.name}
              >
                {Icon && <Icon className="w-5 h-5 text-white" />}
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 z-10"
      >
        <HiChevronDown className="w-8 h-8 text-white animate-bounce-slow" />
      </motion.a>
    </section>
  );
}
