import { NewsletterHeader } from '@/components/newsletter/NewsletterHeader';
import { Code2, Shield, Cloud } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsletterHeader />
      
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-12">
          {/* Hero section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">About This Newsletter</h1>
            <p className="text-xl text-muted-foreground">
              Zero fluff. Pure signal. Weekly cloud and security insights for professionals who value their time.
            </p>
          </div>

          {/* Manifesto */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">The Manifesto</h2>
            
            <div className="prose prose-invert prose-sm max-w-none space-y-4">
              <p className="text-foreground leading-relaxed">
                Most tech newsletters waste your time. They bury critical security updates under marketing fluff, 
                bloated commentary, and clickbait headlines. This newsletter is different.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Every week, I distill the most important cloud and security developments into digestible summaries. 
                No filler. No self-promotion. Just the facts you need to stay informed.
              </p>

              <div className="border-l-2 border-primary pl-4 py-2 my-6">
                <p className="text-foreground italic">
                  "If I had more time, I would have written a shorter letter." — Blaise Pascal
                </p>
              </div>

              <p className="text-foreground leading-relaxed">
                Brevity takes effort. Each item is researched, analyzed, and compressed to its essence. 
                Optional deep dives are available for those who want context, but the TLDR always comes first.
              </p>
            </div>
          </div>

          {/* What to expect */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">What to Expect</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Cloud Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  AWS, GCP, Azure updates, IaC developments, and platform news that matters.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-destructive/10 border border-destructive/20">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold">Security & Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  CVEs, zero-day exploits, compliance updates, and security best practices.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 border border-accent/20">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold">DevOps & Tools</h3>
                <p className="text-sm text-muted-foreground">
                  CI/CD, container tech, Kubernetes, and tooling that improves workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">The Philosophy</h2>
            
            <div className="space-y-4 text-foreground">
              <div className="flex gap-3">
                <span className="text-primary font-mono shrink-0">→</span>
                <div>
                  <strong>Introverted Extrovert:</strong> High-signal content without unnecessary noise. 
                  Information-dense but approachable.
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-mono shrink-0">→</span>
                <div>
                  <strong>Respect for Time:</strong> You're busy. Every word earns its place. 
                  Optional context available for those who want depth.
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-mono shrink-0">→</span>
                <div>
                  <strong>No Vendor Bias:</strong> Objective analysis. If AWS makes a mistake, you'll hear about it. 
                  If Google nails something, same deal.
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-mono shrink-0">→</span>
                <div>
                  <strong>Mobile-First:</strong> Read on the train, in the queue, wherever. 
                  The format works on any device.
                </div>
              </div>
            </div>
          </div>

          {/* Format */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Format Guide</h2>
            
            <div className="bg-card border border-border rounded-md p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Each Item Contains:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Category tag</strong> for quick scanning</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Clickable headline</strong> linking to the source</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">TLDR summary</strong> (2-3 sentences max)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Optional deep dive</strong> for context and implications</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Deep dives are collapsed by default. Click to expand when you need more context. 
                  Skip them when you don't.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Published weekly. No ads. No sponsors. No bullshit.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
