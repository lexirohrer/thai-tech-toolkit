import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Method, phaseLabels, difficultyLabels } from '@/data/methods';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface MethodCardProps {
  method: Method;
}

export function MethodCard({ method }: MethodCardProps) {
  const { language, t } = useLanguage();
  
  const phaseClasses = {
    discover: 'phase-discover',
    define: 'phase-define',
    develop: 'phase-develop',
    deliver: 'phase-deliver',
  };

  return (
    <Link
      to={`/methods/${method.id}`}
      className="method-card group block"
    >
      <div className="flex items-start justify-between mb-4">
        <span className={cn('phase-badge', phaseClasses[method.phase])}>
          {phaseLabels[method.phase][language]}
        </span>
        <div className="difficulty-indicator" title={difficultyLabels[method.difficulty][language]}>
          {[1, 2, 3].map((level) => (
            <div
              key={level}
              className={cn('difficulty-dot', level <= method.difficulty && 'active')}
            />
          ))}
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
        {language === 'en' ? method.name : method.nameThai}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">
        {language === 'en' ? method.nameThai : method.name}
      </p>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
        {method.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {method.duration}
        </span>
        <span className="flex items-center gap-1">
          <Users size={14} />
          {method.participants}
        </span>
      </div>

      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
        {t('method.learnMore')}
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
