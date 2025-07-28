import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
  {
    title: "Colombo Financial Center",
    description: "A state-of-the-art high-rise shaping the city skyline.",
    image: "https://placehold.co/600x400.png",
    hint: "modern skyscraper"
  },
  {
    title: "Galle Expressway Extension",
    description: "Connecting communities and boosting commerce.",
    image: "https://placehold.co/600x400.png",
    hint: "highway bridge"
  },
  {
    title: "Kandy Heritage Villas",
    description: "Luxury residences blending tradition with modern comfort.",
    image: "https://placehold.co/600x400.png",
    hint: "luxury villa"
  },
  {
    title: "Trincomalee Port Development",
    description: "Enhancing Sri Lanka's maritime capabilities.",
    image: "https://placehold.co/600x400.png",
    hint: "shipping port"
  },
  {
    title: "Solar Power Initiative One",
    description: "Harnessing renewable energy for a sustainable future.",
    image: "https://placehold.co/600x400.png",
    hint: "solar farm"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Our Flagship Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A showcase of our commitment to excellence and national development.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardContent className="p-0 relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="font-bold text-xl text-white font-headline">{project.title}</h3>
                        <p className="text-sm text-gray-300">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  );
}
