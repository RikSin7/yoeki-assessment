'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: '01',
    title: 'Artificial Intelligence',
    description: 'AI delivers impact when it connects insight to action. Our Agentic AI services enable systems to decide, act, and continuously improve from user feedback.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '02',
    title: 'Application Engineering',
    description: 'Build hyper-scalable, resilient architectures that modernize your legacy systems and accelerate your time to market across all digital touchpoints.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '03',
    title: 'Data & Analytics',
    description: 'Transform raw data into predictive intelligence. We architect robust data pipelines and warehouses to unlock actionable enterprise value.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '04',
    title: 'Quality Engineering',
    description: 'Automated, intelligent testing frameworks ensuring zero-defect deployments and seamless user experiences across complex software ecosystems.',
    link: '#',
    // FIX 3: Replaced the broken Unsplash URL with a stable, working tech image
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * SERVICES_DATA.length),
      SERVICES_DATA.length - 1
    );
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const imageVariants = {
    initial: { rotateY: 90, opacity: 0, scale: 0.9, x: 40 },
    animate: { rotateY: 0, opacity: 1, scale: 1, x: 0 },
    exit: { rotateY: -90, opacity: 0, scale: 0.9, x: -40 },
  };

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-white">

      {/* FIX 1: Restored justify-center for perfect vertical alignment. 
          Removed excessive padding that was pushing it down. 
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center py-10 md:py-16">

        {/* Header Section */}
        {/* Tightened the bottom margin (mb-8) so it doesn't push the grid off the bottom of the screen */}
        <div className="max-w-[1600px] mx-auto px-6 w-full mb-8 md:mb-12 text-center shrink-0">
          <h4 className="text-[#EF7D25] font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
            Services
          </h4>

          {/* FIX 2: Reduced font size from 6xl to 5xl to match the first reference image perfectly */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-3">
            Crafting success through our expertise in AI
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            AI-infused engineering that speaks your language—innovative, efficient, and built to solve real problems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-[1600px] mx-auto px-6 w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Column: Interactive Accordion List */}
          <div className="w-full flex flex-col relative z-10">
            {SERVICES_DATA.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={service.id} className="relative cursor-pointer group">

                  {/* The "Bleed Left" Sliding Black Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceBg"
                      className="absolute top-0 bottom-0 right-0 w-[100vw] bg-[#111111] z-0"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 250, damping: 30 }}
                    />
                  )}

                  {/* Text Content */}
                  {/* Slightly reduced padding (py-4) to keep the vertical height compact */}
                  <motion.div
                    className="relative z-10 py-4 px-4 md:px-8 flex flex-col"
                    animate={{ color: isActive ? '#ffffff' : '#000000' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 md:gap-10">
                        <span className={`text-xl md:text-3xl font-bold transition-colors duration-300 ${isActive ? 'text-[#EF7D25]' : 'text-black/40 group-hover:text-black/70'}`}>
                          {service.id}
                        </span>
                        <h3 className="text-xl md:text-3xl font-bold tracking-tight">
                          {service.title}
                        </h3>
                      </div>

                      {/* Read More Link (Only visible on active) */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[#EF7D25] transition-colors"
                          >
                            Read More <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Expandable Description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 md:pt-4 pl-[3.5rem] md:pl-[4.5rem] pr-4 md:pr-0 pb-1">
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
                              {service.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Subtle divider line for inactive state */}
                  {!isActive && <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-200 z-10 transition-colors group-hover:bg-gray-300" />}
                </div>
              );
            })}
          </div>

          {/* Right Column: Y-Axis Mirror Flip Image */}
          {/* Slightly reduced max-height (h-[300px] lg:h-[400px]) to ensure it fits perfectly in the center of laptop screens */}
          <div className="w-full h-[300px] lg:h-[400px] flex items-center justify-center perspective-[1500px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="relative w-full max-w-[400px] aspect-square flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={SERVICES_DATA[activeIndex].image}
                  alt={SERVICES_DATA[activeIndex].title}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}