import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DownloadCV } from "./download-cv";
import { Logo } from "./logo";
import { SheetDemo } from "./sheet";
import { SwitchTheme } from "./switch-theme";

export default function Header() {
  return (
    <header className={cn(
      "fixed z-10 w-full items-center justify-between flex bg-gray/50 backdrop-blur-xl px-10 py-4",
    )}>
      <Logo width={40} height={40} />

      <nav className="hidden md:flex gap-12 items-center justify-between">
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

      <SheetDemo />
    </header>
  )
}
