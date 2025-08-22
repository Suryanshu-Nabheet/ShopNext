import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Youtube, Heart } from 'lucide-react';

interface FooterProps {
  onNavigateHome?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  const handleLogoClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      // If no navigation function provided, try to navigate to home
      const homeButton = document.querySelector('[data-navigate-home]') as HTMLButtonElement;
      if (homeButton) {
        homeButton.click();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.button
              onClick={handleLogoClick}
              className="group inline-block mb-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">
                ShopNext
              </h3>
            </motion.button>
            <p className="text-gray-300 text-sm">
              Modern e-commerce platform built with React & TypeScript
            </p>
          </div>

          {/* Creator Section */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-blue-400 mb-1">Suryanshu Nabheet</h4>
            <p className="text-gray-300 text-sm mb-2">Full Stack Developer</p>
            
            <div className="flex justify-center space-x-3">
              {[
                { icon: Twitter, href: "https://x.com/SuryanshuXDev", color: "hover:text-blue-400" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/suryanshu-nabheet/", color: "hover:text-blue-500" },
                { icon: Github, href: "https://github.com/Suryanshu-Nabheet", color: "hover:text-gray-300" },
                { icon: Youtube, href: "https://www.youtube.com/@SuryanshuNabheet/", color: "hover:text-red-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800/50 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  whileHover={{ y: -2 }}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Built With</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Framer Motion'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-xs flex items-center justify-center">
            © 2025 ShopNext by Suryanshu Nabheet. Made with 
            <Heart className="h-3 w-3 text-red-400 mx-1" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;