// src/data/projects.js
import { Home, FolderKanban, MessageSquare } from 'lucide-react';
import { ReactNode } from 'react';

export interface NavItem {
    name: string;
    href: string;
    icon?: ReactNode;
}

export const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export type ProjectCategory = 'all' | 'residential' | 'interior' | 'religious' | 'commercial' | 'healthcare';

export interface Project {
    id: string;
    name: string;
    location: string;
    image?: string; // this is redundant with 'mainImage'
    mainImage: string;
    images: string[];
    description: string;
    category: ProjectCategory;
    year: string;
    client?: string;
    squareFootage: string;
    cost: string;
    challenge: string;
    solution?: string;
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
                category: 'residential',
                location: 'West Bengal',
                year: '2022',
                client: 'Private',
                squareFootage: '3,200 sq ft',
                cost: '₹1.8 Cr',
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
            },
            {
                id: 'bungalow-daronda',
                name: 'G+1 Bungalow at Daronda',
                category: 'residential',
                location: 'West Bengal',
                year: '2021',
                client: 'Private',
                squareFootage: '2,800 sq ft',
                cost: '₹1.5 Cr',
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
            },
            {
                id: 'bungalow-kolkata',
                name: 'G+3 Bungalow at Kolkata',
                category: 'residential',
                location: 'West Bengal',
                year: '2020',
                client: 'Private',
                squareFootage: '4,000 sq ft',
                cost: '₹2.2 Cr',
                description: 'Multi-storey residence with spacious interiors and innovative space utilization.',
                challenge: 'Designing a multi-level home that maximizes space while ensuring privacy and comfort for all family members.',
                solution: 'Utilized vertical zoning and open-plan layouts to create distinct yet connected living spaces. Large windows and balconies enhance natural light and ventilation.',
                mainImage: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80',
                images: [
                    'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
                ],
            },
            {
                id: 'apartment-kolkata',
                name: 'G+4 Apartment Building at Kolkata',
                category: 'residential',
                location: 'West Bengal',
                year: '2019',
                client: 'Developer',
                squareFootage: '12,000 sq ft',
                cost: '₹6.5 Cr',
                description: 'Urban apartment complex with emphasis on community spaces and natural light.',
                challenge: 'Creating a sense of community and openness in a dense urban setting.',
                solution: 'Designed shared terraces, landscaped courtyards, and maximized window openings for daylight and cross-ventilation.',
                mainImage: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=800&q=80',
                images: [
                    'https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
                ],
            },
            {
                id: 'residential-chandigarh',
                name: 'G+3 Residential Building',
                category: 'residential',
                location: 'Chandigarh',
                year: '2021',
                client: 'Private',
                squareFootage: '5,500 sq ft',
                cost: '₹3.1 Cr',
                description: 'Contemporary residence inspired by the modernist architecture of Chandigarh.',
                challenge: 'Integrating modernist design principles with the client’s requirements for comfort and functionality.',
                solution: 'Adopted clean lines, open floor plans, and large windows, while using local materials for sustainability.',
                mainImage: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80',
                images: [
                    'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
                ],
            },
        ],
    interior: [
        {
            id: 'interior-southcity',
            name: 'Apartment Interior at South City',
            category: 'interior',
            location: 'Kolkata',
            year: '2022',
            client: 'Private',
            squareFootage: '2,000 sq ft',
            cost: '₹80 L',
            description: 'Luxury apartment interiors with bespoke furniture and high-end finishes.',
            challenge: 'Maximizing space and light in a high-rise apartment while maintaining privacy.',
            solution: 'Custom furniture, open-plan living, and large windows for natural light.',
            mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80'
            ],
        },
        {
            id: 'interior-betor',
            name: 'Apartment Interior, Betor Heights',
            category: 'interior',
            location: 'Howrah, W.B.',
            year: '2021',
            client: 'Private',
            squareFootage: '1,500 sq ft',
            cost: '₹60 L',
            description: 'Contemporary interior design focusing on space optimization and aesthetic appeal.',
            challenge: 'Combining modern aesthetics with practical storage solutions.',
            solution: 'Integrated storage, modular kitchen, and minimalist decor.',
            mainImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
            ],
        },
        {
            id: 'interior-mayfair',
            name: 'Apartment Interiors Mayfair Housing',
            category: 'interior',
            location: 'Kolkata',
            year: '2020',
            client: 'Private',
            squareFootage: '1,800 sq ft',
            cost: '₹75 L',
            description: 'Elegant residential interiors with a blend of classic and contemporary elements.',
            challenge: 'Blending classic and modern styles for a timeless look.',
            solution: 'Used neutral palettes, classic moldings, and modern lighting.',
            mainImage: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80'
            ],
        },
        {
            id: 'interior-mehrauli',
            name: 'G+1 Residential Interiors, Mehrauli',
            category: 'interior',
            location: 'New Delhi',
            year: '2021',
            client: 'Private',
            squareFootage: '2,200 sq ft',
            cost: '₹90 L',
            description: 'Historic district residence with modernized interiors that respect the heritage context.',
            challenge: 'Modernizing interiors while preserving heritage features.',
            solution: 'Restored original elements and added modern amenities.',
            mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
            ],
        },
    ],
    religious: [
        {
            id: 'basona-kali-temple',
            name: 'Basona Kali Temple',
            category: 'religious',
            location: 'Garia, Kolkata',
            year: '2020',
            client: 'Temple Trust',
            squareFootage: '4,500 sq ft',
            cost: '₹1.2 Cr',
            description: 'A modern interpretation of traditional temple architecture with sacred geometry.',
            challenge: 'Blending tradition with modern construction for longevity.',
            solution: 'Used sacred geometry and modern materials for durability.',
            mainImage: 'https://images.unsplash.com/photo-1677397333707-7b833006983d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            images: [
                'https://images.unsplash.com/photo-1677397333707-7b833006983d?q=80&w=2070&auto=format&fit=crop',
            ],
        },
        {
            id: 'temple-complex',
            name: 'Temple Complex & Meditation Hall',
            category: 'religious',
            location: 'West Bengal',
            year: '2021',
            client: 'Religious Trust',
            squareFootage: '10,000 sq ft',
            cost: '₹3.5 Cr',
            description: 'Comprehensive spiritual complex integrating worship, meditation, and community spaces.',
            challenge: 'Integrating multiple functions in a cohesive spiritual environment.',
            solution: 'Zoned spaces for worship, meditation, and community activities.',
            mainImage: 'https://shorturl.at/lDhtG',
            images: [
                'https://shorturl.at/lDhtG'
            ],
        },
        {
            id: 'ghat-redevelopment',
            name: 'Ghat redevelopment',
            category: 'religious',
            location: 'Maliandi, W.B.',
            year: '2019',
            client: 'Local Municipality',
            squareFootage: '3,000 sq ft',
            cost: '₹80 L',
            description: 'Restoration and enhancement of riverside sacred spaces with improved accessibility.',
            challenge: 'Restoring heritage while improving accessibility and safety.',
            solution: 'Added ramps, lighting, and restored original stonework.',
            mainImage: 'https://images.unsplash.com/photo-1650866310705-14616e950b51?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            images: [
                'https://images.unsplash.com/photo-1650866310705-14616e950b51?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
        },
    ],
    commercial: [
        {
            id: 'admin-iocl',
            name: 'Admin Building, IOCL, Bottling Plant',
            category: 'commercial',
            location: 'Kalyani',
            year: '2022',
            client: 'IOCL',
            squareFootage: '15,000 sq ft',
            cost: '₹5 Cr',
            description: 'Modern administrative facility with efficient workspace planning and sustainable features.',
            challenge: 'Designing for operational efficiency and sustainability.',
            solution: 'Open-plan offices, energy-efficient systems, and green spaces.',
            mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
            ],
        },
        {
            id: 'eco-resort',
            name: 'Eco Resort at Taherpur',
            category: 'commercial',
            location: 'West Bengal',
            year: '2021',
            client: 'Private',
            squareFootage: '20,000 sq ft',
            cost: '₹7 Cr',
            description: 'Sustainable hospitality design with minimal environmental footprint and local materials.',
            challenge: 'Minimizing environmental impact while maximizing guest comfort.',
            solution: 'Used local materials, solar power, and rainwater harvesting.',
            mainImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
            ],
        },
        {
            id: 'facelift-ranchi',
            name: 'Facelift of G+11 Housing, Ranchi Smart City',
            category: 'commercial',
            location: 'Chattisgarh',
            year: '2020',
            client: 'Smart City Authority',
            squareFootage: '50,000 sq ft',
            cost: '₹15 Cr',
            description: 'Smart city residential complex renovation with digital integration and sustainability upgrades.',
            challenge: 'Upgrading old infrastructure to smart city standards.',
            solution: 'Digital access, energy retrofits, and new amenities.',
            mainImage: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=1200&q=80'
            ],
        },
    ],
    healthcare: [
        {
            id: 'hospital-raigunj',
            name: 'Hospital at Raigunj',
            category: 'healthcare',
            location: 'West Bengal',
            year: '2022',
            client: 'Health Dept.',
            squareFootage: '30,000 sq ft',
            cost: '₹12 Cr',
            description: 'Modern healthcare facility designed for optimal patient care and staff efficiency.',
            challenge: 'Balancing patient comfort with clinical efficiency.',
            solution: 'Patient-centric layouts, natural light, and efficient workflows.',
            mainImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80'
            ],
        },
        {
            id: 'hospital-chandrakona',
            name: 'G+IV Storied Hospital at Chandrakona',
            category: 'healthcare',
            location: 'Paschim Mednipur, W.B.',
            year: '2021',
            client: 'Health Dept.',
            squareFootage: '40,000 sq ft',
            cost: '₹16 Cr',
            description: 'Multi-specialty healthcare center with focus on healing environments and natural light.',
            challenge: 'Creating a healing environment in a high-density hospital.',
            solution: 'Courtyards, daylighting, and color psychology in interiors.',
            mainImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
            ],
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
