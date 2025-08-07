import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Mail, ArrowLeft, Award, Users, Building, Phone, Calendar, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { generateMetadata as generateSEOMetadata, generatePersonSchema } from '@/lib/seo';
import { Metadata } from 'next';
import { CommitteeSocialShare } from '@/components/committee/committee-social-share';

interface PageProps {
  params: Promise<{ id: string }>
}

type CommitteeMember = {
  id: string;
  name: string;
  position: string;
  role: string;
  image: string;
  email?: string;
  phone?: string;
  department?: string;
  bio?: string;
  achievements?: string[];
  responsibilities?: string[];
  joinedDate?: string;
  socialMedia?: {
    platform: string;
    url: string;
  }[];
};

// Sample committee data - replace with actual data from a data file
const committeeMembers: CommitteeMember[] = [
  {
    id: '1',
    name: 'John Doe',
    position: 'Convener',
    role: 'Faculty Advisor',
    image: '/placeholder-user.jpg',
    email: 'john.doe@uap-bd.edu',
    phone: '+880-1234-567890',
    department: 'EEE Department',
    bio: 'John Doe serves as the Faculty Advisor and Convener for the EEE Club. With over 10 years of experience in electrical engineering education, he provides guidance and mentorship to students in their academic and professional development.',
    achievements: [
      'Best Faculty Advisor Award 2023',
      'Excellence in Student Mentorship',
      'Outstanding Contribution to Student Activities'
    ],
    responsibilities: [
      'Oversee club activities and initiatives',
      'Provide academic guidance to students',
      'Coordinate with university administration',
      'Mentor student leaders'
    ],
    joinedDate: 'January 2020'
  },
  {
    id: '2',
    name: 'Jane Smith',
    position: 'President',
    role: 'Student Leader',
    image: '/placeholder-user.jpg',
    email: 'jane.smith@student.uap-bd.edu',
    phone: '+880-1234-567891',
    department: 'EEE Department',
    bio: 'Jane Smith is the President of the EEE Club, leading various initiatives to enhance student engagement and academic excellence. She is passionate about technology innovation and student development.',
    achievements: [
      'Dean\'s List for 3 consecutive semesters',
      'Best Student Leader Award 2024',
      'Organized successful Tech Symposium 2024'
    ],
    responsibilities: [
      'Lead club meetings and activities',
      'Represent the club in university events',
      'Coordinate with other student organizations',
      'Plan and execute major events'
    ],
    joinedDate: 'September 2023'
  }
  // Add more committee members as needed
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const member = getCommitteeMember(id);
  
  if (!member) {
    return {
      title: 'Committee Member Not Found',
      description: 'The requested committee member could not be found.'
    };
  }

  return generateSEOMetadata({
    title: `${member.name} - ${member.position}`,
    description: `Learn about ${member.name}, ${member.position} of UAP EEE Club Committee. ${member.bio?.substring(0, 150)}...`,
    keywords: `${member.name}, UAP EEE Club, ${member.position}, student committee, electrical engineering club`,
    url: `https://uap-eee.edu.bd/committee/${member.id}`,
    image: member.image
  });
}

export async function generateStaticParams() {
  return committeeMembers.map(member => ({
    id: member.id,
  }));
}

const getCommitteeMember = (id: string): CommitteeMember | undefined => {
  return committeeMembers.find(member => member.id === id);
};

export default async function CommitteeMemberPage({ params }: PageProps) {
  const { id } = await params;
  const member = committeeMembers.find(m => m.id === id);

  if (!member) {
    notFound();
  }
  
  const personSchema = generatePersonSchema({
    name: member.name || '',
    jobTitle: member.position || '',
    description: member.bio || `${member.name || 'Member'} is the ${member.position || 'Committee Member'} of UAP EEE Club Committee.`,
    email: member.email || '',
    image: member.image,
    url: `https://uap-eee.edu.bd/committee/${member.id || ''}`,
    affiliation: 'University of Asia Pacific - EEE Club'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 text-indigo-600 hover:text-indigo-800">
              <Link href="/committee">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Committee
              </Link>
            </Button>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <Image
                    src={member.image || "/placeholder-user.jpg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="rounded-full border-4 border-gray-100 shadow-md mb-6 md:mb-0 md:mr-8 flex-shrink-0 object-cover"
                  />
                  <div className="flex-grow">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{member.name}</h1>
                    <p className="text-xl text-indigo-600 font-semibold mt-1">{member.position}</p>
                    <Badge className="mt-2 text-base bg-indigo-100 text-indigo-800 py-1 px-3">{member.role}</Badge>

                    {/* Social Share */}
                    <div className="mt-4">
                      <CommitteeSocialShare 
                        memberId={member.id}
                        memberName={member.name}
                        memberPosition={member.position}
                        memberBio={member.bio}
                      />
                    </div>

                    <div className="mt-6 space-y-3">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="flex items-center text-gray-600 hover:text-indigo-700">
                            <Mail className="w-4 h-4 mr-2 text-indigo-500" /> {member.email}
                          </a>
                        )}
                        {member.phone && (
                          <span className="flex items-center text-gray-600">
                            <Phone className="w-4 h-4 mr-2 text-indigo-500" /> {member.phone}
                          </span>
                        )}
                        <span className="flex items-center text-gray-600">
                          <Building className="w-4 h-4 mr-2 text-indigo-500" /> {member.department || 'EEE Department'}
                        </span>
                        {member.joinedDate && (
                          <span className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2 text-indigo-500" /> Joined: {member.joinedDate}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 md:px-12 pb-12">
                {member.bio && (
                  <div className="mt-8 border-t pt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
                    <p className="text-gray-600 leading-relaxed text-justify">{member.bio}</p>
                  </div>
                )}

                {member.responsibilities && member.responsibilities.length > 0 && (
                  <div className="mt-10 border-t pt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <Users className="w-6 h-6 mr-3 text-indigo-500" />
                      Key Responsibilities
                    </h2>
                    <div className="space-y-3">
                      {member.responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                          <span className="text-indigo-500 mr-3 mt-1 text-lg">•</span>
                          <p className="text-gray-700">{responsibility}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {member.achievements && member.achievements.length > 0 && (
                  <div className="mt-10 border-t pt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <Trophy className="w-6 h-6 mr-3 text-indigo-500" />
                      Achievements & Recognition
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {member.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <Award className="w-5 h-5 mr-3 text-indigo-500" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Bottom Social Share */}
              <div className="px-8 md:px-12 pb-6 border-t bg-gray-50">
                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Share this Profile</h3>
                  <CommitteeSocialShare 
                    memberId={member.id}
                    memberName={member.name}
                    memberPosition={member.position}
                    memberBio={member.bio}
                  />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Have questions or want to collaborate? Feel free to reach out to {member.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`} 
                    className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Send Email
                  </a>
                )}
                <Link 
                  href="/committee" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  View All Committee Members
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}