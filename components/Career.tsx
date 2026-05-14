"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
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
  const isDark = theme === "dark";

  // Mouse tracking for the magnetic read-more button
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [3, -3]);
  const rotateY = useTransform(mouseX, [-100, 100], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        id="disable-selection"
        // Enforced pitch black background for dark mode
        className={`flex items-start justify-center px-4 sm:px-6 md:px-8 pb-0 transition-colors duration-300 overflow-hidden ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-2xl w-full mx-auto text-center">
          {/* --- CAREER SECTION --- */}
          <motion.h1
            variants={itemVariants}
            id="name"
            className={`text-xl sm:text-2xl text-left font-sans mb-3 transition-colors duration-150 ${
              isDark ? "text-gray-200" : "text-gray-950"
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
                isDark ? "text-gray-300" : "text-black"
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
                  isDark ? "bg-gray-400" : "bg-gray-800"
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
                isDark ? "text-gray-300" : "text-black"
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
                  isDark ? "bg-gray-400" : "bg-gray-800"
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
                isDark ? "text-gray-300" : "text-black"
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
                  isDark ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                Full Stack Intern, Apr 2026 - Present
              </span>
            </motion.p>
          </motion.div>

          {/* --- FEATURED BLOGS --- */}
          <motion.div
            variants={itemVariants}
            className="mt-16 space-y-8 w-full max-w-full"
          >
            <h2
              className={`text-xl sm:text-2xl text-left font-sans mb-8 transition-colors duration-150 ${
                isDark ? "text-gray-200" : "text-gray-950"
              }`}
            >
              Blogs
            </h2>

            {/* THE ARCHIVIST'S ENTRY - BLOG CARD */}
            <motion.div
              className="relative w-full"
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                // Applied bg-black with a subtle border so it doesn't blend perfectly into the page body
                className={`relative overflow-hidden rounded-sm cursor-none border w-full ${
                  isDark
                    ? "bg-black border-white/5"
                    : "bg-[#f5f5f0] border-black/5"
                }`}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                initial={{ rotate: 0.3 }}
                whileHover={{
                  y: -6,
                  x: -2,
                  rotate: 0,
                  boxShadow: isDark
                    ? "12px 12px 0px 0px rgba(255,255,255,0.12)"
                    : "12px 12px 0px 0px rgba(0,0,0,0.18)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                animate={{
                  boxShadow: isDark
                    ? "6px 6px 0px 0px rgba(255,255,255,0.08)"
                    : "6px 6px 0px 0px rgba(0,0,0,0.12)",
                }}
              >
                {/* Paper grain texture overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Top file tabs */}
                <div className="absolute top-0 left-0 right-0 flex gap-1 px-4 sm:px-6 pt-3 sm:pt-4">
                  <motion.div
                    className={`h-0.5 rounded-full ${
                      isDark ? "bg-[#333]" : "bg-[#d4d4d4]"
                    }`}
                    initial={{ width: "40%" }}
                    whileHover={{ width: "35%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className={`h-0.5 rounded-full ${
                      isDark ? "bg-[#444]" : "bg-[#c4c4c4]"
                    }`}
                    initial={{ width: "25%" }}
                    whileHover={{ width: "30%" }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  />
                  <motion.div
                    className={`h-0.5 rounded-full ${
                      isDark ? "bg-[#333]" : "bg-[#d4d4d4]"
                    }`}
                    initial={{ width: "20%" }}
                    whileHover={{ width: "25%" }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </div>

                {/* Red thread SVG */}
                <svg
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-20 sm:h-24 pointer-events-none"
                  viewBox="0 0 2 96"
                  preserveAspectRatio="none"
                >
                  <motion.line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="96"
                    stroke={isDark ? "#ff6b6b" : "#c41e3a"}
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileHover={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </svg>

                {/* Content - Adjusted padding for phones (p-5 vs p-6) */}
                <div className="relative z-10 p-5 sm:p-6 pt-10 sm:pt-12 pb-6 sm:pb-8 flex flex-col items-start w-full">
                  {/* Catalog stamp */}
                  <motion.div
                    className={`absolute top-3 sm:top-4 right-4 sm:right-5 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase ${
                      isDark ? "text-[#555]" : "text-[#999]"
                    }`}
                    initial={{ rotate: -8, scale: 0.9, opacity: 0.6 }}
                    whileHover={{ rotate: -3, scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  ></motion.div>

                  {/* Title - Enforced left alignment */}
                  <h3
                    className={` text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight sm:leading-none mb-4 sm:mb-6 text-left w-full ${
                      isDark ? "text-[#e5e5e0]" : "text-[#1a1a1a]"
                    }`}
                  >
                    <Link
                      href="/blogs/blog1"
                      className="group inline-block relative max-w-full"
                    >
                      <span className="relative z-10">
                        The Blueprint to Senior-Level Code
                      </span>
                      {/* Hand-drawn underline effect */}
                      <motion.span
                        className={`absolute bottom-0 left-0 h-0.5 w-full origin-left ${
                          isDark ? "bg-[#ff6b6b]" : "bg-[#c41e3a]"
                        }`}
                        initial={{ scaleX: 0.3, opacity: 0.5 }}
                        whileHover={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </Link>
                  </h3>

                  {/* Description - Removed ml-[15%] and enforced text-left */}
                  <p
                    className={`text-sm sm:text-base leading-relaxed text-left w-full ${
                      isDark ? "text-[#888]" : "text-[#555]"
                    }`}
                  >
                    Reverse engineering a Modular Full-Stack Architecture. Learn
                    how to build scalable full-stack applications without
                    monorepos.
                  </p>

                  {/* Bottom metadata row */}
                  <div className="mt-6 sm:mt-8 flex items-end justify-between w-full">
                    {/* Date pill */}
                    <div
                      className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 border ${
                        isDark
                          ? "border-[#333] text-[#666]"
                          : "border-[#ddd] text-[#777]"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider whitespace-nowrap">
                        12 min read
                      </span>
                    </div>

                    {/* Magnetic read more */}
                    <motion.div
                      className="relative shrink-0 ml-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Link
                        href="/blogs/blog1"
                        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${
                          isDark
                            ? "border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-black"
                            : "border-[#c41e3a] text-[#c41e3a] hover:bg-[#c41e3a] hover:text-white"
                        } transition-colors duration-200`}
                      >
                        <ArrowUpRight
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          strokeWidth={2.5}
                        />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom edge accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-[3px] ${
                    isDark ? "bg-[#ff6b6b]" : "bg-[#c41e3a]"
                  }`}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>

            <Link
              href="/blogs"
              className={`inline-block text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity mt-6 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
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
