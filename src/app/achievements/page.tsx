
"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { MotionDiv } from '@/components/ui/motion';
import Breadcrumb from '@/components/layout/breadcrumb';
import { Trophy } from 'lucide-react';

export default function AchievementsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        
        <MotionDiv direction="left">
          <section className="relative w-full h-[300px] md:h-[400px]">
             <Image
                src="https://placehold.co/1600x900.png"
                alt="Celebrating success"
                layout="fill"
                objectFit="cover"
                data-ai-hint="fireworks celebration"
              />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 h-full flex flex-col justify-end container mx-auto px-4 md:px-6 pb-12">
                 <Breadcrumb
                    items={[
                      { label: "Home", href: "/" },
                      { label: "Achievements", href: "/achievements" },
                    ]}
                  />
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-white mt-4">Our Achievements</h1>
            </div>
          </section>
        </MotionDiv>

        <MotionDiv direction="right">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                  <Trophy className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl font-bold font-headline text-primary">Content Coming Soon</h2>
                  <p className="text-muted-foreground mt-4">We are currently curating a comprehensive list of our proudest moments and milestones. Please check back soon to see the achievements that define KDU Group's journey of excellence.</p>
              </div>
            </div>
          </section>
        </MotionDiv>
      </main>
      <Footer />
    </div>
  );
}
