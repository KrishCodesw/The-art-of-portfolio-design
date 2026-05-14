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
                href="https://fyregig.com/"
                target="_blank"
                className="flex gap-1 items-center underline underline-offset-4"
              >
                Fyregig <ArrowUpRight size={18} />
              </a>

              <span
                className={`bg-linear-to-r pt-0 text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                Full Stack Intern, Apr 2026 - Present
              </span>
            </motion.p>
          </motion.div>

          {/* --- FEATURED BLOGS --- */}
          <motion.div variants={itemVariants} className="mt-12 space-y-6">
            <h2
              className={`text-xl sm:text-2xl text-left font-sans mb-4 transition-colors duration-150 ${
                theme === "dark" ? "text-gray-200" : "text-gray-950"
              }`}
            >
              Blogs
            </h2>

            <div
              className={`relative p-4 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
                  : "bg-gradient-to-r from-gray-100 via-white to-gray-50"
              }`}
            >
              <div
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/path-to-background-image.jpg)",
                }}
              ></div>
              <h3
                className={`relative z-10 text-lg font-bold transition-colors duration-150 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <Link href="/blogs/blog1" className="hover:underline">
                  The Blueprint to Senior-Level Code
                </Link>
              </h3>
              <p
                className={`relative z-10 mt-2 text-sm leading-snug transition-colors duration-150 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Reverse engineering a Modular Full-Stack Architecture. Learn how
                to build scalable full-stack applications without monorepos.
              </p>
              <div
                className={`relative z-10 mt-2 inline-flex items-center text-sm font-medium transition-colors duration-150 ${
                  theme === "dark" ? "text-sky-400" : "text-blue-600"
                }`}
              >
                Read more
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </div>
            </div>

            <Link
              href="/blogs"
              className="text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              View all posts
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default CareerTab;
