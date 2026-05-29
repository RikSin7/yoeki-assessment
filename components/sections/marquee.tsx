"use client";

import { motion } from "motion/react";
import AnimatedN from "../ui/animatedN";
import Image from "next/image";

const logos = [
  "./images/li-fung.svg",
  "./images/toyota.svg",
  "./images/siemens.svg",
  "./images/forbes.svg",
  "./images/convey.svg",
  "./images/shark-ninja.svg",
];

export default function Marquee() {
  return (
    <section className="relative bg-black overflow-hidden py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Animated N */}
        <div className="flex justify-center">
          <AnimatedN />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mt-10 text-center text-white text-4xl font-bold tracking-tight leading-none"
        >
          Brands that believe in us
        </motion.h2>

        {/* Logos */}
        <div className="mt-20 overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-10 md:gap-20"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="relative shrink-0 h-[60px] flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={logo}
                  alt="Logo"
                  width={250}
                  height={250}
                  className=" object-contain opacity-40 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}