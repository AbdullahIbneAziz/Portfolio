import React, { useRef } from 'react';
import { Github, Linkedin, Facebook, Mail, Download, ExternalLink } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SocialLink from './components/SocialLink';
import ContactForm from './components/ContactForm';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Product Inventory Management System",
      description: "A comprehensive system for managing product inventory with advanced tracking capabilities.",
      link: "https://github.com/AbdullahIbneAziz/Product-Inventory-Management-System",
      tags: ["Python", "Management", "Database"]
    },
    {
      title: "Student Behavior Analysis",
      description: "Machine learning project analyzing student behavior patterns to improve educational outcomes.",
      link: "https://github.com/AbdullahIbneAziz/Student-Behavior-Analysis-Machine-Learning",
      tags: ["Machine Learning", "Python", "Data Analysis"]
    },
    {
      title: "Diamonds EDA",
      description: "Exploratory Data Analysis project on diamond dataset revealing pricing patterns and characteristics.",
      link: "https://github.com/AbdullahIbneAziz/Diamonds_EDA",
      tags: ["Data Analysis", "Python", "Visualization"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-white">MD ABDULLAH IBNE AZIZ</div>
              <div className="text-red-500 text-sm tracking-wider">Machine Learning Engineer</div>
            </div>
            <div className="flex gap-8 items-center">
              <a href="#home" className="hover:text-red-500 transition-colors duration-300">Home</a>
              <a href="#projects" className="hover:text-red-500 transition-colors duration-300">Projects</a>
              <button 
                onClick={scrollToContact}
                className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded transition-all duration-300 hover:scale-105"
              >
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="min-h-screen relative flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent z-10"></div>
        <div className="container mx-auto px-4 flex items-center justify-between relative z-20">
          <div className="max-w-2xl">
            <div className="text-red-500 text-3xl font-bold mb-4 tracking-wider">MD ABDULLAH IBNE AZIZ</div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              TRANSFORMING DATA
              <br />
              INTO INTELLIGENCE
              <br />
              ONE MODEL AT A TIME.
            </h1>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded flex items-center gap-2 transition-all duration-300 hover:scale-105">
              VIEW PORTFOLIO <ExternalLink size={20} />
            </button>
          </div>
          <div className="w-1/2 hidden lg:block">
            <img 
              src="https://i.ibb.co/5899hbH/Pro-pic.jpg"
              alt="Md Abdullah Ibne Aziz"
              className="w-[500px] h-[600px] object-cover object-center rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-32 bg-black scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-red-500 mb-4 tracking-wider">HOW I MAKE AN IMPACT</div>
          <h2 className="text-5xl font-bold mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} id="contact" className="py-32 bg-zinc-900 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-red-500 mb-4 tracking-wider text-center">GET IN TOUCH</div>
            <h2 className="text-5xl font-bold mb-8 text-center">Let's Work Together</h2>
            <p className="text-xl text-gray-400 mb-12 text-center">
              Ready to transform your data into actionable insights? Let's connect and discuss how we can leverage machine learning for your success.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <ContactForm />
              <div>
                <div className="flex flex-col gap-6 mb-8">
                  <SocialLink href="https://github.com/AbdullahIbneAziz" icon={<Github />} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/mdabdullahibneaziz/" icon={<Linkedin />} label="LinkedIn" />
                  <SocialLink href="https://www.facebook.com/abdullah.miraz09" icon={<Facebook />} label="Facebook" />
                  <SocialLink href="mailto:22203246@iubat.edu" icon={<Mail />} label="Email" />
                </div>
                <div className="space-y-4">
                  <a 
                    href="mailto:22203246@iubat.edu"
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-xl transition-colors"
                  >
                    <Mail size={24} />
                    22203246@iubat.edu
                  </a>
                  <p className="text-gray-400 italic">
                    I typically respond to messages within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;