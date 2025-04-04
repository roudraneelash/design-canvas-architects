
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Eye } from 'lucide-react';

type ProjectCategory = 'all' | 'residential' | 'interior' | 'religious' | 'commercial' | 'healthcare';

// This data would ideally come from a database or API
const projects = {
  residential: [
    { 
      id: 'bungalow-shantiniketan', 
      name: 'G+1 Bungalow at Shantiniketan', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
      description: 'A contemporary bungalow design that harmonizes with the cultural heritage of Shantiniketan.'
    },
    { 
      id: 'bungalow-daronda', 
      name: 'G+1 Bungalow at Daronda', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80',
      description: 'Elegant residential design with modern amenities while respecting the local architectural context.'
    },
    { 
      id: 'bungalow-kolkata', 
      name: 'G+3 Bungalow at Kolkata', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80',
      description: 'Multi-storey residence with spacious interiors and innovative space utilization.'
    },
    { 
      id: 'apartment-kolkata', 
      name: 'G+4 Apartment Building at Kolkata', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=800&q=80',
      description: 'Urban apartment complex with emphasis on community spaces and natural light.'
    },
    { 
      id: 'residential-chandigarh', 
      name: 'G+3 Residential Building', 
      location: 'Chandigarh', 
      image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary residence inspired by the modernist architecture of Chandigarh.'
    },
  ],
  interior: [
    { 
      id: 'interior-southcity', 
      name: 'Apartment Interior at South City', 
      location: 'Kolkata', 
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      description: 'Luxury apartment interiors with bespoke furniture and high-end finishes.'
    },
    { 
      id: 'interior-betor', 
      name: 'Apartment Interior, Betor Heights', 
      location: 'Howrah, W.B.', 
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary interior design focusing on space optimization and aesthetic appeal.'
    },
    { 
      id: 'interior-mayfair', 
      name: 'Apartment Interiors Mayfair Housing', 
      location: 'Kolkata', 
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80',
      description: 'Elegant residential interiors with a blend of classic and contemporary elements.'
    },
    { 
      id: 'interior-mehrauli', 
      name: 'G+1 Residential Interiors, Mehrauli', 
      location: 'New Delhi', 
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      description: 'Historic district residence with modernized interiors that respect the heritage context.'
    },
  ],
  religious: [
    { 
      id: 'basona-kali-temple', 
      name: 'Basona Kali Temple', 
      location: 'Garia, Kolkata', 
      image: 'https://images.unsplash.com/photo-1518542448-471888cc959d?auto=format&fit=crop&w=800&q=80',
      description: 'A modern interpretation of traditional temple architecture with sacred geometry.'
    },
    { 
      id: 'temple-complex', 
      name: 'Temple Complex & Meditation Hall', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1602301129763-de34c3165b7e?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive spiritual complex integrating worship, meditation, and community spaces.'
    },
    { 
      id: 'ghat-redevelopment', 
      name: 'Ghat redevelopment', 
      location: 'Maliandi, W.B.', 
      image: 'https://images.unsplash.com/photo-1597910037310-375025f42cc2?auto=format&fit=crop&w=800&q=80',
      description: 'Restoration and enhancement of riverside sacred spaces with improved accessibility.'
    },
  ],
  commercial: [
    { 
      id: 'admin-iocl', 
      name: 'Admin Building, IOCL, Bottling Plant', 
      location: 'Kalyani', 
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'Modern administrative facility with efficient workspace planning and sustainable features.'
    },
    { 
      id: 'cable-factory', 
      name: 'Cable Factory', 
      location: 'Bashanti, South 24 Parganas, W.B.', 
      image: 'https://images.unsplash.com/photo-1555652736-e92021d28a11?auto=format&fit=crop&w=800&q=80',
      description: 'Industrial architecture with optimized production flow and worker comfort features.'
    },
    { 
      id: 'electrical-substation', 
      name: 'Electrical Sub Station for WBSEDCL', 
      location: 'Mohishadal, W.B.', 
      image: 'https://images.unsplash.com/photo-1626897855769-6e267bd43be4?auto=format&fit=crop&w=800&q=80',
      description: 'Technical facility with integrated safety systems and efficient operational design.'
    },
    { 
      id: 'eco-resort', 
      name: 'Eco Resort at Taherpur', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
      description: 'Sustainable hospitality design with minimal environmental footprint and local materials.'
    },
    { 
      id: 'facelift-housing', 
      name: 'Facelift of G+9, Housing', 
      location: 'Newtown, West Bengal', 
      image: 'https://images.unsplash.com/photo-1535399280929-c825303205d1?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive facade renovation enhancing aesthetics and thermal performance.'
    },
    { 
      id: 'facelift-ranchi', 
      name: 'Facelift of G+11 Housing, Ranchi Smart City', 
      location: 'Chattisgarh', 
      image: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=800&q=80',
      description: 'Smart city residential complex renovation with digital integration and sustainability upgrades.'
    },
  ],
  healthcare: [
    { 
      id: 'hospital-raigunj', 
      name: 'Hospital at Raigunj', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      description: 'Modern healthcare facility designed for optimal patient care and staff efficiency.'
    },
    { 
      id: 'hospital-chandrakona', 
      name: 'G+IV Storied Hospital at Chandrakona', 
      location: 'Paschim Mednipur, W.B.', 
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      description: 'Multi-specialty healthcare center with focus on healing environments and natural light.'
    },
  ],
};

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'interior', label: 'Interior' },
    { id: 'religious', label: 'Religious' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'healthcare', label: 'Healthcare' },
  ];

  const allProjects = Object.values(projects).flat();
  const filteredProjects = activeCategory === 'all' ? allProjects : projects[activeCategory] || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative h-[40vh] w-full">
        {/* Header Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80")`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container-custom relative z-10 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl text-white font-light font-serif">Our Projects</h1>
          <div className="w-20 h-[1px] bg-white/50 my-4"></div>
          <p className="text-white/80 max-w-xl font-serif font-light">
            Explore our complete portfolio of architectural projects across various categories.
          </p>
        </div>
      </div>
      
      {/* Projects Content */}
      <main className="flex-grow bg-mono-light">
        <div className="container-custom py-16">
          {/* Project Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
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
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                {/* Project Info */}
                <div className="absolute inset-0 bg-mono-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-light text-white mb-1 font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.name}</h3>
                  <p className="text-white/80 font-light font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.location}</p>
                  <p className="text-white/70 font-light font-serif mb-4 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 line-clamp-2">{project.description}</p>
                  
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                    <Link to={`/projects/${project.id}`} className="flex items-center text-white hover:text-gray-300 transition-colors font-serif text-sm font-light">
                      <Eye size={16} className="mr-1" /> View Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-mono-medium font-serif">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
