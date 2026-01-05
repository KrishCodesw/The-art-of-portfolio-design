import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 mb-6 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-linear-to-t from-white/5 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Main Thought */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Ready to Build Something Great?
          <span className="block text-white/60">
            I'm available for freelance projects, consulting, and
            collaborations.
          </span>
        </h2>

        {/* Conceptual Divider */}
        <div className="w-24 h-1px bg-linear-to-r from-transparent via-white/40 to-transparent" />

        {/* Identity */}
        <p className="text-sm text-white/60">
          Krish Jain — Developer & Builder
        </p>

        {/* Socials */}
        <div className="flex gap-6 text-white/50">
          <a
            href="https://github.com/Krishcodesw"
            target="_blank"
            className="hover:text-white transition"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/krish-jain-445aa332a/"
            target="_blank"
            className="hover:text-white transition"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://x.com/KrishJainw"
            target="_blank"
            className="hover:text-white transition"
          >
            <SiX />
          </a>
        </div>

        {/* Closing Detail */}
        <p className="text-xs text-white/40">
          Still building — {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
