import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Github, Linkedin, Facebook, Mail, Download, ExternalLink, Menu, Moon, Sun } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SocialLink from './components/SocialLink';
import SkillSection from './components/SkillSection';
import BlogSection from './components/BlogSection';
import ScrollProgress from './components/ScrollProgress';

// Lazy load components that are below the fold
const ContactForm = React.lazy(() => import('./components/ContactForm'));

function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [filter, setFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return true;
  });

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const projects = [
    {
      title: "Product Inventory Management System",
      description: "A comprehensive system for managing product inventory with advanced tracking capabilities.",
      link: "https://github.com/AbdullahIbneAziz/Product-Inventory-Management-System",
      tags: ["Python", "Management", "Database"],
      features: ["Real-time tracking", "Analytics dashboard", "Multi-user support"]
    },
    {
      title: "Student Behavior Analysis",
      description: "Machine learning project analyzing student behavior patterns to improve educational outcomes.",
      link: "https://github.com/AbdullahIbneAziz/Student-Behavior-Analysis-Machine-Learning",
      tags: ["Machine Learning", "Python", "Data Analysis"],
      features: ["Pattern recognition", "Predictive modeling", "Interactive visualizations"]
    },
    {
      title: "Diamonds EDA",
      description: "Exploratory Data Analysis project on diamond dataset revealing pricing patterns and characteristics.",
      link: "https://github.com/AbdullahIbneAziz/Diamonds_EDA",
      tags: ["Data Analysis", "Python", "Visualization"],
      features: ["Statistical analysis", "Price prediction", "Market insights"]
    }
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.tags.includes(filter)
  );

  const uniqueTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'text-white bg-black' : 'text-gray-900 bg-gray-50'}`}>
      <ScrollProgress progress={scrollProgress} />
      
      {/* Navigation */}
      <nav className={`fixed z-50 w-full backdrop-blur-sm ${isDarkMode ? 'bg-black/90' : 'bg-white/90 border-b border-gray-200'}`}>
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className={`text-lg md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                MD ABDULLAH IBNE AZIZ
              </div>
              <div className="text-xs md:text-sm tracking-wider text-red-500">Machine Learning Engineer</div>
            </div>
            
            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button 
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <Menu size={24} className={isDarkMode ? 'text-white' : 'text-gray-900'} />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className={`transition-colors duration-300 hover:text-red-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Home</a>
              <a href="#skills" className={`transition-colors duration-300 hover:text-red-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skills</a>
              <a href="#projects" className={`transition-colors duration-300 hover:text-red-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Projects</a>
              <a href="#blog" className={`transition-colors duration-300 hover:text-red-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Blog</a>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} className="text-gray-900" />}
              </button>
              <button 
                onClick={scrollToContact}
                className="px-6 py-2 text-white transition-all duration-300 bg-red-500 rounded hover:bg-red-600 hover:scale-105"
              >
                Contact Now
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 flex flex-col gap-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <a 
                href="#home" 
                className="transition-colors duration-300 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#skills" 
                className="transition-colors duration-300 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="transition-colors duration-300 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#blog" 
                className="transition-colors duration-300 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <button 
                onClick={scrollToContact}
                className="px-6 py-2 text-white transition-all duration-300 bg-red-500 rounded hover:bg-red-600 w-full"
              >
                Contact Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative flex items-center min-h-screen pt-20">
        <div className={`absolute inset-0 z-10 ${isDarkMode ? 'bg-gradient-to-r from-black via-black/95 to-transparent' : 'bg-gradient-to-r from-white via-white/95 to-transparent'}`}></div>
        <div className="container relative z-20 flex flex-col-reverse md:flex-row items-center justify-between px-4 mx-auto gap-8 md:gap-0">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className={`mb-6 text-4xl md:text-6xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              TRANSFORMING DATA
              <br />
              INTO INTELLIGENCE
              <br />
              ONE MODEL AT A TIME.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center gap-2 px-8 py-3 text-white transition-all duration-300 bg-red-500 rounded hover:bg-red-600 hover:scale-105">
                VIEW PORTFOLIO <ExternalLink size={20} />
              </button>
              <a 
                href="/resume.pdf" 
                className={`flex items-center justify-center gap-2 px-8 py-3 transition-all duration-300 rounded hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-zinc-800 text-white hover:bg-zinc-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
                download
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
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

      {/* Skills Section */}
      <SkillSection isDarkMode={isDarkMode} />

      {/* Projects Section */}
      <div id="projects" className={`py-20 md:py-32 scroll-mt-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container px-4 mx-auto">
          <div className="mb-4 tracking-wider text-red-500 text-center md:text-left">HOW I MAKE AN IMPACT</div>
          <h2 className={`mb-8 text-4xl md:text-5xl font-bold text-center md:text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          
          {/* Project Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === tag 
                    ? 'bg-red-500 text-white' 
                    : isDarkMode
                      ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <BlogSection isDarkMode={isDarkMode} />

      {/* Contact Section */}
      <div ref={contactRef} id="contact" className={`py-20 md:py-32 scroll-mt-20 ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 tracking-wider text-center text-red-500">GET IN TOUCH</div>
            <h2 className={`mb-8 text-3xl md:text-5xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Work Together
            </h2>
            <p className={`mb-12 text-lg md:text-xl text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Ready to transform your data into actionable insights? Let's connect and discuss how we can leverage machine learning for your success.
            </p>
            <div className="grid gap-12 md:grid-cols-2">
              <Suspense fallback={<div>Loading...</div>}>
                <ContactForm isDarkMode={isDarkMode} />
              </Suspense>
              <div>
                <div className="flex flex-col gap-6 mb-8">
                  <SocialLink href="https://github.com/AbdullahIbneAziz" icon={<Github />} label="GitHub" isDarkMode={isDarkMode} />
                  <SocialLink href="https://www.linkedin.com/in/mdabdullahibneaziz/" icon={<Linkedin />} label="LinkedIn" isDarkMode={isDarkMode} />
                  <SocialLink href="https://www.facebook.com/abdullah.miraz09" icon={<Facebook />} label="Facebook" isDarkMode={isDarkMode} />
                  <SocialLink href="mailto:22203246@iubat.edu" icon={<Mail />} label="Email" isDarkMode={isDarkMode} />
                </div>
                <div className="space-y-4">
                  <p className={`italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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