"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Factory, Utensils, Droplet, Zap, Gem, Building2, Globe, Briefcase, Info, GitMerge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { cn } from "@/lib/utils";

const topNavLinks = [
  { href: "#", label: "Announcements" },
  { href: "#", label: "News" },
  { href: "#", label: "Media" },
  { href: "#", label: "Careers" },
  { href: "/sectors", label: "Group Structure" },
];

const mainNavLinks = [
    { href: "#", label: "Global", dropdown: 'global' },
    { href: "/sectors", label: "Sectors", dropdown: 'sectors' },
    { href: "#", label: "Community & Environment" },
    { href: "#", label: "Investor Relations", dropdown: 'investor' },
    { href: "#", label: "About Us", dropdown: 'about' },
    { href: "/contact", label: "Contact Us" },
];

const sectorLinks = [
    {href: "/tea-factories", label: "Tea Factories", icon: <Factory className="w-5 h-5 text-primary" />},
    {href: "/hospitality", label: "Hospitality", icon: <Utensils className="w-5 h-5 text-primary" />},
    {href: "/petrolium", label: "Petrolium", icon: <Droplet className="w-5 h-5 text-primary" />},
    {href: "/hydro-power", label: "Hydro Power", icon: <Zap className="w-5 h-5 text-primary" />},
    {href: "/gem-mining", label: "Gem Mining", icon: <Gem className="w-5 h-5 text-primary" />},
    {href: "/retail", label: "Retail Manufacture and Trading", icon: <Building2 className="w-5 h-5 text-primary" />},
    {href: "/sectors", label: "All Sectors", icon: <GitMerge className="w-5 h-5 text-primary" />},
];

const globalLinks = [
    {href: "/kdu-singapore", label: "KDU Singapore", icon: <Globe className="w-5 h-5 text-primary" />},
]

const investorLinks = [
    {href: "#", label: "Financials", icon: <Briefcase className="w-5 h-5 text-primary" />},
]

const aboutLinks = [
    {href: "#", label: "Our Story", icon: <Info className="w-5 h-5 text-primary" />},
]


const DropdownContent = ({ type }: { type: 'sectors' | 'global' | 'investor' | 'about' }) => {
    const getLinks = (type: 'sectors' | 'global' | 'investor' | 'about') => {
        switch (type) {
            case 'sectors': return sectorLinks;
            case 'global': return globalLinks;
            case 'investor': return investorLinks;
            case 'about': return aboutLinks;
            default: return [];
        }
    }
    const links = getLinks(type);
    const isGrid = type === 'sectors';

    return (
        <div className={cn(isGrid ? "w-96 p-4 grid grid-cols-2 gap-4" : "w-64 p-2")}>
            {links.map(link => (
                <Link key={link.label} href={link.href} passHref legacyBehavior>
                    <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer">
                        {link.icon}
                        <span>{link.label}</span>
                    </DropdownMenuItem>
                </Link>
            ))}
        </div>
    )
}


export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const NavLink = ({ link }: { link: typeof mainNavLinks[0] }) => {
    if (link.dropdown) {
      return (
        <DropdownMenu open={openDropdown === link.label} onOpenChange={(isOpen) => setOpenDropdown(isOpen ? link.label : null)}>
          <DropdownMenuTrigger asChild>
            <div
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
            >
                <Button variant="ghost" className="flex items-center gap-1 hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary active:bg-transparent p-0 h-auto data-[state=open]:text-primary">
                {link.label}
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", openDropdown === link.label && "rotate-180")} />
                </Button>
                <DropdownMenuContent 
                    className="mt-2"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                >
                    <DropdownContent type={link.dropdown as any} />
                </DropdownMenuContent>
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>
      );
    }
    return (
      <Link
        href={link.href}
        className="transition-colors hover:text-primary focus:text-primary"
      >
        {link.label}
      </Link>
    );
  };

  const MobileNavLink = ({ link }: { link: typeof mainNavLinks[0] }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const getLinks = (type: string | undefined) => {
        switch(type) {
            case 'sectors': return sectorLinks;
            case 'global': return globalLinks;
            case 'investor': return investorLinks;
            case 'about': return aboutLinks;
            default: return [];
        }
    }
    
    if (link.dropdown) {
        const links = getLinks(link.dropdown);
      return (
        <div>
          <button
            className="flex justify-between items-center w-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{link.label}</span>
            <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
          </button>
          {isOpen && (
            <div className="pl-4 mt-2 flex flex-col gap-2">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => setSheetOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }
    return (
      <Link
        href={link.href}
        className="transition-colors hover:text-primary focus:text-primary"
        onClick={() => setSheetOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm" id="header">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-8 items-center justify-end px-4 md:px-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {topNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-accent focus:text-accent text-xs"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-border/40">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex flex-col items-center gap-2">
            <Image src="http://content-provider.payshia.com/kdu-group/KDU-group.webp" alt="KDU Group Logo" width={50} height={50} />
            <span className="text-xs font-bold font-headline text-gray-700">KDU GROUP</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-gray-700">
            {mainNavLinks.map((link) => (
              <NavLink key={link.label} link={link} />
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white">
                <div className="flex flex-col p-6">
                  <div className="flex justify-between items-center mb-8">
                      <Link href="/" onClick={() => setSheetOpen(false)} className="flex items-center gap-2">
                          <Image src="http://content-provider.payshia.com/kdu-group/KDU-group.webp" alt="KDU Group Logo" width={40} height={40} />
                          <span className="text-lg font-bold font-headline">KDU Group</span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                      </Button>
                  </div>

                  <nav className="flex flex-col gap-4 text-lg">
                    {mainNavLinks.map((link) => (
                       <MobileNavLink key={link.label} link={link} />
                    ))}
                  </nav>
                  
                  <div className="mt-8 border-t pt-6">
                     <nav className="flex flex-col gap-4 text-base">
                        {topNavLinks.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary"
                            onClick={() => setSheetOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>
                  </div>

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
