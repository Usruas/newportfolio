export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20 dark:border-white/5 py-xl">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="flex flex-col gap-xs items-center md:items-start">
          <span className="font-label-mono text-label-mono font-bold text-on-surface">CS_STUDENT</span>
          <p className="font-caption text-caption text-on-secondary-container">© {new Date().getFullYear()} DevPortfolio. Built with precision.</p>
        </div>
        <div className="flex gap-lg">
          <a href="#" className="text-on-secondary-container hover:text-primary transition-colors font-caption text-caption">GitHub</a>
          <a href="#" className="text-on-secondary-container hover:text-primary transition-colors font-caption text-caption">LinkedIn</a>
          <a href="#" className="text-on-secondary-container hover:text-primary transition-colors font-caption text-caption">Twitter</a>
          <a href="#" className="text-primary underline font-caption text-caption hover:text-primary-container transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  );
}
