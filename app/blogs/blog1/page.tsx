"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";

export default function BlueprintToSeniorCodePost() {
  const { theme } = useTheme();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="space-y-10 pb-20"
    >
      {/* --- HEADER --- */}
      <motion.header
        variants={itemVariants}
        className="border-b pb-8 transition-colors duration-150 border-gray-200 dark:border-gray-800"
      >
        <h1
          className={`text-xl sm:text-2xl md:text-3xl tracking-wide font-sans mb-4 transition-colors duration-150 leading-tight ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          The Blueprint to Senior-Level Code: Reverse engineering a Modular
          Full-Stack Architecture.
        </h1>
        <div className="flex items-center space-x-4">
          <span
            className={`text-base font-sans transition-colors duration-150 ${
              theme === "dark" ? "text-sky-500" : "text-blue-700"
            }`}
          >
            Jan 26, 2026
          </span>
          <span className="text-gray-500 text-sm font-sans">• 5 min read</span>
        </div>
      </motion.header>

      {/* --- INTRO --- */}
      <motion.div variants={itemVariants} className="space-y-6">
        <p
          className={`text-lg font-sans leading-relaxed transition-colors duration-150 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Most apps fail quietly not because of bad features, but because their
          architecture couldn’t handle growth. Architecture is what determines
          whether your app grows or collapses under its own weight. If your
          project becomes harder to change with every feature, you’re
          accumulating architectural debt.
        </p>

        {/* --- ACTUAL IMAGE 1 --- */}
        <motion.div
          variants={itemVariants}
          className={`w-full rounded-xl overflow-hidden border mt-8 ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <Image
            src="/architecture.png"
            alt="Architecture for scalable full-stack applications without monorepos"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
        <p className="text-sm text-center text-gray-500 italic mt-2">
          Architecture for writing Scalable full-stack applications without
          Monorepos
        </p>

        <p
          className={`text-lg font-sans leading-relaxed transition-colors duration-150 mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          We are going to analyze this architectural diagram to understand how
          to build systems designed to grow.
        </p>
      </motion.div>

      {/* --- SECTION 1 & 2 --- */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h2
          className={`text-2xl font-bold font-sans mt-8 mb-4 ${
            theme === "dark" ? "text-gray-200" : "text-gray-900"
          }`}
        >
          1. Going 0–1
        </h2>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Let me set the context for this blog: The top two branches of the
          diagram, Separation of Concerns between the Client (Frontend) and the
          Server (Backend). Frameworks like Next.js blur the lines with
          server-side rendering, this diagram reminds us that logical separation
          is crucial.
        </p>

        <h2
          className={`text-2xl font-bold font-sans mt-12 mb-4 ${
            theme === "dark" ? "text-gray-200" : "text-gray-900"
          }`}
        >
          2. Setting Up the Frontend the Right Way
        </h2>

        <h3
          className={`text-xl font-semibold font-sans mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          2.1. UI Only Components
        </h3>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          These components should be purely visual. They take data in via props
          and render it. Location - <code>components/ui</code>. Why do this?
          Reusability.
        </p>

        <h3
          className={`text-xl font-semibold font-sans mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          2.2. Logical Components
        </h3>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          These components handle the heavy lifting. They make the API calls,
          they validate form inputs, and they decide what to show the user based
          on data. Location - Auth, Application logic. Often called the
          Container/Presentational pattern, this approach enforces a clear
          separation between side effects and rendering.
        </p>

        <h3
          className={`text-xl font-semibold font-sans mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          2.3. State Management
        </h3>
        <ul
          className={`list-disc list-inside space-y-2 mt-4 text-lg font-sans ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <li>
            <strong>The Zustand Store (useAuthStore):</strong> A single location
            in your <code>lib</code> folder that holds global data (like the
            current user).
          </li>
          <li>
            <strong>AuthInitializer:</strong> The diagram shows a crucial UX
            flow: running <code>fetchUser</code> on initial render. This checks
            the session immediately to decide if the user sees the dashboard or
            gets booted back to the login screen.
          </li>
          <li>
            <strong>logout function:</strong> Ensuring that when a user logs
            out, the entire app updates instantly.
          </li>
        </ul>

        <h3
          className={`text-xl font-semibold font-sans mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          2.4. Authentication Flow
        </h3>
        <ul
          className={`list-disc list-inside space-y-2 mt-4 text-lg font-sans ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <li>
            <strong>Sign-up/Sign-in:</strong> These components collect user
            credentials and post requests directly to the backend API.
          </li>
          <li>
            <strong>Protected Routes:</strong> Logic that wraps around pages to
            ensure only logged-in users can see specific content, otherwise
            redirecting them to the login page.
          </li>
        </ul>
      </motion.div>

      {/* --- SECTION 2 CONTINUED (Utility, DB, Hooks) --- */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h3
          className={`text-xl font-semibold font-sans mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          2.5. Utility Functions
        </h3>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Think of it like a toolbox for the application, containing logic that
          doesn’t belong in a component.
        </p>
        <ul
          className={`list-disc list-inside space-y-2 mt-4 text-lg font-sans ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <li>
            <strong>auth.utils.ts:</strong> Contains logic for cookie naming,
            session initialization, and handling tokens. Examples: Token
            expiration, Password hashing & Comparison.
          </li>
          <li>
            <strong>prismaclient.ts:</strong> Responsible for creating a Global
            Prisma Client. This is a senior-level pattern used to prevent
            "exhausting database connections" during hot-reloads in development.
          </li>
        </ul>

        {/* PRISMA CODE BLOCK */}
        <pre
          className={`p-4 rounded-xl overflow-x-auto text-sm font-mono border mt-4 ${
            theme === "dark"
              ? "bg-[#0d1117] text-[#c9d1d9] border-gray-800"
              : "bg-gray-50 text-gray-800 border-gray-200"
          }`}
        >
          <code>
            {`import { PrismaClient } from "./generated/prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = client;
}

export { client as prisma };`}
          </code>
        </pre>

        <h3
          className={`text-xl font-semibold font-sans mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          2.6. Setting up database with an ORM (Prisma/Drizzle)
        </h3>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Interestingly, this architecture includes a <code>prisma</code> folder
          containing <code>schema.prisma</code> and the prisma client. In a
          full-stack framework like Next.js, this allows the frontend logic to
          have a direct, type-safe understanding of the database structure.
        </p>

        <h3
          className={`text-xl font-semibold font-sans mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          2.7. Hooks
        </h3>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          We can imagine hooks as logic encapsulators. Instead of cluttering a
          component with <code>useEffect</code> and <code>fetch</code> calls,
          you move that logic into a custom hook like{" "}
          <code>useApplicationData()</code>.
        </p>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          A hook like <code>useAuth()</code> internally subscribes to your
          Zustand store to get the user's status. This abstraction decouples UI
          components from the state management implementation. Swapping Zustand
          with Redux or TanStack Query requires changes only within the hook
          layer.
        </p>
      </motion.div>

      {/* --- CHECKPOINT --- */}
      <motion.div
        variants={itemVariants}
        className={`p-6 rounded-xl border mt-10 ${
          theme === "dark"
            ? "bg-black border-gray-800"
            : "bg-white border-blue-100"
        }`}
      >
        <h3
          className={`text-xl font-bold font-sans mb-4 ${
            theme === "dark" ? "text-gray-200" : "text-black"
          }`}
        >
          Checkpoint — What Have We Learnt Yet?
        </h3>
        <ul
          className={`list-disc list-inside space-y-2 text-lg font-sans ${
            theme === "dark" ? "text-gray-300" : "text-black/80"
          }`}
        >
          <li>
            A very scalable frontend design fully setup with authentication,
            application logic and database setup as well.
          </li>
          <li>Where and how to place components in a modular fashion.</li>
          <li>Hooks, utility functions & State management connections.</li>
          <li>Understanding how data flows between the above flows listed.</li>
        </ul>
      </motion.div>

      {/* --- SECTION 3 (Backend) --- */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h2
          className={`text-2xl font-bold font-sans mt-12 mb-4 ${
            theme === "dark" ? "text-gray-200" : "text-gray-900"
          }`}
        >
          3. Setting Up the Backend the Right Way
        </h2>

        {/* --- ACTUAL IMAGE 2 --- */}
        <motion.div
          variants={itemVariants}
          className={`w-full rounded-xl overflow-hidden border mt-8 ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <Image
            src="/architecture.png"
            alt="Backend API Design Architecture"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <h3
          className={`text-xl font-semibold font-sans mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          3.1 API Design
        </h3>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Instead of one giant, messy file, advocate for{" "}
          <b>Separation by Domain</b> .<br />
          Using logical partitioning and connectivity.
        </p>

        <h3
          className={`text-xl font-semibold font-sans mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          3.2 The Authentication Branch
        </h3>
        <ul
          className={`list-disc list-inside space-y-2 mt-4 text-lg font-sans ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <li>
            <strong>Dedicated Endpoints:</strong> Specific routes for signup,
            signin, and logout.
          </li>
          <li>
            <strong>OAuth Integration:</strong> It manages the google callback,
            handling the handshake between your app and external providers.
          </li>
          <li>
            <strong>Utility Integration:</strong> This layer uses the{" "}
            <code>auth.utils.ts</code> mentioned in the frontend section to
            perform critical tasks like Password Hashing and Session
            Initialization before saving data.
          </li>
        </ul>

        <h3
          className={`text-xl font-semibold font-sans mt-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          3.3 Microservices & Scalability
        </h3>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          A key "Senior" detail in the diagram is the mention of External
          Microservices. Future Proofing: By separating your backend into clean
          API modules now, you can easily migrate a specific feature (like a
          payment engine or image processor) into its own independent
          microservice later without a total rewrite.
        </p>
      </motion.div>

      {/* --- SECTION 4 (Convergence) --- */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h2
          className={`text-2xl font-bold font-sans mt-12 mb-4 ${
            theme === "dark" ? "text-gray-200" : "text-gray-900"
          }`}
        >
          4: The Convergence: Prisma & Postgres
        </h2>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Everything in this architecture both the Frontend Logic and the
          Backend APIs eventually flows into the Prisma Client.
        </p>
        <ul
          className={`list-disc list-inside space-y-2 mt-4 text-lg font-sans ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <li>
            <strong>The Prisma Client:</strong> It acts as the “Translator”. It
            takes your clean TypeScript code and converts it into optimized SQL
            that your database understands.
          </li>
          <li>
            <strong>Managed Postgres:</strong> The final destination is a
            PostgreSQL Database. By using Prisma, you ensure that every piece of
            data entering this database is type-safe and follows your defined
            schema.
          </li>
        </ul>
      </motion.div>

      {/* --- CONCLUSION --- */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h2
          className={`text-2xl font-bold font-sans mt-12 mb-4 ${
            theme === "dark" ? "text-gray-200" : "text-gray-900"
          }`}
        >
          5: The Conclusion
        </h2>
        <p
          className={`text-lg font-sans leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          At its core, writing modular code isn’t about following a trend or
          adding complexity for the sake of it; it is about{" "}
          <strong>reducing the cost of change</strong>. Architecture is the
          “invisible floor” of your application if it’s weak, the app collapses
          as soon as you add a new feature. If it’s strong, like the blueprint
          we’ve deconstructed, the system remains predictable and manageable
          regardless of scale.
        </p>
        <p
          className={`text-lg font-sans leading-relaxed mt-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          By adopting this structure, you shift your mindset:
        </p>
        <ul
          className={`list-disc list-inside space-y-2 mt-4 text-lg font-sans ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <li>
            <strong>Isolate the UI:</strong> Keep your components "dumb" and
            beautiful so they remain reusable across any project.
          </li>
          <li>
            <strong>Encapsulate the Logic:</strong> Use custom hooks as the
            "glue" to ensure your UI never touches your data layer directly.
          </li>
          <li>
            <strong>Centralize the State:</strong> Use a global store like
            Zustand to maintain a single source of truth and kill prop-drilling
            forever.
          </li>
          <li>
            <strong>Secure the Backend:</strong> Treat every request as
            untrusted and organize your APIs by domain to ensure fault
            tolerance.
          </li>
          <li>
            <strong>Trust the Schema:</strong> Let an ORM like Prisma be your
            type-safe guardrail, connecting your database and logic with total
            consistency.
          </li>
        </ul>
      </motion.div>
    </motion.article>
  );
}
