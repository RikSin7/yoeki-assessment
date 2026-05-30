'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { InfinityCanvas } from '../ui/infinityCanvas';

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-start py-10 overflow-hidden text-center z-0">

      <div className="absolute top-[40%] bottom-0 left-0 right-0 overflow-hidden">
        <InfinityCanvas />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black pointer-events-none" />
      </div>

      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center"
      >

        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
          Explore Infinite<br />
          Possibilities with Indium
        </h2>

        <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Have a challenge or a big idea? We&apos;re here to listen, innovate, and make it happen.<br className="hidden md:block" />
          Reach out today, and let&apos;s start shaping the future of your business.
        </p>

        {/* Animated Custom Button */}
        <Button className="w-[200px]">Contact</Button>
      </motion.div>
    </section>
  );
}