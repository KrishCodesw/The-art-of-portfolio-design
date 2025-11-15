"use client";

import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

const Footerbar = () => {
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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        id="disable-selection"
        className={`flex items-start  justify-center pt-12  px-4 sm:px-6 md:px-8  pb-0 transition-colors duration-300 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        {" "}
        <motion.h1
          variants={itemVariants}
          id="name"
          className={`text-xl sm:text-2xl text-left font-sans mb-6 transition-colors duration-150 ${
            theme === "dark" ? "text-gray-200" : "text-gray-950"
          }`}
        >
          K&nbsp;&nbsp;R&nbsp;&nbsp;I&nbsp;&nbsp;S&nbsp;&nbsp;H
          <br />
        </motion.h1>
      </motion.div>
    </>
  );
};

export default Footerbar;
