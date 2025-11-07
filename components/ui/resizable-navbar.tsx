/**
 * Resizable Navbar Component
 * 
 * Modern resizable navbar that adapts on scroll.
 * Built with Framer Motion for smooth animations.
 */

import { cn } from 'lib/utils';
import { IconMenu2, IconX } from '@tabler/icons-react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

import React, { useRef, useState } from 'react';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // Navbar starts slightly lower and moves up on scroll
      animate={{
        y: visible ? 0 : 12,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      className={cn('fixed inset-x-0 top-2 z-50 w-full', className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(20px) saturate(180%)' : 'blur(8px) saturate(120%)',
        backgroundColor: visible 
          ? 'rgba(255, 255, 255, 0.75)' 
          : 'rgba(255, 255, 255, 0.15)',
        boxShadow: visible
          ? '0 8px 32px 0 rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          : '0 2px 12px 0 rgba(59, 130, 246, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
        width: visible ? '40%' : '100%',
        scale: visible ? 0.95 : 1,
      }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-6 py-3 lg:flex min-w-[800px]',
        'border',
        visible ? 'border-white/30' : 'border-white/10',
        'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-50/50 before:via-white/30 before:to-blue-50/50 before:-z-10',
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, visible }: NavItemsProps & { visible?: boolean }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2',
        visible ? 'text-gray-700' : 'text-gray-500',
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-4 py-2 transition-colors duration-200",
            visible ? "text-gray-700 hover:text-blue-600" : "text-gray-500/80 hover:text-gray-600"
          )}
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className={cn(
                "absolute inset-0 h-full w-full rounded-full backdrop-blur-sm shadow-sm",
                visible 
                  ? "bg-white/60 border border-white/40" 
                  : "bg-white/30 border border-white/20"
              )}
            />
          )}
          <span className="relative z-20 font-medium">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(20px) saturate(180%)' : 'blur(8px) saturate(120%)',
        backgroundColor: visible 
          ? 'rgba(255, 255, 255, 0.75)' 
          : 'rgba(255, 255, 255, 0.15)',
        boxShadow: visible
          ? '0 8px 32px 0 rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          : '0 2px 12px 0 rgba(59, 130, 246, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
        width: visible ? '90%' : '100%',
        paddingRight: visible ? '12px' : '0px',
        paddingLeft: visible ? '12px' : '0px',
        borderRadius: visible ? '1rem' : '2rem',
        scale: visible ? 0.95 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-3 lg:hidden',
        'border',
        visible ? 'border-white/30' : 'border-white/10',
        'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-50/50 before:via-white/30 before:to-blue-50/50 before:-z-10',
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-between',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl px-4 py-6',
            'bg-white/80 backdrop-blur-xl border border-white/30',
            'shadow-[0_8px_32px_0_rgba(59,_130,_246,_0.15),_0_0_0_1px_rgba(255,_255,_255,_0.3)_inset]',
            'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-blue-50/40 before:via-white/20 before:to-blue-50/40 before:-z-10',
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-white/40 transition-all duration-200 text-gray-700 hover:text-blue-600"
    >
      <IconX className="h-5 w-5" />
    </button>
  ) : (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-white/40 transition-all duration-200 text-gray-700 hover:text-blue-600"
    >
      <IconMenu2 className="h-5 w-5" />
    </button>
  );
};

export const NavbarLogo = ({ onClick, visible }: { onClick?: () => void; visible?: boolean }) => {
  return (
    <button
      onClick={onClick}
      className="relative z-20 mr-4 flex items-center space-x-2 px-3 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-200 group"
    >
      <span className={cn(
        "text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-200",
        visible 
          ? "from-blue-600 via-blue-700 to-blue-800 group-hover:from-blue-700 group-hover:to-blue-900"
          : "from-blue-500/70 via-blue-600/70 to-blue-700/70 group-hover:from-blue-600 group-hover:to-blue-800"
      )}>
        ShopNext
      </span>
    </button>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient';
} & (
  | React.ComponentPropsWithoutRef<'a'>
  | React.ComponentPropsWithoutRef<'button'>
)) => {
  const baseStyles =
    'px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center';

  const variantStyles = {
    primary:
      'shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    secondary: 'bg-transparent shadow-none dark:text-white',
    dark: 'bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    gradient:
      'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]',
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

