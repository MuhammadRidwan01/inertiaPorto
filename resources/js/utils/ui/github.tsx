import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Github, ExternalLink, Code2, Star, GitFork } from 'lucide-react';
import { LinkPreview } from './link-preview';

const ModernGithubSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({ stars: 0, forks: 0, repos: 0 });
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    controls.start({
      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px,
        rgba(120,70,190,0.4) 0%,
        rgba(90,60,120,0.2) 20%,
        rgba(34,32,70,0.1) 50%,
        transparent 70%)`,
    });
  }, [mousePosition, controls]);

  return (
    <motion.section
      className="w-full py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-7xl mx-auto relative"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="w-full bg-gradient-to-br from-[rgb(28,27,51)] to-[rgb(7,6,22)] rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 0 40px rgba(90,60,120,0.2)' }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-48 md:h-64">
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={controls}
              transition={{ type: 'tween', duration: 0.2 }}
            />
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          <motion.div
            className="relative px-8 pb-8 -mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <motion.div
                className="w-32 h-32 rounded-full overflow-hidden border-4 border-[rgb(28,27,51)] shadow-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src="/image/MUHAMMAD RIDWAN (2).webp"
                  alt="GitHub Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="text-center md:text-left">
                <motion.h1
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Muhammad Ridwan
                </motion.h1>
                <motion.p
                  className="text-[rgb(160,90,160)] mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  DevOps | Building scalable systems
                </motion.p>
                <motion.div
                  className="flex flex-wrap justify-center md:justify-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-[rgb(120,70,190)]">
                    <Code2 size={20} />
                    <span>13 Repositories</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(120,70,190)]">
                    <Star size={20} />
                    <span>0 Stars</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(120,70,190)]">
                    <GitFork size={20} />
                    <span>0 Forks</span>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkPreview
                url="https://github.com/MuhammadRidwan01"
                className="group relative flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-[rgb(34,32,70)] to-[rgb(90,60,120)] rounded-xl overflow-hidden transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-center gap-3 text-white">
                  <motion.div
                    animate={{ rotate: isHovered ? 12 : 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Github size={24} />
                  </motion.div>
                  <span className="text-lg font-semibold">View GitHub Profile</span>
                  <ExternalLink size={20} className="ml-2 opacity-70" />
                </div>
              </LinkPreview>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-[rgba(7,6,22,0.5)] to-transparent pointer-events-none"
          style={{ mixBlendMode: 'soft-light' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default ModernGithubSection;
