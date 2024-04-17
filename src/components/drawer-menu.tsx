import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
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
      `lg:hidden fixed inset-0 z-50 backdrop-blur-sm bg-white/30 transform transition-transform`,
      `${isVisible ? 'translate-x-0' : '-translate-x-full'}`
    )}>
      <header className="absolute right-0 flex flex-col gap-10 bg-white dark:bg-black w-4/5 h-full p-4">
        <div className="flex justify-between">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-[100px] h-[37px]"
            src="/next.svg"
            alt="Next.js Logo"
            width={100}
            height={37}
            priority
          />

          <button onClick={onToggleMenu} className="text-black">
            <X className="dark:text-white" />
          </button>
        </div>

        <nav>
          <ul className="grid gap-4">
            <Link href="#about" className={cn(
              "font-medium transition-colors duration-300 text-gray-500 hover:text-gray-900",
              "dark:text-gray-400 dark:hover:text-gray-300"
            )}>
              <li>Sobre</li>
            </Link>
            <Link href="#work" className={cn(
              "font-medium transition-colors duration-300 text-gray-500 hover:text-gray-900",
              "dark:text-gray-400 dark:hover:text-gray-300"
            )}>
              <li>Trabalhos</li>
            </Link>
            <Link href="#contact" className={cn(
              "font-medium transition-colors duration-300 text-gray-500 hover:text-gray-900",
              "dark:text-gray-400 dark:hover:text-gray-300"
            )}>
              <li>Contato</li>
            </Link>
          </ul>
        </nav>

        <div className="grid items-center gap-4">
          <div className="flex items-center justify-between font-medium text-gray-500">
            <span>Trocar tema</span>
            <SwitchTheme />
          </div>
          <Link
            href="https://drive.google.com/file/d/12IC-yvspgN3v6NbffulMPC3GHKcvhD8j/view?usp=sharing"
            target="_blank"
          >
            <Button type="button" className="w-full rounded-xl font-bold">
              Download CV
            </Button>
          </Link>
        </div>
      </header>
    </div>
  )
}
