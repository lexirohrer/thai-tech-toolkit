import { useState, useMemo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MethodCard } from '@/components/MethodCard';
import { FilterBar } from '@/components/FilterBar';
import { methods, Phase, Difficulty } from '@/data/methods';

const Methods = () => {
  const [selectedPhase, setSelectedPhase] = useState<Phase | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');

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

      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary/30 via-background to-gold-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Research Methods
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Browse our collection of culturally-adapted design research methods. 
              Filter by phase of the design process or by difficulty level to find the right method for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Methods Grid */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <FilterBar
            selectedPhase={selectedPhase}
            selectedDifficulty={selectedDifficulty}
            onPhaseChange={setSelectedPhase}
            onDifficultyChange={setSelectedDifficulty}
          />

          {filteredMethods.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMethods.map((method) => (
                <MethodCard key={method.id} method={method} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No methods match your current filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methods;
