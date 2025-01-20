"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import SecondScreen from "./SecondScreen";
import { ArrowRight, Globe } from "lucide-react";

export default function FirstScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const [showCore, setShowCore] = useState(false);
  const [rotationComplete, setRotationComplete] = useState(false);

  useEffect(() => {
    const rotationTimer = setTimeout(() => setRotationComplete(true), 1200);
    const coreTimer = setTimeout(() => setShowCore(true), 1500);
    const loadingTimer = setTimeout(() => setIsLoading(false), 3000);
    const pageTimer = setTimeout(() => setShowPage(true), 3500);

    return () => {
      clearTimeout(rotationTimer);
      clearTimeout(coreTimer);
      clearTimeout(loadingTimer);
      clearTimeout(pageTimer);
    };
  }, []);

  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-black text-white">
      <div className="hidden md:flex  bg-[#151515] justify-between items-start relative top-0 left-0 right-0 z-50">
        <div className="flex mx-10 items-center p-2 justify-center gap-1">
          GPU AI/ML Apps Today! Nvidia A100s & H100s for £1.3/h
          <span className="p-1 rounded-full border-2">
            <ArrowRight size={12} />
          </span>
        </div>
        <div className="flex mx-10 items-center p-2 justify-center gap-5">
          <span>Under Attack?</span>
          <span>Login</span>
          <span className="flex items-center gap-1">
            <Globe size={16} /> EN
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex items-center"
              initial={{ x: "50%" }}
              animate={{ x: showCore ? "0%" : "50%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className="flex items-center justify-center bg-white h-[12vw] aspect-square text-black rounded-full overflow-hidden"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                onAnimationComplete={() => setRotationComplete(true)}
              >
                <span className="text-[12vw] font-bold tracking-wider">G</span>
              </motion.div>

              <AnimatePresence>
                {rotationComplete && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    className="text-[12vw] font-bold tracking-wider"
                  >
                    core
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>{showPage && <SecondScreen />}</AnimatePresence>
    </main>
  );
}
