
"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { MotionDiv } from '@/components/ui/motion';
import { Users, Target, Milestone, HeartHandshake, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumb from '@/components/layout/breadcrumb';
import { cn } from '@/lib/utils';

const timelineEvents = [
  { year: "1978", event: "Founded K.D.U. & Sons, starting with a single filling station." },
  { year: "1985", event: "Expanded into the tea industry with the acquisition of Galpadithanne Tea Factory." },
  { year: "1995", event: "Entered the hospitality sector with the opening of our first resort." },
  { year: "2005", event: "Launched our first mini hydro power project, marking our commitment to renewable energy." },
  { year: "2015", event: "Established KDU Singapore Pte Ltd, our gateway to international markets." },
  { year: "2023", event: "Celebrated 45 years of diversified growth and community empowerment." },
];

const leadershipTeam = [
  { name: "Mr. Saman K. D. Upasena", title: "Chairman / Managing Director", image: "https://placehold.co/400x400.png", hint: "male portrait business" },
  { name: "Mrs. N. A. Upasena", title: "Director", image: "https://placehold.co/400x400.png", hint: "female portrait business" },
  { name: "Mr. D. C. Upasena", title: "Director", image: "https://placehold.co/400x400.png", hint: "male portrait corporate" },
];

const values = [
    { icon: <HeartHandshake className="w-10 h-10 text-primary" />, title: "Integrity", description: "We uphold the highest standards of integrity in all of our actions." },
    { icon: <Users className="w-10 h-10 text-primary" />, title: "Teamwork", description: "We work together, across boundaries, to meet the needs of our customers." },
    { icon: <TrendingUp className="w-10 h-10 text-primary" />, title: "Performance", description: "We are committed to a culture of high performance and continuous improvement." },
    { icon: <Lightbulb className="w-10 h-10 text-primary" />, title: "Innovation", description: "We nurture a culture of innovation and creativity to solve future challenges." },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        
        <MotionDiv direction="left">
          <section className="relative w-full h-[300px] md:h-[400px]">
             <Image
                src="https://placehold.co/1600x900.png"
                alt="KDU Group corporate building"
                layout="fill"
                objectFit="cover"
                data-ai-hint="modern corporate building"
              />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 h-full flex flex-col justify-end container mx-auto px-4 md:px-6 pb-12">
                 <Breadcrumb
                    items={[
                      { label: "Home", href: "/" },
                      { label: "About Us", href: "/about" },
                    ]}
                  />
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-white mt-4">About KDU Group</h1>
            </div>
          </section>
        </MotionDiv>

        <MotionDiv direction="right">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold font-headline text-primary">Our Story</h2>
                  <p className="text-muted-foreground">From humble beginnings in 1978, KDU Group has grown into one of Sri Lanka’s most diversified and respected conglomerates. Our journey began with a single filling station, driven by a vision to build a business founded on integrity, quality, and a commitment to the community.</p>
                  <p className="text-muted-foreground">Over the decades, we have strategically expanded into key sectors of the Sri Lankan economy, including tea manufacturing, hospitality, renewable energy, and global trade. While our portfolio has grown, our core values have remained unchanged, guiding us to create sustainable value for our shareholders, employees, and the nation.</p>
                </div>
                <div>
                  <Image 
                    src="https://placehold.co/600x400.png"
                    alt="Founder of KDU Group"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="vintage photo founder"
                  />
                </div>
              </div>
            </div>
          </section>
        </MotionDiv>
        
        <MotionDiv direction="left">
            <section id="about" className="relative w-full bg-muted/50 py-16 md:py-24">
                 <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <Target className="w-12 h-12 text-primary"/>
                        <h2 className="text-3xl font-bold font-headline">Purpose</h2>
                        <p className="text-lg text-muted-foreground">"To inspire an inclusive world and a thriving planet."</p>
                    </div>
                    <div className="space-y-4">
                        <Milestone className="w-12 h-12 text-primary"/>
                        <h2 className="text-3xl font-bold font-headline">Vision</h2>
                        <p className="text-lg text-muted-foreground">"To be Sri Lanka’s corporate inspiration at all times."</p>
                    </div>
                    <div className="space-y-4">
                        <Users className="w-12 h-12 text-primary"/>
                        <h2 className="text-3xl font-bold font-headline">Mission</h2>
                        <p className="text-lg text-muted-foreground">"Delivering superior shareholder value by unleashing the full potential of our people and achieving leadership in all our domestic and global businesses."</p>
                    </div>
                </div>
            </section>
        </MotionDiv>
        
         <MotionDiv direction="right">
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-headline">Our Values</h2>
                   <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Our values are the compass that guides our actions and defines our culture.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <Card key={index} className="text-center p-8 border-0 shadow-none bg-transparent">
                            <div className="flex justify-center mb-4">{value.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
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
                <h2 className="text-3xl font-bold font-headline">Our Journey</h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Tracing our path from a single venture to a diversified conglomerate.</p>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
                {timelineEvents.map((item, index) => (
                  <div key={index} className="relative md:w-1/2 md:py-4 flex md:justify-between items-center group">
                    <div className={cn("md:w-1/2", index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto')}>
                        <Card className="p-6">
                           <p className="text-primary font-bold text-lg mb-2">{item.year}</p>
                           <p className="text-muted-foreground">{item.event}</p>
                        </Card>
                    </div>
                     <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 bg-background left-1/2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-primary items-center justify-center">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                     </div>
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
                <h2 className="text-3xl font-bold font-headline">Our Leadership</h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Meet the visionary leaders guiding KDU Group towards a prosperous future.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
                {leadershipTeam.map((member) => (
                  <div key={member.name} className="text-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4 shadow-lg"
                      data-ai-hint={member.hint}
                    />
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </MotionDiv>

      </main>
      <Footer />
    </div>
  );
}
