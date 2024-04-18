import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

export function Logo({ width, height }: LogoProps) {
  return (
    <Image
      className={`relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-[${width}px] h-[${height}px]`}
      src="/next.svg"
      alt="Next.js Logo"
      width={width}
      height={height}
      priority
    />
  )
}
