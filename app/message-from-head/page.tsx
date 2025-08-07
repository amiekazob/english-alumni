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
              Department Pharmacy
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
                     <video 
                       className="w-full h-full object-cover rounded-t-lg"
                       controls
                       poster="/images/committee/head-of-department.jpg"
                     >
                       <source src="/videos/head-message.mp4" type="video/mp4" />
                       <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white">
                         <GraduationCap className="w-16 h-16" />
                       </div>
                     </video>
                   </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                       Prof. Dr. Mohammad Shahriar
                     </CardTitle>
                     <CardDescription className="text-lg">
                       Head of Department
                     </CardDescription>
                     <Badge className="mx-auto bg-blue-100 text-blue-800 border-blue-200">
                       Department of Pharmacy
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
                         <span>mohammad.shahriar@uap-bd.edu</span>
                       </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>+880-2-8157091-4</span>
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
                       Welcome to the Department of Pharmacy
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Dear Students, Alumni, and Esteemed Colleagues,
                    </p>
                    
                    <p>
                      It is my great pleasure to welcome you to the Department of Pharmacy 
                       at the University of Asia Pacific. As the Head of this distinguished department, I am proud to 
                       lead an institution that has been at the forefront of pharmaceutical education and research excellence 
                       since our establishment.
                    </p>

                    <p>
                      Our department stands as a beacon of innovation and academic excellence, committed to nurturing 
                       the next generation of pharmacists and pharmaceutical scientists who will shape the healthcare 
                       landscape of Bangladesh and beyond. We have built a strong foundation based on three core pillars: 
                       academic excellence, research innovation, and healthcare industry collaboration.
                    </p>

                    <p>
                      Over the years, we have witnessed remarkable growth in our academic programs, research initiatives, 
                       and alumni network. Our graduates have gone on to achieve significant success in leading pharmaceutical 
                       companies, healthcare institutions, and entrepreneurial ventures across the globe. From multinational 
                       pharmaceutical corporations to local healthcare startups, our alumni are making meaningful contributions to the field of 
                       pharmacy and pharmaceutical sciences.
                    </p>

                    <p>
                      Our faculty members are dedicated researchers and educators who bring cutting-edge knowledge and 
                       industry experience into the classroom. We focus on emerging areas such as pharmaceutical chemistry, 
                       pharmacology, clinical pharmacy, drug discovery, pharmaceutical biotechnology, and pharmaceutical 
                       technology. Our research efforts are directed towards solving real-world healthcare problems and 
                       contributing to sustainable pharmaceutical development.
                    </p>

                    <p>
                      The department takes pride in maintaining strong industry partnerships that provide our students 
                       with valuable internship opportunities, mentorship programs, and career guidance. We believe in 
                       bridging the gap between academic learning and practical application, ensuring our graduates are 
                       well-prepared for the challenges of the modern pharmaceutical and healthcare workplace.
                    </p>

                    <p>
                      As we look towards the future, we remain committed to excellence in higher education, empowering 
                       minds, shaping futures, and building tomorrow's leaders through innovative education and research. 
                       Our vision is to become the leading pharmacy department in Bangladesh, 
                       recognized globally for our academic excellence and research contributions.
                    </p>

                    <p>
                      I invite you to explore our programs, connect with our vibrant alumni community, and be part of 
                       our journey towards pharmaceutical advancement and educational excellence. Together, we will continue 
                       to push the boundaries of knowledge and innovation in pharmaceutical sciences.
                    </p>

                    <p className="text-lg font-medium">
                      Warm regards,<br />
                      <span className="text-blue-600">Prof. Dr. Mohammad Shahriar</span><br />
                       Head of Department<br />
                       Department of Pharmacy<br />
                      University of Asia Pacific
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Research Focus Areas */}
      <AnimatedSection className="py-20 bg-gray-50" delay={0.4}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                 Research Excellence & Focus Areas
               </h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                 Our department's research initiatives span across cutting-edge areas of pharmaceutical sciences
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="p-3 bg-green-100 rounded-full text-green-600">
                     <Lightbulb className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">Drug Discovery</h3>
                 </div>
                 <p className="text-gray-600">
                   Advanced research in novel drug compounds and therapeutic agents for treating diseases.
                 </p>
               </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                     <Globe className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">Clinical Pharmacy</h3>
                 </div>
                 <p className="text-gray-600">
                   Developing patient-centered pharmaceutical care and clinical decision-making solutions.
                 </p>
               </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                     <Target className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">Pharmaceutical Chemistry</h3>
                 </div>
                 <p className="text-gray-600">
                   Ensuring drug quality and safety through advanced analytical and synthetic chemistry techniques.
                 </p>
               </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                     <BookOpen className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">Pharmacology</h3>
                 </div>
                 <p className="text-gray-600">
                   Advancing drug action mechanisms and therapeutic effects for next-generation treatments.
                 </p>
               </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="p-3 bg-red-100 rounded-full text-red-600">
                     <Award className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">Pharmaceutical Technology</h3>
                 </div>
                 <p className="text-gray-600">
                   Innovative drug formulation design and pharmaceutical manufacturing technologies.
                 </p>
               </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                     <Users className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">Pharmaceutical Biotechnology</h3>
                 </div>
                 <p className="text-gray-600">
                   Advanced biotechnological approaches for drug development and biopharmaceutical production.
                 </p>
               </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-900 to-green-900 text-white" delay={0.6}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
             Join Our Academic Excellence Journey
           </h2>
           <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
             Explore our programs, connect with our faculty, and become part of a community 
             dedicated to advancing pharmaceutical sciences and healthcare.
           </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about-us">
               <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                 Learn More About Pharmacy
               </Button>
             </Link>
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Contact Department
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}