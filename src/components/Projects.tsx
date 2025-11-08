import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export interface Project {
  id: string;
  title: string;
  category: 'graphic' | 'uiux' | 'web' | 'all';
  role: string;
  tools: string[];
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  githubUrl?: string;
  figmaUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
  client?: string;
}

const projectsData: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "web",
    role: "Web Developer",
    tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations and dark mode.",
    longDescription: "Developed a modern, responsive portfolio website using React, TypeScript, and Tailwind CSS. The site features smooth animations powered by Framer Motion, a dark/light mode toggle, and an intuitive user interface. The project showcases my skills in frontend development, responsive design, and creating engaging user experiences. The modular component structure and clean code organization demonstrate best practices in React development.",
    image: "/images/portfolio.jpg",
    images: [
      "/images/portfolio.jpg"
    ],
    githubUrl: "https://github.com/Vaish-1302/Portfolio",
    liveUrl: "https://vaishnavi-portfolio.vercel.app/",
    featured: true,
    year: "2025",
  },
  {
    id: "automindmap",
    title: "AutoMindMap – AI-Powered Visual Mind Map Generator",
    category: "web",
    role: "Full Stack Developer",
    tools: [
      "React", 
      "TypeScript", 
      "Tailwind CSS", 
      "Node.js", 
      "Express.js", 
      "MongoDB", 
      "React Flow", 
      "OpenAI/Gemini APIs"
    ],
    description: "AutoMindMap is a full-stack MERN application that generates AI-powered summaries and converts them into interactive visual mind maps with chat-based refinement and audio support.",
    longDescription: "Developed a full-stack MERN application called AutoMindMap to transform large texts or video transcripts into AI-generated summaries, which are then organized into interactive mind maps. The system features a chat assistant for refining content, audio conversion for auditory learners, and a dashboard for saving and managing maps and sessions. Built with React, TypeScript, Tailwind CSS, and powered by OpenAI/Gemini APIs, the project demonstrates expertise in AI integration, frontend design, backend development, and database management.",
    image: "/images/auto3.jpg",
    images: [
      "/images/auto4.jpg",
      "/images/auto1.jpg",
      "/images/auto2.jpg"
    ],
    githubUrl: "https://github.com/Vaish-1302/AutoMindMap",
    liveUrl: "https://auto-mind-map.vercel.app/",
    featured: true,
    year: "2025",
  },
  {
    id: "villa-rental-system",
    title: "Villa Rental System",
    category: "web",
    role: "Web Developer",
    tools: ["HTML", "CSS", "JavaScript"],
    description: "Complete villa rental platform design with focus on user experience and conversion optimization.",
    longDescription: "Villa Rental System is a responsive web project built with HTML, CSS, and JavaScript. It allows users to browse villas, view details, and check availability with interactive features like image sliders. This project enhanced my frontend and UI/UX design skills.",
    image: "/images/villa_1.jpg",
    images: [
      "/images/villa_1.jpg",
      "/images/villa_2.jpg",
      "/images/villa_3.jpg"
    ],
    featured: true,
    githubUrl: "https://github.com/Vaish-1302/Villa-Rental-System",
    liveUrl: "https://villa-rental-system.vercel.app/",
    year: "2022",
  },
  {
    id: "taskmate-logo",
    title: "TaskMate Logo",
    category: "graphic",
    role: "Graphic Designer",
    tools: ["Canva"],
    description: "Logo design for a smart task management and productivity platform aimed at students and professionals.",
    longDescription: "Created a visually striking and meaningful logo for TaskMate, a productivity and task management platform. The design features an open book symbolizing knowledge and organization, combined with a glowing light bulb representing ideas and innovation. The modern, clean layout and deep blue tones convey clarity, intelligence, and reliability, aligning with the platform's goal to support focused and efficient work habits.",
    image: "/images/TaskMate logo.png",
    images: [
      "/images/TaskMate logo.png"
    ],
    featured: false,
    year: "2024"
  },
  {
    id: "3d-carousel-slider",
    title: "3D Carousel Slider",
    category: "uiux",
    role: "UI/UX Designer",
    tools: ["Figma"],
    description: "Interactive 3D carousel UI designed for a modern and engaging user experience in web and mobile platforms.",
    longDescription: "Designed and prototyped a sleek 3D carousel interface to enhance user interaction and visual engagement. The animation smoothly rotates content cards in a circular layout, offering a dynamic browsing experience. Built in Figma with attention to animation timing and spatial depth, this component is ideal for showcasing featured content, portfolios, or product highlights. The use of perspective and motion makes the UI feel immersive, aligning with current trends in modern web and app design.",
    image: "/images/3d image slider.png",
    images: [
      "/images/3d image slider.png"
    ],
    figmaUrl: "https://www.figma.com/proto/4DJSCqdkIa6cKqKd6iLJuQ/animation?page-id=0%3A1&node-id=7-3&starting-point-node-id=7%3A3&t=CIrdN2gwukUiQans-1",
    featured: true,
    year: "2023",
  },
  {
    id: "nordform",
    title: "NordForm",
    category: "web",
    role: "Web Developer",
    tools: ["HTML", "CSS"],
    description: "Responsive furniture e-commerce website designed to showcase timeless, modern furniture with smooth navigation and elegant visuals.",
    longDescription: "Developed Nordform, a responsive and aesthetically refined furniture e-commerce platform using HTML and CSS. The website features a sleek, modern user interface with intuitive navigation, interactive product cards, and a minimalist cart system. With its warm tones, balanced layout, and clean typography, Nordform emphasizes timeless elegance and durability in design. This project sharpened my frontend development skills and enhanced my understanding of user-centered design and responsive layouts, making it a strong foundation for real-world e-commerce experiences.",
    image: "/images/nordform_1.jpg",
    images: [
      "/images/nordform_1.jpg",
      "/images/nordform_2.jpg",
      "/images/nordform_3.jpg"
    ],
    githubUrl: "https://github.com/Vaish-1302/NordForm",
    featured: false,
    year: "2023",
  },
  {
    id: "parallax-card-effects",
    title: "Parallax card effects",
    category: "uiux",
    role: "UI/UX Designer",
    tools: ["Figma"],
    description: "Interactive parallax card animation designed to enhance user engagement through 3D depth effects triggered by cursor movement.",
    longDescription: "Designed and implemented responsive parallax card animations that dynamically react to cursor movement, creating a realistic 3D depth illusion. This effect brings a tactile, immersive quality to card-based UI layouts, significantly improving user interactivity and visual appeal. The project focused on enhancing frontend polish by combining CSS transformations and event-driven JavaScript for smooth, responsive motion. Ideal for portfolios, e-commerce cards, or creative showcases, the animation demonstrates an attention to microinteractions and detail-driven design.",
    image: "/images/Parallax.png",
    images: [
      "/images/Parallax.png"
    ],
    figmaUrl: "https://www.figma.com/proto/jTqpajjVC0amS1TcMy8eJD/crochet-website?page-id=0%3A1&node-id=3-2&starting-point-node-id=3%3A2&t=gWeGJhs2em7NfOBS-1",
    featured: true,
    year: "2023",
  },
  {
    id: "southern-spice-logo",
    title: "Southern Spice Logo",
    category: "graphic",
    role: "Graphic Designer",
    tools: ["Canva"],
    description: "Logo design for an authentic South Indian restaurant featuring vibrant colors and cultural elements.",
    longDescription: "Created a distinctive logo for Southern Spice, an authentic South Indian restaurant. The design incorporates traditional South Indian motifs and vibrant colors that reflect the rich culinary heritage of the region. The logo features a stylized spice leaf and warm color palette that evokes the aromatic and flavorful nature of South Indian cuisine. This project demonstrates my ability to translate cultural concepts into memorable brand identities that resonate with target audiences.",
    image: "/images/Southern Spice Logo.png",
    images: [
      "/images/Southern Spice Logo.png"
    ],
    featured: false,
    year: "2023",
  },
  {
    id: "aqua-ally",
    title: "Aqua Ally",
    category: "web",
    role: "Full Stack Developer",
    tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description: "A comprehensive water conservation platform that connects users with water-saving products, services, and educational resources.",
    longDescription: "Developed Aqua Ally, a full-stack web application dedicated to water conservation and sustainable water management. The platform features an interactive dashboard for tracking water usage, a marketplace for water-saving products, educational resources, and community forums. Built with React, Node.js, Express, MongoDB, and styled with Tailwind CSS, the application demonstrates my ability to create purpose-driven digital solutions that address environmental challenges. The clean, intuitive interface and responsive design ensure a seamless user experience across devices.",
    image: "/images/Aqually_1.jpg",
    images: [
      "/images/Aqually_1.jpg",
      "/images/Aqually_2.jpg",
      "/images/Aqually_3.jpg"
    ],
    githubUrl: "https://github.com/Vaish-1302/Aqua-Ally",
    featured: true,
    year: "2024",
  },
  {
    id: "feedback-analytics",
    title: "Feedback Analytics Dashboard",
    category: "web",
    role: "Full Stack Developer",
    tools: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Tailwind CSS"],
    description: "A comprehensive feedback management system with advanced analytics and visualization tools for businesses.",
    longDescription: "Developed a sophisticated feedback analytics dashboard that helps businesses collect, analyze, and visualize customer feedback data. The platform features sentiment analysis, trend identification, and actionable insights through interactive charts and reports. Built with React, Node.js, Express, MongoDB, and Chart.js, the application demonstrates my ability to create data-driven solutions that support business decision-making. The clean, intuitive interface and responsive design ensure a seamless user experience for analyzing complex feedback data.",
    image: "/images/feedback_1.jpg",
    images: [
      "/images/feedback_1.jpg",
      "/images/feedback_2.jpg",
      "/images/feedback_3.jpg"
    ],
    githubUrl: "https://github.com/Vaish-1302/Feedback-Analytics",
    featured: true,
    year: "2025",
  },
  {
    id: "mobile-interaction-UI ",
    title: "Mobile interaction UI",
    category: "uiux",
    role: "UI/UX Designer",
    tools: ["Figma"],
    description: "Mobile interaction UI designed to deliver a seamless and intuitive user experience through smooth transitions and responsive layouts.",
    longDescription: "Designed an engaging mobile interaction UI prototype focused on delivering intuitive navigation and fluid user experience. Built using Figma, the interface leverages clean layout structure, thoughtful spacing, and subtle motion effects to guide users through key actions smoothly. Interactive elements such as animated buttons, sliding panels, and responsive touch gestures simulate real-world usability, enhancing accessibility and flow. This project showcases my ability to combine design thinking with mobile-first principles, creating an experience that feels natural, efficient, and visually appealing on small screens.",
    image: "/images/Mobile_1.jpg",
    images: [
      "/images/Mobile_1.jpg"
    ],
    figmaUrl: "https://www.figma.com/proto/cjrRvmC2G5Ju0h5XXzYpGW/Untitled?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&t=W3Be6T6vhUeA40cD-1",
    featured: true,
    year: "2022",
  }
];

const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'graphic', label: 'Graphic Design', count: getProjectsByCategory('graphic').length },
    { id: 'uiux', label: 'UI/UX Design', count: getProjectsByCategory('uiux').length },
    { id: 'web', label: 'Web Development', count: getProjectsByCategory('web').length },
  ];

  const filteredProjects = getProjectsByCategory(selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              A showcase of my latest work across graphic design, UI/UX design, and web development.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-4 mb-12"
          >
            <div className="flex items-center text-gray-600 dark:text-gray-400 mr-4">
              <Filter size={20} className="mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => openModal(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects;