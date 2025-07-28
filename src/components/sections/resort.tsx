import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "Located in proximity to national parks",
  "Less than 20 mins from Mattala Expressway",
  "78 guest rooms and suites",
  "Grand ballroom (600 capacity)",
  "Stunning lake backdrop",
  "24/7 wellness spa",
];

export default function Resort() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 md:hidden">
         <Image
          src="http://content-provider.payshia.com/kdu-group/dth-optimized.webp"
          alt="Weerawila Rajawarna Resort"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          className="z-0"
        />
      </div>
      <div className="hidden md:block absolute inset-0">
        <Image
          src="http://content-provider.payshia.com/kdu-group/dth-optimized.webp"
          alt="Weerawila Rajawarna Resort"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/70 to-primary z-10"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-24 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            {/* This column is intentionally left blank to show the background image on desktop */}
          </div>
          <div className="bg-primary/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none rounded-lg text-white space-y-4 p-8 md:p-8">
            <h2 className="text-4xl font-bold font-headline mb-4">Weerawila Rajawarna Resort</h2>
            <p className="text-primary-foreground/90">
              Experience unparalleled hospitality where every guest is welcomed with warm cookies and genuine Sri Lankan warmth. Our commitment to community service and exceptional guest experiences creates lasting memories.
            </p>
            <p className="text-primary-foreground/90">
              Immerse yourself in a sanctuary where luxury meets nature, creating an emotional connection that transcends ordinary hospitality. Our resort offers a perfect blend of modern comfort and authentic Sri Lankan culture.
            </p>
             <p className="text-primary-foreground/90">
              Discover tranquility amidst lush landscapes while enjoying world-class amenities designed to rejuvenate your mind, body, and soul in this tropical paradise.
            </p>
            <ul className="space-y-2 mt-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild className="bg-yellow-400 text-primary-foreground hover:bg-yellow-500 font-bold">
                <Link href="#">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}