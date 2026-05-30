'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

const DISCOVER_CARDS = [
  {
    title: 'Game QA',
    description: 'Your players demand perfection. So do we.',
    image: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    title: 'Game Development',
    description: 'Built for performance. Designed for players.',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    title: 'Specialized Services',
    description: 'Smart Decisions for big wins.',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    title: 'Game Art & Animation',
    description: 'We turn your vision into reality.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    link: '#',
  }
];
export default function Discover() {
  return (
    <section className="bg-white py-16 relative overflow-hidden">

      {/* Decorative Background Dots */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-[radial-gradient(#EF7D25_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.35] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(#EF7D25_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-[0.35] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)]" />

      {/* Main Container */}
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        className="max-w-[1440px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center"
      >

        {/* Header Image  */}
        <div className="relative w-[280px] md:w-[320px] h-[110px] mb-12">
          <Image
            src="/images/game-image.webp"
            alt="iXie by Indium - Where Games Level Up"
            fill
            className="object-contain"
          />
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mb-12">
          {DISCOVER_CARDS.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#363636] rounded-none overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-6/3 md:aspect-16/11">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1 text-left">
                <h3 className="text-white font-bold text-app-lg md:text-app-xl mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-app-sm md:text-app-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Custom Button */}
        <Button className="w-[260px]">Discover iXie Gaming</Button>
      </motion.div>
    </section>
  );
}