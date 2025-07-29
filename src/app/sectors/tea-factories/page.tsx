
"use client";

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SubNav from '@/components/layout/sub-nav';
import Breadcrumb from '@/components/layout/breadcrumb';
import { Counter } from '@/components/ui/counter';
import { ArrowRight } from 'lucide-react';
import { ImageGallery } from '@/components/ui/image-gallery';
import { MotionDiv } from '@/components/ui/motion';
import { cn } from '@/lib/utils';

const factories = [
  {
    name: "Galpadithanne Tea Factory",
    description: "Nestled in the heart of Sri Lanka's tea country, this factory produces high-quality orthodox teas renowned for their rich flavor and aromatic bouquet.",
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
    description: "Offering panoramic views and even more impressive teas, this factory specializes in single-origin batches that capture the essence of the region.",
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

const insights = [
    {
        title: "A Remarkable Year with Highest Yields",
        image: "https://placehold.co/600x400.png",
        hint: "tea harvest celebration"
    },
    {
        title: "Recognized for Green Business Commitment",
        image: "https://placehold.co/600x400.png",
        hint: "sustainability award"
    },
    {
        title: "Champion of Choice, Seventh Successive Award",
        image: "https://placehold.co/600x400.png",
        hint: "business award ceremony"
    },
    {
        title: "Launches New Era of Financial Inclusivity",
        image: "https://placehold.co/600x400.png",
        hint: "community finance meeting"
    }
]

const galleryImages = [
    { alt: "Tea plucking in progress", image: "https://placehold.co/600x400.png", hint: "tea plucking workers" },
    { alt: "Withering troughs at a tea factory", image: "https://placehold.co/600x400.png", hint: "tea withering" },
    { alt: "Tea rolling machines", image: "https://placehold.co/600x400.png", hint: "tea rolling machine" },
    { alt: "Fermentation room in a tea factory", image: "https://placehold.co/600x400.png", hint: "tea fermentation" },
    { alt: "Tea drying equipment", image: "https://placehold.co/600x400.png", hint: "tea drying machine" },
    { alt: "A master tea taster at work", image: "https://placehold.co/600x400.png", hint: "tea tasting expert" },
    { alt: "Packaged tea ready for export", image: "https://placehold.co/600x400.png", hint: "tea packaging" },
    { alt: "Lush green tea estate landscape", image: "https://placehold.co/600x400.png", hint: "tea estate landscape" },
]

const stats = [
    { value: 10000, label: "Annual Tea Production (MT)", suffix: " MT" },
    { value: 25, label: "Estates Managed", suffix: "" }
]

export default function TeaFactoriesPage() {
  const [selectedFactory, setSelectedFactory] = useState(factories[0]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <SubNav />
      <main className="flex-grow overflow-x-hidden">
        
        <MotionDiv direction="left">
          <section className="relative w-full h-[300px] md:h-[400px]">
             <Image
                src="https://placehold.co/1600x900.png"
                alt="Tea plantation landscape"
                layout="fill"
                objectFit="cover"
                data-ai-hint="tea plantation landscape"
              />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 h-full flex flex-col justify-end container mx-auto px-4 md:px-6 pb-12">
                 <Breadcrumb
                    items={[
                      { label: "Home", href: "/" },
                      { label: "Sectors", href: "/sectors" },
                      { label: "Tea Factories", href: "/sectors/tea-factories" },
                    ]}
                  />
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-white mt-4">Our Tea Factories</h1>
            </div>
          </section>
        </MotionDiv>

        <MotionDiv direction="right">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-8 space-y-4">
                        <h2 className="text-3xl font-bold font-headline text-primary">A Legacy of Excellence in Tea</h2>
                        <p className="text-muted-foreground">With a rich heritage rooted in Sri Lanka's esteemed tea culture, KDU Group is a custodian of traditional and sustainable tea manufacturing. Our factories are pillars of their communities, producing world-class teas that honor our island's legacy.</p>
                    </div>
                    <div className="md:col-span-4 grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <Card key={index} className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                                <h3 className="text-3xl font-bold">
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-primary-foreground/80 text-sm mt-1">{stat.label}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
          </section>
        </MotionDiv>

        <MotionDiv direction="left">
          <section className="bg-muted/50 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-headline">Our Factories</h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Explore our network of tea factories, each with its unique character and contribution to our legacy.
                  </p>
              </div>
              <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto hide-scrollbar pb-2">
                       {factories.map((factory) => (
                          <button
                              key={factory.name}
                              onClick={() => setSelectedFactory(factory)}
                              className={cn(
                                "flex-shrink-0 lg:flex-shrink w-full p-4 rounded-lg text-left transition-colors duration-200",
                                selectedFactory.name === factory.name 
                                    ? 'bg-primary text-primary-foreground shadow-lg' 
                                    : 'bg-background hover:bg-primary/10'
                              )}
                          >
                              <p className="font-semibold">{factory.name}</p>
                          </button>
                      ))}
                  </div>
                  <div className="lg:col-span-9">
                      <Card className="p-8 shadow-lg">
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                              <div className="space-y-4">
                                  <Image src={selectedFactory.logo} alt={`${selectedFactory.name} Logo`} width={150} height={75} className="object-contain" />
                                  <h3 className="text-2xl font-bold font-headline mt-4">{selectedFactory.name}</h3>
                                  <p className="text-muted-foreground">{selectedFactory.description}</p>
                                  <Button>Visit Website <ArrowRight className="ml-2 h-4 w-4" /></Button>
                              </div>
                              <div className="aspect-video relative rounded-lg overflow-hidden">
                                  <Image
                                      src={selectedFactory.image}
                                      alt={selectedFactory.name}
                                      fill
                                      className="object-cover"
                                      data-ai-hint={selectedFactory.hint}
                                      key={selectedFactory.name} // Force re-render on change
                                  />
                              </div>
                          </div>
                      </Card>
                  </div>
              </div>
            </div>
          </section>
        </MotionDiv>
        
        <MotionDiv direction="right">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Factory <span className="text-primary">Insights</span></h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Discover the latest news and achievements from our tea sector.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {insights.map((insight, index) => (
                        <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={insight.image}
                                    alt={insight.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={insight.hint}
                                />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-0 p-4">
                                     <h3 className="font-semibold text-lg text-white">{insight.title}</h3>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
          </section>
        </MotionDiv>

        <MotionDiv direction="left">
          <section className="bg-muted/50 py-16 md:py-24">
              <div className="container mx-auto px-4 md:px-6">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold font-headline">Gallery</h2>
                       <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        A visual journey through our tea estates and factories.
                      </p>
                  </div>
                  <ImageGallery images={galleryImages} />
              </div>
          </section>
        </MotionDiv>

      </main>
      <Footer />
    </div>
  );
}
