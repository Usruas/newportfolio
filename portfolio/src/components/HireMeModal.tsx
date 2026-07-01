import { motion, AnimatePresence } from 'motion/react';
import { X, Linkedin, Github, Globe, Briefcase, Monitor, Mail, ArrowUpRight } from 'lucide-react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const platforms = [
    { name: 'LinkedIn', desc: 'Professional Profile', url: 'https://www.linkedin.com/in/ashish-roy-424a92324?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: Linkedin, color: 'text-[#0077b5] bg-[#0077b5]/10 group-hover:bg-[#0077b5] group-hover:text-white', borderColor: 'hover:border-[#0077b5]/50' },
    { name: 'GitHub', desc: 'View My Code', url: 'https://github.com/Usruas', icon: Github, color: 'text-on-surface bg-on-surface/10 group-hover:bg-on-surface group-hover:text-surface', borderColor: 'hover:border-on-surface/50' },
    { name: 'Portfolio Website', desc: 'Interactive Resume', url: 'https://your-portfolio-website.com', icon: Globe, color: 'text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white', borderColor: 'hover:border-primary/50' },
    { name: 'Fiverr', desc: 'Freelance Services', url: 'https://fiverr.com/your-username', icon: Briefcase, color: 'text-[#1dbf73] bg-[#1dbf73]/10 group-hover:bg-[#1dbf73] group-hover:text-white', borderColor: 'hover:border-[#1dbf73]/50' },
    { name: 'Upwork', desc: 'Hire for Projects', url: 'https://upwork.com/freelancers/your-profile', icon: Monitor, color: 'text-[#14a800] bg-[#14a800]/10 group-hover:bg-[#14a800] group-hover:text-white', borderColor: 'hover:border-[#14a800]/50' },
    { name: 'Email', desc: 'Direct Inquiry', url: 'mailto:hello@example.com', icon: Mail, color: 'text-tertiary bg-tertiary/10 group-hover:bg-tertiary group-hover:text-white', borderColor: 'hover:border-tertiary/50' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full sm:max-w-[32rem] bg-surface/95 dark:bg-surface-container-lowest/95 backdrop-blur-2xl border border-outline-variant/30 rounded-t-[2rem] sm:rounded-3xl shadow-2xl p-lg flex flex-col max-h-[90vh] pointer-events-auto z-10"
          >
            <div className="flex justify-between items-center mb-sm">
              <h3 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-bold text-on-surface">Let's Work Together</h3>
              <button onClick={onClose} className="p-sm bg-surface-container hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors cursor-pointer">
                <X size={20} />
              </button>
            </div>
            <p className="text-on-surface-variant mb-lg font-body-md">
              Choose your preferred platform to connect with me.
            </p>
            <div className="grid gap-sm overflow-y-auto pb-4 pr-2 -mr-2">
              {platforms.map((platform, i) => {
                const Icon = platform.icon;
                return (
                  <motion.a
                    key={platform.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-md rounded-2xl border border-outline-variant/30 ${platform.borderColor} bg-surface dark:bg-surface-container-low hover:shadow-md transition-all hover:-translate-y-1 active:translate-y-0`}
                  >
                    <div className="flex items-center gap-md">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${platform.color}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{platform.name}</h4>
                        <p className="text-caption text-on-surface-variant">{platform.desc}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-on-surface-variant">
                      <ArrowUpRight size={16} />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}