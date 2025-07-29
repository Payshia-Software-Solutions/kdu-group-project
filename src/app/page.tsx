
"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Resort from '@/components/sections/resort';
import LatestNews from '@/components/sections/latest-news';
import { MotionDiv } from '@/components/ui/motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow overflow-x-hidden">
          <MotionDiv direction="left">
            <Hero />
          </MotionDiv>
          <MotionDiv direction="left">
            <About />
          </MotionDiv>
          <MotionDiv direction="right">
            <Resort />
          </MotionDiv>
          <MotionDiv direction="left">
            <LatestNews />
          </MotionDiv>
      </main>
      <Footer />
    </div>
  );
}
