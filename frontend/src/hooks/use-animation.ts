"use client"
import * as React from "react"

export interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView({ threshold = 0.1, root, rootMargin, triggerOnce = true }: UseInViewOptions = {}) {
  const [isInView, setIsInView] = React.useState(false)
  const ref = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (triggerOnce) observer.unobserve(el)
      } else if (!triggerOnce) {
        setIsInView(false)
      }
    }, { threshold, root, rootMargin })
    
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, root, rootMargin, triggerOnce])

  return { ref, isInView }
}

export function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = React.useState(0)
  const { ref, isInView } = useInView()

  React.useEffect(() => {
    if (!isInView) return
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }, [isInView, target, duration])

  return { ref, count }
}

export function useScrollProgress() {
  const [progress, setProgress] = React.useState(0)
  
  React.useEffect(() => {
    const updateScroll = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }
    window.addEventListener("scroll", updateScroll, { passive: true })
    return () => window.removeEventListener("scroll", updateScroll)
  }, [])
  
  return progress
}
