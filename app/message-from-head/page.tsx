"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Users, 
  Target,
  Lightbulb,
  Building,
  Globe,
  Mail,
  Phone
} from "lucide-react"

export default function MessageFromHeadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <AnimatedSection className="relative py-20 bg-gradient-to-r from-blue-900 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Message from the Head
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Department English
            </p>
            <p className="text-lg text-blue-200">
              University of Asia Pacific
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Head of Department Profile */}
      <AnimatedSection className="py-20" delay={0.2}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Profile Image and Basic Info */}
              <div className="lg:col-span-1">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                     <iframe 
                       className="w-full h-full rounded-t-lg"
                       src="https://www.youtube.com/embed/"
                       title="Message from Head of Department"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowFullScreen
                     ></iframe>
                   </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                       Mr. Takad Ahmed Chowdhury
                     </CardTitle>
                     <CardDescription className="text-lg">
                       Head of Department
                     </CardDescription>
                     <Badge className="mx-auto bg-blue-100 text-blue-800 border-blue-200">
                       Department of English
                     </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Building className="w-4 h-4" />
                        <span>University of Asia Pacific</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                         <Mail className="w-4 h-4" />
                         <span>headenglish@uap-bd.edu</span>
                       </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                       
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="p-8">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                       Welcome to the Department of English
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Dear Students, Alumni, and Esteemed Colleagues,
                    </p>
                    
<p>
  It is my great pleasure to welcome you to the Department of English at the University of Asia Pacific. As the Head of this esteemed department, I am proud to lead a vibrant academic community dedicated to the study and advancement of English language, literature, and linguistics since its inception.
</p>

<p>
  Our department serves as a dynamic center for critical thinking, creative expression, and cultural exploration, committed to nurturing the next generation of scholars, writers, educators, and communicators who will shape the intellectual and cultural future of Bangladesh and the wider world. We have built a strong foundation upon three core pillars: academic excellence, innovative research, and community engagement.
</p>

<p>
  Over the years, we have experienced significant growth in our academic programs, research activities, and alumni achievements. Our graduates have gone on to excel in diverse fields including education, publishing, media, translation, cultural organizations, and international institutions. From global corporations to local initiatives, our alumni are making meaningful contributions in literature, language education, journalism, creative writing, and beyond.
</p>

<p>
  Our faculty members are dedicated educators and researchers who bring both scholarly expertise and practical experience to the classroom. We emphasize critical analysis, literary theory, language acquisition, creative writing, and interdisciplinary studies. Our research addresses important themes such as postcolonial studies, gender and identity, digital humanities, language policy, and communication in a globalized world.
</p>

<p>
  The department prides itself on fostering strong community and industry connections that offer students valuable internship opportunities, hands-on experience, mentorship, and career development. We believe in bridging theoretical knowledge with practical application to ensure our graduates are well-prepared to meet the challenges of the evolving professional and cultural landscapes.
</p>

<p>
  Looking ahead, we remain committed to academic distinction, empowering minds, shaping futures, and cultivating leaders in the fields of language, literature, and communication. Our vision is to become the leading English department in Bangladesh, recognized internationally for our scholarly achievements, innovative research, and cultural contributions.
</p>

<p>
  I warmly invite you to explore our academic offerings, engage with our vibrant alumni network, and actively participate in our journey toward intellectual discovery and excellence in the humanities. Together, we will continue to expand the horizons of knowledge and transform ideas into meaningful impact for society.
</p>

                    <p className="text-lg font-medium">
                      Warm regards,<br />
                      <span className="text-blue-600">Mr. Takad Ahmed Chowdhury</span><br />
                       Head of Department<br />
                       Department of English<br />
                      University of Asia Pacific
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

     

    </div>
  )
}