'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SPOTLIGHT_DATA = [
  {
    id: 1,
    title: "Indium Launches The Lifter to Ease Tech Debt",
    cta: "View Press Release",
    image: "/images/thumb1.webp",
  },
  {
    id: 2,
    title: "Indium expects AI Platform, Legacy Modernization to drive growth",
    cta: "Check out the interview",
    image: "/images/thumb2.webp",
  },
  {
    id: 3,
    title: "Indium named Leader in the AIM Research PeMa Quadrant for Data Engineering Services 2026",
    cta: "Know More",
    image: "/images/thumb3.webp",
  },
  {
    id: 4,
    title: "Accelerating Digital Transformation in the Financial Sector",
    cta: "Read Case Study",
    image: "/images/thumb4.webp",
  },
  {
    id: 5,
    title: "How Cloud Native Architectures are Reshaping Enterprise Scalability",
    cta: "Download Whitepaper",
    image: "/images/thumb5.webp",
  },
  {
    id: 6,
    title: "RPA for Mid-Market Companies",
    cta: "Read the Analysis",
    image: "/images/thumb6.webp",
  },
  {
    id: 7,
    title: "From Vision to Reality: The Journey of a $500M SaaS Company",
    cta: "Read the Article",
    image: "/images/thumb7.webp",
  },
  {
    id: 8,
    title: "The Role of Data Ingest in Modern Data Architecture",
    cta: "Read the Article",
    image: "/images/thumb8.webp",
  }
];

export default function Spotlight() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // 2. Scroll Logic & Boundary Detection
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Subtracting 1px for safe rounding decimals on high-DPI screens
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Scroll by exactly one card width + gap (approx) based on viewport size
      const clientWidth = scrollRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -(clientWidth * 0.8) : (clientWidth * 0.8);

      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black mx-auto max-w-[1440px] px-6 md:px-12 py-24 md:py-32 border-b border-white/[0.05] overflow-hidden">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white text-3xl md:text-5xl font-bold tracking-tight mb-16"
        >
          Spotlight
        </motion.h2>

        {/* 3. Slider Container (Native Scroll Snap) */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {SPOTLIGHT_DATA.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                key={item.id}
                className="group cursor-pointer shrink-0 snap-start flex flex-col w-[85vw] md:w-[45vw] lg:w-[380px] xl:w-[420px]"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden mb-6 border border-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug tracking-tight mb-4 group-hover:text-gray-300 transition-colors line-clamp-3">
                  {item.title}
                </h3>

                {/* CTA  */}
                <div className="mt-auto flex items-center gap-2 text-[#EF7D25] text-sm md:text-base font-medium">
                  {item.cta}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-14 h-14 rounded-full bg-[#f4f4f5] flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-14 h-14 rounded-full bg-[#f4f4f5] flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6 text-black" />
          </button>
        </div>

    </section>
  );
}