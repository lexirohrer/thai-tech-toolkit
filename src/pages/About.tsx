import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BookOpen, Users, Heart, Lightbulb, ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { CulturalContext } from '@/components/CulturalContext';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary/30 via-background to-gold-light/20">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl lg:max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Why This Toolkit Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.whyThisToolkit')}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              {t('about.whyDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-sage-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {t('about.socialHarmony')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.socialHarmonyDesc')}
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {t('about.indirectFeedback')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.indirectFeedbackDesc')}
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {t('about.hierarchySensitivity')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.hierarchySensitivityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 flex-1">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl lg:max-w-4xl mx-auto">
            {/* Origin Story */}
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                {t('about.originStory')}
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  {t('about.originP1')}
                </p>
                <p className="leading-relaxed mb-4">
                  {t('about.originP2')}
                </p>
                <p className="leading-relaxed">
                  {t('about.originP3')}
                </p>
              </div>
            </div>

            {/* Cultural Context */}
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                {t('about.culturalContext')}
              </h2>
              <CulturalContext />
            </div>

            {/* How to Use */}
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                {t('about.howToUse')}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('about.step1Title')}</h3>
                    <p className="text-muted-foreground">
                      {t('about.step1Desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('about.step2Title')}</h3>
                    <p className="text-muted-foreground">
                      {t('about.step2Desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('about.step3Title')}</h3>
                    <p className="text-muted-foreground">
                      {t('about.step3Desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('about.step4Title')}</h3>
                    <p className="text-muted-foreground">
                      {t('about.step4Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgments */}
            <div className="p-6 rounded-2xl bg-gold-light/30 border border-primary/20">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                {t('about.acknowledgments')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.acknowledgmentsText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 lg:py-24 bg-foreground text-primary-foreground">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                {t('about.fromTheField')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                {t('about.realResearch')}
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                {t('about.realResearchDesc')}
              </p>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <BookOpen size={20} />
                {t('about.readCaseStudies')}
              </Link>
            </div>

            <div className="space-y-4">
              {caseStudies.slice(0, 3).map((study, index) => (
                <Link
                  key={study.id}
                  to={`/case-studies/${study.id}`}
                  className="block p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-display text-lg font-semibold mb-2">{study.title}</h4>
                  <p className="text-primary-foreground/60 text-sm">
                    {study.location}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('about.readyToStart')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t('about.readyToStartDesc')}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors"
            >
              {t('about.browseAllMethods')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
