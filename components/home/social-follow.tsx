import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/uap.bd.edu/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/uap_edu_bd",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/school/university-of-asia-pacific/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/uap_edu_bd/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/c/UniversityofAsiaPacific",
  },
];

export function SocialFollow() {
  return (
    <AnimatedSection animation="fadeIn" delay={0.2}>
      <section className="bg-gradient-to-r from-primary-50 to-accent-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Follow Us on Social Media
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Connect with us on our social channels for the latest updates, events, and stories from the EEE department.
          </p>
          <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
                className="group w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-7 h-7 text-gray-600 group-hover:text-primary-700 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}