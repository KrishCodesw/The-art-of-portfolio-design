"use client";

import { motion } from "framer-motion";
import { useTheme } from "../ThemeProvider";

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
      className={` flex items-start pt-40 justify-center px-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-2xl text-center">
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          id="name"
          className={`text-xl md:text-2xl text-left  font-sans mb-6 transition-colors duration-100 ${
            theme === "dark" ? "text-gray-200" : "text-gray-950"
          }`}
        >
          Krish<br></br>
          <span
            className={`bg-linear-to-r text-lg ${
              theme === "dark" ? "bg-gray-400" : "bg-gray-800"
            }  bg-clip-text text-transparent`}
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
            className={`text-sm text-left font-sans md:text-2xl transition-colors duration-300 ${
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
            className={`text-xl text-left font-sans mb-6 md:text-2xl transition-colors duration-300 ${
              theme === "dark" ? "text-sky-500" : "text-blue-700"
            }`}
          >
            dev & devops
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`text-base md:text-xl font-sans  text-left mb-6 leading-relaxed transition-colors  duration-300 ${
            theme === "dark" ? "text-amber-100" : "text-black"
          }`}
        >
          Web developer and Devops engineer with a really good eye for
          aesthetics & strong hold on backend, deployments & scaling.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className={`text-sm md:text-lg font-sans   text-left  leading-relaxed transition-colors  duration-300 ${
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
          </a>{" "}
          .
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Introduction;
