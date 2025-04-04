
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Architectural Design",
      description: "From concept to completion, we create innovative designs tailored to your vision, needs, and site constraints.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22L12 5L22 22H2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 22V15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Structural Design",
      description: "We engineer robust structural solutions that ensure safety, stability, and longevity for all our architectural projects.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 22V11M17 22V11M3 9L12 2L21 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="9" width="20" height="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 15H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Interior Design MEP",
      description: "We create cohesive, functional interior spaces, integrated with state-of-the-art mechanical, electrical, and plumbing systems.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="9" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="15" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="9" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Fire Sanction",
      description: "We ensure all projects meet or exceed fire safety regulations and obtain necessary fire department approvals and certifications.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C16.4183 22 20 18.4183 20 14C20 11 17 8 16 6C15 8 13.5 9 12 9C10.5 9 9.5 8.5 9 7C8.5 8.5 8 10 6 12C4 14 4 16 4 17C4 19.7614 7.58172 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16C13.1046 16 14 15.1046 14 14C14 12.5 12.5 11.5 12 11C11.5 11.5 10 12.5 10 14C10 15.1046 10.8954 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Product Design",
      description: "We create custom architectural elements and products that enhance the overall design and functionality of spaces.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 16L12 22L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 12L12 18L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 8L12 14L4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 4L12 10L4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Urban Design",
      description: "We develop comprehensive urban plans that create harmonious, sustainable, and people-centric community spaces.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="4" height="12" stroke="currentColor" strokeWidth="1.5" />
          <rect x="10" y="4" width="4" height="14" stroke="currentColor" strokeWidth="1.5" />
          <rect x="18" y="8" width="4" height="10" stroke="currentColor" strokeWidth="1.5" />
          <line x1="2" y1="22" x2="22" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Planning Vastu Consultancy",
      description: "We integrate ancient Vastu principles with modern design to create harmonious, balanced, and positive living environments.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Spatial Design",
      description: "We create immersive spatial experiences that optimize flow, functionality, and aesthetic appeal in every environment.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21V3L21 21H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 7V3H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21.0001 14V17.0001H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 3H11V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "3D Visualisation",
      description: "We bring designs to life through stunning 3D renderings and walkthroughs that help clients visualize their future spaces.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L20 8.00004L12 12L4 8.00004L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 8V16L12 20L4 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 12V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section-padding relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.15)"
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white font-serif">Services We Offer</h2>
          <div className="w-20 h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-white/80 text-lg font-light">
            We offer a comprehensive range of architectural and design services to bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-black/40 border border-white/10 rounded-none text-center hover:bg-black/60 transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-white/90">
                {service.icon}
              </div>
              <h3 className="text-xl font-light mb-3 text-white font-serif">{service.title}</h3>
              <p className="text-white/70 font-light">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-light mb-6 text-white font-serif">Ready to Start Your Project?</h3>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-white text-black font-light rounded-none hover:bg-gray-300 transition-all duration-300 font-serif"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
