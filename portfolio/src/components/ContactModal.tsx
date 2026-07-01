import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const contactOptions = [
    { 
      title: 'WhatsApp', 
      desc: 'Click to start a chat', 
      url: 'https://wa.me/919508626090', 
      icon: MessageCircle, 
      color: 'text-[#25D366] bg-[#25D366]/10 group-hover:bg-[#25D366] group-hover:text-white',
      borderColor: 'hover:border-[#25D366]/50',
    },
    { 
      title: 'Phone Number', 
      desc: 'Click to call', 
      url: 'tel+9508626090', 
      icon: Phone, 
      color: 'text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white',
      borderColor: 'hover:border-primary/50',
    },
    { 
      title: 'Email', 
      desc: 'Click to compose an email', 
      url: 'mailto:kiashishroy09@gmail.com', 
      icon: Mail, 
      color: 'text-tertiary bg-tertiary/10 group-hover:bg-tertiary group-hover:text-white',
      borderColor: 'hover:border-tertiary/50',
    },
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
              <h3 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-bold text-on-surface">Get In Touch</h3>
              <button onClick={onClose} className="p-sm bg-surface-container hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors cursor-pointer">
                <X size={20} />
              </button>
            </div>
            <p className="text-on-surface-variant mb-lg font-body-md">
              Feel free to reach out through any of these channels.
            </p>
            
            <div className="grid gap-sm overflow-y-auto pb-4 pr-2 -mr-2">
              {contactOptions.map((option, i) => {
                const Icon = option.icon;
                return (
                  <motion.a
                    key={option.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-md rounded-2xl border border-outline-variant/30 ${option.borderColor} bg-surface dark:bg-surface-container-low hover:shadow-md transition-all hover:-translate-y-1 active:translate-y-0`}
                  >
                    <div className="flex items-center gap-md">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${option.color}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{option.title}</h4>
                        <p className="text-caption text-on-surface-variant">{option.desc}</p>
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
