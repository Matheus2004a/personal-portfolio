import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="grid justify-center items-center py-6 gap-10 dark:bg-slate-900">
      <section className="grid justify-center place-items-center">
        <h3 className="text-2xl mb-2">Redes Sociais</h3>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/Matheus2004a" target="_blank">
            <Github
              className={cn(
                "w-9 h-9 hover:bg-gray-200 active:bg-gray-300 rounded-lg p-1.5 transition-colors duration-300",
                "dark:hover:bg-gray-700 dark:active:bg-gray-800"
              )}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/matheus-aur%C3%A9lio/" target="_blank">
            <Linkedin
              className={cn(
                "w-9 h-9 hover:bg-gray-200 active:bg-gray-300 rounded-lg p-1.5 transition-colors duration-300",
                "dark:hover:bg-gray-700 dark:active:bg-gray-800"
              )}
            />
          </Link>
        </div>
      </section>

      <p className="text-center">
        Copyright &copy; 2024 | Coded by Matheus Aurélio
      </p>
    </footer>
  )
}
