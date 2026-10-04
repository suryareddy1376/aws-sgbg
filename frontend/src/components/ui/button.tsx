import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const variants = {
      default: "bg-primary text-primary-foreground hard-shadow border border-primary",
      destructive: "bg-destructive text-destructive-foreground hard-shadow border border-destructive",
      outline: "border border-border bg-transparent hover:bg-surface hover:text-foreground",
      secondary: "bg-surface text-foreground border border-border hover:bg-surface-hover",
      ghost: "hover:bg-surface hover:text-foreground",
      link: "text-accent underline-offset-4 hover:underline",
    }
    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 px-4 text-xs",
      lg: "h-14 px-8 text-lg",
      icon: "h-11 w-11",
    }
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono uppercase tracking-wider",
          variants[variant], 
          sizes[size], 
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
export { Button }