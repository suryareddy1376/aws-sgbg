"use client"
import * as React from "react"

export function ArchitectureDiagram() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
      <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-border)" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Base Grid */}
        <path d="M 0 0 L 400 0 L 400 400 L 0 400 Z" fill="none" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        
        {/* Connection Lines (Dasharray animation via CSS) */}
        <g stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeLinecap="round" className="opacity-60">
          <path d="M 100 100 Q 200 100 200 200" className="animate-[dash_3s_linear_infinite]" strokeDasharray="10 10" />
          <path d="M 300 100 Q 200 100 200 200" className="animate-[dash_4s_linear_infinite]" strokeDasharray="10 10" />
          <path d="M 200 200 Q 200 300 100 300" className="animate-[dash_3.5s_linear_infinite]" strokeDasharray="10 10" />
          <path d="M 200 200 Q 200 300 300 300" className="animate-[dash_4.5s_linear_infinite]" strokeDasharray="10 10" />
          <path d="M 100 100 Q 200 50 300 100" strokeDasharray="4 8" opacity="0.5" />
        </g>

        {/* Traveling Dots */}
        <g fill="var(--color-accent)">
          <circle r="3">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 100 100 Q 200 100 200 200" />
          </circle>
          <circle r="3">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 300 100 Q 200 100 200 200" />
          </circle>
          <circle r="3">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 200 200 Q 200 300 100 300" />
          </circle>
        </g>

        {/* Nodes */}
        <g className="animate-[float_6s_ease-in-out_infinite]">
          <rect x="70" y="70" width="60" height="60" rx="12" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
          <text x="100" y="105" fill="var(--color-foreground)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">Amplify</text>
        </g>
        
        <g className="animate-[float_7s_ease-in-out_infinite_1s]">
          <rect x="270" y="70" width="60" height="60" rx="12" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
          <text x="300" y="105" fill="var(--color-foreground)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">Cognito</text>
        </g>

        <g className="animate-[float_5s_ease-in-out_infinite_2s]">
          {/* Highlighted Node */}
          <rect x="160" y="160" width="80" height="80" rx="16" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="2" filter="url(#glow)" />
          <text x="200" y="205" fill="var(--color-foreground)" fontSize="12" fontFamily="var(--font-mono)" textAnchor="middle">Lambda</text>
        </g>

        <g className="animate-[float_6s_ease-in-out_infinite_0.5s]">
          <rect x="70" y="270" width="60" height="60" rx="12" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
          <text x="100" y="305" fill="var(--color-foreground)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">DynamoDB</text>
        </g>

        <g className="animate-[float_8s_ease-in-out_infinite_1.5s]">
          <rect x="270" y="270" width="60" height="60" rx="12" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
          <text x="300" y="305" fill="var(--color-foreground)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">S3 / CDN</text>
        </g>

      </svg>
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  )
}
