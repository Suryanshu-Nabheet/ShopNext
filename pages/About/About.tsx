import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Header from "components/Header";
import { SafeImage } from "components/ui";
import {
  ReactLogo,
  TypeScriptLogo,
  TailwindLogo,
  FramerMotionLogo,
  ViteLogo,
  JavaScriptLogo,
  HTMLLogo,
  CSSLogo,
} from "components/ui/TechLogos";
import { DEVELOPER_INFO } from "config/constants";

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  const techStack = [
    {
      name: "React",
      Logo: ReactLogo,
      color: "#61DAFB",
      description: "Frontend Library",
    },
    {
      name: "TypeScript",
      Logo: TypeScriptLogo,
      color: "#3178C6",
      description: "Type Safety",
    },
    {
      name: "Tailwind CSS",
      Logo: TailwindLogo,
      color: "#06B6D4",
      description: "Styling Framework",
    },
    {
      name: "Framer Motion",
      Logo: FramerMotionLogo,
      color: "#FF0055",
      description: "Animations",
    },
    {
      name: "Vite",
      Logo: ViteLogo,
      color: "#646CFF",
      description: "Build Tool",
    },
    {
      name: "JavaScript",
      Logo: JavaScriptLogo,
      color: "#F7DF1E",
      description: "Programming Language",
    },
    {
      name: "HTML5",
      Logo: HTMLLogo,
      color: "#E34F26",
      description: "Markup Language",
    },
    {
      name: "CSS3",
      Logo: CSSLogo,
      color: "#1572B6",
      description: "Styling Language",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/60 to-blue-100/40">
      <Header
        onCartClick={() => {}}
        onNavigate={(page) => {
          if (page === "home") {
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                ShopNext
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A modern, full-featured e-commerce platform built with
              cutting-edge web technologies to deliver an exceptional online
              shopping experience.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About This Project
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ShopNext is a comprehensive e-commerce website project that
                  showcases modern web development skills and demonstrates
                  advanced React development capabilities. Built with a focus on
                  user experience, performance, and scalability.
                </p>
                <p>
                  This project features a complete shopping experience including
                  product browsing, detailed product views, shopping cart
                  functionality, checkout process, and order management. The
                  application is built using React with TypeScript for type
                  safety and enhanced developer experience.
                </p>
                <p>
                  The tech stack includes React for component-based
                  architecture, Tailwind CSS for responsive design, Framer
                  Motion for smooth animations, and modern development tools
                  like Vite for fast build times. The project demonstrates
                  professional-level code organization, state management, and
                  UI/UX design principles.
                </p>
                <p>
                  Key features include responsive design, product filtering and
                  search, shopping cart with persistent state, checkout flow
                  with form validation, order confirmation with PDF generation,
                  and smooth page transitions with animations throughout the
                  application.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <SafeImage
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
                  <SafeImage
                    src="/Suryanshu Nabheet.png"
                    alt="Developer"
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-100 shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full transform scale-110 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  {DEVELOPER_INFO.name}
                </h3>
                <p className="text-blue-600 font-medium">
                  {DEVELOPER_INFO.title}
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Meet the Developer
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Hi there! 👋 I'm{" "}
                    <span className="font-semibold text-gray-900">
                      Suryanshu Nabheet
                    </span>
                    , a Full-Stack Developer passionate about building scalable,
                    high-performance, and visually stunning web applications.
                    With hands-on experience across the{" "}
                    <span className="font-medium text-blue-600">MERN</span>,{" "}
                    <span className="font-medium text-blue-600">PERN</span>, and{" "}
                    <span className="font-medium text-blue-600">MEAN</span>{" "}
                    stacks, I bring a complete blend of frontend finesse and
                    backend reliability to every project I take on.
                  </p>
                  <p>
                    I specialize in creating modern, fast, and secure solutions
                    — from interactive UI/UX designs to robust backend systems.
                    Whether it's{" "}
                    <span className="font-medium text-blue-600">React</span>,{" "}
                    <span className="font-medium text-blue-600">Angular</span>,{" "}
                    <span className="font-medium text-blue-600">Node.js</span>,{" "}
                    <span className="font-medium text-blue-600">Express</span>,{" "}
                    <span className="font-medium text-blue-600">
                      PostgreSQL
                    </span>
                    , or{" "}
                    <span className="font-medium text-blue-600">MongoDB</span>,
                    I love turning complex ideas into seamless digital
                    experiences.
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-6">
                  <a
                    href={`mailto:${DEVELOPER_INFO.email}`}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                  >
                    <Mail className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{DEVELOPER_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section - Completely Reconstructed */}
        {/* Tech Stack Section - Premium & Clean */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Technology{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Stack
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-6"></div>
            </motion.div>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Built with cutting-edge technologies for optimal performance and
              scalability
            </motion.p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => {
              return (
                <motion.div
                  key={tech.name}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                  }}
                >
                  <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center group-hover:border-blue-100">
                    {/* Logo */}
                    <div className="w-20 h-20 mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50/50 transition-colors duration-300 flex items-center justify-center">
                      <tech.Logo className="w-full h-full object-contain" />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {tech.description}
                      </p>
                    </div>

                    {/* Subtle Decorator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-t-full group-hover:w-16 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 font-medium">
                Production Ready Architecture
              </span>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
