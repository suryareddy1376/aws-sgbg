import * as React from "react"

const FOCUS_AREAS = ["CLOUD", "GENAI", "SERVERLESS", "DEVOPS", "DATA", "SECURITY", "OPEN SOURCE"]

export function Marquee() {
  return (
    <div className="w-full border-y border-border bg-surface overflow-hidden flex relative select-none">
      <div className="flex w-max min-w-full hover:![animation-play-state:paused] motion-reduce:!animate-none animate-[marquee_20s_linear_infinite]">
        {/* Duplicate twice to ensure infinite scroll fills screen */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center" aria-hidden={i > 0}>
            {FOCUS_AREAS.map((area, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <span className="px-8 py-4 font-mono text-sm tracking-widest text-muted-foreground whitespace-nowrap">
                  {area}
                </span>
                <span className="text-border">/</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
