"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import SubNav from '@/components/layout/sub-nav';

export default function HydroPowerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <SubNav />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl font-bold font-headline mb-8">Hydro Power</h1>
        <Card>
          <CardHeader>
            <CardTitle>Our Hydro Power Sector</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-8">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Hydro Power" 
              width={600} 
              height={400} 
              className="rounded-lg object-cover"
              data-ai-hint="hydro dam"
            />
            <p className="text-lg text-muted-foreground">
              This is the page for Hydro Power. Content for this section will be available soon.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
