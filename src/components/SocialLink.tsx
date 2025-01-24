import React, { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-gray-400 hover:text-red-500 transition-all duration-300 transform hover:translate-x-2 p-4 rounded-lg hover:bg-zinc-800 group"
      aria-label={label}
    >
      <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-zinc-700 transition-colors">
        {icon}
      </div>
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
}