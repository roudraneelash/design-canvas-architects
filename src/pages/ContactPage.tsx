
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative h-[40vh] w-full">
        {/* Header Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=2000&q=80")`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container-custom relative z-10 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl text-white font-light font-serif">Contact Us</h1>
          <div className="w-20 h-[1px] bg-white/50 my-4"></div>
          <p className="text-white/80 max-w-xl font-serif font-light">
            We're here to answer any questions you may have about our architectural services.
          </p>
        </div>
      </div>
      
      {/* Contact Content */}
      <main className="flex-grow bg-mono-light">
        <div className="container-custom py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 shadow-sm animate-fade-in">
              <h2 className="text-2xl font-serif font-light mb-6 text-mono-dark">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 font-serif text-mono-medium">Full Name</label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your name" 
                      className="w-full font-serif font-light"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 font-serif text-mono-medium">Email Address</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full font-serif font-light" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm mb-2 font-serif text-mono-medium">Subject</label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Subject of your message" 
                    className="w-full font-serif font-light"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 font-serif text-mono-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    className="w-full min-h-[150px] font-serif font-light"
                  />
                </div>
                
                <Button type="submit" className="bg-mono-dark hover:bg-mono-medium text-white font-serif font-light flex items-center gap-2">
                  Send Message
                  <Send size={16} />
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="lg:pl-10">
              <h2 className="text-2xl font-serif font-light mb-6 text-mono-dark">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mono-dark text-white rounded-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-light">Office Address</h3>
                    <p className="text-mono-medium font-serif font-light mt-1">
                      123 Architecture Avenue<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mono-dark text-white rounded-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-light">Phone Number</h3>
                    <p className="text-mono-medium font-serif font-light mt-1">
                      +1 (415) 555-0123<br />
                      +1 (415) 555-0124
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mono-dark text-white rounded-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-light">Email Address</h3>
                    <p className="text-mono-medium font-serif font-light mt-1">
                      info@designcanvas.com<br />
                      projects@designcanvas.com
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10 h-[300px] bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-mono-medium">
                  Map Placeholder - Google Maps would go here
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="mt-10">
                <h3 className="font-serif text-lg font-light mb-3">Business Hours</h3>
                <div className="space-y-2 font-serif font-light text-mono-medium">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
