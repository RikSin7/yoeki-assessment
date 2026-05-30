'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const INDUSTRIES_DATA = [
    {
        title: 'BFSI',
        description: 'Enhancing customer experience, risk management, and fraud detection through AI-powered analytics, automation, and secure digital transformation solutions.',
        image: 'https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Healthcare',
        description: 'Empowering patient care and operational efficiency with predictive analytics and modernized healthcare IT infrastructures.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Technology',
        description: 'Accelerating product development and innovation with robust agile engineering and intelligent automation.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Manufacturing',
        description: 'Optimizing supply chains and production lines through IoT testing, data streaming, and smart workflows.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Retail',
        description: 'Driving omnichannel personalization and inventory management powered by Agentic AI and data modernization.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    }
];

export default function Industries() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const newIndex = Math.min(
            Math.floor(latest * INDUSTRIES_DATA.length),
            INDUSTRIES_DATA.length - 1
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
        <section className="w-full bg-white">

            {/* Mobile Pre-Scroll Header (Scrolls away) */}
            <div className="lg:hidden max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20 pb-8 text-left shrink-0">
                <h4 className="text-primary font-semibold text-app-sm uppercase tracking-wider mb-2">
                    Industries
                </h4>
                <h2 className="text-app-3xl md:text-app-4xl font-bold text-black tracking-tight mb-3">
                    Transforming Industries with Cutting-Edge Innovation
                </h2>
                <p className="text-gray-600 text-app-sm md:text-app-base max-w-3xl">
                    At Indium, we pride ourselves in driving growth and delivering high-value solutions with unwavering commitment to the unique needs of every industry we serve.
                </p>
            </div>

            <div ref={sectionRef} className="relative h-[500vh]">

                <div className="sticky top-16 md:top-24 lg:top-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] lg:h-screen w-full overflow-hidden flex flex-col justify-start lg:justify-center py-4 lg:py-0">

                    {/* Spring-Up Entry Animation Wrapper */}
                    <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                        className="w-full flex flex-col h-full lg:justify-center"
                    >
                        <div className="max-w-[1440px] mx-auto w-full h-full lg:h-[900px] flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-center px-6 lg:px-12">

                            {/* Desktop Left Static Content */}
                            <div className="hidden lg:flex w-full flex-col justify-center px-4 lg:px-0 lg:pr-8 h-full lg:col-span-5">
                                <h4 className="text-primary font-semibold text-app-base uppercase tracking-wider mb-4">
                                    Industries
                                </h4>
                                <h2 className="text-app-4xl font-bold text-black tracking-tight mb-6 leading-[1.2]">
                                    Transforming Industries<br />
                                    with Cutting-Edge<br />
                                    Innovation
                                </h2>
                                <p className="text-gray-600 text-app-lg max-w-lg leading-relaxed">
                                    At Indium, we pride ourselves in driving growth and delivering high-value solutions with unwavering commitment to the unique needs of every industry we serve.
                                </p>
                            </div>

                            <div className="w-full lg:mt-22 h-full flex items-center justify-center lg:col-span-7">
                                <div className="w-full h-full max-h-[500px] md:max-h-[600px] bg-[#111111] overflow-hidden flex flex-col relative transform-gpu">

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeIndex}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex flex-col w-full h-full p-6 md:p-12 lg:p-16 pb-20 justify-between pr-12 lg:pr-16"
                                        >
                                            {/* Image Area with Mirrored Flip */}
                                            <div className="relative w-full h-[45%] lg:h-[55%] min-h-[180px] md:min-h-[250px] lg:min-h-[200px] flex items-center justify-center mt-4 mb-6 md:mb-8 perspective-[1500px]">
                                                <motion.div
                                                    key={`img-${activeIndex}`}
                                                    variants={imageVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                                                    className="relative w-full h-full"
                                                >
                                                    <Image
                                                        src={INDUSTRIES_DATA[activeIndex].image}
                                                        alt={INDUSTRIES_DATA[activeIndex].title}
                                                        fill
                                                        unoptimized
                                                        className="object-cover filter opacity-90"
                                                    />
                                                </motion.div>
                                            </div>

                                            {/* Content Area */}
                                            <div className="flex flex-col flex-1 justify-end">
                                                <h3 className="text-white text-app-3xl md:text-app-4xl font-bold tracking-tight mb-3 md:mb-4">
                                                    {INDUSTRIES_DATA[activeIndex].title}
                                                </h3>
                                                <p className="text-gray-300 text-app-sm md:text-app-base leading-relaxed mb-6 md:mb-8 lg:max-w-md line-clamp-3">
                                                    {INDUSTRIES_DATA[activeIndex].description}
                                                </p>
                                                <div className="flex items-center gap-2 text-primary text-app-sm md:text-app-base font-medium transition-colors w-max cursor-pointer group">
                                                    Read More <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Mobile Vertical Progress Bar */}
                                    <div className="absolute right-4 md:right-6 bottom-20 flex flex-col gap-2 z-10 lg:hidden">
                                        {INDUSTRIES_DATA.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-[3px] transition-all duration-500 rounded-full ${i === activeIndex ? 'h-10 bg-primary' : 'h-6 bg-white/20'}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Desktop Horizontal Progress Bar */}
                                    <div className="hidden lg:flex absolute bottom-0 left-0 w-full px-16 pb-12 z-10">
                                        <div className="flex gap-2 w-full">
                                            {INDUSTRIES_DATA.map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`h-[3px] flex-1 transition-colors duration-500 rounded-full ${i === activeIndex ? 'bg-primary' : 'bg-white/10'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}