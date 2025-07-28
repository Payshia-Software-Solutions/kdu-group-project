import Image from "next/image";
import { Leaf, Fuel, Gem } from "lucide-react";

const sectors = [
  {
    name: "Tea Factories",
    align: "left",
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    subItems: [
      { name: "Eheliyagoda", align: "left" },
      { name: "Ganthuna", align: "right" },
      { name: "Halpe", align: "left" },
      { name: "Karawita", align: "right" },
    ],
  },
  {
    name: "Petrolium",
    align: "right",
    icon: <Fuel className="w-8 h-8 text-red-600" />,
    subItems: [
      { name: "Allied Lube", align: "left" },
      { name: "Sector B", align: "right" },
      { name: "Sector C", align: "left" },
    ],
  },
  {
    name: "Gem Mining",
    align: "left",
    icon: <Gem className="w-8 h-8 text-blue-500" />,
    subItems: [
      { name: "KDU Mining", align: "left" },
      { name: "Gem Paradise", align: "right" },
    ],
  },
];

const SubItem = ({ name, align, parentAlign }: { name: string, align: 'left' | 'right', parentAlign: 'left' | 'right' }) => (
    <div className={`sub-timeline-item ${align}`}>
        <div className="sub-timeline-branch"></div>
        <div className="sub-timeline-content">
            {align === 'left' && <div className="font-bold text-gray-500">A</div>}
            <span className="text-sm">{name}</span>
            {align === 'right' && <div className="font-bold text-gray-500">A</div>}
        </div>
    </div>
);

export default function SectorTree() {
  return (
    <section className="sector-tree">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold">WITH YOU, WHEREVER YOU GO</p>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2">Explore Our Diversity</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Operating across 16 distinct business sectors, the KDU Group stands as one of Sri Lanka’s most diversified conglomerates.
          </p>
        </div>

        <div className="timeline">
            <div className="flex justify-center mb-8">
                <Image src="http://content-provider.payshia.com/kdu-group/KDU-group.webp" alt="KDU Group Logo" width={80} height={80} />
            </div>

            {sectors.map((sector) => (
                <div key={sector.name} className={`timeline-item ${sector.align}`}>
                    <div className="timeline-branch"></div>
                    <div className="timeline-node"></div>
                    <div className="timeline-icon">{sector.icon}</div>

                    <div className="timeline-content">
                        <h2 className="text-2xl font-bold font-headline text-primary mb-2 relative">
                            {sector.name}
                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 w-1/4"></span>
                        </h2>

                        <div className="sub-timeline">
                            <div className="sub-timeline-node-start"></div>
                            {sector.subItems.map(item => <SubItem key={item.name} {...item} parentAlign={sector.align} />)}
                            <div className="sub-timeline-node-end"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
