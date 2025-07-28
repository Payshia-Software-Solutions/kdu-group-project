"use client";

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SubNav from '@/components/layout/sub-nav';
import Breadcrumb from '@/components/layout/breadcrumb';
import { Factory } from 'lucide-react';
import { cn } from '@/lib/utils';

const factories = [
  {
    name: "Galpadithanne Tea Factory",
    description: "Nestled in the heart of Sri Lanka's tea country, producing high-quality orthodox teas renowned for their rich flavor and aromatic bouquet.",
    image: "https://placehold.co/600x400.png",
    hint: "tea plantation sunrise",
  },
  {
    name: "Kuttapitiya Tea Estate and Factory",
    description: "Renowned for its commitment to traditional tea manufacturing processes, this factory produces teas with exceptional and consistent flavor profiles.",
    image: "https://placehold.co/600x400.png",
    hint: "tea leaves morning",
  },
  {
    name: "New Kendagastenna Tea Factory",
    description: "A modern facility that seamlessly combines innovation with age-old traditions to create unique and sought-after tea blends.",
    image: "https://placehold.co/600x400.png",
    hint: "modern tea factory",
  },
  {
    name: "Peak View Tea Factory",
    description: "Offering panoramic views and even more impressive teas, specializing in single-origin batches that capture the essence of the region.",
    image: "https://placehold.co/600x400.png",
    hint: "mountain tea estate",
  },
  {
    name: "Matuwagala Tea Factory",
    description: "A cornerstone of the local community, this factory is dedicated to sustainable practices and empowering its workforce through fair trade.",
    image: "https://placehold.co/600x400.png",
    hint: "tea workers smiling",
  },
];

export default function TeaFactoriesPage() {
  const [selectedFactory, setSelectedFactory] = useState(factories[0]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <SubNav />
      <section className="relative w-full h-[300px] md:h-[400px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover"
          poster="https://placehold.co/1600x900.png"
        >
          <source src="https://content-provider.payshia.com/kdu-group/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
      </section>
      <main className="flex-grow container mx-auto px-4 md:px-6 -mt-32 relative z-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Sectors", href: "/sectors" },
            { label: "Tea Factories", href: "/tea-factories" },
          ]}
        />
        <div className="text-left my-12 bg-background/80 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl font-bold font-headline mb-4 text-primary">Our Tea Factories</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
                With a rich heritage rooted in Sri Lanka's esteemed tea culture, KDU Group is a custodian of traditional and sustainable tea manufacturing. Our factories are pillars of their communities, producing world-class teas that honor our island's legacy.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Our Factories</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {factories.map((factory) => (
                  <Button
                    key={factory.name}
                    variant="ghost"
                    onClick={() => setSelectedFactory(factory)}
                    className={cn(
                        "w-full justify-start text-left h-auto p-4",
                        selectedFactory.name === factory.name && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Factory className="mr-4 h-6 w-6 text-primary" />
                    <span className="font-semibold">{factory.name}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-80 w-full">
                <Image
                  src={selectedFactory.image}
                  alt={selectedFactory.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  data-ai-hint={selectedFactory.hint}
                  key={selectedFactory.name} // Force re-render on change
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">{selectedFactory.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">{selectedFactory.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
