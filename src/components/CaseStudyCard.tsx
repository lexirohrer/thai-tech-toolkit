import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';
import { useLanguage } from '@/contexts/LanguageContext';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const { language, t } = useLanguage();

  return (
    <Link
      to={`/case-studies/${study.id}`}
      className="method-card group block"
    >
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {study.location}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {study.duration}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
        {language === 'en' ? study.title : study.titleThai}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">
        {language === 'en' ? study.titleThai : study.title}
      </p>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
        {study.summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {study.methods.slice(0, 3).map((method) => (
          <span
            key={method}
            className="inline-flex items-center px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
          >
            {method}
          </span>
        ))}
      </div>

      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
        {t('caseStudy.readCaseStudy')}
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
