"use client";
import { useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
// import { Spotify } from "react-spotify-embed";
import dynamic from "next/dynamic";

const Spotify = dynamic(
  () => import("react-spotify-embed").then((mod) => mod.Spotify),
  { ssr: false }, // Completely removes it from server-side rendering
);
import { useTheme } from "./ThemeProvider";
import { motion, useInView } from "framer-motion";

const Footerbar = () => {
  const { theme } = useTheme();
  const spotifyRef = useRef(null);
  const isSpotifyInView = useInView(spotifyRef, {
    once: true,
    margin: "200px",
  });
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
        {/* Github Section */}
        <h2
          className={`text-xl sm:text-2xl font-semibold tracking-tight mb-6 ${
            theme === "dark" ? "text-gray-200" : "text-gray-900"
          }`}
        >
          GitHub Contributions
        </h2>

        {/* MATH FIX: 53 columns * (10px + 2px) = 636px. 
            This safely fits inside your max-w-2xl (672px) boundary. 
            No overflow wrapper needed! 
        */}
        <div className="w-full flex justify-center sm:justify-start">
          <GitHubCalendar
            username="Krishcodesw"
            colorScheme={theme === "dark" ? "dark" : "light"}
            blockSize={10}
            blockMargin={2}
            fontSize={12}
          />
        </div>
        <h1
          className={`text-xl sm:text-2xl text-left font-sans mt-6 ${
            theme === "dark" ? "text-gray-200" : "text-gray-950"
          }`}
        >
          You've come this far, here's my favourite playlist -
        </h1>
        <motion.div
          ref={spotifyRef}
          className="w-full mt-5 min-h-[152px] bg-neutral-100 dark:bg-neutral-900  rounded-2xl"
          // Note: Added a subtle pulse/placeholder background while it loads!
        >
          {isSpotifyInView && (
            <Spotify
              link="https://open.spotify.com/playlist/2evV79ueEZzZfI2oB9zfUb?si=QNgkubdwSFOOtnX5dfhuXA"
              width="100%"
              height={152}
            />
          )}
        </motion.div>

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
