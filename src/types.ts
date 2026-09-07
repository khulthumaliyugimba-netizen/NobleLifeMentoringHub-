export interface Harm {
  title: string;
  text: string;
}

export interface Quote {
  text: string;
  ref: string;
}

export type TopicCategory = 
  | 'habits' 
  | 'character' 
  | 'relationships' 
  | 'mindset';

export interface Topic {
  id: string;
  title: string;
  summary: string;
  icon: string;
  category: TopicCategory;
  harms: Harm[];
  islamicView: string[];
  ifYouFail: string[];
  confidence: string[];
  verses: Quote[];
  hadith: Quote[];
}

export interface ContactForm {
  name: string;
  email: string;
  topic: 'general' | 'struggle' | 'mentoring' | 'other';
  message: string;
}

export type ViewType = 'home' | 'topics' | 'topic-detail' | 'about' | 'contact' | 'saved' | 'reset';
