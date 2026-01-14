import { Phase, Difficulty, phaseLabels, difficultyLabels } from '@/data/methods';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface FilterBarProps {
  selectedPhase: Phase | 'all';
  selectedDifficulty: Difficulty | 'all';
  onPhaseChange: (phase: Phase | 'all') => void;
  onDifficultyChange: (difficulty: Difficulty | 'all') => void;
}

export function FilterBar({
  selectedPhase,
  selectedDifficulty,
  onPhaseChange,
  onDifficultyChange,
}: FilterBarProps) {
  const { language, t } = useLanguage();
  const phases: (Phase | 'all')[] = ['all', 'discover', 'define', 'develop', 'deliver'];
  const difficulties: (Difficulty | 'all')[] = ['all', 1, 2, 3];

  return (
    <div className="bg-card rounded-2xl p-6 border border-border/50 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex-1">
          <h3 className="font-medium text-foreground mb-3">{t('filter.byPhase')}</h3>
          <div className="flex flex-wrap gap-2">
            {phases.map((phase) => (
              <button
                key={phase}
                onClick={() => onPhaseChange(phase)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  selectedPhase === phase
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                )}
              >
                {phase === 'all' ? t('filter.allPhases') : phaseLabels[phase][language]}
              </button>
            ))}
          </div>
        </div>

        <div className="w-px h-12 bg-border hidden lg:block" />

        <div>
          <h3 className="font-medium text-foreground mb-3">{t('filter.byDifficulty')}</h3>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => onDifficultyChange(difficulty)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  selectedDifficulty === difficulty
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                )}
              >
                {difficulty === 'all' ? t('filter.allLevels') : difficultyLabels[difficulty][language]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
