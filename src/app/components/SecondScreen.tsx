"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Nav";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const SecondScreen = () => {
  const heading = ["Inference", "at", "the", "Edge"];

  return (
    <div className="relative z-50 bg-[#040100] overflow-y-auto rounded-tl-3xl rounded-tr-3xl">
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_top,white,transparent)]"
        )}
      />
      <Spotlight className="top-0 right-0" />
      <div className=" top-5 ">
        <Navbar className="" />
      </div>

      <div className=" px-4 flex flex-col items-center justify-center min-h-dvh">
        <div className="text-center pt-20  mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.9,
            }}
          >
            <Button variant="outline" className="my-2">
              <Sparkles className="mr-2 h-4 w-4 text-orange-500" />
              Beta release
            </Button>
          </motion.div>

          <h1 className="flex justify-center  flex-wrap items-center gap-x-3 text-4xl md:text-6xl font-bold">
            {heading.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50, scale: 1.2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.5,
                  scale: {
                    type: "spring",
                    damping: 8,
                  },
                }}
                className="bg-gradient-to-b text-wrap from-gray-600 pb-5 font-semibold to-white inline-block text-transparent bg-clip-text"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* <motion.h1
            initial={{ opacity: 0, y: 30, scale: 1.2}}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.3,
            }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-gray-600 to-gray-100 inline-block text-transparent bg-clip-text pb-7"
          >
            Inference at the Edge
          </motion.h1> */}

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.5,
            }}
            className="text-gray-400 max-w-xl text-sm md:text-lg mb-8 leading-6 mx-auto"
          >
            {`Boost your AI application's speed and efficiency globally by
            bringing inference closer to your users. Enjoy customization and
            cost-efficiency for a best-in-class inference experience.`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.8,
            }}
            className="flex justify-center space-x-4 mb-12"
          >
            <Button variant="orange" className="text-white">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Book a demo</Button>
          </motion.div>
        </div>

        <AnimatedBeamDemo />
      </div>
    </div>
  );
};

export default SecondScreen;
