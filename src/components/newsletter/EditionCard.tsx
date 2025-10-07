import { Link } from 'react-router-dom';
import { Newsletter } from '@/types/newsletter';
import { ChevronRight } from 'lucide-react';

interface EditionCardProps {
  newsletter: Newsletter;
}

export const EditionCard = ({ newsletter }: EditionCardProps) => {
  const formattedDate = new Date(newsletter.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link 
      to={`/edition/${newsletter.id}`}
      className="group block border-l-2 border-transparent pl-4 transition-all hover:border-primary"
    >
      <div className="flex items-start justify-between gap-4 py-4">
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">
              #{newsletter.edition_number.toString().padStart(3, '0')}
            </span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{formattedDate}</span>
          </div>
          
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {newsletter.title}
          </h3>
          
          {newsletter.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {newsletter.description}
            </p>
          )}
          
          <div className="text-xs text-muted-foreground">
            {newsletter.items.length} item{newsletter.items.length !== 1 ? 's' : ''}
          </div>
        </div>
        
        <ChevronRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary flex-shrink-0 mt-1" />
      </div>
    </Link>
  );
};
