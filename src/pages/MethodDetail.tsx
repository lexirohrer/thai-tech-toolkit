import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, AlertCircle, CheckCircle } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { methods, phaseLabels, difficultyLabels } from '@/data/methods';
import { cn } from '@/lib/utils';

const MethodDetail = () => {
  const { id } = useParams();
  const method = methods.find((m) => m.id === id);

  if (!method) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Method Not Found
            </h1>
            <Link to="/methods" className="text-primary hover:underline">
              Back to Methods
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
          <div className="container mx-auto px-4">
            <Link
              to="/methods"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Methods
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className={cn('phase-badge', phaseClasses[method.phase])}>
                {phaseLabels[method.phase].en} / {phaseLabels[method.phase].th}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                {difficultyLabels[method.difficulty].en} Level
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
              {method.name}
            </h1>
            <p className="text-xl text-muted-foreground">{method.nameThai}</p>

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
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              {/* Description */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {method.description}
                </p>
              </div>

              {/* Cultural Tip */}
              <div className="cultural-tip mb-12">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-sage-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cultural Adaptation Tip</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {method.culturalTip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  How to Facilitate
                </h2>
                <ol className="space-y-4">
                  {method.steps.map((step, index) => (
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
                <h3 className="font-semibold text-foreground mb-4">Facilitation Difficulty</h3>
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
                    {difficultyLabels[method.difficulty].en} ({difficultyLabels[method.difficulty].th})
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  {method.difficulty === 1 && 'Suitable for first-time facilitators with basic preparation.'}
                  {method.difficulty === 2 && 'Requires some facilitation experience and thoughtful planning.'}
                  {method.difficulty === 3 && 'Best suited for experienced facilitators who can adapt in real-time.'}
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
