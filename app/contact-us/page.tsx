"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer } from "@/components/ui/staggered-container"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  User, 
  Users,
  MessageSquare,
  Smartphone,
  Printer,
  GraduationCap,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Github,
  UserPlus,
  Building2
} from "lucide-react"

interface ContactInfo {
  id: string
  name: string
  title: string
  phone?: string
  mobile: string
  email: string
  extension?: string
}

interface UniversityContact {
  type: string
  address: string
  phone: string
  pabx: string
  fax: string
  mobiles: string[]
  email: string
}

const universityContact: UniversityContact = {
  type: "University of Asia Pacific - Admission Office",
  address: "74/A, Green Road, Dhaka - 1205, Bangladesh",
  phone: "+8802-48114140",
  pabx: "+8802-58157091-4, +8802-58157096 (Ext - 210, 211, 212, 213, 215)",
  fax: "+8802-58157097",
  mobiles: ["+8801731681081", "+8801768544208", "+8801714088321", "+8801789050383"],
  email: "admission@uap-bd.edu"
}

// EEE Club Contact Information
const clubContact = {
  officeName: "Deptartment Administration Office",
  roomNumber: "Room 400, 4th Floor",
  department: "Department of Pharmacy",
  university: "University of Asia Pacific",
  fullAddress: "Room 400, Pharmacy Department, University of Asia Pacific, 74/A Green Road, Dhaka-1205",
  email: "paiclubeee@uap-bd.edu",
  phone: "+8801XXXXXXXXX", // President/Secretary contact
  socialMedia: {
    facebook: "https://www.facebook.com/PAICLUBEEE",
    linkedin: "https://www.linkedin.com/company/108122060",
    instagram: "https://instagram.com/eeeclub_uap",
    github: "https://github.com/eee-club-uap"
  }
}

const deptContacts: ContactInfo[] = [
  {
    id: "1",
    name: "Md. Rahamat Ullah",
    title: "Senior Administrative Officer",
    phone: "58157091-4",
    extension: "555",
    mobile: "01717558922",
    email: "dao.eee@uap-bd.edu"
  },
  {
    id: "2",
    name: "Md. Kamruzzaman",
    title: "Assistant Administrative Officer",
    phone: "58157091-4",
    extension: "555",
    mobile: "01746120504",
    email: "zaman_eee@uap-bd.edu"
  }
]



export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50" suppressHydrationWarning={true}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center" suppressHydrationWarning={true}>
          <AnimatedSection>
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with the pharmacy alumni portal
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto" suppressHydrationWarning={true}>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-blue-600" />
                  Contact Form
                </CardTitle>
                <CardDescription>
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">✓ Message sent successfully!</p>
                    <p className="text-green-600 text-sm mt-1">We'll get back to you as soon as possible.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">✗ Failed to send message</p>
                    <p className="text-red-600 text-sm mt-1">Please try again or contact us directly.</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700" 
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* EEE Club Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto" suppressHydrationWarning={true}>
          <AnimatedSection>
           
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">{clubContact.officeName}</CardTitle>
                <CardDescription>{clubContact.department}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Location</h4>
                        <p className="text-gray-600 text-sm">{clubContact.roomNumber}</p>
                        <p className="text-gray-600 text-sm">{clubContact.department}</p>
                        <p className="text-gray-600 text-sm">{clubContact.university}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <a href={`mailto:${clubContact.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                          {clubContact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600 text-sm">{clubContact.phone}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Follow Us</h4>
                      <div className="flex space-x-3">
                        <a href={clubContact.socialMedia.facebook} className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                          <Facebook className="w-5 h-5 text-blue-600" />
                        </a>
                        <a href={clubContact.socialMedia.linkedin} className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                          <Linkedin className="w-5 h-5 text-blue-600" />
                        </a>
                        <a href={clubContact.socialMedia.instagram} className="p-2 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors">
                          <Instagram className="w-5 h-5 text-pink-600" />
                        </a>
                        <a href={clubContact.socialMedia.github} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                          <Github className="w-5 h-5 text-gray-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto" suppressHydrationWarning={true}>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-gray-600">Located at the heart of Dhaka, easily accessible by public transport</p>
            </div>
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9064329508896!2d90.38896831498!3d23.750887984587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sUniversity%20of%20Asia%20Pacific!5e0!3m2!1sen!2sbd!4v1635789012345!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="University of Asia Pacific Location"
                  />
                </div>
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Full Address</h4>
                      <p className="text-gray-600 text-sm">{clubContact.fullAddress}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>


      {/* University Contact Section */}
      <AnimatedSection className="py-20" delay={0.2}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto" suppressHydrationWarning={true}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                University of Asia Pacific
              </h2>
              <p className="text-xl text-gray-600">
                General admission and university information
              </p>
            </div>

            <Card className="p-8 shadow-lg border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Admission Office
                </CardTitle>
                <CardDescription className="text-gray-600">
                  For general inquiries, admissions, and university information
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Address */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600">{universityContact.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Telephone</h4>
                        <p className="text-gray-600">{universityContact.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Phone className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">PABX</h4>
                        <p className="text-gray-600 text-sm">{universityContact.pabx}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Printer className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">FAX</h4>
                        <p className="text-gray-600">{universityContact.fax}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile & Email */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Smartphone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Mobile Numbers</h4>
                        <div className="space-y-1">
                          {universityContact.mobiles.map((mobile, index) => (
                            <p key={index} className="text-gray-600 text-sm">{mobile}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Mail className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <a 
                          href={`mailto:${universityContact.email}`}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {universityContact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Clock className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                        <p className="text-gray-600 text-sm">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600 text-sm">Friday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

    




    </div>
  )
}