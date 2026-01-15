import { Phase, Difficulty, DigitalLiteracy, phaseLabels, difficultyLabels, digitalLiteracyLabels } from '@/data/methods';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export type ParticipantRange = 'all' | '1-5' | '6-10' | '11-20' | '21+';

interface FilterBarProps {
  selectedPhases: Phase[];
  selectedDifficulties: Difficulty[];
  selectedParticipantRanges: ParticipantRange[];
  selectedDigitalLiteracies: DigitalLiteracy[];
  onPhaseChange: (phase: Phase) => void;
  onDifficultyChange: (difficulty: Difficulty) => void;
  onParticipantRangeChange: (range: ParticipantRange) => void;
  onDigitalLiteracyChange: (literacy: DigitalLiteracy) => void;
}

export function FilterBar({
  selectedPhases,
  selectedDifficulties,
  selectedParticipantRanges,
  selectedDigitalLiteracies,
  onPhaseChange,
  onDifficultyChange,
  onParticipantRangeChange,
  onDigitalLiteracyChange,
}: FilterBarProps) {
  const { language, t } = useLanguage();
  const phases: Phase[] = ['discover', 'define', 'develop', 'deliver'];
  const difficulties: Difficulty[] = [1, 2, 3];
  const participantRanges: ParticipantRange[] = ['1-5', '6-10', '11-20', '21+'];
  const digitalLiteracies: DigitalLiteracy[] = ['low', 'medium', 'high'];

  return (
    <div className="bg-card rounded-2xl p-6 border border-border/50 mb-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex-[0_1_auto]">
            <h3 className="font-medium text-foreground mb-3">{t('filter.byPhase')}</h3>
            <div className="flex flex-wrap gap-2">
              {phases.map((phase) => (
                <button
                  key={phase}
                  onClick={() => onPhaseChange(phase)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    selectedPhases.includes(phase)
                      ? 'phase-filter-selected'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}
                >
                  {phaseLabels[phase][language]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-[0_1_auto]">
            <h3 className="font-medium text-foreground mb-3">{t('filter.byDifficulty')}</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => onDifficultyChange(difficulty)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    selectedDifficulties.includes(difficulty)
                      ? 'difficulty-filter-selected'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}
                >
                  {difficultyLabels[difficulty][language]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-[0_1_auto]">
            <h3 className="font-medium text-foreground mb-3">{t('filter.byDigitalLiteracy') || 'Digital Literacy'}</h3>
            <div className="flex flex-wrap gap-2">
              {digitalLiteracies.map((literacy) => (
                <button
                  key={literacy}
                  onClick={() => onDigitalLiteracyChange(literacy)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    selectedDigitalLiteracies.includes(literacy)
                      ? 'digital-literacy-filter-selected'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}
                >
                  {digitalLiteracyLabels[literacy][language]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-[0_1_auto]">
            <h3 className="font-medium text-foreground mb-3">{t('filter.byParticipants') || 'Number of Participants'}</h3>
            <div className="flex flex-wrap gap-2">
              {participantRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => onParticipantRangeChange(range)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    selectedParticipantRanges.includes(range)
                      ? 'participant-range-filter-selected'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
