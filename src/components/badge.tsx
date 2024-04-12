import { Badge } from "@/components/ui/badge";

interface BadgeDemoProps {
  className?: string;
  children: React.ReactNode
}

export function BadgeDemo({ className, children }: BadgeDemoProps) {
  return <Badge className={`${className} text-sm font-medium py-1 px-5`}>{children}</Badge>
}
