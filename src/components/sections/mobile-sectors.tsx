import Link from "next/link";
import { Building2, Utensils, Droplet, Zap, Gem, Globe, Factory } from "lucide-react";

const sectors = [
    { name: "TEA FACTORIES", icon: <Factory />, href: "/sectors/tea-factories" },
    { name: "HOSPITALITY", icon: <Utensils />, href: "/sectors/hospitality" },
    { name: "PETROLEUM", icon: <Droplet />, href: "/sectors/petroleum" },
    { name: "HYDRO POWER", icon: <Zap />, href: "/sectors/hydro-power" },
    { name: "KDU SINGAPORE", icon: <Globe />, href: "/sectors/kdu-singapore" },
    { name: "GEM MINING", icon: <Gem />, href: "/sectors/gem-mining" },
    { name: "RETAIL MANUFACTURE AND TRADING", icon: <Building2 />, href: "/sectors/retail" },
];

export default function MobileSectors() {
  return (
    <section className="md:hidden py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 font-headline text-primary">Our Sectors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {sectors.slice(0, 6).map((sector) => ( 
                <Link key={sector.name} href={sector.href}>
                    <div className="bg-white border border-border/50 rounded-lg p-4 flex flex-col items-center justify-center text-center text-foreground aspect-square hover:bg-accent/50 transition-colors cursor-pointer h-full shadow-sm">
                        <div className="mb-2 text-primary">{sector.icon}</div>
                        <p className="font-semibold text-xs">{sector.name}</p>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
