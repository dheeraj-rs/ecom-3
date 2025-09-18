'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, Search, Filter, Grid3X3, List } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Dining Sets', 'Bedroom', 'Living Room', 'Kitchen', 'Doors & Windows', 'Traditional', 'Modern'];

  const projects = [
    {
      id: 1,
      title: 'Traditional Kerala Dining Set',
      category: 'Dining Sets',
      type: 'Traditional',
      description: 'Handcrafted 8-seater dining table with intricate carvings and matching chairs',
      year: '2024',
      material: 'Teak Wood',
      image: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Teak', 'Carving', '8-seater', 'Traditional']
    },
    {
      id: 2,
      title: 'Modern Kitchen Cabinets',
      category: 'Kitchen',
      type: 'Modern',
      description: 'Sleek modular kitchen with soft-close drawers and premium hardware',
      year: '2024',
      material: 'Marine Plywood',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Modular', 'Soft-close', 'Premium', 'Modern']
    },
    {
      id: 3,
      title: 'Master Bedroom Suite',
      category: 'Bedroom',
      type: 'Traditional',
      description: 'Complete bedroom set with king-size bed, wardrobes, and side tables',
      year: '2023',
      material: 'Rosewood',
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['King-size', 'Wardrobe', 'Complete Set', 'Rosewood']
    },
    {
      id: 4,
      title: 'Traditional Kerala Door',
      category: 'Doors & Windows',
      type: 'Traditional',
      description: 'Ornate wooden door with traditional Kerala architectural elements',
      year: '2023',
      material: 'Teak Wood',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Ornate', 'Architecture', 'Kerala Style', 'Teak']
    },
    {
      id: 5,
      title: 'Contemporary Living Room Set',
      category: 'Living Room',
      type: 'Modern',
      description: 'Modern sofa set with coffee table and entertainment unit',
      year: '2024',
      material: 'Oak Wood',
      image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Contemporary', 'Sofa Set', 'Entertainment', 'Oak']
    },
    {
      id: 6,
      title: 'Custom Study Table',
      category: 'Office',
      type: 'Modern',
      description: 'Ergonomic study table with built-in storage and cable management',
      year: '2024',
      material: 'Pine Wood',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Ergonomic', 'Storage', 'Cable Management', 'Pine']
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory || project.type === selectedCategory;
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
              <Link href="/gallery" className="text-amber-600 font-medium">Gallery</Link>
              <Link href="/services" className="text-amber-900 hover:text-amber-700 transition-colors">Services</Link>
              <Link href="/custom-order" className="text-amber-900 hover:text-amber-700 transition-colors">Custom Order</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Our Work Gallery
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore four decades of craftsmanship and design excellence
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="px-3"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="px-3"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search projects, materials, or styles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Filter:</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-amber-600 hover:bg-amber-700' : 'hover:bg-amber-50'}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-amber-600">{project.material}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <Badge variant="secondary">{project.category}</Badge>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium text-amber-600">{project.material}</span>
                        <Badge className="bg-amber-100 text-amber-800">{project.type}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Inspired by Our Work?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create something beautiful and unique for your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/custom-order">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                Start Custom Order
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 text-lg">
                View Services
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