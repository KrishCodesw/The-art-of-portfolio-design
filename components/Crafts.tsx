"use client";

import { motion, Variants } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { ArrowUpRight, Fullscreen } from "lucide-react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { BiSolidRightArrow } from "react-icons/bi";
const CraftsKJ = () => {
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
        className={`flex items-start justify-center pt-12  px-4 sm:px-6 md:px-8  pb-0 transition-colors duration-300 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-2xl w-full mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            id="name"
            className={`text-xl sm:text-2xl text-left font-sans mb-3 transition-colors duration-150 ${
              theme === "dark" ? "text-gray-200" : "text-gray-950"
            }`}
          >
            Built
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
              className={`text-sm sm:text-base md:text-lg pt-2 text-left font-sans transition-colors duration-150 ${
                theme === "dark" ? "text-gray-300" : "text-black"
              }`}
            >
              <a
                href="https://jansamwaad.vercel.app/"
                target="_blank"
                className="flex gap-1 underline  underline-offset-4 "
              >
                JanSamvaad {<ArrowUpRight />}
              </a>

              <span
                className={`bg-linear-to-r pt-0  text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                Report, track, and resolve your city's problems. The app uniting
                citizens for action.
              </span>
            </motion.p>
            <motion.div
              whileHover={{
                scale: 1.06,

                boxShadow: "0px 12px 30px rgba(177, 150, 180, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="p-1 bg-zinc-900 aspect-video mt-5 relative w-full overflow-hidden rounded-2xl  "
            >
              <motion.a href="https://jansamwaad.vercel.app/" target="_blank">
                <Image
                  src="/jansamvaad.png"
                  width={900}
                  height={400}
                  className="rounded-2xl w-full h-full object-cover"
                  alt="Picture of the website "
                />
              </motion.a>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className={`text-sm sm:text-base md:text-lg pt-8 text-left font-sans transition-colors duration-150 ${
                theme === "dark" ? "text-gray-300" : "text-black"
              }`}
            >
              <a
                href="https://metastash1final.vercel.app/"
                target="_blank"
                className="flex gap-1 underline  underline-offset-4 "
              >
                MetaStash {<ArrowUpRight className="" />}
              </a>

              <span
                className={`bg-linear-to-r pt-0  text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                Your Knowledge, Simplified. Access, organize, and share your
                insights effortlessly.
              </span>
            </motion.p>
            <motion.div
              whileHover={{
                scale: 1.06,

                boxShadow: "0px 12px 30px rgba(177, 150, 180, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="p-1 bg-zinc-900 aspect-video mt-5 relative w-full overflow-hidden rounded-2xl  "
            >
              <motion.a
                href="https://metastash1final.vercel.app/"
                target="_blank"
              >
                <Image
                  src="/meta.png"
                  width={900}
                  height={400}
                  className="rounded-2xl w-full h-full object-fill"
                  alt="Picture of the author"
                />
              </motion.a>
            </motion.div>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className={`text-sm sm:text-base md:text-lg pt-8 text-left font-sans transition-colors duration-150 ${
                theme === "dark" ? "text-gray-300" : "text-black"
              }`}
            >
              <a
                href="https://github.com/KrishCodesw/Room-based-ChatAPP"
                target="_blank"
                className="flex gap-1 underline  underline-offset-4 "
              >
                Chat App {<ArrowUpRight className="" />}
              </a>

              <span
                className={`bg-linear-to-r pt-0  text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                Real time websocket based chat application for people to chat
                securely in a room.
              </span>
            </motion.p>
            <motion.div
              whileHover={{
                scale: 1.06,

                boxShadow: "0px 12px 30px rgba(177, 150, 180, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="p-1 bg-zinc-900 aspect-video mt-5 relative w-full overflow-hidden rounded-2xl  "
            >
              <motion.a
                href="https://github.com/KrishCodesw/Room-based-ChatAPP"
                target="_blank"
              >
                <Image
                  src="/chat.png"
                  width={900}
                  height={400}
                  className="rounded-2xl w-full h-full object-fit"
                  alt="Picture of the website "
                />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className={`text-sm sm:text-base md:text-lg pt-8 text-left font-sans transition-colors duration-150 ${
                theme === "dark" ? "text-gray-300" : "text-black"
              }`}
            >
              <a
                href="https://github.com/KrishCodesw"
                target="_blank"
                className="flex gap-1  "
              >
                Check out my other Projects & Exercises here-
                {<SiGithub className="w-6 h-6" />}
                <br />
                <br />
              </a>

              <span
                className={`bg-linear-to-r   text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                -Reminder app with Twilio
                <br />
              </span>
              <span
                className={`bg-linear-to-r pt-0  text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                -Paytm,with a twist
                <br />
              </span>
              <span
                className={`bg-linear-to-r pt-0  text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                -Auto Email Terminal based AI Agent <br />
              </span>
              <span
                className={`bg-linear-to-r pt-0  text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                -Deploying a containerized Node.js application to ECR via CI/CD
                pipeline
                {". "}
                <br />
              </span>
              <span
                className={`bg-linear-to-r pt-0  text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                -Deploying a monorepo to a VM via Docker and CI/CD.
                {". "}
                <br />
              </span>
              <span
                className={`bg-linear-to-r pt-0  text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                -Containerizing different applications via Docker and deploying
                them in various methods like EC2 , ASGs, ECS, ECR.
                {". "}
                <br />
              </span>
              <span
                className={`bg-linear-to-r pt-0  text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "bg-gray-400" : "bg-gray-800"
                } bg-clip-text text-transparent`}
              >
                -Monitoring the above via tools like NewRelic , Prometheus and
                Grafana
                {". "}
                <br />
              </span>
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
export default CraftsKJ;
