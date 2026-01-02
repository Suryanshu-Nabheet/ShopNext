/**
 * Technology Stack Logos
 *
 * Professional logos for the tech stack using high-quality CDN images.
 */

import React from "react";

interface TechLogoProps {
  className?: string;
}

export const ReactLogo: React.FC<TechLogoProps> = ({
  className = "w-16 h-16",
}) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    alt="React"
    className={className}
    loading="lazy"
  />
);

export const TypeScriptLogo: React.FC<TechLogoProps> = ({
  className = "w-16 h-16",
}) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    alt="TypeScript"
    className={className}
    loading="lazy"
  />
);

export const TailwindLogo: React.FC<TechLogoProps> = ({
  className = "w-16 h-16",
}) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    alt="Tailwind CSS"
    className={className}
    loading="lazy"
  />
);

export const FramerMotionLogo: React.FC<TechLogoProps> = ({
  className = "w-16 h-16",
}) => (
  <img
    src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
    alt="Framer Motion"
    className={className}
    loading="lazy"
  />
);

export const ViteLogo: React.FC<TechLogoProps> = ({
  className = "w-16 h-16",
}) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
    alt="Vite"
    className={className}
    loading="lazy"
  />
);

export const JavaScriptLogo: React.FC<TechLogoProps> = ({
  className = "w-16 h-16",
}) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    alt="JavaScript"
    className={className}
    loading="lazy"
  />
);

export const HTMLLogo: React.FC<TechLogoProps> = ({
  className = "w-16 h-16",
}) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    alt="HTML5"
    className={className}
    loading="lazy"
  />
);

export const CSSLogo: React.FC<TechLogoProps> = ({
  className = "w-16 h-16",
}) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    alt="CSS3"
    className={className}
    loading="lazy"
  />
);
