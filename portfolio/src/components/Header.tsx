import { useState, useEffect } from 'react';
import { Terminal, Moon, Sun, Menu, Home, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check initial system preference or saved preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      <header className="fixed top-0 w-full bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 dark:border-white/5 z-50">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter h-16">
          <div className="flex items-center gap-xs">
            <Terminal className="text-primary dark:text-primary-fixed-dim" size={24} />
            <span className="font-label-mono text-label-mono font-bold tracking-tighter text-primary dark:text-primary-fixed-dim">
              CS_STUDENT
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-lg">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name.toLowerCase())}
                className={
                  activeSection === link.name.toLowerCase()
                    ? 'text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors pb-1'
                }
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-sm">
            <button
              onClick={toggleTheme}
              className="p-xs rounded-full hover:bg-surface-variant transition-colors text-primary dark:text-primary-fixed-dim"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden p-xs text-primary dark:text-primary-fixed-dim"
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-72 bg-surface dark:bg-surface-container-low z-[70] shadow-xl dark:shadow-none md:hidden flex flex-col"
            >
              <div className="p-md border-b border-outline-variant/20">
                <h2 className="font-headline-md text-headline-md font-bold text-primary">Menu</h2>
              </div>
              <nav className="flex flex-col py-sm flex-1 overflow-y-auto">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.name.toLowerCase());
                        setIsDrawerOpen(false);
                      }}
                      className={
                        activeSection === link.name.toLowerCase()
                          ? 'flex items-center gap-md p-md bg-primary-container text-on-primary-container rounded-lg mx-2 my-1'
                          : 'flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant rounded-lg mx-2 my-1 hover:translate-x-1 transition-transform'
                      }
                    >
                      <Icon size={20} />
                      {link.name}
                    </a>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
