
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const newsItems = [
  {
    title: "Empowering Communities",
    description: "Supporting local farmers with sustainable agricultural practices and microfinance solutions.",
    image: "https://images.unsplash.com/photo-1724996871733-93a10302de11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjb21tdW5pdHklMjBmYXJtaW5nfGVufDB8fHx8MTc1MzY5NjQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "community farming",
    tag: "#DiviSaviya",
    href: "#",
  },
  {
    title: "Education Initiative",
    description: "Providing scholarships and educational resources to underprivileged children across rural areas.",
    image: "https://images.unsplash.com/photo-1574130303188-31a915382726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3NTM2OTY0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "children classroom",
    tag: "#Education",
    href: "#",
  },
  {
    title: "Small Business Growth",
    description: "Enabling entrepreneurs with accessible loans and business development support programs.",
    image: "https://images.unsplash.com/photo-1594402919317-9e67dca0a305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c21hbGwlMjBidXNpbmVzc3xlbnwwfHx8fDE3NTM2OTY0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "small business",
    tag: "#SMEGrowth",
    href: "#",
  },
];

const NewsCard = ({ item }: { item: typeof newsItems[0] }) => (
    <Card className="col-span-1 flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="relative w-full h-48">
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          className="object-cover"
          data-ai-hint={item.hint}
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">{item.tag}</div>
          <Link href={item.href}>
             <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-muted/80">
                <ArrowRight className="h-5 w-5 text-primary" />
             </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
);

export default function LatestNews() {
  const isMobile = useIsMobile();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        {isMobile ? (
          <div className="flex flex-col gap-8">
             <Card className="col-span-1 bg-primary text-primary-foreground p-8 flex flex-col justify-between rounded-lg shadow-lg">
                <div>
                  <h2 className="text-4xl font-bold font-headline mb-4">Latest News</h2>
                </div>
                <Link href="#" passHref>
                  <Button className="mt-auto w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full p-4 text-lg">
                    <span>See All News</span>
                    <span className="ml-2 bg-black/20 rounded-full p-1 inline-flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </Button>
                </Link>
              </Card>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {newsItems.map((item, index) => (
                  <CarouselItem key={index} className="basis-4/5">
                    <div className="p-1 h-full">
                      <NewsCard item={item} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
            <Card className="col-span-1 bg-primary text-primary-foreground p-8 flex flex-col justify-between rounded-lg shadow-lg">
              <div>
                <h2 className="text-4xl font-bold font-headline mb-4">Latest News</h2>
              </div>
              <Link href="#" passHref>
                <Button className="mt-auto w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full p-4 text-lg">
                  <span>See All News</span>
                  <span className="ml-2 bg-black/20 rounded-full p-1 inline-flex items-center justify-center">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Button>
              </Link>
            </Card>

            {newsItems.map((item) => (
              <NewsCard item={item} key={item.title} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
