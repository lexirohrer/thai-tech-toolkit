import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BookOpen, Users, Globe, Heart, Lightbulb, ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary/30 via-background to-gold-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              About This Toolkit
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              How this collection of culturally-adapted design research methods came to be, 
              and why it matters for Thai practitioners.
            </p>
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
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
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

      {/* Content */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Origin Story */}
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                The Origin Story
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  This toolkit emerged from a Fulbright research project that explored how design 
                  research methods—developed primarily in Western contexts—could be adapted for 
                  Thai cultural settings.
                </p>
                <p className="leading-relaxed mb-4">
                  During months of fieldwork across Thailand, we observed that many standard 
                  research techniques yielded surface-level insights. Participants would often 
                  provide polite, positive feedback even when they had concerns. Critical feedback 
                  was rare, and honest opinions about sensitive topics were difficult to surface.
                </p>
                <p className="leading-relaxed">
                  We began experimenting with adaptations—changing how questions were framed, 
                  using visual and participatory methods, and creating conditions where indirect 
                  expression was valued. The methods in this toolkit represent what we learned.
                </p>
              </div>
            </div>

            {/* Cultural Context */}
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Understanding the Cultural Context
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-sage-dark" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Kreng Jai (เกรงใจ)
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A reluctance to impose on others or cause discomfort. This cultural value 
                    means participants may withhold critical feedback to avoid making others 
                    feel bad.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Face (หน้า)
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Social reputation and dignity are highly valued. Research methods should 
                    create conditions where feedback can be given without anyone losing face.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Hierarchy (ลำดับชั้น)
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Age, status, and position significantly influence social interactions. 
                    Junior members may defer to seniors even when they have valuable insights.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-sage-dark" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Indirect Communication
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Direct criticism or confrontation is often avoided. Meaning is conveyed 
                    through context, tone, and what is left unsaid.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Use */}
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                How to Use This Toolkit
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Start with Beginner Methods</h3>
                    <p className="text-muted-foreground">
                      If you're new to design research, begin with methods rated as "Beginner" 
                      difficulty. These require less facilitation skill and are more forgiving.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Match Methods to Your Phase</h3>
                    <p className="text-muted-foreground">
                      Use the phase filter to find methods appropriate for where you are in 
                      the design process—whether discovering insights or testing solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Read the Cultural Tips</h3>
                    <p className="text-muted-foreground">
                      Each method includes specific cultural adaptation guidance. These tips 
                      are drawn from real fieldwork experience and can make the difference 
                      between surface-level and genuine insights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Learn from Case Studies</h3>
                    <p className="text-muted-foreground">
                      The case studies show how methods were applied in real projects. 
                      Use them to understand context and potential adaptations for your work.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgments */}
            <div className="p-6 rounded-2xl bg-gold-light/30 border border-primary/20">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Acknowledgments
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This toolkit was developed with support from the Fulbright Program and in 
                collaboration with Thai universities, community organizations, and the many 
                research participants who shared their time and insights. Special thanks to 
                the local facilitators who helped adapt and refine these methods in practice.
              </p>
            </div>
          </div>
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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Begin with beginner-friendly methods and build your research skills step by step.
            </p>
            <Link
              to="/"
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

export default About;
