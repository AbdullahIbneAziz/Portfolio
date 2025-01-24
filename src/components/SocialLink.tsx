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
      className="w-14 h-14 rounded-full bg-zinc-800 hover:bg-red-500 flex items-center justify-center transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default SocialLink;