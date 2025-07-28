import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Corporate building"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        data-ai-hint="corporate architecture"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl font-bold font-headline sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
          Building Tomorrow's Sri Lanka
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-sm">
          Pioneering progress through innovation, integrity, and investment in our nation's future.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
