import React from 'react';

interface SkillSectionProps {
  isDarkMode: boolean;
}

const skills = [
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Neural Networks"]
  },
  {
    category: "Data Analysis",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis"]
  },
  {
    category: "Programming",
    items: ["Python", "R", "SQL", "Git", "Docker"]
  },
  {
    category: "Tools & Platforms",
    items: ["Jupyter", "VS Code", "AWS", "Google Cloud", "Kubernetes"]
  }
];

const SkillSection: React.FC<SkillSectionProps> = ({ isDarkMode }) => {
  return (
    <div id="skills" className={`py-20 md:py-32 scroll-mt-20 ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
      <div className="container px-4 mx-auto">
        <div className="mb-4 tracking-wider text-red-500 text-center md:text-left">EXPERTISE</div>
        <h2 className={`mb-16 text-4xl md:text-5xl font-bold text-center md:text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Technical Skills
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-zinc-800 hover:bg-zinc-700' 
                  : 'bg-white hover:bg-gray-50 shadow-lg'
              }`}
            >
              <h3 className="mb-4 text-xl font-semibold text-red-500">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 text-sm rounded-full ${
                      isDarkMode 
                        ? 'bg-zinc-900 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;