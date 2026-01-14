import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, AlertCircle, CheckCircle } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { methods, phaseLabels, difficultyLabels } from '@/data/methods';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const MethodDetail = () => {
  const { id } = useParams();
  const method = methods.find((m) => m.id === id);
  const { language, t } = useLanguage();

  if (!method) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              {t('methodDetail.notFound')}
            </h1>
            <Link to="/" className="text-primary hover:underline">
              {t('methodDetail.backToHome')}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const phaseClasses = {
    discover: 'phase-discover',
    define: 'phase-define',
    develop: 'phase-develop',
    deliver: 'phase-deliver',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <article className="flex-1">
        {/* Header */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-secondary/30 via-background to-gold-light/20">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              {t('methodDetail.backToHome')}
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className={cn('phase-badge', phaseClasses[method.phase])}>
                {phaseLabels[method.phase][language]}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                {difficultyLabels[method.difficulty][language]} {t('methodDetail.level')}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
              {language === 'en' ? method.name : method.nameThai}
            </h1>
            <p className="text-xl text-muted-foreground">{language === 'en' ? method.nameThai : method.name}</p>

            <div className="flex items-center gap-6 mt-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {method.duration}
              </span>
              <span className="flex items-center gap-2">
                <Users size={18} />
                {method.participants}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl lg:max-w-4xl">
              {/* Description */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {t('methodDetail.overview')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === 'en' ? method.description : (method.descriptionThai || method.description)}
                </p>
              </div>

              {/* Cultural Tip */}
              <div className="cultural-tip mb-12">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-sage-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('methodDetail.culturalTip')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === 'en' ? method.culturalTip : (method.culturalTipThai || method.culturalTip)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  {t('methodDetail.howToFacilitate')}
                </h2>
                <ol className="space-y-4">
                  {(language === 'en' ? method.steps : (method.stepsThai || method.steps)).map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground leading-relaxed pt-1">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Difficulty Indicator */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">{t('methodDetail.facilitationDifficulty')}</h3>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    {[1, 2, 3].map((level) => (
                      <div
                        key={level}
                        className={cn(
                          'w-4 h-4 rounded-full',
                          level <= method.difficulty ? 'bg-primary' : 'bg-muted'
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {difficultyLabels[method.difficulty][language]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  {method.difficulty === 1 && t('methodDetail.beginner')}
                  {method.difficulty === 2 && t('methodDetail.intermediate')}
                  {method.difficulty === 3 && t('methodDetail.advanced')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default MethodDetail;
