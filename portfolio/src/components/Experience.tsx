import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-xl px-gutter max-w-container-max mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Experience</h2>
        <div className="p-xl bg-surface-container-low rounded-[2rem] border border-dashed border-outline/30 flex flex-col items-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-md">
            <Rocket size={32} />
          </div>
          <p className="text-on-surface-variant italic font-body-lg">
            Currently focusing on academic excellence and personal projects. Looking forward to filling this section with my first professional role in industry!
          </p>
          <p className="mt-md font-bold text-primary cursor-pointer hover:underline transition-all">
            Available for internships Summer 2025
          </p>
        </div>
      </motion.div>
    </section>
  );
}
