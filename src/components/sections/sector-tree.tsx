import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Fuel, Gem } from "lucide-react";

const sectors = [
  {
    name: "Tea Factories",
    icon: <Leaf className="w-8 h-8 text-primary" />,
    subItems: ["Eheliyagoda", "Ganthuna", "Halpe", "Karawita"],
  },
  {
    name: "Petrolium",
    icon: <Fuel className="w-8 h-8 text-primary" />,
    subItems: ["Allied Lube", "Sector B", "Sector C"],
  },
  {
    name: "Gem Mining",
    icon: <Gem className="w-8 h-8 text-primary" />,
    subItems: ["KDU Mining", "Gem Paradise"],
  },
];

export default function SectorTree() {
  return (
    <section className="bg-muted/20 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold">WITH YOU, WHEREVER YOU GO</p>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2">Explore Our Diversity</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Operating across multiple distinct business sectors, the KDU Group stands as one of Sri Lanka’s most diversified conglomerates.
          </p>
        </div>

        <div className="relative">
          {/* Central Trunk Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {sectors.map((sector, index) => (
              <div key={sector.name} className="relative">
                <div className="md:flex items-center md:space-x-8">
                  
                  {/* Branch and Node for Left Side */}
                  <div className={`flex-1 md:text-right ${index % 2 !== 0 ? 'md:order-3' : ''}`}>
                    {index % 2 === 0 && (
                       <Card className="inline-block w-full md:w-auto md:max-w-md ml-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <CardContent className="p-6">
                            <h3 className="text-2xl font-bold font-headline mb-4">{sector.name}</h3>
                            <ul className="space-y-2">
                              {sector.subItems.map(item => (
                                <li key={item} className="text-muted-foreground">{item}</li>
                              ))}
                            </ul>
                          </CardContent>
                       </Card>
                    )}
                  </div>
                  
                  {/* Central Node Icon */}
                  <div className="flex-shrink-0 md:order-2">
                     <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-24 bg-background rounded-full flex items-center justify-center border-4 border-primary/20 hidden md:flex">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                           {sector.icon}
                        </div>
                     </div>
                     <div className="flex items-center gap-4 mb-4 md:hidden">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                           {sector.icon}
                        </div>
                        <h3 className="text-2xl font-bold font-headline">{sector.name}</h3>
                     </div>
                  </div>

                  {/* Branch and Node for Right Side */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:order-3' : ''}`}>
                    {index % 2 !== 0 && (
                      <Card className="inline-block w-full md:w-auto md:max-w-md mr-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <CardContent className="p-6">
                            <h3 className="text-2xl font-bold font-headline mb-4">{sector.name}</h3>
                            <ul className="space-y-2">
                              {sector.subItems.map(item => (
                                <li key={item} className="text-muted-foreground">{item}</li>
                              ))}
                            </ul>
                          </CardContent>
                       </Card>
                    )}
                  </div>
                </div>

                {/* Mobile view card */}
                <div className="md:hidden">
                    <Card className="shadow-lg">
                      <CardContent className="p-6">
                         <ul className="space-y-2">
                           {sector.subItems.map(item => (
                             <li key={item} className="text-muted-foreground">{item}</li>
                           ))}
                         </ul>
                      </CardContent>
                    </Card>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}