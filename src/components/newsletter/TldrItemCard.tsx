import { useState } from 'react';
import { TldrItem } from '@/types/newsletter';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TldrItemCardProps {
  item: TldrItem;
}

export const TldrItemCard = ({ item }: TldrItemCardProps) => {
  const [showDeepDive, setShowDeepDive] = useState(false);

  const categoryColors = {
    cloud: 'bg-primary/10 text-primary border-primary/20',
    security: 'bg-destructive/10 text-destructive border-destructive/20',
    devops: 'bg-accent/10 text-accent border-accent/20',
    infrastructure: 'bg-secondary/10 text-secondary-foreground border-secondary/20',
  };

  return (
    <article className="border border-border bg-card rounded-md p-6 space-y-4 hover:border-primary/50 transition-colors">
      {/* Category badge */}
      {item.category && (
        <div className="inline-flex">
          <span className={`text-xs font-mono px-2 py-1 rounded border ${categoryColors[item.category]}`}>
            {item.category.toUpperCase()}
          </span>
        </div>
      )}

      {/* Title with link */}
      <h3 className="text-xl font-semibold">
        <a 
          href={item.link_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center gap-2 group"
        >
          {item.title}
          <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      </h3>

      {/* TLDR Summary */}
      <div className="prose prose-invert prose-sm max-w-none">
        <p className="text-foreground leading-relaxed">{item.tldr_summary}</p>
      </div>

      {/* Deep Dive Toggle */}
      {item.is_deep_dive && item.deep_dive_content && (
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowDeepDive(!showDeepDive)}
            className="group"
          >
            {showDeepDive ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                Hide Analysis
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                Deep Dive Available
              </>
            )}
          </Button>

          {/* Deep Dive Content */}
          {showDeepDive && (
            <div className="mt-4 border-l-2 border-primary pl-4 space-y-3">
              <div className="prose prose-invert prose-sm max-w-none">
                {item.deep_dive_content.split('\n\n').map((paragraph, idx) => {
                  // Handle markdown-style bold
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h4 key={idx} className="font-semibold text-foreground mt-4 mb-2">
                        {paragraph.replace(/\*\*/g, '')}
                      </h4>
                    );
                  }
                  
                  // Handle list items
                  if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={idx} className="list-disc list-inside space-y-1 text-muted-foreground">
                        {paragraph.split('\n').map((line, lineIdx) => (
                          <li key={lineIdx}>{line.replace(/^- /, '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  
                  // Regular paragraph
                  return (
                    <p key={idx} className="text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
