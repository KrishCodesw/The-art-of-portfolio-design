"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

// --- Data Objects for cleaner JSX ---
const mainProjects = [
  {
    title: "JanSamvaad",
    description:
      "Report, track, and resolve your city's problems. The app uniting citizens for action.",
    link: "https://jansamwaad.vercel.app/",
    image: "/jansamvaad.png",
  },
  {
    title: "getSQL",
    description:
      "The schema-aware SQL agent. Generate queries, visualize relationships, and export production-ready ER diagrams instantly.",
    link: "https://getsql.vercel.app/",
    image: "/getsql.png",
  },
  {
    title: "MetaStash",
    description:
      "Your Knowledge, Simplified. Access, organize, and share your insights effortlessly.",
    link: "https://metastash1final.vercel.app/",
    image: "/meta.png",
  },
  {
    title: "Chat App",
    description:
      "Real-time websocket based chat application for people to chat securely in a room.",
    link: "https://github.com/KrishCodesw/Room-based-ChatAPP",
    image: "/chat.png",
  },
];

const otherProjects = [
  "Reminder app with Twilio",
  "Paytm, with a twist",
  "Auto Email Terminal based AI Agent",
  "Deploying a containerized Node.js application to ECR via CI/CD pipeline",
  "Deploying a monorepo to a VM via Docker and CI/CD.",
  "Containerizing different applications via Docker and deploying them in various methods like EC2, ASGs, ECS, ECR.",
  "Monitoring the above via tools like NewRelic, Prometheus and Grafana",
];

// --- Sub-components for better organization ---
const ProjectCard = ({ project, theme, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Triggers slightly before coming into view
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col group"
    >
      <div className="relative w-full aspect-video  overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/50">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={project.image}
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            alt={`Screenshot of ${project.title}`}
          />
        </a>
      </div>
      <div className="mt-4 flex flex-col items-start">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1 text-lg font-medium transition-colors ${
            theme === "dark"
              ? "text-gray-200 hover:text-white"
              : "text-gray-900 hover:text-black"
          }`}
        >
          {project.title}{" "}
          <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
        <p
          className={`mt-2 text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
        >
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const CraftsKJ = () => {
  const { theme } = useTheme();

  return (
    <section
      id="disable-selection"
      className={`min-h-screen py-20 px-4 sm:px-6 md:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1
            className={`text-2xl sm:text-3xl font-sans tracking-tight ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}
          >
            Built
          </h1>
          <p
            className={`mt-2 text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
          >
            A selection of my recent work and technical experiments.
          </p>
        </motion.div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {mainProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              theme={theme}
              index={index}
            />
          ))}
        </div>

        {/* Other Projects / Lab Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-800/50"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2
              className={`text-xl font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-900"}`}
            >
              More Experiments & Infrastructure
            </h2>
            <a
              href="https://github.com/KrishCodesw"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 transition-transform ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
            >
              <SiGithub className="w-5 h-5" />
            </a>
          </div>

          {/* Replaced grid with columns-1 sm:columns-2 */}
          <ul className="columns-1 sm:columns-2 gap-x-8">
            {otherProjects.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                // Added mb-5 for consistent vertical gap, and break-inside-avoid to prevent clipping
                className={`flex items-start text-sm mb-5 break-inside-avoid ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="mr-2 mt-[2px] text-[10px] opacity-50">▹</span>
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsKJ;
