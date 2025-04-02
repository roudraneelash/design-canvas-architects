
import React from 'react';

const Team = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      bio: "With over 20 years of experience, Sarah leads our team with visionary design thinking and a deep commitment to sustainable architecture."
    },
    {
      name: "Michael Chen",
      role: "Senior Architect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Michael specializes in innovative structural solutions and has led award-winning projects across residential and commercial sectors."
    },
    {
      name: "Amara Wilson",
      role: "Interior Design Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      bio: "Amara brings spaces to life with her unique approach to interior architecture, balancing aesthetics with functionality."
    },
    {
      name: "David Park",
      role: "Urban Planning Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "David's expertise in urban design and master planning has shaped sustainable communities and civic spaces around the country."
    }
  ];

  return (
    <section id="team" className="section-padding bg-arch-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-arch-dark">Our Team</h2>
          <div className="w-20 h-1 bg-arch-accent mx-auto mb-6" />
          <p className="text-arch-medium text-lg">
            Meet the talented architects, designers, and planners who bring our projects to life through creativity, expertise, and dedication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white shadow-sm rounded-sm overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white/90 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-arch-dark">{member.name}</h3>
                <p className="text-arch-accent font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="text-arch-dark font-medium hover:text-arch-accent transition-colors">
            View the entire team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
