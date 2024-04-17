import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { DownloadCV } from "./download-cv";
import { Logo } from "./logo";
import { SwitchTheme } from "./switch-theme";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/dialog";

interface DrawerMenuProps {
  isVisible: boolean;
  onToggleMenu(): void;
}

export function DrawerMenu({ isVisible, onToggleMenu }: DrawerMenuProps) {
  return (
    <Drawer open={isVisible} onOpenChange={onToggleMenu}>
      <DrawerTrigger asChild className="flex lg:hidden text-black">
        <button>
          <Menu className="dark:text-white" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-white dark:bg-black">
        <div className="flex items-center justify-between dark:border-b dark:border-gray-100 p-4">
          <Logo width={100} height={37} />
          <DrawerClose asChild>
            <button className="dark:text-white">
              <X />
            </button>
          </DrawerClose>
        </div>
        <nav className="dark:border-b dark:border-gray-100 p-4">
          <ul className="flex flex-col gap-4">
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
        </nav>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between dark:text-gray-400">
            <span>Trocar tema</span>
            <SwitchTheme />
          </div>
          <DownloadCV className="w-full" />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
