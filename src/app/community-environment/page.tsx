
"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { MotionDiv } from '@/components/ui/motion';
import { Users, Leaf, HeartHandshake, BookOpen, Droplet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumb from '@/components/layout/breadcrumb';
import { Counter } from '@/components/ui/counter';
import { ImageGallery } from '@/components/ui/image-gallery';

const communityProjects = [
  {
    icon: <HeartHandshake className="w-10 h-10 text-primary" />,
    title: "Empowering Local Farmers",
    description: "Providing resources, training, and fair-trade opportunities to uplift agricultural communities.",
    image: "https://placehold.co/600x400.png",
    hint: "farmers community"
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: "Educational Scholarships",
    description: "Offering scholarships to underprivileged students to ensure access to quality education.",
    image: "https://placehold.co/600x400.png",
    hint: "students graduation"
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Healthcare Outreach",
    description: "Organizing free medical camps and health awareness programs in rural areas.",
    image: "https://placehold.co/600x400.png",
    hint: "medical camp"
  },
];

const environmentProjects = [
  {
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: "Reforestation Drives",
    description: "Planting thousands of trees annually to combat deforestation and restore natural habitats.",
    image: "https://placehold.co/600x400.png",
    hint: "planting trees"
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Renewable Energy",
    description: "Investing in hydro power projects to contribute clean energy to the national grid.",
    image: "https://placehold.co/600x400.png",
    hint: "hydro power dam"
  },
  {
    icon: <Droplet className="w-10 h-10 text-primary" />,
    title: "Water Conservation",
    description: "Implementing water-saving technologies in our factories and promoting conservation awareness.",
    image: "https://placehold.co/600x400.png",
    hint: "water drop leaf"
  },
];

const stats = [
    { value: 50000, label: "Trees Planted", suffix: "+" },
    { value: 1000, label: "Scholarships Awarded", suffix: "+" },
    { value: 10000, label: "Lives Touched via Healthcare", suffix: "+" },
]

const galleryImages = [
    { alt: "Community tree planting event", image: "https://placehold.co/600x400.png", hint: "community planting trees" },
    { alt: "Scholarship award ceremony", image: "https://placehold.co/600x400.png", hint: "students receiving awards" },
    { alt: "Medical check-up at a health camp", image: "https://placehold.co/600x400.png", hint: "doctor checking patient" },
    { alt: "Volunteers at a beach cleanup", image: "https://placehold.co/600x400.png", hint: "beach cleanup" },
    { alt: "Sustainable farming workshop", image: "https://placehold.co/600x400.png", hint: "farming workshop" },
    { alt: "Our team at a community event", image: "https://placehold.co/600x400.png", hint: "corporate volunteers" },
]

export default function CommunityEnvironmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        
        <MotionDiv direction="left">
          <section className="relative w-full h-[300px] md:h-[400px]">
             <Image
                src="https://placehold.co/1600x900.png"
                alt="Lush green landscape"
                layout="fill"
                objectFit="cover"
                data-ai-hint="green forest aerial"
              />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 h-full flex flex-col justify-end container mx-auto px-4 md:px-6 pb-12">
                 <Breadcrumb
                    items={[
                      { label: "Home", href: "/" },
                      { label: "Community & Environment", href: "/community-environment" },
                    ]}
                  />
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-white mt-4">Community & Environment</h1>
            </div>
          </section>
        </MotionDiv>

        <MotionDiv direction="right">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold font-headline text-primary">Nurturing Our Nation and Nature</h2>
                  <p className="text-muted-foreground mt-4">At KDU Group, we believe that corporate success and social responsibility go hand-in-hand. Our commitment extends beyond business to the well-being of our communities and the preservation of our environment. We are dedicated to creating a sustainable future for Sri Lanka through impactful initiatives that empower people and protect our planet.</p>
              </div>
            </div>
          </section>
        </MotionDiv>
        
        <MotionDiv direction="left">
            <section className="py-16 md:py-24 bg-muted/50">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-headline">Our Community Initiatives</h2>
                   <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Investing in our people and communities to build a stronger, more prosperous Sri Lanka.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {communityProjects.map((project, index) => (
                        <Card key={index} className="text-center p-8 border-0 shadow-lg bg-background hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-center mb-4">{project.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground">{project.description}</p>
                        </Card>
                    ))}
                </div>
              </div>
            </section>
        </MotionDiv>

        <MotionDiv direction="right">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <Image 
                        src="https://placehold.co/600x400.png"
                        alt="Environmental conservation"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="reforestation project"
                      />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold font-headline text-primary">Our Environmental Stewardship</h2>
                      <p className="text-muted-foreground">We are committed to minimizing our environmental footprint and promoting sustainable practices across all our operations. From harnessing renewable energy to championing reforestation, we are dedicated to preserving Sri Lanka's natural beauty for generations to come.</p>
                      <ul className="space-y-3 pt-2">
                        {environmentProjects.map((project) => (
                           <li key={project.title} className="flex items-start gap-3">
                            <div className="bg-primary/10 p-2 rounded-full mt-1">{project.icon}</div>
                             <div>
                               <h4 className="font-semibold">{project.title}</h4>
                               <p className="text-muted-foreground text-sm">{project.description}</p>
                             </div>
                           </li>
                        ))}
                      </ul>
                    </div>
                </div>
            </section>
        </MotionDiv>
        
        <MotionDiv direction="left">
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline">Our Impact in Numbers</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <h3 className="text-5xl font-bold">
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-primary-foreground/80 mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MotionDiv>

        <MotionDiv direction="right">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline">Gallery</h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                            A glimpse into our community and environmental initiatives in action.
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

