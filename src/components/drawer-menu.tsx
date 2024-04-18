import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { DownloadCV } from "./download-cv";
import { Logo } from "./logo";
import { SwitchTheme } from "./switch-theme";

interface DrawerMenuProps {
  isVisible: boolean;
  onToggleMenu(): void;
}

export function DrawerMenu({ isVisible, onToggleMenu }: DrawerMenuProps) {
  if (!isVisible) {
    return null
  }

  return (
    <div role="dialog" className={cn(
      `lg:hidden fixed inset-0 z-50 backdrop-blur-sm bg-white/10 transform transition-transform`,
      `${isVisible ? 'translate-x-0' : '-translate-x-full'}`
    )}>
      <header className="absolute right-0 flex flex-col gap-10 bg-white dark:bg-black w-4/5 h-full p-4">
        <div className="flex justify-between">
          <Logo width={100} height={37} />

          <button
            className="rounded-lg p-1 hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-800"
            onClick={onToggleMenu}
          >
            <X />
          </button>
        </div>

        <nav>
          <ul className="grid gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onToggleMenu}
                className={cn(
                  "font-medium transition-colors duration-300 text-gray-500 hover:text-gray-900",
                  "dark:text-gray-400 dark:hover:text-gray-300"
                )}>
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className="grid gap-4">
          <div className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400">
            <span>Trocar tema</span>
            <SwitchTheme />
          </div>
          <DownloadCV className="w-full" />
        </div>
      </header>
    </div>
  )
}
