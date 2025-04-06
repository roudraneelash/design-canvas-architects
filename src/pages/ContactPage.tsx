
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
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
        className="flex-grow relative bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&q=80")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Heading and Contact Info */}
          <div className="text-white space-y-10">
            <div>
              <p className="text-sm uppercase tracking-wide mb-2">Contact</p>
              <h1 className="text-6xl font-serif font-light mb-6">Get in Touch</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="bg-black/30 backdrop-blur-sm p-6 hover:bg-black/40 transition-colors">
                <div className="flex flex-col items-start">
                  <Phone className="mb-4 text-white/70" size={24} />
                  <h3 className="font-serif text-lg mb-2">Phone</h3>
                  <a href="tel:+14155550123" className="text-white/80 hover:text-white">
                    +1 (415) 555-0123
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="bg-black/30 backdrop-blur-sm p-6 hover:bg-black/40 transition-colors">
                <div className="flex flex-col items-start">
                  <Mail className="mb-4 text-white/70" size={24} />
                  <h3 className="font-serif text-lg mb-2">Email</h3>
                  <a href="mailto:info@mysite.com" className="text-white/80 hover:text-white">
                    info@mysite.com
                  </a>
                </div>
              </div>
              
              {/* Address */}
              <div className="bg-black/30 backdrop-blur-sm p-6 hover:bg-black/40 transition-colors">
                <div className="flex flex-col items-start">
                  <MapPin className="mb-4 text-white/70" size={24} />
                  <h3 className="font-serif text-lg mb-2">Address</h3>
                  <p className="text-white/80">
                    123 Design Ave<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="w-full h-[250px] bg-black/30 overflow-hidden relative">
              <iframe 
                title="Location Map"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017979172!3d37.75781499657369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617455214701!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-white/10"></div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-serif font-light mb-2 text-mono-dark">
              Schedule free
            </h2>
            <h3 className="text-3xl font-serif font-light mb-6 text-mono-dark">
              design consultation
            </h3>
            <p className="mb-6 text-mono-medium">
              Call us directly at <a href="tel:+14155550123" className="text-mono-dark hover:underline">+1 (415) 555-0123</a>, or complete the form below
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Full Name*"
                  required
                  className="bg-gray-100 border-0 rounded-none py-3 px-4 text-mono-dark"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="Email Address*"
                  type="email"
                  required
                  className="bg-gray-100 border-0 rounded-none py-3 px-4 text-mono-dark"
                />
                
                <Input 
                  placeholder="Phone Number*"
                  type="tel"
                  required
                  className="bg-gray-100 border-0 rounded-none py-3 px-4 text-mono-dark"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Input 
                    placeholder="Address*"
                    required
                    className="bg-gray-100 border-0 rounded-none py-3 px-4 text-mono-dark"
                  />
                </div>
                
                <Input 
                  placeholder="ZIP*"
                  required
                  className="bg-gray-100 border-0 rounded-none py-3 px-4 text-mono-dark"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="How did you hear about us?*"
                  required
                  className="bg-gray-100 border-0 rounded-none py-3 px-4 text-mono-dark"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Tell us a bit about your project!"
                  className="bg-gray-100 border-0 rounded-none min-h-[120px] py-3 px-4 text-mono-dark"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full py-6 rounded-none font-serif font-light text-base bg-[#8EBAC5] hover:bg-[#7DA8B3] transition-colors"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
