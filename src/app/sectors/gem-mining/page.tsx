
"use client";

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SubNav from '@/components/layout/sub-nav';
import Breadcrumb from '@/components/layout/breadcrumb';
import { Counter } from '@/components/ui/counter';
import { ArrowRight } from 'lucide-react';

const mines = [
  {
    name: "Ratnapura Sapphire Mine",
    description: "Our primary mine, located in the gem-rich region of Ratnapura, is renowned for producing world-class blue sapphires of exceptional color and clarity.",
    image: "https://placehold.co/600x400.png",
    hint: "sapphire gem uncut",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
  {
    name: "Elahera Gem Fields",
    description: "This location is known for a diverse range of precious stones, including garnets, zircons, and tourmalines, contributing significantly to our portfolio.",
    image: "https://placehold.co/600x400.png",
    hint: "assorted rough gemstones",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
];

const insights = [
    {
        title: "Record-Breaking Blue Sapphire Discovery",
        image: "https://placehold.co/600x400.png",
        hint: "large blue sapphire"
    },
    {
        title: "Commitment to Ethical Mining Practices",
        image: "https://placehold.co/600x400.png",
        hint: "mine safety inspection"
    },
    {
        title: "New Technology Boosts Extraction Efficiency",
        image: "https://placehold.co/600x400.png",
        hint: "modern mining equipment"
    },
    {
        title: "Supporting Local Mining Communities",
        image: "https://placehold.co/600x400.png",
        hint: "miners community meeting"
    }
]

const galleryImages = [
    {
        alt: "Gemstone washing and sorting",
        image: "https://placehold.co/600x400.png",
        hint: "gemstone washing"
    },
    {
        alt: "A rough, uncut sapphire",
        image: "https://placehold.co/600x400.png",
        hint: "rough sapphire"
    },
    {
        alt: "Miners working in a gem pit",
        image: "https://placehold.co/600x400.png",
        hint: "gem miners working"
    },
    {
        alt: "Gemologist inspecting a stone",
        image: "https://placehold.co/600x400.png",
        hint: "gemologist inspection"
    },
    {
        alt: "Cut and polished gemstones",
        image: "https://placehold.co/600x400.png",
        hint: "polished gemstones"
    },
    {
        alt: "A collection of various gems",
        image: "https://placehold.co/600x400.png",
        hint: "gem collection"
    },
    {
        alt: "Gem mining landscape",
        image: "https://placehold.co/600x400.png",
        hint: "gem mine landscape"
    },
    {
        alt: "Finished jewelry piece",
        image: "https://placehold.co/600x400.png",
        hint: "sapphire necklace"
    },
]

const stats = [
    {
        value: 500000,
        label: "Carats Mined Annually",
        suffix: " ct"
    },
    {
        value: 5,
        label: "Active Mining Sites",
        suffix: ""
    }
]

export default function GemMiningPage() {
  const [selectedMine, setSelectedMine] = useState(mines[0]);

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
                { label: "Gem Mining", href: "/sectors/gem-mining" },
              ]}
            />
            <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="md:col-span-2 bg-background p-8 rounded-lg">
                    <h1 className="text-4xl font-bold font-headline mb-4 text-primary">Gem Mining</h1>
                    <p className="text-lg text-muted-foreground">
                        KDU Group is a key player in Sri Lanka's legendary gem industry. Our mining operations unearth some of the world's most sought-after precious stones, adhering to ethical practices and sustainable methods that respect both the environment and our communities.
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
                  alt="Gem Mining"
                  width={1200}
                  height={400}
                  className="rounded-lg object-cover w-full"
                  data-ai-hint="gemstone mine aerial"
                />
            </div>
        </div>
      </div>

      <section className="bg-muted/50 w-full py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {mines.map((mine) => (
              <div
                key={mine.name}
                onClick={() => setSelectedMine(mine)}
                className={`cursor-pointer p-2 bg-white border-2 rounded-lg ${selectedMine.name === mine.name ? 'border-primary' : 'border-transparent'}`}
              >
                <Image src={mine.logo} alt={`${mine.name} Logo`} width={160} height={80} className="object-contain h-20 mx-auto" />
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex flex-col items-center text-center">
              <Image src={selectedMine.logo} alt={`${selectedMine.name} Logo`} width={150} height={75} className="object-contain mb-4" />
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="#">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="md:col-span-5">
              <h3 className="text-2xl font-bold font-headline mb-2">{selectedMine.name}</h3>
              <p className="text-muted-foreground">{selectedMine.description}</p>
            </div>
            <div className="md:col-span-4">
              <Image
                src={selectedMine.image}
                alt={selectedMine.name}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full"
                data-ai-hint={selectedMine.hint}
                key={selectedMine.name}
              />
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 md:px-6">
        <section className="my-16 md:my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Sector <span className="bg-muted px-2">Insights</span>
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

    