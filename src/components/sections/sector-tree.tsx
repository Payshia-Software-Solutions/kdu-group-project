import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Leaf, Fuel, Gem, Check } from "lucide-react";

const sectors = [
  {
    name: "Tea Factories",
    icon: <Leaf className="w-10 h-10 text-primary" />,
    subItems: [
      { name: "Eheliyagoda" },
      { name: "Ganthuna" },
      { name: "Halpe" },
      { name: "Karawita" },
    ],
  },
  {
    name: "Petrolium",
    icon: <Fuel className="w-10 h-10 text-primary" />,
    subItems: [
      { name: "Allied Lube" },
      { name: "Sector B" },
      { name: "Sector C" },
    ],
  },
  {
    name: "Gem Mining",
    icon: <Gem className="w-10 h-10 text-primary" />,
    subItems: [
      { name: "KDU Mining" },
      { name: "Gem Paradise" },
    ],
  },
];

export default function SectorTree() {
  return (
    <section className="bg-muted/20 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold">WITH YOU, WHEREVER YOU GO</p>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2">Explore Our Diversity</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Operating across multiple distinct business sectors, the KDU Group stands as one of Sri Lanka’s most diversified conglomerates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <Card key={sector.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                    {sector.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{sector.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <Separator className="my-4" />
                <ul className="space-y-3 flex-grow">
                  {sector.subItems.map((item) => (
                    <li key={item.name} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
