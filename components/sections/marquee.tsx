"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import { DotMatrixN } from "../ui/dotMatrixN";

const logos = [
  "/images/li-fung.svg",
  "/images/toyota.svg",
  "/images/siemens.svg",
  "/images/forbes.svg",
  "/images/convey.svg",
  "/images/shark-ninja.svg",
];

export default function Marquee() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const nScale = useTransform(smoothProgress, [0, 0.15, 1, 1], [0.1, 1, 1, 0.8]);
  const nOpacity = useTransform(smoothProgress, [0, 0.05, 0.8, 1], [0, 1, 1, 0]);

  const marqueeOpacity = useTransform(smoothProgress, [0, 0.1, 0.2, 0.8, 1], [0, 0, 1, 1, 0]);
  const marqueeY = useTransform(smoothProgress, [0, 0.1, 0.2], [40, 40, 0]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-white/[0.05]">

        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col items-center justify-center">

          {/* Animated N */}
          <motion.div
            style={{ scale: nScale, opacity: nOpacity }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center h-[280px] md:h-[360px] w-[280px] md:w-[360px] mx-auto z-10"
          >
            <div className="absolute w-[200px] h-[200px] rounded-full bg-primary/15 blur-3xl -z-10" />

            {/* The Canvas  */}
            <DotMatrixN />
          </motion.div>

          {/* Marquee Container */}
          <motion.div
            style={{ opacity: marqueeOpacity, y: marqueeY }}
            className="w-full mt-4"
          >
            <h2 className="text-center text-white text-app-4xl font-bold tracking-tight leading-none mb-16">
              Brands that believe in us
            </h2>

            <div className="relative overflow-hidden w-full">
              {/* Gradient Fades  */}
              <div className="absolute left-0 top-0 w-24 md:w-32 h-full bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 w-24 md:w-32 h-full bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

              {/* Infinite Logo Track */}
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex w-max gap-10 md:gap-20"
              >
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="relative shrink-0 h-[60px] flex items-center justify-center overflow-hidden md:w-auto max-w-[180px]"
                  >
                    <Image
                      src={logo}
                      alt="Logo"
                      width={250}
                      height={250}
                      className="object-contain filter opacity-60 hover:opacity-100 hover:brightness-100 transition-all duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}