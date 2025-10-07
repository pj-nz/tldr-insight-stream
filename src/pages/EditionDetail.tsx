import { useParams, Link } from 'react-router-dom';
import { NewsletterHeader } from '@/components/newsletter/NewsletterHeader';
import { TldrItemCard } from '@/components/newsletter/TldrItemCard';
import { TalentMarketSummary } from '@/components/newsletter/TalentMarketSummary';
import { mockNewsletters } from '@/data/mockNewsletters';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EditionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const newsletter = mockNewsletters.find((n) => n.id === id);

  if (!newsletter) {
    return (
      <div className="min-h-screen bg-background">
        <NewsletterHeader />
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Edition Not Found</h2>
            <Link to="/">
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Archive
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const formattedDate = new Date(newsletter.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      <NewsletterHeader />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back button */}
        <Link to="/" className="inline-block mb-8">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Archive
          </Button>
        </Link>

        {/* Edition header */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-mono">
              Edition #{newsletter.edition_number.toString().padStart(3, '0')}
            </span>
            <span>•</span>
            <time dateTime={newsletter.published_date}>{formattedDate}</time>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight">
            {newsletter.title}
          </h1>
          
          {newsletter.description && (
            <p className="text-lg text-muted-foreground">
              {newsletter.description}
            </p>
          )}
        </div>

        {/* Talent Market Summary */}
        {newsletter.talent_market_summary && (
          <div className="mb-12">
            <TalentMarketSummary summary={newsletter.talent_market_summary} />
          </div>
        )}

        {/* TLDR Items */}
        <div className="space-y-8">
          {newsletter.items.map((item) => (
            <TldrItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link to="/">
            <Button variant="outline">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Archive
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default EditionDetail;
