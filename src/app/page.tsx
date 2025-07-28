
"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Resort from '@/components/sections/resort';
import LatestNews from '@/components/sections/latest-news';
import MobileSectors from '@/components/sections/mobile-sectors';
import { MotionContainer, MotionDiv } from '@/components/ui/motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <MotionContainer>
          <MotionDiv>
            <Hero />
          </MotionDiv>
          <MotionDiv>
            <MobileSectors />
          </MotionDiv>
          <MotionDiv>
            <About />
          </MotionDiv>
          <MotionDiv>
            <Resort />
          </MotionDiv>
          <MotionDiv>
            <LatestNews />
          </MotionDiv>
        </MotionContainer>
      </main>
      <Footer />
    </div>
  );
}
