
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'public', name: 'Public' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Horizon Residence',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80',
      description: 'Modern private residence with panoramic views',
      location: 'Los Angeles, CA'
    },
    {
      id: 2,
      title: 'Azure Office Tower',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
      description: 'Sustainable corporate headquarters with innovative workspace design',
      location: 'Chicago, IL'
    },
    {
      id: 3,
      title: 'Pulse Art Museum',
      category: 'cultural',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary art museum showcasing local and international exhibits',
      location: 'Miami, FL'
    },
    {
      id: 4,
      title: 'Civic Center Plaza',
      category: 'public',
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
      description: 'Urban renewal project revitalizing the city center',
      location: 'Seattle, WA'
    },
    {
      id: 5,
      title: 'Canopy Eco-Homes',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80',
      description: 'Sustainable housing development with green technology',
      location: 'Portland, OR'
    },
    {
      id: 6,
      title: 'Helix Innovation Center',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80',
      description: 'Research and development campus for tech startups',
      location: 'Austin, TX'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-arch-dark">Our Projects</h2>
          <div className="w-20 h-1 bg-arch-accent mx-auto mb-6" />
          <p className="text-arch-medium text-lg">
            Explore our diverse portfolio of architectural works spanning residential, commercial, cultural, and public spaces.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-sm text-sm font-medium transition-colors ${
                activeFilter === category.id
                  ? 'bg-arch-dark text-white'
                  : 'bg-arch-light text-arch-medium hover:bg-arch-accent'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group rounded-sm overflow-hidden shadow-md">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="project-card-overlay p-6 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <p className="text-sm font-medium mb-6">{project.location}</p>
                  <button className="flex items-center font-medium text-white group/btn">
                    View Project 
                    <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-arch-dark text-arch-dark font-medium rounded-sm hover:bg-arch-dark hover:text-white transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
