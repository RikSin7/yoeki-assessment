import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/sections/hero'));
const Marquee = dynamic(() => import('@/components/sections/marquee'));
const Spotlight = dynamic(() => import('@/components/sections/spotlight'));
const Services = dynamic(() => import('@/components/sections/services'));
const SuccessStories = dynamic(() => import('@/components/sections/successStories'));
const Insights = dynamic(() => import('@/components/sections/insights'));
const Discover = dynamic(() => import('@/components/sections/discover'));
const Contact = dynamic(() => import('@/components/sections/contact'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Spotlight />
      <Services />
      <SuccessStories />
      <Insights />
      <Discover />
      <Contact />
    </main>
  );
}
