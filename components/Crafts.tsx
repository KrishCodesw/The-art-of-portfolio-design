"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

// --- Data Objects ---
const mainProjects = [
  {
    title: "TCET's Research Culture Development Cell",
    description:
      "Managing 2,000+ student projects & publications annually, from assignment to public showcase - without the operational overhead. One platform that brings structure, visibility, and accountability to the entire academic project lifecycle.",
    link: "https://showcase.tcetcercd.in/showcase",
    image: "/tcetcoe.png",
  },
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
    title: "Solana Nexus",
    description:
      "Solana Nexus is a high-performance web dashboard that modernizes token lifecycle management for the Solana Token-2022 era. By replacing fragmented command-line tools with an intuitive, caching-optimized interface, it empowers developers to track, mint, and distribute digital assets with enterprise-grade efficiency.",
    link: "https://solananexus.vercel.app/",
    image: "/solananexus.png",
  },
  {
    title: "MetaStash",
    description:
      "Your Knowledge, Simplified. Access, organize, and share your insights effortlessly.",
    link: "https://metastash1final.vercel.app/",
    image: "/meta.png",
  },
  {
    title: "Want to see more? Visit my GitHub!",
    description:
      "Or wanna collaborate on some ? Drop a mail/ DM on X/LinkedIn anytime!.",
    link: "https://metastash1final.vercel.app/",
    image: "/comingsoon.jpg",
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

// --- Sub-components ---
const ProjectCard = ({ project, theme, index }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Default to true if text is long to prevent layout shift on mount
  const [isOverflowing, setIsOverflowing] = useState(
    project.description.length > 60,
  );
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        const el = textRef.current;
        // Temporarily force 1-line clamp to measure accurate scroll vs client height
        const originalDisplay = el.style.display;
        const originalWebkitLineClamp = el.style.webkitLineClamp;
        const originalWebkitBoxOrient = el.style.webkitBoxOrient;
        const originalOverflow = el.style.overflow;

        el.style.display = "-webkit-box";
        el.style.webkitLineClamp = "1";
        el.style.webkitBoxOrient = "vertical";
        el.style.overflow = "hidden";

        const overflowing = el.scrollHeight > el.clientHeight;

        // Restore original styles
        el.style.display = originalDisplay;
        el.style.webkitLineClamp = originalWebkitLineClamp;
        el.style.webkitBoxOrient = originalWebkitBoxOrient;
        el.style.overflow = originalOverflow;

        setIsOverflowing(overflowing);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col group w-full"
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/50">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={project.image}
            fill
            className="object-fill object-top transition-transform duration-500 ease-out group-hover:scale-105"
            alt={`Screenshot of ${project.title}`}
          />
        </a>
      </div>

      <div className="mt-4 flex flex-col items-start w-full">
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

        <div className="mt-2 w-full">
          <p
            ref={textRef}
            className={`text-sm leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } ${!isExpanded ? "line-clamp-1" : ""}`}
          >
            {project.description}
          </p>

          {isOverflowing && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-1 mt-1 text-xs font-medium hover:opacity-80 transition-opacity ${
                theme === "dark"
                  ? "text-gray-500 hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {isExpanded ? "Show less" : "Read more"}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-3 h-3" />
              </motion.div>
            </button>
          )}
        </div>
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
            className={`text-2xl sm:text-3xl font-sans tracking-tight ${
              theme === "dark" ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Recent Builds
          </h1>
          <p
            className={`mt-2 text-base ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
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
              className={`text-xl font-medium ${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              More Experiments & Infrastructure
            </h2>
            <a
              href="https://github.com/KrishCodesw"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 transition-transform ${
                theme === "dark"
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <SiGithub className="w-5 h-5" />
            </a>
          </div>

          <ul className="columns-1 sm:columns-2 gap-x-8">
            {otherProjects.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
