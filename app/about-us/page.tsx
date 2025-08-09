"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer } from "@/components/ui/staggered-container"
import { 
  Calendar, 
  Users, 
  Award, 
  BookOpen, 
  Building, 
  Target,
  TrendingUp,
  Globe,
  Lightbulb,
  GraduationCap,
  Network,
  Heart,
  Trophy,
  Briefcase
} from "lucide-react"

interface Milestone {
  year: string
  title: string
  description: string
  type: 'establishment' | 'achievement' | 'expansion' | 'recognition'
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  value: string
}

const milestones: Milestone[] = [
  {
    year: '2004',
    title: 'Department Establishment',
    description: 'The Department of Electrical and Electronic Engineering was established at University of Asia Pacific, beginning our journey of excellence in engineering education.',
    type: 'establishment'
  },
  {
    year: '2008',
    title: 'First Graduation Batch',
    description: 'Our first batch of EEE graduates completed their studies, marking the beginning of our distinguished alumni network.',
    type: 'achievement'
  },
  {
    year: '2018',
    title: 'Alumni Association Formation',
    description: 'Formal establishment of the EEE Alumni Association to strengthen connections and support current students.',
    type: 'expansion'
  },
  {
    year: '2018',
    title: 'Industry Partnership Program',
    description: 'Launched comprehensive industry partnership program connecting alumni with current students for mentorship and career guidance.',
    type: 'achievement'
  },
  {
    year: '2025',
    title: 'Digital Alumni Portal',
    description: 'Introduced digital alumni portal to enhance communication, networking, and professional development opportunities.',
    type: 'expansion'
  },
  {
    year: '2025',
    title: 'Global Alumni Network',
    description: 'Expanded alumni network internationally with graduates working in leading companies across USA, Europe, Asia, and Middle East.',
    type: 'recognition'
  },
  {
    year: '2025',
    title: 'Alumni Scholarship Fund',
    description: 'Established alumni-funded scholarship program to support deserving students in their academic journey.',
    type: 'expansion'
  },
  {
    year: '2025',
    title: 'Alumni Excellence Awards',
    description: 'Launched annual alumni excellence awards recognizing outstanding achievements in professional, entrepreneurial, and social contributions.',
    type: 'achievement'
  }
]

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Alumni Network',
    description: 'Proud graduates worldwide',
    icon: <Users className="w-8 h-8" />,
    value: '500+'
  },
  {
    id: '2',
    title: 'Industry Leaders',
    description: 'Alumni in leadership positions',
    icon: <Trophy className="w-8 h-8" />,
    value: '50+'
  },
  {
    id: '3',
    title: 'Entrepreneurs',
    description: 'Alumni-founded companies',
    icon: <Briefcase className="w-8 h-8" />,
    value: '25+'
  },
  {
    id: '4',
    title: 'Countries',
    description: 'Global presence of our alumni',
    icon: <Globe className="w-8 h-8" />,
    value: '15+'
  },
  {
    id: '5',
    title: 'Mentorship Programs',
    description: 'Active mentorship initiatives',
    icon: <GraduationCap className="w-8 h-8" />,
    value: '10+'
  }
  
]

const getMilestoneColor = (type: string) => {
  switch (type) {
    case 'establishment': return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'achievement': return 'bg-green-100 text-green-800 border-green-200'
    case 'expansion': return 'bg-purple-100 text-purple-800 border-purple-200'
    case 'recognition': return 'bg-orange-100 text-orange-800 border-orange-200'
    default: return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

const getMilestoneIcon = (type: string) => {
  switch (type) {
    case 'establishment': return <Building className="w-5 h-5" />
    case 'achievement': return <Award className="w-5 h-5" />
    case 'expansion': return <TrendingUp className="w-5 h-5" />
    case 'recognition': return <Target className="w-5 h-5" />
    default: return <Calendar className="w-5 h-5" />
  }
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <AnimatedSection className="relative py-20 bg-gradient-to-r from-blue-900 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              EEE Alumni Portal
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Department of EEE, University of Asia Pacific
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Established 2004</span>
              </div>
              <div className="flex items-center space-x-2">
                <Network className="w-5 h-5" />
                <span>Global Network</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Lifelong Connections</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Alumni Portal Overview */}
      <AnimatedSection className="py-20" delay={0.2}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To foster a vibrant and supportive alumni community that strengthens professional networks, 
                    provides mentorship opportunities, and contributes to the continuous growth and excellence 
                    of the EEE Department at University of Asia Pacific.
                  </p>
                </Card>
                <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become the most connected and influential alumni network in Bangladesh's engineering community, 
                    empowering graduates to achieve professional excellence while giving back to future generations 
                    of electrical and electronic engineers.
                  </p>
                </Card>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                The EEE Alumni Portal serves as the digital hub connecting our distinguished graduates worldwide. 
                Since our first graduation in 2012, we have built a strong community of professionals who continue 
                to shape the future of electrical and electronic engineering across various industries and continents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Alumni Community
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our alumni network spans across the globe, with graduates working in leading technology companies, 
                  research institutions, and entrepreneurial ventures. From Silicon Valley to Singapore, from Dhaka 
                  to Dubai, our alumni are making significant contributions to the field of electrical and electronic engineering.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The Alumni Portal facilitates meaningful connections, career opportunities, and knowledge sharing 
                  among our graduates. Through mentorship programs, industry insights, and collaborative projects, 
                  we ensure that the bond between our alumni and the department remains strong and mutually beneficial.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-full text-white">
                      <Network className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Professional Networking</h4>
                      <p className="text-sm text-gray-600">Connect with alumni across industries and continents</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-600 rounded-full text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Mentorship Programs</h4>
                      <p className="text-sm text-gray-600">Guide and support current students and recent graduates</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-600 rounded-full text-white">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Career Development</h4>
                      <p className="text-sm text-gray-600">Job opportunities, skill development, and industry insights</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements Section */}
      <AnimatedSection className="py-20 bg-gray-50" delay={0.4}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Alumni Network Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our alumni's global reach and professional excellence
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {achievement.value}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Timeline Section */}
      <AnimatedSection className="py-20" delay={0.6}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Alumni Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in building our distinguished alumni community
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-blue-200 rounded-full flex items-center justify-center text-blue-600 relative z-10">
                      {getMilestoneIcon(milestone.type)}
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={`${getMilestoneColor(milestone.type)} border`}>
                            {milestone.year}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {milestone.type.charAt(0).toUpperCase() + milestone.type.slice(1)}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {milestone.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {milestone.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-900 to-green-900 text-white" delay={0.8}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Alumni Community
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Connect with fellow EEE graduates, share your achievements, mentor current students, 
            and be part of a network that's shaping the future of electrical and electronic engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/alumni">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                View Alumni Directory
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}