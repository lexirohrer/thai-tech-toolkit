import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowDown, Search, Users, Lightbulb, Heart, BookOpen, ArrowRight, ChevronDown } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MethodCard } from '@/components/MethodCard';
import { methods, phaseLabels, difficultyLabels, Phase, Difficulty } from '@/data/methods';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Index = () => {
  const navigate = useNavigate();
  const featuredMethods = methods.slice(0, 3);

  const [selectedExperience, setSelectedExperience] = useState<Difficulty | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  const experienceOptions = [
    { value: 1, label: 'beginner experience' },
    { value: 2, label: 'some experience' },
    { value: 3, label: 'extensive experience' },
  ];

  const goalOptions = [
    { value: 'understand', label: 'understand users better' },
    { value: 'define', label: 'define the problem' },
    { value: 'ideate', label: 'generate solutions' },
    { value: 'test', label: 'test my ideas' },
    { value: 'gather', label: 'gather feedback' },
  ];

  const phaseOptions = [
    { value: 'discover' as Phase, label: 'Discover' },
    { value: 'define' as Phase, label: 'Define' },
    { value: 'develop' as Phase, label: 'Develop' },
    { value: 'deliver' as Phase, label: 'Deliver' },
  ];

  const handleFindMethods = () => {
    const params = new URLSearchParams();
    if (selectedPhase) params.set('phase', selectedPhase);
    if (selectedExperience) params.set('difficulty', String(selectedExperience));
    navigate(`/methods?${params.toString()}`);
  };

  const hasSelections = selectedExperience || selectedGoal || selectedPhase;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Grainy Gradient */}
      <section className="grainy-gradient min-h-[85vh] flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-12 animate-fade-up tracking-tight">
              A toolkit for design research in Thailand
            </h1>

            {/* Interactive Sentence */}
            <div className="space-y-6 md:space-y-4 animate-fade-up-delay-1">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-xl md:text-2xl font-mono">
                <span className="text-foreground">I have</span>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="hero-dropdown min-w-[180px]">
                    <Search size={16} className="text-muted-foreground" />
                    <span>{selectedExperience ? experienceOptions.find(o => o.value === selectedExperience)?.label : 'experience'}</span>
                    <ChevronDown size={16} className="ml-auto" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border shadow-lg z-50 min-w-[200px]">
                    {experienceOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        onClick={() => setSelectedExperience(option.value as Difficulty)}
                        className="cursor-pointer hover:bg-muted"
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <span className="text-foreground">,</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-xl md:text-2xl font-mono">
                <span className="text-foreground">I'm trying to</span>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="hero-dropdown min-w-[220px]">
                    <Search size={16} className="text-muted-foreground" />
                    <span>{selectedGoal ? goalOptions.find(o => o.value === selectedGoal)?.label : 'achieve a goal'}</span>
                    <ChevronDown size={16} className="ml-auto" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border shadow-lg z-50 min-w-[220px]">
                    {goalOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        onClick={() => setSelectedGoal(option.value)}
                        className="cursor-pointer hover:bg-muted"
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <span className="text-foreground">, and</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-xl md:text-2xl font-mono">
                <span className="text-foreground">my project is in phase</span>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="hero-dropdown min-w-[160px]">
                    <Search size={16} className="text-muted-foreground" />
                    <span>{selectedPhase ? phaseLabels[selectedPhase].en : 'select phase'}</span>
                    <ChevronDown size={16} className="ml-auto" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border shadow-lg z-50 min-w-[160px]">
                    {phaseOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        onClick={() => setSelectedPhase(option.value)}
                        className="cursor-pointer hover:bg-muted"
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Action Button */}
            {hasSelections && (
              <div className="mt-10 animate-fade-up">
                <button
                  onClick={handleFindMethods}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors"
                >
                  Find Methods
                  <ArrowRight size={20} />
                </button>
              </div>
            )}

            {/* Browse All Link */}
            <div className="mt-16 animate-fade-up-delay-2">
              <Link
                to="/methods"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                or, browse all methods
                <ArrowDown size={18} className="animate-bounce" />
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
