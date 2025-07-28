import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HelpCircle, Building2, Utensils, Droplet, Zap, Gem, Globe, Factory } from "lucide-react";

const sectors = [
    { name: "TEA FACTORIES", icon: <Factory />, href: "/sectors/tea-factories" },
    { name: "HOSPITALITY", icon: <Utensils />, href: "/sectors/hospitality" },
    { name: "PETROLEUM", icon: <Droplet />, href: "/sectors/petroleum" },
    { name: "HYDRO POWER", icon: <Zap />, href: "/sectors/hydro-power" },
    { name: "KDU SINGAPORE", icon: <Globe />, href: "/sectors/kdu-singapore" },
    { name: "GEM MINING", icon: <Gem />, href: "/sectors/gem-mining" },
    { name: "RETAIL MANUFACTURE AND TRADING", icon: <Building2 />, href: "/sectors/retail" },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full flex items-center justify-center min-h-[calc(100vh-112px)] py-8">
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
            <div className="mb-4">
                <Image src="http://content-provider.payshia.com/kdu-group/KDU-group.webp" alt="KDU Group Logo" width={100} height={100} />
            </div>
            <h1 className="text-5xl font-bold font-headline sm:text-6xl md:text-7xl drop-shadow-lg">
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
            </div>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-4">
            {sectors.map((sector) => (
              <Link key={sector.name} href={sector.href}>
                <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex flex-col items-center justify-center text-center text-white aspect-square hover:bg-black/50 transition-colors cursor-pointer h-full">
                  <div className="mb-2">{sector.icon}</div>
                  <p className="font-semibold text-sm">{sector.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile-only sector grid */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {sectors.slice(0, 6).map((sector) => ( // show first 6 for a cleaner mobile look
                <Link key={sector.name} href={sector.href}>
                    <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex flex-col items-center justify-center text-center text-white aspect-square hover:bg-black/50 transition-colors cursor-pointer h-full">
                        <div className="mb-2">{sector.icon}</div>
                        <p className="font-semibold text-xs">{sector.name}</p>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}