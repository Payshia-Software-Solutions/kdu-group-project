import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full">
      <div className="grid md:grid-cols-2">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground p-12 md:p-24 flex flex-col justify-center">
          <div className="space-y-8">
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
        <div className="relative min-h-[400px] md:min-h-0">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Values, Vision, Mission signpost"
              layout="fill"
              objectFit="cover"
              data-ai-hint="direction signpost"
            />
        </div>
      </div>
    </section>
  );
}
