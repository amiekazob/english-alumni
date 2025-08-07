export interface StudentExperience {
  type: 'academic' | 'research' | 'internship' | 'project' | 'achievement'
  slug: string
  images: string[]
  title: string
  student: {
    year: string
    name: string
    program: string
  }
  category: string
  date: string
  contentSections: {
    content: string
  }[]
}

export const StudentExperiencesData: StudentExperience[] = [
  {
    type: 'academic',
    slug: 'first-year-journey',
    images: ['/images/student-life/academic-journey.jpg'],
    title: 'From Freshman to Future Engineer: My Academic Journey',
    student: {
      year: '2024',
      name: 'Sarah Ahmed',
      program: 'Electrical and Electronic Engineering'
    },
    category: 'Academic Excellence',
    date: '2024-01-15',
    contentSections: [
      {
        content: 'Starting my journey in EEE was both exciting and challenging. The rigorous coursework and hands-on laboratory sessions shaped my understanding of electrical engineering fundamentals.'
      }
    ]
  },
  {
    type: 'research',
    slug: 'renewable-energy-research',
    images: ['/images/student-life/research-project.jpg'],
    title: 'Breakthrough in Solar Panel Efficiency Research',
    student: {
      year: '2023',
      name: 'Mohammad Rahman',
      program: 'Electrical and Electronic Engineering'
    },
    category: 'Research Innovation',
    date: '2024-02-20',
    contentSections: [
      {
        content: 'Working under the guidance of our faculty, I contributed to groundbreaking research in solar panel efficiency, achieving a 15% improvement in energy conversion rates.'
      }
    ]
  },
  {
    type: 'internship',
    slug: 'industry-internship-experience',
    images: ['/images/student-life/internship.jpg'],
    title: 'Real-World Experience: My Internship at Tech Corp',
    student: {
      year: '2022',
      name: 'Fatima Khan',
      program: 'Electrical and Electronic Engineering'
    },
    category: 'Industry Experience',
    date: '2024-03-10',
    contentSections: [
      {
        content: 'My summer internship at a leading technology company provided invaluable hands-on experience in power systems design and implementation.'
      }
    ]
  },
  {
    type: 'project',
    slug: 'smart-grid-project',
    images: ['/images/student-life/smart-grid.jpg'],
    title: 'Designing the Future: Smart Grid Implementation',
    student: {
      year: '2023',
      name: 'Ahmed Hassan',
      program: 'Electrical and Electronic Engineering'
    },
    category: 'Final Year Project',
    date: '2024-04-05',
    contentSections: [
      {
        content: 'Our capstone project focused on developing a smart grid system that optimizes energy distribution and reduces power losses by 20%.'
      }
    ]
  },
  {
    type: 'achievement',
    slug: 'ieee-competition-winner',
    images: ['/images/student-life/ieee-award.jpg'],
    title: 'IEEE Student Competition Champion',
    student: {
      year: '2024',
      name: 'Nadia Islam',
      program: 'Electrical and Electronic Engineering'
    },
    category: 'Competition Achievement',
    date: '2024-05-15',
    contentSections: [
      {
        content: 'Winning the IEEE student design competition was a dream come true. Our innovative approach to wireless power transmission impressed the judges.'
      }
    ]
  }
]