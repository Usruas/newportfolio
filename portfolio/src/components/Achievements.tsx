import { motion } from 'motion/react';
import { Award, Trophy, BadgeCheck, Medal } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'Azure Fundamentals',
      subtitle: 'Microsoft',
      icon: Award
    },
    {
      title: 'Hackathon Winner',
      subtitle: 'University 2023',
      icon: Trophy
    },
    {
      title: 'React Advanced',
      subtitle: 'Coursera',
      icon: BadgeCheck
    },
    {
      title: 'Star Coder',
      subtitle: 'CodeChef Rank 3',
      icon: Medal
    }
  ];

  return (
    <section className="py-xl bg-surface-container px-gutter">
      <div className="max-w-container-max mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-headline-lg text-headline-lg text-on-surface mb-xl text-center"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-md bg-surface rounded-xl border border-outline-variant/20 text-center shadow-sm"
              >
                <div className="flex justify-center mb-xs">
                  <Icon className="text-primary" size={32} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-sm text-on-surface">{item.title}</h4>
                <p className="text-caption text-on-surface-variant font-caption">{item.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
