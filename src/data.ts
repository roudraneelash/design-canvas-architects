
import { Home, FolderKanban, MessageSquare } from 'lucide-react';
import { ReactNode } from 'react';

export interface NavItem {
  name: string;
  href: string;
  icon?: ReactNode;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/contact" },
];

export type ProjectCategory = 'all' | 'residential' | 'interior' | 'religious' | 'commercial' | 'healthcare';

export interface Project {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  category: ProjectCategory;
}

export const categories: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'interior', label: 'Interior' },
  { id: 'religious', label: 'Religious' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'healthcare', label: 'Healthcare' },
];

export const projects: Record<Exclude<ProjectCategory, 'all'>, Project[]> = {
  residential: [
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
  ],
  interior: [
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
  ],
  religious: [
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
  ],
  commercial: [
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
  ],
  healthcare: [
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
  ],
};

export const stats = [
  { value: "4+", label: "years of experience" },
  { value: "20+", label: "projects completed" },
  { value: "10+", label: "cities" },
  { value: "10+", label: "in team & consultants" },
];

export const getAllProjects = (): Project[] => {
  return Object.values(projects).flat();
};
