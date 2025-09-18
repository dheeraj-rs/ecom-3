'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Phone, MapPin, Mail, Star, Users, Clock, Award } from 'lucide-react';

export default function Home() {
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
              <Link href="/about" className="text-amber-900 hover:text-amber-700 transition-colors">About</Link>
              <Link href="/gallery" className="text-amber-900 hover:text-amber-700 transition-colors">Gallery</Link>
              <Link href="/services" className="text-amber-900 hover:text-amber-700 transition-colors">Services</Link>
              <Link href="/custom-order" className="text-amber-900 hover:text-amber-700 transition-colors">Custom Order</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-flex items-center bg-amber-50 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              40 Years of Excellence in Woodworking
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Dreams in
              <span className="text-amber-600 block">Fine Wood</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Four decades of master craftsmanship in Koyilandy, Kerala. From custom furniture to architectural woodwork, 
              we bring your vision to life with unmatched quality and lifetime service guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/custom-order">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                  Start Custom Order
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">40+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">2000+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-gray-700">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">Lifetime</div>
              <div className="text-gray-700">Service Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specializations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From traditional Kerala architecture to modern custom designs, we master every aspect of woodworking
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-amber-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Furniture</h3>
                <p className="text-gray-600 mb-4">Handcrafted dining sets, bedroom furniture, and living room pieces tailored to your space and style.</p>
                <Link href="/services" className="text-amber-600 hover:text-amber-700 font-medium">Learn More →</Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300 border-amber-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Architectural Woodwork</h3>
                <p className="text-gray-600 mb-4">Traditional Kerala doors, windows, ceiling work, and ornamental carvings that reflect cultural heritage.</p>
                <Link href="/services" className="text-amber-600 hover:text-amber-700 font-medium">Learn More →</Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300 border-amber-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Restoration Services</h3>
                <p className="text-gray-600 mb-4">Expert restoration of antique furniture and heritage wooden structures with authentic techniques.</p>
                <Link href="/services" className="text-amber-600 hover:text-amber-700 font-medium">Learn More →</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Owner Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Master Craftsman
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Rajan K K</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With four decades of experience in fine woodworking, Rajan K K has built Royalwood Industry Works 
                on the foundation of trust, quality, and customer satisfaction. His expertise spans traditional 
                Kerala architecture to contemporary custom designs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every project receives his personal attention, ensuring that each piece meets our exacting 
                standards of craftsmanship and durability.
              </p>
              <Link href="/about">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  Learn More About Our Team
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-amber-100 flex items-center justify-center">
                <Users className="w-32 h-32 text-amber-300" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-amber-600">40+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Workshop</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Koyilandy, Kerala. Come see our craftsmanship in person.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Koyilandy, Kozhikode District<br />Kerala, India</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 94XXX XXXXX<br />+91 90XXX XXXXX</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@royalwoodindustry.com<br />orders@royalwoodindustry.com</p>
            </Card>
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