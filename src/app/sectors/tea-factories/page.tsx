
"use client";

import { useState, useRef } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SubNav from '@/components/layout/sub-nav';
import Breadcrumb from '@/components/layout/breadcrumb';
import { Counter } from '@/components/ui/counter';
import { ArrowRight } from 'lucide-react';

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
    {
        alt: "Tea plucking in progress",
        image: "https://placehold.co/600x400.png",
        hint: "tea plucking workers"
    },
    {
        alt: "Withering troughs at a tea factory",
        image: "https://placehold.co/600x400.png",
        hint: "tea withering"
    },
    {
        alt: "Tea rolling machines",
        image: "https://placehold.co/600x400.png",
        hint: "tea rolling machine"
    },
    {
        alt: "Fermentation room in a tea factory",
        image: "https://placehold.co/600x400.png",
        hint: "tea fermentation"
    },
    {
        alt: "Tea drying equipment",
        image: "https://placehold.co/600x400.png",
        hint: "tea drying machine"
    },
    {
        alt: "A master tea taster at work",
        image: "https://placehold.co/600x400.png",
        hint: "tea tasting expert"
    },
    {
        alt: "Packaged tea ready for export",
        image: "https://placehold.co/600x400.png",
        hint: "tea packaging"
    },
    {
        alt: "Lush green tea estate landscape",
        image: "https://placehold.co/600x400.png",
        hint: "tea estate landscape"
    },
]

const stats = [
    {
        value: 10000,
        label: "Annual Tea Production (MT)",
        suffix: " MT"
    },
    {
        value: 25,
        label: "Estates Managed",
        suffix: ""
    }
]

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
      
      <div className="w-full relative z-20 -mt-32">
        <div className="container mx-auto px-4 md:px-6">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Sectors", href: "/sectors" },
                { label: "Tea Factories", href: "/sectors/tea-factories" },
              ]}
            />
            <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="md:col-span-2 bg-background p-8 rounded-lg">
                    <h1 className="text-4xl font-bold font-headline mb-4 text-primary">Our Tea Factories</h1>
                    <p className="text-lg text-muted-foreground">
                        With a rich heritage rooted in Sri Lanka's esteemed tea culture, KDU Group is a custodian of traditional and sustainable tea manufacturing. Our factories are pillars of their communities, producing world-class teas that honor our island's legacy.
                    </p>
                </div>
                 <div className="space-y-4">
                    {stats.map((stat, index) => (
                        <Card key={index} className="bg-primary text-primary-foreground p-6 rounded-lg">
                            <h3 className="text-4xl font-bold">
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-primary-foreground/80">{stat.label}</p>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="mb-12">
                <Image 
                  src="https://placehold.co/1200x400.png"
                  alt="Tea Factories"
                  width={1200}
                  height={400}
                  className="rounded-lg object-cover w-full"
                  data-ai-hint="tea plantation landscape"
                />
            </div>
        </div>
      </div>

      <section className="bg-muted/50 w-full py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {factories.map((factory) => (
              <div
                key={factory.name}
                onClick={() => setSelectedFactory(factory)}
                className={`cursor-pointer p-2 bg-white border-2 rounded-lg ${selectedFactory.name === factory.name ? 'border-primary' : 'border-transparent'}`}
              >
                <Image src={factory.logo} alt={`${factory.name} Logo`} width={160} height={80} className="object-contain h-20 mx-auto" />
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex flex-col items-center text-center">
              <Image src={selectedFactory.logo} alt={`${selectedFactory.name} Logo`} width={150} height={75} className="object-contain mb-4" />
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="#">
                  Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="md:col-span-5">
              <h3 className="text-2xl font-bold font-headline mb-2">{selectedFactory.name}</h3>
              <p className="text-muted-foreground">{selectedFactory.description}</p>
            </div>
            <div className="md:col-span-4">
              <Image
                src={selectedFactory.image}
                alt={selectedFactory.name}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full"
                data-ai-hint={selectedFactory.hint}
                key={selectedFactory.name}
              />
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 md:px-6">
        <section className="my-16 md:my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Factory <span className="bg-muted px-2">Insights</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative h-64 w-full">
                        <Image
                            src={insight.image}
                            alt={insight.title}
                            fill
                            className="object-cover"
                            data-ai-hint={insight.hint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                     <div className="bg-white p-4">
                        <h3 className="font-semibold text-lg">{insight.title}</h3>
                    </div>
                </Card>
            ))}
          </div>
        </section>
        <section className="my-16 md:my-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Gallery</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((item, index) => (
                    <div key={index} className="overflow-hidden rounded-lg group">
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full aspect-square group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={item.hint}
                        />
                    </div>
                ))}
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

    