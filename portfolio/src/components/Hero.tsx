import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Link as LinkIcon, Share2, Code } from 'lucide-react';
import HireMeModal from './HireMeModal';
import ContactModal from './ContactModal';

export default function Hero() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-[795px] flex items-center py-xl px-gutter max-w-container-max mx-auto pt-24 md:pt-16">
        <div className="grid md:grid-cols-2 gap-xl items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-display text-on-surface mb-md">
              Computer Science <span className="text-primary">Engineering</span> Student
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed">
              Full-Stack Developer & Machine Learning Enthusiast. Bridging the gap between robust software architecture and intelligent data solutions.
            </p>
            <div className="flex flex-wrap gap-md mb-lg">
              <button 
                onClick={() => setIsHireModalOpen(true)}
                className="bg-primary text-on-primary px-lg py-sm rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
              >
                Hire Me
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="border border-primary text-primary px-lg py-sm rounded-xl font-bold hover:bg-primary/5 transition-all cursor-pointer"
              >
                Contact Me
              </button>
            </div>
            <div className="flex gap-md text-on-surface-variant">
              <a href="#" className="hover:text-primary transition-colors p-2 -ml-2 rounded-full"><Terminal size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-full"><LinkIcon size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-full"><Share2 size={24} /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden rotate-3 border-4 border-primary/20 shadow-2xl transition-transform hover:rotate-0 duration-500 bg-surface-variant">
              <img 
                src="/ashish.png"
                alt="Professional headshot"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-container p-md rounded-2xl shadow-xl animate-bounce hidden md:block">
              <Code className="text-on-primary-container" size={28} />
            </div>
          </motion.div>
        </div>
      </section>

      <HireMeModal 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)} 
      />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
