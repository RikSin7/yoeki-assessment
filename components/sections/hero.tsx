"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll animations
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(50px)"]
  );
 
  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-6rem)] bg-black overflow-hidden"
    >
      <motion.div
        style={{
          opacity,
          scale,
          filter: blur,
        }}
        className="sticky top-24 flex flex-col items-center justify-center h-[calc(100vh-6rem)]"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-20 text-center font-bold tracking-[-0.04em] leading-none text-white text-4xl md:text-5xl font-sans"
        >
          An{" "}
          <span
            className="text-[#FB851E]"
          >
            AI
          </span>{" "}
          Services Company
        </motion.h1>

        {/* Video Wrapper */}
        <div
          className="relative w-full max-w-3xl flex items-center justify-center"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain scale-[1.15] pointer-events-none select-none"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </section>
  );
}