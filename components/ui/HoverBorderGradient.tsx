/**
 * Hover Border Gradient Component
 *
 * A button component with an animated gradient border that appears on hover.
 * Creates a beautiful gradient border effect using CSS and React.
 */

"use client";

import React, { ReactNode } from "react";
import { cn } from "lib/utils";

interface HoverBorderGradientProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
}

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Component = "button",
  ...props
}: HoverBorderGradientProps) => {
  return (
    <div className={cn("group relative", containerClassName)}>
      <div className="absolute -inset-0.5 rounded-full opacity-0 blur transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_200%] animate-gradient" />
      <Component
        className={cn(
          "relative flex items-center justify-center rounded-full bg-white dark:bg-black text-black dark:text-white transition-transform duration-300 hover:scale-105",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
};
