import Link from "next/link";
import { Button } from "./button";

interface DownloadCVProps {
  className?: string;
}

export function DownloadCV({ className }: DownloadCVProps) {
  return (
    <Link
      href="https://drive.google.com/file/d/12IC-yvspgN3v6NbffulMPC3GHKcvhD8j/view?usp=sharing"
      target="_blank"
    >
      <Button type="button" className={`${className} rounded-xl font-bold`}>
      Download CV
    </Button>
    </Link >
  )
}
