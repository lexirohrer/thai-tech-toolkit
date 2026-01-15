import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12 mt-auto">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/favicon.svg" alt="Logo" className="w-10 h-10" />
              <span className="font-display font-semibold text-xl">
                {t('nav.designToolkit')}
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  {t('footer.caseStudies')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  {t('footer.aboutProject')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t('footer.acknowledgments')}</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t('footer.acknowledgmentsText')}
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            {t('footer.madeWith')} <Heart size={14} className="text-accent" /> {t('footer.forPractitioners')}
          </p>
        </div>
      </div>
    </footer>
  );
}
