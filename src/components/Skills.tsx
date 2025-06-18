import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { isDark } = useTheme();

  const skills = [
    { 
      name: 'Python', 
      level: 95, 
      color: 'from-blue-500 to-yellow-500',
      logoUrl: 'https://i.ibb.co/BKnzGCdz/Python-Transparent.png',
      officialColors: 'Python blue/yellow'
    },
    { 
      name: 'MySQL', 
      level: 80, 
      color: 'from-orange-500 to-blue-600',
      logoUrl: 'https://i.ibb.co/nNjZxTMw/My-SQL-Transparenty.png',
      officialColors: 'MySQL orange/blue'
    },
    { 
      name: 'Git', 
      level: 90, 
      color: 'from-red-500 to-orange-500',
      logoUrl: 'https://i.ibb.co/p6DYD0wP/Git-Transparent.png',
      officialColors: 'Git red/orange'
    },
    { 
      name: 'C Language', 
      level: 75, 
      color: 'from-blue-600 to-blue-800',
      logoUrl: 'https://i.ibb.co/8g3LrLBm/C-Transparent.png',
      officialColors: 'C blue'
    },
    { 
      name: 'C++', 
      level: 80, 
      color: 'from-blue-500 to-purple-600',
      logoUrl: 'https://i.ibb.co/b5Zcytd5/C-Transparent.png',
      officialColors: 'C++ blue/purple'
    },
    { 
      name: 'Java', 
      level: 70, 
      color: 'from-red-600 to-orange-500',
      logoUrl: 'https://i.ibb.co/k21PDhyk/Java-Transparent.png',
      officialColors: 'Java red/orange'
    },
    { 
      name: 'Numpy', 
      level: 90, 
      color: 'from-blue-400 to-cyan-500',
      logoUrl: 'https://i.ibb.co/qLQ12057/Numpy-Transparent.png',
      officialColors: 'NumPy blue/cyan'
    },
    { 
      name: 'Pandas', 
      level: 95, 
      color: 'from-purple-500 to-blue-600',
      logoUrl: 'https://i.ibb.co/Pv8LZmFK/Pandas-Transparent.png',
      officialColors: 'Pandas purple/blue'
    },
    { 
      name: 'Matplotlib', 
      level: 85, 
      color: 'from-blue-500 to-green-500',
      logoUrl: 'https://i.ibb.co/ccgyGRk0/Matplotlib-Transparent.png',
      officialColors: 'Matplotlib blue/green'
    },
    { 
      name: 'Seaborn', 
      level: 85, 
      color: 'from-teal-500 to-blue-600',
      logoUrl: 'https://i.ibb.co/zVbQwXrL/Seaborn-Transaparent.png',
      officialColors: 'Seaborn teal/blue'
    },
    { 
      name: 'Scikit-Learn', 
      level: 90, 
      color: 'from-orange-500 to-blue-500',
      logoUrl: 'https://i.ibb.co/6RXcBLqR/Scikit-learn-Transaparent.png',
      officialColors: 'Scikit-learn orange/blue'
    },
    { 
      name: 'TensorFlow', 
      level: 80, 
      color: 'from-orange-500 to-orange-600',
      logoUrl: 'https://i.ibb.co/PvbDnbXk/Tensor-Flow-Transparent.png',
      officialColors: 'TensorFlow orange'
    },
    { 
      name: 'PyTorch', 
      level: 85, 
      color: 'from-red-500 to-orange-500',
      logoUrl: 'https://i.ibb.co/bMmKg2yg/Pytorch-Transparent.png',
      officialColors: 'PyTorch red/orange'
    },
    { 
      name: 'OpenCV', 
      level: 80, 
      color: 'from-green-500 to-blue-500',
      logoUrl: 'https://i.ibb.co/WQrbg34/Open-CV-transparent.png',
      officialColors: 'OpenCV green/blue'
    },
    { 
      name: 'Flask', 
      level: 80, 
      color: 'from-gray-700 to-gray-900',
      logoUrl: 'https://i.ibb.co/cSRmy5ny/Flask-Transparent.png',
      officialColors: 'Flask black/gray'
    },
  ];

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-gray-900 via-black to-black">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Comprehensive skillset spanning the entire ML pipeline from data preprocessing to model deployment
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Circle */}
              <div className="relative w-32 h-32 mx-auto">
                {/* White Circular Background - Full Circle */}
                <div className="absolute inset-0 rounded-full bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/20 group-hover:scale-105"></div>
                
                {/* Progress Circle */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="rgba(229, 231, 235, 0.3)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="url(#gradient-${index})"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 47}`}
                    strokeDashoffset={`${2 * Math.PI * 47 * (1 - (hoveredSkill === skill.name ? skill.level / 100 : 0))}`}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {hoveredSkill === skill.name ? (
                      <div className="animate-fadeIn">
                        <div className="text-2xl font-bold mb-1 text-gray-800">
                          {skill.level}%
                        </div>
                        <div className="text-xs uppercase tracking-wider text-gray-600">
                          Proficiency
                        </div>
                      </div>
                    ) : (
                      <div className="animate-fadeIn">
                        {/* Logo Image Centered */}
                        <div className="flex items-center justify-center">
                          <img 
                            src={skill.logoUrl} 
                            alt={`${skill.name} logo`}
                            className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110"
                            onError={(e) => {
                              // Fallback to text if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<span class="text-gray-800 text-sm font-bold">${skill.name.slice(0, 3)}</span>`;
                              }
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Technology Name Below Circle */}
              <div className="mt-4 text-center">
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30"></div>
            </div>
          ))}
        </div>

        {/* Technology Categories */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl border bg-gray-900/30 border-gray-800/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Python', 'C Language', 'C++', 'Java'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-sm border bg-blue-500/20 text-blue-300 border-blue-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center p-6 rounded-2xl border bg-gray-900/30 border-gray-800/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Data Science & ML</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'OpenCV'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-sm border bg-purple-500/20 text-purple-300 border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center p-6 rounded-2xl border bg-gray-900/30 border-gray-800/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Tools & Frameworks</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['MySQL', 'Git', 'Flask'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-sm border bg-green-500/20 text-green-300 border-green-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Now Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-2xl">
            <div className="text-center group">
              <div className="text-4xl font-bold mb-2 transition-colors duration-300 text-blue-400 group-hover:text-cyan-400">15</div>
              <div className="text-gray-300">Technologies Mastered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold mb-2 transition-colors duration-300 text-blue-400 group-hover:text-cyan-400">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold mb-2 transition-colors duration-300 text-blue-400 group-hover:text-cyan-400">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;