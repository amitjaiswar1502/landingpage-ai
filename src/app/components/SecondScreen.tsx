"use client";
import { motion } from "motion/react";
import React from "react";
import { Navbar } from "./Nav";

const SecondScreen = () => {
  return (
    <>
      <div>
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <Navbar className="top-10" />
          <motion.div
            className="h-full w-full flex flex-col items-center justify-center p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <h2 className="text-8xl font-bold mb-8 text-white">Welcome</h2>
            <p className="text-2xl text-center max-w-3xl text-white/90">
              Experience the next generation of web performance and security
              solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SecondScreen;
