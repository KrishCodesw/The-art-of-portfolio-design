"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

// Mock data: Replace with your actual fetching logic later
const posts = [
  {
    slug: "blog1",
    title: "The Blueprint to Senior-Level Code",
    date: "Jan 26, 2026",
    summary:
      "Reverse engineering a Modular Full-Stack Architecture. Learn how to build scalable full-stack applications without monorepos.",
  },
];

const BlogIndex = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1, // Slightly faster delay since we are already on the page
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
      className="space-y-8"
    >
      {/* Page Header */}
      <motion.div variants={itemVariants}>
        <h1
          className={`text-xl  tracking-tight font-sans sm:text-2xl mb-4 transition-colors duration-150 ${
            theme === "dark" ? "text-gray-200" : "text-gray-950"
          }`}
        >
          Blogs
        </h1>
        <p
          className={`text-lg font-sans transition-colors duration-150 ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          Thoughts, tutorials, and insights about web development, devops, web3
          and my career journey.
        </p>
      </motion.div>

      {/* Blog Post List */}
      <motion.div
        variants={itemVariants}
        className={`space-y-7 pt-10 transition-colors duration-150 ${
          theme === "dark" ? "border-gray-800" : "border-gray-200"
        }`}
      >
        {posts.map((post) => (
          <motion.article
            key={post.slug}
            variants={itemVariants}
            className="group relative flex flex-col items-start justify-between"
          >
            <h2
              className={`text-2xl  tracking-tight font-sans transition-colors duration-150 ${
                theme === "dark"
                  ? "text-gray-100 group-hover:text-sky-500"
                  : "text-gray-900 group-hover:text-blue-700"
              }`}
            >
              <Link href={`/blogs/${post.slug}`}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </h2>

            <p
              className={`mt-4 line-clamp-3 font-sans transition-colors duration-150 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {post.summary}
            </p>

            <div
              className={`mt-4 flex items-center text-sm font-medium font-sans transition-colors duration-150 ${
                theme === "dark" ? "text-sky-500" : "text-blue-700"
              }`}
            >
              Read article{" "}
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default BlogIndex;
