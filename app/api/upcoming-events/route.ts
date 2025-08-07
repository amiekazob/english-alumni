import { NextResponse } from 'next/server'

type UpcomingEvent = {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  category: string
  priority: 'high' | 'medium' | 'low'
  registrationRequired: boolean
  maxParticipants?: number
  currentParticipants?: number
  organizer: string
  tags: string[]
}

// Sample upcoming events data
const upcomingEventsData: UpcomingEvent[] = [
  {
    id: 1,
    title: "Competitive Programming Bootcamp",
    date: "2025-08-04",
    time: "10:00 AM",
    location: "Pharmacy Lab 506",
    description: "Hands-on workshop covering fundamentals of AI and ML with practical coding sessions.",
    image: "/placeholder.jpg",
    category: "Bootcamp",
    priority: "high",
    registrationRequired: true,
    maxParticipants: 25,
    currentParticipants: 10,
    organizer: "Programming & AI Club",
    tags: ["C++", "Competitive Programming", "ICPC", "Hands-on"]
  },
  {
    id: 2,
    title: "Inter-School Programming Contest",
    date: "2025-08-16",
    time: "9:00 AM",
    location: "Main Auditorium",
    description: "A coding competition designed for school boys to showcase their problem-solving and programming skills. Participants will solve algorithm-based challenges, compete for prizes, and gain exposure to the world of competitive programming. Perfect for beginners and future tech leaders!",
    image: "/placeholder.jpg",
    category: "Competition",
    priority: "high",
    registrationRequired: true,
    maxParticipants: 100,
    currentParticipants: 78,
    organizer: "Programming & AI Club",
    tags: ["Programming", "Contest", "Competition", "Coding"]
  },
  {
    id: 4,
    title: "Signing Ceremony with Paboya for Programming Contest",
    date: "2025-08-06",
    time: "11:00 AM",
    location: "VC Room",
    description: "A formal signing ceremony between the Programming and AI Club and Paboya to initiate collaboration for an inter-school programming contest. The event marks the beginning of a joint effort to promote coding among school students.",
    image: "/images/upcoming_events/sign_paboya.jpg",
    category: "Collaboration",
    priority: "high",
    registrationRequired: false,
    organizer: "Pharmacy Alumni Association",
    tags: ["Collaboration", "Programming", "Paboya"]
  },
  {
    id: 5,
    title: "Alumni Reunion with Multiple Alumni Associations and Career Opportunity",
    date: "2025-08-12",
    time: "4:00 PM",
    location: "Auditorium, UAP",
    description: "A grand alumni reunion involving multiple departments and alumni associations, celebrating past achievements and fostering future connections. The event will also include sessions on career opportunities, mentorship, and networking for current students.",
    image: "/placeholder.jpg",
    category: "Alumni & Career",
    priority: "high",
    registrationRequired: true,
    organizer: "Pharmacy Alumni Association & Multiple Departments & Alumni Associations",
    tags: ["Alumni", "Networking", "Career", "Mentorship", "Reunion", "Multi-Department"]
  },
  {
    id: 6,
    title: "Dijkstra 2025",
    date: "2025-08-28",
    time: "3:00 PM",
    location: "Comilla Zilla School, Cumilla",
    description: "A dedicated initiative aimed at empowering school and college students in the Cumilla region by enhancing their skills in programming, mathematics, and problem-solving through competitions, workshops, and mentorship programs.",
    image: "/images/upcoming_events/dijkstra.jpg",
    category: "Festival",
    priority: "high",
    registrationRequired: true,
    maxParticipants: 500,
    currentParticipants: 234,
    organizer: "Pharmacy Alumni Association & Pharmacy Department",
    tags: ["Tech Fest", "Exhibition", "Innovation", "Networking"]
  }
]

export async function GET() {
  try {
    // Sort events by date to ensure upcoming events are in chronological order
    const sortedEvents = upcomingEventsData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    
    return NextResponse.json(sortedEvents)
  } catch (error) {
    console.error('Error fetching upcoming events:', error)
    return NextResponse.json({ error: 'Failed to fetch upcoming events' }, { status: 500 })
  }
}