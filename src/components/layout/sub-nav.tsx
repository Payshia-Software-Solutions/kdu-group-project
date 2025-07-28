
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sectorLinks } from "@/lib/sector-data";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export default function SubNav() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className={cn("container mx-auto", isMobile ? "px-0" : "px-4 md:px-6")}>
        <div className={cn(
            "gap-px",
            isMobile 
                ? "flex flex-nowrap overflow-x-auto hide-scrollbar" 
                : "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7"
        )}>
          {sectorLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex flex-col items-center justify-center text-center p-3 sm:p-4 hover:bg-primary-foreground/10 transition-colors duration-200",
                  isMobile && "flex-shrink-0 w-28",
                  isActive && "bg-primary-foreground/20"
                )}
              >
                <Icon className="w-7 h-7 mb-1.5" />
                <span className="text-xs sm:text-sm font-medium leading-tight">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
