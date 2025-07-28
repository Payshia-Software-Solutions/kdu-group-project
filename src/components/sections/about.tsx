import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full">
      <div className="relative flex items-center justify-center w-full min-h-[600px] md:min-h-[700px]">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Values, Vision, Mission signpost"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="direction signpost"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent z-10"></div>
        <div className="relative z-20 container mx-auto px-4 md:px-6">
            <div className="md:w-1/2 p-8">
                <div className="space-y-8 text-white">
                    <div>
                        <h2 className="text-3xl font-bold font-headline mb-2">Purpose</h2>
                        <div className="w-16 h-1 bg-accent mb-4"></div>
                        <p className="text-lg text-primary-foreground/80">"To inspire an inclusive world and a thriving planet."</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-headline mb-2">Vision</h2>
                        <div className="w-16 h-1 bg-accent mb-4"></div>
                        <p className="text-lg text-primary-foreground/80">"To be Sri Lanka’s corporate inspiration at all times."</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-headline mb-2">Mission</h2>
                        <div className="w-16 h-1 bg-accent mb-4"></div>
                        <p className="text-lg text-primary-foreground/80">"Delivering superior shareholder value by unleashing the full potential of our people and achieving leadership in all our domestic and global businesses."</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
