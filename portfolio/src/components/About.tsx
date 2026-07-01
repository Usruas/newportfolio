import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-xl bg-surface-container-lowest dark:bg-surface-container-low px-gutter">
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-xs rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-xl">
            <div className="space-y-md">
              <h3 className="font-headline-md text-headline-md text-primary">Technical Identity</h3>
              <p className="text-on-surface-variant leading-relaxed text-body-md">
                I am a third-year CS Engineering student with a passion for building scalable web applications and exploring the depths of Artificial Intelligence. My journey started with a fascination for how logic translates into interactive experiences.
              </p>
              
              <div className="bg-surface-container p-md rounded-xl border border-outline-variant/30">
                <h4 className="font-bold mb-xs text-on-surface">Education Highlights</h4>
                <ul className="space-y-xs text-sm text-on-surface-variant">
                  <li className="flex items-center gap-sm">
                    <CheckCircle2 className="text-primary w-4 h-4 shrink-0" />
                    Dean's Honor List 2023
                  </li>
                  <li className="flex items-center gap-sm">
                    <CheckCircle2 className="text-primary w-4 h-4 shrink-0" />
                    Winner, Regional Hackathon
                  </li>
                  <li className="flex items-center gap-sm">
                    <CheckCircle2 className="text-primary w-4 h-4 shrink-0" />
                    Full-Stack Web Dev Certification
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-md">
              <h3 className="font-headline-md text-headline-md text-primary">My Goals</h3>
              <p className="text-on-surface-variant leading-relaxed text-body-md">
                My current objective is to secure a software engineering internship where I can contribute to meaningful projects and refine my expertise in React and Node.js. Long term, I aim to specialize in MLOps and cloud infrastructure.
              </p>
              
              <div className="grid grid-cols-2 gap-md">
                <div className="p-md bg-secondary-container rounded-xl text-on-secondary-container">
                  <span className="font-bold block text-2xl">3.8</span>
                  <span className="text-caption font-caption">Current CGPA</span>
                </div>
                <div className="p-md bg-tertiary-container rounded-xl text-on-tertiary-container">
                  <span className="font-bold block text-2xl">15+</span>
                  <span className="text-caption font-caption">Projects Built</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
