"use client"

import useChangeTheme from "@/hooks/useChangeTheme";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export default function Header() {
  const { iconChoosed, changeTheme } = useChangeTheme()

  return (
    <header className="fixed z-10 w-full items-center justify-between lg:flex bg-gray/50 backdrop-blur-xl px-10 py-4">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-[120px] h-[37px]"
        src="/next.svg"
        alt="Next.js Logo"
        width={120}
        height={37}
        priority
      />

      <nav className="flex gap-12 items-center justify-between">
        <ul className="flex gap-6">
          <Link href="#about" className="font-medium transition-colors duration-300 text-gray-500 hover:text-gray-900">
            <li>Sobre</li>
          </Link>
          <Link href="#work" className="font-medium transition-colors duration-300 text-gray-500 hover:text-gray-900">
            <li>Trabalhos</li>
          </Link>
          <Link href="#contact" className="font-medium transition-colors duration-300 text-gray-500 hover:text-gray-900">
            <li>Contato</li>
          </Link>
        </ul>

        <div className="flex items-center gap-4">
          <Image
            src={iconChoosed}
            alt="icon-sun"
            width={28}
            height={28}
            className="cursor-pointer"
            onClick={changeTheme}
          />
          <Link
            href="https://drive.google.com/file/d/12IC-yvspgN3v6NbffulMPC3GHKcvhD8j/view?usp=sharing"
            target="_blank"
          >
            <Button type="button" className="rounded-xl font-bold">
              Download CV
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
