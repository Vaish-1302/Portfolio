import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const servicesData: Service[] = [
  {
    id: "fullstack-development",
    title: "Backend & Full Stack Development",
    description:
      "Building backend logic and full-stack web applications with a focus on functionality, performance, and scalability.",
    icon: "🧩",
    features: [
      "Python (Learning)",
      "Node.js & Express",
      "REST APIs",
      "JWT Authentication",
      "MongoDB / MySQL"
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Developing responsive, real-world web applications using modern frontend and backend technologies.",
    icon: "💻",
    features: [
      "JavaScript",
      "React.js",
      "Responsive Design",
      "API Integration",
      "Git & GitHub"
    ],
  },
  {
    id: "uiux-web",
    title: "UI/UX for Web Applications",
    description:
      "Designing clean and user-friendly interfaces for web applications with a strong focus on usability.",
    icon: "📱",
    features: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Responsive UI Design",
      "Accessibility Basics"
    ],
  },
  {
    id: "projects-learning",
    title: "Projects & Hands-On Learning",
    description:
      "Applying concepts through real-world projects, hackathons, and continuous self-learning.",
    icon: "🚀",
    features: [
      "Role-Based Web Projects",
      "Hackathon Participation",
      "Problem Solving",
      "Code Refactoring",
      "Continuous Skill Development"
    ],
  },
];


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What I Work On
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Areas where I build, learn, and apply my skills through hands-on projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;