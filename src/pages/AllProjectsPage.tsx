
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
import { projects, categories, ProjectCategory, getAllProjects } from '@/data';

const AllProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const itemsPerPage = 9;

  // All projects combined from different categories
  const allProjects = getAllProjects();
  
  const filteredProjects = activeCategory === 'all' ? allProjects : projects[activeCategory] || [];

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

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
        
        {/* Empty State */}
        {currentProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-mono-medium font-serif">No projects found in this category.</p>
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
