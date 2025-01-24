import React from 'react';
import { Github, Linkedin, Facebook, Mail, Download, ExternalLink } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SocialLink from './components/SocialLink';

function App() {
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
            <div className="text-2xl font-bold text-red-500">ML.Engineer</div>
            <div className="flex gap-8 items-center">
              <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
              <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
              <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded transition-colors">
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
            <div className="text-red-500 mb-4 tracking-wider">MACHINE LEARNING ENGINEER</div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              TRANSFORMING DATA
              <br />
              INTO INTELLIGENCE
              <br />
              ONE MODEL AT A TIME.
            </h1>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded flex items-center gap-2 transition-colors">
              VIEW PORTFOLIO <ExternalLink size={20} />
            </button>
          </div>
          <div className="w-1/2 hidden lg:block">
            <img 
              src="https://i.ibb.co/5899hbH/Pro-pic.jpg"
              alt="Md Abdullah Ibne Aziz"
              className="w-[500px] h-[600px] object-cover object-center"
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
 <div id="contact" className="py-32 bg-zinc-900 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-red-500 mb-4 tracking-wider">GET IN TOUCH</div>
              <h2 className="text-5xl font-bold mb-8">Let's Work Together</h2>
              <p className="text-xl text-gray-400">
                Ready to transform your data into actionable insights? Let's connect and discuss how we can leverage machine learning for your success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="contact-form">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="topic">Topic</label>
                    <input type="text" id="topic" placeholder="What's this about?" />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={4} placeholder="Your message" className="resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded flex items-center justify-center gap-2 transition-colors duration-300">
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    <SocialLink href="https://github.com/AbdullahIbneAziz" icon={<Github />} label="GitHub" />
                    <SocialLink href="https://www.linkedin.com/in/mdabdullahibneaziz/" icon={<Linkedin />} label="LinkedIn" />
                    <SocialLink href="https://www.facebook.com/abdullah.miraz09" icon={<Facebook />} label="Facebook" />
                    <SocialLink href="mailto:22203246@iubat.edu" icon={<Mail />} label="Email" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Email Me</h3>
                  <a 
                    href="mailto:22203246@iubat.edu"
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-xl transition-colors duration-300"
                  >
                    <Mail size={24} />
                    22203246@iubat.edu
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Response Time</h3>
                  <p className="text-gray-400">I typically respond within 24 hours during business days.</p>
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