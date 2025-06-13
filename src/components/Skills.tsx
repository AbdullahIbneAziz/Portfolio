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
      bgColor: 'bg-gradient-to-br from-blue-500 to-yellow-500',
      logo: 'Py',
      officialColors: 'Python blue/yellow'
    },
    { 
      name: 'MySQL', 
      level: 80, 
      color: 'from-orange-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-orange-500 to-blue-600',
      logo: 'SQL',
      officialColors: 'MySQL orange/blue'
    },
    { 
      name: 'Git', 
      level: 90, 
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-red-500 to-orange-500',
      logo: 'Git',
      officialColors: 'Git red/orange'
    },
    { 
      name: 'C Language', 
      level: 75, 
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-800',
      logo: 'C',
      officialColors: 'C blue'
    },
    { 
      name: 'C++', 
      level: 80, 
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-blue-500 to-purple-600',
      logo: 'C++',
      officialColors: 'C++ blue/purple'
    },
    { 
      name: 'Java', 
      level: 70, 
      color: 'from-red-600 to-orange-500',
      bgColor: 'bg-gradient-to-br from-red-600 to-orange-500',
      logo: 'Java',
      officialColors: 'Java red/orange'
    },
    { 
      name: 'Numpy', 
      level: 90, 
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-400 to-cyan-500',
      logo: 'Np',
      officialColors: 'NumPy blue/cyan'
    },
    { 
      name: 'Pandas', 
      level: 95, 
      color: 'from-purple-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-purple-500 to-blue-600',
      logo: 'Pd',
      officialColors: 'Pandas purple/blue'
    },
    { 
      name: 'Matplotlib', 
      level: 85, 
      color: 'from-blue-500 to-green-500',
      bgColor: 'bg-gradient-to-br from-blue-500 to-green-500',
      logo: 'Mpl',
      officialColors: 'Matplotlib blue/green'
    },
    { 
      name: 'Seaborn', 
      level: 85, 
      color: 'from-teal-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-teal-500 to-blue-600',
      logo: 'Sns',
      officialColors: 'Seaborn teal/blue'
    },
    { 
      name: 'Scikit-Learn', 
      level: 90, 
      color: 'from-orange-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-orange-500 to-blue-500',
      logo: 'Sk',
      officialColors: 'Scikit-learn orange/blue'
    },
    { 
      name: 'TensorFlow', 
      level: 80, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-500 to-orange-600',
      logo: 'TF',
      officialColors: 'TensorFlow orange'
    },
    { 
      name: 'PyTorch', 
      level: 85, 
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-red-500 to-orange-500',
      logo: 'PT',
      officialColors: 'PyTorch red/orange'
    },
    { 
      name: 'OpenCV', 
      level: 80, 
      color: 'from-green-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-green-500 to-blue-500',
      logo: 'CV',
      officialColors: 'OpenCV green/blue'
    },
    { 
      name: 'Flask', 
      level: 80, 
      color: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900',
      logo: 'Fl',
      officialColors: 'Flask black/gray'
    },
  ];

  return (
    <section className={`py-20 px-4 relative ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 via-black to-black' 
        : 'bg-gradient-to-b from-gray-100 via-white to-white'
    }`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
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
                {/* Background Circle */}
                <div className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700/50 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20'
                    : 'bg-white/80 border-gray-300/50 group-hover:border-blue-400/50 group-hover:shadow-lg group-hover:shadow-blue-400/20'
                }`}></div>
                
                {/* Progress Circle */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={isDark ? "rgba(75, 85, 99, 0.3)" : "rgba(156, 163, 175, 0.3)"}
                    strokeWidth="3"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient-${index})"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - (hoveredSkill === skill.name ? skill.level / 100 : 0))}`}
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
                        <div className={`text-2xl font-bold mb-1 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.level}%
                        </div>
                        <div className={`text-xs uppercase tracking-wider ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Proficiency
                        </div>
                      </div>
                    ) : (
                      <div className="animate-fadeIn">
                        {/* Official Logo Style Container */}
                        <div className={`w-12 h-12 rounded-xl ${skill.bgColor} flex items-center justify-center mb-2 mx-auto transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                          <span className="text-white text-xs font-bold tracking-tight">
                            {skill.logo}
                          </span>
                        </div>
                        {/* Technology Name */}
                        <div className={`text-xs font-medium ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {skill.name}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Skill Name - Hidden when showing logo */}
              <div className="mt-4 text-center opacity-0">
                <h3 className={`text-sm font-medium transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-300 group-hover:text-white' 
                    : 'text-gray-600 group-hover:text-gray-900'
                }`}>
                  {skill.name}
                </h3>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${skill.bgColor.replace('bg-gradient-to-br', 'bg-gradient-to-br').replace('bg-', 'bg-').split(' ').map(c => c + '/20').join(' ')}`}></div>
            </div>
          ))}
        </div>

        {/* Technology Categories */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center p-6 rounded-2xl border ${
              isDark 
                ? 'bg-gray-900/30 border-gray-800/50' 
                : 'bg-white/80 border-gray-200/50'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Python', 'C Language', 'C++', 'Java'].map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded-full text-sm border ${
                    isDark 
                      ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' 
                      : 'bg-blue-100/80 text-blue-700 border-blue-300/50'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className={`text-center p-6 rounded-2xl border ${
              isDark 
                ? 'bg-gray-900/30 border-gray-800/50' 
                : 'bg-white/80 border-gray-200/50'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Data Science & ML</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'OpenCV'].map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded-full text-sm border ${
                    isDark 
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
                      : 'bg-purple-100/80 text-purple-700 border-purple-300/50'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className={`text-center p-6 rounded-2xl border ${
              isDark 
                ? 'bg-gray-900/30 border-gray-800/50' 
                : 'bg-white/80 border-gray-200/50'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Tools & Frameworks</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['MySQL', 'Git', 'Flask'].map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded-full text-sm border ${
                    isDark 
                      ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                      : 'bg-green-100/80 text-green-700 border-green-300/50'
                  }`}>
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
              <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                isDark 
                  ? 'text-blue-400 group-hover:text-cyan-400' 
                  : 'text-blue-600 group-hover:text-cyan-600'
              }`}>15</div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>Technologies Mastered</div>
            </div>
            <div className="text-center group">
              <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                isDark 
                  ? 'text-blue-400 group-hover:text-cyan-400' 
                  : 'text-blue-600 group-hover:text-cyan-600'
              }`}>50+</div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                isDark 
                  ? 'text-blue-400 group-hover:text-cyan-400' 
                  : 'text-blue-600 group-hover:text-cyan-600'
              }`}>3+</div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>Years Experience</div>
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