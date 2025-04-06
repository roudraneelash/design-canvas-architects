
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Eye, Grid3X3, LayoutGrid } from 'lucide-react';

// This is our project data structure
interface Project {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  category: string;
}

const AllProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const itemsPerPage = 9;

  // All projects combined from different categories
  const projects: Project[] = [
    // Residential projects
    { 
      id: 'bungalow-shantiniketan', 
      name: 'G+1 Bungalow at Shantiniketan', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
      description: 'A contemporary bungalow design that harmonizes with the cultural heritage of Shantiniketan.',
      category: 'residential'
    },
    { 
      id: 'bungalow-daronda', 
      name: 'G+1 Bungalow at Daronda', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80',
      description: 'Elegant residential design with modern amenities while respecting the local architectural context.',
      category: 'residential'
    },
    { 
      id: 'bungalow-kolkata', 
      name: 'G+3 Bungalow at Kolkata', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80',
      description: 'Multi-storey residence with spacious interiors and innovative space utilization.',
      category: 'residential'
    },
    { 
      id: 'apartment-kolkata', 
      name: 'G+4 Apartment Building at Kolkata', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=800&q=80',
      description: 'Urban apartment complex with emphasis on community spaces and natural light.',
      category: 'residential'
    },
    { 
      id: 'residential-chandigarh', 
      name: 'G+3 Residential Building', 
      location: 'Chandigarh', 
      image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary residence inspired by the modernist architecture of Chandigarh.',
      category: 'residential'
    },
    
    // Interior projects
    { 
      id: 'interior-southcity', 
      name: 'Apartment Interior at South City', 
      location: 'Kolkata', 
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      description: 'Luxury apartment interiors with bespoke furniture and high-end finishes.',
      category: 'interior'
    },
    { 
      id: 'interior-betor', 
      name: 'Apartment Interior, Betor Heights', 
      location: 'Howrah, W.B.', 
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary interior design focusing on space optimization and aesthetic appeal.',
      category: 'interior'
    },
    { 
      id: 'interior-mayfair', 
      name: 'Apartment Interiors Mayfair Housing', 
      location: 'Kolkata', 
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80',
      description: 'Elegant residential interiors with a blend of classic and contemporary elements.',
      category: 'interior'
    },
    { 
      id: 'interior-mehrauli', 
      name: 'G+1 Residential Interiors, Mehrauli', 
      location: 'New Delhi', 
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      description: 'Historic district residence with modernized interiors that respect the heritage context.',
      category: 'interior'
    },
    
    // Religious projects
    { 
      id: 'basona-kali-temple', 
      name: 'Basona Kali Temple', 
      location: 'Garia, Kolkata', 
      image: 'https://images.unsplash.com/photo-1518542448-471888cc959d?auto=format&fit=crop&w=800&q=80',
      description: 'A modern interpretation of traditional temple architecture with sacred geometry.',
      category: 'religious'
    },
    { 
      id: 'temple-complex', 
      name: 'Temple Complex & Meditation Hall', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1602301129763-de34c3165b7e?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive spiritual complex integrating worship, meditation, and community spaces.',
      category: 'religious'
    },
    { 
      id: 'ghat-redevelopment', 
      name: 'Ghat redevelopment', 
      location: 'Maliandi, W.B.', 
      image: 'https://images.unsplash.com/photo-1597910037310-375025f42cc2?auto=format&fit=crop&w=800&q=80',
      description: 'Restoration and enhancement of riverside sacred spaces with improved accessibility.',
      category: 'religious'
    },
    
    // Commercial projects
    { 
      id: 'admin-iocl', 
      name: 'Admin Building, IOCL, Bottling Plant', 
      location: 'Kalyani', 
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'Modern administrative facility with efficient workspace planning and sustainable features.',
      category: 'commercial'
    },
    { 
      id: 'cable-factory', 
      name: 'Cable Factory', 
      location: 'Bashanti, South 24 Parganas, W.B.', 
      image: 'https://images.unsplash.com/photo-1555652736-e92021d28a11?auto=format&fit=crop&w=800&q=80',
      description: 'Industrial architecture with optimized production flow and worker comfort features.',
      category: 'commercial'
    },
    { 
      id: 'electrical-substation', 
      name: 'Electrical Sub Station for WBSEDCL', 
      location: 'Mohishadal, W.B.', 
      image: 'https://images.unsplash.com/photo-1626897855769-6e267bd43be4?auto=format&fit=crop&w=800&q=80',
      description: 'Technical facility with integrated safety systems and efficient operational design.',
      category: 'commercial'
    },
    { 
      id: 'eco-resort', 
      name: 'Eco Resort at Taherpur', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
      description: 'Sustainable hospitality design with minimal environmental footprint and local materials.',
      category: 'commercial'
    },
    { 
      id: 'facelift-housing', 
      name: 'Facelift of G+9, Housing', 
      location: 'Newtown, West Bengal', 
      image: 'https://images.unsplash.com/photo-1535399280929-c825303205d1?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive facade renovation enhancing aesthetics and thermal performance.',
      category: 'commercial'
    },
    { 
      id: 'facelift-ranchi', 
      name: 'Facelift of G+11 Housing, Ranchi Smart City', 
      location: 'Chattisgarh', 
      image: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=800&q=80',
      description: 'Smart city residential complex renovation with digital integration and sustainability upgrades.',
      category: 'commercial'
    },
    
    // Healthcare projects
    { 
      id: 'hospital-raigunj', 
      name: 'Hospital at Raigunj', 
      location: 'West Bengal', 
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      description: 'Modern healthcare facility designed for optimal patient care and staff efficiency.',
      category: 'healthcare'
    },
    { 
      id: 'hospital-chandrakona', 
      name: 'G+IV Storied Hospital at Chandrakona', 
      location: 'Paschim Mednipur, W.B.', 
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      description: 'Multi-specialty healthcare center with focus on healing environments and natural light.',
      category: 'healthcare'
    },
  ];

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen flex flex-col bg-mono-light">
      <Navbar />
      
      {/* Header Section */}
      <div className="relative h-[30vh] w-full bg-mono-dark">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
             style={{ backgroundImage: `url("https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&w=2000&q=80")` }} />
             
        <div className="container-custom relative z-10 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl text-white font-light font-serif">All Projects</h1>
          <div className="w-20 h-[1px] bg-white/50 my-4"></div>
          <p className="text-white/70 max-w-xl font-serif">
            Browse our complete portfolio of architectural projects across various categories.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow container-custom py-12">
        {/* View Mode Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-light font-serif text-mono-dark">Our Complete Portfolio</h2>
          <div className="flex items-center space-x-2">
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'outline'} 
              size="sm"
              className="border-mono-dark"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="w-4 h-4 mr-1" /> Grid
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'default' : 'outline'} 
              size="sm"
              className="border-mono-dark" 
              onClick={() => setViewMode('list')}
            >
              <LayoutGrid className="w-4 h-4 mr-1" /> List
            </Button>
          </div>
        </div>
        
        {/* Projects Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-mono-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/60 text-xs uppercase tracking-wider font-serif mb-1">{project.category}</span>
                  <h3 className="text-xl font-light text-white mb-1 font-serif">{project.name}</h3>
                  <p className="text-white/80 text-sm mb-3 font-serif">{project.location}</p>
                  <p className="text-white/70 text-sm mb-4 font-serif line-clamp-2">{project.description}</p>
                  
                  <Link to={`/projects/${project.id}`} className="flex items-center text-white hover:text-[#FFA726] transition-colors font-serif text-sm font-light">
                    <Eye size={16} className="mr-1" /> View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6 mb-12">
            {currentProjects.map((project) => (
              <div key={project.id} className="flex flex-col md:flex-row gap-6 bg-white p-6 border-l-4 border-mono-accent hover:shadow-lg transition-all">
                <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-mono-medium font-serif">{project.category}</span>
                      <span className="text-sm text-mono-medium font-serif">{project.location}</span>
                    </div>
                    <h3 className="text-xl font-serif text-mono-dark mt-2">{project.name}</h3>
                    <p className="text-mono-medium mt-3 font-serif">{project.description}</p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="inline-flex items-center text-mono-dark hover:text-[#FFA726] transition-colors font-serif"
                    >
                      <Eye size={16} className="mr-1" /> View Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
              </PaginationItem>
            )}
            
            {pageNumbers.map(number => {
              // Show first page, last page, and pages around current page
              if (
                number === 1 || 
                number === totalPages || 
                (number >= currentPage - 1 && number <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={number}>
                    <PaginationLink 
                      isActive={number === currentPage} 
                      onClick={() => setCurrentPage(number)}
                    >
                      {number}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
              
              // Show ellipsis for gaps in pagination
              if (
                (number === 2 && currentPage > 3) ||
                (number === totalPages - 1 && currentPage < totalPages - 2)
              ) {
                return <PaginationEllipsis key={number} />;
              }
              
              return null;
            })}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllProjectsPage;
