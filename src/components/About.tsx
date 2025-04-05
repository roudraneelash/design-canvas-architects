
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-mono-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-mono-dark">Our Approach</h2>
          <div className="w-20 h-[1px] bg-mono-accent mx-auto mb-6" />
          <p className="text-mono-medium text-lg font-serif">
            Design Canvas Architects was founded on the belief that architecture should serve both people and the planet. 
            With a commitment to sustainable design and innovative solutions, we create spaces that enhance lives and respect the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Design Philosophy",
              text: "We believe in the power of thoughtful design to transform everyday experiences. Our approach balances aesthetics, functionality, and sustainability.",
              image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
              color: "text-[#D18700]",
              delay: 0
            },
            {
              title: "Sustainability",
              text: "Environmental responsibility is at the core of every project. We integrate sustainable practices and materials to minimize ecological impact.",
              image: "https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=800&q=80",
              color: "text-[#B67B14]",
              delay: 0.1
            },
            {
              title: "Collaboration",
              text: "We view architecture as a collaborative art. By working closely with clients, engineers, and communities, we ensure projects meet all stakeholders' needs.",
              image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
              color: "text-[#E29728]",
              delay: 0.2
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="animate-on-scroll overflow-hidden group"
              style={{ animationDelay: `${item.delay}s` }}
            >
              <div className="relative h-64 overflow-hidden mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-mono-dark/30 group-hover:bg-mono-dark/20 transition-all duration-300"></div>
              </div>
              <h3 className={cn("text-xl font-light mb-3 font-serif group-hover:text-[#FFA726] transition-colors", item.color)}>{item.title}</h3>
              <p className="text-mono-text font-serif font-light">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#222] p-10 rounded-lg">
          <div className="animate-on-scroll md:order-2">
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80" 
                alt="Architecture studio" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#222]/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="animate-on-scroll md:order-1" style={{ animationDelay: "0.15s" }}>
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white font-serif">Our Story</h2>
            <div className="w-20 h-[1px] bg-white/40 mb-6"></div>
            <p className="text-white/90 mb-4 font-serif font-light">
              Founded in 2005 by a collective of forward-thinking architects, Design Canvas emerged from a shared vision to challenge conventional approaches to the built environment. 
              We've since grown into a dynamic studio of architects, designers, and planners united by a passion for creating meaningful spaces.
            </p>
            <p className="text-white/90 mb-6 font-serif font-light">
              Over the years, we've cultivated a diverse portfolio spanning residential, commercial, cultural, and public projects. 
              Each design reflects our commitment to innovation, sustainability, and the unique contexts in which our buildings exist.
            </p>
            <a href="#projects" className="inline-flex items-center font-serif font-light bg-[#333] hover:bg-[#444] text-white hover:text-[#FFA726] transition-all px-8 py-3 pl-12 ml-4 relative group">
              <span className="absolute left-0 top-0 h-full w-2 bg-[#FFA726]"></span>
              Explore our work
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
