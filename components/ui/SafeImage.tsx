/**
 * SafeImage Component
 *
 * A robust image component with automatic fallback handling.
 * Displays a placeholder if the image fails to load.
 */

import React, { useState } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const defaultFallback = `data:image/svg+xml;base64,${btoa(`
  <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#e5e7eb"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#9ca3af" text-anchor="middle" dy=".3em">Image not available</text>
  </svg>
`)}`;

const SafeImage: React.FC<SafeImageProps> = React.memo(
  ({ src, alt, className = "", fallbackSrc, onError, ...rest }) => {
    const [imgSrc, setImgSrc] = useState(src);

    React.useEffect(() => {
      setImgSrc(src);
    }, [src]);

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (imgSrc !== defaultFallback && imgSrc !== fallbackSrc) {
        setImgSrc(fallbackSrc || defaultFallback);
      }

      // Call user-provided onError if exists
      if (onError) {
        onError(e);
      }
    };

    return (
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
        loading="lazy"
        {...rest}
      />
    );
  }
);

export default SafeImage;
