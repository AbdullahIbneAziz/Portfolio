import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({ title, description, link, tags }: ProjectCardProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors group">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-zinc-800 text-sm rounded-full text-gray-300 group-hover:bg-zinc-700"
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