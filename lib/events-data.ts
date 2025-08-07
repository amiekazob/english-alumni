// This file now contains only upcoming events or current news
// Past events have been moved to past-events-data.ts

export const NewsEvents: any[] = [
  // This file now contains only upcoming events or current news
  // Past events have been moved to past-events-data.ts
];

export const events = NewsEvents;

export interface Event {
  id: number;
  title: string;
  shortDescription: string;
  date: string;
  order?: number;
  images: string[];
  contentSections: {
    sectionTitle: string;
    sectionDescription: string;
    images?: string[]; // Unlimited images per section
  }[];
  highlights?: string[];
  category: string;
  type: string;
  link: string;
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};