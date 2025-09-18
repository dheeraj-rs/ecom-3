'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { ArrowLeft, Upload, Phone, Mail, MapPin, Clock, CheckCircle, Star, Camera, FileText } from 'lucide-react';
import { useState } from 'react';

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    projectType: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    hasImage: false,
    agreedToConsultation: false
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileNames = Array.from(files).map(file => file.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
      setFormData(prev => ({ ...prev, hasImage: true }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your custom order request! Rajan K K will contact you within 24 hours for a detailed consultation.');
  };

  const projectTypes = [
    'Custom Furniture',
    'Kitchen Cabinets',
    'Bedroom Set',
    'Dining Set',
    'Doors & Windows',
    'Architectural Woodwork',
    'Restoration Project',
    'Office Furniture',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,00,000',
    'Above ₹2,00,000',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    'No rush - Quality first',
    '1-2 months',
    '2-3 months',
    '3-6 months',
    'Let\'s discuss'
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
              <Link href="/about" className="text-amber-900 hover:text-amber-700 transition-colors">About</Link>
              <Link href="/gallery" className="text-amber-900 hover:text-amber-700 transition-colors">Gallery</Link>
              <Link href="/services" className="text-amber-900 hover:text-amber-700 transition-colors">Services</Link>
              <Link href="/custom-order" className="text-amber-600 font-medium">Custom Order</Link>
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
            <div className="inline-flex items-center bg-amber-50 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Direct Consultation with Master Craftsman
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Custom Order & Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Share your vision with us. Upload images, describe your needs, and get a personal consultation 
              with Rajan K K to bring your dream furniture to life.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Direct Contact</h3>
              <p className="text-sm text-gray-600">Speak directly with Rajan K K</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">40+ Years Trust</h3>
              <p className="text-sm text-gray-600">Proven track record</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">24-Hour Response</h3>
              <p className="text-sm text-gray-600">Quick consultation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Lifetime Service</h3>
              <p className="text-sm text-gray-600">Guaranteed support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="w-5 h-5 mr-2 text-amber-600" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map(range => (
                          <SelectItem key={range} value={range}>{range}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="timeline">Preferred Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea 
                    id="projectDescription"
                    placeholder="Describe your project in detail. Include dimensions, style preferences, special requirements, and any inspiration you have..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
                    className="min-h-32"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">The more details you provide, the better we can understand your vision.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Camera className="w-5 h-5 mr-2 text-amber-600" />
                  Upload Images (Optional but Recommended)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-amber-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Reference Images</h3>
                  <p className="text-gray-600 mb-4">
                    Share photos of styles you like, sketches, measurements, or the space where the furniture will go
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="imageUpload"
                  />
                  <Label htmlFor="imageUpload">
                    <Button type="button" className="bg-amber-600 hover:bg-amber-700" asChild>
                      <span>Choose Images</span>
                    </Button>
                  </Label>
                  <p className="text-sm text-gray-500 mt-2">JPG, PNG, or JPEG. Max 10MB per file.</p>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Uploaded Files:</h4>
                    <ul className="space-y-1">
                      {uploadedFiles.map((fileName, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          {fileName}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Mail className="w-5 h-5 mr-2 text-amber-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Project Address</Label>
                  <Textarea 
                    id="address"
                    placeholder="Where will this furniture be delivered/installed?"
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    className="min-h-20"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="consultation"
                    checked={formData.agreedToConsultation}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreedToConsultation: checked as boolean }))}
                    required
                  />
                  <div className="space-y-1 leading-none">
                    <Label htmlFor="consultation" className="text-sm font-medium">
                      I agree to a consultation call with Rajan K K *
                    </Label>
                    <p className="text-sm text-gray-600">
                      By submitting this form, you agree to receive a personal consultation call from Rajan K K to discuss 
                      your project in detail. This ensures we fully understand your requirements and can provide the best solution.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-lg"
                disabled={!formData.agreedToConsultation || !formData.name || !formData.phone || !formData.projectType || !formData.projectDescription}
              >
                Submit Custom Order Request
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                Rajan K K will personally review your request and contact you within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prefer to Call Directly?</h2>
            <p className="text-lg text-gray-600">
              Speak with Rajan K K directly for immediate consultation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Call</h3>
                <p className="text-gray-600 mb-3">+91 94XXX XXXXX</p>
                <p className="text-sm text-gray-500">Available: 9 AM - 7 PM</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-3">orders@royalwoodindustry.com</p>
                <p className="text-sm text-gray-500">Response within 6 hours</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Workshop</h3>
                <p className="text-gray-600 mb-3">Koyilandy, Kerala</p>
                <p className="text-sm text-gray-500">Open: Mon-Sat, 9 AM - 6 PM</p>
              </CardContent>
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