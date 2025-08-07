export interface PastEvent {
  id: string;
  title: string;
  date: string;
  images: string[];
  link: string;
  shortDescription: string;
}

export const PastEventsData: PastEvent[] = [

  {
    id: '1',
    title: 'Industry Connect 2024',
    date: '2024-01-10',
    images: ['/images/events/industry-connect-2024.jpg'],
    link: '/past-events/industry-connect-2024',
    shortDescription: 'Networking event connecting students with leading industry professionals and potential employers.'
  }
];

export const pastEvents = PastEventsData;

export const formatDate = (date: string | Date): { day: string; month: string; year: string } => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }),
    year: d.toLocaleDateString('en-US', { year: 'numeric' }),
  };
};