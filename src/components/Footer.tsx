import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">DT</span>
              </div>
              <span className="font-display font-semibold text-xl">
                Design Toolkit
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A collection of culturally-adapted design research methods for Thai practitioners, 
              developed through Fulbright research.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/methods" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Methods
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  About This Project
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Acknowledgments</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              This toolkit was developed as part of a Fulbright research project in collaboration 
              with Thai universities and community organizations.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Design Toolkit. Open for adaptation and use.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-accent" /> for Thai research practitioners
          </p>
        </div>
      </div>
    </footer>
  );
}
