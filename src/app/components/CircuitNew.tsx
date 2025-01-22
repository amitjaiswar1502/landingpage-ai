"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    pathRefs.current.forEach((path, index) => {
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length * 0.1} ${length}`;
        path.style.strokeDashoffset = length.toString();

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
        );
      }
    });
  }, []);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto aspect-[21/9] p-4 md:p-8 overflow-y-auto">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 2100 900"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Base circuit paths */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.2,
            ease: "easeInOut",
          }}
          className="stroke-[#222] stroke-[5px]"
        >
          {/* Left side paths - First segments */}
          <path d="M959 333 L850 333" />
          <path d="M959 363 L850 365" />
          <path d="M959 393 L850 393" />
          <path d="M959 423 L850 423" />

          {/* Left side paths - Middle segments */}
          <path d="M850 333 L700 200" />
          <path d="M850 363 L700 350" />
          <path d="M850 393 L700 500" />
          <path d="M850 423 L700 650" />

          {/* Left side paths - End segments */}
          <path d="M700 200 L290 200" />
          <path d="M700 350 L180 350" />
          <path d="M700 500 L250 500" />
          <path d="M700 650 L270 650" />

          {/* Right side paths - First segments */}
          <path d="M1083 333 L1200 333" />
          <path d="M1083 363 L1200 363" />
          <path d="M1083 393 L1200 393" />
          <path d="M1083 423 L1200 423" />

          {/* Right side paths - Middle segments */}
          <path d="M1200 333 L1400 200" />
          <path d="M1200 363 L1400 350" />
          <path d="M1200 393 L1400 500" />
          <path d="M1200 423 L1400 650" />

          {/* Right side paths - End segments */}
          <path d="M1400 200 L1750 200" />
          <path d="M1400 350 L1900 350" />
          <path d="M1400 500 L1750 500" />
          <path d="M1400 650 L1750 650" />
        </motion.g>

        {/* Animated paths */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.2,
            ease: "easeInOut",
          }}
          className="stroke-[#FF6B00] stroke-[4px]"
          style={{ filter: "url(#glow)" }}
        >
          {[
            // Left side paths
            "M959 333 L850 333",
            "M850 333 L700 200",
            "M700 200 L290 200",
            "M959 363 L850 365",
            "M850 363 L700 350",
            "M700 350 L180 350",
            "M959 393 L850 393",
            "M850 393 L700 500",
            "M700 500 L250 500",
            "M959 423 L850 423",
            "M850 423 L700 650",
            "M700 650 L270 650",
            // Right side paths
            "M1083 333 L1200 333",
            "M1200 333 L1400 200",
            "M1400 200 L1750 200",
            "M1083 363 L1200 363",
            "M1200 363 L1400 350",
            "M1400 350 L1900 350",
            "M1083 393 L1200 393",
            "M1200 393 L1400 500",
            "M1400 500 L1750 500",
            "M1083 423 L1200 423",
            "M1200 423 L1400 650",
            "M1400 650 L1750 650",
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
        </motion.g>

        {/* Left Nodes - varying sizes */}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.5,
            ease: "easeInOut",
          }}
        >
          <rect
            x="187"
            y="152"
            width="100"
            height="100"
            rx="30"
            className="fill-[#1A1A1A] stroke-[#333]"
          />
          <text
            x="236"
            y="202"
            className="text-4xl font-bold fill-gray-300 text-center"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            A
          </text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.5,
            ease: "easeInOut",
          }}
        >
          <rect
            x="110"
            y="310"
            width="70"
            height="70"
            rx="25"
            className="fill-[#1A1A1A] stroke-[#333] "
          />
          <text
            x="150"
            y="350"
            className="text-2xl font-bold fill-gray-300 text-center"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            S.
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.5,
            ease: "easeInOut",
          }}
        >
          <rect
            x="160"
            y="440"
            width="120"
            height="120"
            rx="16"
            className="fill-[#1A1A1A] stroke-[#333]"
          />
          <text
            x="218"
            y="505"
            className="text-5xl font-bold fill-gray-300 text-center"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            M
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.5,
            ease: "easeInOut",
          }}
        >
          <rect
            x="190"
            y="610"
            width="80"
            height="80"
            rx="16"
            className="fill-[#1A1A1A] stroke-[#333]"
          />
          <text
            x="230"
            y="650"
            className="text-3xl font-bold fill-gray-300 text-center"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            D
          </text>
        </motion.g>

        {/* Right Nodes - varying sizes */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.5,
            ease: "easeInOut",
          }}
        >
          <rect
            x="1750"
            y="150"
            width="100"
            height="100"
            rx="16"
            className="fill-[#1A1A1A] stroke-[#333]"
          />
          <text
            x="1800"
            y="200"
            className="text-3xl font-bold fill-gray-300 text-center"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            S.
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.5,
            ease: "easeInOut",
          }}
        >
          <rect
            x="1900"
            y="310"
            width="100"
            height="100"
            rx="16"
            className="fill-[#1A1A1A] stroke-[#333]"
          />
          <g transform="translate(1920, 330)">
            <rect
              x="0"
              y="0"
              width="25"
              height="25"
              className="fill-gray-300"
              rx="2"
            />
            <rect
              x="35"
              y="0"
              width="25"
              height="25"
              className="fill-gray-300"
              rx="2"
            />
            <rect
              x="0"
              y="35"
              width="25"
              height="25"
              className="fill-gray-300"
              rx="2"
            />
            <rect
              x="35"
              y="35"
              width="25"
              height="25"
              className="fill-gray-300"
              rx="2"
            />
          </g>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.5,
            ease: "easeInOut",
          }}
        >
          <rect
            x="1750"
            y="460"
            width="90"
            height="90"
            rx="16"
            className="fill-[#1A1A1A] stroke-[#333]"
          />
          <circle cx="1795" cy="505" r="18" className="fill-gray-300" />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.5,
            ease: "easeInOut",
          }}
        >
          <rect
            x="1750"
            y="610"
            width="80"
            height="80"
            rx="16"
            className="fill-[#1A1A1A] stroke-[#333]"
          />
          <text
            x="1790"
            y="650"
            className="text-3xl font-bold fill-gray-300 text-center"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            P
          </text>
        </motion.g>

        {/* AI Microcontroller */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.8,
            ease: "easeInOut",
          }}
          transform="translate(967, 325)"
        >
          {/* Main body */}
          <rect
            x="0"
            y="0"
            width="116"
            height="116"
            rx="20"
            className="fill-[#1A1A1A] stroke-[#333] stroke-2"
          />

          {/* Left pins - slightly rounded rectangles */}
          <rect
            x="-8"
            y="8"
            width="12"
            height="6"
            rx="3"
            className="fill-[#333]"
          />
          <rect
            x="-8"
            y="38"
            width="12"
            height="6"
            rx="3"
            className="fill-[#333]"
          />
          <rect
            x="-8"
            y="68"
            width="12"
            height="6"
            rx="3"
            className="fill-[#333]"
          />
          <rect
            x="-8"
            y="98"
            width="12"
            height="6"
            rx="3"
            className="fill-[#333]"
          />

          {/* Right pins */}
          <rect
            x="112"
            y="8"
            width="12"
            height="6"
            rx="3"
            className="fill-[#333]"
          />
          <rect
            x="112"
            y="38"
            width="12"
            height="6"
            rx="3"
            className="fill-[#333]"
          />
          <rect
            x="112"
            y="68"
            width="12"
            height="6"
            rx="3"
            className="fill-[#333]"
          />
          <rect
            x="112"
            y="98"
            width="12"
            height="6"
            rx="3"
            className="fill-[#333]"
          />

          {/* Bottom pins */}
          <rect
            x="14"
            y="116"
            width="6"
            height="12"
            rx="3"
            className="fill-[#333]"
          />
          <rect
            x="55"
            y="116"
            width="6"
            height="12"
            rx="3"
            className="fill-[#333]"
          />
          <rect
            x="96"
            y="116"
            width="6"
            height="12"
            rx="3"
            className="fill-[#333]"
          />

          {/* Text */}
          <text
            x="58"
            y="58"
            className="text-5xl font-bold fill-gray-300 text-center"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            AI
          </text>

          {/* Circuit traces */}
          {/* <path
            d="M12 12 H104 M12 104 H104"
            className="stroke-[#444] stroke-1"
            strokeDasharray="4 4"
          />
          <path
            d="M12 12 V104 M104 12 V104"
            className="stroke-[#444] stroke-1"
            strokeDasharray="4 4"
          /> */}
        </motion.g>

        {/* Enhanced glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feFlood
              floodColor="#FF6B00"
              floodOpacity="0.3"
              result="glowColor"
            />
            <feComposite
              in="glowColor"
              in2="coloredBlur"
              operator="in"
              result="softGlow"
            />
            <feMerge>
              <feMergeNode in="softGlow" />
              <feMergeNode in="softGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
