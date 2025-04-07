
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, categories, stats, ProjectCategory, getAllProjects } from '@/data';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const allProjects = getAllProjects();
  
  const filteredProjects = activeCategory === 'all'
    ? allProjects.slice(0, 6)
    : projects[activeCategory]?.slice(0, 6) || [];

  return (
    <section id="projects" className="section-padding bg-mono-light">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-light text-mono-dark mb-4 font-serif">Our Portfolio</h2>
          <p className="text-mono-medium max-w-3xl mx-auto font-light font-serif">
            Explore our diverse collection of architectural projects spanning residential, commercial, 
            healthcare, and more, each designed with precision and creativity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant="outline"
              className={cn(
                "border-mono-accent hover:border-mono-dark font-serif font-light",
                activeCategory === category.id
                  ? "bg-mono-dark text-white border-mono-dark"
                  : "bg-transparent text-mono-medium"
              )}
              onClick={() => setActiveCategory(category.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="animate-on-scroll group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-mono-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-light text-white mb-1 font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.name}</h3>
                <p className="text-white/80 font-light font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.location}</p>
                
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                  <Link to={`/projects/${project.id}`} className="flex items-center text-white hover:text-[#FFA726] transition-colors font-serif text-sm font-light">
                    <Eye size={16} className="mr-1" /> View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link 
            to="/all-projects" 
            className="group inline-flex items-center px-8 py-3 bg-mono-dark text-white font-light font-serif hover:bg-mono-medium transition-colors duration-300 hover:text-[#FFA726]"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
        
        <div className="mt-24 mb-8 p-12 bg-gradient-to-r from-[#222222] to-[#333333] text-white">
          <h2 className="text-3xl font-light text-white text-center mb-12 font-serif animate-fade-in">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="animate-on-scroll text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-4xl font-light text-[#FFA726] mb-2 font-serif">{stat.value}</p>
                <p className="text-white/80 uppercase tracking-wider text-sm font-light font-serif">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
