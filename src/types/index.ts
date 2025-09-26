export interface MVP {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  results: string[];
  screenshots: string[];
  demoUrl?: string;
  category: string;
  industry: string;
  developmentTime: string;
  teamSize: number;
  createdAt: Date;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'concept';
}

export interface ContactForm {
  id?: string;
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
  interestedMVPs: string[];
  createdAt: Date;
  status: 'new' | 'contacted' | 'closed';
}

export interface PartnerProposal {
  id: string;
  industry: string;
  title: string;
  description: string;
  applicableMVPs: string[];
  benefits: string[];
  timeline: string;
  investmentRange: string;
}

export type ViewMode = 'grid' | 'list';
export type FilterCategory = 'all' | 'web' | 'mobile' | 'ai' | 'blockchain' | 'iot';
export type SortOption = 'newest' | 'oldest' | 'featured' | 'category';