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
  featured: boolean;
  year: string;
  client?: string;
}

export const projectsData: Project[] = [
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
    description: "Logo design for a culturally inspired food and beverage brand celebrating the rich flavors of Southern India.",
    longDescription: "Crafted a vibrant and flavorful logo for Southern Spice, a culinary brand rooted in the rich heritage of Southern Indian cuisine. The design features key regional elements such as coffee, spices, and tropical leaves, arranged in a warm, inviting composition. The bold, stylized typography in earthy orange and green hues complements the organic theme while enhancing brand recognition. This logo captures the essence of traditional tastes with a modern twist, aiming to evoke warmth, authenticity, and sensory delight—perfectly aligning with the brand’s mission to bring soul-satisfying Southern flavors to a wider audience.",
    image: "/images/Southern Spice Logo.png",
    images: [
      "/images/Southern Spice Logo.png"
    ],
    featured: false,
    year: "2023"
  },
  {
    id: "interactive-image-carousel",
    title: "Interactive image carousel",
    category: "uiux",
    role: "UI/UX Designer",
    tools: ["Figma"],
    description: "Interactive image carousel designed in Figma using smart animate and components to deliver smooth transitions and improve visual storytelling.",
    longDescription: "Created a fluid, interactive image carousel leveraging Figma’s smart animate and component features to bring seamless UI transitions and an engaging user experience. The carousel smoothly shifts between images with animated effects that mimic natural motion, drawing users into the visual content. Designed with scalability and usability in mind, the component-based structure allows for easy customization and reuse. This project highlights a strong understanding of motion design principles, enhancing the visual storytelling and interactivity essential for portfolios, landing pages, and product showcases.",
    image: "/images/slider.png",
    images: [
      "/images/slider.png"
    ],
    figmaUrl: "https://www.figma.com/proto/XsKMDBBB4pCbwGC8nnBsf7/Untitled?page-id=0%3A1&node-id=2205-43&starting-point-node-id=2205%3A43&t=1gDhJN50GA3z0Hvc-1",
    featured: true,
    year: "2023",
  },
  {
    id: "aqually-logo",
    title: "Aqually Logo",
    category: "graphic",
    role: "Graphic Designer",
    tools: ["Canva"],
    description: "Logo design for a wellness-focused alkaline water brand promoting hydration and better health.",
    longDescription: "Designed a clean and refreshing logo for Aqua Ally, a wellness brand focused on the health benefits of alkaline water. The logo features a stylized water splash in soft blue tones, symbolizing purity, hydration, and vitality. The bold typography conveys trust and clarity, while the tagline 'Alkaline Water for Better Health' reinforces the brand's commitment to wellness and natural living. The minimalist yet impactful layout captures the essence of balance and rejuvenation, aligning with Aqua Ally's mission to promote healthier lifestyles through premium hydration solutions.",
    image: "/images/Aqua Ally logo.png",
    images: [
      "/images/Aqua Ally logo.png"
    ],
    featured: true,
    year: "2023"
  },
  {
    id: "aqually",
    title: "Aqually",
    category: "web",
    role: "Web Developer",
    tools: ["HTML", "CSS","PHP", "Bootstrap5", "MySQL"],
    description: "Wellness-focused e-commerce website promoting the benefits of alkaline water, built with PHP, HTML, CSS, Bootstrap 5, and MySQL.",
    longDescription: "Developed Aqually, a health-oriented e-commerce platform that educates users on the wellness benefits of alkaline water while offering a seamless shopping experience. Built using PHP, HTML, CSS, Bootstrap 5, and MySQL, the site includes essential features such as user authentication, a dynamic product catalog, a functional shopping cart, and an order management system. The clean, wellness-inspired UI reflects the brand's focus on hydration and health. This project strengthened my backend integration and full-stack development skills, combining user-centric design with efficient database operations to support a complete online retail experience.",
    image: "/images/Aqually_1.jpg",
    images: [
      "/images/Aqually_1.jpg",
      "/images/Aqually_2.jpg",
      "/images/Aqually_3.jpg"
    ],
    featured: true,
    year: "2023",
  },
  {
    id: "playlist-scroller-UI",
    title: "Playlist scroller UI",
    category: "uiux",
    role: "UI/UX Designer",
    tools: ["Figma"],
    description: "Playlist scroller UI designed with both horizontal and vertical navigation for a flexible and intuitive media browsing experience.",
    longDescription: "Designed an interactive playlist scroller interface in Figma that supports both horizontal and vertical scrolling to enhance user navigation and content discovery. The layout features clean card-based designs for individual tracks or albums, with smooth scrolling transitions and responsive behavior across screen sizes. Horizontal scroll allows quick lateral exploration of categories or themes, while vertical scrolling provides a natural, feed-like structure for deeper browsing. This dual-scroll system demonstrates a thoughtful approach to user flow, accessibility, and usability—perfect for music apps, media galleries, or content libraries.",
    image: "/images/playlist.png",
    images: [
      "/images/playlist.png"
    ],
    figmaUrl: "https://www.figma.com/proto/hycm3cOdmWY9GQhdVwLjUj/Untitled?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&t=FJy12aWwLjbxh2EH-1",
    featured: true,
    year: "2023",
  },
  {
    id: "scroll-based-animation",
    title: "Scroll Based Animation",
    category: "uiux",
    role: "UI/UX Designer",
    tools: ["Figma"],
    description: "Scroll-based animation created in Figma to add visual depth and dynamic storytelling through layered motion design.",
    longDescription: "Designed a captivating scroll-based animation using Figma’s prototyping tools and layered UI elements to simulate depth and motion. As users scroll, various components animate at different speeds and directions, creating a parallax-like effect that enhances the storytelling experience. This interactive approach draws attention to key content and adds a sense of progression and engagement. The project showcases my ability to craft immersive UI experiences through thoughtful motion design, effectively blending creativity with usability to elevate the overall interface aesthetics.",
    image: "/images/burger.png",
    images: [
      "/images/burger.png"
    ],
    figmaUrl: "https://www.figma.com/proto/44GD5YCWKrjs4NLmLLePaT/burger-website?page-id=0%3A1&node-id=1-3&starting-point-node-id=1%3A3&t=IdqNdznZw3ud6QHv-1",
    featured: true,
    year: "2024",
  },
  {
    id: "feedback-analytics",
    title: "Feedback Analytics",
    category: "web",
    role: "Web Developer",
    tools: ["MongoDB", "Express.js","React.js", "Node.js"],
    description: "Online faculty feedback system built with the MERN stack to streamline student evaluations and generate actionable performance insights.",
    longDescription: "Developed a robust faculty feedback analytics platform using the MERN stack (MongoDB, Express.js, React, and Node.js) to digitize and modernize the traditional paper-based evaluation process. The system enables students to submit structured feedback on teaching quality through a clean, responsive interface, while administrators gain access to real-time analytics and performance trends. Designed for scalability and ease of use, the platform enhances transparency and supports data-driven decision-making in academic environments. This project highlights my full-stack development capabilities and my focus on creating meaningful user experiences backed by insightful data visualization.",
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

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};