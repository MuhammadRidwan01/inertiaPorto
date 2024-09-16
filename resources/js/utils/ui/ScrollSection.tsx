import React, { useEffect, useRef } from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  onIntersect?: () => void;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children, onIntersect }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onIntersect) {
          onIntersect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [onIntersect]);

  return <div ref={sectionRef} className="min-h-screen w-full">{children}</div>;
};

export default ScrollSection;
