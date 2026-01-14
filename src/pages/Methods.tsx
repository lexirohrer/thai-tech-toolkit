import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MethodCard } from '@/components/MethodCard';
import { FilterBar } from '@/components/FilterBar';
import { methods, Phase, Difficulty } from '@/data/methods';
import { useLanguage } from '@/contexts/LanguageContext';

const Methods = () => {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  
  const initialPhase = (searchParams.get('phase') as Phase) || 'all';
  const initialDifficulty = searchParams.get('difficulty') ? Number(searchParams.get('difficulty')) as Difficulty : 'all';
  
  const [selectedPhase, setSelectedPhase] = useState<Phase | 'all'>(initialPhase === 'all' ? 'all' : initialPhase);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>(initialDifficulty === 'all' ? 'all' : initialDifficulty);

  useEffect(() => {
    const phase = searchParams.get('phase') as Phase;
    const difficulty = searchParams.get('difficulty');
    if (phase) setSelectedPhase(phase);
    if (difficulty) setSelectedDifficulty(Number(difficulty) as Difficulty);
  }, [searchParams]);

  const filteredMethods = useMemo(() => {
    return methods.filter((method) => {
      const phaseMatch = selectedPhase === 'all' || method.phase === selectedPhase;
      const difficultyMatch = selectedDifficulty === 'all' || method.difficulty === selectedDifficulty;
      return phaseMatch && difficultyMatch;
    });
  }, [selectedPhase, selectedDifficulty]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary/30 via-background to-gold-light/20">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{t('methods.researchMethods')}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('methods.pageSubtitle')}</p>
          </div>
        </div>
      </section>
      <section className="py-12 flex-1">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <FilterBar selectedPhase={selectedPhase} selectedDifficulty={selectedDifficulty} onPhaseChange={setSelectedPhase} onDifficultyChange={setSelectedDifficulty} />
          {filteredMethods.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMethods.map((method) => (<MethodCard key={method.id} method={method} />))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">{t('methods.noMatchAdjust')}</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Methods;
