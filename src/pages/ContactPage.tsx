
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Contact Section with Background */}
      <main 
        className="flex-grow relative bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=2000&q=80")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content Container */}
        <div className="container-custom relative z-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Left Side - Contact Form */}
          <div className="lg:col-span-6 bg-white/95 p-8 rounded-sm shadow-lg animate-fade-in">
            <h2 className="text-2xl font-serif font-light mb-6 text-mono-dark border-b pb-2 border-mono-accent/30">
              Get in Touch
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-mono-medium font-serif">
                    First Name*
                  </label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    required
                    className="w-full border-mono-accent/30 rounded-none font-serif font-light"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-mono-medium font-serif">
                    Last Name*
                  </label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    required
                    className="w-full border-mono-accent/30 rounded-none font-serif font-light"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-mono-medium font-serif">
                  Email*
                </label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  required
                  className="w-full border-mono-accent/30 rounded-none font-serif font-light"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1 text-mono-medium font-serif">
                  Phone
                </label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel"
                  className="w-full border-mono-accent/30 rounded-none font-serif font-light"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-mono-medium font-serif">
                  Message*
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  required
                  className="w-full min-h-[80px] border-mono-accent/30 rounded-none font-serif font-light"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-mono-dark hover:bg-mono-medium text-white font-serif font-light flex items-center gap-2 rounded-none"
              >
                Send
                <Send size={16} />
              </Button>
            </form>
          </div>
          
          {/* Right Side - Contact Info and Map */}
          <div className="lg:col-span-6 space-y-6">
            {/* Contact Card */}
            <div className="bg-white/95 p-8 rounded-sm shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-serif font-light mb-6 text-mono-dark border-b pb-2 border-mono-accent/30">
                Contact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-mono-dark">
                <div className="flex items-start gap-3">
                  <Mail className="text-mono-medium mt-1" size={18} />
                  <div>
                    <p className="font-serif font-light">Email</p>
                    <a href="mailto:info@mysite.com" className="text-mono-medium hover:text-mono-dark transition-colors font-serif">info@mysite.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-mono-medium mt-1" size={18} />
                  <div>
                    <p className="font-serif font-light">Phone</p>
                    <p className="text-mono-medium font-serif">+1 (415) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-mono-medium mt-1" size={18} />
                  <div>
                    <p className="font-serif font-light">Location</p>
                    <p className="text-mono-medium font-serif">123 Design Ave, San Francisco</p>
                  </div>
                </div>
                
                <div className="mt-2">
                  <p className="font-serif font-light">Business Hours</p>
                  <p className="text-mono-medium font-serif">Mon-Fri: 9am - 6pm</p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-[220px] bg-white/95 rounded-sm shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-full h-full bg-[#E8E8E8] relative">
                {/* Map Placeholder - In a real app, we would integrate an actual map here */}
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-122.431,37.773,13,0/800x400@2x?access_token=placeholder')] bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-mono-dark text-white px-4 py-2 rounded-sm shadow-md">
                      <p className="font-serif">Our Location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tagline */}
            <div className="text-white animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-serif font-light mb-2">Bringing your vision to life</h3>
              <p className="font-serif font-light text-white/80">
                Let's collaborate on your next project. Our team is ready to transform your ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
