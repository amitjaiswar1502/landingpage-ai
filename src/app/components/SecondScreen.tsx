"use client";
import { motion } from "motion/react";
import React from "react";
import { Navbar } from "./Nav";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { small } from "framer-motion/client";
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";


const SecondScreen = () => {
  return (
    <div className=" h-screen w-screen overflow-y-auto bg-[#080401]">
      <Spotlight className="top-0 right-0 md:right-0 md:top-0" />
      <Navbar className="top-5" />

      
        <div className="flex flex-col items-center justify-center">
          <Button variant={"outline"}>
            <Sparkles color="orange" /> Beta release
          </Button>

          <h1 className="text-5xl md:text-6xl bg-gradient-to-b from-gray-600  to-gray-100 inline-block text-transparent bg-clip-text mb-6">
            Inference at the Edge
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            Boost your AI application's speed and efficiency globally by
            bringing inference closer to your users. Enjoy customization and
            cost-efficiency for a best-in-class inference experience.
          </p>
          <div className=" space-x-4">
            <Button variant={"orange"} className="text-white">
              Get started
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button variant={"outline"} className="">
              Book a demo
            </Button>
          </div>
        <AnimatedBeamDemo />
        </div>

  
    </div>
  );
};

export default SecondScreen;
