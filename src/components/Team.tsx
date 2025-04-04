
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      bio: "With over 20 years of experience, Sarah leads our team with visionary design thinking and a deep commitment to sustainable architecture.",
      specialty: "Sustainable Urban Design",
      delay: 0
    },
    {
      name: "Michael Chen",
      role: "Senior Architect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Michael specializes in innovative structural solutions and has led award-winning projects across residential and commercial sectors.",
      specialty: "Innovative Structures",
      delay: 0.1
    },
    {
      name: "Amara Wilson",
      role: "Interior Design Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      bio: "Amara brings spaces to life with her unique approach to interior architecture, balancing aesthetics with functionality.",
      specialty: "Luxury Interiors",
      delay: 0.2
    },
    {
      name: "David Park",
      role: "Urban Planning Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "David's expertise in urban design and master planning has shaped sustainable communities and civic spaces around the country.",
      specialty: "Master Planning",
      delay: 0.3
    },
    {
      name: "Elena Rodriguez",
      role: "Landscape Architect",
      image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?auto=format&fit=crop&w=400&q=80",
      bio: "Elena specializes in creating harmonious outdoor spaces that complement and enhance architectural designs with natural elements.",
      specialty: "Ecological Landscapes",
      delay: 0.4
    }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-[#222222] to-[#333333] text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-light mb-4 font-serif text-white">Our Team</h2>
          <div className="w-20 h-[1px] bg-white/40 mx-auto mb-6" />
          <p className="text-white/80 text-lg font-serif font-light">
            Meet the talented architects, designers, and planners who bring our projects to life through creativity, expertise, and dedication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="animate-on-scroll overflow-hidden group relative"
              style={{ animationDelay: `${member.delay}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mono-dark via-mono-dark/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <p className="text-white/70 text-xs font-serif uppercase tracking-wider mb-1">{member.specialty}</p>
                <h3 className="text-lg font-light text-white mb-1 font-serif">{member.name}</h3>
                <p className="text-white/80 text-sm font-serif italic">{member.role}</p>
                
                <div className="mt-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Mail size={14} className="text-white" />
                  </button>
                  <button className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Linkedin size={14} className="text-white" />
                  </button>
                  <button className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Twitter size={14} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
