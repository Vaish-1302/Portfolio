import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid 10-digit Indian phone number starting with 6-9.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');

      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      alert('Thank you, we will be in touch soon!');
    } catch (error) {
      alert('There was an error sending your message.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'vaishnavihalemani23@gmail.com', href: 'vaishnavihalemani23@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7434879253', href: 'tel:+917434879253' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, KA' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Vaish-1302', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vaishnavi-halemani-21078b1b6/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        {/* Centered Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-center">
              I'm always excited to work on new projects and collaborate with amazing people.
              Whether you need design consultation, development work, or just want to say hello,
              I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <info.icon className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                  <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="pt-8 text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Follow Me
            </h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;