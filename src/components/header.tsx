"use client"

import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { DownloadCV } from "./download-cv";
import { DrawerMenu } from "./drawer-menu";
import { Logo } from "./logo";
import { SwitchTheme } from "./switch-theme";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className={cn(
        "sticky z-10 w-full items-center justify-between flex bg-gray/50 backdrop-blur-xl px-10 py-4",
      )}>
        <Logo width={120} height={37} />

        <nav className="hidden lg:flex gap-12 items-center justify-between">
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-medium transition-colors duration-300 text-gray-500 hover:text-gray-900",
                  "dark:text-gray-400 dark:hover:text-gray-300"
                )}>
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <SwitchTheme />
            <DownloadCV />
          </div>
        </nav>

        <DrawerMenu isVisible={isOpen} onToggleMenu={toggleMenu} />
      </header>
    </>
  )
}
