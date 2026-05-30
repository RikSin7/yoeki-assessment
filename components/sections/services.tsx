'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

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
    <section className="bg-white">
      {/* Mobile Pre-Scroll Header */}
      <div className="lg:hidden max-w-[1600px] mx-auto px-6 w-full pt-20 pb-8 text-center shrink-0">
        <h4 className="text-[#EF7D25] font-semibold text-sm uppercase tracking-wider mb-2">
          Services
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">
          Crafting success through our expertise in AI
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          AI-infused engineering that speaks your language—innovative, efficient, and built to solve real problems.
        </p>
      </div>

      <div ref={sectionRef} className="relative h-[400vh]">

        <div className="sticky top-14 md:top-28 lg:top-8 h-screen md:h-[calc(100vh-6rem)] lg:h-screen w-full overflow-hidden flex flex-col justify-center md:justify-start lg:justify-center py-4 md:pt-4 lg:py-16">

          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="w-full flex flex-col h-full lg:h-auto justify-center"
          >
            <div className="hidden lg:block max-w-[1600px] mx-auto px-6 lg:px-12 w-full mb-12 text-center shrink-0">
              <h4 className="text-[#EF7D25] font-semibold text-base uppercase tracking-wider mb-2">
                Services
              </h4>
              <h2 className="text-5xl font-bold text-black tracking-tight mb-3">
                Crafting success through our expertise in AI
              </h2>
              <p className="text-gray-600 text-base max-w-3xl mx-auto">
                AI-infused engineering that speaks your language—innovative, efficient, and built to solve real problems.
              </p>
            </div>

            <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-16 items-center lg:px-12">

              <div className="w-full h-[240px] md:h-[350px] lg:h-[400px] px-4 lg:px-0 flex items-center justify-center perspective-[1500px] relative shrink-0 lg:pl-10 lg:order-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    className="relative w-full max-w-[500px] h-full lg:aspect-square flex items-center justify-center overflow-hidden lg:shadow-2xl"
                  >
                    <Image
                      src={SERVICES_DATA[activeIndex].image}
                      alt={SERVICES_DATA[activeIndex].title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="w-full flex flex-col relative z-10 px-4 lg:px-0 lg:pr-10 lg:order-1">
                {SERVICES_DATA.map((service, index) => {
                  const isActive = activeIndex === index;
                  const isNext = index === activeIndex + 1;
                  const showOnMobile = isActive || isNext;

                  return (
                    <div key={service.id} className={`relative xl:min-w-[47vw] cursor-pointer group ${showOnMobile ? 'block' : 'hidden lg:block'}`}>
                      {isActive && (
                        <motion.div
                          layoutId="activeServiceBg"
                          className="absolute inset-0 lg:inset-auto lg:top-0 lg:bottom-0 lg:left-auto lg:right-0 w-full lg:w-[100vw] bg-[#111111] z-0 lg:rounded-none transform-gpu"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 250, damping: 30 }}
                        />
                      )}

                      <motion.div
                        className="relative z-10 py-5 px-6 md:px-8 flex flex-col"
                        animate={{ color: isActive ? '#ffffff' : '#000000' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 md:gap-10">
                            <span className={`text-xl md:text-3xl font-bold transition-colors duration-300 ${isActive ? 'text-[#EF7D25]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                              {service.id}
                            </span>
                            <h3 className="text-xl pb-2 pr-2 md:text-2xl lg:text-xl xl:text-3xl font-bold tracking-tight">
                              {service.title}
                            </h3>
                          </div>

                          <AnimatePresence>
                            {isActive && isDesktop && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="hidden lg:flex items-center gap-2 text-sm font-medium hover:text-[#EF7D25] transition-colors whitespace-nowrap"
                              >
                                Read More <ArrowRight className="w-4 h-4" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-3 md:pt-4 pl-[3rem] md:pl-[4.5rem] pr-4 md:pr-4 pb-2 max-h-none lg:max-h-[60px] xl:max-h-none overflow-y-auto custom-scrollbar">
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
                                  {service.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {!isActive && <div className="absolute bottom-0 left-6 lg:left-4 right-6 lg:right-4 h-[1px] bg-gray-200 z-10 transition-colors group-hover:bg-gray-300" />}
                    </div>
                  );
                })}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}