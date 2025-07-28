
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

const plants = [
  {
    name: "K.D.U. Mini Hydro",
    description: "A state-of-the-art mini hydro power plant that harnesses the power of natural water flow to generate clean, renewable energy for the national grid.",
    image: "https://placehold.co/600x400.png",
    hint: "hydro power turbine",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
];

const insights = [
    {
        title: "Exceeding Annual Energy Production Targets",
        image: "https://placehold.co/600x400.png",
        hint: "energy production chart"
    },
    {
        title: "Recognized for Environmental Conservation Efforts",
        image: "https://placehold.co/600x400.png",
        hint: "reforestation project"
    },
    {
        title: "ISO 14001 Certification for Environmental Management",
        image: "https://placehold.co/600x400.png",
        hint: "environmental award"
    },
    {
        title: "Community Electrification Projects",
        image: "https://placehold.co/600x400.png",
        hint: "village solar panels"
    }
]

const galleryImages = [
    {
        alt: "Hydro power dam and reservoir",
        image: "https://placehold.co/600x400.png",
        hint: "hydro dam reservoir"
    },
    {
        alt: "Inside the hydro power turbine hall",
        image: "https://placehold.co/600x400.png",
        hint: "turbine hall"
    },
    {
        alt: "Control room of the power plant",
        image: "https://placehold.co/600x400.png",
        hint: "power plant control room"
    },
    {
        alt: "Engineers monitoring the system",
        image: "https://placehold.co/600x400.png",
        hint: "engineers at work"
    },
    {
        alt: "Transmission lines from the plant",
        image: "https://placehold.co/600x400.png",
        hint: "power transmission lines"
    },
    {
        alt: "Lush greenery surrounding the plant",
        image: "https://placehold.co/600x400.png",
        hint: "nature around dam"
    },
    {
        alt: "Water flowing through the spillway",
        image: "https://placehold.co/600x400.png",
        hint: "dam spillway"
    },
    {
        alt: "Aerial view of the hydro power facility",
        image: "https://placehold.co/600x400.png",
        hint: "hydro plant aerial view"
    },
]

const stats = [
    {
        value: 10,
        label: "Megawatts Generated",
        suffix: " MW"
    },
    {
        value: 5000,
        label: "Homes Powered",
        suffix: "+"
    }
]

export default function HydroPowerPage() {
  const [selectedPlant, setSelectedPlant] = useState(plants[0]);

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
                { label: "Hydro Power", href: "/sectors/hydro-power" },
              ]}
            />
            <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="md:col-span-2 bg-background p-8 rounded-lg">
                    <h1 className="text-4xl font-bold font-headline mb-4 text-primary">Hydro Power</h1>
                    <p className="text-lg text-muted-foreground">
                        As part of our commitment to a sustainable future, KDU Group invests in renewable energy. Our hydro power division focuses on generating clean electricity, contributing to Sri Lanka's energy security while minimizing our environmental footprint.
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
                  alt="Hydro Power"
                  width={1200}
                  height={400}
                  className="rounded-lg object-cover w-full"
                  data-ai-hint="hydro dam landscape"
                />
            </div>
        </div>
      </div>

      <section className="bg-muted/50 w-full py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {plants.map((plant) => (
              <div
                key={plant.name}
                onClick={() => setSelectedPlant(plant)}
                className={`cursor-pointer p-2 bg-white border-2 rounded-lg ${selectedPlant.name === plant.name ? 'border-primary' : 'border-transparent'}`}
              >
                <Image src={plant.logo} alt={`${plant.name} Logo`} width={160} height={80} className="object-contain h-20 mx-auto" />
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex flex-col items-center text-center">
              <Image src={selectedPlant.logo} alt={`${selectedPlant.name} Logo`} width={150} height={75} className="object-contain mb-4" />
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="#">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="md:col-span-5">
              <h3 className="text-2xl font-bold font-headline mb-2">{selectedPlant.name}</h3>
              <p className="text-muted-foreground">{selectedPlant.description}</p>
            </div>
            <div className="md:col-span-4">
              <Image
                src={selectedPlant.image}
                alt={selectedPlant.name}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full"
                data-ai-hint={selectedPlant.hint}
                key={selectedPlant.name}
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

    