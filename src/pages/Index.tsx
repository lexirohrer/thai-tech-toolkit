import { useState, useRef, useEffect } from 'react';
import { ArrowDown, Search, ArrowRight, ChevronDown, Lightbulb, Heart, Users, Globe, BookOpen, Clock, AlertTriangle } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MethodCard } from '@/components/MethodCard';
import { FilterBar } from '@/components/FilterBar';
import { methods, phaseLabels, Phase, Difficulty, DigitalLiteracy } from '@/data/methods';
import { ParticipantRange } from '@/components/FilterBar';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Index = () => {
  const methodsRef = useRef<HTMLElement>(null);
  const facilitationTipsRef = useRef<HTMLElement>(null);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const { language, t } = useLanguage();

  const [selectedExperience, setSelectedExperience] = useState<Difficulty | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  
  const [filterPhases, setFilterPhases] = useState<Phase[]>([]);
  const [filterDifficulties, setFilterDifficulties] = useState<Difficulty[]>([]);
  const [filterDigitalLiteracies, setFilterDigitalLiteracies] = useState<DigitalLiteracy[]>([]);
  const [filterParticipantRanges, setFilterParticipantRanges] = useState<ParticipantRange[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const matchesParticipantRange = (method: typeof methods[0], ranges: ParticipantRange[]): boolean => {
    if (ranges.length === 0) return true;
    const { min, max } = method.participantCount;
    
    return ranges.some((range) => {
      switch (range) {
        case '1-5':
          return min <= 5 && max >= 1; // Overlaps with 1-5 range
        case '6-10':
          return min <= 10 && max >= 6; // Overlaps with 6-10 range
        case '11-20':
          return min <= 20 && max >= 11; // Overlaps with 11-20 range
        case '21+':
          return max >= 21; // Overlaps with 21+ range
        default:
          return true;
      }
    });
  };

  const filteredMethods = methods.filter((method) => {
    const phaseMatch = filterPhases.length === 0 || filterPhases.includes(method.phase);
    const difficultyMatch = filterDifficulties.length === 0 || filterDifficulties.includes(method.difficulty);
    const digitalLiteracyMatch = filterDigitalLiteracies.length === 0 || filterDigitalLiteracies.includes(method.digitalLiteracy);
    const participantRangeMatch = matchesParticipantRange(method, filterParticipantRanges);
    const searchMatch = searchQuery === '' || 
      method.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.nameThai.includes(searchQuery) ||
      method.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.culturalTip.toLowerCase().includes(searchQuery.toLowerCase());
    return phaseMatch && difficultyMatch && digitalLiteracyMatch && participantRangeMatch && searchMatch;
  });

  const experienceOptions = [
    { value: 1, label: t('hero.beginnerExperience') },
    { value: 2, label: t('hero.someExperience') },
    { value: 3, label: t('hero.extensiveExperience') },
  ];

  const goalOptions = [
    { value: 'understand', label: t('hero.understandUsers'), phase: 'discover' as Phase },
    { value: 'define', label: t('hero.defineProblem'), phase: 'define' as Phase },
    { value: 'ideate', label: t('hero.generateSolutions'), phase: 'ideate' as Phase },
    { value: 'test', label: t('hero.testIdeas'), phase: 'evaluate' as Phase },
    { value: 'gather', label: t('hero.gatherFeedback'), phase: null },
    { value: 'evaluate', label: t('hero.evaluateEffectiveness'), phase: 'evaluate' as Phase },
  ];

  const handleFindMethods = () => {
    // Apply filters based on selections
    if (selectedGoal) {
      const goalPhase = goalOptions.find(opt => opt.value === selectedGoal)?.phase;
      if (goalPhase) {
        setFilterPhases(prev => prev.includes(goalPhase) ? prev : [...prev, goalPhase]);
      }
      // If phase is null (e.g., 'gather feedback'), don't apply any phase filter
    }
    if (selectedExperience) {
      setFilterDifficulties(prev => prev.includes(selectedExperience) ? prev : [...prev, selectedExperience]);
    }
    // Scroll to methods section
    methodsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Auto-scroll carousel
  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, [carouselApi]);

  const hasSelections = selectedExperience || selectedGoal;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="grainy-gradient min-h-[85vh] flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="w-full text-center">
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-12 animate-fade-up tracking-tight">
                {t('hero.title')}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-xl md:text-2xl font-mono animate-fade-up-delay-1">
                <span className="text-foreground">{t('hero.imTryingTo')}</span>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="hero-dropdown min-w-[220px]">
                    <Search size={16} className="text-muted-foreground" />
                    <span>{selectedGoal ? goalOptions.find(o => o.value === selectedGoal)?.label : t('hero.achieveGoal')}</span>
                    <ChevronDown size={16} className="ml-auto" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border shadow-lg z-50 min-w-[220px]">
                    {goalOptions.map((option) => (
                      <DropdownMenuItem key={option.value} onClick={() => setSelectedGoal(option.value)} className="cursor-pointer hover:bg-muted">
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="text-foreground">{t('hero.and')}</span>

                <span className="text-foreground">{t('hero.iHave')}</span>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="hero-dropdown min-w-[180px]">
                    <Search size={16} className="text-muted-foreground" />
                    <span>{selectedExperience ? experienceOptions.find(o => o.value === selectedExperience)?.label : t('hero.experience')}</span>
                    <ChevronDown size={16} className="ml-auto" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border shadow-lg z-50 min-w-[200px]">
                    {experienceOptions.map((option) => (
                      <DropdownMenuItem key={option.value} onClick={() => setSelectedExperience(option.value as Difficulty)} className="cursor-pointer hover:bg-muted">
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="text-foreground"> {t('hero.facilitating')}</span>
              </div>

              {hasSelections && (
                <div className="mt-10 animate-fade-up flex items-center justify-center gap-4 flex-wrap">
                  <button onClick={handleFindMethods} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors">
                    {t('hero.findMethods')}
                    <ArrowRight size={20} />
                  </button>
                  <button onClick={() => facilitationTipsRef.current?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 border border-border bg-background text-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-muted transition-colors">
                    {t('facilitation.seeTips')}
                    <Lightbulb size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-8 text-center">
          <div className="animate-fade-up-delay-2">
            <button onClick={() => methodsRef.current?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono">
              {t('hero.browseAllMethods')}
              <ArrowDown size={18} className="animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      <section ref={methodsRef} className="py-16 lg:py-24 bg-card">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t('methods.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">{t('methods.subtitle')}</p>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input type="text" placeholder={t('methods.searchPlaceholder')} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
          </div>

          <FilterBar 
            selectedPhases={filterPhases} 
            selectedDifficulties={filterDifficulties}
            selectedDigitalLiteracies={filterDigitalLiteracies}
            selectedParticipantRanges={filterParticipantRanges}
            onPhaseChange={(phase) => {
              setFilterPhases(prev => 
                prev.includes(phase) 
                  ? prev.filter(p => p !== phase)
                  : [...prev, phase]
              );
            }}
            onDifficultyChange={(difficulty) => {
              setFilterDifficulties(prev => 
                prev.includes(difficulty) 
                  ? prev.filter(d => d !== difficulty)
                  : [...prev, difficulty]
              );
            }}
            onDigitalLiteracyChange={(literacy) => {
              setFilterDigitalLiteracies(prev => 
                prev.includes(literacy) 
                  ? prev.filter(l => l !== literacy)
                  : [...prev, literacy]
              );
            }}
            onParticipantRangeChange={(range) => {
              setFilterParticipantRanges(prev => 
                prev.includes(range) 
                  ? prev.filter(r => r !== range)
                  : [...prev, range]
              );
            }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filteredMethods.map((method) => (
              <MethodCard key={method.id} method={method} />
            ))}
          </div>

          {filteredMethods.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t('methods.noMatch')}</p>
            </div>
          )}
        </div>
      </section>

      <section ref={facilitationTipsRef} className="py-16 lg:py-24 bg-card">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t('facilitation.tipsForFacilitators')}</h2>
            
            {/* Cultural Context Carousel - Full Width */}
            <div className="mb-12">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To successfully facilitate, it's important to understand the cultural values that influence user behavior in design workshops. In Thailand and similar contexts, there are several influential cultural factors, such as:
              </p>
              <Carousel className="w-full" setApi={setCarouselApi}>
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6 text-sage-dark" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {t('cultural.krengJai')}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('cultural.krengJaiDesc')}
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {t('cultural.face')}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('cultural.faceDesc')}
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                        <Globe className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {t('cultural.hierarchy')}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('cultural.hierarchyDesc')}
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-sage-dark" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {t('cultural.indirectCommunication')}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('cultural.indirectCommunicationDesc')}
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {t('cultural.polychronicTime')}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('cultural.polychronicTimeDesc')}
                      </p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Tips Sections */}
            <div className="mb-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Before the Workshop</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {t('facilitation.tip1')}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {t('facilitation.tip2')}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {t('facilitation.tip6')}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {t('facilitation.tip8')}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {t('facilitation.tip9')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex gap-4">
                <button
                  className="flex-1 px-6 py-3 rounded-lg border border-primary bg-background text-primary font-semibold hover:bg-muted transition-colors"
                  onClick={() => {
                    window.open('https://docs.google.com/document/d/1rd-poar_0WTbWDukw4ozPDZqlPtScmIuOH9R00XbZBc/edit?usp=sharing', '_blank');
                  }}
                >
                  See English Example Script
                </button>
                <button
                  className="flex-1 px-6 py-3 rounded-lg border border-primary bg-background text-primary font-semibold hover:bg-muted transition-colors"
                  onClick={() => {
                    window.open('https://docs.google.com/document/d/1oPofaBjJJu7V9YKHrpoYUtQ9tS2eEoarLZeD3VLyY7Y/edit?usp=sharing', '_blank');
                  }}
                >
                  ดูสคริปต์ตัวอย่างภาษาไทย
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">During the Workshop</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {t('facilitation.tip3')}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {t('facilitation.tip4')}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {t('facilitation.tip7')}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">{t('facilitation.commonChallenges')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('facilitation.challenge1')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('facilitation.challenge1Solution')}
                    </p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('facilitation.challenge2')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('facilitation.challenge2Solution')}
                    </p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('facilitation.challenge3')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('facilitation.challenge3Solution')}
                    </p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('facilitation.challenge4')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('facilitation.challenge4Solution')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
