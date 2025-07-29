
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Factory, Utensils, Droplet, Zap, Gem, Globe, Building2, Ship, X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sectorLinks } from "@/lib/sector-data";
import { cn } from "@/lib/utils";

const desktopSectors = [
    { name: "TEA FACTORIES", icon: <Factory className="w-6 h-6" />, href: "/sectors/tea-factories" },
    { name: "HOSPITALITY", icon: <Utensils className="w-6 h-6" />, href: "/sectors/hospitality" },
    { name: "PETROLEUM", icon: <Droplet className="w-6 h-6" />, href: "/sectors/petroleum" },
    { name: "HYDRO POWER", icon: <Zap className="w-6 h-6" />, href: "/sectors/hydro-power" },
    { name: "KDU SINGAPORE", icon: <Globe className="w-6 h-6" />, href: "/sectors/kdu-singapore" },
    { name: "GEM MINING", icon: <Gem className="w-6 h-6" />, href: "/sectors/gem-mining" },
    { name: "RETAIL MANUFACTURE AND TRADING", icon: <Building2 className="w-6 h-6" />, href: "/sectors/retail" },
];

export default function Hero() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="home" className="relative w-full flex items-center justify-center min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-108px)]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="https://content-provider.payshia.com/kdu-group/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 md:px-6 h-full">
        <div className="grid md:grid-cols-2 h-full items-center gap-8">
          <div className="text-white text-left">
            <Image 
                src="http://content-provider.payshia.com/kdu-group/KDU-group.webp" 
                alt="KDU Group Logo" 
                width={80} 
                height={80} 
                className="mb-4"
            />
            <h1 className="text-5xl font-bold font-headline sm:text-6xl md:text-7xl drop-shadow-lg">
              Growing Ever Stronger
            </h1>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold h-auto px-6 py-3 text-lg">
                <Link href="#about" className="flex items-center gap-4">
                    <span>Explore Our Corporate Profile</span>
                    <span className="bg-white/20 rounded-full p-2">
                        <ArrowRight className="h-5 w-5" />
                    </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-3">
            {desktopSectors.map((sector) => (
              <Link key={sector.name} href={sector.href}>
                <div className="group bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3 flex items-center gap-4 text-white hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="text-white">{sector.icon}</div>
                  <p className="font-semibold text-sm tracking-wider">{sector.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
       {/* Mobile-only sector browser */}
      <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-full px-4">
        <Button 
            onClick={() => setMobileMenuOpen(true)}
            className="w-full bg-black/40 backdrop-blur-sm text-white border border-white/30 h-14 text-base font-semibold"
        >
          Browse Our Sectors
          <ChevronUp className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed inset-0 bg-primary z-50 flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b border-primary-foreground/20">
              <h3 className="font-headline text-2xl text-primary-foreground">Our Sectors</h3>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="text-primary-foreground hover:bg-primary-foreground/10">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-grow overflow-y-auto p-4">
                <div className="flex flex-col gap-3">
                    {sectorLinks.filter(s => s.label !== 'All Sectors').map((sector) => {
                        const Icon = sector.icon;
                        return (
                            <Link key={sector.label} href={sector.href} onClick={() => setMobileMenuOpen(false)}>
                                <div className="group bg-primary-foreground/10 p-4 rounded-lg flex items-center gap-4 text-primary-foreground hover:bg-primary-foreground/20 transition-colors">
                                    <Icon className="w-8 h-8"/>
                                    <span className="text-lg font-semibold">{sector.label}</span>
                                    <ArrowRight className="ml-auto h-6 w-6 opacity-70 group-hover:opacity-100" />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
