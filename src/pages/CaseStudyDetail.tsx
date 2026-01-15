import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, CheckCircle, Lightbulb } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { caseStudies } from '@/data/caseStudies';
import { useLanguage } from '@/contexts/LanguageContext';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);
  const { language, t } = useLanguage();

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              {t('caseStudy.notFound')}
            </h1>
            <Link to="/case-studies" className="text-primary hover:underline">
              {t('caseStudyDetail.backToCaseStudies')}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <article className="flex-1">
        {/* Header */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-secondary/30 via-background to-gold-light/20">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft size={18} />
                {t('caseStudyDetail.backToCaseStudies')}
              </Link>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span>{study.location}</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} className="flex-shrink-0" />
                  <span>{study.duration}</span>
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
                {language === 'en' ? study.title : study.titleThai}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">{language === 'en' ? study.titleThai : study.title}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {study.methods.map((method) => (
                  <span
                    key={method}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              {/* Summary */}
              <div className="mb-10 sm:mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  {t('caseStudy.summary')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {language === 'en' ? study.summary : (study.summaryThai || study.summary)}
                </p>
                {study.id === 'muvmi-tuk-tuks' && (
                  <div className="mt-6">
                    <img src="/MuvMi.png" alt="MuvMi" className="w-full h-auto rounded-lg" />
                  </div>
                )}
              </div>

              {/* Challenge */}
              <div className="mb-10 sm:mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  {t('caseStudy.theChallenge')}
                </h2>
                <p className="text-base sm:text-base text-muted-foreground leading-relaxed">
                  {language === 'en' ? study.challenge : (study.challengeThai || study.challenge)}
                </p>
                {study.id === 'smart-pole-motorbike-taxi' && (
                  <div className="mt-6">
                    <img src="/smart-station-mapview.png" alt="Smart Station Map View" className="w-full h-auto rounded-lg" />
                  </div>
                )}
              </div>

              {/* Approach */}
              <div className="mb-10 sm:mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  {t('caseStudy.ourApproach')}
                </h2>
                <p className="text-base sm:text-base text-muted-foreground leading-relaxed">
                  {language === 'en' ? study.approach : (study.approachThai || study.approach)}
                </p>
                {study.id === 'muvmi-tuk-tuks' && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="/MuvMi-pps.png" alt="MuvMi Paper Prototyping" className="w-full h-auto rounded-lg" />
                    <img src="/MuvMi-workshop.png" alt="MuvMi Workshop" className="w-full h-auto rounded-lg" />
                  </div>
                )}
                {study.id === 'bridgebox-disaster-response' && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="/BBx_Songkhla1.png" alt="BridgeBox Songkhla" className="w-full h-auto rounded-lg" />
                    <img src="/BBx_workshop1.png" alt="BridgeBox Workshop" className="w-full h-auto rounded-lg" />
                  </div>
                )}
                {study.id === 'clean-energy-solar' && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="/process1.png" alt="Clean Energy Process 1" className="w-full h-auto rounded-lg" />
                    <img src="/process2.png" alt="Clean Energy Process 2" className="w-full h-auto rounded-lg" />
                  </div>
                )}
                {study.id === 'smart-pole-motorbike-taxi' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <img src="/smart-station-parts.png" alt="Smart Station Parts" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <img src="/Writing-ex.jpeg" alt="Writing Exercise" className="w-full h-auto rounded-lg" />
                      <img src="/worksheet-ex.jpeg" alt="Worksheet Example" className="w-full h-auto rounded-lg" />
                    </div>
                  </div>
                )}
              </div>

              {/* Outcomes */}
              <div className="mb-10 sm:mb-12">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                  {t('caseStudy.keyOutcomes')}
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  {(language === 'en' ? study.outcomes : (study.outcomesThai || study.outcomes)).map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
                {study.id === 'muvmi-tuk-tuks' && (
                  <div className="mt-6">
                    <img src="/MuvMi-Design-Recommendations.png" alt="MuvMi Design Recommendations" className="w-full h-auto rounded-lg" />
                  </div>
                )}
                {study.id === 'bridgebox-disaster-response' && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="/BBx_sketch1.png" alt="BridgeBox Sketch 1" className="w-full h-auto rounded-lg" />
                    <img src="/BBx_sketch2.png" alt="BridgeBox Sketch 2" className="w-full h-auto rounded-lg" />
                  </div>
                )}
                {study.id === 'clean-energy-solar' && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="/LineExample.png" alt="Line Example" className="w-full h-auto rounded-lg" />
                    <img src="/Line-bot.png" alt="Line Bot" className="w-full h-auto rounded-lg" />
                  </div>
                )}
              </div>

              {/* Lessons Learned */}
              <div className="p-4 sm:p-6 rounded-2xl bg-gold-light/30 border border-primary/20">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                    {t('caseStudy.lessonsLearned')}
                  </h2>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {(language === 'en' ? study.lessons : (study.lessonsThai || study.lessons)).map((lesson, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
