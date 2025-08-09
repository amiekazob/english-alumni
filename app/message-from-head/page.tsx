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
              Department EEE
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
                       src="https://www.youtube.com/embed/x3W_aZg8tsA?si=ZxFRZjalX-h3TDcT"
                       title="Message from Head of Department"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowFullScreen
                     ></iframe>
                   </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                       A.H.M. Zadidul Karim
                     </CardTitle>
                     <CardDescription className="text-lg">
                       Head of Department
                     </CardDescription>
                     <Badge className="mx-auto bg-blue-100 text-blue-800 border-blue-200">
                       Department of EEE
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
                         <span>headeee@uap-bd.edu</span>
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
                       Welcome to the Department of EEE
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Dear Students, Alumni, and Esteemed Colleagues,
                    </p>
                    
                   <p>
  It is my great pleasure to welcome you to the Department of Electrical and Electronic Engineering (EEE) 
  at the University of Asia Pacific. As the Head of this distinguished department, I am proud to 
  lead an institution that has been at the forefront of engineering education, research, and innovation 
  since its establishment.
</p>

<p>
  Our department stands as a hub of technological advancement and academic excellence, committed to nurturing 
  the next generation of engineers, innovators, and researchers who will shape the future of Bangladesh and 
  the global technological landscape. We have built a strong foundation based on three core pillars: 
  academic excellence, cutting-edge research, and strong industry collaboration.
</p>

<p>
  Over the years, we have witnessed remarkable growth in our academic programs, research initiatives, 
  and alumni network. Our graduates have gone on to achieve outstanding success in leading technology 
  companies, power and energy sectors, telecommunications, research institutions, and entrepreneurial 
  ventures across the globe. From multinational corporations to pioneering local startups, our alumni are 
  making meaningful contributions to the fields of electrical engineering, electronics, telecommunications, 
  renewable energy, artificial intelligence, and beyond.
</p>

<p>
  Our faculty members are dedicated educators and researchers who bring both academic expertise and 
  real-world experience into the classroom. We focus on emerging areas such as power systems, renewable energy, 
  robotics and automation, signal processing, telecommunications, embedded systems, VLSI design, and 
  artificial intelligence. Our research efforts address critical challenges in energy efficiency, sustainable 
  technology, smart systems, and advanced communication.
</p>

<p>
  The department takes pride in maintaining strong industry partnerships that provide our students with 
  valuable internship opportunities, hands-on training, mentorship, and career guidance. We believe in 
  bridging the gap between theoretical knowledge and practical application, ensuring our graduates are 
  fully equipped to meet the demands of the rapidly evolving engineering world.
</p>

<p>
  As we look towards the future, we remain committed to excellence in higher education, empowering 
  minds, shaping futures, and building tomorrow’s leaders in engineering and technology. Our vision is 
  to become the leading EEE department in Bangladesh, recognized globally for our academic achievements, 
  impactful research, and contribution to technological progress.
</p>

<p>
  I warmly invite you to explore our academic offerings, engage with our vibrant alumni community, and be 
  an active part of our journey towards innovation and engineering excellence. Together, we will continue 
  to push the boundaries of knowledge and transform ideas into solutions that benefit society.
</p>

                    <p className="text-lg font-medium">
                      Warm regards,<br />
                      <span className="text-blue-600">A.H.M. Zadidul Karim</span><br />
                       Head of Department<br />
                       Department of EEE<br />
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