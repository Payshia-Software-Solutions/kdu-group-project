
"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { MotionDiv } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Breadcrumb from '@/components/layout/breadcrumb';
import { ArrowRight, Briefcase, Building, Clock, DollarSign, Heart, MapPin, Search, Users } from 'lucide-react';

const cultureItems = [
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Professional Growth",
    description: "We invest in our employees' development through continuous training, mentorship, and opportunities for advancement.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Collaborative Culture",
    description: "Teamwork is at the heart of our success. We foster an environment where diverse minds come together to innovate.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Employee Well-being",
    description: "We prioritize the health and happiness of our team with comprehensive benefits and wellness programs.",
  },
];

const benefits = [
    "Comprehensive Health Insurance",
    "Competitive Salary Packages",
    "Generous Paid Time Off",
    "Professional Development & Training",
    "Retirement & Pension Plans",
    "Employee Wellness Programs",
    "Team Building & Social Events",
    "Discounts on Group Products & Services",
];

const jobOpenings = [
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
  },
  {
    title: "Senior Accountant",
    department: "Finance",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
  },
  {
    title: "Resort Operations Manager",
    department: "Hospitality",
    location: "Weerawila, Sri Lanka",
    type: "Full-time",
  },
  {
    title: "Tea Factory Supervisor",
    department: "Tea Factories",
    location: "Ratnapura, Sri Lanka",
    type: "Full-time",
  },
   {
    title: "Human Resources Executive",
    department: "HR",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
  },
   {
    title: "IT Support Engineer",
    department: "IT",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
  },
];


export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        
        <MotionDiv direction="left">
          <section className="relative w-full h-[300px] md:h-[400px]">
             <Image
                src="https://placehold.co/1600x900.png"
                alt="A diverse team collaborating in a modern office"
                layout="fill"
                objectFit="cover"
                data-ai-hint="diverse office team"
              />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 h-full flex flex-col justify-end container mx-auto px-4 md:px-6 pb-12">
                 <Breadcrumb
                    items={[
                      { label: "Home", href: "/" },
                      { label: "Careers", href: "/careers" },
                    ]}
                  />
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-white mt-4">Find Your Future at KDU Group</h1>
            </div>
          </section>
        </MotionDiv>

        <MotionDiv direction="right">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold font-headline text-primary">Why Join Us?</h2>
                  <p className="text-muted-foreground mt-4">We are more than just a conglomerate; we are a family of passionate individuals dedicated to driving growth and making a positive impact. At KDU Group, you'll find a dynamic environment where your career can thrive.</p>
              </div>
               <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {cultureItems.map((item, index) => (
                        <Card key={index} className="text-center p-8 border-0 shadow-lg bg-background hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
          </section>
        </MotionDiv>
        
        <MotionDiv direction="left">
            <section className="py-16 md:py-24 bg-muted/50">
              <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                 <div>
                      <Image 
                        src="https://placehold.co/600x400.png"
                        alt="Happy employees at a company event"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="happy employees event"
                      />
                    </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold font-headline">Perks & Benefits</h2>
                  <p className="text-muted-foreground">We value our employees and offer a comprehensive benefits package to support their professional and personal lives.</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                           <Heart className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
        </MotionDiv>
        
        <MotionDiv direction="right">
          <section id="openings" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Current Openings</h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Explore our current job opportunities and find where you fit in our growing team.</p>
              </div>
              
              {/* Search and Filter Bar */}
              <div className="mb-8 p-4 bg-muted/50 rounded-lg flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input type="text" placeholder="Search by job title or keyword" className="w-full pl-10 pr-4 py-2 border rounded-md" />
                </div>
                <select className="px-4 py-2 border rounded-md bg-white">
                    <option>All Departments</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Hospitality</option>
                    <option>Tea Factories</option>
                    <option>HR</option>
                    <option>IT</option>
                </select>
                <select className="px-4 py-2 border rounded-md bg-white">
                    <option>All Locations</option>
                    <option>Colombo, Sri Lanka</option>
                    <option>Weerawila, Sri Lanka</option>
                    <option>Ratnapura, Sri Lanka</option>
                </select>
              </div>

              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <Card key={job.title} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6 grid sm:grid-cols-12 gap-4 items-center">
                        <div className="sm:col-span-6">
                            <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground mt-2 text-sm">
                                <div className="flex items-center gap-1.5"><Building className="w-4 h-4" /> {job.department}</div>
                                <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</div>
                                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.type}</div>
                            </div>
                        </div>
                        <div className="sm:col-span-6 sm:text-right">
                            <Button>
                                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                  <p className="text-muted-foreground">Don't see a role that fits? We are always looking for talented people.</p>
                  <Button variant="link" className="text-lg">
                      Get in touch <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
              </div>

            </div>
          </section>
        </MotionDiv>

      </main>
      <Footer />
    </div>
  );
}
