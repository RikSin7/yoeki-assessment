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
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Scroll progress
  const sectionScale = useTransform(smoothProgress, [0, 0.6, 1], [1, 1, 0.85]);
  const sectionOpacity = useTransform(smoothProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#050505]">

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-white/[0.05]">

        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <motion.div
          style={{ scale: sectionScale, opacity: sectionOpacity }}
          className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative z-10"
        >

          {/* Animated N  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.15, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative flex items-center justify-center h-[240px] md:h-[320px] w-[240px] md:w-[320px] mx-auto z-10"
          >
            {/* Ambient Orange Glow behind the N */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#EF7D25]/20 blur-[80px] -z-10 animate-pulse" />

            {/* Continuous gentle floating animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <DotMatrixN />
            </motion.div>
          </motion.div>

          {/* Marquee Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mt-8 md:mt-12"
          >
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 lg:mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Brands that believe in us
            </h2>

            <div className="relative overflow-hidden w-full py-4">
              <div className="absolute left-0 top-0 w-32 md:w-48 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 w-32 md:w-48 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="flex w-max gap-12 md:gap-24 items-center"
              >
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="relative shrink-0 h-[50px] md:h-[60px] flex items-center justify-center overflow-hidden w-[140px] md:w-[180px] group"
                  >
                    <Image
                      src={logo}
                      alt="Partner Brand Logo"
                      width={200}
                      height={100}
                      className="object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}