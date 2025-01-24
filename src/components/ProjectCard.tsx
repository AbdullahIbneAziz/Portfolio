import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, tags }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300 group">
      <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-red-500/10 text-red-400 px-4 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
      >
        View Project <ExternalLink size={16} />
      </a>
    </div>
  );
}

export default ProjectCard;