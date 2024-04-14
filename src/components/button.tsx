import { Button as ButtonDemo } from "@/components/ui/button"
import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode
}

export function Button({ type, className, disabled, children }: ButtonProps) {
  return (
    <ButtonDemo
      type={type}
      className={className}
      disabled={disabled}
    >
      {children}
    </ButtonDemo>
  )
}
