'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  distance?: number;
}

export default function ScrollReveal({ 
  children, 
  staggerDelay = 0, 
  className = '',
  distance = 30
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0'
      } ${className}`}
      style={{ 
        transitionDelay: `${staggerDelay}ms`,
        transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`
      }}
    >
      {children}
    </div>
  );
}
