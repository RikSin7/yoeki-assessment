"use client";

import { motion } from "motion/react";

export default function AnimatedN() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
        >
            {/* Glow */}
            <div
                className="absolute w-[240px] h-[240px] rounded-full bg-[#FB851E]/10 blur-3xl"
            />

            {/* Letter */}
            <motion.h2
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="text-[180px] md:text-[280px] lg:text-[360px] font-black leading-none tracking-[-0.08em] text-[#FB851E] opacity-90 select-none"
                style={{
                    fontFamily: "Mona Sans",
                }}
            >
                N
            </motion.h2>
        </motion.div>
    );
}