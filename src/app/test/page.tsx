"use client";
import { useEffect, useRef } from "react"

export default function Circuit() {
  const pathRefs = useRef<(SVGPathElement | null)[]>([])

  useEffect(() => {
    pathRefs.current.forEach((path, index) => {
      if (path) {
        const length = path.getTotalLength()
        path.style.strokeDasharray = `${length * 0.1} ${length}`
        path.style.strokeDashoffset = length.toString() // Start from nodes (positive offset)

        path.animate(
          [
            { strokeDashoffset: length, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1 },
            { strokeDashoffset: -length, opacity: 0 },
          ],
          {
            duration: 3000,
            delay: index * 500,
            iterations: Infinity,
            easing: "ease-in-out",
          }
        )
      }
    })
  }, [])

  return (
    <div className="min-w-screen overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 p-4 flex gap-4 z-10">
        <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
          Get started
        </button>
        <button className="px-6 py-2 border border-gray-600 text-white rounded-full hover:bg-gray-800 transition-colors">
          Book a demo
        </button>
      </nav>

      <div className="relative w-full max-w-[1400px] mx-auto aspect-[21/9] p-4 md:p-8">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 2100 900" preserveAspectRatio="xMidYMid meet">
          {/* Base circuit paths */}
          <g className="stroke-[#222] stroke-[3px]">
            {/* Left side paths */}
            <path d="M975 325 L800 200 L300 200" />
            <path d="M975 350 L800 350 L300 350" />
            <path d="M975 375 L800 500 L300 500" />
            <path d="M975 400 L800 650 L300 650" />
            
            {/* Right side paths */}
            <path d="M1075 325 L1300 200 L1800 200" />
            <path d="M1075 350 L1300 350 L1800 350" />
            <path d="M1075 375 L1300 500 L1800 500" />
            <path d="M1075 400 L1300 650 L1800 650" />
          </g>

          {/* Animated paths */}
          <g className="stroke-[#FF6B00] stroke-[4px]" style={{ filter: 'url(#glow)' }}>
            {[
              "M975 325 L800 200 L300 200",
              "M975 350 L800 350 L300 350",
              "M975 375 L800 500 L300 500",
              "M975 400 L800 650 L300 650",
              "M1075 325 L1300 200 L1800 200",
              "M1075 350 L1300 350 L1800 350",
              "M1075 375 L1300 500 L1800 500",
              "M1075 400 L1300 650 L1800 650",
            ].map((d, i) => (
              <path
                key={i}
                ref={(el) => {
                  pathRefs.current[i] = el;
                }}
                d={d}
                fill="none"
                opacity="0"
              />
            ))}
          </g>

          {/* Left Nodes */}
          <g>
            <rect x="200" y="160" width="80" height="80" rx="16" 
                  className="fill-[#1A1A1A] stroke-[#333]" />
            <text x="240" y="210" className="text-2xl font-bold fill-gray-300 text-center"
                  dominantBaseline="middle" textAnchor="middle">A</text>
          </g>
          <g>
            <rect x="200" y="310" width="80" height="80" rx="16" 
                  className="fill-[#1A1A1A] stroke-[#333]" />
            <text x="240" y="360" className="text-2xl font-bold fill-gray-300 text-center"
                  dominantBaseline="middle" textAnchor="middle">S.</text>
          </g>
          <g>
            <rect x="200" y="460" width="80" height="80" rx="16" 
                  className="fill-[#1A1A1A] stroke-[#333]" />
            <text x="240" y="510" className="text-2xl font-bold fill-gray-300 text-center"
                  dominantBaseline="middle" textAnchor="middle">M</text>
          </g>
          <g>
            <rect x="200" y="610" width="80" height="80" rx="16" 
                  className="fill-[#1A1A1A] stroke-[#333]" />
            <text x="240" y="660" className="text-2xl font-bold fill-gray-300 text-center"
                  dominantBaseline="middle" textAnchor="middle">D</text>
          </g>

          {/* Right Nodes */}
          <g>
            <rect x="1820" y="160" width="80" height="80" rx="16" 
                  className="fill-[#1A1A1A] stroke-[#333]" />
            <text x="1860" y="210" className="text-2xl font-bold fill-gray-300 text-center"
                  dominantBaseline="middle" textAnchor="middle">S.</text>
          </g>
          <g>
            <rect x="1820" y="310" width="80" height="80" rx="16" 
                  className="fill-[#1A1A1A] stroke-[#333]" />
            <g transform="translate(1840, 330)">
              <rect x="0" y="0" width="16" height="16" className="fill-gray-300" rx="2" />
              <rect x="24" y="0" width="16" height="16" className="fill-gray-300" rx="2" />
              <rect x="0" y="24" width="16" height="16" className="fill-gray-300" rx="2" />
              <rect x="24" y="24" width="16" height="16" className="fill-gray-300" rx="2" />
            </g>
          </g>
          <g>
            <rect x="1820" y="460" width="80" height="80" rx="16" 
                  className="fill-[#1A1A1A] stroke-[#333]" />
            <circle cx="1860" cy="500" r="12" className="fill-gray-300" />
          </g>
          <g>
            <rect x="1820" y="610" width="80" height="80" rx="16" 
                  className="fill-[#1A1A1A] stroke-[#333]" />
            <text x="1860" y="660" className="text-2xl font-bold fill-gray-300 text-center"
                  dominantBaseline="middle" textAnchor="middle">P</text>
          </g>

          {/* AI Microcontroller */}
          <g transform="translate(975, 325)">
            {/* Main body */}
            <rect x="0" y="0" width="150" height="150" rx="16" 
                  className="fill-[#1A1A1A] stroke-[#333] stroke-2" />
            
            {/* Left pins - slightly rounded rectangles */}
            <rect x="-8" y="0" width="12" height="6" rx="3" className="fill-[#333]" />
            <rect x="-8" y="25" width="12" height="6" rx="3" className="fill-[#333]" />
            <rect x="-8" y="50" width="12" height="6" rx="3" className="fill-[#333]" />
            <rect x="-8" y="75" width="12" height="6" rx="3" className="fill-[#333]" />
            
            {/* Right pins */}
            <rect x="96" y="0" width="12" height="6" rx="3" className="fill-[#333]" />
            <rect x="96" y="25" width="12" height="6" rx="3" className="fill-[#333]" />
            <rect x="96" y="50" width="12" height="6" rx="3" className="fill-[#333]" />
            <rect x="96" y="75" width="12" height="6" rx="3" className="fill-[#333]" />
            
            {/* Bottom pins */}
            <rect x="12.5" y="102" width="6" height="12" rx="3" className="fill-[#333]" />
            <rect x="47" y="102" width="6" height="12" rx="3" className="fill-[#333]" />
            <rect x="81.5" y="102" width="6" height="12" rx="3" className="fill-[#333]" />
            
            {/* Text */}
            <text x="50" y="50" 
                  className="text-3xl font-bold fill-gray-300 text-center"
                  dominantBaseline="middle" textAnchor="middle">AI</text>
            
            {/* Circuit traces */}
            <path d="M10 10 H90 M10 90 H90" 
                  className="stroke-[#444] stroke-1" 
                  strokeDasharray="4 4" />
            <path d="M10 10 V90 M90 10 V90" 
                  className="stroke-[#444] stroke-1" 
                  strokeDasharray="4 4" />
          </g>

          {/* Enhanced glow filter */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feFlood floodColor="#FF6B00" floodOpacity="0.3" result="glowColor" />
              <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow" />
              <feMerge>
                <feMergeNode in="softGlow" />
                <feMergeNode in="softGlow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}