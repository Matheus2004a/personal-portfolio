import { Badge } from "@/components/ui/badge";

interface BadgeDemoProps {
  className?: string;
  children: React.ReactNode
}

export function BadgeDemo({ className, children }: BadgeDemoProps) {
  return <Badge className={className}>{children}</Badge>
}
