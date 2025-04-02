
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Architectural Design",
      description: "From concept to completion, we create innovative designs tailored to your vision, needs, and site constraints.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 22L3 12L12 2L21 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 22V16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Interior Design",
      description: "We create cohesive, functional, and aesthetically pleasing interior spaces that complement the architecture.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Urban Planning",
      description: "We develop comprehensive plans for communities, focusing on sustainability, connectivity, and quality of life.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="10" y="2" width="4" height="20" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="18" y="8" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Sustainable Design",
      description: "We integrate eco-friendly solutions to minimize environmental impact and maximize energy efficiency.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6.6 18.4L5.2 19.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17.7 18.4L19.1 19.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6.3 5.6L4.9 4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17.7 5.6L19.1 4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Renovation & Restoration",
      description: "We breathe new life into existing structures, respecting their heritage while adding contemporary functionality.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 11L12 2L21 11L21 22H3L3 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Project Management",
      description: "We oversee every phase of development, ensuring your project is delivered on time, within budget, and to specification.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 16L11 18L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section-padding bg-arch-dark text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-6" />
          <p className="text-white/80 text-lg">
            We offer a comprehensive range of architectural and design services to bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-white/5 border border-white/10 rounded-sm text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-white/90">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-medium mb-6">Ready to Start Your Project?</h3>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-white text-arch-dark font-medium rounded-sm hover:bg-arch-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
