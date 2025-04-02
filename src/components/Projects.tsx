
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type ProjectCategory = 'all' | 'residential' | 'interior' | 'religious' | 'commercial' | 'healthcare';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'interior', label: 'Interior' },
    { id: 'religious', label: 'Religious' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'healthcare', label: 'Healthcare' },
  ];

  const projects = {
    residential: [
      { name: 'G+1 Bungalow at Shantiniketan', location: 'West Bengal', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80' },
      { name: 'G+1 Bungalow at Daronda', location: 'West Bengal', image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80' },
      { name: 'G+3 Bungalow at Kolkata', location: 'West Bengal', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80' },
      { name: 'G+4 Apartment Building at Kolkata', location: 'West Bengal', image: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=800&q=80' },
      { name: 'G+3 Residential Building', location: 'Chandigarh', image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80' },
    ],
    interior: [
      { name: 'Apartment Interior at South City', location: 'Kolkata', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80' },
      { name: 'Apartment Interior, Betor Heights', location: 'Howrah, W.B.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80' },
      { name: 'Apartment Interiors Mayfair Housing', location: 'Kolkata', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80' },
      { name: 'G+1 Residential Interiors, Mehrauli', location: 'New Delhi', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80' },
    ],
    religious: [
      { name: 'Basona Kali Temple', location: 'Garia, Kolkata', image: 'https://images.unsplash.com/photo-1518542448-471888cc959d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Temple Complex & Meditation Hall', location: 'West Bengal', image: 'https://images.unsplash.com/photo-1602301129763-de34c3165b7e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Ghat redevelopment', location: 'Maliandi, W.B.', image: 'https://images.unsplash.com/photo-1597910037310-375025f42cc2?auto=format&fit=crop&w=800&q=80' },
    ],
    commercial: [
      { name: 'Admin Building, IOCL, Bottling Plant', location: 'Kalyani', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
      { name: 'Cable Factory', location: 'Bashanti, South 24 Parganas, W.B.', image: 'https://images.unsplash.com/photo-1555652736-e92021d28a11?auto=format&fit=crop&w=800&q=80' },
      { name: 'Electrical Sub Station for WBSEDCL', location: 'Mohishadal, W.B.', image: 'https://images.unsplash.com/photo-1626897855769-6e267bd43be4?auto=format&fit=crop&w=800&q=80' },
      { name: 'Eco Resort at Taherpur', location: 'West Bengal', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80' },
      { name: 'Facelift of G+9, Housing', location: 'Newtown, West Bengal', image: 'https://images.unsplash.com/photo-1535399280929-c825303205d1?auto=format&fit=crop&w=800&q=80' },
      { name: 'Facelift of G+11 Housing, Ranchi Smart City', location: 'Chattisgarh', image: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=800&q=80' },
    ],
    healthcare: [
      { name: 'Hospital at Raigunj', location: 'West Bengal', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80' },
      { name: 'G+IV Storied Hospital at Chandrakona', location: 'Paschim Mednipur, W.B.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
    ],
  };

  const filteredProjects = activeCategory === 'all'
    ? Object.values(projects).flat()
    : projects[activeCategory] || [];

  // Stats for achievements section
  const stats = [
    { value: "4+", label: "years of experience" },
    { value: "20+", label: "projects completed" },
    { value: "10+", label: "cities" },
    { value: "10+", label: "in team & consultants" },
  ];

  return (
    <section id="projects" className="section-padding bg-arch-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-arch-dark mb-4">Our Projects</h2>
          <p className="text-arch-text max-w-3xl mx-auto">
            Explore our diverse portfolio of architectural projects spanning residential, commercial, 
            healthcare, and more, each designed with precision and creativity.
          </p>
        </div>

        {/* Project Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              className={cn(
                "border-arch-accent3 hover:border-arch-accent1",
                activeCategory === category.id
                  ? "bg-arch-accent1 text-white border-arch-accent1"
                  : "bg-transparent text-arch-medium"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="project-card group rounded-sm overflow-hidden shadow-md animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="project-card-overlay">
                  <div className="text-center px-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                    <p className="text-white/80">{project.location}</p>
                    <button className="mt-4 px-6 py-2 bg-arch-accent1 text-white rounded-sm hover:bg-arch-accent2 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-medium text-arch-dark truncate">{project.name}</h3>
                <p className="text-arch-text text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Achievements/Stats Section */}
        <div className="mt-24 mb-10">
          <h2 className="text-3xl font-bold text-arch-dark text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-arch-accent3 bg-white animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-arch-accent1 mb-2">{stat.value}</p>
                  <p className="text-arch-text uppercase tracking-wider text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
