import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About: React.FC = () => {

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                As a passionate MCA student with hands-on experience in UI/UX design and full-stack
                development, I specialize in creating digital solutions that bridge user needs with
                business objectives. My journey spans from design internships at Sparks to Ideas to building comprehensive web applications using the MERN stack.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in crafting intuitive, responsive designs backed by robust functionality.
                Whether developing e-commerce platforms like NordForm, building task management systems
                like TaskMate, or creating feedback analytics solutions, my approach combines modern
                UI/UX principles with efficient backend architecture using technologies like React.js,
                Node.js, and MongoDB.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond academics, I actively lead as MCA Class Representative, participate in hackathons
                like CODEHER, and continuously enhance my skills through bootcamps in Java and MongoDB.
                I'm driven by the challenge of transforming ideas into scalable, user-friendly digital
                experiences.
              </p>
            </div>

            <motion.a
              href="/Vaishnavi_Halemani_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 p-8 flex items-center justify-center">
                <img
                  src="/images/paasport photo.jpg"
                  alt="Passport Photo"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;