export interface Skill {
  name: string;
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
      { name: "Adobe Illustrator", icon: "🎨" },
      { name: "Canva Pro", icon: "✨" },
      { name: "Brand Identity", icon: "🏷️" },
      { name: "Material UI", icon: "🎨" },
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
      { name: "HTML", icon: "⌨️" },
      { name: "CSS", icon: "✨" },
      { name: "JavaScript", icon: "💻" },
      { name: "MySQL", icon: "🎨" },
      { name: "Git", icon: "🎨" },
      { name: "GitHub", icon: "🎨" }
    ]
  }
];