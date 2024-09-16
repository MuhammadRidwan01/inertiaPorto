"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/utils/ui/canvas-reveal-effect";
import { IconBrandLaravel, IconBrandPhp, IconDatabase, IconBrandMysql } from '@tabler/icons-react';

export function BackEndBox() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-full w-full overflow-hidden rounded-lg"
    >
      {/* Back-End Box */}
      <div className="glass-effect bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-10 transition duration-300 ease-in-out hover:shadow-2xl transform hover:-translate-y-1 relative z-10">
        <h2 className="text-xl font-bold mb-6 flex items-center text-white md:text-3xl">
          <IconBrandLaravel className="mr-3 text-red-600" size={32} /> Back-end
        </h2>
        <ul className="space-y-5 text-white text-lg">
          <li className="flex items-center">
            <IconBrandPhp className="mr-3 text-indigo-500" size={24} /> PHP
          </li>
          <li className="flex items-center">
            <IconDatabase className="mr-3 text-teal-500" size={24} /> MongoDB
          </li>
          <li className="flex items-center">
            <IconBrandMysql className="mr-3 text-yellow-700" size={24} /> MySQL
          </li>
          <li className="flex items-center">
            <IconBrandLaravel className="mr-3 text-red-600" size={24} /> Laravel
          </li>
          <li className="flex items-center">
            <IconBrandPhp className="mr-3 text-indigo-500" size={24} /> CodeIgniter
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90 z-20 pointer-events-none" />
    </div>
  );
}