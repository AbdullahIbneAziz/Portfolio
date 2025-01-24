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
    <div className="p-6 transition-all duration-300 bg-zinc-900 rounded-lg hover:bg-zinc-800">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-red-500 hover:text-red-400"
      >
        View Project <ExternalLink size={16} />
      </a>
    </div>
  );
};

export default ProjectCard;