
"use client";

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SubNav from '@/components/layout/sub-nav';
import Breadcrumb from '@/components/layout/breadcrumb';
import { cn } from '@/lib/utils';
import { Counter } from '@/components/ui/counter';

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
      <main className="flex-grow container mx-auto px-4 md:px-6 -mt-32 relative z-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Sectors", href: "/sectors" },
            { label: "Tea Factories", href: "/tea-factories" },
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

        <Card className="mb-12">
            <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {factories.map((factory) => (
                        <Button
                            key={factory.name}
                            variant="outline"
                            className={cn(
                                "w-full h-24 flex items-center justify-center p-2 border-2 transition-all",
                                selectedFactory.name === factory.name ? "border-primary scale-105 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                            )}
                            onClick={() => setSelectedFactory(factory)}
                        >
                            <Image src={factory.logo} alt={`${factory.name} Logo`} width={100} height={40} className="object-contain" />
                        </Button>
                    ))}
                </div>
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
                        <div className="absolute inset-x-0 bottom-0 bg-primary/80 text-primary-foreground p-4">
                            <h3 className="font-semibold">{insight.title}</h3>
                        </div>
                    </div>
                </Card>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
