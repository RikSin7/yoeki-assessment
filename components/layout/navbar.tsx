'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery'; 
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const NAV_ITEMS = [
  'Who We Are',
  'What We Do',
  'The Lifter',
  'Industries',
  'Subsidiaries',
  'Insights'
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  // Custom Hook detecting if above 1200px
  const isDesktop = useMediaQuery('(min-width: 1200px)');

  // Safety trigger: If user resizes window to desktop while mobile menu is open, close it.
  useEffect(() => {
    if (isDesktop && isMobileMenuOpen) {
      //eslint-disable-next-line
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="w-full max-w-[1440px] mx-auto h-22 bg-[#101010] flex items-center justify-between px-6 md:px-12 fixed top-0 left-0 right-0 z-40">

        {/* 1. Logo */}
        <div className="shrink-0 cursor-pointer flex items-center" onClick={() => router.push("/")}>
          <Image src="./images/logo.svg" alt="Yoeki Logo" width={180} height={180} />
        </div>

        {/* 2. Desktop Navigation (Hidden below 1200px) */}
        <div className="hidden min-[1200px]:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-100 font-medium text-[15px] whitespace-nowrap group-hover:text-[#EF7D25] transition-colors">
                {item}
              </span>
              <ChevronDown className="w-4 h-4 text-[#EF7D25] group-hover:translate-y-0.5 transition-transform" />
            </div>
          ))}
        </div>

        {/* 3. Right Action Area (Button always visible, Hamburger below 1200px) */}
        <div className="flex items-center gap-4">
          <Button onClick={() => router.push('/contact')}>Contact Us</Button>

          <button
            className="min-[1200px]:hidden text-white p-1 hover:text-[#EF7D25] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* 4. Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 min-[1200px]:hidden"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-[#1a1a1a] z-50 min-[1200px]:hidden shadow-2xl flex flex-col"
            >
              {/* Close Button Header */}
              <div className="h-24 px-6 flex items-center justify-end border-b border-white/5">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col py-6 overflow-y-auto">
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between px-8 py-5 cursor-pointer hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-white text-lg font-medium group-hover:text-[#EF7D25] transition-colors">
                      {item}
                    </span>
                    <ChevronRight className="w-5 h-5 text-white group-hover:text-[#EF7D25] transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};