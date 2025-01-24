import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 transition-all duration-300 bg-zinc-800 rounded-lg hover:bg-zinc-700"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default SocialLink;