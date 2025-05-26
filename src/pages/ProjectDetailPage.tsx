//
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { ArrowLeft, Calendar, MapPin, Building, DollarSign, LayoutGrid } from 'lucide-react';
// import { Dialog, DialogContent } from '@/components/ui/dialog';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
//
// // Project data - would normally come from an API or database
// const projectsData = [
//   {
//     id: 'bungalow-shantiniketan',
//     name: 'G+1 Bungalow at Shantiniketan',
//     category: 'Residential',
//     location: 'West Bengal',
//     year: '2022',
//     client: 'Private',
//     squareFootage: '3,200 sq ft',
//     cost: '₹1.8 Cr',
//     description: 'This contemporary bungalow in the cultural town of Shantiniketan blends modern design with traditional Bengali architectural influences. The residence features spacious interiors with double-height living spaces, extensive use of local materials, and climate-responsive design elements that create comfortable living conditions while respecting the local context.',
//     challenge: 'The primary challenge was designing a modern home that honors the cultural heritage of Shantiniketan while incorporating contemporary living spaces and amenities. The project also required careful consideration of the tropical climate with hot summers and moderate winters.',
//     solution: 'We created a design that incorporates large overhangs and verandas, traditional in Bengali architecture, while using modern construction techniques. The interiors feature locally-sourced materials and craftsmanship, creating a seamless blend of tradition and contemporary design.',
//     mainImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80',
//     images: [
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
//       'https://images.unsplash.com/photo-1600607687644-a59bef3a8b24?auto=format&fit=crop&w=1200&q=80',
//       'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
//       'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80',
//       'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
//       'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
//     ],
//     relatedProjects: ['bungalow-daronda', 'bungalow-kolkata', 'residential-chandigarh']
//   },
//   {
//     id: 'bungalow-daronda',
//     name: 'G+1 Bungalow at Daronda',
//     category: 'Residential',
//     location: 'West Bengal',
//     year: '2021',
//     client: 'Private',
//     squareFootage: '2,800 sq ft',
//     cost: '₹1.5 Cr',
//     description: 'Elegant residential design with modern amenities while respecting the local architectural context of Daronda. This spacious bungalow combines practical living spaces with aesthetic design elements.',
//     challenge: "Balancing the client's desire for a modern home with the need to respect the local architectural vernacular and climate conditions.",
//     solution: 'The design incorporates traditional elements such as courtyards and deep verandahs while using contemporary materials and construction techniques for durability and maintenance.',
//     mainImage: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=2000&q=80',
//     images: [
//       'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
//       'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
//       'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
//       'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=1200&q=80'
//     ],
//     relatedProjects: ['bungalow-shantiniketan', 'bungalow-kolkata', 'apartment-kolkata']
//   },
//   // ... add more projects with similar data structure
// ];
//
// const ProjectDetailPage = () => {
//   const { projectId } = useParams<{ projectId: string }>();
//   const [project, setProject] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//
//   useEffect(() => {
//     // Simulating an API call to get project data
//     const fetchProject = () => {
//       setLoading(true);
//
//       // Find project by ID
//       const foundProject = projectsData.find(p => p.id === projectId);
//
//       if (foundProject) {
//         setProject(foundProject);
//       }
//
//       setLoading(false);
//     };
//
//     fetchProject();
//     // Reset the selected image when changing projects
//     setSelectedImageIndex(null);
//     setIsDialogOpen(false);
//   }, [projectId]);
//
//   const openImageDialog = (index: number) => {
//     setSelectedImageIndex(index);
//     setIsDialogOpen(true);
//   };
//
//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <div className="flex-grow flex items-center justify-center">
//           <div className="animate-pulse">Loading project details...</div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
//
//   if (!project) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
//           <h2 className="text-2xl font-serif font-light mb-4">Project not found</h2>
//           <p className="text-mono-medium mb-6">The project you're looking for does not exist or has been removed.</p>
//           <Link to="/all-projects" className="inline-flex items-center text-mono-dark hover:text-mono-medium transition-colors">
//             <ArrowLeft size={16} className="mr-2" /> Back to Projects
//           </Link>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
//
//   // Combine main image with other images for the gallery
//   const allImages = [project.mainImage, ...project.images];
//
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//
//       {/* Project Header */}
//       <div className="container-custom mt-10 mb-8">
//         <Link to="/all-projects" className="text-mono-medium hover:text-mono-dark font-serif flex items-center mb-6 transition-colors">
//           <ArrowLeft size={16} className="mr-2" /> Back to All Projects
//         </Link>
//       </div>
//
//       {/* Two-column layout with images on left, details on right */}
//       <div className="container-custom mb-12">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left column - Image grid */}
//           <div className="md:w-1/2">
//             <div className="grid grid-cols-2 gap-3">
//               {allImages.slice(0, 6).map((image: string, index: number) => (
//                 <div
//                   key={index}
//                   className="aspect-square overflow-hidden cursor-pointer group"
//                   onClick={() => openImageDialog(index)}
//                 >
//                   <div className="relative h-full w-full">
//                     <img
//                       src={image}
//                       alt={`${project.name} - Image ${index + 1}`}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//                       <span className="text-white font-serif text-sm">View</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//
//           {/* Right column - Project details */}
//           <div className="md:w-1/2">
//             <h1 className="text-3xl md:text-4xl text-mono-dark font-light font-serif mb-4">{project.name}</h1>
//
//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <div className="flex items-center text-mono-medium">
//                 <MapPin size={16} className="mr-2" />
//                 <span className="font-serif">{project.location}</span>
//               </div>
//               <div className="flex items-center text-mono-medium">
//                 <Calendar size={16} className="mr-2" />
//                 <span className="font-serif">{project.year}</span>
//               </div>
//               <div className="flex items-center text-mono-medium">
//                 <Building size={16} className="mr-2" />
//                 <span className="font-serif">{project.category}</span>
//               </div>
//               <div className="flex items-center text-mono-medium">
//                 <LayoutGrid size={16} className="mr-2" />
//                 <span className="font-serif">{project.squareFootage}</span>
//               </div>
//               <div className="flex items-center text-mono-medium">
//                 <DollarSign size={16} className="mr-2" />
//                 <span className="font-serif">{project.cost}</span>
//               </div>
//             </div>
//
//             <div className="space-y-5 mt-6">
//               <div>
//                 <h2 className="text-xl font-light font-serif mb-2 text-mono-dark">Project Overview</h2>
//                 <p className="text-mono-medium font-serif leading-relaxed">{project.description}</p>
//               </div>
//
//               {project.challenge && (
//                 <div>
//                   <h3 className="text-lg font-light font-serif mb-2 text-mono-dark">The Challenge</h3>
//                   <p className="text-mono-medium font-serif leading-relaxed">{project.challenge}</p>
//                 </div>
//               )}
//
//               {project.solution && (
//                 <div>
//                   <h3 className="text-lg font-light font-serif mb-2 text-mono-dark">Our Solution</h3>
//                   <p className="text-mono-medium font-serif leading-relaxed">{project.solution}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//
//       {/* Dialog for Image Slideshow */}
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent className="max-w-5xl bg-black/90 border-none p-0">
//           <Carousel className="w-full max-h-[80vh]">
//             <CarouselContent>
//               {allImages.map((image: string, index: number) => (
//                 <CarouselItem key={index} className="flex items-center justify-center">
//                   <div className="flex items-center justify-center h-full w-full p-4">
//                     <img
//                       src={image}
//                       alt={`${project.name} - Image ${index + 1}`}
//                       className="max-h-[75vh] object-contain"
//                     />
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none text-white" />
//             <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none text-white" />
//           </Carousel>
//
//           <div className="p-4 text-center text-white">
//             <p className="font-serif text-lg">{project.name} - Image {selectedImageIndex !== null ? selectedImageIndex + 1 : 1} of {allImages.length}</p>
//           </div>
//         </DialogContent>
//       </Dialog>
//
//       <Footer />
//     </div>
//   );
// };
//
// export default ProjectDetailPage;
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, MapPin, Building, DollarSign, LayoutGrid } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects, Project } from '@/dummy';

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Flatten all projects from all categories
    const allProjects: Project[] = Object.values(projects).flat();
    // Find project by id
    const foundProject = allProjects.find(p => p.id === projectId);
    setProject(foundProject || null);
    setLoading(false);
    setSelectedImageIndex(null);
    setIsDialogOpen(false);
  }, [projectId]);

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
            <Link to="/all-projects" className="inline-flex items-center text-mono-dark hover:text-mono-medium transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>
          </div>
          <Footer />
        </div>
    );
  }

  const allImages = [project.mainImage, ...project.images];

  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container-custom mt-10 mb-8">
          <Link to="/all-projects" className="text-mono-medium hover:text-mono-dark font-serif flex items-center mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to All Projects
          </Link>
        </div>
        <div className="container-custom mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-3">
                {allImages.slice(0, 6).map((image: string, index: number) => (
                    <div
                        key={index}
                        className="aspect-square overflow-hidden cursor-pointer group"
                        onClick={() => {
                          setSelectedImageIndex(index);
                          setIsDialogOpen(true);
                        }}
                    >
                      <div className="relative h-full w-full">
                        <img
                            src={image}
                            alt={`${project.name} - Image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                          <span className="text-white font-serif text-sm">View</span>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl text-mono-dark font-light font-serif mb-4">{project.name}</h1>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-mono-medium">
                  <MapPin size={16} className="mr-2" />
                  <span className="font-serif">{project.location}</span>
                </div>
                <div className="flex items-center text-mono-medium">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-serif">{project.year}</span>
                </div>
                <div className="flex items-center text-mono-medium">
                  <Building size={16} className="mr-2" />
                  <span className="font-serif">{project.category}</span>
                </div>
                <div className="flex items-center text-mono-medium">
                  <LayoutGrid size={16} className="mr-2" />
                  <span className="font-serif">{project.squareFootage}</span>
                </div>
                <div className="flex items-center text-mono-medium">
                  <DollarSign size={16} className="mr-2" />
                  <span className="font-serif">{project.cost}</span>
                </div>
              </div>
              <div className="space-y-5 mt-6">
                <div>
                  <h2 className="text-xl font-light font-serif mb-2 text-mono-dark">Project Overview</h2>
                  <p className="text-mono-medium font-serif leading-relaxed">{project.description}</p>
                </div>
                {project.challenge && (
                    <div>
                      <h3 className="text-lg font-light font-serif mb-2 text-mono-dark">The Challenge</h3>
                      <p className="text-mono-medium font-serif leading-relaxed">{project.challenge}</p>
                    </div>
                )}
                {project.solution && (
                    <div>
                      <h3 className="text-lg font-light font-serif mb-2 text-mono-dark">Our Solution</h3>
                      <p className="text-mono-medium font-serif leading-relaxed">{project.solution}</p>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-5xl bg-black/90 border-none p-0">
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
        <Footer />
      </div>
  );
};

export default ProjectDetailPage;