
import Link from "next/link";
import { Building2, Utensils, Droplet, Zap, Gem, Globe, Factory, Ship } from "lucide-react";

const sectors = [
    { name: "TEA FACTORIES", icon: <Factory className="w-8 h-8"/>, href: "/sectors/tea-factories" },
    { name: "HOSPITALITY", icon: <Utensils className="w-8 h-8"/>, href: "/sectors/hospitality" },
    { name: "PETROLEUM", icon: <Droplet className="w-8 h-8"/>, href: "/sectors/petroleum" },
    { name: "HYDRO POWER", icon: <Zap className="w-8 h-8"/>, href: "/sectors/hydro-power" },
    { name: "KDU SINGAPORE", icon: <Globe className="w-8 h-8"/>, href: "/sectors/kdu-singapore" },
    { name: "GEM MINING", icon: <Gem className="w-8 h-8"/>, href: "/sectors/gem-mining" },
    { name: "KDU EXPORTS", icon: <Ship className="w-8 h-8"/>, href: "#" },
    { name: "RETAIL MANUFACTURE AND TRADING", icon: <Building2 className="w-8 h-8"/>, href: "/sectors/retail" },
];

export default function MobileSectors() {
  return (
    <section className="md:hidden bg-primary">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-2 gap-px bg-primary-foreground/20 border-t border-l border-primary-foreground/20">
            {sectors.map((sector) => ( 
                <Link key={sector.name} href={sector.href}>
                    <div className="bg-primary border-b border-r border-primary-foreground/20 p-4 flex flex-col items-center justify-center text-center text-primary-foreground aspect-square hover:bg-primary-foreground/10 transition-colors cursor-pointer h-full">
                        <div className="mb-2">{sector.icon}</div>
                        <p className="font-semibold text-xs leading-tight uppercase">{sector.name}</p>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
