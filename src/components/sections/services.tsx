import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Home, Wrench, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-10 h-10 mb-4 text-accent" />,
    title: "Construction & Infrastructure",
    description: "Delivering large-scale construction projects with precision, quality, and adherence to international standards."
  },
  {
    icon: <Home className="w-10 h-10 mb-4 text-accent" />,
    title: "Real Estate Development",
    description: "Creating premium residential and commercial properties that redefine urban living and workspaces."
  },
  {
    icon: <Wrench className="w-10 h-10 mb-4 text-accent" />,
    title: "Engineering Solutions",
    description: "Providing innovative and sustainable engineering services for complex industrial and civil projects."
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-accent" />,
    title: "Project Management",
    description: "Expert end-to-end management of projects, ensuring on-time and on-budget delivery with exceptional results."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Our Services</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            We offer a diverse range of services, each delivered with the KDU Group's hallmark of quality and excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
