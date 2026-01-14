import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, Search, ArrowRight, ChevronDown } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MethodCard } from '@/components/MethodCard';
import { FilterBar } from '@/components/FilterBar';
import { methods, phaseLabels, Phase, Difficulty } from '@/data/methods';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Index = () => {
  const navigate = useNavigate();
  const methodsRef = useRef<HTMLElement>(null);
  const { language, t } = useLanguage();

  const [selectedExperience, setSelectedExperience] = useState<Difficulty | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);
  
  const [filterPhase, setFilterPhase] = useState<Phase | 'all'>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMethods = methods.filter((method) => {
    const phaseMatch = filterPhase === 'all' || method.phase === filterPhase;
    const difficultyMatch = filterDifficulty === 'all' || method.difficulty === filterDifficulty;
    const searchMatch = searchQuery === '' || 
      method.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.nameThai.includes(searchQuery) ||
      method.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.culturalTip.toLowerCase().includes(searchQuery.toLowerCase());
    return phaseMatch && difficultyMatch && searchMatch;
  });

  const experienceOptions = [
    { value: 1, label: t('hero.beginnerExperience') },
    { value: 2, label: t('hero.someExperience') },
    { value: 3, label: t('hero.extensiveExperience') },
  ];

  const goalOptions = [
    { value: 'understand', label: t('hero.understandUsers') },
    { value: 'define', label: t('hero.defineProblem') },
    { value: 'ideate', label: t('hero.generateSolutions') },
    { value: 'test', label: t('hero.testIdeas') },
    { value: 'gather', label: t('hero.gatherFeedback') },
  ];

  const phaseOptions = [
    { value: 'discover' as Phase, label: phaseLabels.discover[language] },
    { value: 'define' as Phase, label: phaseLabels.define[language] },
    { value: 'develop' as Phase, label: phaseLabels.develop[language] },
    { value: 'deliver' as Phase, label: phaseLabels.deliver[language] },
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

      <section className="grainy-gradient min-h-[85vh] flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-12 animate-fade-up tracking-tight">
              {t('hero.title')}
            </h1>

            <div className="space-y-6 md:space-y-4 animate-fade-up-delay-1">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-xl md:text-2xl font-mono">
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
                <span className="text-foreground">,</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-xl md:text-2xl font-mono">
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
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-xl md:text-2xl font-mono">
                <span className="text-foreground">{t('hero.projectInPhase')}</span>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="hero-dropdown min-w-[160px]">
                    <Search size={16} className="text-muted-foreground" />
                    <span>{selectedPhase ? phaseLabels[selectedPhase][language] : t('hero.selectPhase')}</span>
                    <ChevronDown size={16} className="ml-auto" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border shadow-lg z-50 min-w-[160px]">
                    {phaseOptions.map((option) => (
                      <DropdownMenuItem key={option.value} onClick={() => setSelectedPhase(option.value)} className="cursor-pointer hover:bg-muted">
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {hasSelections && (
              <div className="mt-10 animate-fade-up">
                <button onClick={handleFindMethods} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors">
                  {t('hero.findMethods')}
                  <ArrowRight size={20} />
                </button>
              </div>
            )}

            <div className="mt-16 animate-fade-up-delay-2">
              <button onClick={() => methodsRef.current?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono">
                {t('hero.browseAllMethods')}
                <ArrowDown size={18} className="animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section ref={methodsRef} className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t('methods.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">{t('methods.subtitle')}</p>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input type="text" placeholder={t('methods.searchPlaceholder')} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
          </div>

          <FilterBar selectedPhase={filterPhase} selectedDifficulty={filterDifficulty} onPhaseChange={setFilterPhase} onDifficultyChange={setFilterDifficulty} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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

      <Footer />
    </div>
  );
};

export default Index;
