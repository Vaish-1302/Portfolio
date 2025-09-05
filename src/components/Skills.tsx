import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Graphic Design",
    skills: [
      { name: "Adobe Illustrator", icon: "🎨" },
      { name: "Canva Pro", icon: "✨" },
      { name: "Brand Identity", icon: "🏷️" },
      { name: "Material UI", icon: "🎨" }
    ]
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", icon: "🎯" },
      { name: "Adobe XD", icon: "📱" },
      { name: "Wireframing", icon: "💎" },
      { name: "Prototyping", icon: "🔗" },
      { name: "User Interface", icon: "🖼️" },
      { name: "User Research", icon: "🔍" }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "TypeScript", icon: "📝" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Node.js", icon: "🚀" },
      { name: "MongoDB", icon: "🔍" },
      { name: "Express.js", icon: "🚀" },
      { name: "AI & API's", icon: "⌨️" },
      { name: "JWT Auth", icon: "✨" },
      { name: "JavaScript", icon: "💻" },
      { name: "MySQL", icon: "🎨" },
      { name: "Framer Motion", icon: "🚀" },
      { name: "Git & GitHub", icon: "📝" }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            A diverse skill set spanning design and development, constantly evolving with industry trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-purple-600 after:rounded-full">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        borderColor: '#6366f1'
                      }}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3 border border-gray-200 dark:border-gray-700"
                    >
                      <motion.div 
                        className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full"
                        initial={{ rotate: -10, scale: 0.8 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        whileHover={{ 
                          rotate: [0, -10, 10, -5, 5, 0], 
                          scale: 1.2,
                          transition: { duration: 0.5, ease: "easeInOut" }
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-xl">{skill.icon}</span>
                      </motion.div>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;