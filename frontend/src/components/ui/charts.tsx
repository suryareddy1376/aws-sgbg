import * as React from "react"

export function LineChart({ data, width = 300, height = 200 }: { data: number[]; width?: number; height?: number }) {
  const max = Math.max(...data, 1);
  const points = data.map((val, i) => `${(i / (data.length - 1 || 1)) * width},${height - (val / max) * height}`).join(" ");
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <polyline fill="none" stroke="hsl(var(--primary))" strokeWidth="3" points={points} strokeLinejoin="round" strokeLinecap="round" />
      {data.map((val, i) => (
        <circle key={i} cx={(i / (data.length - 1 || 1)) * width} cy={height - (val / max) * height} r="4" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
      ))}
    </svg>
  )
}

export function BarChart({ data, width = 300, height = 200 }: { data: number[]; width?: number; height?: number }) {
  const max = Math.max(...data, 1);
  const barWidth = width / data.length - 4;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      {data.map((val, i) => (
        <rect key={i} x={i * (width / data.length) + 2} y={height - (val / max) * height} width={Math.max(barWidth, 1)} height={(val / max) * height} fill="hsl(var(--primary))" rx="2" />
      ))}
    </svg>
  )
}

export function DonutChart({ data, size = 200 }: { data: { value: number; color: string }[]; size?: number }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const cx = size / 2, cy = size / 2, r = size * 0.4;
  
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data.map((item, i) => {
        const previousTotal = data.slice(0, i).reduce((sum, d) => sum + d.value, 0);
        const startAngle = (previousTotal / total) * 360;
        const sliceAngle = (item.value / total) * 360;
        const endAngle = startAngle + sliceAngle;
        
        const x1 = cx + r * Math.cos((Math.PI * startAngle) / 180);
        const y1 = cy + r * Math.sin((Math.PI * startAngle) / 180);
        const x2 = cx + r * Math.cos((Math.PI * endAngle) / 180);
        const y2 = cy + r * Math.sin((Math.PI * endAngle) / 180);
        
        const largeArc = sliceAngle > 180 ? 1 : 0;
        const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
        return <path key={i} d={d} fill={item.color} />;
      })}
      <circle cx={cx} cy={cy} r={size * 0.25} fill="hsl(var(--background))" />
    </svg>
  )
}