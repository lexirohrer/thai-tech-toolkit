import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';
import { useLanguage } from '@/contexts/LanguageContext';

const CaseStudies = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-secondary/30 via-background to-gold-light/20">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary rounded-full text-secondary-foreground text-xs sm:text-sm font-medium mb-4 sm:mb-6">{t('caseStudy.fulbrightResearch')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">{t('caseStudy.title')}</h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{t('caseStudy.subtitle')}</p>
        </div>
      </section>
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-12 flex-1">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study) => (<CaseStudyCard key={study.id} study={study} />))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudies;
