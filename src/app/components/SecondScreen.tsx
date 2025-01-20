"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Nav";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";

const SecondScreen = () => {
  return (
    <div className="relative z-50 bg-[#040100] overflow-y-auto rounded-tl-3xl rounded-tr-3xl">
      <Spotlight className="top-0 right-0" />
      <div className=" top-5 ">
        <Navbar className="" />
      </div>

      <div className=" px-4 flex flex-col items-center justify-center min-h-dvh">
        <div className="text-center max-w-3xl mx-auto ]">
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

          <motion.h1
            initial={{ opacity: 0, x: -30, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.3,
            }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-gray-600 to-gray-100 inline-block text-transparent bg-clip-text pb-7"
          >
            Inference at the Edge
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.5,
            }}
            className="text-gray-400 text-lg mb-8"
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
          }} className="flex justify-center space-x-4 mb-12">
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
