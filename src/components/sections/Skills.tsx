import { motion } from 'framer-motion';
import { SectionWrapper } from '../common/SectionWrapper';
import { SKILL_CATEGORIES } from '../../lib/constants';

export function Skills() {
  return (
    <SectionWrapper id="skills" className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="space-y-10">
        {SKILL_CATEGORIES.map((category, categoryIndex) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
