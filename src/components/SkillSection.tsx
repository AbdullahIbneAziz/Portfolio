import React from 'react';

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

const SkillSection: React.FC = () => {
  return (
    <div id="skills" className="py-20 md:py-32 bg-zinc-900 scroll-mt-20">
      <div className="container px-4 mx-auto">
        <div className="mb-4 tracking-wider text-red-500 text-center md:text-left">EXPERTISE</div>
        <h2 className="mb-16 text-4xl md:text-5xl font-bold text-center md:text-left">Technical Skills</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="p-6 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-300"
            >
              <h3 className="mb-4 text-xl font-semibold text-red-500">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 text-sm bg-zinc-900 rounded-full"
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