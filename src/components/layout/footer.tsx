import { Facebook, Twitter, Linkedin, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  company: [
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
    { href: "#", label: "Sectors" },
    { href: "#", label: "Careers" },
  ],
  sectors: [
    { href: "#", label: "Agriculture" },
    { href: "#", label: "Transportation" },
    { href: "#", label: "Textiles" },
    { href: "#", label: "Technology" },
  ]
};


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
          
          {/* Column 1: Logo and Company Links */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="#home" className="flex items-center gap-2">
              <Image src="http://content-provider.payshia.com/kdu-group/KDU-group.webp" alt="KDU Group Logo" width={60} height={60} />
            </Link>
            <nav className="flex flex-col space-y-2">
              {footerLinks.company.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2: Business Sectors */}
          <div className="flex flex-col items-start space-y-4">
             <h3 className="text-lg font-semibold">Business Sectors</h3>
             <nav className="flex flex-col space-y-2">
              {footerLinks.sectors.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="flex flex-col space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4"/>
                    <span>+94 11 2479000</span>
                </div>
                <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0"/>
                    <span>400 Deans Road, Colombo 10</span>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Button variant="ghost" size="icon" asChild className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="#" aria-label="Facebook page">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="#" aria-label="Twitter profile">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="#" aria-label="LinkedIn profile">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} KDU Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}