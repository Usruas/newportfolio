import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-xl px-gutter max-w-container-max mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-xl"
      >
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Education</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-xs rounded-full"></div>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-md">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-md bg-surface border border-outline-variant/30 rounded-2xl flex gap-md items-start shadow-sm"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
            <GraduationCap size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-on-surface">Bachelor of Technology in Computer Science</h3>
            <p className="text-on-surface-variant">Global Institute of Engineering & Technology</p>
            <div className="flex flex-wrap gap-4 justify-between mt-sm text-sm text-primary font-bold">
              <span>Graduation: 2026</span>
              <span>GPA: 3.8/4.0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
