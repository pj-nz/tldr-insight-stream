import { Link } from 'react-router-dom';

export const NewsletterHeader = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="group">
            <h1 className="text-2xl font-bold tracking-tight">
              Weekly TLDR
              <span className="ml-2 text-primary group-hover:underline">Cloud/Security</span>
            </h1>
          </Link>
          
          <nav className="flex gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Archive
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
