// Press Release data for the UAP EEE Department
// This file contains all official press releases and formal announcements

export interface PressRelease {
  id: string | number;
  slug: string;
  title: string;
  content: string;
  fullContent: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  category: 'partnership' | 'award' | 'facility' | 'conference' | 'innovation' | 'scholarship' | 'competition' | 'alumni' | 'committee' | 'event' | 'tragedy';
  isActive: boolean;
  expiryDate?: string;
  type: 'press-release' | 'announcement';
  link: string;
  pdfSectionTitle?: string;
  pdfSectionDescription?: string;
  pdfUrl?: string;
}

export const pressReleases: PressRelease[] = [



{
  id: 1,
  slug: "freshman-meet-greet-batch-42",
  title: "Freshman Meet & Greet – Batch 42",
  content: "Step into the future with Batch 42! Join us for a warm welcome, meaningful connections, and a spark of inspiration at the Freshman Meet & Greet. Your journey begins here.",
  fullContent: "Freshman Meet & Greet – Batch 42\n\nHosted by the Programming and AI Club, Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific.\n\nDate: 29th July 2025\nLocation: Room 514\n\nWe invite all incoming students of Batch 42 to join us for an exciting welcome event. This gathering aims to help you build meaningful connections, meet fellow classmates, and get inspired as you start your academic journey.\n\nCome and be part of a supportive community that will guide you through your university life. We look forward to welcoming you warmly and making this a memorable beginning.",
  date: "2025-07-25",
  priority: "medium",
  category: "event",
  isActive: true,
  type: "announcement",
  link: "/press-release/freshman-meet-greet-batch-42",
  pdfSectionTitle: "Download Event Details",
  pdfSectionDescription: "Get the complete event information and schedule in PDF format.",
  pdfUrl: "/pdf/press-releases/freshman-meet-greet-batch-42.pdf"
},
{
  id: 2,
  slug: "milestone-school-tragedy-2025",
  title: "Tragic Air Force Jet Crash at Milestone School Leaves Nation in Mourning",
  content: "On July 21, 2025, a Bangladesh Air Force training jet crashed into Milestone School and College in Dhaka, causing the deaths of at least 31 people — most of them children. The nation grieves the loss of young lives, and the Programming and AI Club, Department of EEE, University of Asia Pacific, stands in deep sorrow with the victims' families.",
  fullContent: "On July 21, 2025, a Bangladesh Air Force FT-7BGI training jet tragically crashed into the campus of Milestone School and College in Uttara, Dhaka. The accident occurred shortly after takeoff due to a reported mechanical failure.\n\nThe crash claimed the lives of at least 31 people, including students, teachers, and the pilot. Over 160 individuals were injured, many of them critically. The incident has plunged the entire nation into mourning.\n\nAmong the deceased was Ms. Maherin Chowdhury, a dedicated teacher who gave her life to save her students, reportedly saying, \"They are also my children.\" Her bravery and sacrifice have touched hearts across the country.\n\nThe Programming and AI Club, Department of EEE, University of Asia Pacific, is deeply saddened by this devastating tragedy. As a student-led organization committed to education and youth empowerment, our hearts ache for the young lives lost and for the families who are enduring unimaginable pain. We stand in solidarity with the Milestone School community during this heartbreaking time.\n\nThe government has declared a national day of mourning and launched a high-level investigation into the crash. Citizens across Bangladesh have come together in grief, calling for greater safety measures and accountability.\n\nThis heartbreaking event is a painful reminder of the preciousness of life and the responsibility to protect the innocent. Our thoughts and prayers are with the families of the victims, the injured, and the entire Milestone School community.",
  date: "2025-07-21",
  priority: "high",
  category: "tragedy",
  isActive: true,
  type: "press-release",
  link: "/press-release/milestone-school-tragedy-2025",
  pdfSectionTitle: "Download Official Statement",
  pdfSectionDescription: "Access the full press release and official statement in PDF format. Please consider sharing to raise awareness.",
  pdfUrl: "/pdf/press-releases/milestone-school-tragedy-2025.pdf"
},

 {
  id: 3,
  slug: "freshman-meet-greet-batch-42-postponed",
  title: " Freshman Meet & Greet – Batch 42 (Postponed)",
  content: "Step into the future with Batch 42! Our much-anticipated Freshman Meet & Greet, originally scheduled for 29th July in Room 514, has been postponed due to unavoidable circumstances. We truly appreciate your understanding. A new date will be announced soon.",
  fullContent: "Freshman Meet & Greet – Batch 42 (Postponed)\n\nStep into the future with Batch 42!\n\nOur much-anticipated Freshman Meet & Greet, originally scheduled for 29th July in Room 514, has been postponed due to unavoidable circumstances.\n\nWe truly appreciate your understanding and support. A new date will be announced soon, and we can’t wait to welcome you with warmth, inspiration, and meaningful connections.\n\nStay tuned — your journey with the Programming and AI Club is just beginning.",
  date: "2025-07-29",
  priority: "medium",
  category: "event",
  isActive: true,
  type: "announcement",
  link: "/press-release/freshman-meet-greet-batch-42-postponed",
  pdfSectionTitle: "Download Event Details (Coming Soon)",
  pdfSectionDescription: "The updated event schedule and welcome kit will be available here once the new date is confirmed.",
  pdfUrl: ""
},
  
{
  id: 4,
  slug: "spring-2025-executive-committee",
  title: "Programming and AI Club, Department of EEE, UAP Announces Spring 2025 Executive Committee",
  content: "The Programming and AI Club of the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific, is proud to announce its newly formed Executive Committee for Spring 2025. This new committee reflects the club's ongoing commitment to nurturing technical excellence, student leadership, and collaborative growth among its members. Notable appointments include Samiul Alam Shajal as President, Abdullah Sarker Shihab as Organising Secretary, and Nibir Sarker as Assistant Treasurer.",
  fullContent: "The Programming and AI Club of the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific, is proud to announce its newly formed Executive Committee for Spring 2025.\n\nThis new committee reflects the club's ongoing commitment to nurturing technical excellence, student leadership, and collaborative growth among its members. The executive body consists of passionate individuals dedicated to driving forward the club's vision of advancing programming, artificial intelligence, and innovation on campus.\n\nNotable appointments include:\n\n• Samiul Alam Shajal as President\n• Abdullah Sarker Shihab as Organising Secretary\n• Nibir Sarker as Assistant Treasurer\n\nThe newly appointed committee aims to introduce a series of student-centered initiatives, including inter-university programming contests, AI workshops, hands-on project labs, and collaborative research opportunities in emerging technologies.\n\nThe Programming and AI Club continues to serve as a vibrant platform for aspiring programmers, developers, and AI enthusiasts, and the Spring 2025 committee is committed to taking it to new heights.",
  date: "2025-08-01",
  priority: "high",
  category: "committee",
  isActive: true,
  expiryDate: "2026-01-01",
  type: "press-release",
  link: "/press-release/spring-2025-executive-committee",
  pdfSectionTitle: "Click the button below to view the executive committee",
  pdfSectionDescription: "Click the button below to view the executive committee",
  pdfUrl: "/pdf/press-releases/Class_Routine.pdf"
},


 
];

// Helper function to get active press releases
export const getActivePressReleases = (): PressRelease[] => {
  const now = new Date();
  return pressReleases.filter(pressRelease => {
    if (!pressRelease.isActive) return false;
    if (pressRelease.expiryDate) {
      const expiryDate = new Date(pressRelease.expiryDate);
      return now <= expiryDate;
    }
    return true;
  });
};

// Helper function to get press releases by priority
export const getPressReleasesByPriority = (priority: 'high' | 'medium' | 'low'): PressRelease[] => {
  return getActivePressReleases().filter(pressRelease => pressRelease.priority === priority);
};

// Helper function to get press releases by category
export const getPressReleasesByCategory = (category: 'partnership' | 'award' | 'facility' | 'conference' | 'innovation' | 'scholarship' | 'competition' | 'alumni' | 'committee' | 'event' | 'tragedy'): PressRelease[] => {
  return getActivePressReleases().filter(pressRelease => pressRelease.category === category);
};

// Helper function to get recent press releases
export const getRecentPressReleases = (limit: number = 5): PressRelease[] => {
  return getActivePressReleases()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to format date
export const formatPressReleaseDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Helper function to get all press releases
export const getAllPressReleases = (): PressRelease[] => {
  return pressReleases;
};

// Helper function to get press release by slug
export const getPressReleaseBySlug = (slug: string): PressRelease | undefined => {
  return pressReleases.find(pressRelease => pressRelease.slug === slug);
};

export default pressReleases;