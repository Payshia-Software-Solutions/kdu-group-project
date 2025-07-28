import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HelpCircle, Building2, Utensils, Droplet, Zap, Gem, Globe, Factory } from "lucide-react";

const sectors = [
    { name: "TEA FACTORIES", icon: <Factory /> },
    { name: "HOSPITALITY", icon: <Utensils /> },
    { name: "PETROLIUM", icon: <Droplet /> },
    { name: "HYDRO POWER", icon: <Zap /> },
    { name: "KDU SINGAPORE", icon: <Globe /> },
    { name: "GEM MINING", icon: <Gem /> },
    { name: "RETAIL MANUFACTURE AND TRADING", icon: <Building2 /> },
];

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Man holding phone with QR code"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        data-ai-hint="man phone"
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 md:px-6 h-full">
        <div className="grid md:grid-cols-2 h-full items-center">
          <div className="text-white text-left">
            <h1 className="text-6xl font-bold font-headline sm:text-7xl md:text-8xl drop-shadow-lg">
              KDU GROUP
            </h1>
            <div className="mt-8 flex flex-col items-start gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold h-14 pr-2">
                <Link href="#about" className="flex items-center gap-4">
                  <span>Explore Our Corporate Profile</span>
                  <span className="bg-black/20 rounded-full p-2">
                    <HelpCircle className="h-6 w-6" />
                  </span>
                </Link>
              </Button>
              <div className="w-48 h-48 mt-4">
                  <Image src="https://placehold.co/200x200.png" alt="QR Code" width={200} height={200} data-ai-hint="qr code" />
              </div>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-4">
            {sectors.map((sector) => (
              <div key={sector.name} className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex flex-col items-center justify-center text-center text-white aspect-square hover:bg-black/50 transition-colors">
                <div className="mb-2">{sector.icon}</div>
                <p className="font-semibold text-sm">{sector.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
