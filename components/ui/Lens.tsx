"use client";
import React, { useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface LensProps {
  children: ReactNode;
  hovering?: boolean;
  setHovering?: (hovering: boolean) => void;
  zoomFactor?: number;
  lensSize?: number;
}

export const Lens = ({
  children,
  hovering: externalHovering,
  setHovering: setExternalHovering,
  zoomFactor = 2,
  lensSize = 200,
}: LensProps) => {
  const [internalHovering, setInternalHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const hovering = externalHovering ?? internalHovering;
  const setHovering = setExternalHovering ?? setInternalHovering;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative z-20 group overflow-hidden rounded-2xl cursor-none"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {hovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          style={{
            position: "absolute",
            left: position.x - lensSize / 2,
            top: position.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            borderRadius: "50%",
            boxShadow:
              "0 0 20px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.5), 0 0 0 2px rgba(255, 255, 255, 0.2)",
            background: "white",
            overflow: "hidden",
            zIndex: 50,
            pointerEvents: "none",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `translate(${
                lensSize / 2 - position.x * zoomFactor
              }px, ${
                lensSize / 2 - position.y * zoomFactor
              }px) scale(${zoomFactor})`,
              transformOrigin: "0 0",
              width: containerRef.current?.offsetWidth,
              height: containerRef.current?.offsetHeight,
            }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
};
