import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, CheckCircle, Lightbulb } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { caseStudies } from '@/data/caseStudies';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Case Study Not Found
            </h1>
            <Link to="/case-studies" className="text-primary hover:underline">
              Back to Case Studies
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
          <div className="container mx-auto px-4">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Case Studies
            </Link>

            <div className="flex items-center gap-4 text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <MapPin size={16} />
                {study.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {study.duration}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground">{study.titleThai}</p>

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
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              {/* Summary */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Summary
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {study.summary}
                </p>
              </div>

              {/* Challenge */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Approach */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.approach}
                </p>
              </div>

              {/* Outcomes */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Key Outcomes
                </h2>
                <ul className="space-y-4">
                  {study.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lessons Learned */}
              <div className="p-6 rounded-2xl bg-gold-light/30 border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Lessons Learned
                  </h2>
                </div>
                <ul className="space-y-3">
                  {study.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground leading-relaxed">{lesson}</span>
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
