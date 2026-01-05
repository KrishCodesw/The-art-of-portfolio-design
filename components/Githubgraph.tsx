"use client";

import { GitHubCalendar } from "react-github-calendar";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

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
          className={`text-xl sm:text-2xl text-left  ${
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

        <footer
          className={`relative w-full  px-6 pt-3 pb-10 overflow-hidden transition-colors duration-300 ${
            theme === "dark"
              ? "bg-linear-to-t from-black via-black to-transparent text-white"
              : "bg-linear-to-t from-white via-white to-transparent text-black"
          }`}
        >
          {/* Ambient Blend Layer */}
          <div className={`absolute inset-0 pointer-events-none `} />

          <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
            {/* Main Thought */}
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ready to Build Something Great?
              <span
                className={`block ${
                  theme === "dark" ? "text-white/60" : "text-black/60"
                } text-lg md:text-xl`}
              >
                I'm available for freelance projects, consulting, and
                collaborations.
              </span>
            </h2>

            {/* Conceptual Divider */}
            <div
              className={`w-24 h-px ${
                theme === "dark"
                  ? "bg-linear-to-r from-transparent via-white/30 to-transparent"
                  : "bg-linear-to-r from-transparent via-black/30 to-transparent"
              }`}
            />

            {/* Identity */}
            <p
              className={`text-sm ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Krish Jain — Developer & Builder
            </p>

            {/* Socials */}
            <div
              className={`flex gap-6 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <a
                href="https://github.com/Krishcodesw"
                target="_blank"
                className="hover:opacity-100 transition"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/krish-jain-445aa332a/"
                target="_blank"
                className="hover:opacity-100 transition"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://x.com/KrishJainw"
                target="_blank"
                className="hover:opacity-100 transition"
              >
                <SiX />
              </a>
            </div>

            {/* Closing Detail */}
            <p
              className={`text-xs ${
                theme === "dark" ? "text-white/" : "text-black/"
              }`}
            >
              Still building — {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default Footerbar;
