"use client";

import { motion, Variants } from "framer-motion";
import { useTheme } from "../ThemeProvider";
import {
  FaReact,
  FaFigma,
  FaCss3,
  FaNodeJs,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTurborepo,
  SiFastapi,
  SiPrisma,
  SiVercel,
  SiBun,
  SiGithubactions,
  SiSocketdotio,
} from "react-icons/si";

interface SkillItem {
  name: string;
  Icon?: React.ElementType; // Icon is optional
}

const WEB_DEV_SKILLS: SkillItem[] = [
  { name: "NextJS", Icon: SiNextdotjs },
  { name: "React", Icon: FaReact },
  { name: "TailwindCSS", Icon: SiTailwindcss },
  { name: "Shadcn", Icon: FaCss3 }, // Using FaCss3 as a placeholder for Shadcn if no dedicated icon
  { name: "Typescript", Icon: SiTypescript },
  // { name: "UI/UX", Icon: FaFigma }, // Figma icon for UI/UX concepts
  { name: "Motion", Icon: SiFramer }, // Using React icon as a placeholder for Framer Motion
  { name: "Figma", Icon: FaFigma },
  // { name: "Express", Icon: SiExpress },
  // { name: "Node.js", Icon: FaNodeJs },
  // { name: "MongoDB", Icon: SiMongodb },
  // { name: "PostgreSQL", Icon: SiPostgresql },
  // { name: "Docker", Icon: FaDocker },
  // { name: "AWS", Icon: FaAws },
  { name: "Vercel", Icon: SiVercel },
  // { name: "GitHub Actions", Icon: SiGithubactions },
];

const BackendArray: SkillItem[] = [
  { name: "Express", Icon: SiExpress },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Prisma", Icon: SiPrisma },

  { name: "Bun", Icon: SiBun },
  { name: "Turborepo", Icon: SiTurborepo },
  { name: "fastAPI", Icon: SiFastapi },
];
const Skillbar = () => {
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

  const skillTagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="disable-selection"
      className={` flex items-start pt-10 justify-center px-4 transition-colors duration-300 ${
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
          Skills
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
            Web-development :
          </motion.p>
          <motion.div className="flex"></motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`text-base md:text-xl font-sans flex pt-4  text-left mb-6 leading-relaxed transition-colors  duration-300 ${
            theme === "dark" ? "text-amber-100" : "text-black"
          }`}
        >
          {WEB_DEV_SKILLS.map((skill, index) => (
            <motion.span
              key={index}
              variants={skillTagVariants} // Apply skill tag specific animation
              className={`flex items-center justify-between text-sm py-1 px-3  rounded-full border 
                          ${
                            theme === "dark"
                              ? "border-gray-600 bg-black text-gray-100"
                              : "border-gray-300 bg-gray-100 text-gray-800"
                          } 
                          hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer`}
            >
              {skill.Icon && <skill.Icon className="w-4 h-4 mr-2" />}{" "}
              {/* Render icon if available */}
              {skill.name}
            </motion.span>
          ))}
          {/* NextJS, React, TailwindCSS, Shadcn, Typescript, UI/UX, Motion, Figma.
          Express */}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className={`text-sm md:text-lg font-sans flex text-left mb-6 leading-relaxed transition-colors  duration-300 ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          {BackendArray.map((skill, index) => (
            <motion.span
              key={index}
              variants={skillTagVariants}
              className={`flex items-center justify-between text-sm py-1 px-3  rounded-full border 
                          ${
                            theme === "dark"
                              ? "border-gray-600 bg-black text-gray-100"
                              : "border-gray-300 bg-gray-100 text-gray-800"
                          } 
                          hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer`}
            >
              {skill.Icon && <skill.Icon className="w-4 h-4 mr-2" />}{" "}
              {/* Render icon if available */}
              {skill.name}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Skillbar;
