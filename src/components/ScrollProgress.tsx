import React from 'react';

interface ScrollProgressProps {
  progress: number;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-zinc-800 z-50">
      <div 
        className="h-full bg-red-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;