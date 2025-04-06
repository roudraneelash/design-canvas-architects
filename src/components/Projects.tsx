import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      { 
        id: 'bungalow-shantiniketan', 
        name: 'G+1 Bungalow at Shantiniketan', 
        location: 'West Bengal', 
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80'
      },
      { 
        id: 'bungalow-daronda', 
        name: 'G+1 Bungalow at Daronda', 
        location: 'West Bengal', 
        image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'bungalow-kolkata', 
        name: 'G+3 Bungalow at Kolkata', 
        location: 'West Bengal', 
        image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'apartment-kolkata', 
        name: 'G+4 Apartment Building at Kolkata', 
        location: 'West Bengal', 
        image: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'residential-chandigarh', 
        name: 'G+3 Residential Building', 
        location: 'Chandigarh', 
        image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80' 
      },
    ],
    interior: [
      { 
        id: 'interior-southcity', 
        name: 'Apartment Interior at South City', 
        location: 'Kolkata', 
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'interior-betor', 
        name: 'Apartment Interior, Betor Heights', 
        location: 'Howrah, W.B.', 
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'interior-mayfair', 
        name: 'Apartment Interiors Mayfair Housing', 
        location: 'Kolkata', 
        image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'interior-mehrauli', 
        name: 'G+1 Residential Interiors, Mehrauli', 
        location: 'New Delhi', 
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80' 
      },
    ],
    religious: [
      { 
        id: 'basona-kali-temple', 
        name: 'Basona Kali Temple', 
        location: 'Garia, Kolkata', 
        image: 'https://images.unsplash.com/photo-1518542448-471888cc959d?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'temple-complex', 
        name: 'Temple Complex & Meditation Hall', 
        location: 'West Bengal', 
        image: 'https://images.unsplash.com/photo-1602301129763-de34c3165b7e?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'ghat-redevelopment', 
        name: 'Ghat redevelopment', 
        location: 'Maliandi, W.B.', 
        image: 'https://images.unsplash.com/photo-1597910037310-375025f42cc2?auto=format&fit=crop&w=800&q=80' 
      },
    ],
    commercial: [
      { 
        id: 'admin-iocl', 
        name: 'Admin Building, IOCL, Bottling Plant', 
        location: 'Kalyani', 
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'cable-factory', 
        name: 'Cable Factory', 
        location: 'Bashanti, South 24 Parganas, W.B.', 
        image: 'https://images.unsplash.com/photo-1555652736-e92021d28a11?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'electrical-substation', 
        name: 'Electrical Sub Station for WBSEDCL', 
        location: 'Mohishadal, W.B.', 
        image: 'https://images.unsplash.com/photo-1626897855769-6e267bd43be4?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'eco-resort', 
        name: 'Eco Resort at Taherpur', 
        location: 'West Bengal', 
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'facelift-housing', 
        name: 'Facelift of G+9, Housing', 
        location: 'Newtown, West Bengal', 
        image: 'https://images.unsplash.com/photo-1535399280929-c825303205d1?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'facelift-ranchi', 
        name: 'Facelift of G+11 Housing, Ranchi Smart City', 
        location: 'Chattisgarh', 
        image: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=800&q=80' 
      },
    ],
    healthcare: [
      { 
        id: 'hospital-raigunj', 
        name: 'Hospital at Raigunj', 
        location: 'West Bengal', 
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'hospital-chandrakona', 
        name: 'G+IV Storied Hospital at Chandrakona', 
        location: 'Paschim Mednipur, W.B.', 
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' 
      },
    ],
  };

  const allProjects = Object.values(projects).flat();
  
  const filteredProjects = activeCategory === 'all'
    ? allProjects.slice(0, 6)
    : projects[activeCategory]?.slice(0, 6) || [];

  const stats = [
    { value: "4+", label: "years of experience" },
    { value: "20+", label: "projects completed" },
    { value: "10+", label: "cities" },
    { value: "10+", label: "in team & consultants" },
  ];

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
