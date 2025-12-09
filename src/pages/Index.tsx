import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb, Heart, BookOpen } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MethodCard } from '@/components/MethodCard';
import { methods } from '@/data/methods';

const Index = () => {
  const featuredMethods = methods.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-gold-light/20" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-6">
                From Fulbright Research
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up-delay-1">
              Design Research Methods for{' '}
              <span className="text-primary">Thai Contexts</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up-delay-2">
              A practical toolkit of culturally-adapted research methods for practitioners who 
              work in contexts that value social harmony, indirect communication, and respect for hierarchy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <Link
                to="/methods"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors"
              >
                Explore Methods
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-8 py-4 rounded-full font-medium text-lg border border-border hover:bg-muted transition-colors"
              >
                Read Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Toolkit Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why This Toolkit?
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Standard design research methods often assume Western cultural norms. 
              This toolkit adapts proven methods for Thai research contexts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-sage-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Social Harmony
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Methods designed to gather honest feedback while maintaining relationships and group cohesion.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Indirect Feedback
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Techniques that surface critical insights without requiring direct confrontation or criticism.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Hierarchy Sensitivity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Approaches that create space for all voices, regardless of age, status, or position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Methods */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Methods
              </h2>
              <div className="section-divider" />
            </div>
            <Link
              to="/methods"
              className="hidden sm:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View all methods
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMethods.map((method) => (
              <MethodCard key={method.id} method={method} />
            ))}
          </div>

          <Link
            to="/methods"
            className="sm:hidden flex items-center justify-center gap-2 text-primary font-medium mt-8"
          >
            View all methods
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 lg:py-24 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                From the Field
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Real Research, Real Insights
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                These methods were developed and refined through actual research projects across Thailand. 
                Read the case studies to see how each method was applied in practice.
              </p>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <BookOpen size={20} />
                Read Case Studies
              </Link>
            </div>

            <div className="space-y-4">
              {['Rural Healthcare Access', 'Student Mental Health', 'Community Tourism'].map((title, index) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-display text-lg font-semibold mb-2">{title}</h4>
                  <p className="text-primary-foreground/60 text-sm">
                    Exploring research methods in Thai contexts
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Begin with beginner-friendly methods and build your research skills step by step.
            </p>
            <Link
              to="/methods"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors"
            >
              Browse All Methods
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
