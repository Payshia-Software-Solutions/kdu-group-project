

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
import { ImageGallery } from '@/components/ui/image-gallery';

const outlets = [
  {
    name: "Tea Jar Lounge",
    description: "Our premium retail experience, offering a curated selection of our finest teas and related products in an elegant, modern setting.",
    image: "https://placehold.co/600x400.png",
    hint: "modern tea lounge",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
  {
    name: "Tea Jar by the Lake Weerawila",
    description: "A scenic retail outlet combining beautiful views with our exceptional range of teas, creating a unique shopping destination.",
    image: "https://placehold.co/600x400.png",
    hint: "cafe by lake",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
];

const insights = [
    {
        title: "Expansion of 'Tea Jar' Brand to a New City",
        image: "https://placehold.co/600x400.png",
        hint: "new store opening"
    },
    {
        title: "Launch of E-Commerce Platform for Retail",
        image: "https://placehold.co/600x400.png",
        hint: "online shopping website"
    },
    {
        title: "Partnering with Local Artisans for Unique Products",
        image: "https://placehold.co/600x400.png",
        hint: "local artisan crafts"
    },
    {
        title: "Best Retail Experience Award 2023",
        image: "https://placehold.co/600x400.png",
        hint: "retail award"
    }
]

const galleryImages = [
    {
        alt: "Interior of the Tea Jar Lounge",
        image: "https://placehold.co/600x400.png",
        hint: "tea lounge interior"
    },
    {
        alt: "Customers shopping for tea",
        image: "https://placehold.co/600x400.png",
        hint: "customers shopping"
    },
    {
        alt: "A variety of tea products on display",
        image: "https://placehold.co/600x400.png",
        hint: "tea product display"
    },
    {
        alt: "Manufacturing process of a retail good",
        image: "https://placehold.co/600x400.png",
        hint: "factory manufacturing"
    },
    {
        alt: "A beautifully packaged product",
        image: "https://placehold.co/600x400.png",
        hint: "product packaging"
    },
    {
        alt: "Global trading and logistics network",
        image: "https://placehold.co/600x400.png",
        hint: "shipping containers port"
    },
    {
        alt: "A happy customer with our product",
        image: "https://placehold.co/600x400.png",
        hint: "happy customer"
    },
    {
        alt: "Exterior of a retail store",
        image: "https://placehold.co/600x400.png",
        hint: "storefront"
    },
]

const stats = [
    {
        value: 20,
        label: "Retail Outlets",
        suffix: "+"
    },
    {
        value: 500,
        label: "Products Manufactured",
        suffix: "+"
    }
]

export default function RetailPage() {
  const [selectedOutlet, setSelectedOutlet] = useState(outlets[0]);

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
      
      <main className="flex-grow">
        <div className="w-full relative z-20 -mt-32">
            <div className="container mx-auto px-4 md:px-6">
                <Breadcrumb
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Sectors", href: "/sectors" },
                    { label: "Retail & Trading", href: "/sectors/retail" },
                  ]}
                />
                <div className="grid md:grid-cols-3 gap-8 my-12">
                    <div className="md:col-span-2 bg-background p-8 rounded-lg">
                        <h1 className="text-4xl font-bold font-headline mb-4 text-primary">Retail Manufacture and Trading</h1>
                        <p className="text-lg text-muted-foreground">
                            Our Retail, Manufacture, and Trading division brings quality products to consumers. From our signature "Tea Jar" lounges to a diverse portfolio of manufactured goods, we are committed to excellence in quality and customer experience, supported by a robust global trading network.
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
                      alt="Retail"
                      width={1200}
                      height={400}
                      className="rounded-lg object-cover w-full"
                      data-ai-hint="busy shopping street"
                    />
                </div>
            </div>
        </div>

        <section className="bg-muted/50 w-full py-12">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {outlets.map((outlet) => (
                  <div
                    key={outlet.name}
                    onClick={() => setSelectedOutlet(outlet)}
                    className={`cursor-pointer p-2 bg-white border-2 rounded-lg ${selectedOutlet.name === outlet.name ? 'border-primary' : 'border-transparent'}`}
                  >
                    <Image src={outlet.logo} alt={`${outlet.name} Logo`} width={160} height={80} className="object-contain h-20 mx-auto" />
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white p-8 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-3 flex flex-col items-center text-center">
                  <Image src={selectedOutlet.logo} alt={`${selectedOutlet.name} Logo`} width={150} height={75} className="object-contain mb-4" />
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href="#">
                      Visit Outlet <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-2xl font-bold font-headline mb-2">{selectedOutlet.name}</h3>
                  <p className="text-muted-foreground">{selectedOutlet.description}</p>
                </div>
                <div className="md:col-span-4">
                  <Image
                    src={selectedOutlet.image}
                    alt={selectedOutlet.name}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                    data-ai-hint={selectedOutlet.hint}
                    key={selectedOutlet.name}
                  />
                </div>
              </div>
            </div>
        </section>

        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
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
            </div>
        </section>

        <section className="bg-muted/50 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Gallery</h2>
                </div>
                <ImageGallery images={galleryImages} />
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

    
