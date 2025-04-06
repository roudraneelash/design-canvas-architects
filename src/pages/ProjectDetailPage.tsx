
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, MapPin, SquarePen, Building, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Project data - would normally come from an API or database
const projectsData = [
  { 
    id: 'bungalow-shantiniketan', 
    name: 'G+1 Bungalow at Shantiniketan',
    category: 'Residential',
    location: 'West Bengal', 
    year: '2022',
    client: 'Private',
    description: 'This contemporary bungalow in the cultural town of Shantiniketan blends modern design with traditional Bengali architectural influences. The residence features spacious interiors with double-height living spaces, extensive use of local materials, and climate-responsive design elements that create comfortable living conditions while respecting the local context.',
    challenge: 'The primary challenge was designing a modern home that honors the cultural heritage of Shantiniketan while incorporating contemporary living spaces and amenities. The project also required careful consideration of the tropical climate with hot summers and moderate winters.',
    solution: 'We created a design that incorporates large overhangs and verandas, traditional in Bengali architecture, while using modern construction techniques. The interiors feature locally-sourced materials and craftsmanship, creating a seamless blend of tradition and contemporary design.',
    mainImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-a59bef3a8b24?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedProjects: ['bungalow-daronda', 'bungalow-kolkata', 'residential-chandigarh']
  },
  { 
    id: 'bungalow-daronda', 
    name: 'G+1 Bungalow at Daronda',
    category: 'Residential',
    location: 'West Bengal', 
    year: '2021',
    client: 'Private',
    description: 'Elegant residential design with modern amenities while respecting the local architectural context of Daronda. This spacious bungalow combines practical living spaces with aesthetic design elements.',
    challenge: "Balancing the client's desire for a modern home with the need to respect the local architectural vernacular and climate conditions.",
    solution: 'The design incorporates traditional elements such as courtyards and deep verandahs while using contemporary materials and construction techniques for durability and maintenance.',
    mainImage: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=2000&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedProjects: ['bungalow-shantiniketan', 'bungalow-kolkata', 'apartment-kolkata']
  },
  // ... add more projects with similar data structure
];

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<any>(null);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  useEffect(() => {
    // Simulating an API call to get project data
    const fetchProject = () => {
      setLoading(true);
      
      // Find project by ID
      const foundProject = projectsData.find(p => p.id === projectId);
      
      if (foundProject) {
        setProject(foundProject);
        
        // Get related projects
        const related = foundProject.relatedProjects
          .map(id => projectsData.find(p => p.id === id))
          .filter(Boolean);
        
        setRelatedProjects(related);
      }
      
      setLoading(false);
    };
    
    fetchProject();
    // Reset the selected image when changing projects
    setSelectedImageIndex(null);
    setIsDialogOpen(false);
  }, [projectId]);
  
  const openImageDialog = (index: number) => {
    setSelectedImageIndex(index);
    setIsDialogOpen(true);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading project details...</div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-2xl font-serif font-light mb-4">Project not found</h2>
          <p className="text-mono-medium mb-6">The project you're looking for does not exist or has been removed.</p>
          <Link to="/projects" className="inline-flex items-center text-mono-dark hover:text-mono-medium transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Combine main image with other images for the gallery
  const allImages = [project.mainImage, ...project.images];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Project Hero */}
      <div className="relative h-[60vh] w-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url("${project.mainImage}")`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container-custom relative z-10 flex flex-col justify-end h-full pb-12">
          <Link to="/projects" className="text-white/80 hover:text-white font-serif flex items-center mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to All Projects
          </Link>
          
          <h1 className="text-4xl md:text-6xl text-white font-light font-serif mb-4">{project.name}</h1>
          <div className="w-20 h-[1px] bg-white/50 mb-6"></div>
          
          <div className="flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center text-white/80">
              <MapPin size={18} className="mr-2" />
              <span className="font-serif">{project.location}</span>
            </div>
            <div className="flex items-center text-white/80">
              <Calendar size={18} className="mr-2" />
              <span className="font-serif">{project.year}</span>
            </div>
            <div className="flex items-center text-white/80">
              <Building size={18} className="mr-2" />
              <span className="font-serif">{project.category}</span>
            </div>
            <div className="flex items-center text-white/80">
              <SquarePen size={18} className="mr-2" />
              <span className="font-serif">Client: {project.client}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Description */}
      <section className="bg-mono-light py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 animate-fade-in">
              <h2 className="text-3xl font-light font-serif mb-6 text-mono-dark">Project Overview</h2>
              <p className="text-mono-medium font-serif mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mt-10">
                <h3 className="text-2xl font-light font-serif mb-4 text-mono-dark">The Challenge</h3>
                <p className="text-mono-medium font-serif mb-8 leading-relaxed">{project.challenge}</p>
                
                <h3 className="text-2xl font-light font-serif mb-4 text-mono-dark">Our Solution</h3>
                <p className="text-mono-medium font-serif leading-relaxed">{project.solution}</p>
              </div>
            </div>
            
            <div className="md:col-span-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="sticky top-24">
                <h3 className="text-xl font-light font-serif mb-4 text-mono-dark">Project Details</h3>
                <Separator className="mb-4" />
                
                <div className="space-y-4 text-mono-medium font-serif">
                  <div className="flex justify-between items-center">
                    <span className="font-light">Location:</span>
                    <span>{project.location}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-light">Year:</span>
                    <span>{project.year}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-light">Type:</span>
                    <span>{project.category}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-light">Client:</span>
                    <span>{project.client}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery - Grid Layout */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-light font-serif mb-8 text-mono-dark">Project Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((image: string, index: number) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden cursor-pointer group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openImageDialog(index)}
              >
                <div className="relative h-full w-full">
                  <img 
                    src={image} 
                    alt={`${project.name} - Image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-white font-serif">View Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Dialog for Image Slideshow */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl bg-black/90 border-none p-0">
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 hover:bg-white/20 border-none text-white" 
            onClick={() => setIsDialogOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <Carousel className="w-full max-h-[80vh]">
            <CarouselContent>
              {allImages.map((image: string, index: number) => (
                <CarouselItem key={index} className="flex items-center justify-center">
                  <div className="flex items-center justify-center h-full w-full p-4">
                    <img 
                      src={image} 
                      alt={`${project.name} - Image ${index + 1}`} 
                      className="max-h-[75vh] object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none text-white" />
            <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none text-white" />
          </Carousel>
          
          <div className="p-4 text-center text-white">
            <p className="font-serif text-lg">{project.name} - Image {selectedImageIndex !== null ? selectedImageIndex + 1 : 1} of {allImages.length}</p>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-mono-dark text-white">
          <div className="container-custom">
            <h2 className="text-3xl font-light font-serif mb-8">Related Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((related, index) => (
                <Link 
                  to={`/projects/${related.id}`} 
                  key={index}
                  className="group animate-on-scroll overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img 
                      src={related.mainImage} 
                      alt={related.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-light font-serif group-hover:text-[#9b87f5] transition-colors">{related.name}</h3>
                  <p className="text-white/70 font-serif">{related.location}</p>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link to="/projects" className="inline-flex items-center text-white hover:text-[#9b87f5] transition-colors">
                View All Projects <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
