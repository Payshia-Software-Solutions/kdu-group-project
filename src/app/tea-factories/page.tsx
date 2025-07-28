
"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SubNav from '@/components/layout/sub-nav';
import Breadcrumb from '@/components/layout/breadcrumb';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { Leaf, Users, ShieldCheck } from 'lucide-react';


const factories = [
  {
    name: "Galpadithanne Tea Factory",
    description: "Nestled in the heart of Sri Lanka's tea country, producing high-quality orthodox teas renowned for their rich flavor and aromatic bouquet.",
    image: "https://placehold.co/600x400.png",
    hint: "tea plantation sunrise",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
  {
    name: "Kuttapitiya Tea Estate and Factory",
    description: "Renowned for its commitment to traditional tea manufacturing processes, this factory produces teas with exceptional and consistent flavor profiles.",
    image: "https://placehold.co/600x400.png",
    hint: "tea leaves morning",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
  {
    name: "New Kendagastenna Tea Factory",
    description: "A modern facility that seamlessly combines innovation with age-old traditions to create unique and sought-after tea blends.",
    image: "https://placehold.co/600x400.png",
    hint: "modern tea factory",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
  {
    name: "Peak View Tea Factory",
    description: "Offering panoramic views and even more impressive teas, specializing in single-origin batches that capture the essence of the region.",
    image: "https://placehold.co/600x400.png",
    hint: "mountain tea estate",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
  {
    name: "Matuwagala Tea Factory",
    description: "A cornerstone of the local community, this factory is dedicated to sustainable practices and empowering its workforce through fair trade.",
    image: "https://placehold.co/600x400.png",
    hint: "tea workers smiling",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
];

export default function TeaFactoriesPage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [selectedFactory, setSelectedFactory] = useState(factories[0]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex);
      setSelectedFactory(factories[selectedIndex]);
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

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

        <Card className="mb-12">
            <CardContent className="p-6">
                <Carousel setApi={setApi} className="w-full">
                    <CarouselContent>
                    {factories.map((factory, index) => (
                        <CarouselItem key={index} className="basis-1/3 md:basis-1/5">
                            <div className="p-1">
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "w-full h-24 flex items-center justify-center p-2 border-2 transition-all",
                                        index === current ? "border-primary scale-105 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                                    )}
                                    onClick={() => api?.scrollTo(index)}
                                >
                                    <Image src={factory.logo} alt={`${factory.name} Logo`} width={100} height={40} className="object-contain" />
                                </Button>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </CardContent>
        </Card>

        <Card className="overflow-hidden shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-80 md:h-full w-full min-h-[300px]">
              <Image
                src={selectedFactory.image}
                alt={selectedFactory.name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out"
                data-ai-hint={selectedFactory.hint}
                key={selectedFactory.name} // Force re-render on change
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">{selectedFactory.name}</CardTitle>
                <CardDescription>KDU Group Tea Factory</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">{selectedFactory.description}</p>
              </CardContent>
            </div>
          </div>
        </Card>

        <section className="my-16 md:my-24">
          <h2 className="text-3xl font-bold font-headline text-center mb-12 text-primary">Factory Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-4 rounded-full mb-2">
                    <Leaf className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Sustainable Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our factories are committed to environmentally friendly practices, from water conservation to waste management.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-4 rounded-full mb-2">
                    <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We are proud to be a major employer in the regions we operate, empowering local communities.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <div className="bg-accent/20 p-4 rounded-full mb-2">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Stringent quality control at every stage of production ensures the finest quality tea for our customers.</p>
              </CardContent>
            </Card>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
