// Type definitions for TLDR Newsletter schema

export interface TldrItem {
  id: string;
  title: string;
  link_url: string;
  tldr_summary: string;
  is_deep_dive: boolean;
  deep_dive_content?: string;
  category?: 'cloud' | 'security' | 'devops' | 'infrastructure';
}

export interface Newsletter {
  id: string;
  edition_number: number;
  title: string;
  published_date: string;
  description?: string;
  items: TldrItem[];
}

export interface NewsletterArchive {
  newsletters: Newsletter[];
}
