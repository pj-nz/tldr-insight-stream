import { NewsletterHeader } from '@/components/newsletter/NewsletterHeader';
import { EditionCard } from '@/components/newsletter/EditionCard';
import { mockNewsletters } from '@/data/mockNewsletters';

const Archive = () => {
  // Sort newsletters by edition number (descending)
  const sortedNewsletters = [...mockNewsletters].sort(
    (a, b) => b.edition_number - a.edition_number
  );

  return (
    <div className="min-h-screen bg-background">
      <NewsletterHeader />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Newsletter Archive</h2>
          <p className="text-muted-foreground">
            Weekly summaries of critical cloud and security updates. Zero fluff, pure signal.
          </p>
        </div>

        <div className="divide-y divide-border">
          {sortedNewsletters.map((newsletter) => (
            <EditionCard key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Archive;
