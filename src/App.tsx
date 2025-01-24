import React, { useRef } from 'react';
import { Github, Linkedin, Facebook, Mail, Download, ExternalLink, Menu } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SocialLink from './components/SocialLink';
import ContactForm from './components/ContactForm';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
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
    <div className="min-h-screen text-white bg-black">
      {/* Navigation */}
      <nav className="fixed z-50 w-full bg-black/90 backdrop-blur-sm">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="text-lg md:text-2xl font-bold text-white">MD ABDULLAH IBNE AZIZ</div>
              <div className="text-xs md:text-sm tracking-wider text-red-500">Machine Learning Engineer</div>
            </div>
            {/* Mobile Menu Button */}
            <button 
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="transition-colors duration-300 hover:text-red-500">Home</a>
              <a href="#projects" className="transition-colors duration-300 hover:text-red-500">Projects</a>
              <button 
                onClick={scrollToContact}
                className="px-6 py-2 transition-all duration-300 bg-red-500 rounded hover:bg-red-600 hover:scale-105"
              >
                Contact Now
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a 
                href="#home" 
                className="transition-colors duration-300 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="transition-colors duration-300 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <button 
                onClick={scrollToContact}
                className="px-6 py-2 transition-all duration-300 bg-red-500 rounded hover:bg-red-600 w-full"
              >
                Contact Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative flex items-center min-h-screen pt-20">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
        <div className="container relative z-20 flex flex-col-reverse md:flex-row items-center justify-between px-4 mx-auto gap-8 md:gap-0">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="mb-6 text-4xl md:text-6xl font-bold leading-tight">
              TRANSFORMING DATA
              <br />
              INTO INTELLIGENCE
              <br />
              ONE MODEL AT A TIME.
            </h1>
            <button className="flex items-center gap-2 px-8 py-3 text-white transition-all duration-300 bg-red-500 rounded hover:bg-red-600 hover:scale-105 mx-auto md:mx-0">
              VIEW PORTFOLIO <ExternalLink size={20} />
            </button>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-0">
            <img 
              src="https://i.ibb.co/5899hbH/Pro-pic.jpg"
              alt="Md Abdullah Ibne Aziz"
              className="w-[300px] md:w-[500px] h-[400px] md:h-[600px] object-cover object-center rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20 md:py-32 bg-black scroll-mt-20">
        <div className="container px-4 mx-auto">
          <div className="mb-4 tracking-wider text-red-500 text-center md:text-left">HOW I MAKE AN IMPACT</div>
          <h2 className="mb-16 text-4xl md:text-5xl font-bold text-center md:text-left">Featured Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} id="contact" className="py-20 md:py-32 bg-zinc-900 scroll-mt-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 tracking-wider text-center text-red-500">GET IN TOUCH</div>
            <h2 className="mb-8 text-3xl md:text-5xl font-bold text-center">Let's Work Together</h2>
            <p className="mb-12 text-lg md:text-xl text-center text-gray-400">
              Ready to transform your data into actionable insights? Let's connect and discuss how we can leverage machine learning for your success.
            </p>
            <div className="grid gap-12 md:grid-cols-2">
              <ContactForm />
              <div>
                <div className="flex flex-col gap-6 mb-8">
                  <SocialLink href="https://github.com/AbdullahIbneAziz" icon={<Github />} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/mdabdullahibneaziz/" icon={<Linkedin />} label="LinkedIn" />
                  <SocialLink href="https://www.facebook.com/abdullah.miraz09" icon={<Facebook />} label="Facebook" />
                  <SocialLink href="mailto:22203246@iubat.edu" icon={<Mail />} label="Email" />
                </div>
                <div className="space-y-4">
                  <p className="italic text-gray-400">
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