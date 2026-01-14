import { Heart, Users, Globe, BookOpen, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function CulturalContext() {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 gap-6">
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
    </div>
  );
}
