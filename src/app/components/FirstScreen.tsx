"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import SecondScreen from "./SecondScreen";

export default function FirstScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const [showCore, setShowCore] = useState(false);

  useEffect(() => {
    // Show 'core' text after G rotation
    const coreTimer = setTimeout(() => setShowCore(true), 1650);
    // Start page transition
    const loadingTimer = setTimeout(() => setIsLoading(false), 3000);
    // Show final page
    const pageTimer = setTimeout(() => setShowPage(true), 3500);

    return () => {
      clearTimeout(coreTimer);
      clearTimeout(loadingTimer);
      clearTimeout(pageTimer);
    };
  }, []);

  return (
    <>
      <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-0"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div className="relative flex items-center">
                <motion.span
                  className="text-[20vw] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  G
                </motion.span>

                {showCore && (
                  <motion.span
                    className="text-[20vw] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ scaleX: 0, originX: 1 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 1.8,
                      ease: [0.34, 1.16, 0.64, 1],
                    }}
                  >
                    core
                  </motion.span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>{showPage && <SecondScreen />}</AnimatePresence>
      </main>
    </>
  );
}
