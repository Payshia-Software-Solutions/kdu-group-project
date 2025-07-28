import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ContentSuggester } from "@/components/content-suggester";
import { Award, Target, Eye } from "lucide-react";

const aboutContent = "KDU Group is a premier Sri Lankan conglomerate with a rich history of driving national progress. Our journey began with a commitment to excellence and innovation, which remains at the core of our identity. We invest in diverse sectors, fostering growth and creating value for our stakeholders and the community. Our mission is to build a resilient and prosperous Sri Lanka, guided by our unwavering values of integrity, quality, and sustainable development.";
const aboutContext = "An 'About Us' paragraph for the KDU Group corporate website homepage.";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
              About KDU Group
            </h2>
            <div className="relative">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {aboutContent}
              </p>
              <ContentSuggester originalContent={aboutContent} context={aboutContext} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <Card className="p-6 flex flex-col items-center text-center">
                <Target className="w-10 h-10 mb-4 text-primary" />
                <h3 className="font-bold text-lg">Our Mission</h3>
                <p className="text-sm text-muted-foreground mt-2">To spearhead sustainable growth and innovation across key sectors in Sri Lanka.</p>
              </Card>
              <Card className="p-6 flex flex-col items-center text-center">
                <Eye className="w-10 h-10 mb-4 text-primary" />
                <h3 className="font-bold text-lg">Our Vision</h3>
                <p className="text-sm text-muted-foreground mt-2">To be the nation's most trusted and dynamic conglomerate, shaping a brighter future for all.</p>
              </Card>
              <Card className="p-6 flex flex-col items-center text-center">
                <Award className="w-10 h-10 mb-4 text-primary" />
                <h3 className="font-bold text-lg">Our Values</h3>
                <p className="text-sm text-muted-foreground mt-2">Integrity, Excellence, and a commitment to National Development guide our every action.</p>
              </Card>
            </div>
          </div>
          <div className="relative h-80 md:h-full w-full">
            <Image
              src="https://placehold.co/600x700.png"
              alt="KDU Group Team Meeting"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
              data-ai-hint="team meeting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
