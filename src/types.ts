export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  highlight: string;
  avatarUrl?: string;
}

export interface ComparisonFeature {
  feature: string;
  category: string;
  zyphor: string | boolean;
  standardWatch: string | boolean;
  medicalPendant: string | boolean;
  advantage: string;
}

export interface SectionSpec {
  id: string;
  sectionNumber: number;
  title: string;
  headline: string;
  subheadline?: string;
  bodyCopy: string[];
  ctaText?: string;
  uxWireframeNotes: string[];
  croRationale: string;
}
