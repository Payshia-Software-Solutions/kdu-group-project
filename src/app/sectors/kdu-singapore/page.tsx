

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
import { MotionContainer, MotionDiv } from '@/components/ui/motion';

const offices = [
  {
    name: "KDU Singapore Pte Ltd",
    description: "Our international hub in Singapore facilitates global trade, investment, and strategic partnerships, connecting Sri Lanka's potential with the world market.",
    image: "https://placehold.co/600x400.png",
    hint: "modern office building",
    logo: "http://content-provider.payshia.com/kdu-group/KDU-group.webp",
  },
];

const insights = [
    {
        title: "Facilitating Major International Trade Deal",
        image: "https://placehold.co/600x400.png",
        hint: "business handshake"
    },
    {
        title: "Expanding Operations in Southeast Asia",
        image: "https://placehold.co/600x400.png",
        hint: "map southeast asia"
    },
    {
        title: "Hosting Global Investor Summit",
        image: "https://placehold.co/600x400.png",
        hint: "business conference"
    },
    {
        title: "Forging Strategic Alliances with Tech Firms",
        image: "https://placehold.co/600x400.png",
        hint: "technology park"
    }
]

const galleryImages = [
    {
        alt: "Singapore skyline at night",
        image: "https://placehold.co/600x400.png",
        hint: "singapore skyline night"
    },
    {
        alt: "Our modern office interior in Singapore",
        image: "https://placehold.co/600x400.png",
        hint: "modern office interior"
    },
    {
        alt: "A busy shipping port in Singapore",
        image: "https://placehold.co/600x400.png",
        hint: "shipping port"
    },
    {
        alt: "International business meeting",
        image: "https://placehold.co/600x400.png",
        hint: "international meeting"
    },
    {
        alt: "The Merlion statue",
        image: "https://placehold.co/600x400.png",
        hint: "singapore merlion"
    },
    {
        alt: "Gardens by the Bay",
        image: "https://placehold.co/600x400.png",
        hint: "gardens by the bay"
    },
    {
        alt: "Our team in Singapore",
        image: "https://placehold.co/600x400.png",
        hint: "corporate team photo"
    },
    {
        alt: "Business district in Singapore",
        image: "https://placehold.co/600x400.png",
        hint: "business district"
    },
]

const stats = [
    {
        value: 50,
        label: "Global Partnerships",
        suffix: "+"
    },
    {
        value: 10,
        label: "Countries Reached",
        suffix: "+"
    }
]

export default function KduSingaporePage() {
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <SubNav />
      <MotionContainer>
        <MotionDiv>
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
        </MotionDiv>
        
        <main className="flex-grow">
          <MotionDiv>
            <div className="w-full relative z-20 -mt-32">
                <div className="container mx-auto px-4 md:px-6">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Sectors", href: "/sectors" },
                        { label: "KDU Singapore", href: "/sectors/kdu-singapore" },
                      ]}
                    />
                    <div className="grid md:grid-cols-3 gap-8 my-12">
                        <div className="md:col-span-2 bg-background p-8 rounded-lg">
                            <h1 className="text-4xl font-bold font-headline mb-4 text-primary">KDU Singapore</h1>
                            <p className="text-lg text-muted-foreground">
                                Our gateway to the world, KDU Singapore is at the forefront of our global expansion. This strategic office drives international trade, builds partnerships, and links our domestic operations to the vibrant markets of Southeast Asia and beyond.
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
                          alt="KDU Singapore"
                          width={1200}
                          height={400}
                          className="rounded-lg object-cover w-full"
                          data-ai-hint="singapore city business"
                        />
                    </div>
                </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <section className="bg-muted/50 w-full py-12">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                    {offices.map((office) => (
                      <div
                        key={office.name}
                        onClick={() => setSelectedOffice(office)}
                        className={`cursor-pointer p-2 bg-white border-2 rounded-lg ${selectedOffice.name === office.name ? 'border-primary' : 'border-transparent'}`}
                      >
                        <Image src={office.logo} alt={`${office.name} Logo`} width={160} height={80} className="object-contain h-20 mx-auto" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-white p-8 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-3 flex flex-col items-center text-center">
                      <Image src={selectedOffice.logo} alt={`${selectedOffice.name} Logo`} width={150} height={75} className="object-contain mb-4" />
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <a href="#">
                          Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="md:col-span-5">
                      <h3 className="text-2xl font-bold font-headline mb-2">{selectedOffice.name}</h3>
                      <p className="text-muted-foreground">{selectedOffice.description}</p>
                    </div>
                    <div className="md:col-span-4">
                      <Image
                        src={selectedOffice.image}
                        alt={selectedOffice.name}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover w-full"
                        data-ai-hint={selectedOffice.hint}
                        key={selectedOffice.name}
                      />
                    </div>
                  </div>
                </div>
            </section>
          </MotionDiv>

          <MotionDiv>
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline">
                          Global <span className="bg-muted px-2">Insights</span>
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
          </MotionDiv>

          <MotionDiv>
            <section className="bg-muted/50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline">Gallery</h2>
                    </div>
                    <ImageGallery images={galleryImages} />
                </div>
            </section>
          </MotionDiv>
        </main>
      </MotionContainer>
      
      <Footer />
    </div>
  );
}
