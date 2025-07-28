export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const servicesData: Service[] = [
  {
    id: "logo-design",
    title: "Logo & Brand Identity",
    description: "Create memorable brand identities that capture your essence and resonate with your audience.",
    icon: "🎨",
    features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography", "Business Cards"],
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    description: "Design intuitive and beautiful user experiences that convert visitors into customers.",
    icon: "📱",
    features: ["Wireframing", "User Research", "Prototyping", "Mobile Design", "Desktop Design"],
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build fast, responsive websites with modern technologies and best practices.",
    icon: "💻",
    features: ["React Development", "Responsive Design", "Performance Optimization","Web Development", "Interactive Designs"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Create stunning visual materials for print and digital media that make an impact.",
    icon: "🖼️",
    features: ["Poster Design", "Social Media Graphics", "Print Materials", "Illustrations", "Marketing Collateral"],
  }
];