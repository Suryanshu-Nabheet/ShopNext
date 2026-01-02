/**
 * Global Reach Section Component
 *
 * Displays a world map with animated connection lines showing global shipping
 * and service locations. Used to showcase worldwide reach and connectivity.
 */

"use client";

import WorldMap from "components/ui/WorldMap";
import { motion } from "framer-motion";

interface GlobalReachProps {
  title?: string;
  titleHighlight?: string;
  description?: string;
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function GlobalReach({
  title = "Global",
  titleHighlight = "Reach",
  description = "ShopNext delivers to customers worldwide. Experience seamless shopping from anywhere, with fast shipping and exceptional service across the globe.",
  dots = [
    {
      start: {
        lat: 64.2008,
        lng: -149.4937,
      }, // Alaska (Fairbanks)
      end: {
        lat: 34.0522,
        lng: -118.2437,
      }, // Los Angeles
    },
    {
      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
      end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    },
    {
      start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London
      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    },
  ],
  lineColor = "#3b82f6", // Blue color matching the theme
}: GlobalReachProps) {
  return (
    <div className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="font-bold text-xl md:text-4xl text-gray-900 mb-4">
          {title}{" "}
          <span className="text-gray-600">
            {titleHighlight.split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto py-4">
          {description}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <WorldMap dots={dots} lineColor={lineColor} theme="light" />
      </div>
    </div>
  );
}
