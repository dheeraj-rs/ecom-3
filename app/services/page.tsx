'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { ArrowLeft, Search, Filter, Hammer, Palette, Home, TreePine, Star, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const woodTypes = [
    {
      name: 'Teak Wood',
      category: 'Premium',
      pricePerSqFt: 1200,
      description: 'High-grade teak wood, perfect for furniture and doors',
      features: ['Water Resistant', 'Durable', 'Premium Quality'],
      availability: 'In Stock'
    },
    {
      name: 'Rosewood',
      category: 'Premium',
      pricePerSqFt: 1000,
      description: 'Rich, dark wood ideal for luxury furniture',
      features: ['Rich Color', 'Hard Wood', 'Luxury Grade'],
      availability: 'In Stock'
    },
    {
      name: 'Oak Wood',
      category: 'Standard',
      pricePerSqFt: 800,
      description: 'Strong and versatile wood for modern furniture',
      features: ['Strong', 'Versatile', 'Good Grain'],
      availability: 'In Stock'
    },
    {
      name: 'Pine Wood',
      category: 'Budget',
      pricePerSqFt: 400,
      description: 'Light, affordable wood for basic furniture',
      features: ['Lightweight', 'Affordable', 'Easy to Work'],
      availability: 'In Stock'
    },
    {
      name: 'Marine Plywood',
      category: 'Standard',
      pricePerSqFt: 350,
      description: 'Water-resistant plywood for kitchens and bathrooms',
      features: ['Water Resistant', 'Smooth Finish', 'Reliable'],
      availability: 'In Stock'
    },
    {
      name: 'Birch Plywood',
      category: 'Standard',
      pricePerSqFt: 300,
      description: 'High-quality plywood with excellent finish',
      features: ['Smooth Finish', 'Strong', 'Good Quality'],
      availability: 'In Stock'
    }
  ];

  const readyToOrder = [
    {
      name: 'Standard Dining Table (6-seater)',
      category: 'Dining',
      basePrice: 25000,
      description: 'Classic dining table with matching chairs',
      features: ['6 Chairs Included', 'Standard Finish', 'Ready in 15 days'],
      material: 'Oak Wood',
      dimensions: '6ft x 3ft'
    },
    {
      name: 'Modular Kitchen (10ft)',
      category: 'Kitchen',
      basePrice: 45000,
      description: 'Complete modular kitchen with cabinets and countertop',
      features: ['10ft Linear', 'Soft-close Drawers', 'Granite Top'],
      material: 'Marine Plywood',
      dimensions: '10ft Linear'
    },
    {
      name: 'Double Bed with Storage',
      category: 'Bedroom',
      basePrice: 30000,
      description: 'King-size bed with under-bed storage',
      features: ['Storage Drawers', 'King Size', 'Premium Finish'],
      material: 'Teak Wood',
      dimensions: '6ft x 6.5ft'
    },
    {
      name: '3-Door Wardrobe',
      category: 'Bedroom',
      basePrice: 35000,
      description: 'Spacious wardrobe with hanging and shelf space',
      features: ['3 Doors', 'Multiple Compartments', 'Mirror Panel'],
      material: 'Rosewood',
      dimensions: '6ft x 7ft'
    },
    {
      name: 'Traditional Kerala Door',
      category: 'Doors',
      basePrice: 18000,
      description: 'Handcrafted door with traditional Kerala design',
      features: ['Traditional Carving', 'Solid Wood', 'Custom Size'],
      material: 'Teak Wood',
      dimensions: '7ft x 3ft'
    },
    {
      name: 'Study Table with Chair',
      category: 'Office',
      basePrice: 12000,
      description: 'Ergonomic study table with matching chair',
      features: ['Drawers', 'Cable Management', 'Ergonomic Chair'],
      material: 'Pine Wood',
      dimensions: '4ft x 2ft'
    }
  ];

  const services = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Custom Furniture Making',
      description: 'Bespoke furniture designed and crafted to your exact specifications',
      features: ['Personal consultation', 'Custom design', '3D visualization', 'Premium materials']
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Architectural Woodwork',
      description: 'Traditional and modern wooden architectural elements',
      features: ['Doors & windows', 'Ceiling work', 'Wall paneling', 'Decorative elements']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Finishing & Restoration',
      description: 'Professional finishing services and furniture restoration',
      features: ['Wood staining', 'Polish & lacquer', 'Restoration work', 'Repair services']
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Wood Consultation',
      description: 'Expert advice on wood selection and project planning',
      features: ['Material selection', 'Design consultation', 'Cost estimation', 'Project planning']
    }
  ];

  const filteredWoodTypes = woodTypes.filter(wood => {
    const matchesSearch = wood.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || wood.category === selectedCategory;
    const matchesPriceRange = priceRange === 'All' || 
      (priceRange === 'Under 500' && wood.pricePerSqFt < 500) ||
      (priceRange === '500-800' && wood.pricePerSqFt >= 500 && wood.pricePerSqFt <= 800) ||
      (priceRange === 'Above 800' && wood.pricePerSqFt > 800);
    return matchesSearch && matchesCategory && matchesPriceRange;
  });

  const filteredReadyItems = readyToOrder.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Link href="/services" className="text-amber-600 font-medium">Services</Link>
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
              Our Services & Rates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive woodworking services with transparent pricing and quality guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete woodworking solutions from consultation to delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Rates Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wood Types & Rates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality wood materials with competitive pricing
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search wood types..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="Premium">Premium</SelectItem>
                  <SelectItem value="Standard">Standard</SelectItem>
                  <SelectItem value="Budget">Budget</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Prices</SelectItem>
                  <SelectItem value="Under 500">Under ₹500</SelectItem>
                  <SelectItem value="500-800">₹500-800</SelectItem>
                  <SelectItem value="Above 800">Above ₹800</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredWoodTypes.map((wood, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{wood.name}</CardTitle>
                    <Badge 
                      className={`${
                        wood.category === 'Premium' ? 'bg-amber-100 text-amber-800' :
                        wood.category === 'Standard' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {wood.category}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-amber-600">
                    ₹{wood.pricePerSqFt}<span className="text-sm text-gray-600">/sq ft</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{wood.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {wood.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${
                      wood.availability === 'In Stock' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {wood.availability}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready-to-Order Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready-to-Order Items</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Popular furniture items with standard designs and quick delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredReadyItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <Badge className="bg-amber-100 text-amber-800">{item.category}</Badge>
                  </div>
                  <div className="text-2xl font-bold text-amber-600">
                    ₹{item.basePrice.toLocaleString()}<span className="text-sm text-gray-600"> base price</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Material:</span>
                      <p className="text-gray-600">{item.material}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Size:</span>
                      <p className="text-gray-600">{item.dimensions}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href="/custom-order" className="flex-1">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">
                        Order Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="px-4">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Clock className="w-4 h-4 mr-2" />
                Service Guarantee
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Promise to You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">Lifetime</div>
                <div className="font-medium text-gray-900 mb-2">Service Support</div>
                <div className="text-sm text-gray-600">We maintain and service all our work for life</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">100%</div>
                <div className="font-medium text-gray-900 mb-2">Quality Guarantee</div>
                <div className="text-sm text-gray-600">Every piece meets our strict quality standards</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">40+</div>
                <div className="font-medium text-gray-900 mb-2">Years Experience</div>
                <div className="text-sm text-gray-600">Trusted expertise you can rely on</div>
              </div>
            </div>
            <div className="text-center">
              <Link href="/custom-order">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                  Start Your Project Today
                </Button>
              </Link>
            </div>
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