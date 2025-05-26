// src/components/ContactSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => (
    <section className="bg-mono-light py-16" id="contact">
        <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-serif font-light text-mono-dark">Let's Collaborate</h2>
                    <div className="w-20 h-[1px] bg-mono-accent mb-6"></div>
                    <p className="text-mono-medium text-lg font-serif">
                        Ready to transform your vision into reality? Our team of expert architects and designers
                        are eager to collaborate with you on your next project.
                    </p>
                    <p className="text-mono-medium font-serif">
                        Whether you're planning a residential renovation, commercial development, or cultural space,
                        we bring creativity, technical expertise, and a thoughtful approach to every project.
                    </p>
                    <div className="pt-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-mono-dark text-white font-light rounded-none font-serif hover:bg-mono-medium transition-colors group"
                        >
                            Contact Us
                            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <div className="relative animate-on-scroll" style={{ animationDelay: "0.15s" }}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                                    alt="Office Space"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="h-32 overflow-hidden bg-mono-dark text-white p-4 flex flex-col justify-center">
                                <h3 className="font-serif text-lg font-light">Visit Our Studio</h3>
                                <p className="text-sm text-white/80 font-serif">123 Architecture Ave, San Francisco</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-32 overflow-hidden bg-[#FFA726] text-white p-4 flex flex-col justify-center">
                                <h3 className="font-serif text-lg font-light">Start a Conversation</h3>
                                <p className="text-sm text-white/90 font-serif">info@designcanvas.com</p>
                            </div>
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80"
                                    alt="Design Meeting"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-20 h-20 bg-mono-dark -top-5 -left-5 -z-10"></div>
                    <div className="absolute w-20 h-20 bg-[#FFA726] -bottom-5 -right-5 -z-10"></div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;