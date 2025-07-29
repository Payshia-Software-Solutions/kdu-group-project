import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Leaf, Fuel, Gem, Utensils, Zap, Building2, Globe, Ship } from "lucide-react";
import Image from "next/image";

const sectors = [
  {
    name: "Tea Factories",
    icon: <Leaf className="w-6 h-6 text-primary" />,
    subItems: [
      "Galpadithanne Tea Factory",
      "Kuttapitiya Tea Estate and Factory",
      "New Kendagastenna Tea Factory",
      "Peak View Tea Factory",
      "Matuwagala Tea Factory",
    ],
  },
  {
    name: "Hospitality",
    icon: <Utensils className="w-6 h-6 text-primary" />,
    subItems: [
      "Rajawarana Resort, Weerawila",
      "Silver Ray Complex",
      "French Way Restaurant",
    ],
  },
  {
    name: "Petroleum",
    icon: <Fuel className="w-6 h-6 text-primary" />,
    subItems: ["K.D.U. & SONS FILLING STATION", "K.D.U. FUEL MART"],
  },
  {
    name: "Hydro Power",
    icon: <Zap className="w-6 h-6 text-primary" />,
    subItems: ["K.D.U. MINI HYDRO"],
  },
  {
    name: "Gem Mining",
    icon: <Gem className="w-6 h-6 text-primary" />,
    subItems: ["K.D.U. Gem and Jewellery"],
  },
  {
    name: "KDU Exports",
    icon: <Ship className="w-6 h-6 text-primary" />,
    subItems: ["Tea Jar"],
  },
  {
    name: "Retail Manufacture and Trading",
    icon: <Building2 className="w-6 h-6 text-primary" />,
    subItems: [
        "Tea Jar Lounge",
        "Tea Jar by the Lake Weerawila",
        "Tea Jar Galle",
        "Tea Jar Colombo",
        "Tea Jar Ella",
    ],
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

        <div className="mb-12">
            <Image 
              src="https://placehold.co/1200x400.png"
              alt="Sector Tree"
              width={1200}
              height={400}
              className="rounded-lg object-cover w-full"
              data-ai-hint="business hierarchy"
            />
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
