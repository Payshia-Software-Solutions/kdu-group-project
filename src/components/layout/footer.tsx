import { Facebook, Twitter, Linkedin, Phone, Mail, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const companyLinks = [
    { href: "#", label: "Global" },
    { href: "#", label: "Community & Environment" },
    { href: "#", label: "Investor Relations" },
    { href: "/about", label: "About us" },
    { href: "#", label: "News" },
    { href: "#", label: "Media" },
    { href: "#", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
];

const sectorsCol1 = [
    { href: "/sectors/tea-factories", label: "Tea Factories" },
    { href: "/sectors/hospitality", label: "Hospitality" },
    { href: "/sectors/petroleum", label: "Petroleum" },
];

const sectorsCol2 = [
    { href: "/sectors/hydro-power", label: "Hydro Power" },
    { href: "/sectors/gem-mining", label: "Gem Mining" },
    { href: "/sectors/retail", label: "Retail & Trading" },
];

const sectorsCol3 = [
    { href: "/sectors/kdu-singapore", label: "KDU Singapore" },
];


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8 md:px-6">
        
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center gap-8 pb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src="http://content-provider.payshia.com/kdu-group/KDU-group.webp" alt="KDU Group Logo" width={60} height={60} />
            </Link>
            <a href="mailto:info@kdugroup.com" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground">
              <Mail className="h-4 w-4"/>
              <span>info@kdugroup.com</span>
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {companyLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2">
                <h3 className="font-semibold mb-4">Sectors</h3>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <nav className="flex flex-col space-y-2">
                    {sectorsCol1.map((link) => (
                        <Link key={link.label} href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        {link.label}
                        </Link>
                    ))}
                </nav>
                <nav className="flex flex-col space-y-2">
                    {sectorsCol2.map((link) => (
                        <Link key={link.label} href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        {link.label}
                        </Link>
                    ))}
                </nav>
                <nav className="flex flex-col space-y-2">
                    {sectorsCol3.map((link) => (
                        <Link key={link.label} href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
             <div className="md:col-span-3 md:text-right">
                <h3 className="font-semibold mb-4">Follow us on:</h3>
                <div className="flex items-center md:justify-end gap-1">
                  <Button variant="ghost" size="icon" asChild className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                    <Link href="#" aria-label="Facebook page">
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </Button>
                   <Button variant="ghost" size="icon" asChild className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                    <Link href="#" aria-label="Instagram profile">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </Button>
                   <Button variant="ghost" size="icon" asChild className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                    <Link href="#" aria-label="Youtube channel">
                      <Youtube className="h-5 w-5" />
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

        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} KDU Group. All rights reserved.</p>
          <p>
            Design and develop by <a href="https://payshia.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-foreground">Payshia Software Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
