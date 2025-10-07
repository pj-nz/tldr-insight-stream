import { Briefcase } from 'lucide-react';

interface TalentMarketSummaryProps {
  summary: string;
}

export const TalentMarketSummary = ({ summary }: TalentMarketSummaryProps) => {
  return (
    <div className="border border-border bg-card/50 rounded-md p-6 space-y-3">
      <div className="flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">
          NZ Talent Market
        </h2>
      </div>
      
      <div className="prose prose-invert prose-sm max-w-none">
        {summary.split('\n\n').map((paragraph, idx) => {
          // Handle markdown-style bold
          const parts = paragraph.split(/(\*\*.*?\*\*)/g);
          
          return (
            <p key={idx} className="text-muted-foreground leading-relaxed">
              {parts.map((part, partIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return (
                    <strong key={partIdx} className="text-foreground font-semibold">
                      {part.replace(/\*\*/g, '')}
                    </strong>
                  );
                }
                return <span key={partIdx}>{part}</span>;
              })}
            </p>
          );
        })}
      </div>
    </div>
  );
};
