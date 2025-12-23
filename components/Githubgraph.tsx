"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

const Footerbar = () => {
  const { theme } = useTheme();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`flex flex-col items-center justify-center pt-12 px-4 pb-6 transition-colors duration-300 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <motion.div variants={itemVariants} className="w-full max-w-2xl">
        <h1
          className={`text-xl sm:text-2xl text-left font-sans mb-6 ${
            theme === "dark" ? "text-gray-200" : "text-gray-950"
          }`}
        >
          Github Contributions
        </h1>

        <div
          className={`
            w-full overflow-x-auto pb-2
            ${theme === "dark" ? "text-gray-200" : "text-gray-950"}
        `}
        >
          <div className="min-w-fit">
            <GitHubCalendar
              username="Krishcodesw"
              colorScheme={theme === "dark" ? "dark" : "light"}
              blockSize={10}
              blockMargin={3}
              fontSize={12}
            />
          </div>
        </div>
        <h1
          className={`text-xl sm:text-2xl text-left font-sans mt-6 ${
            theme === "dark" ? "text-gray-200" : "text-gray-950"
          }`}
        >
          You've come this far, here's my favourite song -
        </h1>
        <motion.p className="pt-5">
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/track/5XseQZ9TGr06Rv1Ye6wCu0?utm_source=generator&theme=0"
            width="100%"
            height=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Footerbar;
