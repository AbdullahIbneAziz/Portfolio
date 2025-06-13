import React from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Target, Lightbulb, TrendingUp, Code } from 'lucide-react';
import { Project } from '../App';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${
      isDark 
        ? 'bg-gradient-to-br from-black via-gray-900 to-blue-950' 
        : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-sm border-b ${
        isDark 
          ? 'bg-black/95 border-gray-800/50' 
          : 'bg-white/95 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className={`flex items-center space-x-2 transition-colors ${
                isDark 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </button>
            
            <div className="flex items-center space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {project.title}
          </h1>
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {project.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full border font-medium ${
                  isDark 
                    ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' 
                    : 'bg-blue-100/80 text-blue-700 border-blue-300/50'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Overview */}
          <div className={`rounded-2xl p-8 border ${
            isDark 
              ? 'bg-gray-900/50 backdrop-blur-sm border-gray-800/50' 
              : 'bg-white/80 backdrop-blur-sm border-gray-200/50'
          }`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Project Overview</h2>
            </div>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.content.overview}
            </p>
          </div>

          {/* Challenges */}
          <div className={`rounded-2xl p-8 border ${
            isDark 
              ? 'bg-gray-900/50 backdrop-blur-sm border-gray-800/50' 
              : 'bg-white/80 backdrop-blur-sm border-gray-200/50'
          }`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Key Challenges</h2>
            </div>
            <ul className="space-y-4">
              {project.content.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className={`text-lg ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{challenge}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className={`rounded-2xl p-8 border ${
            isDark 
              ? 'bg-gray-900/50 backdrop-blur-sm border-gray-800/50' 
              : 'bg-white/80 backdrop-blur-sm border-gray-200/50'
          }`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mr-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Solutions Implemented</h2>
            </div>
            <ul className="space-y-4">
              {project.content.solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className={`text-lg ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{solution}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className={`rounded-2xl p-8 border ${
            isDark 
              ? 'bg-gray-900/50 backdrop-blur-sm border-gray-800/50' 
              : 'bg-white/80 backdrop-blur-sm border-gray-200/50'
          }`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Results & Impact</h2>
            </div>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.content.results}
            </p>
          </div>

          {/* Technical Details */}
          <div className={`rounded-2xl p-8 border ${
            isDark 
              ? 'bg-gray-900/50 backdrop-blur-sm border-gray-800/50' 
              : 'bg-white/80 backdrop-blur-sm border-gray-200/50'
          }`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Technical Implementation</h2>
            </div>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.content.technicalDetails}
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-3xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Interested in Learning More?
          </h2>
          <p className={`text-lg mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Let's discuss how similar solutions can benefit your organization
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;