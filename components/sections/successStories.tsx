'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const SUCCESS_STORIES = [
  {
    id: 1,
    title: 'Assessing a Massive 4GL Legacy Architecture for a Leading Insurer in 12 Weeks, Leveraging The Lifter',
    description: 'The Lifter analyzed complex 4GL systems and mapped thousands of dependencies in weeks, turning what used to take 12-18 months into a streamlined, risk-free modernization roadmap.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 2,
    title: 'Modernizing Core Banking Systems with Agentic AI for a Fortune 500 Financial Institution',
    description: 'Seamlessly migrated legacy monolithic applications to a cloud-native microservices architecture, ensuring zero downtime and establishing predictive, AI-driven fraud detection pipelines.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    link: '#',
  },
  {
    id: 3,
    title: 'Automating Supply Chain Quality Engineering for a Global Retail Giant',
    description: 'Implemented end-to-end continuous testing pipelines and smart workflows, reducing deployment times by 40% while ensuring 99.9% defect-free releases across all consumer touchpoints.',
    image: 'https://plus.unsplash.com/premium_photo-1681010317789-68f31df3b9b0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  }
];

export default function SuccessStories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      if (firstChild) {
        const gap = window.innerWidth >= 1024 ? 32 : 24;
        const scrollAmount = firstChild.offsetWidth + gap;
        scrollRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="bg-white pt-8 md:pt-16 overflow-hidden">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        className="w-full"
      >
      <div className="text-center mb-8 md:mb-12 px-6">
        <h4 className="text-primary font-bold text-app-base">
          Success Stories
        </h4>
        <h2 className="text-app-3xl md:text-app-4xl font-semibold text-black tracking-tight">
          Real Stories, Real Impact
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto relative md:px-18">
        <div
          ref={scrollRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 lg:px-12 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="flex flex-col rounded-md lg:flex-row w-[90vw] md:w-[70vw] lg:w-[1000px] shrink-0 lg:snap-start overflow-hidden border border-gray-100/50"
            >

              <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto shrink-0 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 bg-[#F8F9FA] p-8 md:p-10 lg:p-14 flex flex-col justify-center">
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 leading-[1.3] tracking-tight">
                  {story.title}
                </h3>
                <p className="text-gray-500 text-app-sm lg:text-[15px] leading-relaxed mb-8">
                  {story.description}
                </p>
                <div className="flex items-center gap-2 text-[#EF7D25] text-sm font-medium transition-all w-max cursor-pointer group">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 4. Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => scroll('left')}
          className="md:w-14 md:h-14 w-11 h-11 rounded-full bg-[#EFEAE3] hover:bg-black flex items-center justify-center text-black/70 transition-colors group"
          aria-label="Previous story"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:text-white" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="md:w-14 md:h-14 w-11 h-11 rounded-full bg-[#EFEAE3] hover:bg-black flex items-center justify-center text-black/70 transition-colors group"
          aria-label="Next story"
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
        </button>
      </div>
      </motion.div>
    </section>
  );
}