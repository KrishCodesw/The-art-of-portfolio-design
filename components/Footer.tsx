export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 py-16 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-linear-to-t from-white/5 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Main Thought */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Code is temporary.
          <span className="block text-white/60">Ideas aren’t.</span>
        </h2>

        {/* Conceptual Divider */}
        <div className="w-24 h-1px bg-linear-to-r from-transparent via-white/40 to-transparent" />

        {/* Identity */}
        <p className="text-sm text-white/60">
          Krish Jain — Developer & Builder
        </p>

        {/* Socials */}
        <div className="flex gap-6 text-white/50">
          <a href="#" className="hover:text-white transition">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition">
            X
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
