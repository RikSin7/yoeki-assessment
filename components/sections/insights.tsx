'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const INSIGHTS_DATA = [
  {
    id: 1,
    title: '7 State Persistence Strategies for Long-Running AI Agents in 2026',
    description: 'Building an AI agent that actually finishes complex work is harder than it looks. An agent starts a task, encounters an error, and loses all context. We explore seven robust strategies to ensure your agents survive process restarts.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 2,
    title: 'Tool Invocation Reliability Across GPT-5.2 and Claude Agent Systems',
    description: 'You place a food order and pay for it, there is a notification displayed that says; order successful. But behind the scenes, how do orchestrators guarantee that LLMs invoke APIs with 100% syntactical accuracy?',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 3,
    title: 'Red-Teaming Explained: How it Fits into AI Testing Without Replacing QA',
    description: 'As AI moves into the core of enterprise systems and functions, quality assurance (QA) teams and security professionals are colliding. Understand why red-teaming adversarial inputs is now a mandatory pre-deployment step.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 4,
    title: 'Optimizing Mutation Testing with Gen AI',
    description: 'Discover how generative AI models are revolutionizing mutation testing by automatically generating intelligent, context-aware test cases that challenge your source code far better than traditional randomized mutations.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756ded8dd?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 5,
    title: 'Agentic AI Swarms: How Autonomous AI Teams Are Redefining Enterprise',
    description: 'Explore the emerging paradigm of agent swarms where multiple specialized AI models collaborate, debate, and verify each other\'s work to solve complex enterprise problems without human intervention.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    link: '#',
  }
];

export default function Insights() {
  return (
    <section className="bg-white py-16 md:px-12 relative overflow-hidden">

      {/* Optional: Subtle decorative background dots */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-[radial-gradient(#EF7D25_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-[radial-gradient(#EF7D25_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Header Section */}
      <div className="max-w-[1600px] mx-auto px-6 mb-10 lg:mb-12 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-black tracking-tight mb-3 leading-tight">
          Fresh Takes and Insights
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl">
          Decoding trends, one byte of knowledge at a time.
        </p>
      </div>

      {/* Grid Content */}
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {INSIGHTS_DATA.map((insight) => (
            <div
              key={insight.id}
              className="flex flex-col md:flex-row bg-[#F9FAFB] rounded-md overflow-hidden md:h-[200px] border border-gray-100/50"
            >
              <div className="relative w-full h-[250px] md:h-full md:w-[250px] shrink-0 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="px-5 py-6 md:py-4 lg:px-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-bold text-black mb-1.5 leading-[1.25] tracking-tight line-clamp-2">
                    {insight.title}
                  </h3>

                  <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed mb-3 line-clamp-2">
                    {insight.description}
                  </p>
                </div>

                {/* Read More Button */}
                <div className="flex items-center gap-2 text-[#EF7D25] text-sm font-medium w-max cursor-pointer group mt-auto">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}