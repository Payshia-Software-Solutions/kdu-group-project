import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const factories = [
  {
    name: "Galpadithanne Tea Factory",
    description: "Nestled in the heart of Sri Lanka's tea country, producing high-quality orthodox teas.",
    image: "https://placehold.co/600x400.png",
    hint: "tea plantation",
  },
  {
    name: "Kuttapitiya Tea Estate and Factory",
    description: "Renowned for its commitment to traditional tea manufacturing processes and exceptional flavor profiles.",
    image: "https://placehold.co/600x400.png",
    hint: "tea leaves",
  },
  {
    name: "New Kendagastenna Tea Factory",
    description: "A modern facility that combines innovation with age-old traditions to create unique tea blends.",
    image: "https://placehold.co/600x400.png",
    hint: "tea factory interior",
  },
  {
    name: "Peak View Tea Factory",
    description: "Offering panoramic views and even more impressive teas, specializing in single-origin batches.",
    image: "https://placehold.co/600x400.png",
    hint: "mountain landscape",
  },
  {
    name: "Matuwagala Tea Factory",
    description: "A cornerstone of the local community, dedicated to sustainable practices and empowering workers.",
    image: "https://placehold.co/600x400.png",
    hint: "tea workers",
  },
];

export default function TeaFactoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-headline mb-4">Our Tea Factories</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With a rich heritage rooted in Sri Lanka's esteemed tea culture, KDU Group is a custodian of traditional and sustainable tea manufacturing. Our factories are pillars of their communities, producing world-class teas that honor our island's legacy.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {factories.map((factory) => (
            <Card key={factory.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60 w-full">
                <Image
                  src={factory.image}
                  alt={factory.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={factory.hint}
                />
              </div>
              <CardHeader>
                <CardTitle>{factory.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{factory.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
