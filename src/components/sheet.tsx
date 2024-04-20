import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet"
import { NAV_LINKS } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Link from "next/link"
import { DownloadCV } from "./download-cv"
import { Logo } from "./logo"
import { SwitchTheme } from "./switch-theme"

export function SheetDemo() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-10 dark:bg-black">
          <SheetHeader>
            <Logo width={30} height={30} />
          </SheetHeader>
          <nav>
            <ul className="grid gap-4">
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
          <SheetFooter>
            <div className="grid gap-4">
              <div className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400">
                <span>Trocar tema</span>
                <SwitchTheme />
              </div>
              <DownloadCV className="w-full" />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
