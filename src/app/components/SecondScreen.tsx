"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Nav";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBeamDemo } from "./AnimatedBeam";

const SecondScreen = () => {
  return (
    <div className="relative z-50 bg-[#040100] overflow-y-auto rounded-tl-3xl rounded-tr-3xl">
      <Spotlight className="top-0 right-0" />
      <div className=" top-5 ">
        <Navbar className="" />
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-dvh">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.6,
          }}
          className="text-center max-w-3xl mx-auto ]"
        >
          <div>
            <Button variant="outline" className="my-2">
              <Sparkles className="mr-2 h-4 w-4 text-orange-500" />
              Beta release
            </Button>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-gray-600 to-gray-100 inline-block text-transparent bg-clip-text mb-6">
            Inference at the Edge
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Boost your AI application's speed and efficiency globally by
            bringing inference closer to your users. Enjoy customization and
            cost-efficiency for a best-in-class inference experience.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <Button variant="orange" className="text-white">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Book a demo</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.9, // Delay this animation until after the content fade-in
          }}
          className="w-full max-w-4xl"
        >
          <AnimatedBeamDemo />
        </motion.div>
      </div>
    </div>
  );
};

export default SecondScreen;
