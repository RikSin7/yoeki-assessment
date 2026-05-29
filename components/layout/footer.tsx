'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MapPin, Phone } from 'lucide-react'; 

const FOOTER_LINKS = [
  {
    sections: [
      {
        title: 'Artificial Intelligence',
        links: ['Gen AI', 'Agentic AI', 'AI/ML Solutions', 'AI/MLOps'],
      },
      {
        title: 'Product Engineering',
        links: ['App Modernization', 'Mobile Development', 'Devops', 'Cloud Engineering'],
      },
    ],
  },
  {
    sections: [
      {
        title: 'Data & Analytics',
        links: ['Data Engineering', 'Data Governance', 'Data Modernization', 'Data Streaming', 'Data Annotation'],
      },
      {
        title: 'Quality Engineering',
        links: ['IoT Testing', 'LLM Testing', 'Test Automation', 'DevOps Testing'],
      },
    ],
  },
  {
    sections: [
      {
        title: 'Intelligent Automation',
        links: ['Low-Code', 'Process Mining', 'Smart Workflows', 'Robotic Process Automation'],
      },
      {
        title: 'Industry Expertise',
        links: ['BFSI', 'Healthcare', 'Technology', 'Manufacturing', 'Retail'],
      },
    ],
  },
];

export default function Footer() {
  const isMobile = useMediaQuery('(max-width: 449px)');

  return (
    <footer className="bg-black border-t border-white/10 pt-16 md:pt-20 pb-8 px-6 md:px-22 w-full font-sans">
      <div className="max-w-[1600px] mx-auto">

        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Company Info */}
          <div className="flex flex-col">
            <Image
              src="/images/logo.svg"
              alt="Indium Logo"
              width={160}
              height={50}
              className="mb-8 w-36 md:w-40 h-auto"
            />

            <p className="text-white text-[15px] leading-relaxed pr-4 mb-8">
              Indium is an AI services company that specializes in Agentic AI, Data & Analytics, Application Engineering, and Quality Engineering.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EF7D25] shrink-0 mt-0.5" fill="#EF7D25" stroke="black" />
                <span className="text-white text-[15px]">Cupertino, CA 95014-2358, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#EF7D25] shrink-0" fill="#EF7D25" stroke="black" />
                <span className="text-white text-[15px]">+1 (888) 207 5969</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[#EF7D25] text-[17px] font-semibold tracking-wide">
                Subsidiaries:
              </h4>
              <p className="text-white text-[15px]">
                Experion Technologies
              </p>
            </div>
          </div>

          {/* Columns 2, 3, 4: Dynamic Link Sections */}
          {FOOTER_LINKS.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-10">
              {column.sections.map((section, secIdx) => (
                <div key={secIdx} className="flex flex-col">
                  <h4 className="text-[#EF7D25] text-[17px] font-normal tracking-wide mb-5">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href="#"
                          className="text-white text-[15px] hover:text-[#EF7D25] transition-colors"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className={`pt-8 border-t border-white/10 flex ${isMobile ? 'flex-col items-center gap-6' : 'flex-row justify-between items-center'}`}>

          {isMobile && <SocialIcons />}

          <p className={`text-white text-[14px] ${isMobile ? 'text-center' : 'text-left'} leading-relaxed`}>
            © 2026 All Rights Reserved | Indium Software (India) Private Limited | Privacy Policy | Sitemap | SEBI Disclosures
          </p>

          {!isMobile && <SocialIcons />}

        </div>
      </div>
    </footer>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-6">

      {/* X / Twitter */}
      <Link href="#" className="text-white hover:text-[#EF7D25] transition-colors" aria-label="X (Twitter)">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      </Link>

      {/* Instagram */}
      <Link href="#" className="text-white hover:text-[#EF7D25] transition-colors" aria-label="Instagram">
        <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </Link>

      {/* LinkedIn */}
      <Link href="#" className="text-white hover:text-[#EF7D25] transition-colors" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </Link>

      {/* Facebook */}
      <Link href="#" className="text-white hover:text-[#EF7D25] transition-colors" aria-label="Facebook">
        <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </Link>

    </div>
  );
}