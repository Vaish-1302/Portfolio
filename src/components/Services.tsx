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
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Comprehensive design and development services to bring your vision to life.
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