import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className = '', href }: Props) {
  const baseClasses =
    'block rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm';

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`${baseClasses} hover:shadow-lg transition-shadow ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
}
