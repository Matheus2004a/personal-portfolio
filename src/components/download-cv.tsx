import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./button";

export function DownloadCV({ className }: { className?: string }) {
  return (
    <Link
      href="https://drive.google.com/file/d/12IC-yvspgN3v6NbffulMPC3GHKcvhD8j/view?usp=sharing"
      target="_blank"
    >
      <Button
        type="button"
        className={cn("rounded-xl font-bold", className)}
      >
        Download CV
      </Button>
    </Link>
  )
}
