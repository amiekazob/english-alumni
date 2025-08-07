export interface Achievement {
  id: string
  title: string
  shortDescription: string
  date?: string
  order: number
  images: string[]
  contentSections: {
    sectionTitle: string
    sectionDescription: string
  }[]
  highlights: string[]
  category: string
  type: 'award' | 'conference' | 'recognition' | 'competition' | 'academic' | 'innovation'
  link: string
}

export const achievementsData: Achievement[] = [

  {
    id: "department-ieb-accreditation",
    title: "Department IEB Accreditation",
    shortDescription: "Since its commencement the department is producing quality graduates every year. In the 2015, 152 students and in 016, 114 have earned their B.Sc. degree. Since inception in 2004, the Department has produced 891graduates in B.Sc. in Electrical and Electronic Engineering. In 2014, the department has accredited by the Board of Accreditation for Engineering and Technical Education (BAETE), Bangladesh. As a result the graduates from the department of EEE, UAP can become a member of Institution of Engineers, Bangladesh (IEB).",
    date: "2014-12-01T00:00:00Z",
    order: 1,
    images: [
      "/images/our-achievements/department-ieb-accreditation/1.jpg"
    ],
    contentSections: [
      {
        sectionTitle: "Accreditation Achievement",
        sectionDescription: "In 2014, the Department of Electrical and Electronic Engineering at UAP achieved a significant milestone by receiving accreditation from the Board of Accreditation for Engineering and Technical Education (BAETE), Bangladesh. This accreditation validates the quality of education and ensures that our graduates meet international standards in engineering education."
      },
      {
        sectionTitle: "Graduate Excellence",
        sectionDescription: "Since its inception in 2004, the Department has produced 891 graduates in B.Sc. in Electrical and Electronic Engineering. The department consistently produces quality graduates every year, with 152 students graduating in 2015 and 114 in 2016, demonstrating our commitment to academic excellence and professional development."
      },
      {
        sectionTitle: "Professional Recognition",
        sectionDescription: "As a result of the BAETE accreditation, graduates from the Department of EEE, UAP are eligible to become members of the Institution of Engineers, Bangladesh (IEB). This professional recognition opens doors for our graduates to pursue chartered engineer status and enhances their career prospects in the engineering field."
      }
    ],
    highlights: [
      "BAETE accreditation received in 2014",
      "891 graduates produced since 2004",
      "Graduates eligible for IEB membership",
      "Quality education meeting international standards",
      "Consistent graduate production every year"
    ],
    category: "Accreditation",
    type: "recognition",
    link: "/our-achievements/department-ieb-accreditation"
  },
  
{
  id: "negative-pressure-canopy-covid19",
  title: "First Prototype of Negative Pressure Isolation Canopy for COVID-19",
  shortDescription: "EEE student Sakhawat Hossen Rakib developed the first-ever prototype of a negative pressure isolation canopy for COVID-19 under the supervision of Dr. Khondkar Siddique-e-Rabbani.",
  date: "2020-06-01T00:00:00Z",
  order: 3,
  images: [
    "/images/our-achievements/negative-pressure-canopy-covid19/1.jpg"
    
  ],
  contentSections: [
    {
      sectionTitle: "Innovative Medical Engineering",
      sectionDescription: "Sakhawat Hossen Rakib, an alumnus and lecturer of the EEE Department at UAP, developed the first-ever prototype of a Negative Pressure Isolation Canopy for COVID-19 patients. This innovation was aimed at minimizing the risk of virus transmission in hospitals by creating a controlled airflow environment around infected patients."
    },
    {
      sectionTitle: "Expert Supervision",
      sectionDescription: "The project was supervised by Dr. Khondkar Siddique-e-Rabbani, a renowned biomedical physicist, who guided the academic work and prototype development. The initiative reflects the department's commitment to applying engineering knowledge for impactful healthcare solutions during the pandemic."
    }
  ],
  highlights: [
    "First-ever negative pressure canopy prototype from UAP",
    "COVID-19 healthcare innovation",
    "Developed by EEE student Sakhawat Hossen Rakib",
    "Supervised by Dr. Khondkar Siddique-e-Rabbani",
    "Contribution to biomedical engineering and public health"
  ],
  category: "Academic & Innovation",
  type: "innovation",
  link: "/achievements/negative-pressure-canopy-covid19"
},
{
  id: "mujib-borsho-it-carnival-2020",
  title: "Champion in IDEA Contest – Mujib Borsho IT Carnival 2020",
  shortDescription: "Team UAP_JUVENILE_SQUAD secured the Champion position in the IDEA Contest of Mujib Borsho IT Carnival 2020, showcasing their excellence in innovation and problem-solving.",
  date: "2020-03-01T00:00:00Z",
  order: 4,
  images: [
    "/images/our-achievements/mujib-borsho-it-carnival-2020/1.jpg"
  ],
  contentSections: [
    {
      sectionTitle: "National Level Recognition",
      sectionDescription: "Team UAP_JUVENILE_SQUAD from the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific, achieved the Champion position in the IDEA Contest at the Mujib Borsho IT Carnival 2020. The event celebrated the birth centenary of Bangabandhu Sheikh Mujibur Rahman and aimed to promote tech-based innovation among students nationwide."
    },
    {
      sectionTitle: "Excellence in Innovation",
      sectionDescription: "The team's success in the IDEA Contest reflects their creativity, teamwork, and strong technical foundation. It also highlights the department's dedication to nurturing talent capable of solving real-world problems through technology."
    }
  ],
  highlights: [
    "Champion in IDEA Contest – Mujib Borsho IT Carnival 2020",
    "National recognition for innovation",
    "Team: UAP_JUVENILE_SQUAD",
    "Promoting student-led tech solutions"
  ],
  category: "Competition",
  type: "competition",
  link: "/achievements/mujib-borsho-it-carnival-2020"
},

{
  id: "robo-soccer-2019",
  title: "Champion in ROBO SOCCER 2019",
  shortDescription: "Team UAP_EEE_Alient_BOt claimed the Champion title in ROBO SOCCER 2019, demonstrating superior robotics engineering and teamwork.",
  date: "2019-10-01T00:00:00Z",
  order: 5,
 images: [
    "/images/our-achievements/robo-soccer-2019/1.jpg"
  ],
  contentSections: [
    {
      sectionTitle: "Robotics Victory",
      sectionDescription: "Team UAP_EEE_Alient_BOt from the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific, emerged as the Champion in ROBO SOCCER 2019. The competition challenged participants to design and program autonomous robots capable of competing in soccer matches."
    },
    {
      sectionTitle: "Technical Brilliance",
      sectionDescription: "This victory highlights the team's outstanding technical abilities in robotics, sensor integration, and strategic programming. It reflects the department's strong foundation in hands-on learning and competitive engineering."
    }
  ],
  highlights: [
    "Champion in ROBO SOCCER 2019",
    "Team: UAP_EEE_Alient_BOt",
    "Robotics and automation excellence",
    "Success through innovation and teamwork"
  ],
  category: "Competition",
  type: "competition",
  link: "/achievements/robo-soccer-2019"
},
{
  id: "smart-ev-charging-award-ahad",
  title: "Top 10 Idea Award – Smart EV Charging Station",
  shortDescription: "Muhammad Ahad Rahman Miah, Assistant Professor of EEE, UAP, was recognized for his innovative idea of a Smart Charging Station for Electric Vehicles using solar power.",
  date: "",
  //date: "2023-05-01T00:00:00Z",
  order: 6,
  images: ["/images/our-achievements/smart-ev-charging-award-ahad/1.jpg"],
  contentSections: [
    {
      sectionTitle: "National Recognition",
      sectionDescription: "Muhammad Ahad Rahman Miah, Assistant Professor of the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific (UAP), received a certificate of achievement from Nasrul Hamid, MP, State Minister for Power, Energy & Mineral Resources, Government of Bangladesh. The award was given in recognition of his idea being selected among the Top 10 at a national-level innovation platform."
    },
    {
      sectionTitle: "Innovative Concept",
      sectionDescription: "His proposed idea — 'Smart Charging Station for Electric Vehicles (EVs) using Solar Power' — promotes sustainable and renewable energy-based solutions for Bangladesh’s growing EV infrastructure. The concept aligns with the country's vision for green energy and smart mobility."
    }
  ],
  highlights: [
    "Top 10 Idea Award recipient",
    "Recognized by Nasrul Hamid, MP",
    "Smart solar-powered EV charging concept",
    "Contribution to sustainable energy solutions"
  ],
  category: "Award",
  type: "award",
  link: "/achievements/smart-ev-charging-award-ahad"
},
{
  id: "ieee-special-session-utar-2018",
  title: "Special Session at IEEE Conference – Malaysia 2018",
  shortDescription: "UAP EEE organized a special session on Power Control and Energy Management at the 7th IEEE Conference on Smart Grid and Clean Energy in Malaysia.",
  date: "2018-05-01T00:00:00Z",
  order: 7,
  images: ["/images/our-achievements/ieee-special-session-utar-2018/1.jpg"],
  contentSections: [
    {
      sectionTitle: "International Recognition",
      sectionDescription: "For the first time in Bangladesh, the Department of Electrical and Electronic Engineering (EEE), UAP organized a special session titled 'Power Control and Energy Management' in a foreign platform — the 7th IEEE Conference on Smart Grid and Clean Energy held at UTAR, Malaysia, in May 2018."
    },
    {
      sectionTitle: "Academic Contribution",
      sectionDescription: "Three academic papers were presented successfully during this special session. Among them, one paper was honored with the Best Paper Award, showcasing the academic excellence of UAP's EEE department."
    },
    {
      sectionTitle: "Organizing Team",
      sectionDescription: "Dr. Md Shahrukh Adnan Khan served as the Organizer and Session Chair, while Md. Masum Howlader contributed as the Co-Organizer of the session."
    }
  ],
  highlights: [
    "1st international special session by UAP EEE",
    "IEEE Conference at UTAR, Malaysia",
    "3 papers presented, 1 Best Paper Award",
    "Led by Dr. Shahrukh Adnan Khan and Md. Masum Howlader"
  ],
  category: "Conference",
  type: "conference",
  link: "/achievements/ieee-special-session-utar-2018"
}




]

export const achievements = achievementsData
export type AchievementType = typeof achievementsData[0]

export const formatDate = (date: string | Date): { day: string; month: string; year: string } => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }),
    year: d.toLocaleDateString('en-US', { year: 'numeric' }),
  };
};