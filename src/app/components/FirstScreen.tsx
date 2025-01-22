"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import SecondScreen from "./SecondScreen";
import { ArrowRight, Globe } from "lucide-react";

export default function FirstScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const [showG, setShowG] = useState(false);
  const [showCore, setShowCore] = useState(false);

  useEffect(() => {
    const gTimer = setTimeout(() => setShowG(true), 1500); // Delay to show "G"
    const coreTimer = setTimeout(() => setShowCore(true), 2000);
    const loadingTimer = setTimeout(() => setIsLoading(false), 3500);
    const pageTimer = setTimeout(() => setShowPage(true), 4000);

    return () => {
      clearTimeout(gTimer);
      clearTimeout(coreTimer);
      clearTimeout(loadingTimer);
      clearTimeout(pageTimer);
    };
  }, []);

  return (
    <main className="relative h-dvh w-screen bg-[#151515] overflow-hidden text-white">
      {/* Top Header */}
      <div className="hidden md:flex text-sm text-gray-100  justify-between items-start relative top-0 left-0 right-0 z-50">
        <div className="flex mx-10 items-center p-2 justify-center gap-1">
          <span className="text-orange-500 hidden md:inline">•</span> GPU AI/ML
          Apps Today! Nvidia A100s & H100s for £1.3/h
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
            transition={{ duration: 2 }}
          >
            <motion.div
              className="flex items-center"
              initial={{ x: "50%" }}
              animate={{ x: showCore ? "0" : "50%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div className="flex items-center justify-center bg-white border-[1px] border-black size-[9vw] aspect-square text-black rounded-full overflow-hidden">
                <AnimatePresence mode="wait">
                  {!showG ? (
                    <motion.span
                      key="O"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-[9vw] font-bold tracking-wider flex items-center justify-center h-full"
                    >
                      O
                    </motion.span>
                  ) : (
                    <motion.span
                      key="G"
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: "-10%", rotate: -3 }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className="text-[11vw] font-bold tracking-wider"
                    >
                      G
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              <AnimatePresence>
                {showCore && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.3,
                    }}
                    className="text-[11vw] font-bold tracking-wider"
                  >
                    core
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showPage && (
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "100vh" }}
          transition={{
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="size-[100%] flex flex-col items-center justify-center overflow-y-auto"
        >
          <SecondScreen />
        </motion.div>
      )}
    </main>
  );
}
