'use client';
import { ArrowRight } from 'lucide-react';
import { InfinityCanvas } from '../ui/infinityCanvas';

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-start py-10 overflow-hidden text-center z-0">

      <div className="absolute top-[40%] bottom-0 left-0 right-0 overflow-hidden">
        <InfinityCanvas />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black pointer-events-none" />
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">

        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
          Explore Infinite<br />
          Possibilities with Indium
        </h2>

        <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Have a challenge or a big idea? We&apos;re here to listen, innovate, and make it happen.<br className="hidden md:block" />
          Reach out today, and let&apos;s start shaping the future of your business.
        </p>

        {/* Animated Custom Button */}
        <button
          className="group relative flex items-center justify-between bg-[#F18435] p-1 rounded-full w-[200px] h-[54px] cursor-pointer border-none outline-none shadow-[0_0_40px_rgba(241,132,53,0.3)] hover:shadow-[0_0_60px_rgba(241,132,53,0.5)] transition-shadow duration-500"
        >
          <div className="absolute right-1 top-1 bottom-1 w-[46px] bg-black rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[calc(100%-8px)] pointer-events-none" />

          {/* Button Text */}
          <span className="relative z-10 pl-8 pr-4 text-[15px] font-semibold text-black group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            Contact
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