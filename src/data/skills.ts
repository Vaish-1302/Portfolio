export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Graphic Design",
    skills: [
      { name: "Adobe Illustrator", level: 95, icon: "🎨" },
      { name: "Canva Pro", level: 99, icon: "✨" },
      { name: "Brand Identity", level: 88, icon: "🏷️" },
      { name: "Material UI", level: 95, icon: "🎨" },
    ]
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", level: 100, icon: "🎯" },
      { name: "Adobe XD", level: 85, icon: "📱" },
      { name: "Wireframing", level: 90, icon: "💎" },
      { name: "Prototyping", level: 93, icon: "🔗" },
      { name: "User Interface", level: 99, icon: "🖼️" },
      { name: "User Research", level: 82, icon: "🔍" }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: 85, icon: "⚛️" },
      { name: "TypeScript", level: 80, icon: "📝" },
      { name: "Tailwind CSS", level: 88, icon: "🎨" },
      { name: "Node.js", level: 85, icon: "🚀" },
      { name: "MongoDB", level: 95, icon: "🔍" },
      { name: "Express.js", level: 85, icon: "🚀" },
      { name: "HTML", level: 95, icon: "⌨️" },
      { name: "CSS", level: 95, icon: "✨" },
      { name: "JavaScript", level: 95, icon: "💻" },
      { name: "MySQL", level: 95, icon: "🎨" },
      { name: "Git", level: 98, icon: "🎨" },
      { name: "GitHub", level: 96, icon: "🎨" }
    ]
  }
];