import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  features: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, tags, features }) => {
  return (
    <div className="group relative p-6 transition-all duration-300 bg-zinc-900 rounded-lg hover:bg-zinc-800 animate-fade-in">
      <div className="mb-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm text-red-500 bg-red-500/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Hover overlay with features */}
      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg p-6 flex flex-col justify-center">
        <h4 className="text-lg font-semibold mb-4 text-red-500">Key Features:</h4>
        <ul className="list-disc list-inside space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300">{feature}</li>
          ))}
        </ul>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-red-500 hover:text-red-400"
        >
          View Project <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;