'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const DISCOVER_CARDS = [
  {
    title: 'Game QA',
    description: 'Your players demand perfection. So do we.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b7738?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Game Development',
    description: 'Built for performance. Designed for players.',
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Specialized Services',
    description: 'Smart Decisions for big wins.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Game Art & Animation',
    description: 'We turn your vision into reality.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800',
  }
];

export default function Discover() {
  return (
    <section className="bg-white py-16 relative overflow-hidden">

      {/* Decorative Background Dots (Simulating the orange splatter) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-[radial-gradient(#EF7D25_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.35] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(#EF7D25_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-[0.35] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)]" />

      {/* Main Container */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">

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
              <div className="relative w-full aspect-[4/3] md:aspect-[16/11]">
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
        <button
          className="group relative flex items-center justify-between bg-primary p-1 rounded-full w-[260px] h-[54px] cursor-pointer border-none outline-none"
        >
          <div className="absolute right-1 top-1 bottom-1 w-[46px] bg-black rounded-full transition-all duration-500 ease-out group-hover:w-[calc(100%-8px)] pointer-events-none" />

          {/* Button Text */}
          <span className="relative z-10 pl-7 text-app-base font-semibold text-black group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            Discover iXie Gaming
          </span>

          {/* Arrow Icon Circle */}
          <div className="relative z-10 flex items-center justify-center w-[46px] h-[46px] bg-black rounded-full shrink-0">
            <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </button>

      </div>
    </section>
  );
}