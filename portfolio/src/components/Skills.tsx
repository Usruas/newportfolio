import { motion } from 'motion/react';
import { Braces, Layout, Server, Database, Brain, Settings } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Braces,
      skills: ['C++', 'Python', 'JavaScript'],
    },
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['React', 'HTML5/CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MySQL'],
    },
    {
      title: 'ML / Data',
      icon: Brain,
      skills: ['NumPy', 'Pandas', 'Scikit-learn'],
    },
    {
      title: 'Tools',
      icon: Settings,
      skills: ['Git', 'VS Code', 'Docker'],
    },
  ];

  return (
    <section id="skills" className="py-xl px-gutter max-w-container-max mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-xl"
      >
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Technical Arsenal</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-xs rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-md rounded-2xl border border-outline-variant/30 bg-surface hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-md mb-md">
                <div className="p-sm bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-on-surface">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-xs">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-sm py-xs bg-primary/5 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
