"use client"
import * as React from "react"

export function useSpotlight() {
  const ref = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty("--mx", `${x}px`)
      el.style.setProperty("--my", `${y}px`)
    }

    el.addEventListener("mousemove", handleMouseMove)
    return () => el.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return ref
}
