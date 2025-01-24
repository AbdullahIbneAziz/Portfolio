import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isDarkMode: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, isDarkMode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 p-4 transition-all duration-300 rounded-lg ${
        isDarkMode 
          ? 'bg-zinc-800 hover:bg-zinc-700 text-white' 
          : 'bg-white hover:bg-gray-50 text-gray-900 shadow-lg'
      }`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default SocialLink;