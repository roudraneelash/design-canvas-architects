
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-arch-secondary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-arch-dark">Our Approach</h2>
          <div className="w-20 h-1 bg-arch-accent1 mx-auto mb-6" />
          <p className="text-arch-text text-lg">
            Design Canvas Architects was founded on the belief that architecture should serve both people and the planet. 
            With a commitment to sustainable design and innovative solutions, we create spaces that enhance lives and respect the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-arch-light p-8 shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-arch-dark">Design Philosophy</h3>
            <p className="text-arch-text">
              We believe in the power of thoughtful design to transform everyday experiences. 
              Our approach balances aesthetics, functionality, and sustainability to create spaces that inspire and endure.
            </p>
          </div>

          <div className="bg-arch-light p-8 shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-arch-dark">Sustainability</h3>
            <p className="text-arch-text">
              Environmental responsibility is at the core of every project. We integrate sustainable practices and materials 
              to minimize ecological impact while maximizing energy efficiency and occupant wellbeing.
            </p>
          </div>

          <div className="bg-arch-light p-8 shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-arch-dark">Collaboration</h3>
            <p className="text-arch-text">
              We view architecture as a collaborative art. By working closely with clients, engineers, contractors, and communities, 
              we ensure that each project meets the diverse needs of all stakeholders.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-arch-dark">Our Story</h2>
            <p className="text-arch-text mb-4">
              Founded in 2005 by a collective of forward-thinking architects, Design Canvas emerged from a shared vision to challenge conventional approaches to the built environment. 
              We've since grown into a dynamic studio of architects, designers, and planners united by a passion for creating meaningful spaces.
            </p>
            <p className="text-arch-text">
              Over the years, we've cultivated a diverse portfolio spanning residential, commercial, cultural, and public projects. 
              Each design reflects our commitment to innovation, sustainability, and the unique contexts in which our buildings exist.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1200&q=80" 
              alt="Architecture studio" 
              className="w-full h-auto object-cover rounded-sm shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
