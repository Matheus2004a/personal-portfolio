import { Ticket } from "lucide-react";

interface LogoProps {
  width: number;
  height: number;
}

export function Logo({ width, height }: LogoProps) {
  return (
    <div>
      <span className="grid grid-cols-2 items-center gap-1 text-xl uppercase">
        <Ticket width={width} height={height} />
        ma&trade;
      </span>
    </div>
  )
}
