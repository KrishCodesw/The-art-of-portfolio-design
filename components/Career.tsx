"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CareerTab = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const { theme } = useTheme();

  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        id="disable-selection"
        className={`flex items-start justify-center px-4 sm:px-6 md:px-8 pb-0 transition-colors duration-300 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-2xl w-full mx-auto text-center">
          {/* --- CAREER SECTION --- */}
          <motion.h1
            variants={itemVariants}
            id="name"
            className={`text-xl sm:text-2xl text-left font-sans mb-3 transition-colors duration-150 ${
              theme === "dark" ? "text-gray-200" : "text-gray-950"
            }`}
          >
            Career
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className={`text-sm sm:text-base md:text-lg pt-2 text-left font-sans transition-colors duration-150 ${
                theme === "dark" ? "text-gray-300" : "text-black"
              }`}
            >
              <a
                href="https://www.effilearn.in/"
                target="_blank"
                className="flex gap-1 items-center underline underline-offset-4"
              >
                Effilearn <ArrowUpRight size={18} />
              </a>

              <span
                className={`bg-linear-to-r pt-0 text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                Full Stack Intern, July 2025 - Sept 2025
              </span>
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className={`text-sm sm:text-base md:text-lg pt-4 text-left font-sans transition-colors duration-150 ${
                theme === "dark" ? "text-gray-300" : "text-black"
              }`}
            >
              <a
                href="https://aetheronai.onrender.com/"
                target="_blank"
                className="flex gap-1 items-center underline underline-offset-4"
              >
                Aetheron.ai <ArrowUpRight size={18} />
              </a>

              <span
                className={`bg-linear-to-r pt-0 text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                Full Stack & RnD Intern , Mar 2025 - Dec 2025
              </span>
            </motion.p>
          </motion.div>

          {/* --- BLOGS LINK --- */}
          <motion.h1
            variants={itemVariants}
            className={`text-xl sm:text-2xl text-left font-sans mt-12 mb-3 transition-colors duration-150 ${
              theme === "dark" ? "text-gray-200" : "text-gray-950"
            }`}
          >
            <Link
              href="/blogs"
              className="flex items-center gap-1 w-fit hover:opacity-80 transition-opacity underline underline-offset-4"
            >
              Blogs
            </Link>
          </motion.h1>
        </div>
      </motion.section>
    </>
  );
};

export default CareerTab;
