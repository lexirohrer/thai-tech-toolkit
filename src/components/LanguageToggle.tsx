import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted rounded-full p-1">
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-3 py-1 rounded-full text-sm font-medium transition-colors',
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('th')}
        className={cn(
          'px-3 py-1 rounded-full text-sm font-medium transition-colors',
          language === 'th'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        ไทย
      </button>
    </div>
  );
}
