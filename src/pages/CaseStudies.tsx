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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary/30 via-background to-gold-light/20">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl lg:max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-6">{t('caseStudy.fulbrightResearch')}</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{t('caseStudy.title')}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('caseStudy.subtitle')}</p>
          </div>
        </div>
      </section>
      <section className="py-12 flex-1">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study) => (<CaseStudyCard key={study.id} study={study} />))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudies;
