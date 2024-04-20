import { Ticket } from "lucide-react";

interface LogoProps {
  width: number;
  height: number;
}

export function Logo({ width, height }: LogoProps) {
  return (
    <div className="max-w-20">
      <span className="flex items-center gap-1 text-xl uppercase">
        <Ticket width={width} height={height} className="w-auto h-auto" />
        ma&trade;
      </span>
    </div>
  )
}
