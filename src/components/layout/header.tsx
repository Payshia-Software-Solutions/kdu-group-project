"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Briefcase, Info, GitMerge, Globe, Landmark } from "lucide-react";
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
import { sectorLinks } from "@/lib/sector-data";

const topNavLinks = [
  { href: "#", label: "Announcements" },
  { href: "#", label: "News" },
  { href: "#", label: "Media" },
  { href: "/careers", label: "Careers" },
  { href: "/sectors", label: "Group Structure" },
];

const mainNavLinks = [
    { href: "/sectors/kdu-singapore", label: "Global" },
    { href: "/sectors", label: "Sectors", dropdown: 'sectors' },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
];

const DropdownContent = ({ type }: { type: 'sectors' }) => {
    const getLinks = (type: 'sectors') => {
        switch (type) {
            case 'sectors': return sectorLinks.map(l => ({...l, icon: l.icon}));
            default: return [];
        }
    }
    const links = getLinks(type);
    const isGrid = type === 'sectors';

    return (
        <div className={cn(isGrid ? "w-96 p-4 grid grid-cols-2 gap-4" : "w-64 p-2")}>
            {links.map(link => {
                const Icon = link.icon;
                return (
                    <DropdownMenuItem key={link.label} asChild>
                        <Link href={link.href} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer w-full">
                           <Icon className="w-5 h-5 text-primary" />
                           <span>{link.label}</span>
                        </Link>
                    </DropdownMenuItem>
                )
            })}
        </div>
    )
}


export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({ link }: { link: (typeof mainNavLinks)[0] & { dropdown?: 'sectors' } }) => {
    if (link.dropdown) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-1 hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary active:bg-transparent p-0 h-auto data-[state=open]:text-primary">
              {link.label}
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2">
            <DropdownContent type={link.dropdown} />
          </DropdownMenuContent>
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

  const MobileNavLink = ({ link }: { link: (typeof mainNavLinks)[0] & { dropdown?: 'sectors' } }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const getLinks = (type: string | undefined) => {
        switch(type) {
            case 'sectors': return sectorLinks;
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
      <div className="bg-primary text-primary-foreground hidden md:block">
        <div className="container mx-auto flex h-8 items-center justify-end px-4 md:px-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
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
          <Link href="/">
            <Image src="http://content-provider.payshia.com/kdu-group/KDU-group.webp" alt="KDU Group Logo" width={50} height={50} />
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
              <SheetContent side="left" className="bg-white p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 flex justify-between items-center border-b">
                      <Link href="/" onClick={() => setSheetOpen(false)}>
                          <Image src="http://content-provider.payshia.com/kdu-group/KDU-group.webp" alt="KDU Group Logo" width={40} height={40} />
                      </Link>
                  </div>
                  
                  <div className="p-6 flex-grow overflow-y-auto">
                    <nav className="flex flex-col gap-4 text-lg">
                      {mainNavLinks.map((link) => (
                         <MobileNavLink key={link.label} link={link} />
                      ))}
                    </nav>
                  </div>
                  
                  <div className="p-6 border-t">
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
