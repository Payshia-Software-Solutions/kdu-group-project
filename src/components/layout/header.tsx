"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const topNavLinks = [
  { href: "#", label: "Announcements" },
  { href: "#", label: "News" },
  { href: "#", label: "Media" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Group Structure" },
];

const mainNavLinks = [
    { href: "#", label: "Global", dropdown: [{href: "#", label: "KDU Singapore"}] },
    { href: "#", label: "Sectors", dropdown: [{href: "#", label: "Tea Factories"}, {href: "#", label: "Hospitality"}] },
    { href: "#", label: "Community & Environment" },
    { href: "#", label: "Investor Relations", dropdown: [{href: "#", label: "Financials"}] },
    { href: "#", label: "About Us", dropdown: [{href: "#", label: "Our Story"}] },
    { href: "#contact", label: "Contact Us" },
];


export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({ link, isMobile }: { link: typeof mainNavLinks[0], isMobile?: boolean }) => {
    if (link.dropdown) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-1 hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary active:bg-transparent p-0 h-auto">
              {link.label}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {link.dropdown.map((item) => (
              <DropdownMenuItem key={item.label} asChild>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <Link
        href={link.href}
        className="transition-colors hover:text-primary focus:text-primary"
        onClick={() => isMobile && setSheetOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-10 items-center justify-end px-4 md:px-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {topNavLinks.map((link) => (
              <Link
                key={link.href}
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
        <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
          <Link href="#home" className="flex flex-col items-center gap-2">
            <Image src="https://placehold.co/80x80.png" alt="KDU Group Logo" width={60} height={60} data-ai-hint="logo company" />
            <span className="text-sm font-bold font-headline text-gray-700">KDU GROUP</span>
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
                      <Link href="#home" onClick={() => setSheetOpen(false)} className="flex items-center gap-2">
                          <Image src="https://placehold.co/60x60.png" alt="KDU Group Logo" width={40} height={40} data-ai-hint="logo company" />
                          <span className="text-lg font-bold font-headline">KDU Group</span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                      </Button>
                  </div>

                  <nav className="flex flex-col gap-4 text-lg">
                    {mainNavLinks.map((link) => (
                       <NavLink key={link.label} link={link} isMobile />
                    ))}
                  </nav>
                  
                  <div className="mt-8 border-t pt-6">
                     <nav className="flex flex-col gap-4 text-base">
                        {topNavLinks.map((link) => (
                          <Link
                            key={link.href}
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
