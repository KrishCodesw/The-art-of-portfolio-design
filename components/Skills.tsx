"use client";

import { motion, Variants } from "framer-motion";
import { useTheme } from "./ThemeProvider";
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
  SiShadcnui,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTurborepo,
  SiFastapi,
  SiSupabase,
  SiPrisma,
  SiVercel,
  SiGithubactions,
  SiGithub,
  SiDocker,
  SiPrometheus,
  SiGrafana,
  SiAmazonec2,
  SiNewrelic,
  SiKubernetes,
} from "react-icons/si";

interface SkillItem {
  name: string;
  Icon?: React.ElementType; // Icon is optional
}

const WEB_DEV_SKILLS: SkillItem[] = [
  { name: "NextJS", Icon: SiNextdotjs },

  { name: "React", Icon: FaReact },
  { name: "TailwindCSS", Icon: SiTailwindcss },
  { name: "Shadcn", Icon: SiShadcnui }, // Using FaCss3 as a placeholder for Shadcn if no dedicated icon
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
  { name: "Supabase", Icon: SiSupabase },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Turborepo", Icon: SiTurborepo },
  // { name: "fastAPI", Icon: SiFastapi },
];

const DevopsArray: SkillItem[] = [
  { name: "Github", Icon: SiGithub },
  { name: "GithubActions", Icon: SiGithubactions },
  { name: "AWS", Icon: FaAws },
  { name: "Docker", Icon: SiDocker },
  { name: "NewRelic", Icon: SiNewrelic },
  { name: "Prometheus", Icon: SiPrometheus },
  { name: "Grafana", Icon: SiGrafana },
  { name: "Kubernetes", Icon: SiKubernetes },
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
      className={`flex items-start justify-center px-4 sm:px-6 md:px-8 pt-10 pb-2  sm:pb-10 md:pb-6 transition-colors duration-300 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-2xl w-full mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          id="name"
          className={`text-lg sm:text-xl md:text-2xl text-left font-sans mb-3 transition-colors duration-150 ${
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
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className={`text-sm sm:text-base md:text-lg text-left font-sans mb-2 transition-colors duration-150 ${
              theme === "dark" ? "text-gray-300" : "text-black"
            }`}
          >
            Web-development:
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={itemVariants}
          className={`flex flex-wrap gap-3 pt-4 justify-start mb-6 transition-colors duration-150 ${
            theme === "dark" ? "text-amber-100" : "text-black"
          }`}
        >
          {WEB_DEV_SKILLS.map((skill, index) => (
            <motion.span
              key={index}
              variants={skillTagVariants}
              className={`flex items-center text-xs md:text-sm  py-1 px-3 rounded-full border whitespace-nowrap
                          ${
                            theme === "dark"
                              ? "border-gray-600 bg-black text-gray-100"
                              : "border-gray-300 bg-gray-100 text-gray-900"
                          }
                          hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer`}
            >
              {skill.Icon && (
                <skill.Icon className="w-4   h-4 md:w-4 md:h-4 mr-2" />
              )}
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={`flex flex-wrap gap-2 justify-start mb-6 transition-colors duration-150 ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          {BackendArray.map((skill, index) => (
            <motion.span
              key={index}
              variants={skillTagVariants}
              className={`inline-flex items-center text-xs md:text-sm  py-1 px-3 rounded-full border whitespace-nowrap
                          ${
                            theme === "dark"
                              ? "border-gray-600 bg-black text-gray-100"
                              : "border-gray-300 bg-gray-100 text-gray-900"
                          }
                          hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer`}
            >
              {skill.Icon && (
                <skill.Icon className="w-4 h-4 md:w-4 md:h-4 mr-2" />
              )}
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className={`text-sm sm:text-base md:text-lg text-left font-sans mb-2 transition-colors duration-150 ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          Devops:
        </motion.p>
        <motion.div
          variants={itemVariants}
          className={`flex flex-wrap gap-2 justify-start mb-6 transition-colors duration-150 ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          {DevopsArray.map((skill, index) => (
            <motion.span
              key={index}
              variants={skillTagVariants}
              className={`inline-flex items-center text-xs md:text-sm  py-1 px-3 rounded-full border whitespace-nowrap
                          ${
                            theme === "dark"
                              ? "border-gray-600 bg-black text-gray-100"
                              : "border-gray-300 bg-gray-100 text-gray-900"
                          }
                          hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer`}
            >
              {skill.Icon && (
                <skill.Icon className="w-4 h-4 md:w-4 md:h-4 mr-2" />
              )}
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skillbar;
