'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Star, Award, Users, Clock, CheckCircle, Heart } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: "Rajan K K",
      role: "Founder & Master Craftsman",
      experience: "40+ years",
      description: "Visionary leader who established Royalwood Industry Works with a commitment to excellence and customer trust."
    },
    {
      name: "Suresh Kumar",
      role: "Senior Woodworker",
      experience: "25+ years",
      description: "Expert in traditional Kerala woodworking techniques and modern joinery methods."
    },
    {
      name: "Anil Menon",
      role: "Design Specialist",
      experience: "15+ years",
      description: "Specializes in custom furniture design and architectural woodwork planning."
    },
    {
      name: "Rajesh P",
      role: "Finishing Expert",
      experience: "20+ years",
      description: "Master of wood finishing, staining, and restoration techniques."
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Quality First",
      description: "Every piece is crafted to the highest standards using premium materials and time-tested techniques."
    },
    {
      icon: <Heart className="w-8 h-8 text-amber-600" />,
      title: "Customer Trust",
      description: "Four decades of building lasting relationships through honest service and reliable craftsmanship."
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-600" />,
      title: "Lifetime Service",
      description: "We stand behind our work with lifetime service guarantees and ongoing support."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
      title: "Authenticity",
      description: "Preserving traditional Kerala woodworking heritage while embracing modern innovations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-amber-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-amber-900">Royalwood Industry Works</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-amber-900 hover:text-amber-700 transition-colors">Home</Link>
              <Link href="/about" className="text-amber-600 font-medium">About</Link>
              <Link href="/gallery" className="text-amber-900 hover:text-amber-700 transition-colors">Gallery</Link>
              <Link href="/services" className="text-amber-900 hover:text-amber-700 transition-colors">Services</Link>
              <Link href="/custom-order" className="text-amber-900 hover:text-amber-700 transition-colors">Custom Order</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Story & Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four decades of passion, craftsmanship, and unwavering commitment to quality
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                <Users className="w-32 h-32 text-amber-300" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center bg-amber-50 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Founder's Story
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Journey of Rajan K K</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In 1984, with nothing but passion for woodworking and a dream to create exceptional furniture, 
                Rajan K K established Royalwood Industry Works in Koyilandy, Kerala. What started as a small 
                workshop has grown into one of the region's most trusted names in custom woodworking.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Rajan's philosophy has always been simple: treat every customer like family and craft every 
                piece as if it were for your own home. This approach has earned us the trust of thousands of 
                families across Kerala and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, at 65, Rajan continues to personally oversee every project, ensuring that the quality 
                and attention to detail that built our reputation remains uncompromised.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-amber-600 mb-1">1984</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600 mb-1">2000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and every piece we create
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Skilled craftsmen who bring decades of experience to every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-amber-600 font-medium mb-1">{member.role}</p>
                      <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                      <p className="text-gray-600 leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life with our expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/custom-order">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                Start Custom Order
              </Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Royalwood Industry Works</h3>
              <p className="text-amber-100 mb-4 leading-relaxed">
                Four decades of master craftsmanship in Kerala. We create bespoke wooden furniture 
                and architectural elements that last for generations.
              </p>
              <p className="text-amber-200 text-sm">Owned by Rajan K K</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-amber-100 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/gallery" className="text-amber-100 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="/services" className="text-amber-100 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/custom-order" className="text-amber-100 hover:text-white transition-colors">Custom Order</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-amber-100">
                <p>Koyilandy, Kerala</p>
                <p>+91 94XXX XXXXX</p>
                <p>info@royalwoodindustry.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2025 Royalwood Industry Works. All rights reserved. Crafted with pride in Kerala.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}