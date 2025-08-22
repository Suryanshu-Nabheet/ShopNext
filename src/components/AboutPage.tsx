import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Target, Heart, Award, Users, Globe, Mail, Phone, MapPin } from 'lucide-react';
import Header from './Header';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring exceptional service and satisfaction.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We curate only the finest products, maintaining the highest standards of quality and craftsmanship.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers worldwide with fast, reliable shipping and localized support.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a community of satisfied customers who trust us for their shopping needs.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '10,000+', label: 'Products Sold' },
    { number: '99.5%', label: 'Customer Satisfaction' },
    { number: '5 Years', label: 'In Business' }
  ];

  const techStack = [
    {
      name: 'React',
      logo: 'https://img.icons8.com/plasticine/100/react.png',
      color: '#61DAFB',
      description: 'Frontend Library'
    },
    {
      name: 'TypeScript',
      logo: 'https://img.icons8.com/color/96/typescript.png',
      color: '#3178C6',
      description: 'Type Safety'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://img.icons8.com/color/96/tailwind_css.png',
      color: '#06B6D4',
      description: 'Styling Framework'
    },
    {
      name: 'Framer Motion',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgMEgxNkwyMCA0VjE2TDE2IDIwSDRWMTJIMTJWOEg0VjBaIiBmaWxsPSIjRkYwMDU1Ii8+Cjwvc3ZnPgo=',
      color: '#FF0055',
      description: 'Animations'
    },
    {
      name: 'Vite',
      logo: 'https://img.icons8.com/fluency/96/vite.png',
      color: '#646CFF',
      description: 'Build Tool'
    },
    {
      name: 'JavaScript',
      logo: 'https://img.icons8.com/color/96/javascript--v1.png',
      color: '#F7DF1E',
      description: 'Programming Language'
    },
    {
      name: 'HTML5',
      logo: 'https://img.icons8.com/color/96/html-5--v1.png',
      color: '#E34F26',
      description: 'Markup Language'
    },
    {
      name: 'CSS3',
      logo: 'https://img.icons8.com/color/96/css3.png',
      color: '#1572B6',
      description: 'Styling Language'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/60 to-blue-100/40">
      <Header 
        onCartClick={() => {}} 
        onNavigate={(page) => {
          if (page === 'home') {
            onBack();
          }
        }}
        onScrollToSection={() => {}}
        currentPage="about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">ShopNext</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A modern, full-featured e-commerce platform built with cutting-edge web technologies to deliver 
              an exceptional online shopping experience.
            </p>
          </div>
        </motion.div>

        {/* Project Story */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Project</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ShopNext is a comprehensive e-commerce website project that showcases modern web development 
                  skills and demonstrates advanced React development capabilities. Built with a focus on user 
                  experience, performance, and scalability.
                </p>
                <p>
                  This project features a complete shopping experience including product browsing, detailed 
                  product views, shopping cart functionality, checkout process, and order management. The 
                  application is built using React with TypeScript for type safety and enhanced developer experience.
                </p>
                <p>
                  The tech stack includes React for component-based architecture, Tailwind CSS for responsive 
                  design, Framer Motion for smooth animations, and modern development tools like Vite for fast 
                  build times. The project demonstrates professional-level code organization, state management, 
                  and UI/UX design principles.
                </p>
                <p>
                  Key features include responsive design, product filtering and search, shopping cart with 
                  persistent state, checkout flow with form validation, order confirmation with PDF generation, 
                  and smooth page transitions with animations throughout the application.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Development process"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </div>
        </motion.section>

        {/* Developer Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Developer"
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full transform scale-110 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Suryanshu Nabheet</h3>
                <p className="text-blue-600 font-medium">Full Stack Developer</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet the Developer</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "I'm Suryanshu Nabheet, a passionate full-stack developer with 4+ years of experience working 
                  at companies like NullClass and FirstBench.ai. I built ShopNext as a comprehensive showcase 
                  of modern web development practices and e-commerce functionality."
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "This project represents my expertise in React ecosystem, TypeScript development, responsive 
                  design, and creating intuitive user experiences. I focused on implementing industry best 
                  practices including component architecture, state management, performance optimization, and 
                  accessibility standards."
                </p>
                <p className="text-gray-600 leading-relaxed">
                  "The development process involved careful planning of the user journey, implementing modern 
                  design patterns, and ensuring the application is scalable and maintainable. Every feature 
                  was built with attention to detail and user experience in mind."
                </p>
                <div className="flex items-center space-x-4 mt-6">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">suryanshu@shopnext.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with modern technologies and tools to ensure performance, scalability, and maintainability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center cursor-pointer transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 20px 40px ${tech.color}20`
                }}
                style={{
                  '--hover-color': tech.color
                } as React.CSSProperties}
              >
                <div className="mb-4 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-16 h-16 mx-auto transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    style={{
                      filter: 'grayscale(100%)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'grayscale(100%)';
                    }}
                    onError={(e) => {
                      // Generic fallback for any failed logo
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent && !parent.querySelector('.fallback-icon')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-icon w-16 h-16 mx-auto bg-gray-200 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-600';
                        fallback.textContent = tech.name.charAt(0);
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <h3 
                  className="font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-current"
                  style={{
                    color: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = tech.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                  }}
                >
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default AboutPage;