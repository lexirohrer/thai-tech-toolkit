import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MethodCard } from '@/components/MethodCard';
import { FilterBar } from '@/components/FilterBar';
import { methods, Phase, Difficulty, DigitalLiteracy } from '@/data/methods';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ParticipantRange } from '@/components/FilterBar';

const Methods = () => {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  
  const [selectedPhases, setSelectedPhases] = useState<Phase[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([]);
  const [selectedParticipantRanges, setSelectedParticipantRanges] = useState<ParticipantRange[]>([]);
  const [selectedDigitalLiteracies, setSelectedDigitalLiteracies] = useState<DigitalLiteracy[]>([]);

  // Toggle functions for filters
  const handlePhaseChange = (phase: Phase) => {
    setSelectedPhases(prev => 
      prev.includes(phase) 
        ? prev.filter(p => p !== phase)
        : [...prev, phase]
    );
  };

  const handleDifficultyChange = (difficulty: Difficulty) => {
    setSelectedDifficulties(prev => 
      prev.includes(difficulty) 
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const handleParticipantRangeChange = (range: ParticipantRange) => {
    setSelectedParticipantRanges(prev => 
      prev.includes(range) 
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
  };

  const handleDigitalLiteracyChange = (literacy: DigitalLiteracy) => {
    setSelectedDigitalLiteracies(prev => 
      prev.includes(literacy) 
        ? prev.filter(l => l !== literacy)
        : [...prev, literacy]
    );
  };

  const filteredMethods = useMemo(() => {
    return methods.filter((method) => {
      // Phase matching
      const phaseMatch = selectedPhases.length === 0 || selectedPhases.includes(method.phase);
      
      // Difficulty matching with hierarchical logic
      // If a higher difficulty is selected, include all lower difficulties
      // Examples:
      // - If Advanced (3) is selected, show methods with difficulty 1, 2, or 3
      // - If Intermediate (2) is selected, show methods with difficulty 1 or 2
      // - If Beginner (1) is selected, show only methods with difficulty 1
      let difficultyMatch = true;
      if (selectedDifficulties.length > 0) {
        // Find the maximum selected difficulty level
        const maxSelectedDifficulty = Math.max(...selectedDifficulties);
        // Include all methods with difficulty <= maxSelectedDifficulty
        // This ensures hierarchical behavior: selecting Advanced (3) shows Beginner (1), Intermediate (2), and Advanced (3)
        difficultyMatch = method.difficulty <= maxSelectedDifficulty;
      }
      
      // Participant range matching
      let participantMatch = selectedParticipantRanges.length === 0;
      if (selectedParticipantRanges.length > 0) {
        participantMatch = selectedParticipantRanges.some(range => {
          if (range === '21+') {
            return method.participantCount.min >= 21;
          } else {
            const [minStr, maxStr] = range.split('-');
            const min = parseInt(minStr);
            const max = parseInt(maxStr);
            return method.participantCount.max >= min && method.participantCount.min <= max;
          }
        });
      }
      
      // Digital literacy matching
      const digitalLiteracyMatch = selectedDigitalLiteracies.length === 0 || selectedDigitalLiteracies.includes(method.digitalLiteracy);
      
      return phaseMatch && difficultyMatch && participantMatch && digitalLiteracyMatch;
    });
  }, [selectedPhases, selectedDifficulties, selectedParticipantRanges, selectedDigitalLiteracies]);

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
          <FilterBar 
            selectedPhases={selectedPhases} 
            selectedDifficulties={selectedDifficulties}
            selectedParticipantRanges={selectedParticipantRanges}
            selectedDigitalLiteracies={selectedDigitalLiteracies}
            onPhaseChange={handlePhaseChange} 
            onDifficultyChange={handleDifficultyChange}
            onParticipantRangeChange={handleParticipantRangeChange}
            onDigitalLiteracyChange={handleDigitalLiteracyChange}
          />
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
