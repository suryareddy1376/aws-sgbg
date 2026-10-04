import * as React from "react"
import { cn } from "@/lib/utils"

export function StepFlow({ steps, currentStep }: { steps: string[]; currentStep: number }) {
  return (
    <div className="flex w-full items-center justify-between">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center gap-2">
            <div className={cn("flex h-8 w-8 items-center justify-center rounded-full border-2 font-semibold", index < currentStep ? "border-primary bg-primary text-primary-foreground" : index === currentStep ? "border-primary text-primary" : "border-muted text-muted-foreground")}>
              {index + 1}
            </div>
            <span className={cn("text-xs font-medium", index <= currentStep ? "text-foreground" : "text-muted-foreground")}>{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={cn("h-[2px] flex-1 mx-4", index < currentStep ? "bg-primary" : "bg-muted")} />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}