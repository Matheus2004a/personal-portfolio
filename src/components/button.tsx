import { Button as ButtonDemo } from "@/components/ui/button"
import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode
}

export function Button({ type, className, children }: ButtonProps) {
  return <ButtonDemo className={className}>{children}</ButtonDemo>
}
