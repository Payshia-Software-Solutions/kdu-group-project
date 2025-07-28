import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Leaf, Fuel, Gem, Utensils, Zap, Building2, Globe } from "lucide-react";

const sectors = [
  {
    name: "Tea Factories",
    icon: <Leaf className="w-6 h-6 text-primary" />,
    subItems: ["Eheliyagoda", "Ganthuna", "Halpe", "Karawita"],
  },
  {
    name: "Hospitality",
    icon: <Utensils className="w-6 h-6 text-primary" />,
    subItems: ["Weerawila Rajawarna Resort"],
  },
  {
    name: "Petrolium",
    icon: <Fuel className="w-6 h-6 text-primary" />,
    subItems: ["Allied Lube", "Distributor for Indian Oil Corporation"],
  },
  {
    name: "Hydro Power",
    icon: <Zap className="w-6 h-6 text-primary" />,
    subItems: ["Operational Power Plants", "Upcoming Projects"],
  },
  {
    name: "Gem Mining",
    icon: <Gem className="w-6 h-6 text-primary" />,
    subItems: ["KDU Mining", "Gem Paradise"],
  },
  {
    name: "Retail Manufacture and Trading",
    icon: <Building2 className="w-6 h-6 text-primary" />,
    subItems: ["KDU Trading", "Retail Outlets"],
  },
  {
    name: "Global",
    icon: <Globe className="w-6 h-6 text-primary" />,
    subItems: ["KDU Singapore"],
  },
];

export default function SectorTree() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wide">OUR BUSINESS SECTORS</p>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2">A Diversified Conglomerate</h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Operating across multiple distinct business sectors, the KDU Group stands as one of Sri Lanka’s most diversified conglomerates. Explore our areas of operation below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {sectors.map((sector) => (
              <AccordionItem key={sector.name} value={sector.name}>
                <AccordionTrigger className="text-xl hover:no-underline font-headline py-6">
                   <div className="flex items-center gap-4">
                     {sector.icon}
                     <span>{sector.name}</span>
                   </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14">
                  <ul className="list-disc space-y-2 text-muted-foreground text-base">
                    {sector.subItems.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
