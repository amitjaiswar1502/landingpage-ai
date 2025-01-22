"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Nav";
import { Spotlight } from "@/components/ui/spotlight";
import {Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import CircuitNew from "./CircuitNew";

const SecondScreen = () => {
  const heading = ["Inference", "at", "the", "Edge"];

  return (
    <div className="relative z-50 bg-[#040100] w-full h-full overflow-y-auto rounded-tl-3xl rounded-tr-3xl">
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_top,white,transparent)] opacity-50"
        )}
      />
      <Spotlight className="top-0 right-0" />

      <Navbar className="top-5" />

      <div className=" py-10 flex flex-col items-center justify-center ">
        <div className="text-center pt-20  mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.9,
            }}
          >
            <Button variant="outline" className="my-2 relative z-10">
              <Sparkles className="mr-1 h-4 w-4 text-orange-500" />
              Beta release
            </Button>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 1.2 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.9,
            }}
            className="flex justify-center  flex-wrap items-center gap-x-3 text-4xl md:text-7xl font-bold"
          >
            {heading.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.5,
                  scale: {
                    type: "spring",
                    damping: 8,
                  },
                }}
                className="bg-gradient-to-b text-wrap from-gray-600 pb-5 font-normal to-white inline-block text-transparent bg-clip-text"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.6,
            }}
            className="text-gray-500 max-w-xl text-sm md:text-lg mb-8 leading-normal mx-auto"
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
            <Button
              variant="orange"
              className="text-white text-md py-4 px-6 relative z-10"
            >
              Get started
              {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Button>
            <Button className="py-4 px-6 relative z-10" variant="outline">
              Book a demo
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{  y: 100 }}
          animate={{  y: -50 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="w-full"
        >
          <CircuitNew />
        </motion.div>
      </div>
    </div>
  );
};

export default SecondScreen;
