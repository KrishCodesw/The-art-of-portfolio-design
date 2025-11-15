"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const Introduction = () => {
  const { theme } = useTheme();

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

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="disable-selection"
      className={`flex items-start justify-center  px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-24 pb-0 transition-colors duration-300 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-2xl w-full mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          id="name"
          className={`text-xl sm:text-2xl text-left font-sans mb-6 transition-colors duration-150 ${
            theme === "dark" ? "text-gray-200" : "text-gray-950"
          }`}
        >
          Krish
          <br />
          <span
            className={`bg-linear-to-r text-base sm:text-lg md:text-xl ${
              theme === "dark" ? "bg-gray-400" : "bg-gray-800"
            } bg-clip-text text-transparent`}
          >
            18, passionate.
          </span>
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 }, // stagger the children
            },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className={`text-sm sm:text-base md:text-lg text-left font-sans transition-colors duration-150 ${
              theme === "dark" ? "text-gray-300" : "text-black"
            }`}
          >
            computer engineering student, who specializes in,
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className={`text-lg sm:text-xl md:text-2xl text-left font-sans mb-6 transition-colors duration-150 ${
              theme === "dark" ? "text-sky-500" : "text-blue-700"
            }`}
          >
            dev & devops
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`text-base sm:text-lg md:text-xl font-sans text-left mb-6 leading-relaxed transition-colors duration-150 ${
            theme === "dark" ? "text-amber-100" : "text-black"
          }`}
        >
          Web developer and Devops engineer with a really good eye for
          aesthetics & strong hold on backend, deployments & scaling.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className={`text-sm sm:text-base md:text-base leading-relaxed transition-colors duration-150 text-left ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          Shitposting on{" "}
          <a
            href="https://x.com/KrishJainw"
            target="_blank"
            className="underline"
          >
            X
          </a>{" "}
          . You can always reach me at this{" "}
          <a href="mailto:krishjain.w@gmail.com" className="underline">
            email
          </a>
          .
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Introduction;
