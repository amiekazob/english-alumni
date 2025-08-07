export interface EntrepreneurshipType {
  id: string
  name: string
  description: string
  shortDescription: string
  type: string
  image: string
  achievements: string[]
  company?: string
  valuation?: string
}

export const entrepreneurshipData: EntrepreneurshipType[] = [
  {
    id: '1',
    name: 'TechStart Solutions',
    description: 'Innovative software solutions for small businesses that help streamline operations and boost productivity.',
    shortDescription: 'Innovative software solutions for small businesses',
    type: 'Software',
    image: '/images/our-alumni-and-student-in-entrepreneurship/techstart.jpg',
    achievements: ['Series A Funding', 'Product Launch', 'Award Winner'],
    company: 'TechStart Solutions Inc.',
    valuation: '$15M'
  },
  {
    id: '2',
    name: 'GreenEnergy Systems',
    description: 'Sustainable energy solutions for residential and commercial use with cutting-edge technology and environmental focus.',
    shortDescription: 'Sustainable energy solutions for residential and commercial use',
    type: 'Energy',
    image: '/images/our-alumni-and-student-in-entrepreneurship/greenenergy.jpg',
    achievements: ['Government Grant', 'Patent Filed', 'Green Tech Award'],
    company: 'GreenEnergy Systems Ltd.',
    valuation: '$8M'
  },
  {
    id: '3',
    name: 'SmartHome Innovations',
    description: 'IoT-based home automation systems that provide intelligent control and monitoring for modern homes.',
    shortDescription: 'IoT-based home automation systems',
    type: 'IoT',
    image: '/images/our-alumni-and-student-in-entrepreneurship/smarthome.jpg',
    achievements: ['Product Launch', 'Tech Innovation Award', 'Market Expansion'],
    company: 'SmartHome Innovations Corp.',
    valuation: '$5M'
  }
]